import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/User';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
    @InjectRepository(User)private readonly userRepository:Repository<User>,){}

    findOneBy(){
        return this.userRepository.findOneBy
    }


findById(id){
    return this.userRepository.findOneBy({id:id});
}


}


// GET /users/me → Obter perfil do usuário logado
// GET /users/:id → Obter perfil público de um usuário (eventos criados, participando)