import { Component, Input } from '@angular/core';
import { Task } from 'src/types';

@Component({
  selector: 'app-task-element-component',
  templateUrl: './task-element-component.component.html',
  styleUrls: ['./task-element-component.component.css']
})
export class TaskElementComponentComponent {
  @Input()
  task!: Task;

  @Input()
  onStatusChange!: Function;

  @Input()
  onDelete!: Function; 

  handleClick() {
    this.onStatusChange(this.task.id);
  }

  handleDelete() {
    this.onDelete(this.task.id);
  }
}
