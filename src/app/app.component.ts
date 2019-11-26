import { Component } from '@angular/core';
import { Router, GuardsCheckEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iteris-meetup';

  constructor(
    private router: Router
  ) {

    this.router.events
      .pipe(filter(event => event instanceof GuardsCheckEnd))
      .pipe(map((event: GuardsCheckEnd) => event.shouldActivate))
      .subscribe(shouldActivate => {
        if (!shouldActivate) {
          this.router.navigate(['']);
        }
      });

  }
}
