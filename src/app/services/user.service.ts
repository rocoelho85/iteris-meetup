import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { User, Meetup } from '../app-meetup.types';
import { Observable, Subject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly USER_KEY = 'USER_KEY';

  private userChange$: Subject<User> = new Subject();

  constructor(
    private localStorageService: LocalStorageService,
    private httpService: HttpService
  ) {

  }

  setUser(user: User) {
    this.localStorageService.set(this.USER_KEY, user);
    this.userChange$.next(user);
  }

  getUser(): User {
    return this.localStorageService.get<User>(this.USER_KEY);
  }

  userChange(): Observable<User> {
    return this.userChange$;
  }

  removeUser() {
    this.localStorageService.remove(this.USER_KEY);
  }
}
