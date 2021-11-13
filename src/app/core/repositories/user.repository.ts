import { Observable } from "rxjs";
import { User } from "../domain/user.model";

export abstract class UserRepository {

    abstract getUsers(): Observable<User[]> ;
}