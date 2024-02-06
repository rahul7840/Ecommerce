import { BadRequestException, Injectable } from "@nestjs/common";
import { SignUpDto } from "./Dto/signUp.dto";
import { PrismaService } from "prisma/prisma.service";

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

        // Optionally hash the password
        // const hashedPassword = await hashPassword(dto.password);

        let createUser = await this.prisma.user.create({
            data: {
                full_name: dto.fullName,
                user_name: dto.userName,
                phone_number: dto.phoneNumber,
                email: dto.email,
                password: dto.password,  
                address: dto.address,
                gender: dto.gender,
            }
        });

        // Optionally return user information or JWT token
        return {
            message: 'User created successfully',
            user: createUser,
            // token: generateToken(createUser),
        };
    } catch (error) {
        // Handle the error and return a meaningful response
        console.error('Error creating user:', error);
        throw new BadRequestException('Error creating user');
    }
}

}