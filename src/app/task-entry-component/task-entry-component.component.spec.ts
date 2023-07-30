import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEntryComponentComponent } from './task-entry-component.component';

describe('TaskEntryComponentComponent', () => {
  let component: TaskEntryComponentComponent;
  let fixture: ComponentFixture<TaskEntryComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskEntryComponentComponent]
    });
    fixture = TestBed.createComponent(TaskEntryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
