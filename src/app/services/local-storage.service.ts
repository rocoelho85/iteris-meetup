import { Injectable } from '@angular/core';
import * as ls from 'local-storage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {

  }

  get<T>(key: string): T {
    return ls.get<T>(key);
  }

  set<T>(key: string, value: T) {
    ls.set<T>(key, value);
  }

  remove(key: string) {
    ls.remove(key);
  }

}

