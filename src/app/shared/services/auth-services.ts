import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { StorageKey } from './storage.model';
const { AUTH_TOKEN } = StorageKey;
const { CURRENT_USER } = StorageKey;
const { EXPIRE } = StorageKey;
const { REFRESH_TOKEN } = StorageKey;

@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  timeForTokenToExpire: string | undefined;
  token: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private httpBackend: HttpBackend,
    private storage: StorageService
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
            this.authRole();
          }
          return user;
        })
      );
  }

  logout() {
    // this.clearSession();
    const token = JSON.parse(localStorage.getItem('currentClient'));
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
    const body = `
          token=${encodeURIComponent(token)}
          &refesh-token=${encodeURIComponent(refreshToken)}
          &grant_type=password`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      Authorization:
        'Basic ' + btoa(environment.CLIENTID + ':' + environment.CLIENTSECRET),
      notoken: 'notoken',
    });
    if (token !== null && refreshToken !== null) {
      const newHttpClient = new HttpClient(this.httpBackend);
      return newHttpClient
        .post<any>(
          `/afya/applicant/oauth/token/revoke?token=` +
            token +
            `&refresh-token=` +
            refreshToken,
          body,
          { headers }
        )
        .subscribe(
          (response) => {},
          (error) => {
            this.clearSession();
          }
        );
    } else {
      this.clearSession();
    }

    //  this.clearSession();
  }

  authRole() {
    this.token = localStorage.getItem('currentClient');
    if (this.token) {
      this.http.get('afya/user').subscribe((response) => {
        localStorage.setItem('userInfo', JSON.stringify(response));
        const info = JSON.parse(localStorage.getItem('userInfo'));
        if (info) {
          this.router.navigate(['/main']);
        }
      });
    }
  }

  public userInfo(): any {
    const user = localStorage.getItem('userInfo');
    return JSON.parse(user);
  }

  clearSession() {
    localStorage.removeItem('currentClient');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expireTime');
    localStorage.removeItem('userInfo');
    this.router.navigate(['login']);
    window.sessionStorage.clear();
  }
  public expireTime(expireDuration) {
    return Number(new Date(Date.now() + expireDuration));
  }

  public isLogged(): boolean {
    try {
      const expire = this.storage.read(EXPIRE);
      return !!expire;
    } catch (e) {
      return false;
    }
  }
}
