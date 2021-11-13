import { Observable } from "rxjs";
import { User } from "../domain/user.model";

export abstract class AuthRepository {
    abstract loginWithEmailAndPassword(email: string, password: string): Observable<boolean>; 
    abstract retrieveUser(): Observable<User>
    abstract isUserAuthenticated(): Observable<boolean>;
    abstract logout(): Observable<void>;
}