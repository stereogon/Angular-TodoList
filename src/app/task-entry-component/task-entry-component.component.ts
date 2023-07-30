import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-entry-component',
  templateUrl: './task-entry-component.component.html',
  styleUrls: ['./task-entry-component.component.css']
})
export class TaskEntryComponentComponent {
  @Input()
  value!: string;

  @Output() message = new EventEmitter<string>();

  clickHandler(inputValue: string) {
    this.value = inputValue;
    this.message.emit(this.value);
    this.value = "";
  }
}
