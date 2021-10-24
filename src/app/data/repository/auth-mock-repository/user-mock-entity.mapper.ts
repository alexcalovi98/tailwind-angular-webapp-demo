import { Mapper } from "src/app/core/base/mapper";
import { User } from "src/app/core/domain/user.model";
import { UserMockEntity } from "./user-mock-entity";

export class UserMockEntityMapper implements Mapper<UserMockEntity, User>{
    
    mapFrom(param: UserMockEntity): User {
        return {
            name: param.name,
            surname: param.surname,
            email: param.email
        };
    }
    
    mapTo(param: User): UserMockEntity {
        return {
            name: param.name,
            surname: param.surname,
            email: param.email
        };
    }

}