import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Item } from '@todo-app/state';

import { TodoButtonComponent } from '../../button/button.component';

@Component({
  selector: 'todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class TodoFormComponent {
  @Output() addTodo = new EventEmitter<Item>();

  title = '';
  dueDate = '';
  showError = false;
  errorMessage = '';

  onSubmit(form: NgForm): void {
    if (!this.title.trim()) {
      this.showError = true;
      this.errorMessage = 'Title is required';
      setTimeout(() => (this.showError = false), 3000); // Hide after 3s
      return;
    }

    if (!this.dueDate) {
      this.showError = true;
      this.errorMessage = 'Due date is required';
      setTimeout(() => (this.showError = false), 3000);
      return;
    }

    const item: Item = {
      id: crypto.randomUUID(),
      title: this.title.trim(),
      completed: false,
      dueDate: new Date(this.dueDate),
      createdAt: new Date(),
    };

    this.addTodo.emit(item);
    form.resetForm();
    this.showError = false;
  }
}
