"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function main() {
    let demo = await prisma.user.findUnique({
        where: { email: 'demo@pokecenter.com' },
    });
    if (!demo) {
        const senha = await bcrypt.hash('demo123', 10);
        demo = await prisma.user.create({
            data: {
                email: 'demo@pokecenter.com',
                nome: 'Professor Oak',
                senha,
            },
        });
        console.log('Usuário demo criado!');
    }
    const count = await prisma.pokemon.count({
        where: { userId: demo.id },
    });
    if (count === 0) {
        await prisma.pokemon.createMany({
            data: [
                { nome: 'Pikachu', tipo: 'Electric', nivel: 50, hp: 120, numeroPokedex: 25, userId: demo.id },
                { nome: 'Charizard', tipo: 'Fire, Flying', nivel: 80, hp: 200, numeroPokedex: 6, userId: demo.id },
                { nome: 'Mewtwo', tipo: 'Psychic', nivel: 100, hp: 255, numeroPokedex: 150, userId: demo.id },
                { nome: 'Gengar', tipo: 'Ghost, Poison', nivel: 60, hp: 150, numeroPokedex: 94, userId: demo.id },
                { nome: 'Bulbasaur', tipo: 'Grass, Poison', nivel: 30, hp: 100, numeroPokedex: 1, userId: demo.id },
                { nome: 'Eevee', tipo: 'Normal', nivel: 25, hp: 95, numeroPokedex: 133, userId: demo.id },
            ],
        });
        console.log('Pokémons demo criados!');
    }
    console.log('Seed concluído!');
}
main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
//# sourceMappingURL=seed.js.map