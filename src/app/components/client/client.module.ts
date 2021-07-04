import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ClientComponent } from 'src/app/views/client/client.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { ClientReadComponent } from './client-read/client-read.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { LoadingComponent } from 'src/shared/components/loading/loading.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ModalModule } from 'ngb-modal';

@NgModule({
  declarations: [
    ClientComponent,
    ClientCreateComponent,
    ClientReadComponent,
    ClientDeleteComponent,
    ClientUpdateComponent,
    LoadingComponent,
  ],
  imports: [
   CommonModule,
   FormsModule,
   BrowserModule,
   ReactiveFormsModule,
   RouterModule,
   TextMaskModule,
   ModalModule
  ],
  exports: [
    CommonModule,
],
  providers: [],

})
export class ClientModule { }
