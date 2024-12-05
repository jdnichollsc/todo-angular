import { createAction, props } from '@ngrx/store';

import { Item } from './item.model';

export const loadTodos = createAction('[Item] Load Todo Items');
export const loadTodosSuccess = createAction(
  '[Item] Load Todo Items Success',
  props<{ items: Item[] }>()
);

export const addTodo = createAction(
  '[Item] Add Todo Item',
  props<{ item: Item }>()
);

export const removeTodo = createAction(
  '[Item] Remove Todo Item',
  props<{ id: string }>()
);

export const toggleTodo = createAction(
  '[Item] Toggle Todo Item',
  props<{ id: string }>()
);

export const searchTodos = createAction(
  '[Item] Search Todo Items',
  props<{ searchTerm: string }>()
);