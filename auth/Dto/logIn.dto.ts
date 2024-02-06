import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsOptional,IsString, MaxLength, IsEnum, IsInt } from 'class-validator';


export class LogInDto{
    @ApiProperty({
        example: 'xyz11@gmail.com',
        description: 'The email address of the user.',
      })
    @IsNotEmpty({ message: 'email cannot be empty' })
    @IsEmail()
    email:string;

    @ApiProperty({
        example: 'testpassword',
        description: 'The password of the user.',
      })
      @IsNotEmpty({ message: 'password cannot be empty' })
      @IsString()
    password:string;

    updatedAt: Date;

}