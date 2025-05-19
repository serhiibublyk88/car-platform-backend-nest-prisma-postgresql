/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Car
 *
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>;
/**
 * Model Image
 *
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>;
/**
 * Model Inquiry
 *
 */
export type Inquiry = $Result.DefaultSelection<Prisma.$InquiryPayload>;
/**
 * Model Admin
 *
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>;
/**
 * Model AuditLog
 *
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const VehicleType: {
    Unselected: 'Unselected';
    Cabrio_Roadster: 'Cabrio_Roadster';
    Kleinwagen: 'Kleinwagen';
    Limousine: 'Limousine';
    Van_Minibus: 'Van_Minibus';
    Gelaendewagen_Pickup_SUV: 'Gelaendewagen_Pickup_SUV';
    Kombi: 'Kombi';
    Sportwagen_Coupe: 'Sportwagen_Coupe';
    Andere: 'Andere';
  };

  export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType];

  export const Condition: {
    Unselected: 'Unselected';
    Neu: 'Neu';
    Gebraucht: 'Gebraucht';
    Jahreswagen: 'Jahreswagen';
    Oldtimer: 'Oldtimer';
    Vorfuehrfahrzeug: 'Vorfuehrfahrzeug';
  };

  export type Condition = (typeof Condition)[keyof typeof Condition];

  export const FuelType: {
    Unselected: 'Unselected';
    Benzin: 'Benzin';
    Diesel: 'Diesel';
    Elektro: 'Elektro';
    Ethanol: 'Ethanol';
    Hybrid_Diesel_Elektro: 'Hybrid_Diesel_Elektro';
    Hybrid_Benzin_Elektro: 'Hybrid_Benzin_Elektro';
    Plug_in_Hybrid: 'Plug_in_Hybrid';
    Wasserstoff: 'Wasserstoff';
    Autogas_LPG: 'Autogas_LPG';
    Erdgas_CNG: 'Erdgas_CNG';
    Andere: 'Andere';
  };

  export type FuelType = (typeof FuelType)[keyof typeof FuelType];

  export const Drivetrain: {
    Unselected: 'Unselected';
    Frontantrieb: 'Frontantrieb';
    Heckantrieb: 'Heckantrieb';
    Allrad: 'Allrad';
  };

  export type Drivetrain = (typeof Drivetrain)[keyof typeof Drivetrain];

  export const Transmission: {
    Unselected: 'Unselected';
    Automatik: 'Automatik';
    Halbautomatik: 'Halbautomatik';
    Schaltgetriebe: 'Schaltgetriebe';
  };

  export type Transmission = (typeof Transmission)[keyof typeof Transmission];
}

export type VehicleType = $Enums.VehicleType;

export const VehicleType: typeof $Enums.VehicleType;

export type Condition = $Enums.Condition;

export const Condition: typeof $Enums.Condition;

export type FuelType = $Enums.FuelType;

export const FuelType: typeof $Enums.FuelType;

export type Drivetrain = $Enums.Drivetrain;

export const Drivetrain: typeof $Enums.Drivetrain;

export type Transmission = $Enums.Transmission;

export const Transmission: typeof $Enums.Transmission;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cars
 * const cars = await prisma.car.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cars
   * const cars = await prisma.car.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): PrismaClient;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cars
   * const cars = await prisma.car.findMany()
   * ```
   */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Images
   * const images = await prisma.image.findMany()
   * ```
   */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiry`: Exposes CRUD operations for the **Inquiry** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Inquiries
   * const inquiries = await prisma.inquiry.findMany()
   * ```
   */
  get inquiry(): Prisma.InquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AuditLogs
   * const auditLogs = await prisma.auditLog.findMany()
   * ```
   */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I,
  ) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Car: 'Car';
    Image: 'Image';
    Inquiry: 'Inquiry';
    Admin: 'Admin';
    AuditLog: 'AuditLog';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'car' | 'image' | 'inquiry' | 'admin' | 'auditLog';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>;
        fields: Prisma.CarFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>;
          };
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>;
          };
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[];
          };
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>;
          };
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[];
          };
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>;
          };
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>;
          };
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[];
          };
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>;
          };
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCar>;
          };
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CarGroupByOutputType>[];
          };
          count: {
            args: Prisma.CarCountArgs<ExtArgs>;
            result: $Utils.Optional<CarCountAggregateOutputType> | number;
          };
        };
      };
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>;
        fields: Prisma.ImageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[];
          };
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[];
          };
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[];
          };
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateImage>;
          };
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ImageGroupByOutputType>[];
          };
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>;
            result: $Utils.Optional<ImageCountAggregateOutputType> | number;
          };
        };
      };
      Inquiry: {
        payload: Prisma.$InquiryPayload<ExtArgs>;
        fields: Prisma.InquiryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.InquiryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.InquiryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>;
          };
          findFirst: {
            args: Prisma.InquiryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.InquiryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>;
          };
          findMany: {
            args: Prisma.InquiryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[];
          };
          create: {
            args: Prisma.InquiryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>;
          };
          createMany: {
            args: Prisma.InquiryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.InquiryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[];
          };
          delete: {
            args: Prisma.InquiryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>;
          };
          update: {
            args: Prisma.InquiryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>;
          };
          deleteMany: {
            args: Prisma.InquiryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.InquiryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.InquiryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[];
          };
          upsert: {
            args: Prisma.InquiryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>;
          };
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInquiry>;
          };
          groupBy: {
            args: Prisma.InquiryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InquiryGroupByOutputType>[];
          };
          count: {
            args: Prisma.InquiryCountArgs<ExtArgs>;
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number;
          };
        };
      };
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>;
        fields: Prisma.AdminFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[];
          };
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[];
          };
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[];
          };
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAdmin>;
          };
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AdminGroupByOutputType>[];
          };
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>;
            result: $Utils.Optional<AdminCountAggregateOutputType> | number;
          };
        };
      };
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>;
        fields: Prisma.AuditLogFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
          };
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
          };
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
          };
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAuditLog>;
          };
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AuditLogGroupByOutputType>[];
          };
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>;
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    car?: CarOmit;
    image?: ImageOmit;
    inquiry?: InquiryOmit;
    admin?: AdminOmit;
    auditLog?: AuditLogOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    images: number;
    inquiries: number;
  };

  export type CarCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    images?: boolean | CarCountOutputTypeCountImagesArgs;
    inquiries?: boolean | CarCountOutputTypeCountInquiriesArgs;
  };

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountImagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ImageWhereInput;
  };

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountInquiriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InquiryWhereInput;
  };

  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    auditLogs: number;
    cars: number;
  };

  export type AdminCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    auditLogs?: boolean | AdminCountOutputTypeCountAuditLogsArgs;
    cars?: boolean | AdminCountOutputTypeCountCarsArgs;
  };

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountAuditLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AuditLogWhereInput;
  };

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountCarsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CarWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null;
    _avg: CarAvgAggregateOutputType | null;
    _sum: CarSumAggregateOutputType | null;
    _min: CarMinAggregateOutputType | null;
    _max: CarMaxAggregateOutputType | null;
  };

  export type CarAvgAggregateOutputType = {
    seats: number | null;
    doors: number | null;
    price: number | null;
    mileage: number | null;
    power: number | null;
    engineCapacity: number | null;
  };

  export type CarSumAggregateOutputType = {
    seats: number | null;
    doors: number | null;
    price: number | null;
    mileage: number | null;
    power: number | null;
    engineCapacity: number | null;
  };

  export type CarMinAggregateOutputType = {
    id: string | null;
    make: string | null;
    model: string | null;
    vehicleType: $Enums.VehicleType | null;
    seats: number | null;
    doors: number | null;
    condition: $Enums.Condition | null;
    price: number | null;
    firstRegistration: string | null;
    mileage: number | null;
    fuelType: $Enums.FuelType | null;
    power: number | null;
    engineCapacity: number | null;
    drivetrain: $Enums.Drivetrain | null;
    transmission: $Enums.Transmission | null;
    vin: string | null;
    accidentFree: boolean | null;
    description: string | null;
    sold: boolean | null;
    visible: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    adminId: string | null;
  };

  export type CarMaxAggregateOutputType = {
    id: string | null;
    make: string | null;
    model: string | null;
    vehicleType: $Enums.VehicleType | null;
    seats: number | null;
    doors: number | null;
    condition: $Enums.Condition | null;
    price: number | null;
    firstRegistration: string | null;
    mileage: number | null;
    fuelType: $Enums.FuelType | null;
    power: number | null;
    engineCapacity: number | null;
    drivetrain: $Enums.Drivetrain | null;
    transmission: $Enums.Transmission | null;
    vin: string | null;
    accidentFree: boolean | null;
    description: string | null;
    sold: boolean | null;
    visible: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    adminId: string | null;
  };

  export type CarCountAggregateOutputType = {
    id: number;
    make: number;
    model: number;
    vehicleType: number;
    seats: number;
    doors: number;
    condition: number;
    price: number;
    firstRegistration: number;
    mileage: number;
    fuelType: number;
    power: number;
    engineCapacity: number;
    drivetrain: number;
    transmission: number;
    vin: number;
    accidentFree: number;
    description: number;
    sold: number;
    visible: number;
    createdAt: number;
    updatedAt: number;
    adminId: number;
    _all: number;
  };

  export type CarAvgAggregateInputType = {
    seats?: true;
    doors?: true;
    price?: true;
    mileage?: true;
    power?: true;
    engineCapacity?: true;
  };

  export type CarSumAggregateInputType = {
    seats?: true;
    doors?: true;
    price?: true;
    mileage?: true;
    power?: true;
    engineCapacity?: true;
  };

  export type CarMinAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    vehicleType?: true;
    seats?: true;
    doors?: true;
    condition?: true;
    price?: true;
    firstRegistration?: true;
    mileage?: true;
    fuelType?: true;
    power?: true;
    engineCapacity?: true;
    drivetrain?: true;
    transmission?: true;
    vin?: true;
    accidentFree?: true;
    description?: true;
    sold?: true;
    visible?: true;
    createdAt?: true;
    updatedAt?: true;
    adminId?: true;
  };

  export type CarMaxAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    vehicleType?: true;
    seats?: true;
    doors?: true;
    condition?: true;
    price?: true;
    firstRegistration?: true;
    mileage?: true;
    fuelType?: true;
    power?: true;
    engineCapacity?: true;
    drivetrain?: true;
    transmission?: true;
    vin?: true;
    accidentFree?: true;
    description?: true;
    sold?: true;
    visible?: true;
    createdAt?: true;
    updatedAt?: true;
    adminId?: true;
  };

  export type CarCountAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    vehicleType?: true;
    seats?: true;
    doors?: true;
    condition?: true;
    price?: true;
    firstRegistration?: true;
    mileage?: true;
    fuelType?: true;
    power?: true;
    engineCapacity?: true;
    drivetrain?: true;
    transmission?: true;
    vin?: true;
    accidentFree?: true;
    description?: true;
    sold?: true;
    visible?: true;
    createdAt?: true;
    updatedAt?: true;
    adminId?: true;
    _all?: true;
  };

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Filter which Car to aggregate.
       */
      where?: CarWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Cars to fetch.
       */
      orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       */
      cursor?: CarWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Cars from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Cars.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned Cars
       **/
      _count?: true | CarCountAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to average
       **/
      _avg?: CarAvgAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to sum
       **/
      _sum?: CarSumAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: CarMinAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: CarMaxAggregateInputType;
    };

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
    [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>;
  };

  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput;
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[];
    by: CarScalarFieldEnum[] | CarScalarFieldEnum;
    having?: CarScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarCountAggregateInputType | true;
    _avg?: CarAvgAggregateInputType;
    _sum?: CarSumAggregateInputType;
    _min?: CarMinAggregateInputType;
    _max?: CarMaxAggregateInputType;
  };

  export type CarGroupByOutputType = {
    id: string;
    make: string;
    model: string;
    vehicleType: $Enums.VehicleType;
    seats: number;
    doors: number;
    condition: $Enums.Condition;
    price: number;
    firstRegistration: string;
    mileage: number;
    fuelType: $Enums.FuelType;
    power: number;
    engineCapacity: number;
    drivetrain: $Enums.Drivetrain;
    transmission: $Enums.Transmission;
    vin: string;
    accidentFree: boolean;
    description: string;
    sold: boolean;
    visible: boolean;
    createdAt: Date;
    updatedAt: Date;
    adminId: string | null;
    _count: CarCountAggregateOutputType | null;
    _avg: CarAvgAggregateOutputType | null;
    _sum: CarSumAggregateOutputType | null;
    _min: CarMinAggregateOutputType | null;
    _max: CarMaxAggregateOutputType | null;
  };

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CarGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CarGroupByOutputType[P]>
          : GetScalarType<T[P], CarGroupByOutputType[P]>;
      }
    >
  >;

  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        make?: boolean;
        model?: boolean;
        vehicleType?: boolean;
        seats?: boolean;
        doors?: boolean;
        condition?: boolean;
        price?: boolean;
        firstRegistration?: boolean;
        mileage?: boolean;
        fuelType?: boolean;
        power?: boolean;
        engineCapacity?: boolean;
        drivetrain?: boolean;
        transmission?: boolean;
        vin?: boolean;
        accidentFree?: boolean;
        description?: boolean;
        sold?: boolean;
        visible?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        adminId?: boolean;
        images?: boolean | Car$imagesArgs<ExtArgs>;
        inquiries?: boolean | Car$inquiriesArgs<ExtArgs>;
        admin?: boolean | Car$adminArgs<ExtArgs>;
        _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['car']
    >;

  export type CarSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      make?: boolean;
      model?: boolean;
      vehicleType?: boolean;
      seats?: boolean;
      doors?: boolean;
      condition?: boolean;
      price?: boolean;
      firstRegistration?: boolean;
      mileage?: boolean;
      fuelType?: boolean;
      power?: boolean;
      engineCapacity?: boolean;
      drivetrain?: boolean;
      transmission?: boolean;
      vin?: boolean;
      accidentFree?: boolean;
      description?: boolean;
      sold?: boolean;
      visible?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      adminId?: boolean;
      admin?: boolean | Car$adminArgs<ExtArgs>;
    },
    ExtArgs['result']['car']
  >;

  export type CarSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      make?: boolean;
      model?: boolean;
      vehicleType?: boolean;
      seats?: boolean;
      doors?: boolean;
      condition?: boolean;
      price?: boolean;
      firstRegistration?: boolean;
      mileage?: boolean;
      fuelType?: boolean;
      power?: boolean;
      engineCapacity?: boolean;
      drivetrain?: boolean;
      transmission?: boolean;
      vin?: boolean;
      accidentFree?: boolean;
      description?: boolean;
      sold?: boolean;
      visible?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      adminId?: boolean;
      admin?: boolean | Car$adminArgs<ExtArgs>;
    },
    ExtArgs['result']['car']
  >;

  export type CarSelectScalar = {
    id?: boolean;
    make?: boolean;
    model?: boolean;
    vehicleType?: boolean;
    seats?: boolean;
    doors?: boolean;
    condition?: boolean;
    price?: boolean;
    firstRegistration?: boolean;
    mileage?: boolean;
    fuelType?: boolean;
    power?: boolean;
    engineCapacity?: boolean;
    drivetrain?: boolean;
    transmission?: boolean;
    vin?: boolean;
    accidentFree?: boolean;
    description?: boolean;
    sold?: boolean;
    visible?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    adminId?: boolean;
  };

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'make'
      | 'model'
      | 'vehicleType'
      | 'seats'
      | 'doors'
      | 'condition'
      | 'price'
      | 'firstRegistration'
      | 'mileage'
      | 'fuelType'
      | 'power'
      | 'engineCapacity'
      | 'drivetrain'
      | 'transmission'
      | 'vin'
      | 'accidentFree'
      | 'description'
      | 'sold'
      | 'visible'
      | 'createdAt'
      | 'updatedAt'
      | 'adminId',
      ExtArgs['result']['car']
    >;
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Car$imagesArgs<ExtArgs>;
    inquiries?: boolean | Car$inquiriesArgs<ExtArgs>;
    admin?: boolean | Car$adminArgs<ExtArgs>;
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CarIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    admin?: boolean | Car$adminArgs<ExtArgs>;
  };
  export type CarIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    admin?: boolean | Car$adminArgs<ExtArgs>;
  };

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Car';
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[];
      inquiries: Prisma.$InquiryPayload<ExtArgs>[];
      admin: Prisma.$AdminPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        make: string;
        model: string;
        vehicleType: $Enums.VehicleType;
        seats: number;
        doors: number;
        condition: $Enums.Condition;
        price: number;
        firstRegistration: string;
        mileage: number;
        fuelType: $Enums.FuelType;
        power: number;
        engineCapacity: number;
        drivetrain: $Enums.Drivetrain;
        transmission: $Enums.Transmission;
        vin: string;
        accidentFree: boolean;
        description: string;
        sold: boolean;
        visible: boolean;
        createdAt: Date;
        updatedAt: Date;
        adminId: string | null;
      },
      ExtArgs['result']['car']
    >;
    composites: {};
  };

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<
    Prisma.$CarPayload,
    S
  >;

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    CarFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CarCountAggregateInputType | true;
  };

  export interface CarDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car']; meta: { name: 'Car' } };
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(
      args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>,
    ): Prisma__CarClient<
      $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CarClient<
      $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(
      args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>,
    ): Prisma__CarClient<
      $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CarClient<
      $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     *
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CarFindManyArgs>(
      args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     *
     */
    create<T extends CarCreateArgs>(
      args: SelectSubset<T, CarCreateArgs<ExtArgs>>,
    ): Prisma__CarClient<
      $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CarCreateManyArgs>(
      args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     *
     */
    delete<T extends CarDeleteArgs>(
      args: SelectSubset<T, CarDeleteArgs<ExtArgs>>,
    ): Prisma__CarClient<
      $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CarUpdateArgs>(
      args: SelectSubset<T, CarUpdateArgs<ExtArgs>>,
    ): Prisma__CarClient<
      $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CarDeleteManyArgs>(
      args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CarUpdateManyArgs>(
      args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(
      args: SelectSubset<T, CarUpsertArgs<ExtArgs>>,
    ): Prisma__CarClient<
      $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
     **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarAggregateArgs>(
      args: Subset<T, CarAggregateArgs>,
    ): Prisma.PrismaPromise<GetCarAggregateType<T>>;

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
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
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Car model
     */
    readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    images<T extends Car$imagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Car$imagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    inquiries<T extends Car$inquiriesArgs<ExtArgs> = {}>(
      args?: Subset<T, Car$inquiriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    admin<T extends Car$adminArgs<ExtArgs> = {}>(
      args?: Subset<T, Car$adminArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<'Car', 'String'>;
    readonly make: FieldRef<'Car', 'String'>;
    readonly model: FieldRef<'Car', 'String'>;
    readonly vehicleType: FieldRef<'Car', 'VehicleType'>;
    readonly seats: FieldRef<'Car', 'Int'>;
    readonly doors: FieldRef<'Car', 'Int'>;
    readonly condition: FieldRef<'Car', 'Condition'>;
    readonly price: FieldRef<'Car', 'Int'>;
    readonly firstRegistration: FieldRef<'Car', 'String'>;
    readonly mileage: FieldRef<'Car', 'Int'>;
    readonly fuelType: FieldRef<'Car', 'FuelType'>;
    readonly power: FieldRef<'Car', 'Int'>;
    readonly engineCapacity: FieldRef<'Car', 'Int'>;
    readonly drivetrain: FieldRef<'Car', 'Drivetrain'>;
    readonly transmission: FieldRef<'Car', 'Transmission'>;
    readonly vin: FieldRef<'Car', 'String'>;
    readonly accidentFree: FieldRef<'Car', 'Boolean'>;
    readonly description: FieldRef<'Car', 'String'>;
    readonly sold: FieldRef<'Car', 'Boolean'>;
    readonly visible: FieldRef<'Car', 'Boolean'>;
    readonly createdAt: FieldRef<'Car', 'DateTime'>;
    readonly updatedAt: FieldRef<'Car', 'DateTime'>;
    readonly adminId: FieldRef<'Car', 'String'>;
  }

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput;
  };

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput;
  };

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Car
       */
      select?: CarSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Car
       */
      omit?: CarOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: CarInclude<ExtArgs> | null;
      /**
       * Filter, which Car to fetch.
       */
      where?: CarWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Cars to fetch.
       */
      orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Cars.
       */
      cursor?: CarWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Cars from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Cars.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Cars.
       */
      distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
    };

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Car
       */
      select?: CarSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Car
       */
      omit?: CarOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: CarInclude<ExtArgs> | null;
      /**
       * Filter, which Cars to fetch.
       */
      where?: CarWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Cars to fetch.
       */
      orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Cars.
       */
      cursor?: CarWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Cars from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Cars.
       */
      skip?: number;
      distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
    };

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>;
  };

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>;
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput;
  };

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>;
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput;
    /**
     * Limit how many Cars to update.
     */
    limit?: number;
  };

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>;
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput;
    /**
     * Limit how many Cars to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput;
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>;
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>;
  };

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput;
  };

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput;
    /**
     * Limit how many Cars to delete.
     */
    limit?: number;
  };

  /**
   * Car.images
   */
  export type Car$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    where?: ImageWhereInput;
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    cursor?: ImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Car.inquiries
   */
  export type Car$inquiriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null;
    where?: InquiryWhereInput;
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[];
    cursor?: InquiryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[];
  };

  /**
   * Car.admin
   */
  export type Car$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null;
    where?: AdminWhereInput;
  };

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
  };

  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null;
    _min: ImageMinAggregateOutputType | null;
    _max: ImageMaxAggregateOutputType | null;
  };

  export type ImageMinAggregateOutputType = {
    id: string | null;
    url: string | null;
    createdAt: Date | null;
    carId: string | null;
  };

  export type ImageMaxAggregateOutputType = {
    id: string | null;
    url: string | null;
    createdAt: Date | null;
    carId: string | null;
  };

  export type ImageCountAggregateOutputType = {
    id: number;
    url: number;
    createdAt: number;
    carId: number;
    _all: number;
  };

  export type ImageMinAggregateInputType = {
    id?: true;
    url?: true;
    createdAt?: true;
    carId?: true;
  };

  export type ImageMaxAggregateInputType = {
    id?: true;
    url?: true;
    createdAt?: true;
    carId?: true;
  };

  export type ImageCountAggregateInputType = {
    id?: true;
    url?: true;
    createdAt?: true;
    carId?: true;
    _all?: true;
  };

  export type ImageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Images
     **/
    _count?: true | ImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ImageMaxAggregateInputType;
  };

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
    [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>;
  };

  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: ImageWhereInput;
      orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[];
      by: ImageScalarFieldEnum[] | ImageScalarFieldEnum;
      having?: ImageScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: ImageCountAggregateInputType | true;
      _min?: ImageMinAggregateInputType;
      _max?: ImageMaxAggregateInputType;
    };

  export type ImageGroupByOutputType = {
    id: string;
    url: string;
    createdAt: Date;
    carId: string;
    _count: ImageCountAggregateOutputType | null;
    _min: ImageMinAggregateOutputType | null;
    _max: ImageMaxAggregateOutputType | null;
  };

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ImageGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
          : GetScalarType<T[P], ImageGroupByOutputType[P]>;
      }
    >
  >;

  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        url?: boolean;
        createdAt?: boolean;
        carId?: boolean;
        car?: boolean | CarDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['image']
    >;

  export type ImageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      url?: boolean;
      createdAt?: boolean;
      carId?: boolean;
      car?: boolean | CarDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['image']
  >;

  export type ImageSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      url?: boolean;
      createdAt?: boolean;
      carId?: boolean;
      car?: boolean | CarDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['image']
  >;

  export type ImageSelectScalar = {
    id?: boolean;
    url?: boolean;
    createdAt?: boolean;
    carId?: boolean;
  };

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'url' | 'createdAt' | 'carId', ExtArgs['result']['image']>;
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>;
  };
  export type ImageIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    car?: boolean | CarDefaultArgs<ExtArgs>;
  };
  export type ImageIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    car?: boolean | CarDefaultArgs<ExtArgs>;
  };

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Image';
    objects: {
      car: Prisma.$CarPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        url: string;
        createdAt: Date;
        carId: string;
      },
      ExtArgs['result']['image']
    >;
    composites: {};
  };

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<
    Prisma.$ImagePayload,
    S
  >;

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ImageFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ImageCountAggregateInputType | true;
  };

  export interface ImageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image']; meta: { name: 'Image' } };
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     *
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ImageFindManyArgs>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     *
     */
    create<T extends ImageCreateArgs>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ImageCreateManyArgs>(
      args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     *
     */
    delete<T extends ImageDeleteArgs>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ImageUpdateArgs>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ImageDeleteManyArgs>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ImageUpdateManyArgs>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
     **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(
      args: Subset<T, ImageAggregateArgs>,
    ): Prisma.PrismaPromise<GetImageAggregateType<T>>;

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Image model
     */
    readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    car<T extends CarDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CarDefaultArgs<ExtArgs>>,
    ): Prisma__CarClient<
      | $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<'Image', 'String'>;
    readonly url: FieldRef<'Image', 'String'>;
    readonly createdAt: FieldRef<'Image', 'DateTime'>;
    readonly carId: FieldRef<'Image', 'String'>;
  }

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Image
       */
      select?: ImageSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Image
       */
      omit?: ImageOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: ImageInclude<ExtArgs> | null;
      /**
       * The data needed to create a Image.
       */
      data: XOR<ImageCreateInput, ImageUncheckedCreateInput>;
    };

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Image
       */
      select?: ImageSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Image
       */
      omit?: ImageOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: ImageInclude<ExtArgs> | null;
      /**
       * The data needed to update a Image.
       */
      data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>;
      /**
       * Choose, which Image to update.
       */
      where: ImageWhereUniqueInput;
    };

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>;
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput;
    /**
     * Limit how many Images to update.
     */
    limit?: number;
  };

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>;
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput;
    /**
     * Limit how many Images to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Image
       */
      select?: ImageSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Image
       */
      omit?: ImageOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: ImageInclude<ExtArgs> | null;
      /**
       * The filter to search for the Image to update in case it exists.
       */
      where: ImageWhereUniqueInput;
      /**
       * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
       */
      create: XOR<ImageCreateInput, ImageUncheckedCreateInput>;
      /**
       * In case the Image was found with the provided `where` argument, update it with this data.
       */
      update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>;
    };

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Image
       */
      select?: ImageSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Image
       */
      omit?: ImageOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: ImageInclude<ExtArgs> | null;
      /**
       * Filter which Image to delete.
       */
      where: ImageWhereUniqueInput;
    };

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput;
    /**
     * Limit how many Images to delete.
     */
    limit?: number;
  };

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Image
       */
      select?: ImageSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Image
       */
      omit?: ImageOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: ImageInclude<ExtArgs> | null;
    };

  /**
   * Model Inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null;
    _min: InquiryMinAggregateOutputType | null;
    _max: InquiryMaxAggregateOutputType | null;
  };

  export type InquiryMinAggregateOutputType = {
    id: string | null;
    message: string | null;
    phone: string | null;
    email: string | null;
    createdAt: Date | null;
    carId: string | null;
  };

  export type InquiryMaxAggregateOutputType = {
    id: string | null;
    message: string | null;
    phone: string | null;
    email: string | null;
    createdAt: Date | null;
    carId: string | null;
  };

  export type InquiryCountAggregateOutputType = {
    id: number;
    message: number;
    phone: number;
    email: number;
    createdAt: number;
    carId: number;
    _all: number;
  };

  export type InquiryMinAggregateInputType = {
    id?: true;
    message?: true;
    phone?: true;
    email?: true;
    createdAt?: true;
    carId?: true;
  };

  export type InquiryMaxAggregateInputType = {
    id?: true;
    message?: true;
    phone?: true;
    email?: true;
    createdAt?: true;
    carId?: true;
  };

  export type InquiryCountAggregateInputType = {
    id?: true;
    message?: true;
    phone?: true;
    email?: true;
    createdAt?: true;
    carId?: true;
    _all?: true;
  };

  export type InquiryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Inquiry to aggregate.
     */
    where?: InquiryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: InquiryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inquiries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Inquiries
     **/
    _count?: true | InquiryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InquiryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InquiryMaxAggregateInputType;
  };

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
    [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>;
  };

  export type InquiryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InquiryWhereInput;
    orderBy?: InquiryOrderByWithAggregationInput | InquiryOrderByWithAggregationInput[];
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum;
    having?: InquiryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InquiryCountAggregateInputType | true;
    _min?: InquiryMinAggregateInputType;
    _max?: InquiryMaxAggregateInputType;
  };

  export type InquiryGroupByOutputType = {
    id: string;
    message: string;
    phone: string | null;
    email: string | null;
    createdAt: Date;
    carId: string;
    _count: InquiryCountAggregateOutputType | null;
    _min: InquiryMinAggregateOutputType | null;
    _max: InquiryMaxAggregateOutputType | null;
  };

  type GetInquiryGroupByPayload<T extends InquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InquiryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
          : GetScalarType<T[P], InquiryGroupByOutputType[P]>;
      }
    >
  >;

  export type InquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        message?: boolean;
        phone?: boolean;
        email?: boolean;
        createdAt?: boolean;
        carId?: boolean;
        car?: boolean | CarDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['inquiry']
    >;

  export type InquirySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      message?: boolean;
      phone?: boolean;
      email?: boolean;
      createdAt?: boolean;
      carId?: boolean;
      car?: boolean | CarDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['inquiry']
  >;

  export type InquirySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      message?: boolean;
      phone?: boolean;
      email?: boolean;
      createdAt?: boolean;
      carId?: boolean;
      car?: boolean | CarDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['inquiry']
  >;

  export type InquirySelectScalar = {
    id?: boolean;
    message?: boolean;
    phone?: boolean;
    email?: boolean;
    createdAt?: boolean;
    carId?: boolean;
  };

  export type InquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'message' | 'phone' | 'email' | 'createdAt' | 'carId',
      ExtArgs['result']['inquiry']
    >;
  export type InquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>;
  };
  export type InquiryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    car?: boolean | CarDefaultArgs<ExtArgs>;
  };
  export type InquiryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    car?: boolean | CarDefaultArgs<ExtArgs>;
  };

  export type $InquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Inquiry';
      objects: {
        car: Prisma.$CarPayload<ExtArgs>;
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: string;
          message: string;
          phone: string | null;
          email: string | null;
          createdAt: Date;
          carId: string;
        },
        ExtArgs['result']['inquiry']
      >;
      composites: {};
    };

  type InquiryGetPayload<S extends boolean | null | undefined | InquiryDefaultArgs> =
    $Result.GetResult<Prisma.$InquiryPayload, S>;

  type InquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    InquiryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: InquiryCountAggregateInputType | true;
  };

  export interface InquiryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inquiry']; meta: { name: 'Inquiry' } };
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {InquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryFindUniqueArgs>(
      args: SelectSubset<T, InquiryFindUniqueArgs<ExtArgs>>,
    ): Prisma__InquiryClient<
      $Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, InquiryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__InquiryClient<
      $Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryFindFirstArgs>(
      args?: SelectSubset<T, InquiryFindFirstArgs<ExtArgs>>,
    ): Prisma__InquiryClient<
      $Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InquiryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__InquiryClient<
      $Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     *
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InquiryFindManyArgs>(
      args?: SelectSubset<T, InquiryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Inquiry.
     * @param {InquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     *
     */
    create<T extends InquiryCreateArgs>(
      args: SelectSubset<T, InquiryCreateArgs<ExtArgs>>,
    ): Prisma__InquiryClient<
      $Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Inquiries.
     * @param {InquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InquiryCreateManyArgs>(
      args?: SelectSubset<T, InquiryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Inquiries and returns the data saved in the database.
     * @param {InquiryCreateManyAndReturnArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Inquiries and only return the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InquiryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, InquiryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InquiryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Inquiry.
     * @param {InquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     *
     */
    delete<T extends InquiryDeleteArgs>(
      args: SelectSubset<T, InquiryDeleteArgs<ExtArgs>>,
    ): Prisma__InquiryClient<
      $Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Inquiry.
     * @param {InquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InquiryUpdateArgs>(
      args: SelectSubset<T, InquiryUpdateArgs<ExtArgs>>,
    ): Prisma__InquiryClient<
      $Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Inquiries.
     * @param {InquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InquiryDeleteManyArgs>(
      args?: SelectSubset<T, InquiryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InquiryUpdateManyArgs>(
      args: SelectSubset<T, InquiryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inquiries and returns the data updated in the database.
     * @param {InquiryUpdateManyAndReturnArgs} args - Arguments to update many Inquiries.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Inquiries and only return the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.updateManyAndReturn({
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
    updateManyAndReturn<T extends InquiryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, InquiryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InquiryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Inquiry.
     * @param {InquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends InquiryUpsertArgs>(
      args: SelectSubset<T, InquiryUpsertArgs<ExtArgs>>,
    ): Prisma__InquiryClient<
      $Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
     **/
    count<T extends InquiryCountArgs>(
      args?: Subset<T, InquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InquiryAggregateArgs>(
      args: Subset<T, InquiryAggregateArgs>,
    ): Prisma.PrismaPromise<GetInquiryAggregateType<T>>;

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryGroupByArgs} args - Group by arguments.
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
      T extends InquiryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryGroupByArgs['orderBy'] }
        : { orderBy?: InquiryGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, InquiryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Inquiry model
     */
    readonly fields: InquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    car<T extends CarDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CarDefaultArgs<ExtArgs>>,
    ): Prisma__CarClient<
      | $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Inquiry model
   */
  interface InquiryFieldRefs {
    readonly id: FieldRef<'Inquiry', 'String'>;
    readonly message: FieldRef<'Inquiry', 'String'>;
    readonly phone: FieldRef<'Inquiry', 'String'>;
    readonly email: FieldRef<'Inquiry', 'String'>;
    readonly createdAt: FieldRef<'Inquiry', 'DateTime'>;
    readonly carId: FieldRef<'Inquiry', 'String'>;
  }

  // Custom InputTypes
  /**
   * Inquiry findUnique
   */
  export type InquiryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null;
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput;
  };

  /**
   * Inquiry findUniqueOrThrow
   */
  export type InquiryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null;
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput;
  };

  /**
   * Inquiry findFirst
   */
  export type InquiryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null;
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inquiries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[];
  };

  /**
   * Inquiry findFirstOrThrow
   */
  export type InquiryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null;
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inquiries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[];
  };

  /**
   * Inquiry findMany
   */
  export type InquiryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null;
    /**
     * Filter, which Inquiries to fetch.
     */
    where?: InquiryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Inquiries.
     */
    cursor?: InquiryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inquiries.
     */
    skip?: number;
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[];
  };

  /**
   * Inquiry create
   */
  export type InquiryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Inquiry.
     */
    data: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>;
  };

  /**
   * Inquiry createMany
   */
  export type InquiryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Inquiry createManyAndReturn
   */
  export type InquiryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null;
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Inquiry update
   */
  export type InquiryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Inquiry.
     */
    data: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>;
    /**
     * Choose, which Inquiry to update.
     */
    where: InquiryWhereUniqueInput;
  };

  /**
   * Inquiry updateMany
   */
  export type InquiryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>;
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput;
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number;
  };

  /**
   * Inquiry updateManyAndReturn
   */
  export type InquiryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null;
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>;
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput;
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Inquiry upsert
   */
  export type InquiryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Inquiry to update in case it exists.
     */
    where: InquiryWhereUniqueInput;
    /**
     * In case the Inquiry found by the `where` argument doesn't exist, create a new Inquiry with this data.
     */
    create: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>;
    /**
     * In case the Inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>;
  };

  /**
   * Inquiry delete
   */
  export type InquiryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null;
    /**
     * Filter which Inquiry to delete.
     */
    where: InquiryWhereUniqueInput;
  };

  /**
   * Inquiry deleteMany
   */
  export type InquiryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Inquiries to delete
     */
    where?: InquiryWhereInput;
    /**
     * Limit how many Inquiries to delete.
     */
    limit?: number;
  };

  /**
   * Inquiry without action
   */
  export type InquiryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null;
  };

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null;
    _min: AdminMinAggregateOutputType | null;
    _max: AdminMaxAggregateOutputType | null;
  };

  export type AdminMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AdminMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AdminCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type AdminMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AdminMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AdminCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type AdminAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Admins
     **/
    _count?: true | AdminCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AdminMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AdminMaxAggregateInputType;
  };

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
    [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>;
  };

  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: AdminWhereInput;
      orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[];
      by: AdminScalarFieldEnum[] | AdminScalarFieldEnum;
      having?: AdminScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: AdminCountAggregateInputType | true;
      _min?: AdminMinAggregateInputType;
      _max?: AdminMaxAggregateInputType;
    };

  export type AdminGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    name: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AdminCountAggregateOutputType | null;
    _min: AdminMinAggregateOutputType | null;
    _max: AdminMaxAggregateOutputType | null;
  };

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AdminGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
          : GetScalarType<T[P], AdminGroupByOutputType[P]>;
      }
    >
  >;

  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        email?: boolean;
        password?: boolean;
        name?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        auditLogs?: boolean | Admin$auditLogsArgs<ExtArgs>;
        cars?: boolean | Admin$carsArgs<ExtArgs>;
        _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['admin']
    >;

  export type AdminSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['admin']
  >;

  export type AdminSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['admin']
  >;

  export type AdminSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'email' | 'password' | 'name' | 'createdAt' | 'updatedAt',
      ExtArgs['result']['admin']
    >;
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | Admin$auditLogsArgs<ExtArgs>;
    cars?: boolean | Admin$carsArgs<ExtArgs>;
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type AdminIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type AdminIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Admin';
    objects: {
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
      cars: Prisma.$CarPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        password: string;
        name: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['admin']
    >;
    composites: {};
  };

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<
    Prisma.$AdminPayload,
    S
  >;

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    AdminFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: AdminCountAggregateInputType | true;
  };

  export interface AdminDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin']; meta: { name: 'Admin' } };
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     *
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AdminFindManyArgs>(
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     *
     */
    create<T extends AdminCreateArgs>(
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdminCreateManyArgs>(
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     *
     */
    delete<T extends AdminDeleteArgs>(
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdminUpdateArgs>(
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdminDeleteManyArgs>(
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdminUpdateManyArgs>(
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
     **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(
      args: Subset<T, AdminAggregateArgs>,
    ): Prisma.PrismaPromise<GetAdminAggregateType<T>>;

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Admin model
     */
    readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    auditLogs<T extends Admin$auditLogsArgs<ExtArgs> = {}>(
      args?: Subset<T, Admin$auditLogsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    cars<T extends Admin$carsArgs<ExtArgs> = {}>(
      args?: Subset<T, Admin$carsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<'Admin', 'String'>;
    readonly email: FieldRef<'Admin', 'String'>;
    readonly password: FieldRef<'Admin', 'String'>;
    readonly name: FieldRef<'Admin', 'String'>;
    readonly createdAt: FieldRef<'Admin', 'DateTime'>;
    readonly updatedAt: FieldRef<'Admin', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput;
  };

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput;
  };

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[];
  };

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[];
  };

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[];
  };

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Admin
       */
      select?: AdminSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Admin
       */
      omit?: AdminOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: AdminInclude<ExtArgs> | null;
      /**
       * The data needed to create a Admin.
       */
      data: XOR<AdminCreateInput, AdminUncheckedCreateInput>;
    };

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Admin
       */
      select?: AdminSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Admin
       */
      omit?: AdminOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: AdminInclude<ExtArgs> | null;
      /**
       * The data needed to update a Admin.
       */
      data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>;
      /**
       * Choose, which Admin to update.
       */
      where: AdminWhereUniqueInput;
    };

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>;
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput;
    /**
     * Limit how many Admins to update.
     */
    limit?: number;
  };

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>;
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput;
    /**
     * Limit how many Admins to update.
     */
    limit?: number;
  };

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Admin
       */
      select?: AdminSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Admin
       */
      omit?: AdminOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: AdminInclude<ExtArgs> | null;
      /**
       * The filter to search for the Admin to update in case it exists.
       */
      where: AdminWhereUniqueInput;
      /**
       * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
       */
      create: XOR<AdminCreateInput, AdminUncheckedCreateInput>;
      /**
       * In case the Admin was found with the provided `where` argument, update it with this data.
       */
      update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>;
    };

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Admin
       */
      select?: AdminSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Admin
       */
      omit?: AdminOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: AdminInclude<ExtArgs> | null;
      /**
       * Filter which Admin to delete.
       */
      where: AdminWhereUniqueInput;
    };

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput;
    /**
     * Limit how many Admins to delete.
     */
    limit?: number;
  };

  /**
   * Admin.auditLogs
   */
  export type Admin$auditLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    where?: AuditLogWhereInput;
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[];
    cursor?: AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * Admin.cars
   */
  export type Admin$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    where?: CarWhereInput;
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[];
    cursor?: CarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Admin
       */
      select?: AdminSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Admin
       */
      omit?: AdminOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: AdminInclude<ExtArgs> | null;
    };

  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
  };

  export type AuditLogMinAggregateOutputType = {
    id: string | null;
    action: string | null;
    createdAt: Date | null;
    adminId: string | null;
  };

  export type AuditLogMaxAggregateOutputType = {
    id: string | null;
    action: string | null;
    createdAt: Date | null;
    adminId: string | null;
  };

  export type AuditLogCountAggregateOutputType = {
    id: number;
    action: number;
    createdAt: number;
    adminId: number;
    _all: number;
  };

  export type AuditLogMinAggregateInputType = {
    id?: true;
    action?: true;
    createdAt?: true;
    adminId?: true;
  };

  export type AuditLogMaxAggregateInputType = {
    id?: true;
    action?: true;
    createdAt?: true;
    adminId?: true;
  };

  export type AuditLogCountAggregateInputType = {
    id?: true;
    action?: true;
    createdAt?: true;
    adminId?: true;
    _all?: true;
  };

  export type AuditLogAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AuditLogs
     **/
    _count?: true | AuditLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AuditLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AuditLogMaxAggregateInputType;
  };

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
    [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>;
  };

  export type AuditLogGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AuditLogWhereInput;
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[];
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum;
    having?: AuditLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditLogCountAggregateInputType | true;
    _min?: AuditLogMinAggregateInputType;
    _max?: AuditLogMaxAggregateInputType;
  };

  export type AuditLogGroupByOutputType = {
    id: string;
    action: string;
    createdAt: Date;
    adminId: string;
    _count: AuditLogCountAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
  };

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AuditLogGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
          : GetScalarType<T[P], AuditLogGroupByOutputType[P]>;
      }
    >
  >;

  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        action?: boolean;
        createdAt?: boolean;
        adminId?: boolean;
        admin?: boolean | AdminDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['auditLog']
    >;

  export type AuditLogSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      action?: boolean;
      createdAt?: boolean;
      adminId?: boolean;
      admin?: boolean | AdminDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['auditLog']
  >;

  export type AuditLogSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      action?: boolean;
      createdAt?: boolean;
      adminId?: boolean;
      admin?: boolean | AdminDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['auditLog']
  >;

  export type AuditLogSelectScalar = {
    id?: boolean;
    action?: boolean;
    createdAt?: boolean;
    adminId?: boolean;
  };

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'action' | 'createdAt' | 'adminId', ExtArgs['result']['auditLog']>;
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      admin?: boolean | AdminDefaultArgs<ExtArgs>;
    };
  export type AuditLogIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>;
  };
  export type AuditLogIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>;
  };

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'AuditLog';
      objects: {
        admin: Prisma.$AdminPayload<ExtArgs>;
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: string;
          action: string;
          createdAt: Date;
          adminId: string;
        },
        ExtArgs['result']['auditLog']
      >;
      composites: {};
    };

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> =
    $Result.GetResult<Prisma.$AuditLogPayload, S>;

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    AuditLogFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: AuditLogCountAggregateInputType | true;
  };

  export interface AuditLogDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'];
      meta: { name: 'AuditLog' };
    };
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(
      args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(
      args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     *
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AuditLogFindManyArgs>(
      args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     *
     */
    create<T extends AuditLogCreateArgs>(
      args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuditLogCreateManyArgs>(
      args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     *
     */
    delete<T extends AuditLogDeleteArgs>(
      args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuditLogUpdateArgs>(
      args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(
      args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuditLogUpdateManyArgs>(
      args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(
      args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
     **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(
      args: Subset<T, AuditLogAggregateArgs>,
    ): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>;

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AuditLog model
     */
    readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AdminDefaultArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      | $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<'AuditLog', 'String'>;
    readonly action: FieldRef<'AuditLog', 'String'>;
    readonly createdAt: FieldRef<'AuditLog', 'DateTime'>;
    readonly adminId: FieldRef<'AuditLog', 'String'>;
  }

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>;
  };

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>;
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>;
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput;
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number;
  };

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>;
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput;
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput;
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>;
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>;
  };

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput;
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number;
  };

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CarScalarFieldEnum: {
    id: 'id';
    make: 'make';
    model: 'model';
    vehicleType: 'vehicleType';
    seats: 'seats';
    doors: 'doors';
    condition: 'condition';
    price: 'price';
    firstRegistration: 'firstRegistration';
    mileage: 'mileage';
    fuelType: 'fuelType';
    power: 'power';
    engineCapacity: 'engineCapacity';
    drivetrain: 'drivetrain';
    transmission: 'transmission';
    vin: 'vin';
    accidentFree: 'accidentFree';
    description: 'description';
    sold: 'sold';
    visible: 'visible';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    adminId: 'adminId';
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum];

  export const ImageScalarFieldEnum: {
    id: 'id';
    url: 'url';
    createdAt: 'createdAt';
    carId: 'carId';
  };

  export type ImageScalarFieldEnum =
    (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum];

  export const InquiryScalarFieldEnum: {
    id: 'id';
    message: 'message';
    phone: 'phone';
    email: 'email';
    createdAt: 'createdAt';
    carId: 'carId';
  };

  export type InquiryScalarFieldEnum =
    (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum];

  export const AdminScalarFieldEnum: {
    id: 'id';
    email: 'email';
    password: 'password';
    name: 'name';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type AdminScalarFieldEnum =
    (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];

  export const AuditLogScalarFieldEnum: {
    id: 'id';
    action: 'action';
    createdAt: 'createdAt';
    adminId: 'adminId';
  };

  export type AuditLogScalarFieldEnum =
    (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'VehicleType'
   */
  export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'VehicleType'
  >;

  /**
   * Reference to a field of type 'VehicleType[]'
   */
  export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'VehicleType[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Condition'
   */
  export type EnumConditionFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Condition'
  >;

  /**
   * Reference to a field of type 'Condition[]'
   */
  export type ListEnumConditionFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Condition[]'
  >;

  /**
   * Reference to a field of type 'FuelType'
   */
  export type EnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType'>;

  /**
   * Reference to a field of type 'FuelType[]'
   */
  export type ListEnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'FuelType[]'
  >;

  /**
   * Reference to a field of type 'Drivetrain'
   */
  export type EnumDrivetrainFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Drivetrain'
  >;

  /**
   * Reference to a field of type 'Drivetrain[]'
   */
  export type ListEnumDrivetrainFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Drivetrain[]'
  >;

  /**
   * Reference to a field of type 'Transmission'
   */
  export type EnumTransmissionFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Transmission'
  >;

  /**
   * Reference to a field of type 'Transmission[]'
   */
  export type ListEnumTransmissionFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Transmission[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[];
    OR?: CarWhereInput[];
    NOT?: CarWhereInput | CarWhereInput[];
    id?: StringFilter<'Car'> | string;
    make?: StringFilter<'Car'> | string;
    model?: StringFilter<'Car'> | string;
    vehicleType?: EnumVehicleTypeFilter<'Car'> | $Enums.VehicleType;
    seats?: IntFilter<'Car'> | number;
    doors?: IntFilter<'Car'> | number;
    condition?: EnumConditionFilter<'Car'> | $Enums.Condition;
    price?: IntFilter<'Car'> | number;
    firstRegistration?: StringFilter<'Car'> | string;
    mileage?: IntFilter<'Car'> | number;
    fuelType?: EnumFuelTypeFilter<'Car'> | $Enums.FuelType;
    power?: IntFilter<'Car'> | number;
    engineCapacity?: IntFilter<'Car'> | number;
    drivetrain?: EnumDrivetrainFilter<'Car'> | $Enums.Drivetrain;
    transmission?: EnumTransmissionFilter<'Car'> | $Enums.Transmission;
    vin?: StringFilter<'Car'> | string;
    accidentFree?: BoolFilter<'Car'> | boolean;
    description?: StringFilter<'Car'> | string;
    sold?: BoolFilter<'Car'> | boolean;
    visible?: BoolFilter<'Car'> | boolean;
    createdAt?: DateTimeFilter<'Car'> | Date | string;
    updatedAt?: DateTimeFilter<'Car'> | Date | string;
    adminId?: StringNullableFilter<'Car'> | string | null;
    images?: ImageListRelationFilter;
    inquiries?: InquiryListRelationFilter;
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null;
  };

  export type CarOrderByWithRelationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    vehicleType?: SortOrder;
    seats?: SortOrder;
    doors?: SortOrder;
    condition?: SortOrder;
    price?: SortOrder;
    firstRegistration?: SortOrder;
    mileage?: SortOrder;
    fuelType?: SortOrder;
    power?: SortOrder;
    engineCapacity?: SortOrder;
    drivetrain?: SortOrder;
    transmission?: SortOrder;
    vin?: SortOrder;
    accidentFree?: SortOrder;
    description?: SortOrder;
    sold?: SortOrder;
    visible?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    adminId?: SortOrderInput | SortOrder;
    images?: ImageOrderByRelationAggregateInput;
    inquiries?: InquiryOrderByRelationAggregateInput;
    admin?: AdminOrderByWithRelationInput;
  };

  export type CarWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      vin?: string;
      AND?: CarWhereInput | CarWhereInput[];
      OR?: CarWhereInput[];
      NOT?: CarWhereInput | CarWhereInput[];
      make?: StringFilter<'Car'> | string;
      model?: StringFilter<'Car'> | string;
      vehicleType?: EnumVehicleTypeFilter<'Car'> | $Enums.VehicleType;
      seats?: IntFilter<'Car'> | number;
      doors?: IntFilter<'Car'> | number;
      condition?: EnumConditionFilter<'Car'> | $Enums.Condition;
      price?: IntFilter<'Car'> | number;
      firstRegistration?: StringFilter<'Car'> | string;
      mileage?: IntFilter<'Car'> | number;
      fuelType?: EnumFuelTypeFilter<'Car'> | $Enums.FuelType;
      power?: IntFilter<'Car'> | number;
      engineCapacity?: IntFilter<'Car'> | number;
      drivetrain?: EnumDrivetrainFilter<'Car'> | $Enums.Drivetrain;
      transmission?: EnumTransmissionFilter<'Car'> | $Enums.Transmission;
      accidentFree?: BoolFilter<'Car'> | boolean;
      description?: StringFilter<'Car'> | string;
      sold?: BoolFilter<'Car'> | boolean;
      visible?: BoolFilter<'Car'> | boolean;
      createdAt?: DateTimeFilter<'Car'> | Date | string;
      updatedAt?: DateTimeFilter<'Car'> | Date | string;
      adminId?: StringNullableFilter<'Car'> | string | null;
      images?: ImageListRelationFilter;
      inquiries?: InquiryListRelationFilter;
      admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null;
    },
    'id' | 'vin'
  >;

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    vehicleType?: SortOrder;
    seats?: SortOrder;
    doors?: SortOrder;
    condition?: SortOrder;
    price?: SortOrder;
    firstRegistration?: SortOrder;
    mileage?: SortOrder;
    fuelType?: SortOrder;
    power?: SortOrder;
    engineCapacity?: SortOrder;
    drivetrain?: SortOrder;
    transmission?: SortOrder;
    vin?: SortOrder;
    accidentFree?: SortOrder;
    description?: SortOrder;
    sold?: SortOrder;
    visible?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    adminId?: SortOrderInput | SortOrder;
    _count?: CarCountOrderByAggregateInput;
    _avg?: CarAvgOrderByAggregateInput;
    _max?: CarMaxOrderByAggregateInput;
    _min?: CarMinOrderByAggregateInput;
    _sum?: CarSumOrderByAggregateInput;
  };

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[];
    OR?: CarScalarWhereWithAggregatesInput[];
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Car'> | string;
    make?: StringWithAggregatesFilter<'Car'> | string;
    model?: StringWithAggregatesFilter<'Car'> | string;
    vehicleType?: EnumVehicleTypeWithAggregatesFilter<'Car'> | $Enums.VehicleType;
    seats?: IntWithAggregatesFilter<'Car'> | number;
    doors?: IntWithAggregatesFilter<'Car'> | number;
    condition?: EnumConditionWithAggregatesFilter<'Car'> | $Enums.Condition;
    price?: IntWithAggregatesFilter<'Car'> | number;
    firstRegistration?: StringWithAggregatesFilter<'Car'> | string;
    mileage?: IntWithAggregatesFilter<'Car'> | number;
    fuelType?: EnumFuelTypeWithAggregatesFilter<'Car'> | $Enums.FuelType;
    power?: IntWithAggregatesFilter<'Car'> | number;
    engineCapacity?: IntWithAggregatesFilter<'Car'> | number;
    drivetrain?: EnumDrivetrainWithAggregatesFilter<'Car'> | $Enums.Drivetrain;
    transmission?: EnumTransmissionWithAggregatesFilter<'Car'> | $Enums.Transmission;
    vin?: StringWithAggregatesFilter<'Car'> | string;
    accidentFree?: BoolWithAggregatesFilter<'Car'> | boolean;
    description?: StringWithAggregatesFilter<'Car'> | string;
    sold?: BoolWithAggregatesFilter<'Car'> | boolean;
    visible?: BoolWithAggregatesFilter<'Car'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'Car'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Car'> | Date | string;
    adminId?: StringNullableWithAggregatesFilter<'Car'> | string | null;
  };

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[];
    OR?: ImageWhereInput[];
    NOT?: ImageWhereInput | ImageWhereInput[];
    id?: StringFilter<'Image'> | string;
    url?: StringFilter<'Image'> | string;
    createdAt?: DateTimeFilter<'Image'> | Date | string;
    carId?: StringFilter<'Image'> | string;
    car?: XOR<CarScalarRelationFilter, CarWhereInput>;
  };

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder;
    url?: SortOrder;
    createdAt?: SortOrder;
    carId?: SortOrder;
    car?: CarOrderByWithRelationInput;
  };

  export type ImageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ImageWhereInput | ImageWhereInput[];
      OR?: ImageWhereInput[];
      NOT?: ImageWhereInput | ImageWhereInput[];
      url?: StringFilter<'Image'> | string;
      createdAt?: DateTimeFilter<'Image'> | Date | string;
      carId?: StringFilter<'Image'> | string;
      car?: XOR<CarScalarRelationFilter, CarWhereInput>;
    },
    'id'
  >;

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder;
    url?: SortOrder;
    createdAt?: SortOrder;
    carId?: SortOrder;
    _count?: ImageCountOrderByAggregateInput;
    _max?: ImageMaxOrderByAggregateInput;
    _min?: ImageMinOrderByAggregateInput;
  };

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[];
    OR?: ImageScalarWhereWithAggregatesInput[];
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Image'> | string;
    url?: StringWithAggregatesFilter<'Image'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Image'> | Date | string;
    carId?: StringWithAggregatesFilter<'Image'> | string;
  };

  export type InquiryWhereInput = {
    AND?: InquiryWhereInput | InquiryWhereInput[];
    OR?: InquiryWhereInput[];
    NOT?: InquiryWhereInput | InquiryWhereInput[];
    id?: StringFilter<'Inquiry'> | string;
    message?: StringFilter<'Inquiry'> | string;
    phone?: StringNullableFilter<'Inquiry'> | string | null;
    email?: StringNullableFilter<'Inquiry'> | string | null;
    createdAt?: DateTimeFilter<'Inquiry'> | Date | string;
    carId?: StringFilter<'Inquiry'> | string;
    car?: XOR<CarScalarRelationFilter, CarWhereInput>;
  };

  export type InquiryOrderByWithRelationInput = {
    id?: SortOrder;
    message?: SortOrder;
    phone?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    carId?: SortOrder;
    car?: CarOrderByWithRelationInput;
  };

  export type InquiryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: InquiryWhereInput | InquiryWhereInput[];
      OR?: InquiryWhereInput[];
      NOT?: InquiryWhereInput | InquiryWhereInput[];
      message?: StringFilter<'Inquiry'> | string;
      phone?: StringNullableFilter<'Inquiry'> | string | null;
      email?: StringNullableFilter<'Inquiry'> | string | null;
      createdAt?: DateTimeFilter<'Inquiry'> | Date | string;
      carId?: StringFilter<'Inquiry'> | string;
      car?: XOR<CarScalarRelationFilter, CarWhereInput>;
    },
    'id'
  >;

  export type InquiryOrderByWithAggregationInput = {
    id?: SortOrder;
    message?: SortOrder;
    phone?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    carId?: SortOrder;
    _count?: InquiryCountOrderByAggregateInput;
    _max?: InquiryMaxOrderByAggregateInput;
    _min?: InquiryMinOrderByAggregateInput;
  };

  export type InquiryScalarWhereWithAggregatesInput = {
    AND?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[];
    OR?: InquiryScalarWhereWithAggregatesInput[];
    NOT?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Inquiry'> | string;
    message?: StringWithAggregatesFilter<'Inquiry'> | string;
    phone?: StringNullableWithAggregatesFilter<'Inquiry'> | string | null;
    email?: StringNullableWithAggregatesFilter<'Inquiry'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'Inquiry'> | Date | string;
    carId?: StringWithAggregatesFilter<'Inquiry'> | string;
  };

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[];
    OR?: AdminWhereInput[];
    NOT?: AdminWhereInput | AdminWhereInput[];
    id?: StringFilter<'Admin'> | string;
    email?: StringFilter<'Admin'> | string;
    password?: StringFilter<'Admin'> | string;
    name?: StringNullableFilter<'Admin'> | string | null;
    createdAt?: DateTimeFilter<'Admin'> | Date | string;
    updatedAt?: DateTimeFilter<'Admin'> | Date | string;
    auditLogs?: AuditLogListRelationFilter;
    cars?: CarListRelationFilter;
  };

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    auditLogs?: AuditLogOrderByRelationAggregateInput;
    cars?: CarOrderByRelationAggregateInput;
  };

  export type AdminWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: AdminWhereInput | AdminWhereInput[];
      OR?: AdminWhereInput[];
      NOT?: AdminWhereInput | AdminWhereInput[];
      password?: StringFilter<'Admin'> | string;
      name?: StringNullableFilter<'Admin'> | string | null;
      createdAt?: DateTimeFilter<'Admin'> | Date | string;
      updatedAt?: DateTimeFilter<'Admin'> | Date | string;
      auditLogs?: AuditLogListRelationFilter;
      cars?: CarListRelationFilter;
    },
    'id' | 'email'
  >;

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: AdminCountOrderByAggregateInput;
    _max?: AdminMaxOrderByAggregateInput;
    _min?: AdminMinOrderByAggregateInput;
  };

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[];
    OR?: AdminScalarWhereWithAggregatesInput[];
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Admin'> | string;
    email?: StringWithAggregatesFilter<'Admin'> | string;
    password?: StringWithAggregatesFilter<'Admin'> | string;
    name?: StringNullableWithAggregatesFilter<'Admin'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'Admin'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Admin'> | Date | string;
  };

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[];
    OR?: AuditLogWhereInput[];
    NOT?: AuditLogWhereInput | AuditLogWhereInput[];
    id?: StringFilter<'AuditLog'> | string;
    action?: StringFilter<'AuditLog'> | string;
    createdAt?: DateTimeFilter<'AuditLog'> | Date | string;
    adminId?: StringFilter<'AuditLog'> | string;
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>;
  };

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder;
    action?: SortOrder;
    createdAt?: SortOrder;
    adminId?: SortOrder;
    admin?: AdminOrderByWithRelationInput;
  };

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AuditLogWhereInput | AuditLogWhereInput[];
      OR?: AuditLogWhereInput[];
      NOT?: AuditLogWhereInput | AuditLogWhereInput[];
      action?: StringFilter<'AuditLog'> | string;
      createdAt?: DateTimeFilter<'AuditLog'> | Date | string;
      adminId?: StringFilter<'AuditLog'> | string;
      admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>;
    },
    'id'
  >;

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder;
    action?: SortOrder;
    createdAt?: SortOrder;
    adminId?: SortOrder;
    _count?: AuditLogCountOrderByAggregateInput;
    _max?: AuditLogMaxOrderByAggregateInput;
    _min?: AuditLogMinOrderByAggregateInput;
  };

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[];
    OR?: AuditLogScalarWhereWithAggregatesInput[];
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'AuditLog'> | string;
    action?: StringWithAggregatesFilter<'AuditLog'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'AuditLog'> | Date | string;
    adminId?: StringWithAggregatesFilter<'AuditLog'> | string;
  };

  export type CarCreateInput = {
    id?: string;
    make: string;
    model: string;
    vehicleType: $Enums.VehicleType;
    seats: number;
    doors: number;
    condition: $Enums.Condition;
    price: number;
    firstRegistration: string;
    mileage: number;
    fuelType: $Enums.FuelType;
    power: number;
    engineCapacity: number;
    drivetrain: $Enums.Drivetrain;
    transmission: $Enums.Transmission;
    vin: string;
    accidentFree: boolean;
    description: string;
    sold?: boolean;
    visible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: ImageCreateNestedManyWithoutCarInput;
    inquiries?: InquiryCreateNestedManyWithoutCarInput;
    admin?: AdminCreateNestedOneWithoutCarsInput;
  };

  export type CarUncheckedCreateInput = {
    id?: string;
    make: string;
    model: string;
    vehicleType: $Enums.VehicleType;
    seats: number;
    doors: number;
    condition: $Enums.Condition;
    price: number;
    firstRegistration: string;
    mileage: number;
    fuelType: $Enums.FuelType;
    power: number;
    engineCapacity: number;
    drivetrain: $Enums.Drivetrain;
    transmission: $Enums.Transmission;
    vin: string;
    accidentFree: boolean;
    description: string;
    sold?: boolean;
    visible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    adminId?: string | null;
    images?: ImageUncheckedCreateNestedManyWithoutCarInput;
    inquiries?: InquiryUncheckedCreateNestedManyWithoutCarInput;
  };

  export type CarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    seats?: IntFieldUpdateOperationsInput | number;
    doors?: IntFieldUpdateOperationsInput | number;
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition;
    price?: IntFieldUpdateOperationsInput | number;
    firstRegistration?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    power?: IntFieldUpdateOperationsInput | number;
    engineCapacity?: IntFieldUpdateOperationsInput | number;
    drivetrain?: EnumDrivetrainFieldUpdateOperationsInput | $Enums.Drivetrain;
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission;
    vin?: StringFieldUpdateOperationsInput | string;
    accidentFree?: BoolFieldUpdateOperationsInput | boolean;
    description?: StringFieldUpdateOperationsInput | string;
    sold?: BoolFieldUpdateOperationsInput | boolean;
    visible?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    images?: ImageUpdateManyWithoutCarNestedInput;
    inquiries?: InquiryUpdateManyWithoutCarNestedInput;
    admin?: AdminUpdateOneWithoutCarsNestedInput;
  };

  export type CarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    seats?: IntFieldUpdateOperationsInput | number;
    doors?: IntFieldUpdateOperationsInput | number;
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition;
    price?: IntFieldUpdateOperationsInput | number;
    firstRegistration?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    power?: IntFieldUpdateOperationsInput | number;
    engineCapacity?: IntFieldUpdateOperationsInput | number;
    drivetrain?: EnumDrivetrainFieldUpdateOperationsInput | $Enums.Drivetrain;
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission;
    vin?: StringFieldUpdateOperationsInput | string;
    accidentFree?: BoolFieldUpdateOperationsInput | boolean;
    description?: StringFieldUpdateOperationsInput | string;
    sold?: BoolFieldUpdateOperationsInput | boolean;
    visible?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    adminId?: NullableStringFieldUpdateOperationsInput | string | null;
    images?: ImageUncheckedUpdateManyWithoutCarNestedInput;
    inquiries?: InquiryUncheckedUpdateManyWithoutCarNestedInput;
  };

  export type CarCreateManyInput = {
    id?: string;
    make: string;
    model: string;
    vehicleType: $Enums.VehicleType;
    seats: number;
    doors: number;
    condition: $Enums.Condition;
    price: number;
    firstRegistration: string;
    mileage: number;
    fuelType: $Enums.FuelType;
    power: number;
    engineCapacity: number;
    drivetrain: $Enums.Drivetrain;
    transmission: $Enums.Transmission;
    vin: string;
    accidentFree: boolean;
    description: string;
    sold?: boolean;
    visible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    adminId?: string | null;
  };

  export type CarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    seats?: IntFieldUpdateOperationsInput | number;
    doors?: IntFieldUpdateOperationsInput | number;
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition;
    price?: IntFieldUpdateOperationsInput | number;
    firstRegistration?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    power?: IntFieldUpdateOperationsInput | number;
    engineCapacity?: IntFieldUpdateOperationsInput | number;
    drivetrain?: EnumDrivetrainFieldUpdateOperationsInput | $Enums.Drivetrain;
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission;
    vin?: StringFieldUpdateOperationsInput | string;
    accidentFree?: BoolFieldUpdateOperationsInput | boolean;
    description?: StringFieldUpdateOperationsInput | string;
    sold?: BoolFieldUpdateOperationsInput | boolean;
    visible?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    seats?: IntFieldUpdateOperationsInput | number;
    doors?: IntFieldUpdateOperationsInput | number;
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition;
    price?: IntFieldUpdateOperationsInput | number;
    firstRegistration?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    power?: IntFieldUpdateOperationsInput | number;
    engineCapacity?: IntFieldUpdateOperationsInput | number;
    drivetrain?: EnumDrivetrainFieldUpdateOperationsInput | $Enums.Drivetrain;
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission;
    vin?: StringFieldUpdateOperationsInput | string;
    accidentFree?: BoolFieldUpdateOperationsInput | boolean;
    description?: StringFieldUpdateOperationsInput | string;
    sold?: BoolFieldUpdateOperationsInput | boolean;
    visible?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    adminId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ImageCreateInput = {
    id?: string;
    url: string;
    createdAt?: Date | string;
    car: CarCreateNestedOneWithoutImagesInput;
  };

  export type ImageUncheckedCreateInput = {
    id?: string;
    url: string;
    createdAt?: Date | string;
    carId: string;
  };

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    car?: CarUpdateOneRequiredWithoutImagesNestedInput;
  };

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    carId?: StringFieldUpdateOperationsInput | string;
  };

  export type ImageCreateManyInput = {
    id?: string;
    url: string;
    createdAt?: Date | string;
    carId: string;
  };

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    carId?: StringFieldUpdateOperationsInput | string;
  };

  export type InquiryCreateInput = {
    id?: string;
    message: string;
    phone?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    car: CarCreateNestedOneWithoutInquiriesInput;
  };

  export type InquiryUncheckedCreateInput = {
    id?: string;
    message: string;
    phone?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    carId: string;
  };

  export type InquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    car?: CarUpdateOneRequiredWithoutInquiriesNestedInput;
  };

  export type InquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    carId?: StringFieldUpdateOperationsInput | string;
  };

  export type InquiryCreateManyInput = {
    id?: string;
    message: string;
    phone?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    carId: string;
  };

  export type InquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    carId?: StringFieldUpdateOperationsInput | string;
  };

  export type AdminCreateInput = {
    id?: string;
    email: string;
    password: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    auditLogs?: AuditLogCreateNestedManyWithoutAdminInput;
    cars?: CarCreateNestedManyWithoutAdminInput;
  };

  export type AdminUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutAdminInput;
    cars?: CarUncheckedCreateNestedManyWithoutAdminInput;
  };

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    auditLogs?: AuditLogUpdateManyWithoutAdminNestedInput;
    cars?: CarUpdateManyWithoutAdminNestedInput;
  };

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutAdminNestedInput;
    cars?: CarUncheckedUpdateManyWithoutAdminNestedInput;
  };

  export type AdminCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogCreateInput = {
    id?: string;
    action: string;
    createdAt?: Date | string;
    admin: AdminCreateNestedOneWithoutAuditLogsInput;
  };

  export type AuditLogUncheckedCreateInput = {
    id?: string;
    action: string;
    createdAt?: Date | string;
    adminId: string;
  };

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    admin?: AdminUpdateOneRequiredWithoutAuditLogsNestedInput;
  };

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    adminId?: StringFieldUpdateOperationsInput | string;
  };

  export type AuditLogCreateManyInput = {
    id?: string;
    action: string;
    createdAt?: Date | string;
    adminId: string;
  };

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    adminId?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type EnumConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.Condition | EnumConditionFieldRefInput<$PrismaModel>;
    in?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>;
    not?: NestedEnumConditionFilter<$PrismaModel> | $Enums.Condition;
  };

  export type EnumFuelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumFuelTypeFilter<$PrismaModel> | $Enums.FuelType;
  };

  export type EnumDrivetrainFilter<$PrismaModel = never> = {
    equals?: $Enums.Drivetrain | EnumDrivetrainFieldRefInput<$PrismaModel>;
    in?: $Enums.Drivetrain[] | ListEnumDrivetrainFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Drivetrain[] | ListEnumDrivetrainFieldRefInput<$PrismaModel>;
    not?: NestedEnumDrivetrainFilter<$PrismaModel> | $Enums.Drivetrain;
  };

  export type EnumTransmissionFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel>;
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>;
    not?: NestedEnumTransmissionFilter<$PrismaModel> | $Enums.Transmission;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type ImageListRelationFilter = {
    every?: ImageWhereInput;
    some?: ImageWhereInput;
    none?: ImageWhereInput;
  };

  export type InquiryListRelationFilter = {
    every?: InquiryWhereInput;
    some?: InquiryWhereInput;
    none?: InquiryWhereInput;
  };

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null;
    isNot?: AdminWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type InquiryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    vehicleType?: SortOrder;
    seats?: SortOrder;
    doors?: SortOrder;
    condition?: SortOrder;
    price?: SortOrder;
    firstRegistration?: SortOrder;
    mileage?: SortOrder;
    fuelType?: SortOrder;
    power?: SortOrder;
    engineCapacity?: SortOrder;
    drivetrain?: SortOrder;
    transmission?: SortOrder;
    vin?: SortOrder;
    accidentFree?: SortOrder;
    description?: SortOrder;
    sold?: SortOrder;
    visible?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    adminId?: SortOrder;
  };

  export type CarAvgOrderByAggregateInput = {
    seats?: SortOrder;
    doors?: SortOrder;
    price?: SortOrder;
    mileage?: SortOrder;
    power?: SortOrder;
    engineCapacity?: SortOrder;
  };

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    vehicleType?: SortOrder;
    seats?: SortOrder;
    doors?: SortOrder;
    condition?: SortOrder;
    price?: SortOrder;
    firstRegistration?: SortOrder;
    mileage?: SortOrder;
    fuelType?: SortOrder;
    power?: SortOrder;
    engineCapacity?: SortOrder;
    drivetrain?: SortOrder;
    transmission?: SortOrder;
    vin?: SortOrder;
    accidentFree?: SortOrder;
    description?: SortOrder;
    sold?: SortOrder;
    visible?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    adminId?: SortOrder;
  };

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    vehicleType?: SortOrder;
    seats?: SortOrder;
    doors?: SortOrder;
    condition?: SortOrder;
    price?: SortOrder;
    firstRegistration?: SortOrder;
    mileage?: SortOrder;
    fuelType?: SortOrder;
    power?: SortOrder;
    engineCapacity?: SortOrder;
    drivetrain?: SortOrder;
    transmission?: SortOrder;
    vin?: SortOrder;
    accidentFree?: SortOrder;
    description?: SortOrder;
    sold?: SortOrder;
    visible?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    adminId?: SortOrder;
  };

  export type CarSumOrderByAggregateInput = {
    seats?: SortOrder;
    doors?: SortOrder;
    price?: SortOrder;
    mileage?: SortOrder;
    power?: SortOrder;
    engineCapacity?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>;
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type EnumConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Condition | EnumConditionFieldRefInput<$PrismaModel>;
    in?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>;
    not?: NestedEnumConditionWithAggregatesFilter<$PrismaModel> | $Enums.Condition;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumConditionFilter<$PrismaModel>;
    _max?: NestedEnumConditionFilter<$PrismaModel>;
  };

  export type EnumFuelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel> | $Enums.FuelType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumFuelTypeFilter<$PrismaModel>;
    _max?: NestedEnumFuelTypeFilter<$PrismaModel>;
  };

  export type EnumDrivetrainWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Drivetrain | EnumDrivetrainFieldRefInput<$PrismaModel>;
    in?: $Enums.Drivetrain[] | ListEnumDrivetrainFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Drivetrain[] | ListEnumDrivetrainFieldRefInput<$PrismaModel>;
    not?: NestedEnumDrivetrainWithAggregatesFilter<$PrismaModel> | $Enums.Drivetrain;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumDrivetrainFilter<$PrismaModel>;
    _max?: NestedEnumDrivetrainFilter<$PrismaModel>;
  };

  export type EnumTransmissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel>;
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>;
    not?: NestedEnumTransmissionWithAggregatesFilter<$PrismaModel> | $Enums.Transmission;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransmissionFilter<$PrismaModel>;
    _max?: NestedEnumTransmissionFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type CarScalarRelationFilter = {
    is?: CarWhereInput;
    isNot?: CarWhereInput;
  };

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder;
    url?: SortOrder;
    createdAt?: SortOrder;
    carId?: SortOrder;
  };

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder;
    url?: SortOrder;
    createdAt?: SortOrder;
    carId?: SortOrder;
  };

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder;
    url?: SortOrder;
    createdAt?: SortOrder;
    carId?: SortOrder;
  };

  export type InquiryCountOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    createdAt?: SortOrder;
    carId?: SortOrder;
  };

  export type InquiryMaxOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    createdAt?: SortOrder;
    carId?: SortOrder;
  };

  export type InquiryMinOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    createdAt?: SortOrder;
    carId?: SortOrder;
  };

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput;
    some?: AuditLogWhereInput;
    none?: AuditLogWhereInput;
  };

  export type CarListRelationFilter = {
    every?: CarWhereInput;
    some?: CarWhereInput;
    none?: CarWhereInput;
  };

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput;
    isNot?: AdminWhereInput;
  };

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder;
    action?: SortOrder;
    createdAt?: SortOrder;
    adminId?: SortOrder;
  };

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder;
    action?: SortOrder;
    createdAt?: SortOrder;
    adminId?: SortOrder;
  };

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder;
    action?: SortOrder;
    createdAt?: SortOrder;
    adminId?: SortOrder;
  };

  export type ImageCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<ImageCreateWithoutCarInput, ImageUncheckedCreateWithoutCarInput>
      | ImageCreateWithoutCarInput[]
      | ImageUncheckedCreateWithoutCarInput[];
    connectOrCreate?: ImageCreateOrConnectWithoutCarInput | ImageCreateOrConnectWithoutCarInput[];
    createMany?: ImageCreateManyCarInputEnvelope;
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
  };

  export type InquiryCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<InquiryCreateWithoutCarInput, InquiryUncheckedCreateWithoutCarInput>
      | InquiryCreateWithoutCarInput[]
      | InquiryUncheckedCreateWithoutCarInput[];
    connectOrCreate?:
      | InquiryCreateOrConnectWithoutCarInput
      | InquiryCreateOrConnectWithoutCarInput[];
    createMany?: InquiryCreateManyCarInputEnvelope;
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[];
  };

  export type AdminCreateNestedOneWithoutCarsInput = {
    create?: XOR<AdminCreateWithoutCarsInput, AdminUncheckedCreateWithoutCarsInput>;
    connectOrCreate?: AdminCreateOrConnectWithoutCarsInput;
    connect?: AdminWhereUniqueInput;
  };

  export type ImageUncheckedCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<ImageCreateWithoutCarInput, ImageUncheckedCreateWithoutCarInput>
      | ImageCreateWithoutCarInput[]
      | ImageUncheckedCreateWithoutCarInput[];
    connectOrCreate?: ImageCreateOrConnectWithoutCarInput | ImageCreateOrConnectWithoutCarInput[];
    createMany?: ImageCreateManyCarInputEnvelope;
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
  };

  export type InquiryUncheckedCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<InquiryCreateWithoutCarInput, InquiryUncheckedCreateWithoutCarInput>
      | InquiryCreateWithoutCarInput[]
      | InquiryUncheckedCreateWithoutCarInput[];
    connectOrCreate?:
      | InquiryCreateOrConnectWithoutCarInput
      | InquiryCreateOrConnectWithoutCarInput[];
    createMany?: InquiryCreateManyCarInputEnvelope;
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type EnumConditionFieldUpdateOperationsInput = {
    set?: $Enums.Condition;
  };

  export type EnumFuelTypeFieldUpdateOperationsInput = {
    set?: $Enums.FuelType;
  };

  export type EnumDrivetrainFieldUpdateOperationsInput = {
    set?: $Enums.Drivetrain;
  };

  export type EnumTransmissionFieldUpdateOperationsInput = {
    set?: $Enums.Transmission;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type ImageUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<ImageCreateWithoutCarInput, ImageUncheckedCreateWithoutCarInput>
      | ImageCreateWithoutCarInput[]
      | ImageUncheckedCreateWithoutCarInput[];
    connectOrCreate?: ImageCreateOrConnectWithoutCarInput | ImageCreateOrConnectWithoutCarInput[];
    upsert?:
      | ImageUpsertWithWhereUniqueWithoutCarInput
      | ImageUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: ImageCreateManyCarInputEnvelope;
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    update?:
      | ImageUpdateWithWhereUniqueWithoutCarInput
      | ImageUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?:
      | ImageUpdateManyWithWhereWithoutCarInput
      | ImageUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[];
  };

  export type InquiryUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<InquiryCreateWithoutCarInput, InquiryUncheckedCreateWithoutCarInput>
      | InquiryCreateWithoutCarInput[]
      | InquiryUncheckedCreateWithoutCarInput[];
    connectOrCreate?:
      | InquiryCreateOrConnectWithoutCarInput
      | InquiryCreateOrConnectWithoutCarInput[];
    upsert?:
      | InquiryUpsertWithWhereUniqueWithoutCarInput
      | InquiryUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: InquiryCreateManyCarInputEnvelope;
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[];
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[];
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[];
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[];
    update?:
      | InquiryUpdateWithWhereUniqueWithoutCarInput
      | InquiryUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?:
      | InquiryUpdateManyWithWhereWithoutCarInput
      | InquiryUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[];
  };

  export type AdminUpdateOneWithoutCarsNestedInput = {
    create?: XOR<AdminCreateWithoutCarsInput, AdminUncheckedCreateWithoutCarsInput>;
    connectOrCreate?: AdminCreateOrConnectWithoutCarsInput;
    upsert?: AdminUpsertWithoutCarsInput;
    disconnect?: AdminWhereInput | boolean;
    delete?: AdminWhereInput | boolean;
    connect?: AdminWhereUniqueInput;
    update?: XOR<
      XOR<AdminUpdateToOneWithWhereWithoutCarsInput, AdminUpdateWithoutCarsInput>,
      AdminUncheckedUpdateWithoutCarsInput
    >;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type ImageUncheckedUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<ImageCreateWithoutCarInput, ImageUncheckedCreateWithoutCarInput>
      | ImageCreateWithoutCarInput[]
      | ImageUncheckedCreateWithoutCarInput[];
    connectOrCreate?: ImageCreateOrConnectWithoutCarInput | ImageCreateOrConnectWithoutCarInput[];
    upsert?:
      | ImageUpsertWithWhereUniqueWithoutCarInput
      | ImageUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: ImageCreateManyCarInputEnvelope;
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    update?:
      | ImageUpdateWithWhereUniqueWithoutCarInput
      | ImageUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?:
      | ImageUpdateManyWithWhereWithoutCarInput
      | ImageUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[];
  };

  export type InquiryUncheckedUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<InquiryCreateWithoutCarInput, InquiryUncheckedCreateWithoutCarInput>
      | InquiryCreateWithoutCarInput[]
      | InquiryUncheckedCreateWithoutCarInput[];
    connectOrCreate?:
      | InquiryCreateOrConnectWithoutCarInput
      | InquiryCreateOrConnectWithoutCarInput[];
    upsert?:
      | InquiryUpsertWithWhereUniqueWithoutCarInput
      | InquiryUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: InquiryCreateManyCarInputEnvelope;
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[];
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[];
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[];
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[];
    update?:
      | InquiryUpdateWithWhereUniqueWithoutCarInput
      | InquiryUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?:
      | InquiryUpdateManyWithWhereWithoutCarInput
      | InquiryUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[];
  };

  export type CarCreateNestedOneWithoutImagesInput = {
    create?: XOR<CarCreateWithoutImagesInput, CarUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: CarCreateOrConnectWithoutImagesInput;
    connect?: CarWhereUniqueInput;
  };

  export type CarUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<CarCreateWithoutImagesInput, CarUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: CarCreateOrConnectWithoutImagesInput;
    upsert?: CarUpsertWithoutImagesInput;
    connect?: CarWhereUniqueInput;
    update?: XOR<
      XOR<CarUpdateToOneWithWhereWithoutImagesInput, CarUpdateWithoutImagesInput>,
      CarUncheckedUpdateWithoutImagesInput
    >;
  };

  export type CarCreateNestedOneWithoutInquiriesInput = {
    create?: XOR<CarCreateWithoutInquiriesInput, CarUncheckedCreateWithoutInquiriesInput>;
    connectOrCreate?: CarCreateOrConnectWithoutInquiriesInput;
    connect?: CarWhereUniqueInput;
  };

  export type CarUpdateOneRequiredWithoutInquiriesNestedInput = {
    create?: XOR<CarCreateWithoutInquiriesInput, CarUncheckedCreateWithoutInquiriesInput>;
    connectOrCreate?: CarCreateOrConnectWithoutInquiriesInput;
    upsert?: CarUpsertWithoutInquiriesInput;
    connect?: CarWhereUniqueInput;
    update?: XOR<
      XOR<CarUpdateToOneWithWhereWithoutInquiriesInput, CarUpdateWithoutInquiriesInput>,
      CarUncheckedUpdateWithoutInquiriesInput
    >;
  };

  export type AuditLogCreateNestedManyWithoutAdminInput = {
    create?:
      | XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput>
      | AuditLogCreateWithoutAdminInput[]
      | AuditLogUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutAdminInput
      | AuditLogCreateOrConnectWithoutAdminInput[];
    createMany?: AuditLogCreateManyAdminInputEnvelope;
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
  };

  export type CarCreateNestedManyWithoutAdminInput = {
    create?:
      | XOR<CarCreateWithoutAdminInput, CarUncheckedCreateWithoutAdminInput>
      | CarCreateWithoutAdminInput[]
      | CarUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: CarCreateOrConnectWithoutAdminInput | CarCreateOrConnectWithoutAdminInput[];
    createMany?: CarCreateManyAdminInputEnvelope;
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[];
  };

  export type AuditLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?:
      | XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput>
      | AuditLogCreateWithoutAdminInput[]
      | AuditLogUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutAdminInput
      | AuditLogCreateOrConnectWithoutAdminInput[];
    createMany?: AuditLogCreateManyAdminInputEnvelope;
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
  };

  export type CarUncheckedCreateNestedManyWithoutAdminInput = {
    create?:
      | XOR<CarCreateWithoutAdminInput, CarUncheckedCreateWithoutAdminInput>
      | CarCreateWithoutAdminInput[]
      | CarUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: CarCreateOrConnectWithoutAdminInput | CarCreateOrConnectWithoutAdminInput[];
    createMany?: CarCreateManyAdminInputEnvelope;
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[];
  };

  export type AuditLogUpdateManyWithoutAdminNestedInput = {
    create?:
      | XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput>
      | AuditLogCreateWithoutAdminInput[]
      | AuditLogUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutAdminInput
      | AuditLogCreateOrConnectWithoutAdminInput[];
    upsert?:
      | AuditLogUpsertWithWhereUniqueWithoutAdminInput
      | AuditLogUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: AuditLogCreateManyAdminInputEnvelope;
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    update?:
      | AuditLogUpdateWithWhereUniqueWithoutAdminInput
      | AuditLogUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?:
      | AuditLogUpdateManyWithWhereWithoutAdminInput
      | AuditLogUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
  };

  export type CarUpdateManyWithoutAdminNestedInput = {
    create?:
      | XOR<CarCreateWithoutAdminInput, CarUncheckedCreateWithoutAdminInput>
      | CarCreateWithoutAdminInput[]
      | CarUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: CarCreateOrConnectWithoutAdminInput | CarCreateOrConnectWithoutAdminInput[];
    upsert?:
      | CarUpsertWithWhereUniqueWithoutAdminInput
      | CarUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: CarCreateManyAdminInputEnvelope;
    set?: CarWhereUniqueInput | CarWhereUniqueInput[];
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[];
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[];
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[];
    update?:
      | CarUpdateWithWhereUniqueWithoutAdminInput
      | CarUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?:
      | CarUpdateManyWithWhereWithoutAdminInput
      | CarUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[];
  };

  export type AuditLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?:
      | XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput>
      | AuditLogCreateWithoutAdminInput[]
      | AuditLogUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutAdminInput
      | AuditLogCreateOrConnectWithoutAdminInput[];
    upsert?:
      | AuditLogUpsertWithWhereUniqueWithoutAdminInput
      | AuditLogUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: AuditLogCreateManyAdminInputEnvelope;
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    update?:
      | AuditLogUpdateWithWhereUniqueWithoutAdminInput
      | AuditLogUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?:
      | AuditLogUpdateManyWithWhereWithoutAdminInput
      | AuditLogUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
  };

  export type CarUncheckedUpdateManyWithoutAdminNestedInput = {
    create?:
      | XOR<CarCreateWithoutAdminInput, CarUncheckedCreateWithoutAdminInput>
      | CarCreateWithoutAdminInput[]
      | CarUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: CarCreateOrConnectWithoutAdminInput | CarCreateOrConnectWithoutAdminInput[];
    upsert?:
      | CarUpsertWithWhereUniqueWithoutAdminInput
      | CarUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: CarCreateManyAdminInputEnvelope;
    set?: CarWhereUniqueInput | CarWhereUniqueInput[];
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[];
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[];
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[];
    update?:
      | CarUpdateWithWhereUniqueWithoutAdminInput
      | CarUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?:
      | CarUpdateManyWithWhereWithoutAdminInput
      | CarUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[];
  };

  export type AdminCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<AdminCreateWithoutAuditLogsInput, AdminUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: AdminCreateOrConnectWithoutAuditLogsInput;
    connect?: AdminWhereUniqueInput;
  };

  export type AdminUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<AdminCreateWithoutAuditLogsInput, AdminUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: AdminCreateOrConnectWithoutAuditLogsInput;
    upsert?: AdminUpsertWithoutAuditLogsInput;
    connect?: AdminWhereUniqueInput;
    update?: XOR<
      XOR<AdminUpdateToOneWithWhereWithoutAuditLogsInput, AdminUpdateWithoutAuditLogsInput>,
      AdminUncheckedUpdateWithoutAuditLogsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedEnumConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.Condition | EnumConditionFieldRefInput<$PrismaModel>;
    in?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>;
    not?: NestedEnumConditionFilter<$PrismaModel> | $Enums.Condition;
  };

  export type NestedEnumFuelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumFuelTypeFilter<$PrismaModel> | $Enums.FuelType;
  };

  export type NestedEnumDrivetrainFilter<$PrismaModel = never> = {
    equals?: $Enums.Drivetrain | EnumDrivetrainFieldRefInput<$PrismaModel>;
    in?: $Enums.Drivetrain[] | ListEnumDrivetrainFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Drivetrain[] | ListEnumDrivetrainFieldRefInput<$PrismaModel>;
    not?: NestedEnumDrivetrainFilter<$PrismaModel> | $Enums.Drivetrain;
  };

  export type NestedEnumTransmissionFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel>;
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>;
    not?: NestedEnumTransmissionFilter<$PrismaModel> | $Enums.Transmission;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>;
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedEnumConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Condition | EnumConditionFieldRefInput<$PrismaModel>;
    in?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>;
    not?: NestedEnumConditionWithAggregatesFilter<$PrismaModel> | $Enums.Condition;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumConditionFilter<$PrismaModel>;
    _max?: NestedEnumConditionFilter<$PrismaModel>;
  };

  export type NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel> | $Enums.FuelType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumFuelTypeFilter<$PrismaModel>;
    _max?: NestedEnumFuelTypeFilter<$PrismaModel>;
  };

  export type NestedEnumDrivetrainWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Drivetrain | EnumDrivetrainFieldRefInput<$PrismaModel>;
    in?: $Enums.Drivetrain[] | ListEnumDrivetrainFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Drivetrain[] | ListEnumDrivetrainFieldRefInput<$PrismaModel>;
    not?: NestedEnumDrivetrainWithAggregatesFilter<$PrismaModel> | $Enums.Drivetrain;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumDrivetrainFilter<$PrismaModel>;
    _max?: NestedEnumDrivetrainFilter<$PrismaModel>;
  };

  export type NestedEnumTransmissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel>;
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>;
    not?: NestedEnumTransmissionWithAggregatesFilter<$PrismaModel> | $Enums.Transmission;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransmissionFilter<$PrismaModel>;
    _max?: NestedEnumTransmissionFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type ImageCreateWithoutCarInput = {
    id?: string;
    url: string;
    createdAt?: Date | string;
  };

  export type ImageUncheckedCreateWithoutCarInput = {
    id?: string;
    url: string;
    createdAt?: Date | string;
  };

  export type ImageCreateOrConnectWithoutCarInput = {
    where: ImageWhereUniqueInput;
    create: XOR<ImageCreateWithoutCarInput, ImageUncheckedCreateWithoutCarInput>;
  };

  export type ImageCreateManyCarInputEnvelope = {
    data: ImageCreateManyCarInput | ImageCreateManyCarInput[];
    skipDuplicates?: boolean;
  };

  export type InquiryCreateWithoutCarInput = {
    id?: string;
    message: string;
    phone?: string | null;
    email?: string | null;
    createdAt?: Date | string;
  };

  export type InquiryUncheckedCreateWithoutCarInput = {
    id?: string;
    message: string;
    phone?: string | null;
    email?: string | null;
    createdAt?: Date | string;
  };

  export type InquiryCreateOrConnectWithoutCarInput = {
    where: InquiryWhereUniqueInput;
    create: XOR<InquiryCreateWithoutCarInput, InquiryUncheckedCreateWithoutCarInput>;
  };

  export type InquiryCreateManyCarInputEnvelope = {
    data: InquiryCreateManyCarInput | InquiryCreateManyCarInput[];
    skipDuplicates?: boolean;
  };

  export type AdminCreateWithoutCarsInput = {
    id?: string;
    email: string;
    password: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    auditLogs?: AuditLogCreateNestedManyWithoutAdminInput;
  };

  export type AdminUncheckedCreateWithoutCarsInput = {
    id?: string;
    email: string;
    password: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutAdminInput;
  };

  export type AdminCreateOrConnectWithoutCarsInput = {
    where: AdminWhereUniqueInput;
    create: XOR<AdminCreateWithoutCarsInput, AdminUncheckedCreateWithoutCarsInput>;
  };

  export type ImageUpsertWithWhereUniqueWithoutCarInput = {
    where: ImageWhereUniqueInput;
    update: XOR<ImageUpdateWithoutCarInput, ImageUncheckedUpdateWithoutCarInput>;
    create: XOR<ImageCreateWithoutCarInput, ImageUncheckedCreateWithoutCarInput>;
  };

  export type ImageUpdateWithWhereUniqueWithoutCarInput = {
    where: ImageWhereUniqueInput;
    data: XOR<ImageUpdateWithoutCarInput, ImageUncheckedUpdateWithoutCarInput>;
  };

  export type ImageUpdateManyWithWhereWithoutCarInput = {
    where: ImageScalarWhereInput;
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutCarInput>;
  };

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[];
    OR?: ImageScalarWhereInput[];
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[];
    id?: StringFilter<'Image'> | string;
    url?: StringFilter<'Image'> | string;
    createdAt?: DateTimeFilter<'Image'> | Date | string;
    carId?: StringFilter<'Image'> | string;
  };

  export type InquiryUpsertWithWhereUniqueWithoutCarInput = {
    where: InquiryWhereUniqueInput;
    update: XOR<InquiryUpdateWithoutCarInput, InquiryUncheckedUpdateWithoutCarInput>;
    create: XOR<InquiryCreateWithoutCarInput, InquiryUncheckedCreateWithoutCarInput>;
  };

  export type InquiryUpdateWithWhereUniqueWithoutCarInput = {
    where: InquiryWhereUniqueInput;
    data: XOR<InquiryUpdateWithoutCarInput, InquiryUncheckedUpdateWithoutCarInput>;
  };

  export type InquiryUpdateManyWithWhereWithoutCarInput = {
    where: InquiryScalarWhereInput;
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyWithoutCarInput>;
  };

  export type InquiryScalarWhereInput = {
    AND?: InquiryScalarWhereInput | InquiryScalarWhereInput[];
    OR?: InquiryScalarWhereInput[];
    NOT?: InquiryScalarWhereInput | InquiryScalarWhereInput[];
    id?: StringFilter<'Inquiry'> | string;
    message?: StringFilter<'Inquiry'> | string;
    phone?: StringNullableFilter<'Inquiry'> | string | null;
    email?: StringNullableFilter<'Inquiry'> | string | null;
    createdAt?: DateTimeFilter<'Inquiry'> | Date | string;
    carId?: StringFilter<'Inquiry'> | string;
  };

  export type AdminUpsertWithoutCarsInput = {
    update: XOR<AdminUpdateWithoutCarsInput, AdminUncheckedUpdateWithoutCarsInput>;
    create: XOR<AdminCreateWithoutCarsInput, AdminUncheckedCreateWithoutCarsInput>;
    where?: AdminWhereInput;
  };

  export type AdminUpdateToOneWithWhereWithoutCarsInput = {
    where?: AdminWhereInput;
    data: XOR<AdminUpdateWithoutCarsInput, AdminUncheckedUpdateWithoutCarsInput>;
  };

  export type AdminUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    auditLogs?: AuditLogUpdateManyWithoutAdminNestedInput;
  };

  export type AdminUncheckedUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutAdminNestedInput;
  };

  export type CarCreateWithoutImagesInput = {
    id?: string;
    make: string;
    model: string;
    vehicleType: $Enums.VehicleType;
    seats: number;
    doors: number;
    condition: $Enums.Condition;
    price: number;
    firstRegistration: string;
    mileage: number;
    fuelType: $Enums.FuelType;
    power: number;
    engineCapacity: number;
    drivetrain: $Enums.Drivetrain;
    transmission: $Enums.Transmission;
    vin: string;
    accidentFree: boolean;
    description: string;
    sold?: boolean;
    visible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inquiries?: InquiryCreateNestedManyWithoutCarInput;
    admin?: AdminCreateNestedOneWithoutCarsInput;
  };

  export type CarUncheckedCreateWithoutImagesInput = {
    id?: string;
    make: string;
    model: string;
    vehicleType: $Enums.VehicleType;
    seats: number;
    doors: number;
    condition: $Enums.Condition;
    price: number;
    firstRegistration: string;
    mileage: number;
    fuelType: $Enums.FuelType;
    power: number;
    engineCapacity: number;
    drivetrain: $Enums.Drivetrain;
    transmission: $Enums.Transmission;
    vin: string;
    accidentFree: boolean;
    description: string;
    sold?: boolean;
    visible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    adminId?: string | null;
    inquiries?: InquiryUncheckedCreateNestedManyWithoutCarInput;
  };

  export type CarCreateOrConnectWithoutImagesInput = {
    where: CarWhereUniqueInput;
    create: XOR<CarCreateWithoutImagesInput, CarUncheckedCreateWithoutImagesInput>;
  };

  export type CarUpsertWithoutImagesInput = {
    update: XOR<CarUpdateWithoutImagesInput, CarUncheckedUpdateWithoutImagesInput>;
    create: XOR<CarCreateWithoutImagesInput, CarUncheckedCreateWithoutImagesInput>;
    where?: CarWhereInput;
  };

  export type CarUpdateToOneWithWhereWithoutImagesInput = {
    where?: CarWhereInput;
    data: XOR<CarUpdateWithoutImagesInput, CarUncheckedUpdateWithoutImagesInput>;
  };

  export type CarUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    seats?: IntFieldUpdateOperationsInput | number;
    doors?: IntFieldUpdateOperationsInput | number;
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition;
    price?: IntFieldUpdateOperationsInput | number;
    firstRegistration?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    power?: IntFieldUpdateOperationsInput | number;
    engineCapacity?: IntFieldUpdateOperationsInput | number;
    drivetrain?: EnumDrivetrainFieldUpdateOperationsInput | $Enums.Drivetrain;
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission;
    vin?: StringFieldUpdateOperationsInput | string;
    accidentFree?: BoolFieldUpdateOperationsInput | boolean;
    description?: StringFieldUpdateOperationsInput | string;
    sold?: BoolFieldUpdateOperationsInput | boolean;
    visible?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inquiries?: InquiryUpdateManyWithoutCarNestedInput;
    admin?: AdminUpdateOneWithoutCarsNestedInput;
  };

  export type CarUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    seats?: IntFieldUpdateOperationsInput | number;
    doors?: IntFieldUpdateOperationsInput | number;
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition;
    price?: IntFieldUpdateOperationsInput | number;
    firstRegistration?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    power?: IntFieldUpdateOperationsInput | number;
    engineCapacity?: IntFieldUpdateOperationsInput | number;
    drivetrain?: EnumDrivetrainFieldUpdateOperationsInput | $Enums.Drivetrain;
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission;
    vin?: StringFieldUpdateOperationsInput | string;
    accidentFree?: BoolFieldUpdateOperationsInput | boolean;
    description?: StringFieldUpdateOperationsInput | string;
    sold?: BoolFieldUpdateOperationsInput | boolean;
    visible?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    adminId?: NullableStringFieldUpdateOperationsInput | string | null;
    inquiries?: InquiryUncheckedUpdateManyWithoutCarNestedInput;
  };

  export type CarCreateWithoutInquiriesInput = {
    id?: string;
    make: string;
    model: string;
    vehicleType: $Enums.VehicleType;
    seats: number;
    doors: number;
    condition: $Enums.Condition;
    price: number;
    firstRegistration: string;
    mileage: number;
    fuelType: $Enums.FuelType;
    power: number;
    engineCapacity: number;
    drivetrain: $Enums.Drivetrain;
    transmission: $Enums.Transmission;
    vin: string;
    accidentFree: boolean;
    description: string;
    sold?: boolean;
    visible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: ImageCreateNestedManyWithoutCarInput;
    admin?: AdminCreateNestedOneWithoutCarsInput;
  };

  export type CarUncheckedCreateWithoutInquiriesInput = {
    id?: string;
    make: string;
    model: string;
    vehicleType: $Enums.VehicleType;
    seats: number;
    doors: number;
    condition: $Enums.Condition;
    price: number;
    firstRegistration: string;
    mileage: number;
    fuelType: $Enums.FuelType;
    power: number;
    engineCapacity: number;
    drivetrain: $Enums.Drivetrain;
    transmission: $Enums.Transmission;
    vin: string;
    accidentFree: boolean;
    description: string;
    sold?: boolean;
    visible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    adminId?: string | null;
    images?: ImageUncheckedCreateNestedManyWithoutCarInput;
  };

  export type CarCreateOrConnectWithoutInquiriesInput = {
    where: CarWhereUniqueInput;
    create: XOR<CarCreateWithoutInquiriesInput, CarUncheckedCreateWithoutInquiriesInput>;
  };

  export type CarUpsertWithoutInquiriesInput = {
    update: XOR<CarUpdateWithoutInquiriesInput, CarUncheckedUpdateWithoutInquiriesInput>;
    create: XOR<CarCreateWithoutInquiriesInput, CarUncheckedCreateWithoutInquiriesInput>;
    where?: CarWhereInput;
  };

  export type CarUpdateToOneWithWhereWithoutInquiriesInput = {
    where?: CarWhereInput;
    data: XOR<CarUpdateWithoutInquiriesInput, CarUncheckedUpdateWithoutInquiriesInput>;
  };

  export type CarUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    seats?: IntFieldUpdateOperationsInput | number;
    doors?: IntFieldUpdateOperationsInput | number;
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition;
    price?: IntFieldUpdateOperationsInput | number;
    firstRegistration?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    power?: IntFieldUpdateOperationsInput | number;
    engineCapacity?: IntFieldUpdateOperationsInput | number;
    drivetrain?: EnumDrivetrainFieldUpdateOperationsInput | $Enums.Drivetrain;
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission;
    vin?: StringFieldUpdateOperationsInput | string;
    accidentFree?: BoolFieldUpdateOperationsInput | boolean;
    description?: StringFieldUpdateOperationsInput | string;
    sold?: BoolFieldUpdateOperationsInput | boolean;
    visible?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    images?: ImageUpdateManyWithoutCarNestedInput;
    admin?: AdminUpdateOneWithoutCarsNestedInput;
  };

  export type CarUncheckedUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    seats?: IntFieldUpdateOperationsInput | number;
    doors?: IntFieldUpdateOperationsInput | number;
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition;
    price?: IntFieldUpdateOperationsInput | number;
    firstRegistration?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    power?: IntFieldUpdateOperationsInput | number;
    engineCapacity?: IntFieldUpdateOperationsInput | number;
    drivetrain?: EnumDrivetrainFieldUpdateOperationsInput | $Enums.Drivetrain;
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission;
    vin?: StringFieldUpdateOperationsInput | string;
    accidentFree?: BoolFieldUpdateOperationsInput | boolean;
    description?: StringFieldUpdateOperationsInput | string;
    sold?: BoolFieldUpdateOperationsInput | boolean;
    visible?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    adminId?: NullableStringFieldUpdateOperationsInput | string | null;
    images?: ImageUncheckedUpdateManyWithoutCarNestedInput;
  };

  export type AuditLogCreateWithoutAdminInput = {
    id?: string;
    action: string;
    createdAt?: Date | string;
  };

  export type AuditLogUncheckedCreateWithoutAdminInput = {
    id?: string;
    action: string;
    createdAt?: Date | string;
  };

  export type AuditLogCreateOrConnectWithoutAdminInput = {
    where: AuditLogWhereUniqueInput;
    create: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput>;
  };

  export type AuditLogCreateManyAdminInputEnvelope = {
    data: AuditLogCreateManyAdminInput | AuditLogCreateManyAdminInput[];
    skipDuplicates?: boolean;
  };

  export type CarCreateWithoutAdminInput = {
    id?: string;
    make: string;
    model: string;
    vehicleType: $Enums.VehicleType;
    seats: number;
    doors: number;
    condition: $Enums.Condition;
    price: number;
    firstRegistration: string;
    mileage: number;
    fuelType: $Enums.FuelType;
    power: number;
    engineCapacity: number;
    drivetrain: $Enums.Drivetrain;
    transmission: $Enums.Transmission;
    vin: string;
    accidentFree: boolean;
    description: string;
    sold?: boolean;
    visible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: ImageCreateNestedManyWithoutCarInput;
    inquiries?: InquiryCreateNestedManyWithoutCarInput;
  };

  export type CarUncheckedCreateWithoutAdminInput = {
    id?: string;
    make: string;
    model: string;
    vehicleType: $Enums.VehicleType;
    seats: number;
    doors: number;
    condition: $Enums.Condition;
    price: number;
    firstRegistration: string;
    mileage: number;
    fuelType: $Enums.FuelType;
    power: number;
    engineCapacity: number;
    drivetrain: $Enums.Drivetrain;
    transmission: $Enums.Transmission;
    vin: string;
    accidentFree: boolean;
    description: string;
    sold?: boolean;
    visible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: ImageUncheckedCreateNestedManyWithoutCarInput;
    inquiries?: InquiryUncheckedCreateNestedManyWithoutCarInput;
  };

  export type CarCreateOrConnectWithoutAdminInput = {
    where: CarWhereUniqueInput;
    create: XOR<CarCreateWithoutAdminInput, CarUncheckedCreateWithoutAdminInput>;
  };

  export type CarCreateManyAdminInputEnvelope = {
    data: CarCreateManyAdminInput | CarCreateManyAdminInput[];
    skipDuplicates?: boolean;
  };

  export type AuditLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: AuditLogWhereUniqueInput;
    update: XOR<AuditLogUpdateWithoutAdminInput, AuditLogUncheckedUpdateWithoutAdminInput>;
    create: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput>;
  };

  export type AuditLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: AuditLogWhereUniqueInput;
    data: XOR<AuditLogUpdateWithoutAdminInput, AuditLogUncheckedUpdateWithoutAdminInput>;
  };

  export type AuditLogUpdateManyWithWhereWithoutAdminInput = {
    where: AuditLogScalarWhereInput;
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutAdminInput>;
  };

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
    OR?: AuditLogScalarWhereInput[];
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
    id?: StringFilter<'AuditLog'> | string;
    action?: StringFilter<'AuditLog'> | string;
    createdAt?: DateTimeFilter<'AuditLog'> | Date | string;
    adminId?: StringFilter<'AuditLog'> | string;
  };

  export type CarUpsertWithWhereUniqueWithoutAdminInput = {
    where: CarWhereUniqueInput;
    update: XOR<CarUpdateWithoutAdminInput, CarUncheckedUpdateWithoutAdminInput>;
    create: XOR<CarCreateWithoutAdminInput, CarUncheckedCreateWithoutAdminInput>;
  };

  export type CarUpdateWithWhereUniqueWithoutAdminInput = {
    where: CarWhereUniqueInput;
    data: XOR<CarUpdateWithoutAdminInput, CarUncheckedUpdateWithoutAdminInput>;
  };

  export type CarUpdateManyWithWhereWithoutAdminInput = {
    where: CarScalarWhereInput;
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutAdminInput>;
  };

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[];
    OR?: CarScalarWhereInput[];
    NOT?: CarScalarWhereInput | CarScalarWhereInput[];
    id?: StringFilter<'Car'> | string;
    make?: StringFilter<'Car'> | string;
    model?: StringFilter<'Car'> | string;
    vehicleType?: EnumVehicleTypeFilter<'Car'> | $Enums.VehicleType;
    seats?: IntFilter<'Car'> | number;
    doors?: IntFilter<'Car'> | number;
    condition?: EnumConditionFilter<'Car'> | $Enums.Condition;
    price?: IntFilter<'Car'> | number;
    firstRegistration?: StringFilter<'Car'> | string;
    mileage?: IntFilter<'Car'> | number;
    fuelType?: EnumFuelTypeFilter<'Car'> | $Enums.FuelType;
    power?: IntFilter<'Car'> | number;
    engineCapacity?: IntFilter<'Car'> | number;
    drivetrain?: EnumDrivetrainFilter<'Car'> | $Enums.Drivetrain;
    transmission?: EnumTransmissionFilter<'Car'> | $Enums.Transmission;
    vin?: StringFilter<'Car'> | string;
    accidentFree?: BoolFilter<'Car'> | boolean;
    description?: StringFilter<'Car'> | string;
    sold?: BoolFilter<'Car'> | boolean;
    visible?: BoolFilter<'Car'> | boolean;
    createdAt?: DateTimeFilter<'Car'> | Date | string;
    updatedAt?: DateTimeFilter<'Car'> | Date | string;
    adminId?: StringNullableFilter<'Car'> | string | null;
  };

  export type AdminCreateWithoutAuditLogsInput = {
    id?: string;
    email: string;
    password: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cars?: CarCreateNestedManyWithoutAdminInput;
  };

  export type AdminUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    email: string;
    password: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cars?: CarUncheckedCreateNestedManyWithoutAdminInput;
  };

  export type AdminCreateOrConnectWithoutAuditLogsInput = {
    where: AdminWhereUniqueInput;
    create: XOR<AdminCreateWithoutAuditLogsInput, AdminUncheckedCreateWithoutAuditLogsInput>;
  };

  export type AdminUpsertWithoutAuditLogsInput = {
    update: XOR<AdminUpdateWithoutAuditLogsInput, AdminUncheckedUpdateWithoutAuditLogsInput>;
    create: XOR<AdminCreateWithoutAuditLogsInput, AdminUncheckedCreateWithoutAuditLogsInput>;
    where?: AdminWhereInput;
  };

  export type AdminUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: AdminWhereInput;
    data: XOR<AdminUpdateWithoutAuditLogsInput, AdminUncheckedUpdateWithoutAuditLogsInput>;
  };

  export type AdminUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cars?: CarUpdateManyWithoutAdminNestedInput;
  };

  export type AdminUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cars?: CarUncheckedUpdateManyWithoutAdminNestedInput;
  };

  export type ImageCreateManyCarInput = {
    id?: string;
    url: string;
    createdAt?: Date | string;
  };

  export type InquiryCreateManyCarInput = {
    id?: string;
    message: string;
    phone?: string | null;
    email?: string | null;
    createdAt?: Date | string;
  };

  export type ImageUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ImageUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ImageUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InquiryUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InquiryUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InquiryUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogCreateManyAdminInput = {
    id?: string;
    action: string;
    createdAt?: Date | string;
  };

  export type CarCreateManyAdminInput = {
    id?: string;
    make: string;
    model: string;
    vehicleType: $Enums.VehicleType;
    seats: number;
    doors: number;
    condition: $Enums.Condition;
    price: number;
    firstRegistration: string;
    mileage: number;
    fuelType: $Enums.FuelType;
    power: number;
    engineCapacity: number;
    drivetrain: $Enums.Drivetrain;
    transmission: $Enums.Transmission;
    vin: string;
    accidentFree: boolean;
    description: string;
    sold?: boolean;
    visible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AuditLogUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    seats?: IntFieldUpdateOperationsInput | number;
    doors?: IntFieldUpdateOperationsInput | number;
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition;
    price?: IntFieldUpdateOperationsInput | number;
    firstRegistration?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    power?: IntFieldUpdateOperationsInput | number;
    engineCapacity?: IntFieldUpdateOperationsInput | number;
    drivetrain?: EnumDrivetrainFieldUpdateOperationsInput | $Enums.Drivetrain;
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission;
    vin?: StringFieldUpdateOperationsInput | string;
    accidentFree?: BoolFieldUpdateOperationsInput | boolean;
    description?: StringFieldUpdateOperationsInput | string;
    sold?: BoolFieldUpdateOperationsInput | boolean;
    visible?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    images?: ImageUpdateManyWithoutCarNestedInput;
    inquiries?: InquiryUpdateManyWithoutCarNestedInput;
  };

  export type CarUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    seats?: IntFieldUpdateOperationsInput | number;
    doors?: IntFieldUpdateOperationsInput | number;
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition;
    price?: IntFieldUpdateOperationsInput | number;
    firstRegistration?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    power?: IntFieldUpdateOperationsInput | number;
    engineCapacity?: IntFieldUpdateOperationsInput | number;
    drivetrain?: EnumDrivetrainFieldUpdateOperationsInput | $Enums.Drivetrain;
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission;
    vin?: StringFieldUpdateOperationsInput | string;
    accidentFree?: BoolFieldUpdateOperationsInput | boolean;
    description?: StringFieldUpdateOperationsInput | string;
    sold?: BoolFieldUpdateOperationsInput | boolean;
    visible?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    images?: ImageUncheckedUpdateManyWithoutCarNestedInput;
    inquiries?: InquiryUncheckedUpdateManyWithoutCarNestedInput;
  };

  export type CarUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType;
    seats?: IntFieldUpdateOperationsInput | number;
    doors?: IntFieldUpdateOperationsInput | number;
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition;
    price?: IntFieldUpdateOperationsInput | number;
    firstRegistration?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    power?: IntFieldUpdateOperationsInput | number;
    engineCapacity?: IntFieldUpdateOperationsInput | number;
    drivetrain?: EnumDrivetrainFieldUpdateOperationsInput | $Enums.Drivetrain;
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission;
    vin?: StringFieldUpdateOperationsInput | string;
    accidentFree?: BoolFieldUpdateOperationsInput | boolean;
    description?: StringFieldUpdateOperationsInput | string;
    sold?: BoolFieldUpdateOperationsInput | boolean;
    visible?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
