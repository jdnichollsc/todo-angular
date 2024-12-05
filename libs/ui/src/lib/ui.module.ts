import { NgModule } from '@angular/core';

import { TodoItemComponent } from './item/item.component';
import { TodoSearchComponent } from './inputs/search/search.component';
import { TodoButtonComponent } from './button/button.component';
import { TodoFormComponent } from './forms/form/form.component';

@NgModule({
  imports: [
    TodoButtonComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodoSearchComponent,
  ],
  providers: [],
  exports: [
    TodoButtonComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodoSearchComponent,
  ],
})
export class UiModule {}
