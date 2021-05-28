import { Injectable } from '@angular/core';
import {Todo} from './Interfaces/todo';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Observer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private userService: UserService,
    private http: HttpClient) { }
  currentId: number = 6;
  todos:Todo[] = [];

  getTodoCount(){
    return {
      done: this.todos.filter(todo => todo.done? true: false).length,
      notDone: this.todos.filter(todo => todo.done? false: true).length
    }
  }
  private getHeader(){
   
    return  {
      headers: new HttpHeaders({
        Authorization: `Token ${this.userService.getUserToken()}` 
  
      })
    };
    
  }
  
  getTodos():Observable<any> {
    return this.http.get('http://127.0.0.1:8000/todo/', this.getHeader())
    .pipe(
      catchError(this.handleError([]))
    );
  }

  addTodo(title: string, description: string):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/todo/', {
      title: title,
      description: description
  }, this.getHeader())
      
  }
  deleteTodo(id: number): Observable<any>{
    return this.http.delete(`http://127.0.0.1:8000/todo/${id}/`, this.getHeader());
  }
 
  togleDone(id: number, done:boolean): Observable<any>{
    return this.http.put(`http://127.0.0.1:8000/todo/${id}/`, {done: !done}, this.getHeader())

   
  }
  private handleError<T>(result?: T){
    return (error: HttpResponseBase): Observable<T> => {
      if(error.status == 400){

      }
      return of(result as T)
    }
  }
  
  
}
