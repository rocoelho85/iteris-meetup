import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Meetup } from '../app-meetup.types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {

  constructor(
    private httpService: HttpService
  ) { }

  listMeetups(): Observable<Meetup[]> {
    return this.httpService.get<Meetup[]>(`${environment.apiUrl}/meetups`);
  }

  update(meetup: Meetup): Observable<Meetup> {
    return this.httpService.put<Meetup>(`${environment.apiUrl}/meetups/${meetup.id}`, meetup);
  }

  subscribeUser(meetup: Meetup, userId: number): Observable<Meetup> {
    meetup.subscribed.push(userId);
    return this.update(meetup);
  }

  unsubscribeUser(meetup: Meetup, userId: number): Observable<Meetup> {
    const indexRemove = meetup.subscribed.indexOf(userId);
    meetup.subscribed.splice(indexRemove, 1);
    return this.update(meetup);
  }
}
