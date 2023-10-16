import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PassportStrategy } from '@nestjs/passport';
import { Repository } from 'typeorm';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { User } from 'src/users/user.entity';
import { JwtPayload } from './jwt-payload.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload;
    const user = await this.userRepository.findOne({ where: { username } });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
