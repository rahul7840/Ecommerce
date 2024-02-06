import { BadRequestException, Injectable } from "@nestjs/common";
import { SignUpDto } from "./Dto/signUp.dto";
import { PrismaService } from "prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import { LogInDto } from "./Dto/logIn.dto";

@Injectable()
export class AuthService{
 
constructor(private readonly prisma: PrismaService){}


async signUp(dto: SignUpDto) {
    // const { fullName, userName, email, password, address, phoneNumber, gender, profilePicture } = dto;

    try {
        let duplicateEmail = await this.prisma.user.findFirst({
            where: { email: dto.email }
        });

        if (duplicateEmail) {
         return {message:'User with this email already exists. Please login.', status:'401'};
        }

        let duplicateUsername = await this.prisma.user.findFirst({
            where: { user_name: dto.userName }
        });

        if (duplicateUsername) {
            return { message: 'Username already exists. Please choose a different username',status:'401'}
        }

        const hashedPassword = await bcrypt.hash(dto.password,10);    

        let createUser = await this.prisma.user.create({
            data: {
                full_name: dto.fullName,
                user_name: dto.userName,
                phone_number: dto.phoneNumber,
                email: dto.email,
                password: hashedPassword,  
                address: dto.address,
                gender: dto.gender,
            }
        });

        return {
            message: 'User created successfully',
            user: createUser,
            // token: generateToken(createUser),
        };
    } catch (error) {
        throw new BadRequestException('Error creating user');
    }
}

async logIn(dto:LogInDto){
   const user = await this.prisma.user.findFirst({
    where:{
         email: dto.email 
    }
   })
   if (!user) {
    return { message: 'Invalid credentials', status: 401 };
}
  const passwordMatch = await bcrypt.compare(dto.password, user.password);
  if (passwordMatch) return { message: 'Login successful', status: 200 };
 else return { message: 'Invalid credentials', status: 401 };
}


}