import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { HttpService } from './http.service';
import { User } from '../app-meetup.types';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpService: HttpService,
    private userService: UserService,
  ) { }

  validateLogin(login: string, password: string): Observable<boolean> {
    return this.httpService.get<User[]>(`http://localhost:3000/users?email=${login}&password=${password}`)
      .pipe(tap(users => this.userService.setUser(users[0])))
      .pipe(map(() => !!this.userService.getUser()));
  }
}
