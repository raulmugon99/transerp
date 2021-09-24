import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPageRoutingModule } from './clientes-routing.module';

import { ClientesPage } from './clientes.page';
import { FrmClienteComponent } from './frm-cliente/frm-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClientesPage, FrmClienteComponent],
  exports: [FrmClienteComponent],
  entryComponents: [FrmClienteComponent]
})
export class ClientesPageModule {}
