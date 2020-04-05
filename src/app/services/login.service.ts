import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { User } from '../app-meetup.types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userFound$: Subject<User> = new Subject<User>();

  constructor(
    private httpService: HttpService,
  ) { }


  validateLogin(login: string, password: string): Observable<User> {
    return this.httpService.get<User[]>(`${environment.apiUrl}/users?email=${login}&password=${password}`)
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
