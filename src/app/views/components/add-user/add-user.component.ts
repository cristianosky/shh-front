import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NofiticationService } from 'src/app/services/notification/nofitication.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formAddUser!: FormGroup;
  constructor(private fb: FormBuilder, private _Notification: NofiticationService, private _AuthService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      nombre: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  addUser() {
    const { nombre, usuario, password } = this.formAddUser.value;
    if (this.formAddUser.invalid) {
      this._Notification.showError('Todos los campos son obligatorios');
      return;
    }
    this._AuthService.addUsuario({ nombre, usuario, password }).subscribe((res: any) => {
      this._Notification.showSuccess(res.mensaje);
      this.dialog.closeAll();
      this.formAddUser.reset();
    });
  }

}
