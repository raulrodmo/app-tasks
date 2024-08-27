import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexXAxis, ApexYAxis, ApexAxisChartSeries } from 'ng-apexcharts';
import { Task } from '../../tasks/task.model';
import { TaskService } from '../../tasks/task.service';

@Component({
  selector: 'app-task-period',
  templateUrl: './task-period.component.html',
  styleUrls: ['./task-period.component.css']
})
export class TaskPeriodComponent implements OnInit {
  tasks: Task[] = [];
  deadlines: string[] = [];
  taskCounts: number[] = [];

  chartOptions: ApexChart = {
    type: 'line',
    height: 350
  };

  xaxisOptions: ApexXAxis = {
    categories: this.deadlines
  };

  yaxisOptions: ApexYAxis = {
    labels: {
      formatter: (value: number) => Math.round(value).toString()
    },
    tickAmount: 5
  };

  chartSeries: ApexAxisChartSeries = [
    {
      name: 'Número de Tarefas',
      data: this.taskCounts
    }
  ];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;

      const formattedDates = this.tasks.map(task => {
        const [day, month] = task.deadline.split('/').map(Number);
        return `${day}/${month}`;
      });

      this.aggregateTasksByDate(formattedDates);

      this.chartSeries = [
        {
          name: 'Número de Tarefas',
          data: this.taskCounts
        }
      ];

      this.xaxisOptions = {
        categories: this.deadlines
      };
    });
  }

  private aggregateTasksByDate(dates: string[]): void {
    const dateCountMap = dates.reduce((acc, date) => {
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    this.deadlines = Object.keys(dateCountMap).sort();
    this.taskCounts = this.deadlines.map(date => dateCountMap[date]);
  }
}
