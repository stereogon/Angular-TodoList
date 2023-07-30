import { Component } from '@angular/core';
import { Task } from '../types';

let seq = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoapp';
  inputValue: string = '';
  tasks: Task[] = [];

  getTotalTasks() {
    let totalTasks: number = this.getTasks()?.length | 0;
    return totalTasks;
  }

  getRemainingTasks() {
    let remainingTasks: number =
      this.getTasks()?.filter((task: Task) => {
        return !task.isCompleted;
      }).length | 0;

    return remainingTasks;
  }

  getTasks() {
    return this.tasks;
  }

  addTask() {
    if (this.inputValue === '') {
      return;
    }

    this.tasks.push({
      id: seq++,
      task_brief: this.inputValue,
      isCompleted: false,
    });

    this.tasks.sort((a: Task, b: Task) => {
      if (a.isCompleted === b.isCompleted) {
        return a.id - b.id;
      }

      return a.isCompleted ? 1 : -1;
    });

    this.inputValue = '';
  }

  onStatusChange(id: number) {
    let newTasks = this.tasks.map((task: Task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }

      return task;
    });

    this.tasks = [...newTasks].sort((a: Task, b: Task) => {
      if (a.isCompleted === b.isCompleted) {
        return a.id - b.id;
      }

      return a.isCompleted ? 1 : -1;
    });
  }

  onDelete(id: number) {
    let newTasks = this.tasks.filter((task: Task) => {
      return id !== task.id;
    });

    this.tasks = [...newTasks];
  }

  onMessage(message: string) {
    this.inputValue = message;
    this.addTask();
  }
}
