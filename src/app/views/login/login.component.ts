import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseLogin, User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loadding: boolean = false;
  formLogin: FormGroup
  constructor(private fb: FormBuilder, public auth: AuthService, private router: Router) {
    this.formLogin = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ingresar() {
    this.loadding = true;
    const { usuario, password } = this.formLogin.value;
    this.auth.iniciarSesion({ usuario, password }).subscribe((res: ResponseLogin) => {
      this.loadding = false;
      localStorage.setItem('token', res.token);
      let user: User = {
        id: res.id,
        nombre: res.nombre,
        usuario: res.usuario
      }
      localStorage.setItem('usuario', JSON.stringify(user));
      this.router.navigate(['/dashboard']);
    }, (err) => {
      this.loadding = false;
    });
  }

}
