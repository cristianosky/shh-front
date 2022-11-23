import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ListadoUser, listadoUserHack, User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AddUserComponent } from '../components/add-user/add-user.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usuario: User | undefined;
  admin: boolean = false;
  listadoUser: ListadoUser[] = [];
  viewListado: boolean = false;
  listadoUserHack: listadoUserHack[] = [];
  displayedColumns: string[] = ['nombre', 'usuario', 'acciones'];
  columns: string[] = ['nombre', 'usuario', 'password','acciones'];
  constructor(private dialog: MatDialog, private router: Router, private _AuthService: AuthService) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (this.usuario?.id === 1) {
      this.admin = true;
      // this.loadUser();
    }
    this.loadListHack();
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  addUser() {
    this.dialog.open(AddUserComponent, {
      width: '500px',
      height: '500px'
    });
  }

  loadUser() {
    if(this.viewListado){
      this.viewListado = false
    }else{
      this._AuthService.loadUser().subscribe((resp: any) => {
        this.listadoUser = resp.data;
        this.viewListado = true;
  
      });
    }

  }

  deleteList(cod: number){
    console.log(cod);

  }

  loadListHack(){
    this._AuthService.loadListHack().subscribe((resp: any) => {
      // console.log(resp);
      this.listadoUserHack = resp.data;
    });
  }
}
