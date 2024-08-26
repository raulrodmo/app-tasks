import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNewTaskComponent } from './button-new-task.component';

describe('ButtonNewTaskComponent', () => {
  let component: ButtonNewTaskComponent;
  let fixture: ComponentFixture<ButtonNewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonNewTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
