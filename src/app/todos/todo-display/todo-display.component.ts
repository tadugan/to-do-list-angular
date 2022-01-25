import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent {
  @Input() tasks: any[] = [{ id: 1, name: "Mow the Lawn", description: "Use the lawnmower to cut the grass in the front and backyard.", priority: "moderate"}];
}

