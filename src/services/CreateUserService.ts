
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean
}

class CreateUserService {
    //recebendo dados do repositorio pela interface
    async execute({name, email, admin} : IUserRequest){
        const UsersRepository = getCustomRepository(UsersRepositories);

        //Checando se o campo email foi preenchido
        if(!email){
            throw new Error ("Email Incorrect")
        }
        //checando se o email já existe
        const userAlreadyExists = await UsersRepository.findOne({
            email,
        });

        //Tratamento de erro, caso já exista email
        if(userAlreadyExists){
            throw new Error("User already exists");
        }
        //Cadastrando um novo usuário
        const user = UsersRepository.create({
            name,
            email,
            admin,
        });

        await UsersRepository.save(user);

        return user;
    }
}

export { CreateUserService }