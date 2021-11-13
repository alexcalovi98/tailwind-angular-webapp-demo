import { Mapper } from "src/app/core/base/mapper";
import { User } from "src/app/core/domain/user.model";
import { UserMockEntity } from "./user-mock-entity";

export class UserMockEntityMapper extends Mapper<UserMockEntity, User>{
    
    mapFrom(param: UserMockEntity): User {
        let user: User = {
            name: param.name,
            surname: param.surname,
            fullname: param.name + " " + param.surname,
            email: param.email,
            job: param.job,
            department: param.department,
            status: param.status,
            role: param.role,
            avatarUrl: param.avatarUrl
        };
        return user;
    }
    
    mapTo(param: User): UserMockEntity {
        throw new Error("Method not implemented.");
    }
    
}