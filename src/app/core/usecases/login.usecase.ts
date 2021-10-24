import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/usecase";
import { User } from "../domain/user.model";
import { AuthRepository } from "../repositories/auth.repository";
import { LoginForm } from "../domain/login.form";

@Injectable({
    providedIn: 'root'
  })
  export class LoginUseCase implements UseCase<LoginForm, boolean>{
    
    constructor(private auth: AuthRepository){}

    execute(params: LoginForm): Observable<boolean> {
        return this.auth.loginWithEmailAndPassword(params.email, params.password);
    }
      
  }