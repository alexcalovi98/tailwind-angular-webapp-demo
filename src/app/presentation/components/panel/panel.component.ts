import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  isMobileMenuOpened: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  toggleMenuMobile(): void{
    this.isMobileMenuOpened = !this.isMobileMenuOpened;
  }

}
