import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./Dto/signUp.dto";
import {ApiOperation,ApiResponse,ApiTags,} from "@nestjs/swagger";
import { LogInDto } from "./Dto/logIn.dto";


@ApiTags('Auth')
@Controller('auth')
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
