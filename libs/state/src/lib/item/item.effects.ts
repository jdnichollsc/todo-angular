import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import * as ItemActions from './item.actions';

@Injectable()
export class ItemEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadTodoItems),
      map(() => {
        //const todos = this.storageService.loadTodos();
        return ItemActions.loadTodoItemsSuccess({ items: [] });
      })
    )
  );

  saveTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          ItemActions.addTodoItem,
          ItemActions.removeTodoItem,
          ItemActions.toggleTodoItem
        ),
        tap(() => {
          //const state = (window as any).store.getState();
          //this.storageService.saveTodos(state.todos.todos);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    //private storageService: StorageService
  ) {}
}