import { Component, OnInit } from '@angular/core';
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
  meetups: Meetup[];

  constructor(
    private meetupService: MeetupService,
    private userService: UserService,
  ) { }

  ngOnInit() {    
    this.user = this.userService.getUser();
    this.meetupService
      .listMeetups()
      .subscribe(response => this.meetups = response);
  }

  logout() {
    this.userService.removeUser();
  }

}
