import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  apiUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { this.apiUrl = baseUrl; }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // send the error to remove logging infrastructure
      console.error(error);    // log to console instead

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  public register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/users/sign-up', user, this.httpOptions);
  }
}
