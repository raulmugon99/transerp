import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient, public oktaAuth: OktaAuthService) {
  }

  private async request(method: string, url: string, data?: any) {
    const token = await this.oktaAuth.getAccessToken();

    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getClientes() {
    return this.request('GET', `${environment.serverUrl}/cliente`);
  }

  // createEvent(event) {
  //   return this.request('POST', `${environment.serverUrl}/event`, event);
  // }

  // updateEvent(event) {
  //   return this.request('PUT', `${environment.serverUrl}/event/${event.id}`, event);
  // }

  // deleteEvent(event) {
  //   return this.request('DELETE', `${environment.serverUrl}/event/${event.id}`);
  // }
}