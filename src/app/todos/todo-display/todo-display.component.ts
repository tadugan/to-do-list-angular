import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/shared/todos.service';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {
  tasks = {};

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    console.log('loading tasks...'); //TODO:
    this.todosService.all()
      .subscribe(tasks => this.tasks = tasks);
  }
}
