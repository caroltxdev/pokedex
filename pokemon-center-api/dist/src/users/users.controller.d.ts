import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    me(req: any): Promise<{
        id: string;
        email: string;
        nome: string;
        createdAt: Date;
    } | null>;
}
