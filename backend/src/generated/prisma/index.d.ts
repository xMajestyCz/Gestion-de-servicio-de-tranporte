
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Conductor
 * 
 */
export type Conductor = $Result.DefaultSelection<Prisma.$ConductorPayload>
/**
 * Model Orden
 * 
 */
export type Orden = $Result.DefaultSelection<Prisma.$OrdenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoOrden: {
  pendiente: 'pendiente',
  en_ruta: 'en_ruta',
  entregado: 'entregado',
  cancelado: 'cancelado'
};

export type EstadoOrden = (typeof EstadoOrden)[keyof typeof EstadoOrden]

}

export type EstadoOrden = $Enums.EstadoOrden

export const EstadoOrden: typeof $Enums.EstadoOrden

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conductor`: Exposes CRUD operations for the **Conductor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conductors
    * const conductors = await prisma.conductor.findMany()
    * ```
    */
  get conductor(): Prisma.ConductorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orden`: Exposes CRUD operations for the **Orden** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ordens
    * const ordens = await prisma.orden.findMany()
    * ```
    */
  get orden(): Prisma.OrdenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Conductor: 'Conductor',
    Orden: 'Orden'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "conductor" | "orden"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Conductor: {
        payload: Prisma.$ConductorPayload<ExtArgs>
        fields: Prisma.ConductorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConductorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConductorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          findFirst: {
            args: Prisma.ConductorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConductorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          findMany: {
            args: Prisma.ConductorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>[]
          }
          create: {
            args: Prisma.ConductorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          createMany: {
            args: Prisma.ConductorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConductorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>[]
          }
          delete: {
            args: Prisma.ConductorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          update: {
            args: Prisma.ConductorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          deleteMany: {
            args: Prisma.ConductorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConductorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConductorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>[]
          }
          upsert: {
            args: Prisma.ConductorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          aggregate: {
            args: Prisma.ConductorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConductor>
          }
          groupBy: {
            args: Prisma.ConductorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConductorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConductorCountArgs<ExtArgs>
            result: $Utils.Optional<ConductorCountAggregateOutputType> | number
          }
        }
      }
      Orden: {
        payload: Prisma.$OrdenPayload<ExtArgs>
        fields: Prisma.OrdenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          findFirst: {
            args: Prisma.OrdenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          findMany: {
            args: Prisma.OrdenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>[]
          }
          create: {
            args: Prisma.OrdenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          createMany: {
            args: Prisma.OrdenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>[]
          }
          delete: {
            args: Prisma.OrdenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          update: {
            args: Prisma.OrdenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          deleteMany: {
            args: Prisma.OrdenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>[]
          }
          upsert: {
            args: Prisma.OrdenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          aggregate: {
            args: Prisma.OrdenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrden>
          }
          groupBy: {
            args: Prisma.OrdenGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdenGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdenCountArgs<ExtArgs>
            result: $Utils.Optional<OrdenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    conductor?: ConductorOmit
    orden?: OrdenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    ordenes: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenes?: boolean | ClienteCountOutputTypeCountOrdenesArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountOrdenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenWhereInput
  }


  /**
   * Count Type ConductorCountOutputType
   */

  export type ConductorCountOutputType = {
    ordenes: number
  }

  export type ConductorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenes?: boolean | ConductorCountOutputTypeCountOrdenesArgs
  }

  // Custom InputTypes
  /**
   * ConductorCountOutputType without action
   */
  export type ConductorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConductorCountOutputType
     */
    select?: ConductorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConductorCountOutputType without action
   */
  export type ConductorCountOutputTypeCountOrdenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nombre: string
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ordenes?: boolean | Cliente$ordenesArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenes?: boolean | Cliente$ordenesArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      ordenes: Prisma.$OrdenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordenes<T extends Cliente$ordenesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$ordenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nombre: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.ordenes
   */
  export type Cliente$ordenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    where?: OrdenWhereInput
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    cursor?: OrdenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Conductor
   */

  export type AggregateConductor = {
    _count: ConductorCountAggregateOutputType | null
    _avg: ConductorAvgAggregateOutputType | null
    _sum: ConductorSumAggregateOutputType | null
    _min: ConductorMinAggregateOutputType | null
    _max: ConductorMaxAggregateOutputType | null
  }

  export type ConductorAvgAggregateOutputType = {
    id: number | null
  }

  export type ConductorSumAggregateOutputType = {
    id: number | null
  }

  export type ConductorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ConductorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ConductorCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type ConductorAvgAggregateInputType = {
    id?: true
  }

  export type ConductorSumAggregateInputType = {
    id?: true
  }

  export type ConductorMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ConductorMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ConductorCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type ConductorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conductor to aggregate.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conductors
    **/
    _count?: true | ConductorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConductorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConductorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConductorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConductorMaxAggregateInputType
  }

  export type GetConductorAggregateType<T extends ConductorAggregateArgs> = {
        [P in keyof T & keyof AggregateConductor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConductor[P]>
      : GetScalarType<T[P], AggregateConductor[P]>
  }




  export type ConductorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConductorWhereInput
    orderBy?: ConductorOrderByWithAggregationInput | ConductorOrderByWithAggregationInput[]
    by: ConductorScalarFieldEnum[] | ConductorScalarFieldEnum
    having?: ConductorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConductorCountAggregateInputType | true
    _avg?: ConductorAvgAggregateInputType
    _sum?: ConductorSumAggregateInputType
    _min?: ConductorMinAggregateInputType
    _max?: ConductorMaxAggregateInputType
  }

  export type ConductorGroupByOutputType = {
    id: number
    nombre: string
    _count: ConductorCountAggregateOutputType | null
    _avg: ConductorAvgAggregateOutputType | null
    _sum: ConductorSumAggregateOutputType | null
    _min: ConductorMinAggregateOutputType | null
    _max: ConductorMaxAggregateOutputType | null
  }

  type GetConductorGroupByPayload<T extends ConductorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConductorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConductorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConductorGroupByOutputType[P]>
            : GetScalarType<T[P], ConductorGroupByOutputType[P]>
        }
      >
    >


  export type ConductorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ordenes?: boolean | Conductor$ordenesArgs<ExtArgs>
    _count?: boolean | ConductorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conductor"]>

  export type ConductorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["conductor"]>

  export type ConductorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["conductor"]>

  export type ConductorSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type ConductorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["conductor"]>
  export type ConductorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenes?: boolean | Conductor$ordenesArgs<ExtArgs>
    _count?: boolean | ConductorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConductorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConductorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConductorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conductor"
    objects: {
      ordenes: Prisma.$OrdenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["conductor"]>
    composites: {}
  }

  type ConductorGetPayload<S extends boolean | null | undefined | ConductorDefaultArgs> = $Result.GetResult<Prisma.$ConductorPayload, S>

  type ConductorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConductorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConductorCountAggregateInputType | true
    }

  export interface ConductorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conductor'], meta: { name: 'Conductor' } }
    /**
     * Find zero or one Conductor that matches the filter.
     * @param {ConductorFindUniqueArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConductorFindUniqueArgs>(args: SelectSubset<T, ConductorFindUniqueArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conductor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConductorFindUniqueOrThrowArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConductorFindUniqueOrThrowArgs>(args: SelectSubset<T, ConductorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conductor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindFirstArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConductorFindFirstArgs>(args?: SelectSubset<T, ConductorFindFirstArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conductor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindFirstOrThrowArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConductorFindFirstOrThrowArgs>(args?: SelectSubset<T, ConductorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conductors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conductors
     * const conductors = await prisma.conductor.findMany()
     * 
     * // Get first 10 Conductors
     * const conductors = await prisma.conductor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conductorWithIdOnly = await prisma.conductor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConductorFindManyArgs>(args?: SelectSubset<T, ConductorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conductor.
     * @param {ConductorCreateArgs} args - Arguments to create a Conductor.
     * @example
     * // Create one Conductor
     * const Conductor = await prisma.conductor.create({
     *   data: {
     *     // ... data to create a Conductor
     *   }
     * })
     * 
     */
    create<T extends ConductorCreateArgs>(args: SelectSubset<T, ConductorCreateArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conductors.
     * @param {ConductorCreateManyArgs} args - Arguments to create many Conductors.
     * @example
     * // Create many Conductors
     * const conductor = await prisma.conductor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConductorCreateManyArgs>(args?: SelectSubset<T, ConductorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conductors and returns the data saved in the database.
     * @param {ConductorCreateManyAndReturnArgs} args - Arguments to create many Conductors.
     * @example
     * // Create many Conductors
     * const conductor = await prisma.conductor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conductors and only return the `id`
     * const conductorWithIdOnly = await prisma.conductor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConductorCreateManyAndReturnArgs>(args?: SelectSubset<T, ConductorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conductor.
     * @param {ConductorDeleteArgs} args - Arguments to delete one Conductor.
     * @example
     * // Delete one Conductor
     * const Conductor = await prisma.conductor.delete({
     *   where: {
     *     // ... filter to delete one Conductor
     *   }
     * })
     * 
     */
    delete<T extends ConductorDeleteArgs>(args: SelectSubset<T, ConductorDeleteArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conductor.
     * @param {ConductorUpdateArgs} args - Arguments to update one Conductor.
     * @example
     * // Update one Conductor
     * const conductor = await prisma.conductor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConductorUpdateArgs>(args: SelectSubset<T, ConductorUpdateArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conductors.
     * @param {ConductorDeleteManyArgs} args - Arguments to filter Conductors to delete.
     * @example
     * // Delete a few Conductors
     * const { count } = await prisma.conductor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConductorDeleteManyArgs>(args?: SelectSubset<T, ConductorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conductors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conductors
     * const conductor = await prisma.conductor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConductorUpdateManyArgs>(args: SelectSubset<T, ConductorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conductors and returns the data updated in the database.
     * @param {ConductorUpdateManyAndReturnArgs} args - Arguments to update many Conductors.
     * @example
     * // Update many Conductors
     * const conductor = await prisma.conductor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conductors and only return the `id`
     * const conductorWithIdOnly = await prisma.conductor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConductorUpdateManyAndReturnArgs>(args: SelectSubset<T, ConductorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conductor.
     * @param {ConductorUpsertArgs} args - Arguments to update or create a Conductor.
     * @example
     * // Update or create a Conductor
     * const conductor = await prisma.conductor.upsert({
     *   create: {
     *     // ... data to create a Conductor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conductor we want to update
     *   }
     * })
     */
    upsert<T extends ConductorUpsertArgs>(args: SelectSubset<T, ConductorUpsertArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conductors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorCountArgs} args - Arguments to filter Conductors to count.
     * @example
     * // Count the number of Conductors
     * const count = await prisma.conductor.count({
     *   where: {
     *     // ... the filter for the Conductors we want to count
     *   }
     * })
    **/
    count<T extends ConductorCountArgs>(
      args?: Subset<T, ConductorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConductorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conductor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConductorAggregateArgs>(args: Subset<T, ConductorAggregateArgs>): Prisma.PrismaPromise<GetConductorAggregateType<T>>

    /**
     * Group by Conductor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConductorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConductorGroupByArgs['orderBy'] }
        : { orderBy?: ConductorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConductorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConductorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conductor model
   */
  readonly fields: ConductorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conductor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConductorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordenes<T extends Conductor$ordenesArgs<ExtArgs> = {}>(args?: Subset<T, Conductor$ordenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conductor model
   */
  interface ConductorFieldRefs {
    readonly id: FieldRef<"Conductor", 'Int'>
    readonly nombre: FieldRef<"Conductor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conductor findUnique
   */
  export type ConductorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor findUniqueOrThrow
   */
  export type ConductorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor findFirst
   */
  export type ConductorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conductors.
     */
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor findFirstOrThrow
   */
  export type ConductorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conductors.
     */
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor findMany
   */
  export type ConductorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductors to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conductors.
     */
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor create
   */
  export type ConductorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The data needed to create a Conductor.
     */
    data: XOR<ConductorCreateInput, ConductorUncheckedCreateInput>
  }

  /**
   * Conductor createMany
   */
  export type ConductorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conductors.
     */
    data: ConductorCreateManyInput | ConductorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conductor createManyAndReturn
   */
  export type ConductorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * The data used to create many Conductors.
     */
    data: ConductorCreateManyInput | ConductorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conductor update
   */
  export type ConductorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The data needed to update a Conductor.
     */
    data: XOR<ConductorUpdateInput, ConductorUncheckedUpdateInput>
    /**
     * Choose, which Conductor to update.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor updateMany
   */
  export type ConductorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conductors.
     */
    data: XOR<ConductorUpdateManyMutationInput, ConductorUncheckedUpdateManyInput>
    /**
     * Filter which Conductors to update
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to update.
     */
    limit?: number
  }

  /**
   * Conductor updateManyAndReturn
   */
  export type ConductorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * The data used to update Conductors.
     */
    data: XOR<ConductorUpdateManyMutationInput, ConductorUncheckedUpdateManyInput>
    /**
     * Filter which Conductors to update
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to update.
     */
    limit?: number
  }

  /**
   * Conductor upsert
   */
  export type ConductorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The filter to search for the Conductor to update in case it exists.
     */
    where: ConductorWhereUniqueInput
    /**
     * In case the Conductor found by the `where` argument doesn't exist, create a new Conductor with this data.
     */
    create: XOR<ConductorCreateInput, ConductorUncheckedCreateInput>
    /**
     * In case the Conductor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConductorUpdateInput, ConductorUncheckedUpdateInput>
  }

  /**
   * Conductor delete
   */
  export type ConductorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter which Conductor to delete.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor deleteMany
   */
  export type ConductorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conductors to delete
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to delete.
     */
    limit?: number
  }

  /**
   * Conductor.ordenes
   */
  export type Conductor$ordenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    where?: OrdenWhereInput
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    cursor?: OrdenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Conductor without action
   */
  export type ConductorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
  }


  /**
   * Model Orden
   */

  export type AggregateOrden = {
    _count: OrdenCountAggregateOutputType | null
    _avg: OrdenAvgAggregateOutputType | null
    _sum: OrdenSumAggregateOutputType | null
    _min: OrdenMinAggregateOutputType | null
    _max: OrdenMaxAggregateOutputType | null
  }

  export type OrdenAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    conductorId: number | null
  }

  export type OrdenSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    conductorId: number | null
  }

  export type OrdenMinAggregateOutputType = {
    id: number | null
    clienteId: number | null
    conductorId: number | null
    fecha: Date | null
    estado: $Enums.EstadoOrden | null
    observaciones: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type OrdenMaxAggregateOutputType = {
    id: number | null
    clienteId: number | null
    conductorId: number | null
    fecha: Date | null
    estado: $Enums.EstadoOrden | null
    observaciones: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type OrdenCountAggregateOutputType = {
    id: number
    clienteId: number
    conductorId: number
    fecha: number
    estado: number
    observaciones: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type OrdenAvgAggregateInputType = {
    id?: true
    clienteId?: true
    conductorId?: true
  }

  export type OrdenSumAggregateInputType = {
    id?: true
    clienteId?: true
    conductorId?: true
  }

  export type OrdenMinAggregateInputType = {
    id?: true
    clienteId?: true
    conductorId?: true
    fecha?: true
    estado?: true
    observaciones?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type OrdenMaxAggregateInputType = {
    id?: true
    clienteId?: true
    conductorId?: true
    fecha?: true
    estado?: true
    observaciones?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type OrdenCountAggregateInputType = {
    id?: true
    clienteId?: true
    conductorId?: true
    fecha?: true
    estado?: true
    observaciones?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type OrdenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orden to aggregate.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ordens
    **/
    _count?: true | OrdenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdenMaxAggregateInputType
  }

  export type GetOrdenAggregateType<T extends OrdenAggregateArgs> = {
        [P in keyof T & keyof AggregateOrden]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrden[P]>
      : GetScalarType<T[P], AggregateOrden[P]>
  }




  export type OrdenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenWhereInput
    orderBy?: OrdenOrderByWithAggregationInput | OrdenOrderByWithAggregationInput[]
    by: OrdenScalarFieldEnum[] | OrdenScalarFieldEnum
    having?: OrdenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdenCountAggregateInputType | true
    _avg?: OrdenAvgAggregateInputType
    _sum?: OrdenSumAggregateInputType
    _min?: OrdenMinAggregateInputType
    _max?: OrdenMaxAggregateInputType
  }

  export type OrdenGroupByOutputType = {
    id: number
    clienteId: number
    conductorId: number
    fecha: Date
    estado: $Enums.EstadoOrden
    observaciones: string | null
    creadoEn: Date
    actualizadoEn: Date
    _count: OrdenCountAggregateOutputType | null
    _avg: OrdenAvgAggregateOutputType | null
    _sum: OrdenSumAggregateOutputType | null
    _min: OrdenMinAggregateOutputType | null
    _max: OrdenMaxAggregateOutputType | null
  }

  type GetOrdenGroupByPayload<T extends OrdenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdenGroupByOutputType[P]>
            : GetScalarType<T[P], OrdenGroupByOutputType[P]>
        }
      >
    >


  export type OrdenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    conductorId?: boolean
    fecha?: boolean
    estado?: boolean
    observaciones?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orden"]>

  export type OrdenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    conductorId?: boolean
    fecha?: boolean
    estado?: boolean
    observaciones?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orden"]>

  export type OrdenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    conductorId?: boolean
    fecha?: boolean
    estado?: boolean
    observaciones?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orden"]>

  export type OrdenSelectScalar = {
    id?: boolean
    clienteId?: boolean
    conductorId?: boolean
    fecha?: boolean
    estado?: boolean
    observaciones?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type OrdenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "conductorId" | "fecha" | "estado" | "observaciones" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["orden"]>
  export type OrdenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
  }
  export type OrdenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
  }
  export type OrdenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
  }

  export type $OrdenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orden"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      conductor: Prisma.$ConductorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clienteId: number
      conductorId: number
      fecha: Date
      estado: $Enums.EstadoOrden
      observaciones: string | null
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["orden"]>
    composites: {}
  }

  type OrdenGetPayload<S extends boolean | null | undefined | OrdenDefaultArgs> = $Result.GetResult<Prisma.$OrdenPayload, S>

  type OrdenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdenCountAggregateInputType | true
    }

  export interface OrdenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orden'], meta: { name: 'Orden' } }
    /**
     * Find zero or one Orden that matches the filter.
     * @param {OrdenFindUniqueArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdenFindUniqueArgs>(args: SelectSubset<T, OrdenFindUniqueArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orden that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdenFindUniqueOrThrowArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdenFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orden that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenFindFirstArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdenFindFirstArgs>(args?: SelectSubset<T, OrdenFindFirstArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orden that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenFindFirstOrThrowArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdenFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdenFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ordens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ordens
     * const ordens = await prisma.orden.findMany()
     * 
     * // Get first 10 Ordens
     * const ordens = await prisma.orden.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordenWithIdOnly = await prisma.orden.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdenFindManyArgs>(args?: SelectSubset<T, OrdenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orden.
     * @param {OrdenCreateArgs} args - Arguments to create a Orden.
     * @example
     * // Create one Orden
     * const Orden = await prisma.orden.create({
     *   data: {
     *     // ... data to create a Orden
     *   }
     * })
     * 
     */
    create<T extends OrdenCreateArgs>(args: SelectSubset<T, OrdenCreateArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ordens.
     * @param {OrdenCreateManyArgs} args - Arguments to create many Ordens.
     * @example
     * // Create many Ordens
     * const orden = await prisma.orden.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdenCreateManyArgs>(args?: SelectSubset<T, OrdenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ordens and returns the data saved in the database.
     * @param {OrdenCreateManyAndReturnArgs} args - Arguments to create many Ordens.
     * @example
     * // Create many Ordens
     * const orden = await prisma.orden.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ordens and only return the `id`
     * const ordenWithIdOnly = await prisma.orden.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdenCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orden.
     * @param {OrdenDeleteArgs} args - Arguments to delete one Orden.
     * @example
     * // Delete one Orden
     * const Orden = await prisma.orden.delete({
     *   where: {
     *     // ... filter to delete one Orden
     *   }
     * })
     * 
     */
    delete<T extends OrdenDeleteArgs>(args: SelectSubset<T, OrdenDeleteArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orden.
     * @param {OrdenUpdateArgs} args - Arguments to update one Orden.
     * @example
     * // Update one Orden
     * const orden = await prisma.orden.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdenUpdateArgs>(args: SelectSubset<T, OrdenUpdateArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ordens.
     * @param {OrdenDeleteManyArgs} args - Arguments to filter Ordens to delete.
     * @example
     * // Delete a few Ordens
     * const { count } = await prisma.orden.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdenDeleteManyArgs>(args?: SelectSubset<T, OrdenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ordens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ordens
     * const orden = await prisma.orden.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdenUpdateManyArgs>(args: SelectSubset<T, OrdenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ordens and returns the data updated in the database.
     * @param {OrdenUpdateManyAndReturnArgs} args - Arguments to update many Ordens.
     * @example
     * // Update many Ordens
     * const orden = await prisma.orden.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ordens and only return the `id`
     * const ordenWithIdOnly = await prisma.orden.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdenUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orden.
     * @param {OrdenUpsertArgs} args - Arguments to update or create a Orden.
     * @example
     * // Update or create a Orden
     * const orden = await prisma.orden.upsert({
     *   create: {
     *     // ... data to create a Orden
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orden we want to update
     *   }
     * })
     */
    upsert<T extends OrdenUpsertArgs>(args: SelectSubset<T, OrdenUpsertArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ordens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCountArgs} args - Arguments to filter Ordens to count.
     * @example
     * // Count the number of Ordens
     * const count = await prisma.orden.count({
     *   where: {
     *     // ... the filter for the Ordens we want to count
     *   }
     * })
    **/
    count<T extends OrdenCountArgs>(
      args?: Subset<T, OrdenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdenAggregateArgs>(args: Subset<T, OrdenAggregateArgs>): Prisma.PrismaPromise<GetOrdenAggregateType<T>>

    /**
     * Group by Orden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdenGroupByArgs['orderBy'] }
        : { orderBy?: OrdenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orden model
   */
  readonly fields: OrdenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orden.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conductor<T extends ConductorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConductorDefaultArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orden model
   */
  interface OrdenFieldRefs {
    readonly id: FieldRef<"Orden", 'Int'>
    readonly clienteId: FieldRef<"Orden", 'Int'>
    readonly conductorId: FieldRef<"Orden", 'Int'>
    readonly fecha: FieldRef<"Orden", 'DateTime'>
    readonly estado: FieldRef<"Orden", 'EstadoOrden'>
    readonly observaciones: FieldRef<"Orden", 'String'>
    readonly creadoEn: FieldRef<"Orden", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Orden", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orden findUnique
   */
  export type OrdenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden findUniqueOrThrow
   */
  export type OrdenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden findFirst
   */
  export type OrdenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ordens.
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ordens.
     */
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Orden findFirstOrThrow
   */
  export type OrdenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ordens.
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ordens.
     */
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Orden findMany
   */
  export type OrdenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Ordens to fetch.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ordens.
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ordens.
     */
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Orden create
   */
  export type OrdenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * The data needed to create a Orden.
     */
    data: XOR<OrdenCreateInput, OrdenUncheckedCreateInput>
  }

  /**
   * Orden createMany
   */
  export type OrdenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ordens.
     */
    data: OrdenCreateManyInput | OrdenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orden createManyAndReturn
   */
  export type OrdenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * The data used to create many Ordens.
     */
    data: OrdenCreateManyInput | OrdenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orden update
   */
  export type OrdenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * The data needed to update a Orden.
     */
    data: XOR<OrdenUpdateInput, OrdenUncheckedUpdateInput>
    /**
     * Choose, which Orden to update.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden updateMany
   */
  export type OrdenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ordens.
     */
    data: XOR<OrdenUpdateManyMutationInput, OrdenUncheckedUpdateManyInput>
    /**
     * Filter which Ordens to update
     */
    where?: OrdenWhereInput
    /**
     * Limit how many Ordens to update.
     */
    limit?: number
  }

  /**
   * Orden updateManyAndReturn
   */
  export type OrdenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * The data used to update Ordens.
     */
    data: XOR<OrdenUpdateManyMutationInput, OrdenUncheckedUpdateManyInput>
    /**
     * Filter which Ordens to update
     */
    where?: OrdenWhereInput
    /**
     * Limit how many Ordens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orden upsert
   */
  export type OrdenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * The filter to search for the Orden to update in case it exists.
     */
    where: OrdenWhereUniqueInput
    /**
     * In case the Orden found by the `where` argument doesn't exist, create a new Orden with this data.
     */
    create: XOR<OrdenCreateInput, OrdenUncheckedCreateInput>
    /**
     * In case the Orden was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdenUpdateInput, OrdenUncheckedUpdateInput>
  }

  /**
   * Orden delete
   */
  export type OrdenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter which Orden to delete.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden deleteMany
   */
  export type OrdenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ordens to delete
     */
    where?: OrdenWhereInput
    /**
     * Limit how many Ordens to delete.
     */
    limit?: number
  }

  /**
   * Orden without action
   */
  export type OrdenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ConductorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type ConductorScalarFieldEnum = (typeof ConductorScalarFieldEnum)[keyof typeof ConductorScalarFieldEnum]


  export const OrdenScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    conductorId: 'conductorId',
    fecha: 'fecha',
    estado: 'estado',
    observaciones: 'observaciones',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type OrdenScalarFieldEnum = (typeof OrdenScalarFieldEnum)[keyof typeof OrdenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EstadoOrden'
   */
  export type EnumEstadoOrdenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoOrden'>
    


  /**
   * Reference to a field of type 'EstadoOrden[]'
   */
  export type ListEnumEstadoOrdenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoOrden[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nombre?: StringFilter<"Cliente"> | string
    ordenes?: OrdenListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ordenes?: OrdenOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    ordenes?: OrdenListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
  }

  export type ConductorWhereInput = {
    AND?: ConductorWhereInput | ConductorWhereInput[]
    OR?: ConductorWhereInput[]
    NOT?: ConductorWhereInput | ConductorWhereInput[]
    id?: IntFilter<"Conductor"> | number
    nombre?: StringFilter<"Conductor"> | string
    ordenes?: OrdenListRelationFilter
  }

  export type ConductorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ordenes?: OrdenOrderByRelationAggregateInput
  }

  export type ConductorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConductorWhereInput | ConductorWhereInput[]
    OR?: ConductorWhereInput[]
    NOT?: ConductorWhereInput | ConductorWhereInput[]
    nombre?: StringFilter<"Conductor"> | string
    ordenes?: OrdenListRelationFilter
  }, "id">

  export type ConductorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: ConductorCountOrderByAggregateInput
    _avg?: ConductorAvgOrderByAggregateInput
    _max?: ConductorMaxOrderByAggregateInput
    _min?: ConductorMinOrderByAggregateInput
    _sum?: ConductorSumOrderByAggregateInput
  }

  export type ConductorScalarWhereWithAggregatesInput = {
    AND?: ConductorScalarWhereWithAggregatesInput | ConductorScalarWhereWithAggregatesInput[]
    OR?: ConductorScalarWhereWithAggregatesInput[]
    NOT?: ConductorScalarWhereWithAggregatesInput | ConductorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conductor"> | number
    nombre?: StringWithAggregatesFilter<"Conductor"> | string
  }

  export type OrdenWhereInput = {
    AND?: OrdenWhereInput | OrdenWhereInput[]
    OR?: OrdenWhereInput[]
    NOT?: OrdenWhereInput | OrdenWhereInput[]
    id?: IntFilter<"Orden"> | number
    clienteId?: IntFilter<"Orden"> | number
    conductorId?: IntFilter<"Orden"> | number
    fecha?: DateTimeFilter<"Orden"> | Date | string
    estado?: EnumEstadoOrdenFilter<"Orden"> | $Enums.EstadoOrden
    observaciones?: StringNullableFilter<"Orden"> | string | null
    creadoEn?: DateTimeFilter<"Orden"> | Date | string
    actualizadoEn?: DateTimeFilter<"Orden"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    conductor?: XOR<ConductorScalarRelationFilter, ConductorWhereInput>
  }

  export type OrdenOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    conductorId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    conductor?: ConductorOrderByWithRelationInput
  }

  export type OrdenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdenWhereInput | OrdenWhereInput[]
    OR?: OrdenWhereInput[]
    NOT?: OrdenWhereInput | OrdenWhereInput[]
    clienteId?: IntFilter<"Orden"> | number
    conductorId?: IntFilter<"Orden"> | number
    fecha?: DateTimeFilter<"Orden"> | Date | string
    estado?: EnumEstadoOrdenFilter<"Orden"> | $Enums.EstadoOrden
    observaciones?: StringNullableFilter<"Orden"> | string | null
    creadoEn?: DateTimeFilter<"Orden"> | Date | string
    actualizadoEn?: DateTimeFilter<"Orden"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    conductor?: XOR<ConductorScalarRelationFilter, ConductorWhereInput>
  }, "id">

  export type OrdenOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    conductorId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: OrdenCountOrderByAggregateInput
    _avg?: OrdenAvgOrderByAggregateInput
    _max?: OrdenMaxOrderByAggregateInput
    _min?: OrdenMinOrderByAggregateInput
    _sum?: OrdenSumOrderByAggregateInput
  }

  export type OrdenScalarWhereWithAggregatesInput = {
    AND?: OrdenScalarWhereWithAggregatesInput | OrdenScalarWhereWithAggregatesInput[]
    OR?: OrdenScalarWhereWithAggregatesInput[]
    NOT?: OrdenScalarWhereWithAggregatesInput | OrdenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orden"> | number
    clienteId?: IntWithAggregatesFilter<"Orden"> | number
    conductorId?: IntWithAggregatesFilter<"Orden"> | number
    fecha?: DateTimeWithAggregatesFilter<"Orden"> | Date | string
    estado?: EnumEstadoOrdenWithAggregatesFilter<"Orden"> | $Enums.EstadoOrden
    observaciones?: StringNullableWithAggregatesFilter<"Orden"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"Orden"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Orden"> | Date | string
  }

  export type ClienteCreateInput = {
    nombre: string
    ordenes?: OrdenCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nombre: string
    ordenes?: OrdenUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ordenes?: OrdenUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ordenes?: OrdenUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nombre: string
  }

  export type ClienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ConductorCreateInput = {
    nombre: string
    ordenes?: OrdenCreateNestedManyWithoutConductorInput
  }

  export type ConductorUncheckedCreateInput = {
    id?: number
    nombre: string
    ordenes?: OrdenUncheckedCreateNestedManyWithoutConductorInput
  }

  export type ConductorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ordenes?: OrdenUpdateManyWithoutConductorNestedInput
  }

  export type ConductorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ordenes?: OrdenUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type ConductorCreateManyInput = {
    id?: number
    nombre: string
  }

  export type ConductorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ConductorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type OrdenCreateInput = {
    fecha: Date | string
    estado?: $Enums.EstadoOrden
    observaciones?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: ClienteCreateNestedOneWithoutOrdenesInput
    conductor: ConductorCreateNestedOneWithoutOrdenesInput
  }

  export type OrdenUncheckedCreateInput = {
    id?: number
    clienteId: number
    conductorId: number
    fecha: Date | string
    estado?: $Enums.EstadoOrden
    observaciones?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type OrdenUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutOrdenesNestedInput
    conductor?: ConductorUpdateOneRequiredWithoutOrdenesNestedInput
  }

  export type OrdenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenCreateManyInput = {
    id?: number
    clienteId: number
    conductorId: number
    fecha: Date | string
    estado?: $Enums.EstadoOrden
    observaciones?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type OrdenUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type OrdenListRelationFilter = {
    every?: OrdenWhereInput
    some?: OrdenWhereInput
    none?: OrdenWhereInput
  }

  export type OrdenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ConductorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ConductorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConductorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ConductorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ConductorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumEstadoOrdenFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoOrden | EnumEstadoOrdenFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoOrdenFilter<$PrismaModel> | $Enums.EstadoOrden
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type ConductorScalarRelationFilter = {
    is?: ConductorWhereInput
    isNot?: ConductorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrdenCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    conductorId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type OrdenAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    conductorId?: SortOrder
  }

  export type OrdenMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    conductorId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type OrdenMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    conductorId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type OrdenSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    conductorId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumEstadoOrdenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoOrden | EnumEstadoOrdenFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoOrdenWithAggregatesFilter<$PrismaModel> | $Enums.EstadoOrden
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoOrdenFilter<$PrismaModel>
    _max?: NestedEnumEstadoOrdenFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type OrdenCreateNestedManyWithoutClienteInput = {
    create?: XOR<OrdenCreateWithoutClienteInput, OrdenUncheckedCreateWithoutClienteInput> | OrdenCreateWithoutClienteInput[] | OrdenUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutClienteInput | OrdenCreateOrConnectWithoutClienteInput[]
    createMany?: OrdenCreateManyClienteInputEnvelope
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
  }

  export type OrdenUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<OrdenCreateWithoutClienteInput, OrdenUncheckedCreateWithoutClienteInput> | OrdenCreateWithoutClienteInput[] | OrdenUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutClienteInput | OrdenCreateOrConnectWithoutClienteInput[]
    createMany?: OrdenCreateManyClienteInputEnvelope
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type OrdenUpdateManyWithoutClienteNestedInput = {
    create?: XOR<OrdenCreateWithoutClienteInput, OrdenUncheckedCreateWithoutClienteInput> | OrdenCreateWithoutClienteInput[] | OrdenUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutClienteInput | OrdenCreateOrConnectWithoutClienteInput[]
    upsert?: OrdenUpsertWithWhereUniqueWithoutClienteInput | OrdenUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: OrdenCreateManyClienteInputEnvelope
    set?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    disconnect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    delete?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    update?: OrdenUpdateWithWhereUniqueWithoutClienteInput | OrdenUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: OrdenUpdateManyWithWhereWithoutClienteInput | OrdenUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrdenUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<OrdenCreateWithoutClienteInput, OrdenUncheckedCreateWithoutClienteInput> | OrdenCreateWithoutClienteInput[] | OrdenUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutClienteInput | OrdenCreateOrConnectWithoutClienteInput[]
    upsert?: OrdenUpsertWithWhereUniqueWithoutClienteInput | OrdenUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: OrdenCreateManyClienteInputEnvelope
    set?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    disconnect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    delete?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    update?: OrdenUpdateWithWhereUniqueWithoutClienteInput | OrdenUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: OrdenUpdateManyWithWhereWithoutClienteInput | OrdenUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
  }

  export type OrdenCreateNestedManyWithoutConductorInput = {
    create?: XOR<OrdenCreateWithoutConductorInput, OrdenUncheckedCreateWithoutConductorInput> | OrdenCreateWithoutConductorInput[] | OrdenUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutConductorInput | OrdenCreateOrConnectWithoutConductorInput[]
    createMany?: OrdenCreateManyConductorInputEnvelope
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
  }

  export type OrdenUncheckedCreateNestedManyWithoutConductorInput = {
    create?: XOR<OrdenCreateWithoutConductorInput, OrdenUncheckedCreateWithoutConductorInput> | OrdenCreateWithoutConductorInput[] | OrdenUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutConductorInput | OrdenCreateOrConnectWithoutConductorInput[]
    createMany?: OrdenCreateManyConductorInputEnvelope
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
  }

  export type OrdenUpdateManyWithoutConductorNestedInput = {
    create?: XOR<OrdenCreateWithoutConductorInput, OrdenUncheckedCreateWithoutConductorInput> | OrdenCreateWithoutConductorInput[] | OrdenUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutConductorInput | OrdenCreateOrConnectWithoutConductorInput[]
    upsert?: OrdenUpsertWithWhereUniqueWithoutConductorInput | OrdenUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: OrdenCreateManyConductorInputEnvelope
    set?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    disconnect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    delete?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    update?: OrdenUpdateWithWhereUniqueWithoutConductorInput | OrdenUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: OrdenUpdateManyWithWhereWithoutConductorInput | OrdenUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
  }

  export type OrdenUncheckedUpdateManyWithoutConductorNestedInput = {
    create?: XOR<OrdenCreateWithoutConductorInput, OrdenUncheckedCreateWithoutConductorInput> | OrdenCreateWithoutConductorInput[] | OrdenUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutConductorInput | OrdenCreateOrConnectWithoutConductorInput[]
    upsert?: OrdenUpsertWithWhereUniqueWithoutConductorInput | OrdenUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: OrdenCreateManyConductorInputEnvelope
    set?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    disconnect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    delete?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    update?: OrdenUpdateWithWhereUniqueWithoutConductorInput | OrdenUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: OrdenUpdateManyWithWhereWithoutConductorInput | OrdenUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutOrdenesInput = {
    create?: XOR<ClienteCreateWithoutOrdenesInput, ClienteUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutOrdenesInput
    connect?: ClienteWhereUniqueInput
  }

  export type ConductorCreateNestedOneWithoutOrdenesInput = {
    create?: XOR<ConductorCreateWithoutOrdenesInput, ConductorUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: ConductorCreateOrConnectWithoutOrdenesInput
    connect?: ConductorWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumEstadoOrdenFieldUpdateOperationsInput = {
    set?: $Enums.EstadoOrden
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClienteUpdateOneRequiredWithoutOrdenesNestedInput = {
    create?: XOR<ClienteCreateWithoutOrdenesInput, ClienteUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutOrdenesInput
    upsert?: ClienteUpsertWithoutOrdenesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutOrdenesInput, ClienteUpdateWithoutOrdenesInput>, ClienteUncheckedUpdateWithoutOrdenesInput>
  }

  export type ConductorUpdateOneRequiredWithoutOrdenesNestedInput = {
    create?: XOR<ConductorCreateWithoutOrdenesInput, ConductorUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: ConductorCreateOrConnectWithoutOrdenesInput
    upsert?: ConductorUpsertWithoutOrdenesInput
    connect?: ConductorWhereUniqueInput
    update?: XOR<XOR<ConductorUpdateToOneWithWhereWithoutOrdenesInput, ConductorUpdateWithoutOrdenesInput>, ConductorUncheckedUpdateWithoutOrdenesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumEstadoOrdenFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoOrden | EnumEstadoOrdenFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoOrdenFilter<$PrismaModel> | $Enums.EstadoOrden
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEstadoOrdenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoOrden | EnumEstadoOrdenFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoOrdenWithAggregatesFilter<$PrismaModel> | $Enums.EstadoOrden
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoOrdenFilter<$PrismaModel>
    _max?: NestedEnumEstadoOrdenFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrdenCreateWithoutClienteInput = {
    fecha: Date | string
    estado?: $Enums.EstadoOrden
    observaciones?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    conductor: ConductorCreateNestedOneWithoutOrdenesInput
  }

  export type OrdenUncheckedCreateWithoutClienteInput = {
    id?: number
    conductorId: number
    fecha: Date | string
    estado?: $Enums.EstadoOrden
    observaciones?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type OrdenCreateOrConnectWithoutClienteInput = {
    where: OrdenWhereUniqueInput
    create: XOR<OrdenCreateWithoutClienteInput, OrdenUncheckedCreateWithoutClienteInput>
  }

  export type OrdenCreateManyClienteInputEnvelope = {
    data: OrdenCreateManyClienteInput | OrdenCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type OrdenUpsertWithWhereUniqueWithoutClienteInput = {
    where: OrdenWhereUniqueInput
    update: XOR<OrdenUpdateWithoutClienteInput, OrdenUncheckedUpdateWithoutClienteInput>
    create: XOR<OrdenCreateWithoutClienteInput, OrdenUncheckedCreateWithoutClienteInput>
  }

  export type OrdenUpdateWithWhereUniqueWithoutClienteInput = {
    where: OrdenWhereUniqueInput
    data: XOR<OrdenUpdateWithoutClienteInput, OrdenUncheckedUpdateWithoutClienteInput>
  }

  export type OrdenUpdateManyWithWhereWithoutClienteInput = {
    where: OrdenScalarWhereInput
    data: XOR<OrdenUpdateManyMutationInput, OrdenUncheckedUpdateManyWithoutClienteInput>
  }

  export type OrdenScalarWhereInput = {
    AND?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
    OR?: OrdenScalarWhereInput[]
    NOT?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
    id?: IntFilter<"Orden"> | number
    clienteId?: IntFilter<"Orden"> | number
    conductorId?: IntFilter<"Orden"> | number
    fecha?: DateTimeFilter<"Orden"> | Date | string
    estado?: EnumEstadoOrdenFilter<"Orden"> | $Enums.EstadoOrden
    observaciones?: StringNullableFilter<"Orden"> | string | null
    creadoEn?: DateTimeFilter<"Orden"> | Date | string
    actualizadoEn?: DateTimeFilter<"Orden"> | Date | string
  }

  export type OrdenCreateWithoutConductorInput = {
    fecha: Date | string
    estado?: $Enums.EstadoOrden
    observaciones?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: ClienteCreateNestedOneWithoutOrdenesInput
  }

  export type OrdenUncheckedCreateWithoutConductorInput = {
    id?: number
    clienteId: number
    fecha: Date | string
    estado?: $Enums.EstadoOrden
    observaciones?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type OrdenCreateOrConnectWithoutConductorInput = {
    where: OrdenWhereUniqueInput
    create: XOR<OrdenCreateWithoutConductorInput, OrdenUncheckedCreateWithoutConductorInput>
  }

  export type OrdenCreateManyConductorInputEnvelope = {
    data: OrdenCreateManyConductorInput | OrdenCreateManyConductorInput[]
    skipDuplicates?: boolean
  }

  export type OrdenUpsertWithWhereUniqueWithoutConductorInput = {
    where: OrdenWhereUniqueInput
    update: XOR<OrdenUpdateWithoutConductorInput, OrdenUncheckedUpdateWithoutConductorInput>
    create: XOR<OrdenCreateWithoutConductorInput, OrdenUncheckedCreateWithoutConductorInput>
  }

  export type OrdenUpdateWithWhereUniqueWithoutConductorInput = {
    where: OrdenWhereUniqueInput
    data: XOR<OrdenUpdateWithoutConductorInput, OrdenUncheckedUpdateWithoutConductorInput>
  }

  export type OrdenUpdateManyWithWhereWithoutConductorInput = {
    where: OrdenScalarWhereInput
    data: XOR<OrdenUpdateManyMutationInput, OrdenUncheckedUpdateManyWithoutConductorInput>
  }

  export type ClienteCreateWithoutOrdenesInput = {
    nombre: string
  }

  export type ClienteUncheckedCreateWithoutOrdenesInput = {
    id?: number
    nombre: string
  }

  export type ClienteCreateOrConnectWithoutOrdenesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutOrdenesInput, ClienteUncheckedCreateWithoutOrdenesInput>
  }

  export type ConductorCreateWithoutOrdenesInput = {
    nombre: string
  }

  export type ConductorUncheckedCreateWithoutOrdenesInput = {
    id?: number
    nombre: string
  }

  export type ConductorCreateOrConnectWithoutOrdenesInput = {
    where: ConductorWhereUniqueInput
    create: XOR<ConductorCreateWithoutOrdenesInput, ConductorUncheckedCreateWithoutOrdenesInput>
  }

  export type ClienteUpsertWithoutOrdenesInput = {
    update: XOR<ClienteUpdateWithoutOrdenesInput, ClienteUncheckedUpdateWithoutOrdenesInput>
    create: XOR<ClienteCreateWithoutOrdenesInput, ClienteUncheckedCreateWithoutOrdenesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutOrdenesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutOrdenesInput, ClienteUncheckedUpdateWithoutOrdenesInput>
  }

  export type ClienteUpdateWithoutOrdenesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateWithoutOrdenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ConductorUpsertWithoutOrdenesInput = {
    update: XOR<ConductorUpdateWithoutOrdenesInput, ConductorUncheckedUpdateWithoutOrdenesInput>
    create: XOR<ConductorCreateWithoutOrdenesInput, ConductorUncheckedCreateWithoutOrdenesInput>
    where?: ConductorWhereInput
  }

  export type ConductorUpdateToOneWithWhereWithoutOrdenesInput = {
    where?: ConductorWhereInput
    data: XOR<ConductorUpdateWithoutOrdenesInput, ConductorUncheckedUpdateWithoutOrdenesInput>
  }

  export type ConductorUpdateWithoutOrdenesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ConductorUncheckedUpdateWithoutOrdenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type OrdenCreateManyClienteInput = {
    id?: number
    conductorId: number
    fecha: Date | string
    estado?: $Enums.EstadoOrden
    observaciones?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type OrdenUpdateWithoutClienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conductor?: ConductorUpdateOneRequiredWithoutOrdenesNestedInput
  }

  export type OrdenUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenCreateManyConductorInput = {
    id?: number
    clienteId: number
    fecha: Date | string
    estado?: $Enums.EstadoOrden
    observaciones?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type OrdenUpdateWithoutConductorInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutOrdenesNestedInput
  }

  export type OrdenUncheckedUpdateWithoutConductorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenUncheckedUpdateManyWithoutConductorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}