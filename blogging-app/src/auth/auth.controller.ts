import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginDto: { username: string; password: string },
    @Res() res: Response,
  ) {
    const { username, password } = loginDto;
    const tokens = await this.authService.login(username, password);
    res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true });
    return res.json({ accessToken: tokens.accessToken });
  }
}
