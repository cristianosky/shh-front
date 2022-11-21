import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlerterrorRoutingModule } from './alerterror-routing.module';
import { AlerterrorComponent } from './alerterror.component';


@NgModule({
  declarations: [
    AlerterrorComponent
  ],
  imports: [
    CommonModule,
    AlerterrorRoutingModule
  ]
})
export class AlerterrorModule { }
