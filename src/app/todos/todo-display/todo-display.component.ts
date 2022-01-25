import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent {
  @Input() tasks: any[] = [];
  @Output() selected = new EventEmitter();
}

