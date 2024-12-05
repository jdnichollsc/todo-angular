import { createReducer } from '@ngrx/store';

import { Item } from './item.model';
import * as ItemActions from './item.actions';
import { produceOn } from '../state.utils';

export interface TodoState {
  items: Item[];
  searchTerm: string;
}

export const initialState: TodoState = {
  items: [],
  searchTerm: '',
};

export const itemFeatureKey = 'item';

const todoReducer = createReducer(
  initialState,
  produceOn(ItemActions.loadTodoItemsSuccess, (state, { items }) => {
    state.items = items;
  }),
  produceOn(ItemActions.addTodoItem, (state, { item }) => {
    state.items.push(item);
  }),
  produceOn(ItemActions.removeTodoItem, (state, { id }) => {
    state.items = state.items.filter(item => item.id !== id);
  }),
  produceOn(ItemActions.toggleTodoItem, (state, { id }) => {
    state.items = state.items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
  }),
  produceOn(ItemActions.searchTodoItems, (state, { searchTerm }) => {
    state.searchTerm = searchTerm;
  })
);

export const reducer = todoReducer;