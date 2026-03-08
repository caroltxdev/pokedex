import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: {
        email: string;
        nome: string;
        senha: string;
    }): Promise<{
        token: string;
    }>;
    login(body: {
        email: string;
        senha: string;
    }): Promise<{
        token: string;
    }>;
}
