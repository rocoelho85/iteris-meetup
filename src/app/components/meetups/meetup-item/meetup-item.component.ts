import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Meetup, User } from 'src/app/app-meetup.types';
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
    this.meetupService
      .subscribeUser(this.meetup, this.user.id)
      .subscribe(meetup => this.meetup = meetup);
  }

  unsubscribe() {
    this.meetupService
      .unsubscribeUser(this.meetup, this.user.id)
      .subscribe(meetup => this.meetup = meetup);
  }

}
