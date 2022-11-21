import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlerterrorComponent } from './alerterror.component';

const routes: Routes = [{ path: '', component: AlerterrorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlerterrorRoutingModule { }
