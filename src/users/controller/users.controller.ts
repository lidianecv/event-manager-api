import { Body, Controller, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { UsersService } from '../service/users.service';


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

   

}


