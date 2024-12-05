import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, tap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '../state.module';
import * as ItemActions from './item.actions';
import { selectItems } from './item.selectors';
import { ItemStorageService } from './item-storage.service';

@Injectable()
export class ItemEffects {
  loadTodos$;
  saveTodos$;
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<AppState>,
    private readonly storageService: ItemStorageService
  ) {
    this.loadTodos$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ItemActions.loadTodoItems),
        map(() => {
          const items = this.storageService.loadTodoItems();
          return ItemActions.loadTodoItemsSuccess({ items });
        })
      )
    );

    this.saveTodos$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(
            ItemActions.addTodoItem,
            ItemActions.removeTodoItem,
            ItemActions.toggleTodoItem
          ),
          withLatestFrom(this.store.select(selectItems)),
          tap(([, items]) => {
            this.storageService.saveTodoItems(items);
          })
        ),
      { dispatch: false }
    );
  }
}
