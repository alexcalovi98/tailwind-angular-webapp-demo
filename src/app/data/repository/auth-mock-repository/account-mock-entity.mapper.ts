import { Mapper } from "src/app/core/base/mapper";
import { Account } from "src/app/core/domain/account.model";
import { AccountMockEntity } from "./account-mock-entity";

export class AccountMockEntityMapper implements Mapper<AccountMockEntity, Account>{
    
    mapFrom(param: AccountMockEntity): Account {
        return {
            name: param.name,
            surname: param.surname,
            email: param.email
        };
    }
    
    mapTo(param: Account): AccountMockEntity {
        return {
            name: param.name,
            surname: param.surname,
            email: param.email
        };
    }

}