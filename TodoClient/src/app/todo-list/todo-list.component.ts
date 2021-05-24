import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Todo} from '../Interfaces/todo';
import { TodoService } from '../todo.service';
import { UserService } from '../user.service';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    if(!this.userService.getUser()){
      this.router.navigate(['/login']);
    }
    this.todos = this.todoService.getTodos();
    this.getTodoCount();
  }
  getTodoCount(){
    this.todoCount = this.todoService.getTodoCount()
  }

  todos:Todo[] = this.todoService.todos;

  currentTitle: string = '';
  currentDescription: string = '';
  todoCount:{done:number, notDone: number} = this.todoService.getTodoCount();

  addTodo(){
    if(!this.currentTitle) return;
    this.todoService.addTodo(this.currentTitle, this.currentDescription);
    this.todos = this.todoService.getTodos()
    this.currentTitle = '';
    this.currentDescription = '';
    this.getTodoCount();
    console.log(this.todos);
  }
  deleteTodo(id: number){
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos()
    console.log(this.todos);
    this.getTodoCount();
  }
  togleDone(id:number){
    this.todoService.togleDone(id);
    this.todos = this.todoService.getTodos()
    this.getTodoCount();
    
  }

}
