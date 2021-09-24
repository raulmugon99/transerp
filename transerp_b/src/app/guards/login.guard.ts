import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { OktaAuthService } from '@okta/okta-angular';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public oktaAuth: OktaAuthService,
    private navController: NavController,
    private loginService: LoginService) {
    
  }
  canActivate(): boolean {
    // if (this.loginService.isAuthenticated){
      return true;
    // }else{
    //   this.navController.navigateRoot('')
    //   }
    }  
}
