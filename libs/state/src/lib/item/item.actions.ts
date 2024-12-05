import { createAction, props } from '@ngrx/store';

import { Item } from './item.model';

export const loadTodoItems = createAction('[Item] Load Todo Items');
export const loadTodoItemsSuccess = createAction(
  '[Item] Load Todo Items Success',
  props<{ items: Item[] }>()
);

export const addTodoItem = createAction(
  '[Item] Add Todo Item',
  props<{ item: Item }>()
);

export const removeTodoItem = createAction(
  '[Item] Remove Todo Item',
  props<{ id: string }>()
);

export const toggleTodoItem = createAction(
  '[Item] Toggle Todo Item',
  props<{ id: string }>()
);

export const searchTodoItems = createAction(
  '[Item] Search Todo Items',
  props<{ searchTerm: string }>()
);