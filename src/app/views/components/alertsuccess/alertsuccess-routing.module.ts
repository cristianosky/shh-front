import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsuccessComponent } from './alertsuccess.component';

const routes: Routes = [{ path: '', component: AlertsuccessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertsuccessRoutingModule { }
