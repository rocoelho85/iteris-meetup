import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { iif } from 'src/app/utils';
import { User } from 'src/app/app-meetup.types';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  messageError = 'Falha ao realizar login!';
  showMessageErrorValue = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private userService: UserService
  ) {
    this.formGroup = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  ngOnInit() {
    this.loginService
      .userFound()
      .subscribe(user => this.userService.setUser(user));
  }

  onSubmit() {

    this.hideMessageError();
    this.tryAuthenticate()
      .subscribe(user =>
        iif(!!user,
          this.navigateToMeetups.bind(this),
          this.showMessageError.bind(this)));
  }

  private tryAuthenticate(): Observable<User> {
    const login = this.formGroup.controls.login.value;
    const password = this.formGroup.controls.password.value;

    return this.loginService
      .validateLogin(login, password);
  }

  private showMessageError() {
    this.showMessageErrorValue = true;
  }

  private hideMessageError() {
    this.showMessageErrorValue = false;
  }

  private navigateToMeetups() {
    this.router.navigate(['meetups']);
  }
}
