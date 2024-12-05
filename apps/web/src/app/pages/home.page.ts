import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Item, itemActions, itemSelectors } from '@todo-app/state';
import { UiModule } from '@todo-app/ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UiModule],
  templateUrl: './home.page.html',
})
export default class HomePage implements OnInit {
  items$: Observable<Item[]>;
  searchTerm$: Observable<string>;
  filteredItems$: Observable<Item[]>;

  constructor(private readonly store: Store<AppState>) {
    this.items$ = this.store.select(itemSelectors.selectItems);
    this.searchTerm$ = this.store.select(itemSelectors.selectSearchTerm);
    this.filteredItems$ = this.store.select(itemSelectors.selectFilteredItems);
  }

  ngOnInit() {
    this.store.dispatch(itemActions.loadTodoItems());
  }

  onAddTodoItem(item: Item) {
    this.store.dispatch(itemActions.addTodoItem({ item }));
  }

  onToggleTodoItem(id: string) {
    this.store.dispatch(itemActions.toggleTodoItem({ id }));
  }

  onRemoveTodoItem(id: string) {
    this.store.dispatch(itemActions.removeTodoItem({ id }));
  }

  onSearch(value: string) {
    const searchTerm = value.trim();
    this.store.dispatch(itemActions.searchTodoItems({ searchTerm }));
  }
}
