import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/usecase";
import { User } from "../domain/user.model";
import { UserRepository } from "../repositories/user.repository";

@Injectable({
    providedIn: 'root'
  })
export class GetUsersUseCase implements UseCase<{}, User[]>{
    
    constructor(private userRepository: UserRepository){}

    execute(params: {}): Observable<User[]> {
        return this.userRepository.getUsers();
    }
}