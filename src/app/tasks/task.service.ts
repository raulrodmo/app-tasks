import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasksUrl = 'api/tasks/';
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createTask(task: Task): Observable<Task> {
      return this.http.post<Task>(this.tasksUrl, task).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editTask(task: Task): Observable<any> {
    return this.http.put(this.tasksUrl + task.id, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(this.tasksUrl + id);
  }

}