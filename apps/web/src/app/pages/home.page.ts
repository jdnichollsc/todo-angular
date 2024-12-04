import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TodoItemComponent } from "@todo-app/ui";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './home.page.html'
})
export default class HomePage {

}
