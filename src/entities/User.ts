import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

import { v4 as uuid} from "uuid";

@Entity("users") //definindo nome da tabela do BD
class User {
     @PrimaryColumn()
     readonly id: string;

     @Column()
     name: string;

     @Column()
     email: String;

     @Column()
      admin: boolean;

    @CreateDateColumn()
      create_at: Date;

    @UpdateDateColumn()
      update_at: Date
    
      constructor() {
          if(!this.id){
              this.id = uuid();
          }
      }
    }

export { User };