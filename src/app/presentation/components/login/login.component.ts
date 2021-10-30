import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUseCase } from 'src/app/core/usecases/login.usecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginUseCase: LoginUseCase, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitFormLogin(email: string, password: string): void{
    console.log(email, password);
    this.loginUseCase.execute({ email, password }).subscribe(() => {
      console.log("login");
      this.router.navigate([""]);
    })
  }
}
