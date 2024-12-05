import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '@todo-app/shared';

import * as fromItem from './item';
import { ItemEffects } from './item';

export interface State {
  [fromItem.itemFeatureKey]: fromItem.TodoState;
}
export type AppState = State;

export const reducers: ActionReducerMap<State> = {
  item: fromItem.reducer,
};

export const effects = [ItemEffects];

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      name: 'Todo App Store',
      logOnly: !environment.production,
    }),
  ],
  exports: [StoreModule, EffectsModule],
})
export class StateModule {}
