import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { iif } from 'src/app/utils';

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
  ) {
    this.formGroup = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  ngOnInit() {

  }

  onSubmit() {

    this.hideMessageError();
    this.tryAuthenticate()
      .subscribe(success => iif(success, this.navigateToMeetups.bind(this), this.showMessageError.bind(this)));
  }

  private tryAuthenticate(): Observable<boolean> {
    const login = this.formGroup.controls.login.value;
    const password = this.formGroup.controls.password.value;

    return this.loginService
      .validateLogin(login, password)
      .pipe(map((response => response)));
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
