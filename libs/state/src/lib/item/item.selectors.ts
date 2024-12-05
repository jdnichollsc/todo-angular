import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromItem from './item.reducer';

export const selectItemState = createFeatureSelector<fromItem.TodoState>(fromItem.itemFeatureKey);

export const selectItems = createSelector(selectItemState, (state) => state.items);

export const selectSearchTerm = createSelector(selectItemState, (state) => state.searchTerm);

export const selectFilteredItems = createSelector(selectItems, selectSearchTerm, (items, searchTerm) => {
  const searchTermLower = searchTerm.toLowerCase();
  return items.filter(item => item.title.toLowerCase().includes(searchTermLower));
});

export const itemSelectors = {
  selectItems,
  selectSearchTerm,
  selectFilteredItems,
};
