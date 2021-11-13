import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRepository } from './core/repositories/auth.repository';
import { AuthMockRepository } from './data/repository/auth-mock-repository/auth-mock.repository';
import { LoginComponent } from './presentation/components/login/login.component';
import { PanelComponent } from './presentation/components/panel/panel.component';
import { DashboardComponent } from './presentation/components/panel/dashboard/dashboard.component';
import { PageComponent } from './presentation/components/panel/page/page.component';
import { TeamComponent } from './presentation/components/panel/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    DashboardComponent,
    PageComponent,
    TeamComponent
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
