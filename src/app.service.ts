import { Injectable } from '@nestjs/common';
import { RegisterUserRequestDTO } from './dto/registerUserDto';

@Injectable()
export class AppService {
  registerUser(registerUserRequestDTO: RegisterUserRequestDTO): any {
    const { firstName, middleName, lastName, emailAddress, birthDate, gender } =
      registerUserRequestDTO;
    return {
      firstName,
      middleName,
      lastName,
      emailAddress,
      birthDate,
      gender,
    };
  }
}
