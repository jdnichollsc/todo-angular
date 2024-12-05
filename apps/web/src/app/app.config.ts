import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { effects, reducers, StateModule } from '@todo-app/state';
import { environment } from '@todo-app/shared';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore(reducers),
    provideEffects(effects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
    importProvidersFrom(StateModule),
  ],
};
