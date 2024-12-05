import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromItem from './item.reducer';

export const selectItemState = createFeatureSelector<fromItem.TodoState>(fromItem.itemFeatureKey);

export const selectItems = createSelector(selectItemState, (state) => state.items);

export const selectSearchTerm = createSelector(selectItemState, (state) => state.searchTerm);

