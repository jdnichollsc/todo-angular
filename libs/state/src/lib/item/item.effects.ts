import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import * as TodoActions from './item.actions';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      map(() => {
        //const todos = this.storageService.loadTodos();
        return TodoActions.loadTodosSuccess({ items: [] });
      })
    )
  );

  saveTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          TodoActions.addTodo,
          TodoActions.removeTodo,
          TodoActions.toggleTodo
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