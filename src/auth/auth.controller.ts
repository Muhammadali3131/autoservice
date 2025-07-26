import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Res,
  Req,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto, LoginUserDto } from "../users/dto";
import { Response, Request } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  
  async register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }

  @Get("activate/:link")
 
  async activate(@Param("link") link: string) {
    await this.authService.activate(link);
    return { message: "Foydalanuvchi muvaffaqiyatli aktivatsiya qilindi" };
  }

  @Post("login")
  @HttpCode(HttpStatus.OK)
  
  async login(
    @Body() dto: LoginUserDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.login(dto, res);
  }

  @Get("refresh")
  @HttpCode(HttpStatus.OK)
  
  async refresh(@Res({ passthrough: true }) res: Response) {
    return this.authService.refresh(res);
  }

  @Post("logout")
  @HttpCode(HttpStatus.OK)
 
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const token = req.cookies?.refreshToken;
    return this.authService.logout(token, res);
  }
}
