import { Injectable } from "@nestjs/common";
import { SignUpDto } from "./Dto/signUp.dto";

@Injectable()
export class AuthService {
 
// constructor(private prismas)


    async signUp(dto:SignUpDto){
        const {fullName,userName,email,password,address,phoneNumber,gender,profilePicture} = dto
        
        let check = await this.


    }
}