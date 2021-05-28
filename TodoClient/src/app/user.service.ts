import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './Interfaces/todo';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }


  private token :string|undefined;

 

  requestUserToken(username: string, password: string): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/api-token-auth/", {
      username: username,
      password: password
    }).pipe(
      catchError(this.handleError({})),
      
    )
  }

  private handleError<T>(result?: T){
    return (error: HttpResponseBase): Observable<T> => {
      if(error.status == 400){

      }
      return of(result as T)
    }
  }
  setUserToken(uncomingToken:string){
    console.log(uncomingToken)
    this.token = uncomingToken
    console.log(this.token)
  }
  resetUserToken(){
    this.token = undefined;
  }
  getUserToken(){
    return this.token;
  }
}
