import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  timeForTokenToExpire: string | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
    private httpBackend: HttpBackend
  ) {}

  login(username: string, pwd: string): Observable<any> {
    const body = `username=${encodeURIComponent(
      username
    )}&password=${encodeURIComponent(pwd)}&grant_type=password`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      Authorization:
        'Basic ' + btoa(environment.CLIENTID + ':' + environment.CLIENTSECRET),
      notoken: 'notoken',
    });
    return this.http
      .post<any>(`/afya/oauth/token`, body, {
        headers,
      })
      .pipe(
        map((user) => {
          if (user && user.access_token) {
            this.timeForTokenToExpire = JSON.stringify(user.expires_in);

            localStorage.setItem(
              'currentClient',
              JSON.stringify(user.access_token)
            );
            localStorage.setItem(
              'refreshToken',
              JSON.stringify(user.refresh_token)
            );
            localStorage.setItem('EXPIRE', JSON.stringify(user.refresh_token));
            localStorage.setItem('expireTime', JSON.stringify(user.expires_in));
          }
          return user;
        })
      );
  }
}
