import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories"

class CreateTagServices{
    async execute(name : string){
        const tagsRepository = getCustomRepository(TagsRepositories);

        if(!name){
            throw new Error("Name Incorrect");
        }

        const tagAlreadyExists = await tagsRepository.findOne({
            name,
        });

        if(tagAlreadyExists){
            throw new Error("Tag already exists!");  
        }

        const tag = tagsRepository.create({
            name,
        });

        await tagsRepository.save(tag);

        return tag;
    }
}

export { CreateTagServices };