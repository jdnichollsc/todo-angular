import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class TodoItemComponent {}
