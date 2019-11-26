import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { HttpService } from './http.service';
import { User } from '../app-meetup.types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpService: HttpService
  ) { }

  private user: User;

  private setUser(user: User) {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

  validateLogin(login: string, password: string): Observable<boolean> {
    return this.httpService.get<User[]>(`http://localhost:3000/users?email=${login}&password=${password}`)
      .pipe(tap(users => this.setUser(users[0])))
      .pipe(map(() => !!this.user));
  }
}
