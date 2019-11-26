import { Component, OnInit, Input } from '@angular/core';
import { Meetup } from 'src/app/app-meetup.types';

@Component({
  selector: 'app-meetup-item',
  templateUrl: './meetup-item.component.html',
  styleUrls: ['./meetup-item.component.scss']
})
export class MeetupItemComponent implements OnInit {

  @Input()
  meetup: Meetup;

  constructor() { }

  ngOnInit() {
  }

}
