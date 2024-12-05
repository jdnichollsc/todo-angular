import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '@todo-app/state';
import { isPast, formatDistance } from 'date-fns';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html'
})
export class TodoItemComponent {
  @Input() item!: Item;
  @Output() toggleItem = new EventEmitter<string>();
  @Output() removeItem = new EventEmitter<string>();

  get isPastDue(): boolean {
    return isPast(this.item.dueDate);
  }

  formatDueDate(): string {
    return formatDistance(this.item.dueDate, new Date(), { addSuffix: true });
  }
}
