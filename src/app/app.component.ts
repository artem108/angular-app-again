import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Todo App';
  newTodo = '';
  todos = [];

  addTodo(event) {
    let todoObj = {
      item: this.newTodo,
      complete: false
    }
    this.todos.push(todoObj);
    this.newTodo = '';
  }

  completeTodo(i) {
    this.todos[i].complete = true;
  }

  delTodo(i) {
    this.todos.splice(i,1);
  }
}
