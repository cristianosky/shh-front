import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsuccessRoutingModule } from './alertsuccess-routing.module';
import { AlertsuccessComponent } from './alertsuccess.component';


@NgModule({
  declarations: [
    AlertsuccessComponent
  ],
  imports: [
    CommonModule,
    AlertsuccessRoutingModule
  ]
})
export class AlertsuccessModule { }
