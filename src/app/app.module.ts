import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { LoginComponent } from './containers/login/login.component';
import { GuideComponent } from './containers/guide/guide.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    LoginComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
