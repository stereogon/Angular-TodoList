import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskElementComponentComponent } from './task-element-component.component';

describe('TaskElementComponentComponent', () => {
  let component: TaskElementComponentComponent;
  let fixture: ComponentFixture<TaskElementComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskElementComponentComponent]
    });
    fixture = TestBed.createComponent(TaskElementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
