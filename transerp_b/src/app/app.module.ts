import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';

import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelineComponent } from './timeline/timeline.component';


const oktaConfig = {
  issuer: 'https://dev-1775234.okta.com/oauth2/default',
  clientId: '0oa1ybko96zgxgM0N5d7',
  redirectUri: 'http://localhost:4200/callback'
};

@NgModule({
  declarations: [AppComponent, TimelineComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, DataTablesModule, HttpClientModule, OktaAuthModule, FormsModule, ReactiveFormsModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, { provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
