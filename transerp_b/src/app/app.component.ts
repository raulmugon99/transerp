import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'timeline-client';


  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Clientes', url: 'clientes', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
 
 
  constructor(public loginService: LoginService) { }


}
