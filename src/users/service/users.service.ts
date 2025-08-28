import { Body, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/User';
import { Repository } from 'typeorm';
import { UsersController } from '../controller/users.controller';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) 
        private readonly userRepository: Repository<User>
    ) { }

    
}


// Auth
// POST /auth/register → Registrar novo usuário
// POST /auth/login → Login & obter JWT

// GET /users/me → Obter perfil do usuário logado
// GET /users/:id → Obter perfil público de um usuário (eventos criados, participando)
