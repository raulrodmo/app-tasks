import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../tasks/task.model';
import { count, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

  mainNewTaskActive() {
    const mainNewTask = document.querySelector('.new-task');
    mainNewTask?.classList.toggle('new-task-active')
    mainNewTask?.classList.toggle('new-task-desactive')
  }
}
