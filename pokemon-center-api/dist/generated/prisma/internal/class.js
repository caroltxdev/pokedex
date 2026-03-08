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
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.4.2",
    "engineVersion": "94a226be1cf2967af2541cca5529f0f7ba866919",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id        String   @id @default(uuid())\n  email     String   @unique\n  nome      String\n  senha     String\n  createdAt DateTime @default(now())\n\n  pokemons Pokemon[] //um user tem muitos pokemons\n}\n\nmodel Pokemon {\n  id            String   @id @default(uuid())\n  createdAt     DateTime @default(now())\n  nome          String\n  tipo          String\n  nivel         Int\n  hp            Int\n  numeroPokedex Int\n\n  userId String\n  user   User   @relation(fields: [userId], references: [id]) //campo virtual que o prisma usa pra fazer o join\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nome\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"senha\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"pokemons\",\"kind\":\"object\",\"type\":\"Pokemon\",\"relationName\":\"PokemonToUser\"}],\"dbName\":null},\"Pokemon\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"nome\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tipo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nivel\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"hp\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"numeroPokedex\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"PokemonToUser\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"user\",\"pokemons\",\"_count\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"Pokemon.findUnique\",\"Pokemon.findUniqueOrThrow\",\"Pokemon.findFirst\",\"Pokemon.findFirstOrThrow\",\"Pokemon.findMany\",\"Pokemon.createOne\",\"Pokemon.createMany\",\"Pokemon.createManyAndReturn\",\"Pokemon.updateOne\",\"Pokemon.updateMany\",\"Pokemon.updateManyAndReturn\",\"Pokemon.upsertOne\",\"Pokemon.deleteOne\",\"Pokemon.deleteMany\",\"_avg\",\"_sum\",\"Pokemon.groupBy\",\"Pokemon.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"createdAt\",\"nome\",\"tipo\",\"nivel\",\"hp\",\"numeroPokedex\",\"userId\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"email\",\"senha\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "ahQgCQQAAEQAIC4AAEEAMC8AAAkAEDAAAEEAMDEBAAAAATJAAEMAITMBAEIAIUQBAAAAAUUBAEIAIQEAAAABACAMAwAARwAgLgAARQAwLwAAAwAQMAAARQAwMQEAQgAhMkAAQwAhMwEAQgAhNAEAQgAhNQIARgAhNgIARgAhNwIARgAhOAEAQgAhAQMAAGQAIAwDAABHACAuAABFADAvAAADABAwAABFADAxAQAAAAEyQABDACEzAQBCACE0AQBCACE1AgBGACE2AgBGACE3AgBGACE4AQBCACEDAAAAAwAgAQAABAAwAgAABQAgAQAAAAMAIAEAAAABACAJBAAARAAgLgAAQQAwLwAACQAQMAAAQQAwMQEAQgAhMkAAQwAhMwEAQgAhRAEAQgAhRQEAQgAhAQQAAGMAIAMAAAAJACABAAAKADACAAABACADAAAACQAgAQAACgAwAgAAAQAgAwAAAAkAIAEAAAoAMAIAAAEAIAYEAABiACAxAQAAAAEyQAAAAAEzAQAAAAFEAQAAAAFFAQAAAAEBCwAADgAgBTEBAAAAATJAAAAAATMBAAAAAUQBAAAAAUUBAAAAAQELAAAQADABCwAAEAAwBgQAAFUAIDEBAE0AITJAAE4AITMBAE0AIUQBAE0AIUUBAE0AIQIAAAABACALAAATACAFMQEATQAhMkAATgAhMwEATQAhRAEATQAhRQEATQAhAgAAAAkAIAsAABUAIAIAAAAJACALAAAVACADAAAAAQAgEgAADgAgEwAAEwAgAQAAAAEAIAEAAAAJACADBQAAUgAgGAAAVAAgGQAAUwAgCC4AAEAAMC8AABwAEDAAAEAAMDEBADYAITJAADcAITMBADYAIUQBADYAIUUBADYAIQMAAAAJACABAAAbADAXAAAcACADAAAACQAgAQAACgAwAgAAAQAgAQAAAAUAIAEAAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACAJAwAAUQAgMQEAAAABMkAAAAABMwEAAAABNAEAAAABNQIAAAABNgIAAAABNwIAAAABOAEAAAABAQsAACQAIAgxAQAAAAEyQAAAAAEzAQAAAAE0AQAAAAE1AgAAAAE2AgAAAAE3AgAAAAE4AQAAAAEBCwAAJgAwAQsAACYAMAkDAABQACAxAQBNACEyQABOACEzAQBNACE0AQBNACE1AgBPACE2AgBPACE3AgBPACE4AQBNACECAAAABQAgCwAAKQAgCDEBAE0AITJAAE4AITMBAE0AITQBAE0AITUCAE8AITYCAE8AITcCAE8AITgBAE0AIQIAAAADACALAAArACACAAAAAwAgCwAAKwAgAwAAAAUAIBIAACQAIBMAACkAIAEAAAAFACABAAAAAwAgBQUAAEgAIBgAAEsAIBkAAEoAICoAAEkAICsAAEwAIAsuAAA1ADAvAAAyABAwAAA1ADAxAQA2ACEyQAA3ACEzAQA2ACE0AQA2ACE1AgA4ACE2AgA4ACE3AgA4ACE4AQA2ACEDAAAAAwAgAQAAMQAwFwAAMgAgAwAAAAMAIAEAAAQAMAIAAAUAIAsuAAA1ADAvAAAyABAwAAA1ADAxAQA2ACEyQAA3ACEzAQA2ACE0AQA2ACE1AgA4ACE2AgA4ACE3AgA4ACE4AQA2ACEOBQAAOgAgGAAAPwAgGQAAPwAgOQEAAAABOgEAAAAEOwEAAAAEPAEAAAABPQEAAAABPgEAAAABPwEAAAABQAEAPgAhQQEAAAABQgEAAAABQwEAAAABCwUAADoAIBgAAD0AIBkAAD0AIDlAAAAAATpAAAAABDtAAAAABDxAAAAAAT1AAAAAAT5AAAAAAT9AAAAAAUBAADwAIQ0FAAA6ACAYAAA6ACAZAAA6ACAqAAA7ACArAAA6ACA5AgAAAAE6AgAAAAQ7AgAAAAQ8AgAAAAE9AgAAAAE-AgAAAAE_AgAAAAFAAgA5ACENBQAAOgAgGAAAOgAgGQAAOgAgKgAAOwAgKwAAOgAgOQIAAAABOgIAAAAEOwIAAAAEPAIAAAABPQIAAAABPgIAAAABPwIAAAABQAIAOQAhCDkCAAAAAToCAAAABDsCAAAABDwCAAAAAT0CAAAAAT4CAAAAAT8CAAAAAUACADoAIQg5CAAAAAE6CAAAAAQ7CAAAAAQ8CAAAAAE9CAAAAAE-CAAAAAE_CAAAAAFACAA7ACELBQAAOgAgGAAAPQAgGQAAPQAgOUAAAAABOkAAAAAEO0AAAAAEPEAAAAABPUAAAAABPkAAAAABP0AAAAABQEAAPAAhCDlAAAAAATpAAAAABDtAAAAABDxAAAAAAT1AAAAAAT5AAAAAAT9AAAAAAUBAAD0AIQ4FAAA6ACAYAAA_ACAZAAA_ACA5AQAAAAE6AQAAAAQ7AQAAAAQ8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQA-ACFBAQAAAAFCAQAAAAFDAQAAAAELOQEAAAABOgEAAAAEOwEAAAAEPAEAAAABPQEAAAABPgEAAAABPwEAAAABQAEAPwAhQQEAAAABQgEAAAABQwEAAAABCC4AAEAAMC8AABwAEDAAAEAAMDEBADYAITJAADcAITMBADYAIUQBADYAIUUBADYAIQkEAABEACAuAABBADAvAAAJABAwAABBADAxAQBCACEyQABDACEzAQBCACFEAQBCACFFAQBCACELOQEAAAABOgEAAAAEOwEAAAAEPAEAAAABPQEAAAABPgEAAAABPwEAAAABQAEAPwAhQQEAAAABQgEAAAABQwEAAAABCDlAAAAAATpAAAAABDtAAAAABDxAAAAAAT1AAAAAAT5AAAAAAT9AAAAAAUBAAD0AIQNGAAADACBHAAADACBIAAADACAMAwAARwAgLgAARQAwLwAAAwAQMAAARQAwMQEAQgAhMkAAQwAhMwEAQgAhNAEAQgAhNQIARgAhNgIARgAhNwIARgAhOAEAQgAhCDkCAAAAAToCAAAABDsCAAAABDwCAAAAAT0CAAAAAT4CAAAAAT8CAAAAAUACADoAIQsEAABEACAuAABBADAvAAAJABAwAABBADAxAQBCACEyQABDACEzAQBCACFEAQBCACFFAQBCACFJAAAJACBKAAAJACAAAAAAAAFOAQAAAAEBTkAAAAABBU4CAAAAAVQCAAAAAVUCAAAAAVYCAAAAAVcCAAAAAQUSAABmACATAABpACBLAABnACBMAABoACBRAAABACADEgAAZgAgSwAAZwAgUQAAAQAgAAAACxIAAFYAMBMAAFsAMEsAAFcAMEwAAFgAME0AAFkAIE4AAFoAME8AAFoAMFAAAFoAMFEAAFoAMFIAAFwAMFMAAF0AMAcxAQAAAAEyQAAAAAEzAQAAAAE0AQAAAAE1AgAAAAE2AgAAAAE3AgAAAAECAAAABQAgEgAAYQAgAwAAAAUAIBIAAGEAIBMAAGAAIAELAABlADAMAwAARwAgLgAARQAwLwAAAwAQMAAARQAwMQEAAAABMkAAQwAhMwEAQgAhNAEAQgAhNQIARgAhNgIARgAhNwIARgAhOAEAQgAhAgAAAAUAIAsAAGAAIAIAAABeACALAABfACALLgAAXQAwLwAAXgAQMAAAXQAwMQEAQgAhMkAAQwAhMwEAQgAhNAEAQgAhNQIARgAhNgIARgAhNwIARgAhOAEAQgAhCy4AAF0AMC8AAF4AEDAAAF0AMDEBAEIAITJAAEMAITMBAEIAITQBAEIAITUCAEYAITYCAEYAITcCAEYAITgBAEIAIQcxAQBNACEyQABOACEzAQBNACE0AQBNACE1AgBPACE2AgBPACE3AgBPACEHMQEATQAhMkAATgAhMwEATQAhNAEATQAhNQIATwAhNgIATwAhNwIATwAhBzEBAAAAATJAAAAAATMBAAAAATQBAAAAATUCAAAAATYCAAAAATcCAAAAAQQSAABWADBLAABXADBNAABZACBRAABaADAAAQQAAGMAIAcxAQAAAAEyQAAAAAEzAQAAAAE0AQAAAAE1AgAAAAE2AgAAAAE3AgAAAAEFMQEAAAABMkAAAAABMwEAAAABRAEAAAABRQEAAAABAgAAAAEAIBIAAGYAIAMAAAAJACASAABmACATAABqACAHAAAACQAgCwAAagAgMQEATQAhMkAATgAhMwEATQAhRAEATQAhRQEATQAhBTEBAE0AITJAAE4AITMBAE0AIUQBAE0AIUUBAE0AIQIEBgIFAAMBAwABAQQHAAAAAAMFAAgYAAkZAAoAAAADBQAIGAAJGQAKAQMAAQEDAAEFBQAPGAASGQATKgAQKwARAAAAAAAFBQAPGAASGQATKgAQKwARBgIBBwgBCAsBCQwBCg0BDA8BDREEDhIFDxQBEBYEERcGFBgBFRkBFhoEGh0HGx4LHB8CHSACHiECHyICICMCISUCIicEIygMJCoCJSwEJi0NJy4CKC8CKTAELDMOLTQU"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => __importStar(require('node:buffer')));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"))),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs")));
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map