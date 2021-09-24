import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  APIURL: string;
  header: any;


  constructor(private http: HttpClient,
              private loginService: LoginService) {
    this.APIURL = 'http://localhost:3000/api/';
    this.header = {
      headers: new HttpHeaders()
        .set('user-token',  loginService.obtenerSesion().token)
        .set('Content-Type', 'application/json')
    }
   }

  obtenerClientes() {
    return this.http.get(`${this.APIURL}clientes`,  this.header );
  }
  crearServicio(nuevoServicio: any) {
    return this.http.post(`${this.APIURL}clientes`, nuevoServicio,  this.header);
  }
  borrarServicio(id) {
    return this.http.delete(`${this.APIURL}clientes/${id}`, this.header);
  }
  editarServicio(id, servicioAEditar){
    console.log(id);
    console.log(servicioAEditar);
    return this.http.put(`${this.APIURL}clientes/${id}`, servicioAEditar, this.header);
  }
  obtenerClientesCriterio(criterio: string, cadena: string){
    return this.http.get(`${this.APIURL}clientes/criterio/${criterio}/${cadena}`,  this.header );
  }
}