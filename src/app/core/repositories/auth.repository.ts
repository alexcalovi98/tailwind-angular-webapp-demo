import { Observable } from "rxjs";
import { Account } from "../domain/account.model";

export abstract class AuthRepository {
    abstract loginWithEmailAndPassword(email: string, password: string): Observable<boolean>; 
    abstract retrieveAccount(): Observable<Account>
    abstract isUserAuthenticated(): Observable<boolean>;
    abstract logout(): Observable<void>;
}