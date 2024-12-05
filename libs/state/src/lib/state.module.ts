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

export const reducers: ActionReducerMap<State> = {
  item: fromItem.reducer,
};

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([
      ItemEffects,
    ]),
    StoreDevtoolsModule.instrument({
      name: 'Todo App Store',
      logOnly: !environment.production,
    }),
  ],
})
export class StateModule {}
