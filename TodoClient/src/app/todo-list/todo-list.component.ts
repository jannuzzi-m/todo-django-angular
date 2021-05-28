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
    if(!this.userService.getUserToken()){
      this.router.navigate(['/login']);
    }
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
      
    });
  }
  getTodoCount(){
    this.todoCount = {
      done: 1,
      notDone: 2
    }
  }

  todos:Todo[] = [];

  currentTitle: string = '';
  currentDescription: string = '';
  todoCount:{done:number, notDone: number} = {
    done: 1,
    notDone: 2
  };

  addTodo(){
    this.todoService.addTodo(this.currentTitle, this.currentDescription).subscribe(res => {
      console.log(res)
      this.todos = [res, ...this.todos];
      this.currentTitle = '';
      this.currentDescription = '';
    });
  }
  deleteTodo(id: number){
    this.todoService.deleteTodo(id).subscribe(res => console.log(res))
    this.todos = this.todos.filter(todo => todo.id == id? false: true)
  }
  togleDone(id:number, done:boolean){
    this.todoService.togleDone(id, done).subscribe(res => {
      this.todos = this.todos.map(todo =>  todo.id == id? {...todo, done: !todo.done}: todo)
      console.log(res)
    });
  }
}
