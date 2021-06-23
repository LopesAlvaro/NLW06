import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{

    async handle(request : Request, response : Response){
        const { name, email, admin } = request.body; //Recebendo todos os dados passados

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, admin });

        return response.json(user);
    }
}

export { CreateUserController }