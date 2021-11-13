import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Account } from "src/app/core/domain/account.model";
import { AuthRepository } from "src/app/core/repositories/auth.repository";
import { AccountMockEntity } from "./account-mock-entity";
import { AccountMockEntityMapper } from "./account-mock-entity.mapper";

@Injectable({
    providedIn: 'root'
  })
export class AuthMockRepository implements AuthRepository{

    private mapper: AccountMockEntityMapper = new AccountMockEntityMapper();

    loginWithEmailAndPassword(email: string, password: string): Observable<boolean> {
        return new Observable(subscribe => {
            this.saveAccount({ name: "Alex", surname: "Calovi", email: email });
            subscribe.next(true);
        });
    }
    
    saveAccount(Account: Account): void{
        localStorage.setItem("Account", JSON.stringify(this.mapper.mapTo(Account)));
    }

    retrieveAccount(): Observable<Account> {
        return new Observable(subscribe => {
            let contentFromLocalStorage: string | null = localStorage.getItem("Account");
            if(contentFromLocalStorage != null){
                let AccountMockEntity: AccountMockEntity = JSON.parse(contentFromLocalStorage);
                if(AccountMockEntity != null) {
                    subscribe.next(AccountMockEntity);
                    return;
                }
            }
            subscribe.error(new Error("Account not found"));
        });
    }
    
    isUserAuthenticated(): Observable<boolean> {
        return this.retrieveAccount().pipe(map(() => true), catchError(err => of(false)));
    }

    logout(): Observable<void> {
        return new Observable(subsribe => {
            localStorage.clear();
            subsribe.next();
        });
    }
}