# 🎮 PokéCenter Admin

Sistema de gerenciamento de Pokémons com autenticação, CRUD completo e atualizações em tempo real via WebSocket.

---

## 🖥️ Interface

<img width="1365" height="621" alt="image" src="https://github.com/user-attachments/assets/b48915f3-be19-4d98-a609-c5418f1d0a85" />
<img width="1365" height="628" alt="image" src="https://github.com/user-attachments/assets/197b15d0-7cde-4322-a732-88cf7f2d2c16" />
<img width="1344" height="626" alt="image" src="https://github.com/user-attachments/assets/d5784ca3-1121-4a85-a211-7b02db5d936b" />


## ✅ Testes

<img width="579" height="343" alt="Captura de tela 2026-03-08 130221" src="https://github.com/user-attachments/assets/abfd3a52-bcb7-4b6f-8eb3-556f0e3e7d21" />


## 🚀 Deploy

| Serviço | URL |
|---|---|
| Frontend | [pokedex-mu-green.vercel.app](https://pokedex-mu-green.vercel.app) |
| Backend | [pokedex-production-945a.up.railway.app](https://pokedex-production-945a.up.railway.app) |

---

## 🛠️ Stack

### Frontend
| Tecnologia | Versão | Motivo |
|---|---|---|
| Next.js | 16 | App Router, Server Components, roteamento por arquivo |
| TypeScript | 5.7 | Type safety, melhor DX |
| Tailwind CSS | 4 | Estilização utilitária sem CSS manual |
| React Context | - | Gerenciamento de estado global (auth + pokemon) |
| React Hook Form | - | Gerenciamento de formulários com validação |
| socket.io-client | 4.8 | Conexão WebSocket para atualizações em tempo real |
| Lucide React | - | Ícones SVG otimizados |

### Backend
| Tecnologia | Versão | Motivo |
|---|---|---|
| Node.js | 18 | Runtime JavaScript server-side |
| NestJS | 11 | Framework modular, injeção de dependências nativa |
| TypeScript | 5.7 | Type safety end-to-end |
| Prisma | 5.22 | ORM com schema centralizado e type-safety automático |
| PostgreSQL | 15 | Banco relacional robusto |
| Docker | - | Containerização do banco, isolamento de ambiente |
| JWT + Passport | - | Autenticação stateless, padrão REST |
| bcrypt | 6 | Hash de senhas battle-tested |
| socket.io | 4.8 | WebSocket para notificações em tempo real |
| Jest | 30 | Testes unitários com mocks |

### DevOps
| Tecnologia | Motivo |
|---|---|
| Vercel | Deploy do frontend Next.js com CI/CD automático |
| Railway | Deploy do backend NestJS + banco PostgreSQL gerenciado |
| GitHub | Versionamento e integração contínua |
---

## 🏗️ Decisões de Arquitetura

**Estrutura por domínio** — cada módulo (`auth/`, `users/`, `pokemon/`) é isolado com seu próprio controller, service e module, seguindo a filosofia do NestJS.

**Ownership no Service** — a validação de quem pode editar/deletar um Pokémon fica no `PokemonService`, não no controller. Regras de negócio pertencem à camada de serviço.

**JWT stateless** — tokens são verificados a cada requisição via `JwtStrategy`, sem necessidade de sessão no servidor.

**WebSocket para tempo real** — ao criar, editar ou deletar um Pokémon, o `PokemonGateway` emite um evento `pokemon-updated` para todos os clientes conectados, que atualizam a lista automaticamente.

**Prisma como ORM** — schema centralizado em `schema.prisma`, migrations versionadas, e tipos TypeScript gerados automaticamente a partir do schema.

---

## 📋 Funcionalidades

- ✅ Cadastro e login com JWT
- ✅ Listagem global de Pokémons (todos os usuários)
- ✅ Criação de Pokémon (autenticado)
- ✅ Edição de Pokémon (somente o dono)
- ✅ Exclusão de Pokémon (somente o dono)
- ✅ Filtro por nome e tipo
- ✅ Sprite automático via PokéAPI
- ✅ Atualização em tempo real via WebSocket
- ✅ Badge "MEU" nos Pokémons do usuário logado

---

## 🔌 Endpoints da API

| Método | Rota | Auth | Descrição |
|---|---|---|---|
| POST | `/auth/register` | ❌ | Cadastro |
| POST | `/auth/login` | ❌ | Login |
| GET | `/users/me` | ✅ | Dados do usuário logado |
| GET | `/pokemon` | ✅ | Lista todos os Pokémons |
| GET | `/pokemon/:id` | ✅ | Busca um Pokémon |
| POST | `/pokemon` | ✅ | Cria um Pokémon |
| PUT | `/pokemon/:id` | ✅ Owner | Edita um Pokémon |
| DELETE | `/pokemon/:id` | ✅ Owner | Deleta um Pokémon |

---

## ⚙️ Como rodar localmente

### Pré-requisitos
- Node.js 18+
- Docker

### 1. Clone o repositório
```bash
git clone https://github.com/caroltxdev/pokedex.git
cd pokedex
```

### 2. Suba o banco de dados
```bash
cd pokemon-center-api
docker-compose up -d
```

### 3. Configure as variáveis de ambiente do backend
Crie um arquivo `.env` em `pokemon-center-api/`:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/pokemon_db?schema=public"
JWT_SECRET=pokemon_center_secret_key_2026
PORT=3001
```

### 4. Rode as migrations e suba o backend
```bash
npx prisma migrate deploy
npm run start:dev
```

### 5. Configure as variáveis de ambiente do frontend
Crie um arquivo `.env.local` em `pokemon-center-web/`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 6. Suba o frontend
```bash
cd ../pokemon-center-web
npm run dev
```

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:3001

---

## 🧪 Testes

```bash
cd pokemon-center-api
npm run test
```

Suites cobertas:
- `AuthService` — register, login, erros de credencial
- `PokemonService` — findOne, ownership em update e remove
- Controllers e Services inicializam corretamente

---

## 📁 Estrutura do projeto

```
pokedex/
├── pokemon-center-api/       # Backend NestJS
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   └── src/
│       ├── auth/
│       ├── users/
│       ├── pokemon/
│       └── prisma/
└── pokemon-center-web/       # Frontend Next.js
    └── app/
        ├── (auth)/
        │   ├── login/
        │   └── register/
        ├── dashboard/
        ├── components/
        ├── context/
        └── types/
```
