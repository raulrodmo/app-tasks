import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPeriodComponent } from './task-period.component';

describe('TaskPeriodComponent', () => {
  let component: TaskPeriodComponent;
  let fixture: ComponentFixture<TaskPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskPeriodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
