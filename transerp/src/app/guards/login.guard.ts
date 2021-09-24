import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _login: LoginService,
    private navCTRL: NavController) {

  }
  canActivate():  boolean  {
    this._login.obtenerSesion();
    if (this._login.logeado) {
      return true;
    }else{
      this.navCTRL.navigateRoot('login');
    
    }
  }
  
}
