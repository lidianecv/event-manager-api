import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService ){}

    @Get('me')
    getMyUser(){
        return this.userService
    }

    @Get('/id/:id')
     findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService
    
  }


}



// GET /users/me → Obter perfil do usuário logado
// GET /users/:id → Obter perfil público de um usuário (eventos criados, participando)