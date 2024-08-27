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
    id: this.generateRandomId(), 
    name: '',
    details: '',
    priority: '',
    project: '',
    status: '',
    responsible: '',
    deadline: new Date().toISOString().split('T')[0] 
  };

  editMode = false; 
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getTasks();
    console.log('ngOnInit')
  }

  private getTasks() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        //this.cdr.detectChanges(); 
      },
      
      error: (err) => console.error('Error fetching tasks:', err)
    });
    console.log('chamou get')
  }

  addTask(task: Task) {
    
    console.log('Task data before adding:', this.task);
  
    if (!this.task.name || !this.task.priority || !this.task.project || !this.task.status || !this.task.responsible || !this.task.deadline) {
      console.error('Invalid task data. Ensure all fields are filled.');
      return; 
    }
  
    const data: Task = {
      id: this.task.id,
      name: this.task.name,
      details: this.task.details,
      priority: this.task.priority,
      project: this.task.project,
      status: this.task.status,
      responsible: this.task.responsible,
      deadline: this.task.deadline
    };
  
    this.taskService.createTask(data).subscribe({
      next: (response) => {
        console.log('Task added successfully:', response);
        this.getTasks(); 
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
    console.log('resetting form');
    this.task = {
      id: this.generateRandomId(), 
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
        console.log('Task deleted:', task.id);
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
