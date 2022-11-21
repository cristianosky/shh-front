import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NofiticationService } from '../services/notification/nofitication.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private _Notification: NofiticationService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req).pipe(catchError((error) => this.herrorHandler(error)));
  }

  herrorHandler(error: HttpErrorResponse): Observable<never> {
    this._Notification.showError(error.error.mensaje);
    return throwError(error);
  }
}