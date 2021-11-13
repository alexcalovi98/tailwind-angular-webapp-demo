import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutUseCase } from 'src/app/core/usecases/logout.usecase';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  isMobileMenuOpened: boolean = false;
  isAccountMenuOpened: boolean = false;

  constructor(private router: Router, private logoutUseCase: LogoutUseCase) { }

  ngOnInit(): void {}

  toggleMenuMobile(): void {
    this.isMobileMenuOpened = !this.isMobileMenuOpened;
  }

  toggleMenuAccount(): void {
    this.isAccountMenuOpened = !this.isAccountMenuOpened;
  }
  
  logout(): void {
    this.logoutUseCase.execute({});
    this.router.navigate(["login"]);
  }
}
