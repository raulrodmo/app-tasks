import { Component, OnInit,  ChangeDetectorRef} from '@angular/core';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  generateRandomId(): number {
    return Math.floor(Math.random() * 10000);
  }

  task: Task = {
    id: this.generateRandomId(), // O ID será atribuído pelo serviço quando a tarefa for criada
    name: '',
    details: '',
    priority: '',
    project: '',
    status: '',
    responsible: '',
    deadline: new Date().toISOString().split('T')[0] // Inicialmente a data de vencimento é a data atual
  };

  editMode = false; // Renomeado de 'edit' para 'editMode' para clareza
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getTasks();
  }

  private getTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.cdr.detectChanges(); // Força a detecção de mudanças
      },
      error: (err) => console.error('Error fetching tasks:', err)
    });
  }

  addTask() {
    // Adiciona mensagens de depuração para verificar o estado dos dados
    console.log('Task data before adding:', this.task);
  
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!this.task.name || !this.task.priority || !this.task.project || !this.task.status || !this.task.responsible || !this.task.deadline) {
      console.error('Invalid task data. Ensure all fields are filled.');
      return; // Retorna para evitar enviar dados inválidos
    }
  
    // Cria o novo item de tarefa
    const data: Task = {
      id: this.task.id, // O ID pode ser removido se for gerado automaticamente pelo backend
      name: this.task.name,
      details: this.task.details,
      priority: this.task.priority,
      project: this.task.project,
      status: this.task.status,
      responsible: this.task.responsible,
      deadline: this.task.deadline
    };
  
    // Envia os dados para o serviço
    this.taskService.createTask(data).subscribe({
      next: (response) => {
        console.log('Task added successfully:', response);
        this.getTasks(); // Atualiza a lista de tarefas
        this.resetForm();
      },
      error: (err) => console.error('Error adding task:', err)
    });
  }

  setTaskEdit(task: Task): void {
    this.task = { ...task };
    this.editMode = true;
  }

  resetForm(): void {
    this.task = {
      id: this.generateRandomId(), // O ID será atribuído pelo serviço quando a tarefa for criada
      name: '',
      details: '',
      priority: '',
      project: '',
      status: '',
      responsible: '',
      deadline: new Date().toISOString().split('T')[0]
    };
    this.editMode = false;
  }

  removeTask(task: Task): void {
    this.taskService.deleteTask(task.id).subscribe(
      () => {
        console.log('Task deleted:', task);
        this.getTasks();
      },
      (error) => console.error('Error deleting task:', error)
    );
  }

  updateTask(): void {
    if (!this.isValidTask(this.task)) {
      console.error('Invalid task data');
      return;
    }

    this.toggleNewTaskForm()

    this.taskService.editTask(this.task).subscribe(
      (response: Task) => {
        console.log('Task updated:', response);
        this.getTasks();
        this.resetForm();
      },
      (error) => console.error('Error updating task:', error)
    );
  }

  private isValidTask(task: Task): boolean {
    return task.name.trim().length > 0 && task.priority.trim().length > 0 && task.project.trim().length > 0;
  }

  toggleNewTaskForm(): void {
    const mainNewTask = document.querySelector('.new-task');
    if (mainNewTask) {
      mainNewTask.classList.toggle('new-task-active');
      mainNewTask.classList.toggle('new-task-desactive');
    }
  }
}