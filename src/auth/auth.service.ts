import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthCredentialsDto } from './auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    await this.usersService.createUser(username, password);
  }
}
