import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRepository } from './core/repositories/auth.repository';
import { AuthMockRepository } from './data/repository/auth-mock-repository/auth-mock.repository';
import { LoginComponent } from './presentation/components/login/login.component';
import { PanelComponent } from './presentation/components/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ { provide: AuthRepository, useClass: AuthMockRepository}],
  bootstrap: [AppComponent]
})
export class AppModule { }
