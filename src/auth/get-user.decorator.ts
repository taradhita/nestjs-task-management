import { User } from '../users/user.entity';
import { createParamDecorator } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
