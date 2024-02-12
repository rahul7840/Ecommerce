import { Body, Controller, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./Dto/signUp.dto";
import {ApiOperation,ApiResponse,ApiTags,} from "@nestjs/swagger";
import { LogInDto } from "./Dto/logIn.dto";
import { JwtAuthGuard } from "./Guard/jwt.guard";


@ApiTags('Auth')
@Controller('auth')
// @UseGuards(JwtAuthGuard)
export class AuthController {
    constructor(private readonly authService:AuthService) {}

    @ApiResponse({
        status: 200,
        description: 'Successfully signup.',
      })
      @ApiOperation({
        summary: 'user signup',
        description: 'signup currently.',
      })
    @Post('signup')
    SignUp(@Body()dto:SignUpDto, ParseIntPipe) {
      return this.authService.signUp(dto);
    }


    @Post('/login')
    async login(@Body() dto: LogInDto) {
      return await this.authService.logIn(dto);
    }
}
