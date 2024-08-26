import { Data } from "@angular/router";

export interface Task {
    id:number;
    name: string;
    details: string;
    priority: string;
    project: string;
    status: string;
    responsible: string;
    deadline: string;
  }