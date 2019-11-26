import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meetup } from 'src/app/app-meetup.types';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss']
})
export class MeetupsComponent implements OnInit {

  constructor(
    private meetupService: MeetupService
  ) { }

  meetups$: Observable<Meetup[]>;

  get meetups(): Observable<Meetup[]> {
    return this.meetups$;
  }

  ngOnInit() {
    this.meetups$ = this.meetupService.listMeetups();
  }

}
