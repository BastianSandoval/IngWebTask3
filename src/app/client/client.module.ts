import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    ClientComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ClientComponent,
  ],
})
export class ClientModule { }
