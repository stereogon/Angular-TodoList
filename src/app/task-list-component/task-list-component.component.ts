import { Component, EventEmitter, Input } from '@angular/core';
import { Task } from 'src/types';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css'],
})
export class TaskListComponentComponent {
  @Input()
  tasks!: Task[];

  @Input()
  onDelete!: Function;

  @Input() totalTasks!: number;
  @Input() remainingTasks!: number;

  @Input() onStatusChange!: Function;
}
