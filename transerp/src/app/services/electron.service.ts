import { Component, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IpcRenderer } from "electron";
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class ElectronRPService {

  private ipc: IpcRenderer;
  constructor(private _electronService: ElectronService,
    private _modal: ModalController) {

    if (this._electronService.isElectronApp) {
      this.ipc = this._electronService.ipcRenderer;
    }

  }

  // ---------------------------- Las funciones que hemos añadido
  public on(channel: string, listener: any): void {
    if (!this.ipc) {
      return;
    }
    this.ipc.on(channel, listener);
  }

  public once(channel: string, listener: any): void {
    if (!this.ipc) {
      return;
    }
    this.ipc.once(channel, listener);
  }

  public send(channel: string, ...args: any[]): void {
    if (!this.ipc) {
      return;
    }
    this.ipc.send(channel, ...args);
  }

  public removeAllListeners(channel: string): void {
    if (!this.ipc) {
      return;
    }
    this.ipc.removeAllListeners(channel);
  }



  AbrirPagina(ruta: string, componente: any, id: string) {
    if (this._electronService.isElectronApp) {
      this.ipc.send('openModal', ruta)
    } else {
      this.presentModal(componente, id);
    }
  }

  async presentModal(componente: any, id: string) {
    const modal = await this._modal.create({
      component: componente,
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: {
        id: id
      },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
