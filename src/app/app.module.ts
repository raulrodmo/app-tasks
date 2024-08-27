import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OrderModule  } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemTaskService } from '../database/data.services'
import { NgApexchartsModule } from 'ng-apexcharts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ButtonNewTaskComponent } from './main/button-new-task/button-new-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskPeriodComponent } from './main/task-period/task-period.component';
import { ButtonCancelComponent } from './main/button-cancel/button-cancel.component';
import { ButtonDeleteComponent } from './tasks/button-delete/button-delete.component';
import { ButtonViewComponent } from './tasks/button-view/button-view.component';
import { ButtonEditComponent } from './tasks/button-edit/button-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ButtonNewTaskComponent,
    DashboardComponent,
    TasksComponent,
    TaskPeriodComponent,
    ButtonCancelComponent,
    ButtonDeleteComponent,
    ButtonViewComponent,
    ButtonEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    OrderModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemTaskService),
    NgApexchartsModule
  ],
  providers: [[provideRouter(routes)]],
  bootstrap: [AppComponent]
})
export class AppModule { }
