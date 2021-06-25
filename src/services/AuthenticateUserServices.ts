import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({ email, password}: IAuthenticateRequest){
    const usersRepositories = getCustomRepository(UsersRepositories);

    //verificar se email já existe
    const user = await usersRepositories.findOne({
        email
    });

    if(!user){
        throw new Error("Email/Password Incorrect");
    }
    //Verificar se a senha é válida
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
        throw new Error("Email/Password Incorrect");
    }
    //Gerar token
}
}

export  { AuthenticateUserService };