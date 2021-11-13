import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, flatMap, map } from "rxjs/operators";
import { User } from "src/app/core/domain/user.model";
import { AuthRepository } from "src/app/core/repositories/auth.repository";
import { UserMockEntity } from "./user-mock-entity";
import { UserMockEntityMapper } from "./user-mock-entity.mapper";

@Injectable({
    providedIn: 'root'
  })
export class AuthMockRepository implements AuthRepository{

    private mapper: UserMockEntityMapper = new UserMockEntityMapper();

    loginWithEmailAndPassword(email: string, password: string): Observable<boolean> {
        return new Observable(subscribe => {
            this.saveUser({ name: "Alex", surname: "Calovi", "email": email });
            subscribe.next(true);
        });
    }
    
    saveUser(user: User): void{
        localStorage.setItem("user", JSON.stringify(this.mapper.mapTo(user)));
    }

    retrieveUser(): Observable<User> {
        return new Observable(subscribe => {
            let contentFromLocalStorage: string | null = localStorage.getItem("user");
            if(contentFromLocalStorage != null){
                let userMockEntity: UserMockEntity = JSON.parse(contentFromLocalStorage);
                if(userMockEntity != null) {
                    subscribe.next(userMockEntity);
                    return;
                }
            }
            subscribe.error(new Error("User not found"));
        });
    }
    
    isUserAuthenticated(): Observable<boolean> {
        return this.retrieveUser().pipe(map(() => true), catchError(err => of(false)));
    }

    logout(): Observable<void> {
        return new Observable(subsribe => {
            localStorage.clear();
            subsribe.next();
        });
    }
}