import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PokemonModel = runtime.Types.Result.DefaultSelection<Prisma.$PokemonPayload>;
export type AggregatePokemon = {
    _count: PokemonCountAggregateOutputType | null;
    _avg: PokemonAvgAggregateOutputType | null;
    _sum: PokemonSumAggregateOutputType | null;
    _min: PokemonMinAggregateOutputType | null;
    _max: PokemonMaxAggregateOutputType | null;
};
export type PokemonAvgAggregateOutputType = {
    nivel: number | null;
    hp: number | null;
    numeroPokedex: number | null;
};
export type PokemonSumAggregateOutputType = {
    nivel: number | null;
    hp: number | null;
    numeroPokedex: number | null;
};
export type PokemonMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    nome: string | null;
    tipo: string | null;
    nivel: number | null;
    hp: number | null;
    numeroPokedex: number | null;
    userId: string | null;
};
export type PokemonMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    nome: string | null;
    tipo: string | null;
    nivel: number | null;
    hp: number | null;
    numeroPokedex: number | null;
    userId: string | null;
};
export type PokemonCountAggregateOutputType = {
    id: number;
    createdAt: number;
    nome: number;
    tipo: number;
    nivel: number;
    hp: number;
    numeroPokedex: number;
    userId: number;
    _all: number;
};
export type PokemonAvgAggregateInputType = {
    nivel?: true;
    hp?: true;
    numeroPokedex?: true;
};
export type PokemonSumAggregateInputType = {
    nivel?: true;
    hp?: true;
    numeroPokedex?: true;
};
export type PokemonMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    nome?: true;
    tipo?: true;
    nivel?: true;
    hp?: true;
    numeroPokedex?: true;
    userId?: true;
};
export type PokemonMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    nome?: true;
    tipo?: true;
    nivel?: true;
    hp?: true;
    numeroPokedex?: true;
    userId?: true;
};
export type PokemonCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    nome?: true;
    tipo?: true;
    nivel?: true;
    hp?: true;
    numeroPokedex?: true;
    userId?: true;
    _all?: true;
};
export type PokemonAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonWhereInput;
    orderBy?: Prisma.PokemonOrderByWithRelationInput | Prisma.PokemonOrderByWithRelationInput[];
    cursor?: Prisma.PokemonWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PokemonCountAggregateInputType;
    _avg?: PokemonAvgAggregateInputType;
    _sum?: PokemonSumAggregateInputType;
    _min?: PokemonMinAggregateInputType;
    _max?: PokemonMaxAggregateInputType;
};
export type GetPokemonAggregateType<T extends PokemonAggregateArgs> = {
    [P in keyof T & keyof AggregatePokemon]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePokemon[P]> : Prisma.GetScalarType<T[P], AggregatePokemon[P]>;
};
export type PokemonGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonWhereInput;
    orderBy?: Prisma.PokemonOrderByWithAggregationInput | Prisma.PokemonOrderByWithAggregationInput[];
    by: Prisma.PokemonScalarFieldEnum[] | Prisma.PokemonScalarFieldEnum;
    having?: Prisma.PokemonScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PokemonCountAggregateInputType | true;
    _avg?: PokemonAvgAggregateInputType;
    _sum?: PokemonSumAggregateInputType;
    _min?: PokemonMinAggregateInputType;
    _max?: PokemonMaxAggregateInputType;
};
export type PokemonGroupByOutputType = {
    id: string;
    createdAt: Date;
    nome: string;
    tipo: string;
    nivel: number;
    hp: number;
    numeroPokedex: number;
    userId: string;
    _count: PokemonCountAggregateOutputType | null;
    _avg: PokemonAvgAggregateOutputType | null;
    _sum: PokemonSumAggregateOutputType | null;
    _min: PokemonMinAggregateOutputType | null;
    _max: PokemonMaxAggregateOutputType | null;
};
type GetPokemonGroupByPayload<T extends PokemonGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PokemonGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PokemonGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PokemonGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PokemonGroupByOutputType[P]>;
}>>;
export type PokemonWhereInput = {
    AND?: Prisma.PokemonWhereInput | Prisma.PokemonWhereInput[];
    OR?: Prisma.PokemonWhereInput[];
    NOT?: Prisma.PokemonWhereInput | Prisma.PokemonWhereInput[];
    id?: Prisma.StringFilter<"Pokemon"> | string;
    createdAt?: Prisma.DateTimeFilter<"Pokemon"> | Date | string;
    nome?: Prisma.StringFilter<"Pokemon"> | string;
    tipo?: Prisma.StringFilter<"Pokemon"> | string;
    nivel?: Prisma.IntFilter<"Pokemon"> | number;
    hp?: Prisma.IntFilter<"Pokemon"> | number;
    numeroPokedex?: Prisma.IntFilter<"Pokemon"> | number;
    userId?: Prisma.StringFilter<"Pokemon"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type PokemonOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    hp?: Prisma.SortOrder;
    numeroPokedex?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type PokemonWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PokemonWhereInput | Prisma.PokemonWhereInput[];
    OR?: Prisma.PokemonWhereInput[];
    NOT?: Prisma.PokemonWhereInput | Prisma.PokemonWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"Pokemon"> | Date | string;
    nome?: Prisma.StringFilter<"Pokemon"> | string;
    tipo?: Prisma.StringFilter<"Pokemon"> | string;
    nivel?: Prisma.IntFilter<"Pokemon"> | number;
    hp?: Prisma.IntFilter<"Pokemon"> | number;
    numeroPokedex?: Prisma.IntFilter<"Pokemon"> | number;
    userId?: Prisma.StringFilter<"Pokemon"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type PokemonOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    hp?: Prisma.SortOrder;
    numeroPokedex?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.PokemonCountOrderByAggregateInput;
    _avg?: Prisma.PokemonAvgOrderByAggregateInput;
    _max?: Prisma.PokemonMaxOrderByAggregateInput;
    _min?: Prisma.PokemonMinOrderByAggregateInput;
    _sum?: Prisma.PokemonSumOrderByAggregateInput;
};
export type PokemonScalarWhereWithAggregatesInput = {
    AND?: Prisma.PokemonScalarWhereWithAggregatesInput | Prisma.PokemonScalarWhereWithAggregatesInput[];
    OR?: Prisma.PokemonScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PokemonScalarWhereWithAggregatesInput | Prisma.PokemonScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Pokemon"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Pokemon"> | Date | string;
    nome?: Prisma.StringWithAggregatesFilter<"Pokemon"> | string;
    tipo?: Prisma.StringWithAggregatesFilter<"Pokemon"> | string;
    nivel?: Prisma.IntWithAggregatesFilter<"Pokemon"> | number;
    hp?: Prisma.IntWithAggregatesFilter<"Pokemon"> | number;
    numeroPokedex?: Prisma.IntWithAggregatesFilter<"Pokemon"> | number;
    userId?: Prisma.StringWithAggregatesFilter<"Pokemon"> | string;
};
export type PokemonCreateInput = {
    id?: string;
    createdAt?: Date | string;
    nome: string;
    tipo: string;
    nivel: number;
    hp: number;
    numeroPokedex: number;
    user: Prisma.UserCreateNestedOneWithoutPokemonsInput;
};
export type PokemonUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    nome: string;
    tipo: string;
    nivel: number;
    hp: number;
    numeroPokedex: number;
    userId: string;
};
export type PokemonUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    hp?: Prisma.IntFieldUpdateOperationsInput | number;
    numeroPokedex?: Prisma.IntFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutPokemonsNestedInput;
};
export type PokemonUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    hp?: Prisma.IntFieldUpdateOperationsInput | number;
    numeroPokedex?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PokemonCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    nome: string;
    tipo: string;
    nivel: number;
    hp: number;
    numeroPokedex: number;
    userId: string;
};
export type PokemonUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    hp?: Prisma.IntFieldUpdateOperationsInput | number;
    numeroPokedex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    hp?: Prisma.IntFieldUpdateOperationsInput | number;
    numeroPokedex?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PokemonListRelationFilter = {
    every?: Prisma.PokemonWhereInput;
    some?: Prisma.PokemonWhereInput;
    none?: Prisma.PokemonWhereInput;
};
export type PokemonOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PokemonCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    hp?: Prisma.SortOrder;
    numeroPokedex?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type PokemonAvgOrderByAggregateInput = {
    nivel?: Prisma.SortOrder;
    hp?: Prisma.SortOrder;
    numeroPokedex?: Prisma.SortOrder;
};
export type PokemonMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    hp?: Prisma.SortOrder;
    numeroPokedex?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type PokemonMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    hp?: Prisma.SortOrder;
    numeroPokedex?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type PokemonSumOrderByAggregateInput = {
    nivel?: Prisma.SortOrder;
    hp?: Prisma.SortOrder;
    numeroPokedex?: Prisma.SortOrder;
};
export type PokemonCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutUserInput, Prisma.PokemonUncheckedCreateWithoutUserInput> | Prisma.PokemonCreateWithoutUserInput[] | Prisma.PokemonUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutUserInput | Prisma.PokemonCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PokemonCreateManyUserInputEnvelope;
    connect?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
};
export type PokemonUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutUserInput, Prisma.PokemonUncheckedCreateWithoutUserInput> | Prisma.PokemonCreateWithoutUserInput[] | Prisma.PokemonUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutUserInput | Prisma.PokemonCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PokemonCreateManyUserInputEnvelope;
    connect?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
};
export type PokemonUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutUserInput, Prisma.PokemonUncheckedCreateWithoutUserInput> | Prisma.PokemonCreateWithoutUserInput[] | Prisma.PokemonUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutUserInput | Prisma.PokemonCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PokemonUpsertWithWhereUniqueWithoutUserInput | Prisma.PokemonUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PokemonCreateManyUserInputEnvelope;
    set?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    disconnect?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    delete?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    connect?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    update?: Prisma.PokemonUpdateWithWhereUniqueWithoutUserInput | Prisma.PokemonUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PokemonUpdateManyWithWhereWithoutUserInput | Prisma.PokemonUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PokemonScalarWhereInput | Prisma.PokemonScalarWhereInput[];
};
export type PokemonUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutUserInput, Prisma.PokemonUncheckedCreateWithoutUserInput> | Prisma.PokemonCreateWithoutUserInput[] | Prisma.PokemonUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutUserInput | Prisma.PokemonCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PokemonUpsertWithWhereUniqueWithoutUserInput | Prisma.PokemonUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PokemonCreateManyUserInputEnvelope;
    set?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    disconnect?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    delete?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    connect?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    update?: Prisma.PokemonUpdateWithWhereUniqueWithoutUserInput | Prisma.PokemonUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PokemonUpdateManyWithWhereWithoutUserInput | Prisma.PokemonUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PokemonScalarWhereInput | Prisma.PokemonScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PokemonCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    nome: string;
    tipo: string;
    nivel: number;
    hp: number;
    numeroPokedex: number;
};
export type PokemonUncheckedCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    nome: string;
    tipo: string;
    nivel: number;
    hp: number;
    numeroPokedex: number;
};
export type PokemonCreateOrConnectWithoutUserInput = {
    where: Prisma.PokemonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutUserInput, Prisma.PokemonUncheckedCreateWithoutUserInput>;
};
export type PokemonCreateManyUserInputEnvelope = {
    data: Prisma.PokemonCreateManyUserInput | Prisma.PokemonCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PokemonUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PokemonWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonUpdateWithoutUserInput, Prisma.PokemonUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutUserInput, Prisma.PokemonUncheckedCreateWithoutUserInput>;
};
export type PokemonUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PokemonWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonUpdateWithoutUserInput, Prisma.PokemonUncheckedUpdateWithoutUserInput>;
};
export type PokemonUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PokemonScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonUpdateManyMutationInput, Prisma.PokemonUncheckedUpdateManyWithoutUserInput>;
};
export type PokemonScalarWhereInput = {
    AND?: Prisma.PokemonScalarWhereInput | Prisma.PokemonScalarWhereInput[];
    OR?: Prisma.PokemonScalarWhereInput[];
    NOT?: Prisma.PokemonScalarWhereInput | Prisma.PokemonScalarWhereInput[];
    id?: Prisma.StringFilter<"Pokemon"> | string;
    createdAt?: Prisma.DateTimeFilter<"Pokemon"> | Date | string;
    nome?: Prisma.StringFilter<"Pokemon"> | string;
    tipo?: Prisma.StringFilter<"Pokemon"> | string;
    nivel?: Prisma.IntFilter<"Pokemon"> | number;
    hp?: Prisma.IntFilter<"Pokemon"> | number;
    numeroPokedex?: Prisma.IntFilter<"Pokemon"> | number;
    userId?: Prisma.StringFilter<"Pokemon"> | string;
};
export type PokemonCreateManyUserInput = {
    id?: string;
    createdAt?: Date | string;
    nome: string;
    tipo: string;
    nivel: number;
    hp: number;
    numeroPokedex: number;
};
export type PokemonUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    hp?: Prisma.IntFieldUpdateOperationsInput | number;
    numeroPokedex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    hp?: Prisma.IntFieldUpdateOperationsInput | number;
    numeroPokedex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    hp?: Prisma.IntFieldUpdateOperationsInput | number;
    numeroPokedex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    nome?: boolean;
    tipo?: boolean;
    nivel?: boolean;
    hp?: boolean;
    numeroPokedex?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemon"]>;
export type PokemonSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    nome?: boolean;
    tipo?: boolean;
    nivel?: boolean;
    hp?: boolean;
    numeroPokedex?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemon"]>;
export type PokemonSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    nome?: boolean;
    tipo?: boolean;
    nivel?: boolean;
    hp?: boolean;
    numeroPokedex?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemon"]>;
export type PokemonSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    nome?: boolean;
    tipo?: boolean;
    nivel?: boolean;
    hp?: boolean;
    numeroPokedex?: boolean;
    userId?: boolean;
};
export type PokemonOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "createdAt" | "nome" | "tipo" | "nivel" | "hp" | "numeroPokedex" | "userId", ExtArgs["result"]["pokemon"]>;
export type PokemonInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PokemonIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PokemonIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PokemonPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pokemon";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        createdAt: Date;
        nome: string;
        tipo: string;
        nivel: number;
        hp: number;
        numeroPokedex: number;
        userId: string;
    }, ExtArgs["result"]["pokemon"]>;
    composites: {};
};
export type PokemonGetPayload<S extends boolean | null | undefined | PokemonDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PokemonPayload, S>;
export type PokemonCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PokemonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PokemonCountAggregateInputType | true;
};
export interface PokemonDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pokemon'];
        meta: {
            name: 'Pokemon';
        };
    };
    findUnique<T extends PokemonFindUniqueArgs>(args: Prisma.SelectSubset<T, PokemonFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PokemonFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PokemonFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PokemonFindFirstArgs>(args?: Prisma.SelectSubset<T, PokemonFindFirstArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PokemonFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PokemonFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PokemonFindManyArgs>(args?: Prisma.SelectSubset<T, PokemonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PokemonCreateArgs>(args: Prisma.SelectSubset<T, PokemonCreateArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PokemonCreateManyArgs>(args?: Prisma.SelectSubset<T, PokemonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PokemonCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PokemonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PokemonDeleteArgs>(args: Prisma.SelectSubset<T, PokemonDeleteArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PokemonUpdateArgs>(args: Prisma.SelectSubset<T, PokemonUpdateArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PokemonDeleteManyArgs>(args?: Prisma.SelectSubset<T, PokemonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PokemonUpdateManyArgs>(args: Prisma.SelectSubset<T, PokemonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PokemonUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PokemonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PokemonUpsertArgs>(args: Prisma.SelectSubset<T, PokemonUpsertArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PokemonCountArgs>(args?: Prisma.Subset<T, PokemonCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PokemonCountAggregateOutputType> : number>;
    aggregate<T extends PokemonAggregateArgs>(args: Prisma.Subset<T, PokemonAggregateArgs>): Prisma.PrismaPromise<GetPokemonAggregateType<T>>;
    groupBy<T extends PokemonGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PokemonGroupByArgs['orderBy'];
    } : {
        orderBy?: PokemonGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PokemonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PokemonFieldRefs;
}
export interface Prisma__PokemonClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PokemonFieldRefs {
    readonly id: Prisma.FieldRef<"Pokemon", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Pokemon", 'DateTime'>;
    readonly nome: Prisma.FieldRef<"Pokemon", 'String'>;
    readonly tipo: Prisma.FieldRef<"Pokemon", 'String'>;
    readonly nivel: Prisma.FieldRef<"Pokemon", 'Int'>;
    readonly hp: Prisma.FieldRef<"Pokemon", 'Int'>;
    readonly numeroPokedex: Prisma.FieldRef<"Pokemon", 'Int'>;
    readonly userId: Prisma.FieldRef<"Pokemon", 'String'>;
}
export type PokemonFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    where: Prisma.PokemonWhereUniqueInput;
};
export type PokemonFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    where: Prisma.PokemonWhereUniqueInput;
};
export type PokemonFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    where?: Prisma.PokemonWhereInput;
    orderBy?: Prisma.PokemonOrderByWithRelationInput | Prisma.PokemonOrderByWithRelationInput[];
    cursor?: Prisma.PokemonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonScalarFieldEnum | Prisma.PokemonScalarFieldEnum[];
};
export type PokemonFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    where?: Prisma.PokemonWhereInput;
    orderBy?: Prisma.PokemonOrderByWithRelationInput | Prisma.PokemonOrderByWithRelationInput[];
    cursor?: Prisma.PokemonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonScalarFieldEnum | Prisma.PokemonScalarFieldEnum[];
};
export type PokemonFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    where?: Prisma.PokemonWhereInput;
    orderBy?: Prisma.PokemonOrderByWithRelationInput | Prisma.PokemonOrderByWithRelationInput[];
    cursor?: Prisma.PokemonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonScalarFieldEnum | Prisma.PokemonScalarFieldEnum[];
};
export type PokemonCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PokemonCreateInput, Prisma.PokemonUncheckedCreateInput>;
};
export type PokemonCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PokemonCreateManyInput | Prisma.PokemonCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PokemonCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PokemonSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    data: Prisma.PokemonCreateManyInput | Prisma.PokemonCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PokemonIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PokemonUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PokemonUpdateInput, Prisma.PokemonUncheckedUpdateInput>;
    where: Prisma.PokemonWhereUniqueInput;
};
export type PokemonUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PokemonUpdateManyMutationInput, Prisma.PokemonUncheckedUpdateManyInput>;
    where?: Prisma.PokemonWhereInput;
    limit?: number;
};
export type PokemonUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PokemonSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PokemonUpdateManyMutationInput, Prisma.PokemonUncheckedUpdateManyInput>;
    where?: Prisma.PokemonWhereInput;
    limit?: number;
    include?: Prisma.PokemonIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PokemonUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    where: Prisma.PokemonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonCreateInput, Prisma.PokemonUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PokemonUpdateInput, Prisma.PokemonUncheckedUpdateInput>;
};
export type PokemonDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    where: Prisma.PokemonWhereUniqueInput;
};
export type PokemonDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonWhereInput;
    limit?: number;
};
export type PokemonDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    include?: Prisma.PokemonInclude<ExtArgs> | null;
};
export {};
