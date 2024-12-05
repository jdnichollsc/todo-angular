import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Item } from './item.model';

@Injectable({ providedIn: 'root' })
export class ItemStorageService {
  private readonly STORAGE_KEY = 'todo-items';
  private readonly platformId = inject(PLATFORM_ID);

  saveTodoItems(todos: Item[]): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
    }
  }

  loadTodoItems(): Item[] {
    if (!isPlatformBrowser(this.platformId)) return [];

    const todosString = localStorage.getItem(this.STORAGE_KEY);
    if (!todosString) return [];

    const todos = JSON.parse(todosString);
    if (!Array.isArray(todos)) return [];
    return todos.map((todo: Item) => ({
      ...todo,
      dueDate: new Date(todo.dueDate),
      createdAt: new Date(todo.createdAt)
    }));
  }
  
}