import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as fromItem from './item';

const isDev = !environment.production;

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
    StoreDevtoolsModule.instrument({ name: 'Todo App Store', logOnly: isDev }),
  ],
})
export class StateModule {}
