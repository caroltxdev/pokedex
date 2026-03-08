import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        nome: string;
        senha: string;
        createdAt: Date;
    } | null>;
    create(data: {
        email: string;
        nome: string;
        senha: string;
    }): Promise<{
        id: string;
        email: string;
        nome: string;
        senha: string;
        createdAt: Date;
    }>;
    findById(id: string): Promise<{
        id: string;
        email: string;
        nome: string;
        createdAt: Date;
    } | null>;
}
