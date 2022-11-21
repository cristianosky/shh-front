import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BodyAddUser, BodyIngresar } from 'src/app/model/auth.model';
import { ResponseLogin } from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.url;
  constructor(private _http: HttpClient, private _AppService: AppService) { }

  iniciarSesion(body: BodyIngresar): Observable<ResponseLogin> {
    return this._http.post<ResponseLogin>(this.url + 'login', body);
  }

  addUsuario(body: BodyAddUser) {
    return this._http.post(this.url + 'registro', body);
  }

  loadUser() {
    return this._http.get(this.url + 'listadoUser');
  }

  loadListHack() {
    return this._http.get(this.url + 'listadoHack');
  }
}
