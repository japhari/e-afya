import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { AuthServicesService } from './auth-services';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  validationError: any;
  validationErrorMessage: any;
  sweetAlert: any = {};
  tokenExpired: any;
  hasError: boolean;
  alert: string;
  constructor(private router: Router, private auth: AuthServicesService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentClient = JSON.parse(localStorage.getItem('currentClient'));
    if (currentClient) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentClient}`,
        },
      });
    }
    return next.handle(request).pipe(
      tap(
        (success: any) => {
          this.successHandler(request, success);
        },
        (err: any) => {
          this.errorHandler(err);

          if (err.status === 401) {
            this.auth.logout();
          }
          if (err.status === 502) {
            this.auth.logout();
          }

          if (err.error.status === 402) {
            this.validationError = err.error.errors[0];
            this.validationErrorMessage = err.error.message;
          }
          this.tokenExpired = err.error.error;
          if (this.tokenExpired === 'token_expired') {
            this.router.navigateByUrl('/');
            // this.toastr.info(
            //   'Session Expired Please Login to Continue',
            //   'Session Expired',
            //   {
            //     timeOut: 8000,
            //   }
            // );
            this.router.navigateByUrl('/');
          }
          if (err instanceof HttpErrorResponse) {
            if (err.error.status !== 401) {
              return;
            }
          }
        }
      )
    );
  }

  errorHandler(response) {
    console.log('Error handled', response);
    if ([400, 403, 404, 405, 409, 500].includes(parseInt(response.status))) {
      this.hasError = true;

      // this.toastr.error(
      //   'Error',
      //   'There is a problem ,please contact system administrator '
      // );
      return;
    } else if (parseInt(response.status) === 401) {
      this.auth.clearSession();
      return;
    } else if (response.code === 422) {
      this.hasError = true;
      // this.toastr.error(
      //   'Error',
      //   'There is a problem ,please contact system administrator '
      // );
      return;
    } else {
      this.hasError = true;

      // this.toastr.error(
      //   'Error',
      //   'There is a problem ,please contact system admininstrator '
      // );
    }
  }

  successHandler(response, status) {
    console.log('Intercepted Response', response);
    console.log('Intercepted Status', status);
    const urlWhiteList = ['/api/quiz/integration/nida'];

    if (['post', 'put', 'delete'].includes(response.method.toLowerCase())) {
      if (status?.body?.code === 8000) {
        console.log('Successfully -------------->>>>>>', status);
        console.log(
          'Method Deployed -------------->>>>>>',
          response.method.toLowerCase()
        );
        this.hasError = false;
        this.sweetAlert.icon = 'success';
        this.alert = `${
          status.body.description !== null
            ? status.body.description
            : response.method.toLowerCase() === 'post'
            ? 'Saved Successfully'
            : response.method.toLowerCase() === 'put'
            ? 'Updated Successfully'
            : 'Deleted Successfully'
        } .`;

        //
        console.log('response', response);
        console.log('status', status);
        //

        if (
          response?.method === 'POST' &&
          status?.body?.access_token !== (null || undefined)
        ) {
          //on login hide sweet alert popup
          return;
        }
        // this.toastr.success('Success', this.alert);
      } else if (status?.body?.code !== 8000) {
        //
        this.hasError = true;
        this.sweetAlert.icon = 'error';
        this.alert =
          status?.body?.description !== null
            ? status?.body?.description
            : 'Something went Wrong';
        if (
          response?.method === 'POST' &&
          status?.body?.access_token !== (null || undefined)
        ) {
          //on login hide sweet alert popup
          return;
        }
        // this.toastr.error("Failed", this.alert);
      }
    } else if (
      /***
       * 8002 data not found, this error should not be shown

      */
      status &&
      status?.body &&
      status?.body &&
      status?.body?.code !== undefined &&
      ![200, 8002, 8000].includes(status.body.code)
    ) {
      this.hasError = true;

      this.sweetAlert.icon = 'error';
      this.alert =
        status.body.description !== null
          ? status.body.description
          : 'Something went Wrong !';
      // this.toastr.success('Failed', this.alert);
    }
  }
}
