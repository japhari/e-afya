import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/shared/services/auth-services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  toggle = true;
  error: any;
  loading: boolean | undefined;
  statusCode: any;
  constructor(
    public fb: FormBuilder,
    public router: Router,
    private auth: AuthServicesService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
    });
  }
  ngOnInit(): void {
    console.log('Login ');
  }

  public async onSubmit(payload: any) {
    const username = payload.username;
    const password = payload.password;
    this.auth
      .login(username, password)
      .pipe()
      .subscribe(
        (resp) => {},
        (error) => {
          this.error = error;
          this.loading = false;
          this.statusCode = error.status;

          if (this.statusCode === 504) {
          }
          if (this.statusCode === 500) {
          }
          if (this.statusCode === 0) {
          }
          if (this.statusCode === 400) {
          }
          if (this.statusCode === 403) {
          }
          if (this.statusCode === 401) {
          }
        }
      );
  }

  ngAfterViewInit() {}
}
