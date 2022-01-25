import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  tasks: any = null;

  selectedTask: any = null;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.todosService.all()
      .subscribe(tasks => this.tasks = tasks);
  }

  selectTask(task: object) {
    this.selectedTask = task;
  }
}
