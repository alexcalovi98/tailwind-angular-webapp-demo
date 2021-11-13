import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './presentation/components/login/login.component';
import { DashboardComponent } from './presentation/components/panel/dashboard/dashboard.component';
import { PageComponent } from './presentation/components/panel/page/page.component';
import { PanelComponent } from './presentation/components/panel/panel.component';
import { AuthGuard  } from './presentation/guards/auth/auth.guard';
import { TeamComponent } from './presentation/components/panel/team/team.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "app", component: PanelComponent, canActivate: [AuthGuard], children: [
    { path: "dashboard", component: DashboardComponent, outlet: "panel" },
    { path: "team", component: TeamComponent, outlet: "panel" },
    { path: "page", component: PageComponent, outlet: "panel" },
    { path: "", redirectTo: "/app/(panel:dashboard)", pathMatch: "full" }
  ]},
  { path: "**", redirectTo: "app" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
