import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(email: string, nome: string, senha: string): Promise<{
        token: string;
    }>;
    login(email: string, senha: string): Promise<{
        token: string;
    }>;
}
