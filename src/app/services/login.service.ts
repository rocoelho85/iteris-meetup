import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ValidateLoginResponse, User } from '../app-meetup.types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  user: User;

  validateLogin(login: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(`http://localhost:3000/users?email=${login}&password=${password}`)
      .pipe(filter((users: User[]) => this.existsUser(users)))
      .pipe(tap(users => this.setUser(users[0])))
      .pipe(map(() => true));
  }

  private setUser(user: User) {
    console.log('mapeando usuários: ', user);
    this.user = user;
  }

  private existsUser(users: User[]): boolean {
    return users.length === 1;

  }
}
