import { Component, Input, OnInit } from '@angular/core';
import {ITask} from '../app.component';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.components.css']
})
export class TaskCompontent {
  @Input() item;
  @Input() index;
  @Input() tasks;


  toggle(task: ITask) { // переключатель
    task.complete = !task.complete;
  }

  remove(ind: number) {
    this.tasks.splice(ind, 1);
  }
}
