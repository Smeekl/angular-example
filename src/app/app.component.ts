import { Component } from '@angular/core';

export interface ITask {
  title: string;
  complete: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello from HAI';
  appName = 'Angular practice';
  tasks: ITask[] = [
    {
      title: 'Теория вероятности',
      complete: true
    },
    {
      title: 'Базы данных',
      complete: true
    },
    {
      title: 'WEB',
      complete: false
    }
  ];

  add(title) {
    if (title !== '') {
      this.tasks.push({
        title,
        complete: false
      });
    } else {
      alert('Task cant be empty');
    }
  }
}
