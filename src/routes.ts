import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

 const createUserController = new CreateUserController();

 router.post("/users", createUserController.handle) //recebendo os parametros request e response através do handle

export { router }