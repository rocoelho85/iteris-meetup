import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { HttpService } from './http.service';
import { User } from '../app-meetup.types';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userFound$: Subject<User> = new Subject<User>();

  constructor(
    private httpService: HttpService,
  ) { }


  validateLogin(login: string, password: string): Observable<User> {
    return this.httpService.get<User[]>(`http://localhost:3000/users?email=${login}&password=${password}`)
      .pipe(map(users => {
        if (users.length === 1) {
          this.userFound$.next(users[0]);
        }
        return users[0];
      }));
  }

  userFound(): Observable<User> {
    return this.userFound$;
  }
}
