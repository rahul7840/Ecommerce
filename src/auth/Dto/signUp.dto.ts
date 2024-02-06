import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsOptional,IsString, MaxLength, IsEnum } from 'class-validator';

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
  }
  
export class SignUpDto{
    @ApiProperty({
        example: 'john wick',
        description: 'The name of the user.',
      })
    @IsNotEmpty({ message: 'fullName cannot be empty' })
    @IsString()
    fullName:string;
    @ApiProperty({
        example: 'john_wick_1122',
        description: 'The userName of the user.',
      })
    @IsNotEmpty({ message: 'UserName cannot be empty' })
    @IsString()
    userName:string;

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

    @ApiProperty({
        example: '123 main street london',
        description: 'The address of the user.',
      })
      @IsNotEmpty({ message: 'address cannot be empty' })
    @IsString()
    address:string;

    @ApiProperty({
        example: '1234567890',
        description: 'Mobile number of the user',
      })
    @IsNotEmpty({ message: 'phoneNumber cannot be empty' })
    @MaxLength(12)
    phoneNumber:number;

    @ApiProperty({
        example: Gender.Male,
        description: 'Select the gender',
      })
    @IsString()
    @IsNotEmpty({ message: 'gender cannot be empty' })
    @IsEnum(Gender)
    gender:string;

    @ApiProperty({
        example: 'https://example.com/profile.jpg',
        description: 'URL of the user profile image',
      })
    @IsString()
    @MaxLength(255)
    @IsOptional()
    profilePicture:string;

    // capchacode:string;


    createdAt: Date; 
    updatedAt: Date;

}