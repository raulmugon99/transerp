import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ClientesService } from 'src/app/services/clientes.service';
import { ElectronRPService } from 'src/app/services/electron.service';
import { FrmClienteComponent } from './frm-cliente/frm-cliente.component';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

clientes : any[] = [];

  constructor(private _clientes: ClientesService,
    private _electronService: ElectronService,
    private _electorn: ElectronRPService) {
      if(this._electronService.isElectronApp) {
    }
     }

  ngOnInit() {
   this.test();
  }

  test() {
    this._clientes.obtenerClientes().subscribe((data:any) =>{
      console.log(data);
      this.clientes = data.data;
    })
  }


  openModal(id: string){
    // this._electronService.ipcRenderer.send("openModal");
    this._electorn.AbrirPagina(`clientes/clientes/${id}`,FrmClienteComponent, id)
  }

}
