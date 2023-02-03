import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentials } from './dto/user-credentials.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentials: AuthCredentials): Promise<User> {
    return this.authService.signUp(authCredentials);
  }

  @Post('/signin')
  signIn(@Body() authCredentials: AuthCredentials): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentials);
  }
}
