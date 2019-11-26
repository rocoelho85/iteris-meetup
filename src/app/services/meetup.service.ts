import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Meetup } from '../app-meetup.types';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {

  constructor(
    private httpService: HttpService
  ) { }

  listMeetups(): Observable<Meetup[]> {
    return this.httpService.get<Meetup[]>('http://localhost:3000/meetups');
  }

  update(meetup: Meetup): Observable<Meetup> {
    return this.httpService.put<Meetup>(`http://localhost:3000/meetups/${meetup.id}`, meetup);
  }
}
