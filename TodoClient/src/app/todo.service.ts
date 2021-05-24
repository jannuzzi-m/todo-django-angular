import { Injectable } from '@angular/core';
import {Todo} from './Interfaces/todo';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private userService: UserService) { }
  currentId: number = 6;
  todos:Todo[] = [];

  getTodoCount(){
    return {
      done: this.todos.filter(todo => todo.done? true: false).length,
      notDone: this.todos.filter(todo => todo.done? false: true).length
    }
  }
  getTodos():Todo[] {
    return this.todos.filter(todo => todo.owner == this.userService.getUser()?.username);
  }

  addTodo(title: string, description: string){
    this.todos = [
     ({
      id: this.getId(),
      title: title,
      description: description?description: 'No Description',
      owner: this.userService.getUser()?.username || 'None',
      done:false
    }),
    ...this.todos
  ]
      
  }
  deleteTodo(id: number){
    this.todos = this.todos.filter(todo => todo.id == id? false: true);
  }
  getId():number{
    this.currentId += 1;
    return this.currentId + 1;
  }
  togleDone(id: number){
   this.todos = this.todos.map(todo =>  todo.id == id? {...todo, done: !todo.done}: todo)
  }
  
}
