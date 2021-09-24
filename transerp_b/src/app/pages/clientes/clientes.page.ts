import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ClientesService } from 'src/app/services/clientes.service';
import { ElectronService } from 'ngx-electron';
import { IpcRenderer } from 'electron';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements  OnInit {
  public renderer: IpcRenderer;
  dtOptions: DataTables.Settings = {};
  clientes: any[];
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private _clientes: ClientesService,
    private electronServiceInstance: ElectronService) {
      this.renderer = this.electronServiceInstance.ipcRenderer;
  }

  async ObtenerClientes() {
    this.clientes = await this._clientes.getClientes().then((data: any) => data)
    this.dtTrigger.next();
  }

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        $('td', row).on('dblclick', () => {
          this.someClickHandler(data);
        });    
      }
    };
    this.ObtenerClientes();
  }
  message = '';
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  someClickHandler(info: any): void {
    alert(info);
  }

  test() {
    this.renderer.send('REQUEST_CHANNEL', 'my message');
  }
}