import { Component } from '@angular/core';
import { Router, GuardsCheckEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { UserService } from './services/user.service';

import * as ls from 'local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iteris-meetup';

  constructor(
    private router: Router,
    private userService: UserService,
  ) {

    this.router.events
      .pipe(filter(event => event instanceof GuardsCheckEnd))
      .pipe(map((event: GuardsCheckEnd) => event.shouldActivate))
      .subscribe(shouldActivate => {
        if (!shouldActivate) {
          this.router.navigate(['']);
        }
      });

    this.userService
      .userChange()
      .subscribe(user => console.log(user));

  }
}
