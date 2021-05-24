import { Injectable } from '@angular/core';
import { User } from './Interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './Interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  user: User | undefined;

  getUser(): User | undefined{
    return this.user;
  }
  header = new HttpHeaders;
  // this.header.append('Access-Control-Allow-Origin:',' *');
  
  
  getTodos(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/todo/')
  }
  
  
  
}
