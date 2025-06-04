
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model verificationToken
 * 
 */
export type verificationToken = $Result.DefaultSelection<Prisma.$verificationTokenPayload>
/**
 * Model RefrEshToken
 * 
 */
export type RefrEshToken = $Result.DefaultSelection<Prisma.$RefrEshTokenPayload>
/**
 * Model Oauthacount
 * 
 */
export type Oauthacount = $Result.DefaultSelection<Prisma.$OauthacountPayload>
/**
 * Model passwordResetToken
 * 
 */
export type passwordResetToken = $Result.DefaultSelection<Prisma.$passwordResetTokenPayload>
/**
 * Model TOdo
 * 
 */
export type TOdo = $Result.DefaultSelection<Prisma.$TOdoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthProvider: {
  EMAIL_PASSWORD: 'EMAIL_PASSWORD',
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
  GITHUB: 'GITHUB',
  TWITTER: 'TWITTER'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **verificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.verificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refrEshToken`: Exposes CRUD operations for the **RefrEshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefrEshTokens
    * const refrEshTokens = await prisma.refrEshToken.findMany()
    * ```
    */
  get refrEshToken(): Prisma.RefrEshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oauthacount`: Exposes CRUD operations for the **Oauthacount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Oauthacounts
    * const oauthacounts = await prisma.oauthacount.findMany()
    * ```
    */
  get oauthacount(): Prisma.OauthacountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **passwordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.passwordResetTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tOdo`: Exposes CRUD operations for the **TOdo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TOdos
    * const tOdos = await prisma.tOdo.findMany()
    * ```
    */
  get tOdo(): Prisma.TOdoDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    verificationToken: 'verificationToken',
    RefrEshToken: 'RefrEshToken',
    Oauthacount: 'Oauthacount',
    passwordResetToken: 'passwordResetToken',
    TOdo: 'TOdo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "verificationToken" | "refrEshToken" | "oauthacount" | "passwordResetToken" | "tOdo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      verificationToken: {
        payload: Prisma.$verificationTokenPayload<ExtArgs>
        fields: Prisma.verificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationTokenPayload>
          }
          findFirst: {
            args: Prisma.verificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationTokenPayload>
          }
          findMany: {
            args: Prisma.verificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationTokenPayload>[]
          }
          create: {
            args: Prisma.verificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationTokenPayload>
          }
          createMany: {
            args: Prisma.verificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.verificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationTokenPayload>[]
          }
          delete: {
            args: Prisma.verificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationTokenPayload>
          }
          update: {
            args: Prisma.verificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.verificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.verificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.verificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.verificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.verificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      RefrEshToken: {
        payload: Prisma.$RefrEshTokenPayload<ExtArgs>
        fields: Prisma.RefrEshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefrEshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefrEshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefrEshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefrEshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefrEshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefrEshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefrEshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefrEshTokenPayload>
          }
          findMany: {
            args: Prisma.RefrEshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefrEshTokenPayload>[]
          }
          create: {
            args: Prisma.RefrEshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefrEshTokenPayload>
          }
          createMany: {
            args: Prisma.RefrEshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefrEshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefrEshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefrEshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefrEshTokenPayload>
          }
          update: {
            args: Prisma.RefrEshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefrEshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefrEshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefrEshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefrEshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefrEshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefrEshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefrEshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefrEshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefrEshToken>
          }
          groupBy: {
            args: Prisma.RefrEshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefrEshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefrEshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefrEshTokenCountAggregateOutputType> | number
          }
        }
      }
      Oauthacount: {
        payload: Prisma.$OauthacountPayload<ExtArgs>
        fields: Prisma.OauthacountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OauthacountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthacountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OauthacountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthacountPayload>
          }
          findFirst: {
            args: Prisma.OauthacountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthacountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OauthacountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthacountPayload>
          }
          findMany: {
            args: Prisma.OauthacountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthacountPayload>[]
          }
          create: {
            args: Prisma.OauthacountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthacountPayload>
          }
          createMany: {
            args: Prisma.OauthacountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OauthacountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthacountPayload>[]
          }
          delete: {
            args: Prisma.OauthacountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthacountPayload>
          }
          update: {
            args: Prisma.OauthacountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthacountPayload>
          }
          deleteMany: {
            args: Prisma.OauthacountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OauthacountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OauthacountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthacountPayload>[]
          }
          upsert: {
            args: Prisma.OauthacountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthacountPayload>
          }
          aggregate: {
            args: Prisma.OauthacountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOauthacount>
          }
          groupBy: {
            args: Prisma.OauthacountGroupByArgs<ExtArgs>
            result: $Utils.Optional<OauthacountGroupByOutputType>[]
          }
          count: {
            args: Prisma.OauthacountCountArgs<ExtArgs>
            result: $Utils.Optional<OauthacountCountAggregateOutputType> | number
          }
        }
      }
      passwordResetToken: {
        payload: Prisma.$passwordResetTokenPayload<ExtArgs>
        fields: Prisma.passwordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.passwordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.passwordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.passwordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.passwordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>
          }
          findMany: {
            args: Prisma.passwordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>[]
          }
          create: {
            args: Prisma.passwordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>
          }
          createMany: {
            args: Prisma.passwordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.passwordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.passwordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>
          }
          update: {
            args: Prisma.passwordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.passwordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.passwordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.passwordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.passwordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.passwordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.passwordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
      TOdo: {
        payload: Prisma.$TOdoPayload<ExtArgs>
        fields: Prisma.TOdoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TOdoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TOdoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TOdoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TOdoPayload>
          }
          findFirst: {
            args: Prisma.TOdoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TOdoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TOdoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TOdoPayload>
          }
          findMany: {
            args: Prisma.TOdoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TOdoPayload>[]
          }
          create: {
            args: Prisma.TOdoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TOdoPayload>
          }
          createMany: {
            args: Prisma.TOdoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TOdoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TOdoPayload>[]
          }
          delete: {
            args: Prisma.TOdoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TOdoPayload>
          }
          update: {
            args: Prisma.TOdoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TOdoPayload>
          }
          deleteMany: {
            args: Prisma.TOdoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TOdoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TOdoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TOdoPayload>[]
          }
          upsert: {
            args: Prisma.TOdoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TOdoPayload>
          }
          aggregate: {
            args: Prisma.TOdoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTOdo>
          }
          groupBy: {
            args: Prisma.TOdoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TOdoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TOdoCountArgs<ExtArgs>
            result: $Utils.Optional<TOdoCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    verificationToken?: verificationTokenOmit
    refrEshToken?: RefrEshTokenOmit
    oauthacount?: OauthacountOmit
    passwordResetToken?: passwordResetTokenOmit
    tOdo?: TOdoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    verificationToken: number
    refreshToken: number
    oauthacount: number
    passwordResetToken: number
    todos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationToken?: boolean | UserCountOutputTypeCountVerificationTokenArgs
    refreshToken?: boolean | UserCountOutputTypeCountRefreshTokenArgs
    oauthacount?: boolean | UserCountOutputTypeCountOauthacountArgs
    passwordResetToken?: boolean | UserCountOutputTypeCountPasswordResetTokenArgs
    todos?: boolean | UserCountOutputTypeCountTodosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verificationTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefrEshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOauthacountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OauthacountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: passwordResetTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TOdoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    isEmailVerified: boolean | null
    Provider: $Enums.AuthProvider | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    isEmailVerified: boolean | null
    Provider: $Enums.AuthProvider | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    isEmailVerified: number
    Provider: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    isEmailVerified?: true
    Provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    isEmailVerified?: true
    Provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    isEmailVerified?: true
    Provider?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstname: string | null
    lastname: string | null
    email: string
    password: string
    isEmailVerified: boolean
    Provider: $Enums.AuthProvider
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    isEmailVerified?: boolean
    Provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificationToken?: boolean | User$verificationTokenArgs<ExtArgs>
    refreshToken?: boolean | User$refreshTokenArgs<ExtArgs>
    oauthacount?: boolean | User$oauthacountArgs<ExtArgs>
    passwordResetToken?: boolean | User$passwordResetTokenArgs<ExtArgs>
    todos?: boolean | User$todosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    isEmailVerified?: boolean
    Provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    isEmailVerified?: boolean
    Provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    isEmailVerified?: boolean
    Provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password" | "isEmailVerified" | "Provider" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationToken?: boolean | User$verificationTokenArgs<ExtArgs>
    refreshToken?: boolean | User$refreshTokenArgs<ExtArgs>
    oauthacount?: boolean | User$oauthacountArgs<ExtArgs>
    passwordResetToken?: boolean | User$passwordResetTokenArgs<ExtArgs>
    todos?: boolean | User$todosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      verificationToken: Prisma.$verificationTokenPayload<ExtArgs>[]
      refreshToken: Prisma.$RefrEshTokenPayload<ExtArgs>[]
      oauthacount: Prisma.$OauthacountPayload<ExtArgs>[]
      passwordResetToken: Prisma.$passwordResetTokenPayload<ExtArgs>[]
      todos: Prisma.$TOdoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string | null
      lastname: string | null
      email: string
      password: string
      isEmailVerified: boolean
      Provider: $Enums.AuthProvider
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verificationToken<T extends User$verificationTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshToken<T extends User$refreshTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefrEshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    oauthacount<T extends User$oauthacountArgs<ExtArgs> = {}>(args?: Subset<T, User$oauthacountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthacountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResetToken<T extends User$passwordResetTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    todos<T extends User$todosArgs<ExtArgs> = {}>(args?: Subset<T, User$todosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TOdoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly Provider: FieldRef<"User", 'AuthProvider'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.verificationToken
   */
  export type User$verificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationToken
     */
    select?: verificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationToken
     */
    omit?: verificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verificationTokenInclude<ExtArgs> | null
    where?: verificationTokenWhereInput
    orderBy?: verificationTokenOrderByWithRelationInput | verificationTokenOrderByWithRelationInput[]
    cursor?: verificationTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * User.refreshToken
   */
  export type User$refreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrEshToken
     */
    select?: RefrEshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefrEshToken
     */
    omit?: RefrEshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefrEshTokenInclude<ExtArgs> | null
    where?: RefrEshTokenWhereInput
    orderBy?: RefrEshTokenOrderByWithRelationInput | RefrEshTokenOrderByWithRelationInput[]
    cursor?: RefrEshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefrEshTokenScalarFieldEnum | RefrEshTokenScalarFieldEnum[]
  }

  /**
   * User.oauthacount
   */
  export type User$oauthacountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oauthacount
     */
    select?: OauthacountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oauthacount
     */
    omit?: OauthacountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthacountInclude<ExtArgs> | null
    where?: OauthacountWhereInput
    orderBy?: OauthacountOrderByWithRelationInput | OauthacountOrderByWithRelationInput[]
    cursor?: OauthacountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OauthacountScalarFieldEnum | OauthacountScalarFieldEnum[]
  }

  /**
   * User.passwordResetToken
   */
  export type User$passwordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetTokenInclude<ExtArgs> | null
    where?: passwordResetTokenWhereInput
    orderBy?: passwordResetTokenOrderByWithRelationInput | passwordResetTokenOrderByWithRelationInput[]
    cursor?: passwordResetTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * User.todos
   */
  export type User$todosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TOdo
     */
    select?: TOdoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TOdo
     */
    omit?: TOdoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TOdoInclude<ExtArgs> | null
    where?: TOdoWhereInput
    orderBy?: TOdoOrderByWithRelationInput | TOdoOrderByWithRelationInput[]
    cursor?: TOdoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TOdoScalarFieldEnum | TOdoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model verificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    token: number
    expiresAt: number
    userId: number
    createdAt: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verificationToken to aggregate.
     */
    where?: verificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificationTokens to fetch.
     */
    orderBy?: verificationTokenOrderByWithRelationInput | verificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type verificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verificationTokenWhereInput
    orderBy?: verificationTokenOrderByWithAggregationInput | verificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: verificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    token: string
    expiresAt: Date
    userId: string
    createdAt: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends verificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type verificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationToken"]>

  export type verificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationToken"]>

  export type verificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationToken"]>

  export type verificationTokenSelectScalar = {
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type verificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiresAt" | "userId" | "createdAt", ExtArgs["result"]["verificationToken"]>
  export type verificationTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type verificationTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type verificationTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $verificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verificationToken"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiresAt: Date
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type verificationTokenGetPayload<S extends boolean | null | undefined | verificationTokenDefaultArgs> = $Result.GetResult<Prisma.$verificationTokenPayload, S>

  type verificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<verificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface verificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verificationToken'], meta: { name: 'verificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {verificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verificationTokenFindUniqueArgs>(args: SelectSubset<T, verificationTokenFindUniqueArgs<ExtArgs>>): Prisma__verificationTokenClient<$Result.GetResult<Prisma.$verificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {verificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, verificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verificationTokenClient<$Result.GetResult<Prisma.$verificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verificationTokenFindFirstArgs>(args?: SelectSubset<T, verificationTokenFindFirstArgs<ExtArgs>>): Prisma__verificationTokenClient<$Result.GetResult<Prisma.$verificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, verificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__verificationTokenClient<$Result.GetResult<Prisma.$verificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends verificationTokenFindManyArgs>(args?: SelectSubset<T, verificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {verificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends verificationTokenCreateArgs>(args: SelectSubset<T, verificationTokenCreateArgs<ExtArgs>>): Prisma__verificationTokenClient<$Result.GetResult<Prisma.$verificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {verificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verificationTokenCreateManyArgs>(args?: SelectSubset<T, verificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {verificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends verificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, verificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {verificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends verificationTokenDeleteArgs>(args: SelectSubset<T, verificationTokenDeleteArgs<ExtArgs>>): Prisma__verificationTokenClient<$Result.GetResult<Prisma.$verificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {verificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verificationTokenUpdateArgs>(args: SelectSubset<T, verificationTokenUpdateArgs<ExtArgs>>): Prisma__verificationTokenClient<$Result.GetResult<Prisma.$verificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {verificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verificationTokenDeleteManyArgs>(args?: SelectSubset<T, verificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verificationTokenUpdateManyArgs>(args: SelectSubset<T, verificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {verificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends verificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, verificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {verificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends verificationTokenUpsertArgs>(args: SelectSubset<T, verificationTokenUpsertArgs<ExtArgs>>): Prisma__verificationTokenClient<$Result.GetResult<Prisma.$verificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends verificationTokenCountArgs>(
      args?: Subset<T, verificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationTokenGroupByArgs} args - Group by arguments.
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
      T extends verificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: verificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, verificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verificationToken model
   */
  readonly fields: verificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the verificationToken model
   */
  interface verificationTokenFieldRefs {
    readonly id: FieldRef<"verificationToken", 'String'>
    readonly token: FieldRef<"verificationToken", 'String'>
    readonly expiresAt: FieldRef<"verificationToken", 'DateTime'>
    readonly userId: FieldRef<"verificationToken", 'String'>
    readonly createdAt: FieldRef<"verificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * verificationToken findUnique
   */
  export type verificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationToken
     */
    select?: verificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationToken
     */
    omit?: verificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which verificationToken to fetch.
     */
    where: verificationTokenWhereUniqueInput
  }

  /**
   * verificationToken findUniqueOrThrow
   */
  export type verificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationToken
     */
    select?: verificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationToken
     */
    omit?: verificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which verificationToken to fetch.
     */
    where: verificationTokenWhereUniqueInput
  }

  /**
   * verificationToken findFirst
   */
  export type verificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationToken
     */
    select?: verificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationToken
     */
    omit?: verificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which verificationToken to fetch.
     */
    where?: verificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificationTokens to fetch.
     */
    orderBy?: verificationTokenOrderByWithRelationInput | verificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verificationTokens.
     */
    cursor?: verificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * verificationToken findFirstOrThrow
   */
  export type verificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationToken
     */
    select?: verificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationToken
     */
    omit?: verificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which verificationToken to fetch.
     */
    where?: verificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificationTokens to fetch.
     */
    orderBy?: verificationTokenOrderByWithRelationInput | verificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verificationTokens.
     */
    cursor?: verificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * verificationToken findMany
   */
  export type verificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationToken
     */
    select?: verificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationToken
     */
    omit?: verificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which verificationTokens to fetch.
     */
    where?: verificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificationTokens to fetch.
     */
    orderBy?: verificationTokenOrderByWithRelationInput | verificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verificationTokens.
     */
    cursor?: verificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * verificationToken create
   */
  export type verificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationToken
     */
    select?: verificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationToken
     */
    omit?: verificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a verificationToken.
     */
    data: XOR<verificationTokenCreateInput, verificationTokenUncheckedCreateInput>
  }

  /**
   * verificationToken createMany
   */
  export type verificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verificationTokens.
     */
    data: verificationTokenCreateManyInput | verificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verificationToken createManyAndReturn
   */
  export type verificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationToken
     */
    select?: verificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verificationToken
     */
    omit?: verificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many verificationTokens.
     */
    data: verificationTokenCreateManyInput | verificationTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verificationTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * verificationToken update
   */
  export type verificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationToken
     */
    select?: verificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationToken
     */
    omit?: verificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a verificationToken.
     */
    data: XOR<verificationTokenUpdateInput, verificationTokenUncheckedUpdateInput>
    /**
     * Choose, which verificationToken to update.
     */
    where: verificationTokenWhereUniqueInput
  }

  /**
   * verificationToken updateMany
   */
  export type verificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verificationTokens.
     */
    data: XOR<verificationTokenUpdateManyMutationInput, verificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which verificationTokens to update
     */
    where?: verificationTokenWhereInput
    /**
     * Limit how many verificationTokens to update.
     */
    limit?: number
  }

  /**
   * verificationToken updateManyAndReturn
   */
  export type verificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationToken
     */
    select?: verificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verificationToken
     */
    omit?: verificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update verificationTokens.
     */
    data: XOR<verificationTokenUpdateManyMutationInput, verificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which verificationTokens to update
     */
    where?: verificationTokenWhereInput
    /**
     * Limit how many verificationTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verificationTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * verificationToken upsert
   */
  export type verificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationToken
     */
    select?: verificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationToken
     */
    omit?: verificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verificationTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the verificationToken to update in case it exists.
     */
    where: verificationTokenWhereUniqueInput
    /**
     * In case the verificationToken found by the `where` argument doesn't exist, create a new verificationToken with this data.
     */
    create: XOR<verificationTokenCreateInput, verificationTokenUncheckedCreateInput>
    /**
     * In case the verificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verificationTokenUpdateInput, verificationTokenUncheckedUpdateInput>
  }

  /**
   * verificationToken delete
   */
  export type verificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationToken
     */
    select?: verificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationToken
     */
    omit?: verificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verificationTokenInclude<ExtArgs> | null
    /**
     * Filter which verificationToken to delete.
     */
    where: verificationTokenWhereUniqueInput
  }

  /**
   * verificationToken deleteMany
   */
  export type verificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verificationTokens to delete
     */
    where?: verificationTokenWhereInput
    /**
     * Limit how many verificationTokens to delete.
     */
    limit?: number
  }

  /**
   * verificationToken without action
   */
  export type verificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationToken
     */
    select?: verificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationToken
     */
    omit?: verificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verificationTokenInclude<ExtArgs> | null
  }


  /**
   * Model RefrEshToken
   */

  export type AggregateRefrEshToken = {
    _count: RefrEshTokenCountAggregateOutputType | null
    _min: RefrEshTokenMinAggregateOutputType | null
    _max: RefrEshTokenMaxAggregateOutputType | null
  }

  export type RefrEshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type RefrEshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type RefrEshTokenCountAggregateOutputType = {
    id: number
    token: number
    expiresAt: number
    userId: number
    createdAt: number
    _all: number
  }


  export type RefrEshTokenMinAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type RefrEshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type RefrEshTokenCountAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type RefrEshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefrEshToken to aggregate.
     */
    where?: RefrEshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefrEshTokens to fetch.
     */
    orderBy?: RefrEshTokenOrderByWithRelationInput | RefrEshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefrEshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefrEshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefrEshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefrEshTokens
    **/
    _count?: true | RefrEshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefrEshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefrEshTokenMaxAggregateInputType
  }

  export type GetRefrEshTokenAggregateType<T extends RefrEshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefrEshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefrEshToken[P]>
      : GetScalarType<T[P], AggregateRefrEshToken[P]>
  }




  export type RefrEshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefrEshTokenWhereInput
    orderBy?: RefrEshTokenOrderByWithAggregationInput | RefrEshTokenOrderByWithAggregationInput[]
    by: RefrEshTokenScalarFieldEnum[] | RefrEshTokenScalarFieldEnum
    having?: RefrEshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefrEshTokenCountAggregateInputType | true
    _min?: RefrEshTokenMinAggregateInputType
    _max?: RefrEshTokenMaxAggregateInputType
  }

  export type RefrEshTokenGroupByOutputType = {
    id: string
    token: string
    expiresAt: Date
    userId: string
    createdAt: Date
    _count: RefrEshTokenCountAggregateOutputType | null
    _min: RefrEshTokenMinAggregateOutputType | null
    _max: RefrEshTokenMaxAggregateOutputType | null
  }

  type GetRefrEshTokenGroupByPayload<T extends RefrEshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefrEshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefrEshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefrEshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefrEshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefrEshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refrEshToken"]>

  export type RefrEshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refrEshToken"]>

  export type RefrEshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refrEshToken"]>

  export type RefrEshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type RefrEshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiresAt" | "userId" | "createdAt", ExtArgs["result"]["refrEshToken"]>
  export type RefrEshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefrEshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefrEshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefrEshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefrEshToken"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiresAt: Date
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["refrEshToken"]>
    composites: {}
  }

  type RefrEshTokenGetPayload<S extends boolean | null | undefined | RefrEshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefrEshTokenPayload, S>

  type RefrEshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefrEshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefrEshTokenCountAggregateInputType | true
    }

  export interface RefrEshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefrEshToken'], meta: { name: 'RefrEshToken' } }
    /**
     * Find zero or one RefrEshToken that matches the filter.
     * @param {RefrEshTokenFindUniqueArgs} args - Arguments to find a RefrEshToken
     * @example
     * // Get one RefrEshToken
     * const refrEshToken = await prisma.refrEshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefrEshTokenFindUniqueArgs>(args: SelectSubset<T, RefrEshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefrEshTokenClient<$Result.GetResult<Prisma.$RefrEshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefrEshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefrEshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefrEshToken
     * @example
     * // Get one RefrEshToken
     * const refrEshToken = await prisma.refrEshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefrEshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefrEshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefrEshTokenClient<$Result.GetResult<Prisma.$RefrEshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefrEshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefrEshTokenFindFirstArgs} args - Arguments to find a RefrEshToken
     * @example
     * // Get one RefrEshToken
     * const refrEshToken = await prisma.refrEshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefrEshTokenFindFirstArgs>(args?: SelectSubset<T, RefrEshTokenFindFirstArgs<ExtArgs>>): Prisma__RefrEshTokenClient<$Result.GetResult<Prisma.$RefrEshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefrEshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefrEshTokenFindFirstOrThrowArgs} args - Arguments to find a RefrEshToken
     * @example
     * // Get one RefrEshToken
     * const refrEshToken = await prisma.refrEshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefrEshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefrEshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefrEshTokenClient<$Result.GetResult<Prisma.$RefrEshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefrEshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefrEshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefrEshTokens
     * const refrEshTokens = await prisma.refrEshToken.findMany()
     * 
     * // Get first 10 RefrEshTokens
     * const refrEshTokens = await prisma.refrEshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refrEshTokenWithIdOnly = await prisma.refrEshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefrEshTokenFindManyArgs>(args?: SelectSubset<T, RefrEshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefrEshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefrEshToken.
     * @param {RefrEshTokenCreateArgs} args - Arguments to create a RefrEshToken.
     * @example
     * // Create one RefrEshToken
     * const RefrEshToken = await prisma.refrEshToken.create({
     *   data: {
     *     // ... data to create a RefrEshToken
     *   }
     * })
     * 
     */
    create<T extends RefrEshTokenCreateArgs>(args: SelectSubset<T, RefrEshTokenCreateArgs<ExtArgs>>): Prisma__RefrEshTokenClient<$Result.GetResult<Prisma.$RefrEshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefrEshTokens.
     * @param {RefrEshTokenCreateManyArgs} args - Arguments to create many RefrEshTokens.
     * @example
     * // Create many RefrEshTokens
     * const refrEshToken = await prisma.refrEshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefrEshTokenCreateManyArgs>(args?: SelectSubset<T, RefrEshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefrEshTokens and returns the data saved in the database.
     * @param {RefrEshTokenCreateManyAndReturnArgs} args - Arguments to create many RefrEshTokens.
     * @example
     * // Create many RefrEshTokens
     * const refrEshToken = await prisma.refrEshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefrEshTokens and only return the `id`
     * const refrEshTokenWithIdOnly = await prisma.refrEshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefrEshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefrEshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefrEshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefrEshToken.
     * @param {RefrEshTokenDeleteArgs} args - Arguments to delete one RefrEshToken.
     * @example
     * // Delete one RefrEshToken
     * const RefrEshToken = await prisma.refrEshToken.delete({
     *   where: {
     *     // ... filter to delete one RefrEshToken
     *   }
     * })
     * 
     */
    delete<T extends RefrEshTokenDeleteArgs>(args: SelectSubset<T, RefrEshTokenDeleteArgs<ExtArgs>>): Prisma__RefrEshTokenClient<$Result.GetResult<Prisma.$RefrEshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefrEshToken.
     * @param {RefrEshTokenUpdateArgs} args - Arguments to update one RefrEshToken.
     * @example
     * // Update one RefrEshToken
     * const refrEshToken = await prisma.refrEshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefrEshTokenUpdateArgs>(args: SelectSubset<T, RefrEshTokenUpdateArgs<ExtArgs>>): Prisma__RefrEshTokenClient<$Result.GetResult<Prisma.$RefrEshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefrEshTokens.
     * @param {RefrEshTokenDeleteManyArgs} args - Arguments to filter RefrEshTokens to delete.
     * @example
     * // Delete a few RefrEshTokens
     * const { count } = await prisma.refrEshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefrEshTokenDeleteManyArgs>(args?: SelectSubset<T, RefrEshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefrEshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefrEshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefrEshTokens
     * const refrEshToken = await prisma.refrEshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefrEshTokenUpdateManyArgs>(args: SelectSubset<T, RefrEshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefrEshTokens and returns the data updated in the database.
     * @param {RefrEshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefrEshTokens.
     * @example
     * // Update many RefrEshTokens
     * const refrEshToken = await prisma.refrEshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefrEshTokens and only return the `id`
     * const refrEshTokenWithIdOnly = await prisma.refrEshToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends RefrEshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefrEshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefrEshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefrEshToken.
     * @param {RefrEshTokenUpsertArgs} args - Arguments to update or create a RefrEshToken.
     * @example
     * // Update or create a RefrEshToken
     * const refrEshToken = await prisma.refrEshToken.upsert({
     *   create: {
     *     // ... data to create a RefrEshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefrEshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefrEshTokenUpsertArgs>(args: SelectSubset<T, RefrEshTokenUpsertArgs<ExtArgs>>): Prisma__RefrEshTokenClient<$Result.GetResult<Prisma.$RefrEshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefrEshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefrEshTokenCountArgs} args - Arguments to filter RefrEshTokens to count.
     * @example
     * // Count the number of RefrEshTokens
     * const count = await prisma.refrEshToken.count({
     *   where: {
     *     // ... the filter for the RefrEshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefrEshTokenCountArgs>(
      args?: Subset<T, RefrEshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefrEshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefrEshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefrEshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefrEshTokenAggregateArgs>(args: Subset<T, RefrEshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefrEshTokenAggregateType<T>>

    /**
     * Group by RefrEshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefrEshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefrEshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefrEshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefrEshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefrEshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefrEshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefrEshToken model
   */
  readonly fields: RefrEshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefrEshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefrEshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RefrEshToken model
   */
  interface RefrEshTokenFieldRefs {
    readonly id: FieldRef<"RefrEshToken", 'String'>
    readonly token: FieldRef<"RefrEshToken", 'String'>
    readonly expiresAt: FieldRef<"RefrEshToken", 'DateTime'>
    readonly userId: FieldRef<"RefrEshToken", 'String'>
    readonly createdAt: FieldRef<"RefrEshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefrEshToken findUnique
   */
  export type RefrEshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrEshToken
     */
    select?: RefrEshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefrEshToken
     */
    omit?: RefrEshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefrEshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefrEshToken to fetch.
     */
    where: RefrEshTokenWhereUniqueInput
  }

  /**
   * RefrEshToken findUniqueOrThrow
   */
  export type RefrEshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrEshToken
     */
    select?: RefrEshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefrEshToken
     */
    omit?: RefrEshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefrEshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefrEshToken to fetch.
     */
    where: RefrEshTokenWhereUniqueInput
  }

  /**
   * RefrEshToken findFirst
   */
  export type RefrEshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrEshToken
     */
    select?: RefrEshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefrEshToken
     */
    omit?: RefrEshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefrEshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefrEshToken to fetch.
     */
    where?: RefrEshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefrEshTokens to fetch.
     */
    orderBy?: RefrEshTokenOrderByWithRelationInput | RefrEshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefrEshTokens.
     */
    cursor?: RefrEshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefrEshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefrEshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefrEshTokens.
     */
    distinct?: RefrEshTokenScalarFieldEnum | RefrEshTokenScalarFieldEnum[]
  }

  /**
   * RefrEshToken findFirstOrThrow
   */
  export type RefrEshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrEshToken
     */
    select?: RefrEshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefrEshToken
     */
    omit?: RefrEshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefrEshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefrEshToken to fetch.
     */
    where?: RefrEshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefrEshTokens to fetch.
     */
    orderBy?: RefrEshTokenOrderByWithRelationInput | RefrEshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefrEshTokens.
     */
    cursor?: RefrEshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefrEshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefrEshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefrEshTokens.
     */
    distinct?: RefrEshTokenScalarFieldEnum | RefrEshTokenScalarFieldEnum[]
  }

  /**
   * RefrEshToken findMany
   */
  export type RefrEshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrEshToken
     */
    select?: RefrEshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefrEshToken
     */
    omit?: RefrEshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefrEshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefrEshTokens to fetch.
     */
    where?: RefrEshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefrEshTokens to fetch.
     */
    orderBy?: RefrEshTokenOrderByWithRelationInput | RefrEshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefrEshTokens.
     */
    cursor?: RefrEshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefrEshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefrEshTokens.
     */
    skip?: number
    distinct?: RefrEshTokenScalarFieldEnum | RefrEshTokenScalarFieldEnum[]
  }

  /**
   * RefrEshToken create
   */
  export type RefrEshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrEshToken
     */
    select?: RefrEshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefrEshToken
     */
    omit?: RefrEshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefrEshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefrEshToken.
     */
    data: XOR<RefrEshTokenCreateInput, RefrEshTokenUncheckedCreateInput>
  }

  /**
   * RefrEshToken createMany
   */
  export type RefrEshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefrEshTokens.
     */
    data: RefrEshTokenCreateManyInput | RefrEshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefrEshToken createManyAndReturn
   */
  export type RefrEshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrEshToken
     */
    select?: RefrEshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefrEshToken
     */
    omit?: RefrEshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefrEshTokens.
     */
    data: RefrEshTokenCreateManyInput | RefrEshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefrEshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefrEshToken update
   */
  export type RefrEshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrEshToken
     */
    select?: RefrEshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefrEshToken
     */
    omit?: RefrEshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefrEshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefrEshToken.
     */
    data: XOR<RefrEshTokenUpdateInput, RefrEshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefrEshToken to update.
     */
    where: RefrEshTokenWhereUniqueInput
  }

  /**
   * RefrEshToken updateMany
   */
  export type RefrEshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefrEshTokens.
     */
    data: XOR<RefrEshTokenUpdateManyMutationInput, RefrEshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefrEshTokens to update
     */
    where?: RefrEshTokenWhereInput
    /**
     * Limit how many RefrEshTokens to update.
     */
    limit?: number
  }

  /**
   * RefrEshToken updateManyAndReturn
   */
  export type RefrEshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrEshToken
     */
    select?: RefrEshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefrEshToken
     */
    omit?: RefrEshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefrEshTokens.
     */
    data: XOR<RefrEshTokenUpdateManyMutationInput, RefrEshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefrEshTokens to update
     */
    where?: RefrEshTokenWhereInput
    /**
     * Limit how many RefrEshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefrEshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefrEshToken upsert
   */
  export type RefrEshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrEshToken
     */
    select?: RefrEshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefrEshToken
     */
    omit?: RefrEshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefrEshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefrEshToken to update in case it exists.
     */
    where: RefrEshTokenWhereUniqueInput
    /**
     * In case the RefrEshToken found by the `where` argument doesn't exist, create a new RefrEshToken with this data.
     */
    create: XOR<RefrEshTokenCreateInput, RefrEshTokenUncheckedCreateInput>
    /**
     * In case the RefrEshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefrEshTokenUpdateInput, RefrEshTokenUncheckedUpdateInput>
  }

  /**
   * RefrEshToken delete
   */
  export type RefrEshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrEshToken
     */
    select?: RefrEshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefrEshToken
     */
    omit?: RefrEshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefrEshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefrEshToken to delete.
     */
    where: RefrEshTokenWhereUniqueInput
  }

  /**
   * RefrEshToken deleteMany
   */
  export type RefrEshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefrEshTokens to delete
     */
    where?: RefrEshTokenWhereInput
    /**
     * Limit how many RefrEshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefrEshToken without action
   */
  export type RefrEshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrEshToken
     */
    select?: RefrEshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefrEshToken
     */
    omit?: RefrEshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefrEshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Oauthacount
   */

  export type AggregateOauthacount = {
    _count: OauthacountCountAggregateOutputType | null
    _min: OauthacountMinAggregateOutputType | null
    _max: OauthacountMaxAggregateOutputType | null
  }

  export type OauthacountMinAggregateOutputType = {
    id: string | null
    provider: $Enums.AuthProvider | null
    providerAccountId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type OauthacountMaxAggregateOutputType = {
    id: string | null
    provider: $Enums.AuthProvider | null
    providerAccountId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type OauthacountCountAggregateOutputType = {
    id: number
    provider: number
    providerAccountId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type OauthacountMinAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    userId?: true
    createdAt?: true
  }

  export type OauthacountMaxAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    userId?: true
    createdAt?: true
  }

  export type OauthacountCountAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type OauthacountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Oauthacount to aggregate.
     */
    where?: OauthacountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oauthacounts to fetch.
     */
    orderBy?: OauthacountOrderByWithRelationInput | OauthacountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OauthacountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oauthacounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oauthacounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Oauthacounts
    **/
    _count?: true | OauthacountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OauthacountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OauthacountMaxAggregateInputType
  }

  export type GetOauthacountAggregateType<T extends OauthacountAggregateArgs> = {
        [P in keyof T & keyof AggregateOauthacount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOauthacount[P]>
      : GetScalarType<T[P], AggregateOauthacount[P]>
  }




  export type OauthacountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OauthacountWhereInput
    orderBy?: OauthacountOrderByWithAggregationInput | OauthacountOrderByWithAggregationInput[]
    by: OauthacountScalarFieldEnum[] | OauthacountScalarFieldEnum
    having?: OauthacountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OauthacountCountAggregateInputType | true
    _min?: OauthacountMinAggregateInputType
    _max?: OauthacountMaxAggregateInputType
  }

  export type OauthacountGroupByOutputType = {
    id: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    userId: string
    createdAt: Date
    _count: OauthacountCountAggregateOutputType | null
    _min: OauthacountMinAggregateOutputType | null
    _max: OauthacountMaxAggregateOutputType | null
  }

  type GetOauthacountGroupByPayload<T extends OauthacountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OauthacountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OauthacountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OauthacountGroupByOutputType[P]>
            : GetScalarType<T[P], OauthacountGroupByOutputType[P]>
        }
      >
    >


  export type OauthacountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    userId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oauthacount"]>

  export type OauthacountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    userId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oauthacount"]>

  export type OauthacountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    userId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oauthacount"]>

  export type OauthacountSelectScalar = {
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type OauthacountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "providerAccountId" | "userId" | "createdAt", ExtArgs["result"]["oauthacount"]>
  export type OauthacountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OauthacountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OauthacountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OauthacountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Oauthacount"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: $Enums.AuthProvider
      providerAccountId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["oauthacount"]>
    composites: {}
  }

  type OauthacountGetPayload<S extends boolean | null | undefined | OauthacountDefaultArgs> = $Result.GetResult<Prisma.$OauthacountPayload, S>

  type OauthacountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OauthacountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OauthacountCountAggregateInputType | true
    }

  export interface OauthacountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Oauthacount'], meta: { name: 'Oauthacount' } }
    /**
     * Find zero or one Oauthacount that matches the filter.
     * @param {OauthacountFindUniqueArgs} args - Arguments to find a Oauthacount
     * @example
     * // Get one Oauthacount
     * const oauthacount = await prisma.oauthacount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OauthacountFindUniqueArgs>(args: SelectSubset<T, OauthacountFindUniqueArgs<ExtArgs>>): Prisma__OauthacountClient<$Result.GetResult<Prisma.$OauthacountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Oauthacount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OauthacountFindUniqueOrThrowArgs} args - Arguments to find a Oauthacount
     * @example
     * // Get one Oauthacount
     * const oauthacount = await prisma.oauthacount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OauthacountFindUniqueOrThrowArgs>(args: SelectSubset<T, OauthacountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OauthacountClient<$Result.GetResult<Prisma.$OauthacountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Oauthacount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthacountFindFirstArgs} args - Arguments to find a Oauthacount
     * @example
     * // Get one Oauthacount
     * const oauthacount = await prisma.oauthacount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OauthacountFindFirstArgs>(args?: SelectSubset<T, OauthacountFindFirstArgs<ExtArgs>>): Prisma__OauthacountClient<$Result.GetResult<Prisma.$OauthacountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Oauthacount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthacountFindFirstOrThrowArgs} args - Arguments to find a Oauthacount
     * @example
     * // Get one Oauthacount
     * const oauthacount = await prisma.oauthacount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OauthacountFindFirstOrThrowArgs>(args?: SelectSubset<T, OauthacountFindFirstOrThrowArgs<ExtArgs>>): Prisma__OauthacountClient<$Result.GetResult<Prisma.$OauthacountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Oauthacounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthacountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Oauthacounts
     * const oauthacounts = await prisma.oauthacount.findMany()
     * 
     * // Get first 10 Oauthacounts
     * const oauthacounts = await prisma.oauthacount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oauthacountWithIdOnly = await prisma.oauthacount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OauthacountFindManyArgs>(args?: SelectSubset<T, OauthacountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthacountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Oauthacount.
     * @param {OauthacountCreateArgs} args - Arguments to create a Oauthacount.
     * @example
     * // Create one Oauthacount
     * const Oauthacount = await prisma.oauthacount.create({
     *   data: {
     *     // ... data to create a Oauthacount
     *   }
     * })
     * 
     */
    create<T extends OauthacountCreateArgs>(args: SelectSubset<T, OauthacountCreateArgs<ExtArgs>>): Prisma__OauthacountClient<$Result.GetResult<Prisma.$OauthacountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Oauthacounts.
     * @param {OauthacountCreateManyArgs} args - Arguments to create many Oauthacounts.
     * @example
     * // Create many Oauthacounts
     * const oauthacount = await prisma.oauthacount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OauthacountCreateManyArgs>(args?: SelectSubset<T, OauthacountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Oauthacounts and returns the data saved in the database.
     * @param {OauthacountCreateManyAndReturnArgs} args - Arguments to create many Oauthacounts.
     * @example
     * // Create many Oauthacounts
     * const oauthacount = await prisma.oauthacount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Oauthacounts and only return the `id`
     * const oauthacountWithIdOnly = await prisma.oauthacount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OauthacountCreateManyAndReturnArgs>(args?: SelectSubset<T, OauthacountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthacountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Oauthacount.
     * @param {OauthacountDeleteArgs} args - Arguments to delete one Oauthacount.
     * @example
     * // Delete one Oauthacount
     * const Oauthacount = await prisma.oauthacount.delete({
     *   where: {
     *     // ... filter to delete one Oauthacount
     *   }
     * })
     * 
     */
    delete<T extends OauthacountDeleteArgs>(args: SelectSubset<T, OauthacountDeleteArgs<ExtArgs>>): Prisma__OauthacountClient<$Result.GetResult<Prisma.$OauthacountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Oauthacount.
     * @param {OauthacountUpdateArgs} args - Arguments to update one Oauthacount.
     * @example
     * // Update one Oauthacount
     * const oauthacount = await prisma.oauthacount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OauthacountUpdateArgs>(args: SelectSubset<T, OauthacountUpdateArgs<ExtArgs>>): Prisma__OauthacountClient<$Result.GetResult<Prisma.$OauthacountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Oauthacounts.
     * @param {OauthacountDeleteManyArgs} args - Arguments to filter Oauthacounts to delete.
     * @example
     * // Delete a few Oauthacounts
     * const { count } = await prisma.oauthacount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OauthacountDeleteManyArgs>(args?: SelectSubset<T, OauthacountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Oauthacounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthacountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Oauthacounts
     * const oauthacount = await prisma.oauthacount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OauthacountUpdateManyArgs>(args: SelectSubset<T, OauthacountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Oauthacounts and returns the data updated in the database.
     * @param {OauthacountUpdateManyAndReturnArgs} args - Arguments to update many Oauthacounts.
     * @example
     * // Update many Oauthacounts
     * const oauthacount = await prisma.oauthacount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Oauthacounts and only return the `id`
     * const oauthacountWithIdOnly = await prisma.oauthacount.updateManyAndReturn({
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
    updateManyAndReturn<T extends OauthacountUpdateManyAndReturnArgs>(args: SelectSubset<T, OauthacountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthacountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Oauthacount.
     * @param {OauthacountUpsertArgs} args - Arguments to update or create a Oauthacount.
     * @example
     * // Update or create a Oauthacount
     * const oauthacount = await prisma.oauthacount.upsert({
     *   create: {
     *     // ... data to create a Oauthacount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Oauthacount we want to update
     *   }
     * })
     */
    upsert<T extends OauthacountUpsertArgs>(args: SelectSubset<T, OauthacountUpsertArgs<ExtArgs>>): Prisma__OauthacountClient<$Result.GetResult<Prisma.$OauthacountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Oauthacounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthacountCountArgs} args - Arguments to filter Oauthacounts to count.
     * @example
     * // Count the number of Oauthacounts
     * const count = await prisma.oauthacount.count({
     *   where: {
     *     // ... the filter for the Oauthacounts we want to count
     *   }
     * })
    **/
    count<T extends OauthacountCountArgs>(
      args?: Subset<T, OauthacountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OauthacountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Oauthacount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthacountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OauthacountAggregateArgs>(args: Subset<T, OauthacountAggregateArgs>): Prisma.PrismaPromise<GetOauthacountAggregateType<T>>

    /**
     * Group by Oauthacount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthacountGroupByArgs} args - Group by arguments.
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
      T extends OauthacountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OauthacountGroupByArgs['orderBy'] }
        : { orderBy?: OauthacountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OauthacountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOauthacountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Oauthacount model
   */
  readonly fields: OauthacountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Oauthacount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OauthacountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Oauthacount model
   */
  interface OauthacountFieldRefs {
    readonly id: FieldRef<"Oauthacount", 'String'>
    readonly provider: FieldRef<"Oauthacount", 'AuthProvider'>
    readonly providerAccountId: FieldRef<"Oauthacount", 'String'>
    readonly userId: FieldRef<"Oauthacount", 'String'>
    readonly createdAt: FieldRef<"Oauthacount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Oauthacount findUnique
   */
  export type OauthacountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oauthacount
     */
    select?: OauthacountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oauthacount
     */
    omit?: OauthacountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthacountInclude<ExtArgs> | null
    /**
     * Filter, which Oauthacount to fetch.
     */
    where: OauthacountWhereUniqueInput
  }

  /**
   * Oauthacount findUniqueOrThrow
   */
  export type OauthacountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oauthacount
     */
    select?: OauthacountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oauthacount
     */
    omit?: OauthacountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthacountInclude<ExtArgs> | null
    /**
     * Filter, which Oauthacount to fetch.
     */
    where: OauthacountWhereUniqueInput
  }

  /**
   * Oauthacount findFirst
   */
  export type OauthacountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oauthacount
     */
    select?: OauthacountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oauthacount
     */
    omit?: OauthacountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthacountInclude<ExtArgs> | null
    /**
     * Filter, which Oauthacount to fetch.
     */
    where?: OauthacountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oauthacounts to fetch.
     */
    orderBy?: OauthacountOrderByWithRelationInput | OauthacountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Oauthacounts.
     */
    cursor?: OauthacountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oauthacounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oauthacounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Oauthacounts.
     */
    distinct?: OauthacountScalarFieldEnum | OauthacountScalarFieldEnum[]
  }

  /**
   * Oauthacount findFirstOrThrow
   */
  export type OauthacountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oauthacount
     */
    select?: OauthacountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oauthacount
     */
    omit?: OauthacountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthacountInclude<ExtArgs> | null
    /**
     * Filter, which Oauthacount to fetch.
     */
    where?: OauthacountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oauthacounts to fetch.
     */
    orderBy?: OauthacountOrderByWithRelationInput | OauthacountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Oauthacounts.
     */
    cursor?: OauthacountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oauthacounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oauthacounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Oauthacounts.
     */
    distinct?: OauthacountScalarFieldEnum | OauthacountScalarFieldEnum[]
  }

  /**
   * Oauthacount findMany
   */
  export type OauthacountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oauthacount
     */
    select?: OauthacountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oauthacount
     */
    omit?: OauthacountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthacountInclude<ExtArgs> | null
    /**
     * Filter, which Oauthacounts to fetch.
     */
    where?: OauthacountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oauthacounts to fetch.
     */
    orderBy?: OauthacountOrderByWithRelationInput | OauthacountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Oauthacounts.
     */
    cursor?: OauthacountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oauthacounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oauthacounts.
     */
    skip?: number
    distinct?: OauthacountScalarFieldEnum | OauthacountScalarFieldEnum[]
  }

  /**
   * Oauthacount create
   */
  export type OauthacountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oauthacount
     */
    select?: OauthacountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oauthacount
     */
    omit?: OauthacountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthacountInclude<ExtArgs> | null
    /**
     * The data needed to create a Oauthacount.
     */
    data: XOR<OauthacountCreateInput, OauthacountUncheckedCreateInput>
  }

  /**
   * Oauthacount createMany
   */
  export type OauthacountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Oauthacounts.
     */
    data: OauthacountCreateManyInput | OauthacountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Oauthacount createManyAndReturn
   */
  export type OauthacountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oauthacount
     */
    select?: OauthacountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Oauthacount
     */
    omit?: OauthacountOmit<ExtArgs> | null
    /**
     * The data used to create many Oauthacounts.
     */
    data: OauthacountCreateManyInput | OauthacountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthacountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Oauthacount update
   */
  export type OauthacountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oauthacount
     */
    select?: OauthacountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oauthacount
     */
    omit?: OauthacountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthacountInclude<ExtArgs> | null
    /**
     * The data needed to update a Oauthacount.
     */
    data: XOR<OauthacountUpdateInput, OauthacountUncheckedUpdateInput>
    /**
     * Choose, which Oauthacount to update.
     */
    where: OauthacountWhereUniqueInput
  }

  /**
   * Oauthacount updateMany
   */
  export type OauthacountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Oauthacounts.
     */
    data: XOR<OauthacountUpdateManyMutationInput, OauthacountUncheckedUpdateManyInput>
    /**
     * Filter which Oauthacounts to update
     */
    where?: OauthacountWhereInput
    /**
     * Limit how many Oauthacounts to update.
     */
    limit?: number
  }

  /**
   * Oauthacount updateManyAndReturn
   */
  export type OauthacountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oauthacount
     */
    select?: OauthacountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Oauthacount
     */
    omit?: OauthacountOmit<ExtArgs> | null
    /**
     * The data used to update Oauthacounts.
     */
    data: XOR<OauthacountUpdateManyMutationInput, OauthacountUncheckedUpdateManyInput>
    /**
     * Filter which Oauthacounts to update
     */
    where?: OauthacountWhereInput
    /**
     * Limit how many Oauthacounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthacountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Oauthacount upsert
   */
  export type OauthacountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oauthacount
     */
    select?: OauthacountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oauthacount
     */
    omit?: OauthacountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthacountInclude<ExtArgs> | null
    /**
     * The filter to search for the Oauthacount to update in case it exists.
     */
    where: OauthacountWhereUniqueInput
    /**
     * In case the Oauthacount found by the `where` argument doesn't exist, create a new Oauthacount with this data.
     */
    create: XOR<OauthacountCreateInput, OauthacountUncheckedCreateInput>
    /**
     * In case the Oauthacount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OauthacountUpdateInput, OauthacountUncheckedUpdateInput>
  }

  /**
   * Oauthacount delete
   */
  export type OauthacountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oauthacount
     */
    select?: OauthacountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oauthacount
     */
    omit?: OauthacountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthacountInclude<ExtArgs> | null
    /**
     * Filter which Oauthacount to delete.
     */
    where: OauthacountWhereUniqueInput
  }

  /**
   * Oauthacount deleteMany
   */
  export type OauthacountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Oauthacounts to delete
     */
    where?: OauthacountWhereInput
    /**
     * Limit how many Oauthacounts to delete.
     */
    limit?: number
  }

  /**
   * Oauthacount without action
   */
  export type OauthacountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oauthacount
     */
    select?: OauthacountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oauthacount
     */
    omit?: OauthacountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthacountInclude<ExtArgs> | null
  }


  /**
   * Model passwordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    token: number
    expiresAt: number
    userId: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which passwordResetToken to aggregate.
     */
    where?: passwordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwordResetTokens to fetch.
     */
    orderBy?: passwordResetTokenOrderByWithRelationInput | passwordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: passwordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned passwordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type passwordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: passwordResetTokenWhereInput
    orderBy?: passwordResetTokenOrderByWithAggregationInput | passwordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: passwordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    token: string
    expiresAt: Date
    userId: string
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends passwordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type passwordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type passwordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type passwordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type passwordResetTokenSelectScalar = {
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type passwordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiresAt" | "userId" | "createdAt", ExtArgs["result"]["passwordResetToken"]>
  export type passwordResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type passwordResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type passwordResetTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $passwordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "passwordResetToken"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiresAt: Date
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type passwordResetTokenGetPayload<S extends boolean | null | undefined | passwordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$passwordResetTokenPayload, S>

  type passwordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<passwordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface passwordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['passwordResetToken'], meta: { name: 'passwordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {passwordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends passwordResetTokenFindUniqueArgs>(args: SelectSubset<T, passwordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {passwordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends passwordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, passwordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends passwordResetTokenFindFirstArgs>(args?: SelectSubset<T, passwordResetTokenFindFirstArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends passwordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, passwordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends passwordResetTokenFindManyArgs>(args?: SelectSubset<T, passwordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {passwordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends passwordResetTokenCreateArgs>(args: SelectSubset<T, passwordResetTokenCreateArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {passwordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends passwordResetTokenCreateManyArgs>(args?: SelectSubset<T, passwordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {passwordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends passwordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, passwordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {passwordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends passwordResetTokenDeleteArgs>(args: SelectSubset<T, passwordResetTokenDeleteArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {passwordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends passwordResetTokenUpdateArgs>(args: SelectSubset<T, passwordResetTokenUpdateArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {passwordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends passwordResetTokenDeleteManyArgs>(args?: SelectSubset<T, passwordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends passwordResetTokenUpdateManyArgs>(args: SelectSubset<T, passwordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {passwordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends passwordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, passwordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {passwordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends passwordResetTokenUpsertArgs>(args: SelectSubset<T, passwordResetTokenUpsertArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends passwordResetTokenCountArgs>(
      args?: Subset<T, passwordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends passwordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: passwordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: passwordResetTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, passwordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the passwordResetToken model
   */
  readonly fields: passwordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for passwordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__passwordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the passwordResetToken model
   */
  interface passwordResetTokenFieldRefs {
    readonly id: FieldRef<"passwordResetToken", 'String'>
    readonly token: FieldRef<"passwordResetToken", 'String'>
    readonly expiresAt: FieldRef<"passwordResetToken", 'DateTime'>
    readonly userId: FieldRef<"passwordResetToken", 'String'>
    readonly createdAt: FieldRef<"passwordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * passwordResetToken findUnique
   */
  export type passwordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which passwordResetToken to fetch.
     */
    where: passwordResetTokenWhereUniqueInput
  }

  /**
   * passwordResetToken findUniqueOrThrow
   */
  export type passwordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which passwordResetToken to fetch.
     */
    where: passwordResetTokenWhereUniqueInput
  }

  /**
   * passwordResetToken findFirst
   */
  export type passwordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which passwordResetToken to fetch.
     */
    where?: passwordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwordResetTokens to fetch.
     */
    orderBy?: passwordResetTokenOrderByWithRelationInput | passwordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passwordResetTokens.
     */
    cursor?: passwordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passwordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * passwordResetToken findFirstOrThrow
   */
  export type passwordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which passwordResetToken to fetch.
     */
    where?: passwordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwordResetTokens to fetch.
     */
    orderBy?: passwordResetTokenOrderByWithRelationInput | passwordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passwordResetTokens.
     */
    cursor?: passwordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passwordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * passwordResetToken findMany
   */
  export type passwordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which passwordResetTokens to fetch.
     */
    where?: passwordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwordResetTokens to fetch.
     */
    orderBy?: passwordResetTokenOrderByWithRelationInput | passwordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing passwordResetTokens.
     */
    cursor?: passwordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * passwordResetToken create
   */
  export type passwordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a passwordResetToken.
     */
    data: XOR<passwordResetTokenCreateInput, passwordResetTokenUncheckedCreateInput>
  }

  /**
   * passwordResetToken createMany
   */
  export type passwordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many passwordResetTokens.
     */
    data: passwordResetTokenCreateManyInput | passwordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * passwordResetToken createManyAndReturn
   */
  export type passwordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many passwordResetTokens.
     */
    data: passwordResetTokenCreateManyInput | passwordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * passwordResetToken update
   */
  export type passwordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a passwordResetToken.
     */
    data: XOR<passwordResetTokenUpdateInput, passwordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which passwordResetToken to update.
     */
    where: passwordResetTokenWhereUniqueInput
  }

  /**
   * passwordResetToken updateMany
   */
  export type passwordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update passwordResetTokens.
     */
    data: XOR<passwordResetTokenUpdateManyMutationInput, passwordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which passwordResetTokens to update
     */
    where?: passwordResetTokenWhereInput
    /**
     * Limit how many passwordResetTokens to update.
     */
    limit?: number
  }

  /**
   * passwordResetToken updateManyAndReturn
   */
  export type passwordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update passwordResetTokens.
     */
    data: XOR<passwordResetTokenUpdateManyMutationInput, passwordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which passwordResetTokens to update
     */
    where?: passwordResetTokenWhereInput
    /**
     * Limit how many passwordResetTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * passwordResetToken upsert
   */
  export type passwordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the passwordResetToken to update in case it exists.
     */
    where: passwordResetTokenWhereUniqueInput
    /**
     * In case the passwordResetToken found by the `where` argument doesn't exist, create a new passwordResetToken with this data.
     */
    create: XOR<passwordResetTokenCreateInput, passwordResetTokenUncheckedCreateInput>
    /**
     * In case the passwordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<passwordResetTokenUpdateInput, passwordResetTokenUncheckedUpdateInput>
  }

  /**
   * passwordResetToken delete
   */
  export type passwordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetTokenInclude<ExtArgs> | null
    /**
     * Filter which passwordResetToken to delete.
     */
    where: passwordResetTokenWhereUniqueInput
  }

  /**
   * passwordResetToken deleteMany
   */
  export type passwordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which passwordResetTokens to delete
     */
    where?: passwordResetTokenWhereInput
    /**
     * Limit how many passwordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * passwordResetToken without action
   */
  export type passwordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetTokenInclude<ExtArgs> | null
  }


  /**
   * Model TOdo
   */

  export type AggregateTOdo = {
    _count: TOdoCountAggregateOutputType | null
    _min: TOdoMinAggregateOutputType | null
    _max: TOdoMaxAggregateOutputType | null
  }

  export type TOdoMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    completed: boolean | null
    priority: $Enums.Priority | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TOdoMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    completed: boolean | null
    priority: $Enums.Priority | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TOdoCountAggregateOutputType = {
    id: number
    title: number
    description: number
    completed: number
    priority: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TOdoMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    completed?: true
    priority?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TOdoMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    completed?: true
    priority?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TOdoCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    completed?: true
    priority?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TOdoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TOdo to aggregate.
     */
    where?: TOdoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TOdos to fetch.
     */
    orderBy?: TOdoOrderByWithRelationInput | TOdoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TOdoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TOdos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TOdos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TOdos
    **/
    _count?: true | TOdoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TOdoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TOdoMaxAggregateInputType
  }

  export type GetTOdoAggregateType<T extends TOdoAggregateArgs> = {
        [P in keyof T & keyof AggregateTOdo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTOdo[P]>
      : GetScalarType<T[P], AggregateTOdo[P]>
  }




  export type TOdoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TOdoWhereInput
    orderBy?: TOdoOrderByWithAggregationInput | TOdoOrderByWithAggregationInput[]
    by: TOdoScalarFieldEnum[] | TOdoScalarFieldEnum
    having?: TOdoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TOdoCountAggregateInputType | true
    _min?: TOdoMinAggregateInputType
    _max?: TOdoMaxAggregateInputType
  }

  export type TOdoGroupByOutputType = {
    id: string
    title: string
    description: string | null
    completed: boolean
    priority: $Enums.Priority
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: TOdoCountAggregateOutputType | null
    _min: TOdoMinAggregateOutputType | null
    _max: TOdoMaxAggregateOutputType | null
  }

  type GetTOdoGroupByPayload<T extends TOdoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TOdoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TOdoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TOdoGroupByOutputType[P]>
            : GetScalarType<T[P], TOdoGroupByOutputType[P]>
        }
      >
    >


  export type TOdoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    priority?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tOdo"]>

  export type TOdoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    priority?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tOdo"]>

  export type TOdoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    priority?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tOdo"]>

  export type TOdoSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    priority?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TOdoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "completed" | "priority" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["tOdo"]>
  export type TOdoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TOdoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TOdoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TOdoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TOdo"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      completed: boolean
      priority: $Enums.Priority
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tOdo"]>
    composites: {}
  }

  type TOdoGetPayload<S extends boolean | null | undefined | TOdoDefaultArgs> = $Result.GetResult<Prisma.$TOdoPayload, S>

  type TOdoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TOdoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TOdoCountAggregateInputType | true
    }

  export interface TOdoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TOdo'], meta: { name: 'TOdo' } }
    /**
     * Find zero or one TOdo that matches the filter.
     * @param {TOdoFindUniqueArgs} args - Arguments to find a TOdo
     * @example
     * // Get one TOdo
     * const tOdo = await prisma.tOdo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TOdoFindUniqueArgs>(args: SelectSubset<T, TOdoFindUniqueArgs<ExtArgs>>): Prisma__TOdoClient<$Result.GetResult<Prisma.$TOdoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TOdo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TOdoFindUniqueOrThrowArgs} args - Arguments to find a TOdo
     * @example
     * // Get one TOdo
     * const tOdo = await prisma.tOdo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TOdoFindUniqueOrThrowArgs>(args: SelectSubset<T, TOdoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TOdoClient<$Result.GetResult<Prisma.$TOdoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TOdo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TOdoFindFirstArgs} args - Arguments to find a TOdo
     * @example
     * // Get one TOdo
     * const tOdo = await prisma.tOdo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TOdoFindFirstArgs>(args?: SelectSubset<T, TOdoFindFirstArgs<ExtArgs>>): Prisma__TOdoClient<$Result.GetResult<Prisma.$TOdoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TOdo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TOdoFindFirstOrThrowArgs} args - Arguments to find a TOdo
     * @example
     * // Get one TOdo
     * const tOdo = await prisma.tOdo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TOdoFindFirstOrThrowArgs>(args?: SelectSubset<T, TOdoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TOdoClient<$Result.GetResult<Prisma.$TOdoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TOdos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TOdoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TOdos
     * const tOdos = await prisma.tOdo.findMany()
     * 
     * // Get first 10 TOdos
     * const tOdos = await prisma.tOdo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tOdoWithIdOnly = await prisma.tOdo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TOdoFindManyArgs>(args?: SelectSubset<T, TOdoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TOdoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TOdo.
     * @param {TOdoCreateArgs} args - Arguments to create a TOdo.
     * @example
     * // Create one TOdo
     * const TOdo = await prisma.tOdo.create({
     *   data: {
     *     // ... data to create a TOdo
     *   }
     * })
     * 
     */
    create<T extends TOdoCreateArgs>(args: SelectSubset<T, TOdoCreateArgs<ExtArgs>>): Prisma__TOdoClient<$Result.GetResult<Prisma.$TOdoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TOdos.
     * @param {TOdoCreateManyArgs} args - Arguments to create many TOdos.
     * @example
     * // Create many TOdos
     * const tOdo = await prisma.tOdo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TOdoCreateManyArgs>(args?: SelectSubset<T, TOdoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TOdos and returns the data saved in the database.
     * @param {TOdoCreateManyAndReturnArgs} args - Arguments to create many TOdos.
     * @example
     * // Create many TOdos
     * const tOdo = await prisma.tOdo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TOdos and only return the `id`
     * const tOdoWithIdOnly = await prisma.tOdo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TOdoCreateManyAndReturnArgs>(args?: SelectSubset<T, TOdoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TOdoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TOdo.
     * @param {TOdoDeleteArgs} args - Arguments to delete one TOdo.
     * @example
     * // Delete one TOdo
     * const TOdo = await prisma.tOdo.delete({
     *   where: {
     *     // ... filter to delete one TOdo
     *   }
     * })
     * 
     */
    delete<T extends TOdoDeleteArgs>(args: SelectSubset<T, TOdoDeleteArgs<ExtArgs>>): Prisma__TOdoClient<$Result.GetResult<Prisma.$TOdoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TOdo.
     * @param {TOdoUpdateArgs} args - Arguments to update one TOdo.
     * @example
     * // Update one TOdo
     * const tOdo = await prisma.tOdo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TOdoUpdateArgs>(args: SelectSubset<T, TOdoUpdateArgs<ExtArgs>>): Prisma__TOdoClient<$Result.GetResult<Prisma.$TOdoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TOdos.
     * @param {TOdoDeleteManyArgs} args - Arguments to filter TOdos to delete.
     * @example
     * // Delete a few TOdos
     * const { count } = await prisma.tOdo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TOdoDeleteManyArgs>(args?: SelectSubset<T, TOdoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TOdos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TOdoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TOdos
     * const tOdo = await prisma.tOdo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TOdoUpdateManyArgs>(args: SelectSubset<T, TOdoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TOdos and returns the data updated in the database.
     * @param {TOdoUpdateManyAndReturnArgs} args - Arguments to update many TOdos.
     * @example
     * // Update many TOdos
     * const tOdo = await prisma.tOdo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TOdos and only return the `id`
     * const tOdoWithIdOnly = await prisma.tOdo.updateManyAndReturn({
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
    updateManyAndReturn<T extends TOdoUpdateManyAndReturnArgs>(args: SelectSubset<T, TOdoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TOdoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TOdo.
     * @param {TOdoUpsertArgs} args - Arguments to update or create a TOdo.
     * @example
     * // Update or create a TOdo
     * const tOdo = await prisma.tOdo.upsert({
     *   create: {
     *     // ... data to create a TOdo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TOdo we want to update
     *   }
     * })
     */
    upsert<T extends TOdoUpsertArgs>(args: SelectSubset<T, TOdoUpsertArgs<ExtArgs>>): Prisma__TOdoClient<$Result.GetResult<Prisma.$TOdoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TOdos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TOdoCountArgs} args - Arguments to filter TOdos to count.
     * @example
     * // Count the number of TOdos
     * const count = await prisma.tOdo.count({
     *   where: {
     *     // ... the filter for the TOdos we want to count
     *   }
     * })
    **/
    count<T extends TOdoCountArgs>(
      args?: Subset<T, TOdoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TOdoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TOdo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TOdoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TOdoAggregateArgs>(args: Subset<T, TOdoAggregateArgs>): Prisma.PrismaPromise<GetTOdoAggregateType<T>>

    /**
     * Group by TOdo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TOdoGroupByArgs} args - Group by arguments.
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
      T extends TOdoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TOdoGroupByArgs['orderBy'] }
        : { orderBy?: TOdoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TOdoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTOdoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TOdo model
   */
  readonly fields: TOdoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TOdo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TOdoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TOdo model
   */
  interface TOdoFieldRefs {
    readonly id: FieldRef<"TOdo", 'String'>
    readonly title: FieldRef<"TOdo", 'String'>
    readonly description: FieldRef<"TOdo", 'String'>
    readonly completed: FieldRef<"TOdo", 'Boolean'>
    readonly priority: FieldRef<"TOdo", 'Priority'>
    readonly userId: FieldRef<"TOdo", 'String'>
    readonly createdAt: FieldRef<"TOdo", 'DateTime'>
    readonly updatedAt: FieldRef<"TOdo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TOdo findUnique
   */
  export type TOdoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TOdo
     */
    select?: TOdoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TOdo
     */
    omit?: TOdoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TOdoInclude<ExtArgs> | null
    /**
     * Filter, which TOdo to fetch.
     */
    where: TOdoWhereUniqueInput
  }

  /**
   * TOdo findUniqueOrThrow
   */
  export type TOdoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TOdo
     */
    select?: TOdoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TOdo
     */
    omit?: TOdoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TOdoInclude<ExtArgs> | null
    /**
     * Filter, which TOdo to fetch.
     */
    where: TOdoWhereUniqueInput
  }

  /**
   * TOdo findFirst
   */
  export type TOdoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TOdo
     */
    select?: TOdoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TOdo
     */
    omit?: TOdoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TOdoInclude<ExtArgs> | null
    /**
     * Filter, which TOdo to fetch.
     */
    where?: TOdoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TOdos to fetch.
     */
    orderBy?: TOdoOrderByWithRelationInput | TOdoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TOdos.
     */
    cursor?: TOdoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TOdos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TOdos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TOdos.
     */
    distinct?: TOdoScalarFieldEnum | TOdoScalarFieldEnum[]
  }

  /**
   * TOdo findFirstOrThrow
   */
  export type TOdoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TOdo
     */
    select?: TOdoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TOdo
     */
    omit?: TOdoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TOdoInclude<ExtArgs> | null
    /**
     * Filter, which TOdo to fetch.
     */
    where?: TOdoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TOdos to fetch.
     */
    orderBy?: TOdoOrderByWithRelationInput | TOdoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TOdos.
     */
    cursor?: TOdoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TOdos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TOdos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TOdos.
     */
    distinct?: TOdoScalarFieldEnum | TOdoScalarFieldEnum[]
  }

  /**
   * TOdo findMany
   */
  export type TOdoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TOdo
     */
    select?: TOdoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TOdo
     */
    omit?: TOdoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TOdoInclude<ExtArgs> | null
    /**
     * Filter, which TOdos to fetch.
     */
    where?: TOdoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TOdos to fetch.
     */
    orderBy?: TOdoOrderByWithRelationInput | TOdoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TOdos.
     */
    cursor?: TOdoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TOdos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TOdos.
     */
    skip?: number
    distinct?: TOdoScalarFieldEnum | TOdoScalarFieldEnum[]
  }

  /**
   * TOdo create
   */
  export type TOdoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TOdo
     */
    select?: TOdoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TOdo
     */
    omit?: TOdoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TOdoInclude<ExtArgs> | null
    /**
     * The data needed to create a TOdo.
     */
    data: XOR<TOdoCreateInput, TOdoUncheckedCreateInput>
  }

  /**
   * TOdo createMany
   */
  export type TOdoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TOdos.
     */
    data: TOdoCreateManyInput | TOdoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TOdo createManyAndReturn
   */
  export type TOdoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TOdo
     */
    select?: TOdoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TOdo
     */
    omit?: TOdoOmit<ExtArgs> | null
    /**
     * The data used to create many TOdos.
     */
    data: TOdoCreateManyInput | TOdoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TOdoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TOdo update
   */
  export type TOdoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TOdo
     */
    select?: TOdoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TOdo
     */
    omit?: TOdoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TOdoInclude<ExtArgs> | null
    /**
     * The data needed to update a TOdo.
     */
    data: XOR<TOdoUpdateInput, TOdoUncheckedUpdateInput>
    /**
     * Choose, which TOdo to update.
     */
    where: TOdoWhereUniqueInput
  }

  /**
   * TOdo updateMany
   */
  export type TOdoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TOdos.
     */
    data: XOR<TOdoUpdateManyMutationInput, TOdoUncheckedUpdateManyInput>
    /**
     * Filter which TOdos to update
     */
    where?: TOdoWhereInput
    /**
     * Limit how many TOdos to update.
     */
    limit?: number
  }

  /**
   * TOdo updateManyAndReturn
   */
  export type TOdoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TOdo
     */
    select?: TOdoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TOdo
     */
    omit?: TOdoOmit<ExtArgs> | null
    /**
     * The data used to update TOdos.
     */
    data: XOR<TOdoUpdateManyMutationInput, TOdoUncheckedUpdateManyInput>
    /**
     * Filter which TOdos to update
     */
    where?: TOdoWhereInput
    /**
     * Limit how many TOdos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TOdoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TOdo upsert
   */
  export type TOdoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TOdo
     */
    select?: TOdoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TOdo
     */
    omit?: TOdoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TOdoInclude<ExtArgs> | null
    /**
     * The filter to search for the TOdo to update in case it exists.
     */
    where: TOdoWhereUniqueInput
    /**
     * In case the TOdo found by the `where` argument doesn't exist, create a new TOdo with this data.
     */
    create: XOR<TOdoCreateInput, TOdoUncheckedCreateInput>
    /**
     * In case the TOdo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TOdoUpdateInput, TOdoUncheckedUpdateInput>
  }

  /**
   * TOdo delete
   */
  export type TOdoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TOdo
     */
    select?: TOdoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TOdo
     */
    omit?: TOdoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TOdoInclude<ExtArgs> | null
    /**
     * Filter which TOdo to delete.
     */
    where: TOdoWhereUniqueInput
  }

  /**
   * TOdo deleteMany
   */
  export type TOdoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TOdos to delete
     */
    where?: TOdoWhereInput
    /**
     * Limit how many TOdos to delete.
     */
    limit?: number
  }

  /**
   * TOdo without action
   */
  export type TOdoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TOdo
     */
    select?: TOdoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TOdo
     */
    omit?: TOdoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TOdoInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    isEmailVerified: 'isEmailVerified',
    Provider: 'Provider',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiresAt: 'expiresAt',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const RefrEshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiresAt: 'expiresAt',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type RefrEshTokenScalarFieldEnum = (typeof RefrEshTokenScalarFieldEnum)[keyof typeof RefrEshTokenScalarFieldEnum]


  export const OauthacountScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type OauthacountScalarFieldEnum = (typeof OauthacountScalarFieldEnum)[keyof typeof OauthacountScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiresAt: 'expiresAt',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const TOdoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    completed: 'completed',
    priority: 'priority',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TOdoScalarFieldEnum = (typeof TOdoScalarFieldEnum)[keyof typeof TOdoScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'AuthProvider[]'
   */
  export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    Provider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    verificationToken?: VerificationTokenListRelationFilter
    refreshToken?: RefrEshTokenListRelationFilter
    oauthacount?: OauthacountListRelationFilter
    passwordResetToken?: PasswordResetTokenListRelationFilter
    todos?: TOdoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    Provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificationToken?: verificationTokenOrderByRelationAggregateInput
    refreshToken?: RefrEshTokenOrderByRelationAggregateInput
    oauthacount?: OauthacountOrderByRelationAggregateInput
    passwordResetToken?: passwordResetTokenOrderByRelationAggregateInput
    todos?: TOdoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    Provider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    verificationToken?: VerificationTokenListRelationFilter
    refreshToken?: RefrEshTokenListRelationFilter
    oauthacount?: OauthacountListRelationFilter
    passwordResetToken?: PasswordResetTokenListRelationFilter
    todos?: TOdoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    Provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    Provider?: EnumAuthProviderWithAggregatesFilter<"User"> | $Enums.AuthProvider
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type verificationTokenWhereInput = {
    AND?: verificationTokenWhereInput | verificationTokenWhereInput[]
    OR?: verificationTokenWhereInput[]
    NOT?: verificationTokenWhereInput | verificationTokenWhereInput[]
    id?: StringFilter<"verificationToken"> | string
    token?: StringFilter<"verificationToken"> | string
    expiresAt?: DateTimeFilter<"verificationToken"> | Date | string
    userId?: StringFilter<"verificationToken"> | string
    createdAt?: DateTimeFilter<"verificationToken"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type verificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type verificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    userId?: string
    AND?: verificationTokenWhereInput | verificationTokenWhereInput[]
    OR?: verificationTokenWhereInput[]
    NOT?: verificationTokenWhereInput | verificationTokenWhereInput[]
    expiresAt?: DateTimeFilter<"verificationToken"> | Date | string
    createdAt?: DateTimeFilter<"verificationToken"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token" | "userId">

  export type verificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: verificationTokenCountOrderByAggregateInput
    _max?: verificationTokenMaxOrderByAggregateInput
    _min?: verificationTokenMinOrderByAggregateInput
  }

  export type verificationTokenScalarWhereWithAggregatesInput = {
    AND?: verificationTokenScalarWhereWithAggregatesInput | verificationTokenScalarWhereWithAggregatesInput[]
    OR?: verificationTokenScalarWhereWithAggregatesInput[]
    NOT?: verificationTokenScalarWhereWithAggregatesInput | verificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"verificationToken"> | string
    token?: StringWithAggregatesFilter<"verificationToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"verificationToken"> | Date | string
    userId?: StringWithAggregatesFilter<"verificationToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"verificationToken"> | Date | string
  }

  export type RefrEshTokenWhereInput = {
    AND?: RefrEshTokenWhereInput | RefrEshTokenWhereInput[]
    OR?: RefrEshTokenWhereInput[]
    NOT?: RefrEshTokenWhereInput | RefrEshTokenWhereInput[]
    id?: StringFilter<"RefrEshToken"> | string
    token?: StringFilter<"RefrEshToken"> | string
    expiresAt?: DateTimeFilter<"RefrEshToken"> | Date | string
    userId?: StringFilter<"RefrEshToken"> | string
    createdAt?: DateTimeFilter<"RefrEshToken"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefrEshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type RefrEshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefrEshTokenWhereInput | RefrEshTokenWhereInput[]
    OR?: RefrEshTokenWhereInput[]
    NOT?: RefrEshTokenWhereInput | RefrEshTokenWhereInput[]
    expiresAt?: DateTimeFilter<"RefrEshToken"> | Date | string
    userId?: StringFilter<"RefrEshToken"> | string
    createdAt?: DateTimeFilter<"RefrEshToken"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefrEshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: RefrEshTokenCountOrderByAggregateInput
    _max?: RefrEshTokenMaxOrderByAggregateInput
    _min?: RefrEshTokenMinOrderByAggregateInput
  }

  export type RefrEshTokenScalarWhereWithAggregatesInput = {
    AND?: RefrEshTokenScalarWhereWithAggregatesInput | RefrEshTokenScalarWhereWithAggregatesInput[]
    OR?: RefrEshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefrEshTokenScalarWhereWithAggregatesInput | RefrEshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefrEshToken"> | string
    token?: StringWithAggregatesFilter<"RefrEshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefrEshToken"> | Date | string
    userId?: StringWithAggregatesFilter<"RefrEshToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RefrEshToken"> | Date | string
  }

  export type OauthacountWhereInput = {
    AND?: OauthacountWhereInput | OauthacountWhereInput[]
    OR?: OauthacountWhereInput[]
    NOT?: OauthacountWhereInput | OauthacountWhereInput[]
    id?: StringFilter<"Oauthacount"> | string
    provider?: EnumAuthProviderFilter<"Oauthacount"> | $Enums.AuthProvider
    providerAccountId?: StringFilter<"Oauthacount"> | string
    userId?: StringFilter<"Oauthacount"> | string
    createdAt?: DateTimeFilter<"Oauthacount"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OauthacountOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type OauthacountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: OauthacountProviderProviderAccountIdCompoundUniqueInput
    AND?: OauthacountWhereInput | OauthacountWhereInput[]
    OR?: OauthacountWhereInput[]
    NOT?: OauthacountWhereInput | OauthacountWhereInput[]
    provider?: EnumAuthProviderFilter<"Oauthacount"> | $Enums.AuthProvider
    providerAccountId?: StringFilter<"Oauthacount"> | string
    userId?: StringFilter<"Oauthacount"> | string
    createdAt?: DateTimeFilter<"Oauthacount"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type OauthacountOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: OauthacountCountOrderByAggregateInput
    _max?: OauthacountMaxOrderByAggregateInput
    _min?: OauthacountMinOrderByAggregateInput
  }

  export type OauthacountScalarWhereWithAggregatesInput = {
    AND?: OauthacountScalarWhereWithAggregatesInput | OauthacountScalarWhereWithAggregatesInput[]
    OR?: OauthacountScalarWhereWithAggregatesInput[]
    NOT?: OauthacountScalarWhereWithAggregatesInput | OauthacountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Oauthacount"> | string
    provider?: EnumAuthProviderWithAggregatesFilter<"Oauthacount"> | $Enums.AuthProvider
    providerAccountId?: StringWithAggregatesFilter<"Oauthacount"> | string
    userId?: StringWithAggregatesFilter<"Oauthacount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Oauthacount"> | Date | string
  }

  export type passwordResetTokenWhereInput = {
    AND?: passwordResetTokenWhereInput | passwordResetTokenWhereInput[]
    OR?: passwordResetTokenWhereInput[]
    NOT?: passwordResetTokenWhereInput | passwordResetTokenWhereInput[]
    id?: StringFilter<"passwordResetToken"> | string
    token?: StringFilter<"passwordResetToken"> | string
    expiresAt?: DateTimeFilter<"passwordResetToken"> | Date | string
    userId?: StringFilter<"passwordResetToken"> | string
    createdAt?: DateTimeFilter<"passwordResetToken"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type passwordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type passwordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: passwordResetTokenWhereInput | passwordResetTokenWhereInput[]
    OR?: passwordResetTokenWhereInput[]
    NOT?: passwordResetTokenWhereInput | passwordResetTokenWhereInput[]
    expiresAt?: DateTimeFilter<"passwordResetToken"> | Date | string
    userId?: StringFilter<"passwordResetToken"> | string
    createdAt?: DateTimeFilter<"passwordResetToken"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type passwordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: passwordResetTokenCountOrderByAggregateInput
    _max?: passwordResetTokenMaxOrderByAggregateInput
    _min?: passwordResetTokenMinOrderByAggregateInput
  }

  export type passwordResetTokenScalarWhereWithAggregatesInput = {
    AND?: passwordResetTokenScalarWhereWithAggregatesInput | passwordResetTokenScalarWhereWithAggregatesInput[]
    OR?: passwordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: passwordResetTokenScalarWhereWithAggregatesInput | passwordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"passwordResetToken"> | string
    token?: StringWithAggregatesFilter<"passwordResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"passwordResetToken"> | Date | string
    userId?: StringWithAggregatesFilter<"passwordResetToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"passwordResetToken"> | Date | string
  }

  export type TOdoWhereInput = {
    AND?: TOdoWhereInput | TOdoWhereInput[]
    OR?: TOdoWhereInput[]
    NOT?: TOdoWhereInput | TOdoWhereInput[]
    id?: StringFilter<"TOdo"> | string
    title?: StringFilter<"TOdo"> | string
    description?: StringNullableFilter<"TOdo"> | string | null
    completed?: BoolFilter<"TOdo"> | boolean
    priority?: EnumPriorityFilter<"TOdo"> | $Enums.Priority
    userId?: StringFilter<"TOdo"> | string
    createdAt?: DateTimeFilter<"TOdo"> | Date | string
    updatedAt?: DateTimeFilter<"TOdo"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TOdoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    completed?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type TOdoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TOdoWhereInput | TOdoWhereInput[]
    OR?: TOdoWhereInput[]
    NOT?: TOdoWhereInput | TOdoWhereInput[]
    title?: StringFilter<"TOdo"> | string
    description?: StringNullableFilter<"TOdo"> | string | null
    completed?: BoolFilter<"TOdo"> | boolean
    priority?: EnumPriorityFilter<"TOdo"> | $Enums.Priority
    userId?: StringFilter<"TOdo"> | string
    createdAt?: DateTimeFilter<"TOdo"> | Date | string
    updatedAt?: DateTimeFilter<"TOdo"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TOdoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    completed?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TOdoCountOrderByAggregateInput
    _max?: TOdoMaxOrderByAggregateInput
    _min?: TOdoMinOrderByAggregateInput
  }

  export type TOdoScalarWhereWithAggregatesInput = {
    AND?: TOdoScalarWhereWithAggregatesInput | TOdoScalarWhereWithAggregatesInput[]
    OR?: TOdoScalarWhereWithAggregatesInput[]
    NOT?: TOdoScalarWhereWithAggregatesInput | TOdoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TOdo"> | string
    title?: StringWithAggregatesFilter<"TOdo"> | string
    description?: StringNullableWithAggregatesFilter<"TOdo"> | string | null
    completed?: BoolWithAggregatesFilter<"TOdo"> | boolean
    priority?: EnumPriorityWithAggregatesFilter<"TOdo"> | $Enums.Priority
    userId?: StringWithAggregatesFilter<"TOdo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TOdo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TOdo"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    password: string
    isEmailVerified?: boolean
    Provider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: verificationTokenCreateNestedManyWithoutUserInput
    refreshToken?: RefrEshTokenCreateNestedManyWithoutUserInput
    oauthacount?: OauthacountCreateNestedManyWithoutUserInput
    passwordResetToken?: passwordResetTokenCreateNestedManyWithoutUserInput
    todos?: TOdoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    password: string
    isEmailVerified?: boolean
    Provider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: verificationTokenUncheckedCreateNestedManyWithoutUserInput
    refreshToken?: RefrEshTokenUncheckedCreateNestedManyWithoutUserInput
    oauthacount?: OauthacountUncheckedCreateNestedManyWithoutUserInput
    passwordResetToken?: passwordResetTokenUncheckedCreateNestedManyWithoutUserInput
    todos?: TOdoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: verificationTokenUpdateManyWithoutUserNestedInput
    refreshToken?: RefrEshTokenUpdateManyWithoutUserNestedInput
    oauthacount?: OauthacountUpdateManyWithoutUserNestedInput
    passwordResetToken?: passwordResetTokenUpdateManyWithoutUserNestedInput
    todos?: TOdoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: verificationTokenUncheckedUpdateManyWithoutUserNestedInput
    refreshToken?: RefrEshTokenUncheckedUpdateManyWithoutUserNestedInput
    oauthacount?: OauthacountUncheckedUpdateManyWithoutUserNestedInput
    passwordResetToken?: passwordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    todos?: TOdoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    password: string
    isEmailVerified?: boolean
    Provider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutVerificationTokenInput
  }

  export type verificationTokenUncheckedCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }

  export type verificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutVerificationTokenNestedInput
  }

  export type verificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationTokenCreateManyInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }

  export type verificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefrEshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefrEshTokenUncheckedCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }

  export type RefrEshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutRefreshTokenNestedInput
  }

  export type RefrEshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefrEshTokenCreateManyInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }

  export type RefrEshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefrEshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OauthacountCreateInput = {
    id?: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutOauthacountInput
  }

  export type OauthacountUncheckedCreateInput = {
    id?: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    userId: string
    createdAt?: Date | string
  }

  export type OauthacountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutOauthacountNestedInput
  }

  export type OauthacountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OauthacountCreateManyInput = {
    id?: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    userId: string
    createdAt?: Date | string
  }

  export type OauthacountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OauthacountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordResetTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutPasswordResetTokenInput
  }

  export type passwordResetTokenUncheckedCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }

  export type passwordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput
  }

  export type passwordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordResetTokenCreateManyInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }

  export type passwordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TOdoCreateInput = {
    id?: string
    title: string
    description?: string | null
    completed?: boolean
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutTodosInput
  }

  export type TOdoUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    completed?: boolean
    priority?: $Enums.Priority
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TOdoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutTodosNestedInput
  }

  export type TOdoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TOdoCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    completed?: boolean
    priority?: $Enums.Priority
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TOdoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TOdoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
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

  export type VerificationTokenListRelationFilter = {
    every?: verificationTokenWhereInput
    some?: verificationTokenWhereInput
    none?: verificationTokenWhereInput
  }

  export type RefrEshTokenListRelationFilter = {
    every?: RefrEshTokenWhereInput
    some?: RefrEshTokenWhereInput
    none?: RefrEshTokenWhereInput
  }

  export type OauthacountListRelationFilter = {
    every?: OauthacountWhereInput
    some?: OauthacountWhereInput
    none?: OauthacountWhereInput
  }

  export type PasswordResetTokenListRelationFilter = {
    every?: passwordResetTokenWhereInput
    some?: passwordResetTokenWhereInput
    none?: passwordResetTokenWhereInput
  }

  export type TOdoListRelationFilter = {
    every?: TOdoWhereInput
    some?: TOdoWhereInput
    none?: TOdoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type verificationTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefrEshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OauthacountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type passwordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TOdoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    Provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    Provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    Provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type verificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type verificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type verificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RefrEshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RefrEshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RefrEshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type OauthacountProviderProviderAccountIdCompoundUniqueInput = {
    provider: $Enums.AuthProvider
    providerAccountId: string
  }

  export type OauthacountCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type OauthacountMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type OauthacountMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type passwordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type passwordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type passwordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type TOdoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TOdoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TOdoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type verificationTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<verificationTokenCreateWithoutUserInput, verificationTokenUncheckedCreateWithoutUserInput> | verificationTokenCreateWithoutUserInput[] | verificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: verificationTokenCreateOrConnectWithoutUserInput | verificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: verificationTokenCreateManyUserInputEnvelope
    connect?: verificationTokenWhereUniqueInput | verificationTokenWhereUniqueInput[]
  }

  export type RefrEshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefrEshTokenCreateWithoutUserInput, RefrEshTokenUncheckedCreateWithoutUserInput> | RefrEshTokenCreateWithoutUserInput[] | RefrEshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefrEshTokenCreateOrConnectWithoutUserInput | RefrEshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefrEshTokenCreateManyUserInputEnvelope
    connect?: RefrEshTokenWhereUniqueInput | RefrEshTokenWhereUniqueInput[]
  }

  export type OauthacountCreateNestedManyWithoutUserInput = {
    create?: XOR<OauthacountCreateWithoutUserInput, OauthacountUncheckedCreateWithoutUserInput> | OauthacountCreateWithoutUserInput[] | OauthacountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthacountCreateOrConnectWithoutUserInput | OauthacountCreateOrConnectWithoutUserInput[]
    createMany?: OauthacountCreateManyUserInputEnvelope
    connect?: OauthacountWhereUniqueInput | OauthacountWhereUniqueInput[]
  }

  export type passwordResetTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<passwordResetTokenCreateWithoutUserInput, passwordResetTokenUncheckedCreateWithoutUserInput> | passwordResetTokenCreateWithoutUserInput[] | passwordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: passwordResetTokenCreateOrConnectWithoutUserInput | passwordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: passwordResetTokenCreateManyUserInputEnvelope
    connect?: passwordResetTokenWhereUniqueInput | passwordResetTokenWhereUniqueInput[]
  }

  export type TOdoCreateNestedManyWithoutUserInput = {
    create?: XOR<TOdoCreateWithoutUserInput, TOdoUncheckedCreateWithoutUserInput> | TOdoCreateWithoutUserInput[] | TOdoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TOdoCreateOrConnectWithoutUserInput | TOdoCreateOrConnectWithoutUserInput[]
    createMany?: TOdoCreateManyUserInputEnvelope
    connect?: TOdoWhereUniqueInput | TOdoWhereUniqueInput[]
  }

  export type verificationTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<verificationTokenCreateWithoutUserInput, verificationTokenUncheckedCreateWithoutUserInput> | verificationTokenCreateWithoutUserInput[] | verificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: verificationTokenCreateOrConnectWithoutUserInput | verificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: verificationTokenCreateManyUserInputEnvelope
    connect?: verificationTokenWhereUniqueInput | verificationTokenWhereUniqueInput[]
  }

  export type RefrEshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefrEshTokenCreateWithoutUserInput, RefrEshTokenUncheckedCreateWithoutUserInput> | RefrEshTokenCreateWithoutUserInput[] | RefrEshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefrEshTokenCreateOrConnectWithoutUserInput | RefrEshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefrEshTokenCreateManyUserInputEnvelope
    connect?: RefrEshTokenWhereUniqueInput | RefrEshTokenWhereUniqueInput[]
  }

  export type OauthacountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OauthacountCreateWithoutUserInput, OauthacountUncheckedCreateWithoutUserInput> | OauthacountCreateWithoutUserInput[] | OauthacountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthacountCreateOrConnectWithoutUserInput | OauthacountCreateOrConnectWithoutUserInput[]
    createMany?: OauthacountCreateManyUserInputEnvelope
    connect?: OauthacountWhereUniqueInput | OauthacountWhereUniqueInput[]
  }

  export type passwordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<passwordResetTokenCreateWithoutUserInput, passwordResetTokenUncheckedCreateWithoutUserInput> | passwordResetTokenCreateWithoutUserInput[] | passwordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: passwordResetTokenCreateOrConnectWithoutUserInput | passwordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: passwordResetTokenCreateManyUserInputEnvelope
    connect?: passwordResetTokenWhereUniqueInput | passwordResetTokenWhereUniqueInput[]
  }

  export type TOdoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TOdoCreateWithoutUserInput, TOdoUncheckedCreateWithoutUserInput> | TOdoCreateWithoutUserInput[] | TOdoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TOdoCreateOrConnectWithoutUserInput | TOdoCreateOrConnectWithoutUserInput[]
    createMany?: TOdoCreateManyUserInputEnvelope
    connect?: TOdoWhereUniqueInput | TOdoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type verificationTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<verificationTokenCreateWithoutUserInput, verificationTokenUncheckedCreateWithoutUserInput> | verificationTokenCreateWithoutUserInput[] | verificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: verificationTokenCreateOrConnectWithoutUserInput | verificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: verificationTokenUpsertWithWhereUniqueWithoutUserInput | verificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: verificationTokenCreateManyUserInputEnvelope
    set?: verificationTokenWhereUniqueInput | verificationTokenWhereUniqueInput[]
    disconnect?: verificationTokenWhereUniqueInput | verificationTokenWhereUniqueInput[]
    delete?: verificationTokenWhereUniqueInput | verificationTokenWhereUniqueInput[]
    connect?: verificationTokenWhereUniqueInput | verificationTokenWhereUniqueInput[]
    update?: verificationTokenUpdateWithWhereUniqueWithoutUserInput | verificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: verificationTokenUpdateManyWithWhereWithoutUserInput | verificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: verificationTokenScalarWhereInput | verificationTokenScalarWhereInput[]
  }

  export type RefrEshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefrEshTokenCreateWithoutUserInput, RefrEshTokenUncheckedCreateWithoutUserInput> | RefrEshTokenCreateWithoutUserInput[] | RefrEshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefrEshTokenCreateOrConnectWithoutUserInput | RefrEshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefrEshTokenUpsertWithWhereUniqueWithoutUserInput | RefrEshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefrEshTokenCreateManyUserInputEnvelope
    set?: RefrEshTokenWhereUniqueInput | RefrEshTokenWhereUniqueInput[]
    disconnect?: RefrEshTokenWhereUniqueInput | RefrEshTokenWhereUniqueInput[]
    delete?: RefrEshTokenWhereUniqueInput | RefrEshTokenWhereUniqueInput[]
    connect?: RefrEshTokenWhereUniqueInput | RefrEshTokenWhereUniqueInput[]
    update?: RefrEshTokenUpdateWithWhereUniqueWithoutUserInput | RefrEshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefrEshTokenUpdateManyWithWhereWithoutUserInput | RefrEshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefrEshTokenScalarWhereInput | RefrEshTokenScalarWhereInput[]
  }

  export type OauthacountUpdateManyWithoutUserNestedInput = {
    create?: XOR<OauthacountCreateWithoutUserInput, OauthacountUncheckedCreateWithoutUserInput> | OauthacountCreateWithoutUserInput[] | OauthacountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthacountCreateOrConnectWithoutUserInput | OauthacountCreateOrConnectWithoutUserInput[]
    upsert?: OauthacountUpsertWithWhereUniqueWithoutUserInput | OauthacountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OauthacountCreateManyUserInputEnvelope
    set?: OauthacountWhereUniqueInput | OauthacountWhereUniqueInput[]
    disconnect?: OauthacountWhereUniqueInput | OauthacountWhereUniqueInput[]
    delete?: OauthacountWhereUniqueInput | OauthacountWhereUniqueInput[]
    connect?: OauthacountWhereUniqueInput | OauthacountWhereUniqueInput[]
    update?: OauthacountUpdateWithWhereUniqueWithoutUserInput | OauthacountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OauthacountUpdateManyWithWhereWithoutUserInput | OauthacountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OauthacountScalarWhereInput | OauthacountScalarWhereInput[]
  }

  export type passwordResetTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<passwordResetTokenCreateWithoutUserInput, passwordResetTokenUncheckedCreateWithoutUserInput> | passwordResetTokenCreateWithoutUserInput[] | passwordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: passwordResetTokenCreateOrConnectWithoutUserInput | passwordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: passwordResetTokenUpsertWithWhereUniqueWithoutUserInput | passwordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: passwordResetTokenCreateManyUserInputEnvelope
    set?: passwordResetTokenWhereUniqueInput | passwordResetTokenWhereUniqueInput[]
    disconnect?: passwordResetTokenWhereUniqueInput | passwordResetTokenWhereUniqueInput[]
    delete?: passwordResetTokenWhereUniqueInput | passwordResetTokenWhereUniqueInput[]
    connect?: passwordResetTokenWhereUniqueInput | passwordResetTokenWhereUniqueInput[]
    update?: passwordResetTokenUpdateWithWhereUniqueWithoutUserInput | passwordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: passwordResetTokenUpdateManyWithWhereWithoutUserInput | passwordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: passwordResetTokenScalarWhereInput | passwordResetTokenScalarWhereInput[]
  }

  export type TOdoUpdateManyWithoutUserNestedInput = {
    create?: XOR<TOdoCreateWithoutUserInput, TOdoUncheckedCreateWithoutUserInput> | TOdoCreateWithoutUserInput[] | TOdoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TOdoCreateOrConnectWithoutUserInput | TOdoCreateOrConnectWithoutUserInput[]
    upsert?: TOdoUpsertWithWhereUniqueWithoutUserInput | TOdoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TOdoCreateManyUserInputEnvelope
    set?: TOdoWhereUniqueInput | TOdoWhereUniqueInput[]
    disconnect?: TOdoWhereUniqueInput | TOdoWhereUniqueInput[]
    delete?: TOdoWhereUniqueInput | TOdoWhereUniqueInput[]
    connect?: TOdoWhereUniqueInput | TOdoWhereUniqueInput[]
    update?: TOdoUpdateWithWhereUniqueWithoutUserInput | TOdoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TOdoUpdateManyWithWhereWithoutUserInput | TOdoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TOdoScalarWhereInput | TOdoScalarWhereInput[]
  }

  export type verificationTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<verificationTokenCreateWithoutUserInput, verificationTokenUncheckedCreateWithoutUserInput> | verificationTokenCreateWithoutUserInput[] | verificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: verificationTokenCreateOrConnectWithoutUserInput | verificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: verificationTokenUpsertWithWhereUniqueWithoutUserInput | verificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: verificationTokenCreateManyUserInputEnvelope
    set?: verificationTokenWhereUniqueInput | verificationTokenWhereUniqueInput[]
    disconnect?: verificationTokenWhereUniqueInput | verificationTokenWhereUniqueInput[]
    delete?: verificationTokenWhereUniqueInput | verificationTokenWhereUniqueInput[]
    connect?: verificationTokenWhereUniqueInput | verificationTokenWhereUniqueInput[]
    update?: verificationTokenUpdateWithWhereUniqueWithoutUserInput | verificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: verificationTokenUpdateManyWithWhereWithoutUserInput | verificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: verificationTokenScalarWhereInput | verificationTokenScalarWhereInput[]
  }

  export type RefrEshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefrEshTokenCreateWithoutUserInput, RefrEshTokenUncheckedCreateWithoutUserInput> | RefrEshTokenCreateWithoutUserInput[] | RefrEshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefrEshTokenCreateOrConnectWithoutUserInput | RefrEshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefrEshTokenUpsertWithWhereUniqueWithoutUserInput | RefrEshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefrEshTokenCreateManyUserInputEnvelope
    set?: RefrEshTokenWhereUniqueInput | RefrEshTokenWhereUniqueInput[]
    disconnect?: RefrEshTokenWhereUniqueInput | RefrEshTokenWhereUniqueInput[]
    delete?: RefrEshTokenWhereUniqueInput | RefrEshTokenWhereUniqueInput[]
    connect?: RefrEshTokenWhereUniqueInput | RefrEshTokenWhereUniqueInput[]
    update?: RefrEshTokenUpdateWithWhereUniqueWithoutUserInput | RefrEshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefrEshTokenUpdateManyWithWhereWithoutUserInput | RefrEshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefrEshTokenScalarWhereInput | RefrEshTokenScalarWhereInput[]
  }

  export type OauthacountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OauthacountCreateWithoutUserInput, OauthacountUncheckedCreateWithoutUserInput> | OauthacountCreateWithoutUserInput[] | OauthacountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthacountCreateOrConnectWithoutUserInput | OauthacountCreateOrConnectWithoutUserInput[]
    upsert?: OauthacountUpsertWithWhereUniqueWithoutUserInput | OauthacountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OauthacountCreateManyUserInputEnvelope
    set?: OauthacountWhereUniqueInput | OauthacountWhereUniqueInput[]
    disconnect?: OauthacountWhereUniqueInput | OauthacountWhereUniqueInput[]
    delete?: OauthacountWhereUniqueInput | OauthacountWhereUniqueInput[]
    connect?: OauthacountWhereUniqueInput | OauthacountWhereUniqueInput[]
    update?: OauthacountUpdateWithWhereUniqueWithoutUserInput | OauthacountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OauthacountUpdateManyWithWhereWithoutUserInput | OauthacountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OauthacountScalarWhereInput | OauthacountScalarWhereInput[]
  }

  export type passwordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<passwordResetTokenCreateWithoutUserInput, passwordResetTokenUncheckedCreateWithoutUserInput> | passwordResetTokenCreateWithoutUserInput[] | passwordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: passwordResetTokenCreateOrConnectWithoutUserInput | passwordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: passwordResetTokenUpsertWithWhereUniqueWithoutUserInput | passwordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: passwordResetTokenCreateManyUserInputEnvelope
    set?: passwordResetTokenWhereUniqueInput | passwordResetTokenWhereUniqueInput[]
    disconnect?: passwordResetTokenWhereUniqueInput | passwordResetTokenWhereUniqueInput[]
    delete?: passwordResetTokenWhereUniqueInput | passwordResetTokenWhereUniqueInput[]
    connect?: passwordResetTokenWhereUniqueInput | passwordResetTokenWhereUniqueInput[]
    update?: passwordResetTokenUpdateWithWhereUniqueWithoutUserInput | passwordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: passwordResetTokenUpdateManyWithWhereWithoutUserInput | passwordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: passwordResetTokenScalarWhereInput | passwordResetTokenScalarWhereInput[]
  }

  export type TOdoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TOdoCreateWithoutUserInput, TOdoUncheckedCreateWithoutUserInput> | TOdoCreateWithoutUserInput[] | TOdoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TOdoCreateOrConnectWithoutUserInput | TOdoCreateOrConnectWithoutUserInput[]
    upsert?: TOdoUpsertWithWhereUniqueWithoutUserInput | TOdoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TOdoCreateManyUserInputEnvelope
    set?: TOdoWhereUniqueInput | TOdoWhereUniqueInput[]
    disconnect?: TOdoWhereUniqueInput | TOdoWhereUniqueInput[]
    delete?: TOdoWhereUniqueInput | TOdoWhereUniqueInput[]
    connect?: TOdoWhereUniqueInput | TOdoWhereUniqueInput[]
    update?: TOdoUpdateWithWhereUniqueWithoutUserInput | TOdoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TOdoUpdateManyWithWhereWithoutUserInput | TOdoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TOdoScalarWhereInput | TOdoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVerificationTokenInput = {
    create?: XOR<UserCreateWithoutVerificationTokenInput, UserUncheckedCreateWithoutVerificationTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVerificationTokenNestedInput = {
    create?: XOR<UserCreateWithoutVerificationTokenInput, UserUncheckedCreateWithoutVerificationTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationTokenInput
    upsert?: UserUpsertWithoutVerificationTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationTokenInput, UserUpdateWithoutVerificationTokenInput>, UserUncheckedUpdateWithoutVerificationTokenInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokenNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    upsert?: UserUpsertWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokenInput, UserUpdateWithoutRefreshTokenInput>, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type UserCreateNestedOneWithoutOauthacountInput = {
    create?: XOR<UserCreateWithoutOauthacountInput, UserUncheckedCreateWithoutOauthacountInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthacountInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOauthacountNestedInput = {
    create?: XOR<UserCreateWithoutOauthacountInput, UserUncheckedCreateWithoutOauthacountInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthacountInput
    upsert?: UserUpsertWithoutOauthacountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOauthacountInput, UserUpdateWithoutOauthacountInput>, UserUncheckedUpdateWithoutOauthacountInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetTokenInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokenInput
    upsert?: UserUpsertWithoutPasswordResetTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetTokenInput, UserUpdateWithoutPasswordResetTokenInput>, UserUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type UserCreateNestedOneWithoutTodosInput = {
    create?: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type UserUpdateOneRequiredWithoutTodosNestedInput = {
    create?: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput
    upsert?: UserUpsertWithoutTodosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTodosInput, UserUpdateWithoutTodosInput>, UserUncheckedUpdateWithoutTodosInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
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

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type verificationTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type verificationTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type verificationTokenCreateOrConnectWithoutUserInput = {
    where: verificationTokenWhereUniqueInput
    create: XOR<verificationTokenCreateWithoutUserInput, verificationTokenUncheckedCreateWithoutUserInput>
  }

  export type verificationTokenCreateManyUserInputEnvelope = {
    data: verificationTokenCreateManyUserInput | verificationTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefrEshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefrEshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefrEshTokenCreateOrConnectWithoutUserInput = {
    where: RefrEshTokenWhereUniqueInput
    create: XOR<RefrEshTokenCreateWithoutUserInput, RefrEshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefrEshTokenCreateManyUserInputEnvelope = {
    data: RefrEshTokenCreateManyUserInput | RefrEshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OauthacountCreateWithoutUserInput = {
    id?: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    createdAt?: Date | string
  }

  export type OauthacountUncheckedCreateWithoutUserInput = {
    id?: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    createdAt?: Date | string
  }

  export type OauthacountCreateOrConnectWithoutUserInput = {
    where: OauthacountWhereUniqueInput
    create: XOR<OauthacountCreateWithoutUserInput, OauthacountUncheckedCreateWithoutUserInput>
  }

  export type OauthacountCreateManyUserInputEnvelope = {
    data: OauthacountCreateManyUserInput | OauthacountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type passwordResetTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type passwordResetTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type passwordResetTokenCreateOrConnectWithoutUserInput = {
    where: passwordResetTokenWhereUniqueInput
    create: XOR<passwordResetTokenCreateWithoutUserInput, passwordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type passwordResetTokenCreateManyUserInputEnvelope = {
    data: passwordResetTokenCreateManyUserInput | passwordResetTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TOdoCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    completed?: boolean
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TOdoUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    completed?: boolean
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TOdoCreateOrConnectWithoutUserInput = {
    where: TOdoWhereUniqueInput
    create: XOR<TOdoCreateWithoutUserInput, TOdoUncheckedCreateWithoutUserInput>
  }

  export type TOdoCreateManyUserInputEnvelope = {
    data: TOdoCreateManyUserInput | TOdoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type verificationTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: verificationTokenWhereUniqueInput
    update: XOR<verificationTokenUpdateWithoutUserInput, verificationTokenUncheckedUpdateWithoutUserInput>
    create: XOR<verificationTokenCreateWithoutUserInput, verificationTokenUncheckedCreateWithoutUserInput>
  }

  export type verificationTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: verificationTokenWhereUniqueInput
    data: XOR<verificationTokenUpdateWithoutUserInput, verificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type verificationTokenUpdateManyWithWhereWithoutUserInput = {
    where: verificationTokenScalarWhereInput
    data: XOR<verificationTokenUpdateManyMutationInput, verificationTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type verificationTokenScalarWhereInput = {
    AND?: verificationTokenScalarWhereInput | verificationTokenScalarWhereInput[]
    OR?: verificationTokenScalarWhereInput[]
    NOT?: verificationTokenScalarWhereInput | verificationTokenScalarWhereInput[]
    id?: StringFilter<"verificationToken"> | string
    token?: StringFilter<"verificationToken"> | string
    expiresAt?: DateTimeFilter<"verificationToken"> | Date | string
    userId?: StringFilter<"verificationToken"> | string
    createdAt?: DateTimeFilter<"verificationToken"> | Date | string
  }

  export type RefrEshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefrEshTokenWhereUniqueInput
    update: XOR<RefrEshTokenUpdateWithoutUserInput, RefrEshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefrEshTokenCreateWithoutUserInput, RefrEshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefrEshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefrEshTokenWhereUniqueInput
    data: XOR<RefrEshTokenUpdateWithoutUserInput, RefrEshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefrEshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefrEshTokenScalarWhereInput
    data: XOR<RefrEshTokenUpdateManyMutationInput, RefrEshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefrEshTokenScalarWhereInput = {
    AND?: RefrEshTokenScalarWhereInput | RefrEshTokenScalarWhereInput[]
    OR?: RefrEshTokenScalarWhereInput[]
    NOT?: RefrEshTokenScalarWhereInput | RefrEshTokenScalarWhereInput[]
    id?: StringFilter<"RefrEshToken"> | string
    token?: StringFilter<"RefrEshToken"> | string
    expiresAt?: DateTimeFilter<"RefrEshToken"> | Date | string
    userId?: StringFilter<"RefrEshToken"> | string
    createdAt?: DateTimeFilter<"RefrEshToken"> | Date | string
  }

  export type OauthacountUpsertWithWhereUniqueWithoutUserInput = {
    where: OauthacountWhereUniqueInput
    update: XOR<OauthacountUpdateWithoutUserInput, OauthacountUncheckedUpdateWithoutUserInput>
    create: XOR<OauthacountCreateWithoutUserInput, OauthacountUncheckedCreateWithoutUserInput>
  }

  export type OauthacountUpdateWithWhereUniqueWithoutUserInput = {
    where: OauthacountWhereUniqueInput
    data: XOR<OauthacountUpdateWithoutUserInput, OauthacountUncheckedUpdateWithoutUserInput>
  }

  export type OauthacountUpdateManyWithWhereWithoutUserInput = {
    where: OauthacountScalarWhereInput
    data: XOR<OauthacountUpdateManyMutationInput, OauthacountUncheckedUpdateManyWithoutUserInput>
  }

  export type OauthacountScalarWhereInput = {
    AND?: OauthacountScalarWhereInput | OauthacountScalarWhereInput[]
    OR?: OauthacountScalarWhereInput[]
    NOT?: OauthacountScalarWhereInput | OauthacountScalarWhereInput[]
    id?: StringFilter<"Oauthacount"> | string
    provider?: EnumAuthProviderFilter<"Oauthacount"> | $Enums.AuthProvider
    providerAccountId?: StringFilter<"Oauthacount"> | string
    userId?: StringFilter<"Oauthacount"> | string
    createdAt?: DateTimeFilter<"Oauthacount"> | Date | string
  }

  export type passwordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: passwordResetTokenWhereUniqueInput
    update: XOR<passwordResetTokenUpdateWithoutUserInput, passwordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<passwordResetTokenCreateWithoutUserInput, passwordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type passwordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: passwordResetTokenWhereUniqueInput
    data: XOR<passwordResetTokenUpdateWithoutUserInput, passwordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type passwordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: passwordResetTokenScalarWhereInput
    data: XOR<passwordResetTokenUpdateManyMutationInput, passwordResetTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type passwordResetTokenScalarWhereInput = {
    AND?: passwordResetTokenScalarWhereInput | passwordResetTokenScalarWhereInput[]
    OR?: passwordResetTokenScalarWhereInput[]
    NOT?: passwordResetTokenScalarWhereInput | passwordResetTokenScalarWhereInput[]
    id?: StringFilter<"passwordResetToken"> | string
    token?: StringFilter<"passwordResetToken"> | string
    expiresAt?: DateTimeFilter<"passwordResetToken"> | Date | string
    userId?: StringFilter<"passwordResetToken"> | string
    createdAt?: DateTimeFilter<"passwordResetToken"> | Date | string
  }

  export type TOdoUpsertWithWhereUniqueWithoutUserInput = {
    where: TOdoWhereUniqueInput
    update: XOR<TOdoUpdateWithoutUserInput, TOdoUncheckedUpdateWithoutUserInput>
    create: XOR<TOdoCreateWithoutUserInput, TOdoUncheckedCreateWithoutUserInput>
  }

  export type TOdoUpdateWithWhereUniqueWithoutUserInput = {
    where: TOdoWhereUniqueInput
    data: XOR<TOdoUpdateWithoutUserInput, TOdoUncheckedUpdateWithoutUserInput>
  }

  export type TOdoUpdateManyWithWhereWithoutUserInput = {
    where: TOdoScalarWhereInput
    data: XOR<TOdoUpdateManyMutationInput, TOdoUncheckedUpdateManyWithoutUserInput>
  }

  export type TOdoScalarWhereInput = {
    AND?: TOdoScalarWhereInput | TOdoScalarWhereInput[]
    OR?: TOdoScalarWhereInput[]
    NOT?: TOdoScalarWhereInput | TOdoScalarWhereInput[]
    id?: StringFilter<"TOdo"> | string
    title?: StringFilter<"TOdo"> | string
    description?: StringNullableFilter<"TOdo"> | string | null
    completed?: BoolFilter<"TOdo"> | boolean
    priority?: EnumPriorityFilter<"TOdo"> | $Enums.Priority
    userId?: StringFilter<"TOdo"> | string
    createdAt?: DateTimeFilter<"TOdo"> | Date | string
    updatedAt?: DateTimeFilter<"TOdo"> | Date | string
  }

  export type UserCreateWithoutVerificationTokenInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    password: string
    isEmailVerified?: boolean
    Provider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefrEshTokenCreateNestedManyWithoutUserInput
    oauthacount?: OauthacountCreateNestedManyWithoutUserInput
    passwordResetToken?: passwordResetTokenCreateNestedManyWithoutUserInput
    todos?: TOdoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerificationTokenInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    password: string
    isEmailVerified?: boolean
    Provider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefrEshTokenUncheckedCreateNestedManyWithoutUserInput
    oauthacount?: OauthacountUncheckedCreateNestedManyWithoutUserInput
    passwordResetToken?: passwordResetTokenUncheckedCreateNestedManyWithoutUserInput
    todos?: TOdoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerificationTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationTokenInput, UserUncheckedCreateWithoutVerificationTokenInput>
  }

  export type UserUpsertWithoutVerificationTokenInput = {
    update: XOR<UserUpdateWithoutVerificationTokenInput, UserUncheckedUpdateWithoutVerificationTokenInput>
    create: XOR<UserCreateWithoutVerificationTokenInput, UserUncheckedCreateWithoutVerificationTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationTokenInput, UserUncheckedUpdateWithoutVerificationTokenInput>
  }

  export type UserUpdateWithoutVerificationTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefrEshTokenUpdateManyWithoutUserNestedInput
    oauthacount?: OauthacountUpdateManyWithoutUserNestedInput
    passwordResetToken?: passwordResetTokenUpdateManyWithoutUserNestedInput
    todos?: TOdoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefrEshTokenUncheckedUpdateManyWithoutUserNestedInput
    oauthacount?: OauthacountUncheckedUpdateManyWithoutUserNestedInput
    passwordResetToken?: passwordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    todos?: TOdoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRefreshTokenInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    password: string
    isEmailVerified?: boolean
    Provider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: verificationTokenCreateNestedManyWithoutUserInput
    oauthacount?: OauthacountCreateNestedManyWithoutUserInput
    passwordResetToken?: passwordResetTokenCreateNestedManyWithoutUserInput
    todos?: TOdoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokenInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    password: string
    isEmailVerified?: boolean
    Provider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: verificationTokenUncheckedCreateNestedManyWithoutUserInput
    oauthacount?: OauthacountUncheckedCreateNestedManyWithoutUserInput
    passwordResetToken?: passwordResetTokenUncheckedCreateNestedManyWithoutUserInput
    todos?: TOdoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
  }

  export type UserUpsertWithoutRefreshTokenInput = {
    update: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type UserUpdateWithoutRefreshTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: verificationTokenUpdateManyWithoutUserNestedInput
    oauthacount?: OauthacountUpdateManyWithoutUserNestedInput
    passwordResetToken?: passwordResetTokenUpdateManyWithoutUserNestedInput
    todos?: TOdoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: verificationTokenUncheckedUpdateManyWithoutUserNestedInput
    oauthacount?: OauthacountUncheckedUpdateManyWithoutUserNestedInput
    passwordResetToken?: passwordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    todos?: TOdoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOauthacountInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    password: string
    isEmailVerified?: boolean
    Provider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: verificationTokenCreateNestedManyWithoutUserInput
    refreshToken?: RefrEshTokenCreateNestedManyWithoutUserInput
    passwordResetToken?: passwordResetTokenCreateNestedManyWithoutUserInput
    todos?: TOdoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOauthacountInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    password: string
    isEmailVerified?: boolean
    Provider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: verificationTokenUncheckedCreateNestedManyWithoutUserInput
    refreshToken?: RefrEshTokenUncheckedCreateNestedManyWithoutUserInput
    passwordResetToken?: passwordResetTokenUncheckedCreateNestedManyWithoutUserInput
    todos?: TOdoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOauthacountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOauthacountInput, UserUncheckedCreateWithoutOauthacountInput>
  }

  export type UserUpsertWithoutOauthacountInput = {
    update: XOR<UserUpdateWithoutOauthacountInput, UserUncheckedUpdateWithoutOauthacountInput>
    create: XOR<UserCreateWithoutOauthacountInput, UserUncheckedCreateWithoutOauthacountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOauthacountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOauthacountInput, UserUncheckedUpdateWithoutOauthacountInput>
  }

  export type UserUpdateWithoutOauthacountInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: verificationTokenUpdateManyWithoutUserNestedInput
    refreshToken?: RefrEshTokenUpdateManyWithoutUserNestedInput
    passwordResetToken?: passwordResetTokenUpdateManyWithoutUserNestedInput
    todos?: TOdoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOauthacountInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: verificationTokenUncheckedUpdateManyWithoutUserNestedInput
    refreshToken?: RefrEshTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordResetToken?: passwordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    todos?: TOdoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPasswordResetTokenInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    password: string
    isEmailVerified?: boolean
    Provider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: verificationTokenCreateNestedManyWithoutUserInput
    refreshToken?: RefrEshTokenCreateNestedManyWithoutUserInput
    oauthacount?: OauthacountCreateNestedManyWithoutUserInput
    todos?: TOdoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetTokenInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    password: string
    isEmailVerified?: boolean
    Provider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: verificationTokenUncheckedCreateNestedManyWithoutUserInput
    refreshToken?: RefrEshTokenUncheckedCreateNestedManyWithoutUserInput
    oauthacount?: OauthacountUncheckedCreateNestedManyWithoutUserInput
    todos?: TOdoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
  }

  export type UserUpsertWithoutPasswordResetTokenInput = {
    update: XOR<UserUpdateWithoutPasswordResetTokenInput, UserUncheckedUpdateWithoutPasswordResetTokenInput>
    create: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetTokenInput, UserUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type UserUpdateWithoutPasswordResetTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: verificationTokenUpdateManyWithoutUserNestedInput
    refreshToken?: RefrEshTokenUpdateManyWithoutUserNestedInput
    oauthacount?: OauthacountUpdateManyWithoutUserNestedInput
    todos?: TOdoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: verificationTokenUncheckedUpdateManyWithoutUserNestedInput
    refreshToken?: RefrEshTokenUncheckedUpdateManyWithoutUserNestedInput
    oauthacount?: OauthacountUncheckedUpdateManyWithoutUserNestedInput
    todos?: TOdoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTodosInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    password: string
    isEmailVerified?: boolean
    Provider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: verificationTokenCreateNestedManyWithoutUserInput
    refreshToken?: RefrEshTokenCreateNestedManyWithoutUserInput
    oauthacount?: OauthacountCreateNestedManyWithoutUserInput
    passwordResetToken?: passwordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTodosInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    password: string
    isEmailVerified?: boolean
    Provider?: $Enums.AuthProvider
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: verificationTokenUncheckedCreateNestedManyWithoutUserInput
    refreshToken?: RefrEshTokenUncheckedCreateNestedManyWithoutUserInput
    oauthacount?: OauthacountUncheckedCreateNestedManyWithoutUserInput
    passwordResetToken?: passwordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTodosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
  }

  export type UserUpsertWithoutTodosInput = {
    update: XOR<UserUpdateWithoutTodosInput, UserUncheckedUpdateWithoutTodosInput>
    create: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTodosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTodosInput, UserUncheckedUpdateWithoutTodosInput>
  }

  export type UserUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: verificationTokenUpdateManyWithoutUserNestedInput
    refreshToken?: RefrEshTokenUpdateManyWithoutUserNestedInput
    oauthacount?: OauthacountUpdateManyWithoutUserNestedInput
    passwordResetToken?: passwordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: verificationTokenUncheckedUpdateManyWithoutUserNestedInput
    refreshToken?: RefrEshTokenUncheckedUpdateManyWithoutUserNestedInput
    oauthacount?: OauthacountUncheckedUpdateManyWithoutUserNestedInput
    passwordResetToken?: passwordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type verificationTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefrEshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OauthacountCreateManyUserInput = {
    id?: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    createdAt?: Date | string
  }

  export type passwordResetTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type TOdoCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    completed?: boolean
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type verificationTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefrEshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefrEshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefrEshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OauthacountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OauthacountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OauthacountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordResetTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordResetTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordResetTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TOdoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TOdoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TOdoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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