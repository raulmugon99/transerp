import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _login: LoginService,
    private navCTRL: NavController) { }

  ngOnInit() {
  }

  test(usuario: string | any, password: string | any) {
    let user: any = {
      email: usuario,
      password: password,
      username: 'rmg99'
    }
    this._login.iniciarSesion(user).subscribe((data: any)=> {
      this._login.guardarSesion(data.success, user.username);
      this.navCTRL.navigateRoot('inicio');
    })
  }
}
