import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { NoAuthGuard } from './guard/noAuth.guard';

const routes: Routes = [
  { path: 'login', canActivate: [NoAuthGuard], loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule) },

  { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule) },

  { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
