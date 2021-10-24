import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './presentation/login/login.component';
import { PanelComponent } from './presentation/panel/panel.component';
import { AuthGuard  } from './auth.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: PanelComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
