import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
//extends para acessar os métodos dento do typeorm
class UsersRepositories extends Repository<User>{
 
}

export { UsersRepositories}