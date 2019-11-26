import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meetup, User } from 'src/app/app-meetup.types';
import { MeetupService } from 'src/app/services/meetup.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss']
})
export class MeetupsComponent implements OnInit {

  user: User;

  constructor(
    private meetupService: MeetupService,
    private userService: UserService,
  ) { }

  meetups$: Observable<Meetup[]>;

  get meetups(): Observable<Meetup[]> {
    return this.meetups$;
  }

  ngOnInit() {
    this.meetups$ = this.meetupService.listMeetups();
    this.user = this.userService.getUser();
  }

  logout() {
    this.userService.removeUser();
  }

}
