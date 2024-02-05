import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./Dto/signUp.dto";
import {ApiOperation,ApiResponse,ApiTags,} from "@nestjs/swagger";


@ApiTags('Auth')
@Controller('auth')
export class LeaderboardController {
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
    SignUp(@Body()dto:SignUpDto) {
      return this.authService.signUp(dto);
    }
}
