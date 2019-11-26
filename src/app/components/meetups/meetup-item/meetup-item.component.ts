import { Component, OnInit, Input } from '@angular/core';
import { Meetup, User } from 'src/app/app-meetup.types';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-meetup-item',
  templateUrl: './meetup-item.component.html',
  styleUrls: ['./meetup-item.component.scss']
})
export class MeetupItemComponent implements OnInit {

  @Input() meetup: Meetup;
  private user: User;

  constructor(
    private userService: UserService,
    private meetupService: MeetupService,
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  get userRegistered(): boolean {
    return this.user &&
      this.meetup &&
      this.meetup.subscribed.some(id => this.user.id === id);
  }

  subscribe() {
    const meetupUpdate = this.meetup;
    meetupUpdate.subscribed.push(this.user.id);
    this.meetupService
      .update(this.meetup)
      .subscribe(meetup => this.meetup = meetup);
  }

  unsubscribe() {
    const meetupUpdate: Meetup = this.meetup;
    const indexRemove = meetupUpdate.subscribed.indexOf(this.user.id);

    meetupUpdate.subscribed.splice(indexRemove, 1);

    this.meetupService
      .update(this.meetup)
      .subscribe(meetup => this.meetup = meetup);
  }

}
