"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const pokemon_gateway_1 = require("./pokemon.gateway");
let PokemonService = class PokemonService {
    prisma;
    gateway;
    constructor(prisma, gateway) {
        this.prisma = prisma;
        this.gateway = gateway;
    }
    async findAll() {
        return this.prisma.pokemon.findMany({
            include: {
                user: {
                    select: { id: true, nome: true },
                },
            },
        });
    }
    async findOne(id) {
        const pokemon = await this.prisma.pokemon.findUnique({
            where: { id },
            include: { user: { select: { id: true, nome: true } } },
        });
        if (!pokemon)
            throw new common_1.NotFoundException('Pokemon não encontrado');
        return pokemon;
    }
    async create(data) {
        const pokemon = await this.prisma.pokemon.create({ data });
        this.gateway.notifyPokemonUpdated();
        return pokemon;
    }
    async update(id, userId, data) {
        const pokemon = await this.findOne(id);
        if (pokemon.userId !== userId) {
            throw new common_1.ForbiddenException('Você não tem permissão para editar este pokemon');
        }
        const updated = await this.prisma.pokemon.update({ where: { id }, data });
        this.gateway.notifyPokemonUpdated();
        return updated;
    }
    async remove(id, userId) {
        const pokemon = await this.findOne(id);
        if (pokemon.userId !== userId) {
            throw new common_1.ForbiddenException('Você não tem permissão para deletar este pokemon');
        }
        const deleted = await this.prisma.pokemon.delete({ where: { id } });
        this.gateway.notifyPokemonUpdated();
        return deleted;
    }
};
exports.PokemonService = PokemonService;
exports.PokemonService = PokemonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        pokemon_gateway_1.PokemonGateway])
], PokemonService);
//# sourceMappingURL=pokemon.service.js.map