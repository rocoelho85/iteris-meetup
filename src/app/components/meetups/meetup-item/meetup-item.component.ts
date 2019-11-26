import { Component, OnInit, Input } from '@angular/core';
import { Meetup, User } from 'src/app/app-meetup.types';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-meetup-item',
  templateUrl: './meetup-item.component.html',
  styleUrls: ['./meetup-item.component.scss']
})
export class MeetupItemComponent implements OnInit {

  @Input()
  meetup: Meetup;

  private user: User;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.user = this.loginService.getUser();
  }

  get userRegistered(): boolean {
    return this.user && this.user.meetups.some(meetup => this.meetup.id === meetup);
  }

  subscribe() {
    this.user.meetups.push(this.meetup.id);
  }

}
