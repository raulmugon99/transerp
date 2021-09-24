import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  APIURL: string;
  header: any;
  logeado = false;
  usuario: string = '';

  constructor(private http: HttpClient) {
    this.APIURL = 'http://localhost:3000/api/';
    this.header = {
      headers: new HttpHeaders()
        .set('user-token',  `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvSWQiOjEsImNyZWF0ZWRBdCI6MTYwNDc0NzM0NX0.i2GSVlNIUntY7bPud1Vo6tM6qLg4ACwi55VvrMaU-IQ`)
        .set('Content-Type', 'application/json')
    };
   }

   iniciarSesion(usuario: any) {
    return this.http.post(`${this.APIURL}users/login`, usuario,  this.header );
  }

  guardarSesion(token: string, usuario: string) {
    const payload = {
      token,
      usuario
    };
    localStorage.setItem("sesion", JSON.stringify(payload));
  }

  obtenerSesion() {
    let sesion = JSON.parse(localStorage.getItem('sesion'));
    if (sesion) {
      this.logeado = true;
      this.usuario = sesion.usuario;
    } else {
      this.logeado = false;
    }
    return sesion;
  }
}
