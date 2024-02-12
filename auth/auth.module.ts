import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
          secret: 'this',
          signOptions: { expiresIn: '1h' },
        }),
        PrismaModule],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
