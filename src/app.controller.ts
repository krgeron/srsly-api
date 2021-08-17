import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RegisterUserRequestDTO } from './dto/registerUserDto';

@Controller('register')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UsePipes(ValidationPipe)
  registerUser(@Body() registerUserRequestDTO: RegisterUserRequestDTO) {
    return this.appService.registerUser(registerUserRequestDTO);
  }
}
