import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item-view',
  templateUrl: './todo-item-view.component.html',
  styleUrls: ['./todo-item-view.component.css']
})
export class TodoItemViewComponent{
  @Input() selectedTask: object = {};

}
