import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesPage } from './clientes.page';
import { FrmClienteComponent } from './frm-cliente/frm-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesPage
  },{
    path: 'clientes/:id',
    component: FrmClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesPageRoutingModule {}
