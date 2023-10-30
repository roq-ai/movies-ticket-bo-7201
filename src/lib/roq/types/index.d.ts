/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model event
 *
 */
export type event = $Result.DefaultSelection<Prisma.$eventPayload>;
/**
 * Model movie
 *
 */
export type movie = $Result.DefaultSelection<Prisma.$moviePayload>;
/**
 * Model review
 *
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>;
/**
 * Model ticket
 *
 */
export type ticket = $Result.DefaultSelection<Prisma.$ticketPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model vendor
 *
 */
export type vendor = $Result.DefaultSelection<Prisma.$vendorPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
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
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **event** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   */
  get event(): Prisma.eventDelegate<ExtArgs>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **movie** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Movies
   * const movies = await prisma.movie.findMany()
   * ```
   */
  get movie(): Prisma.movieDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   */
  get review(): Prisma.reviewDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **ticket** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tickets
   * const tickets = await prisma.ticket.findMany()
   * ```
   */
  get ticket(): Prisma.ticketDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **vendor** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Vendors
   * const vendors = await prisma.vendor.findMany()
   * ```
   */
  get vendor(): Prisma.vendorDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError;

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
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

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
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

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
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

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

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

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
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    event: 'event';
    movie: 'movie';
    review: 'review';
    ticket: 'ticket';
    user: 'user';
    vendor: 'vendor';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'event' | 'movie' | 'review' | 'ticket' | 'user' | 'vendor';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      event: {
        payload: Prisma.$eventPayload<ExtArgs>;
        fields: Prisma.eventFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.eventFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.eventFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>;
          };
          findFirst: {
            args: Prisma.eventFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.eventFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>;
          };
          findMany: {
            args: Prisma.eventFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>[];
          };
          create: {
            args: Prisma.eventCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>;
          };
          createMany: {
            args: Prisma.eventCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.eventDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>;
          };
          update: {
            args: Prisma.eventUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>;
          };
          deleteMany: {
            args: Prisma.eventDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.eventUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.eventUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$eventPayload>;
          };
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEvent>;
          };
          groupBy: {
            args: Prisma.eventGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EventGroupByOutputType>[];
          };
          count: {
            args: Prisma.eventCountArgs<ExtArgs>;
            result: $Utils.Optional<EventCountAggregateOutputType> | number;
          };
        };
      };
      movie: {
        payload: Prisma.$moviePayload<ExtArgs>;
        fields: Prisma.movieFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.movieFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.movieFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          findFirst: {
            args: Prisma.movieFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.movieFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          findMany: {
            args: Prisma.movieFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>[];
          };
          create: {
            args: Prisma.movieCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          createMany: {
            args: Prisma.movieCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.movieDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          update: {
            args: Prisma.movieUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          deleteMany: {
            args: Prisma.movieDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.movieUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.movieUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMovie>;
          };
          groupBy: {
            args: Prisma.movieGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MovieGroupByOutputType>[];
          };
          count: {
            args: Prisma.movieCountArgs<ExtArgs>;
            result: $Utils.Optional<MovieCountAggregateOutputType> | number;
          };
        };
      };
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>;
        fields: Prisma.reviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[];
          };
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReview>;
          };
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>;
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number;
          };
        };
      };
      ticket: {
        payload: Prisma.$ticketPayload<ExtArgs>;
        fields: Prisma.ticketFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ticketFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ticketFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          findFirst: {
            args: Prisma.ticketFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ticketFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          findMany: {
            args: Prisma.ticketFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[];
          };
          create: {
            args: Prisma.ticketCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          createMany: {
            args: Prisma.ticketCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.ticketDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          update: {
            args: Prisma.ticketUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          deleteMany: {
            args: Prisma.ticketDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ticketUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ticketUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTicket>;
          };
          groupBy: {
            args: Prisma.ticketGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TicketGroupByOutputType>[];
          };
          count: {
            args: Prisma.ticketCountArgs<ExtArgs>;
            result: $Utils.Optional<TicketCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      vendor: {
        payload: Prisma.$vendorPayload<ExtArgs>;
        fields: Prisma.vendorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.vendorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vendorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.vendorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vendorPayload>;
          };
          findFirst: {
            args: Prisma.vendorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vendorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.vendorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vendorPayload>;
          };
          findMany: {
            args: Prisma.vendorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vendorPayload>[];
          };
          create: {
            args: Prisma.vendorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vendorPayload>;
          };
          createMany: {
            args: Prisma.vendorCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.vendorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vendorPayload>;
          };
          update: {
            args: Prisma.vendorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vendorPayload>;
          };
          deleteMany: {
            args: Prisma.vendorDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.vendorUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.vendorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vendorPayload>;
          };
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVendor>;
          };
          groupBy: {
            args: Prisma.vendorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VendorGroupByOutputType>[];
          };
          count: {
            args: Prisma.vendorCountArgs<ExtArgs>;
            result: $Utils.Optional<VendorCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
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
  }

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
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
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
    | 'update'
    | 'updateMany'
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
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    ticket: number;
  };

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | EventCountOutputTypeCountTicketArgs;
  };

  // Custom InputTypes

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: ticketWhereInput;
    };

  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    review: number;
  };

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | MovieCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: reviewWhereInput;
    };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    review: number;
    ticket: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | UserCountOutputTypeCountReviewArgs;
    ticket?: boolean | UserCountOutputTypeCountTicketArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput;
  };

  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    event: number;
    movie: number;
  };

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | VendorCountOutputTypeCountEventArgs;
    movie?: boolean | VendorCountOutputTypeCountMovieArgs;
  };

  // Custom InputTypes

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: eventWhereInput;
    };

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountMovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: movieWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
  };

  export type EventMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    date: Date | null;
    location: string | null;
    vendor_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EventMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    date: Date | null;
    location: string | null;
    vendor_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EventCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    date: number;
    location: number;
    vendor_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EventMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    date?: true;
    location?: true;
    vendor_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EventMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    date?: true;
    location?: true;
    vendor_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EventCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    date?: true;
    location?: true;
    vendor_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event to aggregate.
     */
    where?: eventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of events to fetch.
     */
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: eventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned events
     **/
    _count?: true | EventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EventMaxAggregateInputType;
  };

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>;
  };

  export type eventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventWhereInput;
    orderBy?: eventOrderByWithAggregationInput | eventOrderByWithAggregationInput[];
    by: EventScalarFieldEnum[] | EventScalarFieldEnum;
    having?: eventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventCountAggregateInputType | true;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
  };

  export type EventGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    date: Date;
    location: string;
    vendor_id: string;
    created_at: Date;
    updated_at: Date;
    _count: EventCountAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
  };

  type GetEventGroupByPayload<T extends eventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EventGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EventGroupByOutputType[P]>
          : GetScalarType<T[P], EventGroupByOutputType[P]>;
      }
    >
  >;

  export type eventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      date?: boolean;
      location?: boolean;
      vendor_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      vendor?: boolean | vendorDefaultArgs<ExtArgs>;
      ticket?: boolean | event$ticketArgs<ExtArgs>;
      _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['event']
  >;

  export type eventSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    date?: boolean;
    location?: boolean;
    vendor_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type eventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | vendorDefaultArgs<ExtArgs>;
    ticket?: boolean | event$ticketArgs<ExtArgs>;
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $eventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'event';
    objects: {
      vendor: Prisma.$vendorPayload<ExtArgs>;
      ticket: Prisma.$ticketPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        date: Date;
        location: string;
        vendor_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['event']
    >;
    composites: {};
  };

  type eventGetPayload<S extends boolean | null | undefined | eventDefaultArgs> = $Result.GetResult<
    Prisma.$eventPayload,
    S
  >;

  type eventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    eventFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: EventCountAggregateInputType | true;
  };

  export interface eventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['event']; meta: { name: 'event' } };
    /**
     * Find zero or one Event that matches the filter.
     * @param {eventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends eventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, eventFindUniqueArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Event that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {eventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends eventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, eventFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends eventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, eventFindFirstArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends eventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, eventFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     *
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends eventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, eventFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Event.
     * @param {eventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     *
     **/
    create<T extends eventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, eventCreateArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Events.
     *     @param {eventCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const event = await prisma.event.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends eventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, eventCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Event.
     * @param {eventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     *
     **/
    delete<T extends eventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, eventDeleteArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Event.
     * @param {eventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends eventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, eventUpdateArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Events.
     * @param {eventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends eventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, eventDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends eventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, eventUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Event.
     * @param {eventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     **/
    upsert<T extends eventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, eventUpsertArgs<ExtArgs>>,
    ): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
     **/
    count<T extends eventCountArgs>(
      args?: Subset<T, eventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(
      args: Subset<T, EventAggregateArgs>,
    ): Prisma.PrismaPromise<GetEventAggregateType<T>>;

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventGroupByArgs} args - Group by arguments.
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
      T extends eventGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventGroupByArgs['orderBy'] }
        : { orderBy?: eventGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, eventGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the event model
     */
    readonly fields: eventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    vendor<T extends vendorDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, vendorDefaultArgs<ExtArgs>>,
    ): Prisma__vendorClient<
      $Result.GetResult<Prisma.$vendorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    ticket<T extends event$ticketArgs<ExtArgs> = {}>(
      args?: Subset<T, event$ticketArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the event model
   */
  interface eventFieldRefs {
    readonly id: FieldRef<'event', 'String'>;
    readonly name: FieldRef<'event', 'String'>;
    readonly description: FieldRef<'event', 'String'>;
    readonly date: FieldRef<'event', 'DateTime'>;
    readonly location: FieldRef<'event', 'String'>;
    readonly vendor_id: FieldRef<'event', 'String'>;
    readonly created_at: FieldRef<'event', 'DateTime'>;
    readonly updated_at: FieldRef<'event', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * event findUnique
   */
  export type eventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * Filter, which event to fetch.
     */
    where: eventWhereUniqueInput;
  };

  /**
   * event findUniqueOrThrow
   */
  export type eventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * Filter, which event to fetch.
     */
    where: eventWhereUniqueInput;
  };

  /**
   * event findFirst
   */
  export type eventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * Filter, which event to fetch.
     */
    where?: eventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of events to fetch.
     */
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for events.
     */
    cursor?: eventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * event findFirstOrThrow
   */
  export type eventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * Filter, which event to fetch.
     */
    where?: eventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of events to fetch.
     */
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for events.
     */
    cursor?: eventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * event findMany
   */
  export type eventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * Filter, which events to fetch.
     */
    where?: eventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of events to fetch.
     */
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing events.
     */
    cursor?: eventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` events.
     */
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * event create
   */
  export type eventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * The data needed to create a event.
     */
    data: XOR<eventCreateInput, eventUncheckedCreateInput>;
  };

  /**
   * event createMany
   */
  export type eventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventCreateManyInput | eventCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * event update
   */
  export type eventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * The data needed to update a event.
     */
    data: XOR<eventUpdateInput, eventUncheckedUpdateInput>;
    /**
     * Choose, which event to update.
     */
    where: eventWhereUniqueInput;
  };

  /**
   * event updateMany
   */
  export type eventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventUpdateManyMutationInput, eventUncheckedUpdateManyInput>;
    /**
     * Filter which events to update
     */
    where?: eventWhereInput;
  };

  /**
   * event upsert
   */
  export type eventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * The filter to search for the event to update in case it exists.
     */
    where: eventWhereUniqueInput;
    /**
     * In case the event found by the `where` argument doesn't exist, create a new event with this data.
     */
    create: XOR<eventCreateInput, eventUncheckedCreateInput>;
    /**
     * In case the event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventUpdateInput, eventUncheckedUpdateInput>;
  };

  /**
   * event delete
   */
  export type eventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    /**
     * Filter which event to delete.
     */
    where: eventWhereUniqueInput;
  };

  /**
   * event deleteMany
   */
  export type eventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventWhereInput;
  };

  /**
   * event.ticket
   */
  export type event$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    where?: ticketWhereInput;
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    cursor?: ticketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * event without action
   */
  export type eventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
  };

  /**
   * Model movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  export type MovieAvgAggregateOutputType = {
    duration: number | null;
    rating: number | null;
  };

  export type MovieSumAggregateOutputType = {
    duration: number | null;
    rating: number | null;
  };

  export type MovieMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    genre: string | null;
    duration: number | null;
    rating: number | null;
    release_date: Date | null;
    vendor_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MovieMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    genre: string | null;
    duration: number | null;
    rating: number | null;
    release_date: Date | null;
    vendor_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MovieCountAggregateOutputType = {
    id: number;
    title: number;
    genre: number;
    duration: number;
    rating: number;
    release_date: number;
    vendor_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type MovieAvgAggregateInputType = {
    duration?: true;
    rating?: true;
  };

  export type MovieSumAggregateInputType = {
    duration?: true;
    rating?: true;
  };

  export type MovieMinAggregateInputType = {
    id?: true;
    title?: true;
    genre?: true;
    duration?: true;
    rating?: true;
    release_date?: true;
    vendor_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MovieMaxAggregateInputType = {
    id?: true;
    title?: true;
    genre?: true;
    duration?: true;
    rating?: true;
    release_date?: true;
    vendor_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MovieCountAggregateInputType = {
    id?: true;
    title?: true;
    genre?: true;
    duration?: true;
    rating?: true;
    release_date?: true;
    vendor_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movie to aggregate.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned movies
     **/
    _count?: true | MovieCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MovieAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MovieSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MovieMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MovieMaxAggregateInputType;
  };

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
    [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>;
  };

  export type movieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieWhereInput;
    orderBy?: movieOrderByWithAggregationInput | movieOrderByWithAggregationInput[];
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum;
    having?: movieScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovieCountAggregateInputType | true;
    _avg?: MovieAvgAggregateInputType;
    _sum?: MovieSumAggregateInputType;
    _min?: MovieMinAggregateInputType;
    _max?: MovieMaxAggregateInputType;
  };

  export type MovieGroupByOutputType = {
    id: string;
    title: string;
    genre: string;
    duration: number;
    rating: number;
    release_date: Date;
    vendor_id: string;
    created_at: Date;
    updated_at: Date;
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  type GetMovieGroupByPayload<T extends movieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MovieGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
          : GetScalarType<T[P], MovieGroupByOutputType[P]>;
      }
    >
  >;

  export type movieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      genre?: boolean;
      duration?: boolean;
      rating?: boolean;
      release_date?: boolean;
      vendor_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      vendor?: boolean | vendorDefaultArgs<ExtArgs>;
      review?: boolean | movie$reviewArgs<ExtArgs>;
      _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['movie']
  >;

  export type movieSelectScalar = {
    id?: boolean;
    title?: boolean;
    genre?: boolean;
    duration?: boolean;
    rating?: boolean;
    release_date?: boolean;
    vendor_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type movieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | vendorDefaultArgs<ExtArgs>;
    review?: boolean | movie$reviewArgs<ExtArgs>;
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $moviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'movie';
    objects: {
      vendor: Prisma.$vendorPayload<ExtArgs>;
      review: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        genre: string;
        duration: number;
        rating: number;
        release_date: Date;
        vendor_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['movie']
    >;
    composites: {};
  };

  type movieGetPayload<S extends boolean | null | undefined | movieDefaultArgs> = $Result.GetResult<
    Prisma.$moviePayload,
    S
  >;

  type movieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    movieFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: MovieCountAggregateInputType | true;
  };

  export interface movieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movie']; meta: { name: 'movie' } };
    /**
     * Find zero or one Movie that matches the filter.
     * @param {movieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends movieFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, movieFindUniqueArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Movie that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {movieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends movieFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends movieFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindFirstArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends movieFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     *
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends movieFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Movie.
     * @param {movieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     *
     **/
    create<T extends movieCreateArgs<ExtArgs>>(
      args: SelectSubset<T, movieCreateArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Movies.
     *     @param {movieCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movie = await prisma.movie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends movieCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Movie.
     * @param {movieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     *
     **/
    delete<T extends movieDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, movieDeleteArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Movie.
     * @param {movieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends movieUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpdateArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Movies.
     * @param {movieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends movieDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends movieUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Movie.
     * @param {movieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     **/
    upsert<T extends movieUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpsertArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
     **/
    count<T extends movieCountArgs>(
      args?: Subset<T, movieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(
      args: Subset<T, MovieAggregateArgs>,
    ): Prisma.PrismaPromise<GetMovieAggregateType<T>>;

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieGroupByArgs} args - Group by arguments.
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
      T extends movieGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movieGroupByArgs['orderBy'] }
        : { orderBy?: movieGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, movieGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the movie model
     */
    readonly fields: movieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movieClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    vendor<T extends vendorDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, vendorDefaultArgs<ExtArgs>>,
    ): Prisma__vendorClient<
      $Result.GetResult<Prisma.$vendorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    review<T extends movie$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, movie$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the movie model
   */
  interface movieFieldRefs {
    readonly id: FieldRef<'movie', 'String'>;
    readonly title: FieldRef<'movie', 'String'>;
    readonly genre: FieldRef<'movie', 'String'>;
    readonly duration: FieldRef<'movie', 'Int'>;
    readonly rating: FieldRef<'movie', 'Int'>;
    readonly release_date: FieldRef<'movie', 'DateTime'>;
    readonly vendor_id: FieldRef<'movie', 'String'>;
    readonly created_at: FieldRef<'movie', 'DateTime'>;
    readonly updated_at: FieldRef<'movie', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * movie findUnique
   */
  export type movieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie findUniqueOrThrow
   */
  export type movieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie findFirst
   */
  export type movieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * movie findFirstOrThrow
   */
  export type movieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * movie findMany
   */
  export type movieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movies to fetch.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing movies.
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * movie create
   */
  export type movieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * The data needed to create a movie.
     */
    data: XOR<movieCreateInput, movieUncheckedCreateInput>;
  };

  /**
   * movie createMany
   */
  export type movieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movies.
     */
    data: movieCreateManyInput | movieCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * movie update
   */
  export type movieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * The data needed to update a movie.
     */
    data: XOR<movieUpdateInput, movieUncheckedUpdateInput>;
    /**
     * Choose, which movie to update.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie updateMany
   */
  export type movieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movies.
     */
    data: XOR<movieUpdateManyMutationInput, movieUncheckedUpdateManyInput>;
    /**
     * Filter which movies to update
     */
    where?: movieWhereInput;
  };

  /**
   * movie upsert
   */
  export type movieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * The filter to search for the movie to update in case it exists.
     */
    where: movieWhereUniqueInput;
    /**
     * In case the movie found by the `where` argument doesn't exist, create a new movie with this data.
     */
    create: XOR<movieCreateInput, movieUncheckedCreateInput>;
    /**
     * In case the movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movieUpdateInput, movieUncheckedUpdateInput>;
  };

  /**
   * movie delete
   */
  export type movieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter which movie to delete.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie deleteMany
   */
  export type movieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to delete
     */
    where?: movieWhereInput;
  };

  /**
   * movie.review
   */
  export type movie$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * movie without action
   */
  export type movieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
  };

  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  export type ReviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    rating: number | null;
    user_id: string | null;
    movie_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    rating: number | null;
    user_id: string | null;
    movie_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewCountAggregateOutputType = {
    id: number;
    content: number;
    rating: number;
    user_id: number;
    movie_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ReviewAvgAggregateInputType = {
    rating?: true;
  };

  export type ReviewSumAggregateInputType = {
    rating?: true;
  };

  export type ReviewMinAggregateInputType = {
    id?: true;
    content?: true;
    rating?: true;
    user_id?: true;
    movie_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewMaxAggregateInputType = {
    id?: true;
    content?: true;
    rating?: true;
    user_id?: true;
    movie_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewCountAggregateInputType = {
    id?: true;
    content?: true;
    rating?: true;
    user_id?: true;
    movie_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reviews
     **/
    _count?: true | ReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReviewMaxAggregateInputType;
  };

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>;
  };

  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[];
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum;
    having?: reviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
  };

  export type ReviewGroupByOutputType = {
    id: string;
    content: string;
    rating: number;
    user_id: string;
    movie_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ReviewGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
          : GetScalarType<T[P], ReviewGroupByOutputType[P]>;
      }
    >
  >;

  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      rating?: boolean;
      user_id?: boolean;
      movie_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      movie?: boolean | movieDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['review']
  >;

  export type reviewSelectScalar = {
    id?: boolean;
    content?: boolean;
    rating?: boolean;
    user_id?: boolean;
    movie_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | movieDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'review';
    objects: {
      movie: Prisma.$moviePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        content: string;
        rating: number;
        user_id: string;
        movie_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['review']
    >;
    composites: {};
  };

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<
    Prisma.$reviewPayload,
    S
  >;

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    reviewFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ReviewCountAggregateInputType | true;
  };

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review']; meta: { name: 'review' } };
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     *
     **/
    create<T extends reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewCreateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Reviews.
     *     @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const review = await prisma.review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     *
     **/
    delete<T extends reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     **/
    upsert<T extends reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
     **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(
      args: Subset<T, ReviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetReviewAggregateType<T>>;

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
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
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the review model
     */
    readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movie<T extends movieDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, movieDefaultArgs<ExtArgs>>,
    ): Prisma__movieClient<
      $Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
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
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<'review', 'String'>;
    readonly content: FieldRef<'review', 'String'>;
    readonly rating: FieldRef<'review', 'Int'>;
    readonly user_id: FieldRef<'review', 'String'>;
    readonly movie_id: FieldRef<'review', 'String'>;
    readonly created_at: FieldRef<'review', 'DateTime'>;
    readonly updated_at: FieldRef<'review', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
  };

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>;
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput;
  };

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput;
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
  };

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput;
  };

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
  };

  /**
   * Model ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null;
    _avg: TicketAvgAggregateOutputType | null;
    _sum: TicketSumAggregateOutputType | null;
    _min: TicketMinAggregateOutputType | null;
    _max: TicketMaxAggregateOutputType | null;
  };

  export type TicketAvgAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type TicketSumAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type TicketMinAggregateOutputType = {
    id: string | null;
    price: number | null;
    quantity: number | null;
    event_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TicketMaxAggregateOutputType = {
    id: string | null;
    price: number | null;
    quantity: number | null;
    event_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TicketCountAggregateOutputType = {
    id: number;
    price: number;
    quantity: number;
    event_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TicketAvgAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type TicketSumAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type TicketMinAggregateInputType = {
    id?: true;
    price?: true;
    quantity?: true;
    event_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TicketMaxAggregateInputType = {
    id?: true;
    price?: true;
    quantity?: true;
    event_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TicketCountAggregateInputType = {
    id?: true;
    price?: true;
    quantity?: true;
    event_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket to aggregate.
     */
    where?: ticketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ticketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tickets
     **/
    _count?: true | TicketCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TicketAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TicketSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TicketMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TicketMaxAggregateInputType;
  };

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
    [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>;
  };

  export type ticketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput;
    orderBy?: ticketOrderByWithAggregationInput | ticketOrderByWithAggregationInput[];
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum;
    having?: ticketScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TicketCountAggregateInputType | true;
    _avg?: TicketAvgAggregateInputType;
    _sum?: TicketSumAggregateInputType;
    _min?: TicketMinAggregateInputType;
    _max?: TicketMaxAggregateInputType;
  };

  export type TicketGroupByOutputType = {
    id: string;
    price: number;
    quantity: number;
    event_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: TicketCountAggregateOutputType | null;
    _avg: TicketAvgAggregateOutputType | null;
    _sum: TicketSumAggregateOutputType | null;
    _min: TicketMinAggregateOutputType | null;
    _max: TicketMaxAggregateOutputType | null;
  };

  type GetTicketGroupByPayload<T extends ticketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TicketGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
          : GetScalarType<T[P], TicketGroupByOutputType[P]>;
      }
    >
  >;

  export type ticketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      price?: boolean;
      quantity?: boolean;
      event_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      event?: boolean | eventDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['ticket']
  >;

  export type ticketSelectScalar = {
    id?: boolean;
    price?: boolean;
    quantity?: boolean;
    event_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ticketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $ticketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'ticket';
    objects: {
      event: Prisma.$eventPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        price: number;
        quantity: number;
        event_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['ticket']
    >;
    composites: {};
  };

  type ticketGetPayload<S extends boolean | null | undefined | ticketDefaultArgs> = $Result.GetResult<
    Prisma.$ticketPayload,
    S
  >;

  type ticketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ticketFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TicketCountAggregateInputType | true;
  };

  export interface ticketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket']; meta: { name: 'ticket' } };
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {ticketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ticketFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ticketFindUniqueArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Ticket that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ticketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ticketFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ticketFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketFindFirstArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ticketFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     *
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ticketFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Ticket.
     * @param {ticketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     *
     **/
    create<T extends ticketCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ticketCreateArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tickets.
     *     @param {ticketCreateManyArgs} args - Arguments to create many Tickets.
     *     @example
     *     // Create many Tickets
     *     const ticket = await prisma.ticket.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ticketCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Ticket.
     * @param {ticketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     *
     **/
    delete<T extends ticketDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ticketDeleteArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Ticket.
     * @param {ticketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ticketUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ticketUpdateArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tickets.
     * @param {ticketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ticketDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ticketUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ticketUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Ticket.
     * @param {ticketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     **/
    upsert<T extends ticketUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ticketUpsertArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
     **/
    count<T extends ticketCountArgs>(
      args?: Subset<T, ticketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(
      args: Subset<T, TicketAggregateArgs>,
    ): Prisma.PrismaPromise<GetTicketAggregateType<T>>;

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketGroupByArgs} args - Group by arguments.
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
      T extends ticketGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketGroupByArgs['orderBy'] }
        : { orderBy?: ticketGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, ticketGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ticket model
     */
    readonly fields: ticketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    event<T extends eventDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, eventDefaultArgs<ExtArgs>>,
    ): Prisma__eventClient<
      $Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
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
   * Fields of the ticket model
   */
  interface ticketFieldRefs {
    readonly id: FieldRef<'ticket', 'String'>;
    readonly price: FieldRef<'ticket', 'Int'>;
    readonly quantity: FieldRef<'ticket', 'Int'>;
    readonly event_id: FieldRef<'ticket', 'String'>;
    readonly user_id: FieldRef<'ticket', 'String'>;
    readonly created_at: FieldRef<'ticket', 'DateTime'>;
    readonly updated_at: FieldRef<'ticket', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * ticket findUnique
   */
  export type ticketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput;
  };

  /**
   * ticket findUniqueOrThrow
   */
  export type ticketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput;
  };

  /**
   * ticket findFirst
   */
  export type ticketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * ticket findFirstOrThrow
   */
  export type ticketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * ticket findMany
   */
  export type ticketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tickets.
     */
    cursor?: ticketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickets.
     */
    skip?: number;
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * ticket create
   */
  export type ticketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * The data needed to create a ticket.
     */
    data: XOR<ticketCreateInput, ticketUncheckedCreateInput>;
  };

  /**
   * ticket createMany
   */
  export type ticketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketCreateManyInput | ticketCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ticket update
   */
  export type ticketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * The data needed to update a ticket.
     */
    data: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>;
    /**
     * Choose, which ticket to update.
     */
    where: ticketWhereUniqueInput;
  };

  /**
   * ticket updateMany
   */
  export type ticketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyInput>;
    /**
     * Filter which tickets to update
     */
    where?: ticketWhereInput;
  };

  /**
   * ticket upsert
   */
  export type ticketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * The filter to search for the ticket to update in case it exists.
     */
    where: ticketWhereUniqueInput;
    /**
     * In case the ticket found by the `where` argument doesn't exist, create a new ticket with this data.
     */
    create: XOR<ticketCreateInput, ticketUncheckedCreateInput>;
    /**
     * In case the ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>;
  };

  /**
   * ticket delete
   */
  export type ticketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter which ticket to delete.
     */
    where: ticketWhereUniqueInput;
  };

  /**
   * ticket deleteMany
   */
  export type ticketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketWhereInput;
  };

  /**
   * ticket without action
   */
  export type ticketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      review?: boolean | user$reviewArgs<ExtArgs>;
      ticket?: boolean | user$ticketArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | user$reviewArgs<ExtArgs>;
    ticket?: boolean | user$ticketArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      review: Prisma.$reviewPayload<ExtArgs>[];
      ticket: Prisma.$ticketPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    review<T extends user$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, user$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    ticket<T extends user$ticketArgs<ExtArgs> = {}>(
      args?: Subset<T, user$ticketArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.review
   */
  export type user$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * user.ticket
   */
  export type user$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    where?: ticketWhereInput;
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    cursor?: ticketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null;
    _min: VendorMinAggregateOutputType | null;
    _max: VendorMaxAggregateOutputType | null;
  };

  export type VendorMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type VendorMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type VendorCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type VendorMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type VendorMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type VendorCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendor to aggregate.
     */
    where?: vendorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vendors to fetch.
     */
    orderBy?: vendorOrderByWithRelationInput | vendorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: vendorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vendors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned vendors
     **/
    _count?: true | VendorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VendorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VendorMaxAggregateInputType;
  };

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
    [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>;
  };

  export type vendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vendorWhereInput;
    orderBy?: vendorOrderByWithAggregationInput | vendorOrderByWithAggregationInput[];
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum;
    having?: vendorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VendorCountAggregateInputType | true;
    _min?: VendorMinAggregateInputType;
    _max?: VendorMaxAggregateInputType;
  };

  export type VendorGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: VendorCountAggregateOutputType | null;
    _min: VendorMinAggregateOutputType | null;
    _max: VendorMaxAggregateOutputType | null;
  };

  type GetVendorGroupByPayload<T extends vendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> & {
        [P in keyof T & keyof VendorGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
          : GetScalarType<T[P], VendorGroupByOutputType[P]>;
      }
    >
  >;

  export type vendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
      event?: boolean | vendor$eventArgs<ExtArgs>;
      movie?: boolean | vendor$movieArgs<ExtArgs>;
      _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['vendor']
  >;

  export type vendorSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type vendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | vendor$eventArgs<ExtArgs>;
    movie?: boolean | vendor$movieArgs<ExtArgs>;
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $vendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'vendor';
    objects: {
      event: Prisma.$eventPayload<ExtArgs>[];
      movie: Prisma.$moviePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['vendor']
    >;
    composites: {};
  };

  type vendorGetPayload<S extends boolean | null | undefined | vendorDefaultArgs> = $Result.GetResult<
    Prisma.$vendorPayload,
    S
  >;

  type vendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    vendorFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: VendorCountAggregateInputType | true;
  };

  export interface vendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vendor']; meta: { name: 'vendor' } };
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {vendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends vendorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, vendorFindUniqueArgs<ExtArgs>>,
    ): Prisma__vendorClient<$Result.GetResult<Prisma.$vendorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Vendor that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {vendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends vendorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vendorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__vendorClient<$Result.GetResult<Prisma.$vendorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends vendorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, vendorFindFirstArgs<ExtArgs>>,
    ): Prisma__vendorClient<$Result.GetResult<Prisma.$vendorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends vendorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vendorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__vendorClient<$Result.GetResult<Prisma.$vendorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     *
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends vendorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vendorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendorPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Vendor.
     * @param {vendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     *
     **/
    create<T extends vendorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, vendorCreateArgs<ExtArgs>>,
    ): Prisma__vendorClient<$Result.GetResult<Prisma.$vendorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Vendors.
     *     @param {vendorCreateManyArgs} args - Arguments to create many Vendors.
     *     @example
     *     // Create many Vendors
     *     const vendor = await prisma.vendor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends vendorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vendorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Vendor.
     * @param {vendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     *
     **/
    delete<T extends vendorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, vendorDeleteArgs<ExtArgs>>,
    ): Prisma__vendorClient<$Result.GetResult<Prisma.$vendorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Vendor.
     * @param {vendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends vendorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, vendorUpdateArgs<ExtArgs>>,
    ): Prisma__vendorClient<$Result.GetResult<Prisma.$vendorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Vendors.
     * @param {vendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends vendorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vendorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends vendorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, vendorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Vendor.
     * @param {vendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     **/
    upsert<T extends vendorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, vendorUpsertArgs<ExtArgs>>,
    ): Prisma__vendorClient<$Result.GetResult<Prisma.$vendorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
     **/
    count<T extends vendorCountArgs>(
      args?: Subset<T, vendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendorAggregateArgs>(
      args: Subset<T, VendorAggregateArgs>,
    ): Prisma.PrismaPromise<GetVendorAggregateType<T>>;

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorGroupByArgs} args - Group by arguments.
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
      T extends vendorGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vendorGroupByArgs['orderBy'] }
        : { orderBy?: vendorGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, vendorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the vendor model
     */
    readonly fields: vendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vendorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    event<T extends vendor$eventArgs<ExtArgs> = {}>(
      args?: Subset<T, vendor$eventArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, 'findMany'> | Null>;

    movie<T extends vendor$movieArgs<ExtArgs> = {}>(
      args?: Subset<T, vendor$movieArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the vendor model
   */
  interface vendorFieldRefs {
    readonly id: FieldRef<'vendor', 'String'>;
    readonly description: FieldRef<'vendor', 'String'>;
    readonly name: FieldRef<'vendor', 'String'>;
    readonly created_at: FieldRef<'vendor', 'DateTime'>;
    readonly updated_at: FieldRef<'vendor', 'DateTime'>;
    readonly tenant_id: FieldRef<'vendor', 'String'>;
  }

  // Custom InputTypes

  /**
   * vendor findUnique
   */
  export type vendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude<ExtArgs> | null;
    /**
     * Filter, which vendor to fetch.
     */
    where: vendorWhereUniqueInput;
  };

  /**
   * vendor findUniqueOrThrow
   */
  export type vendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude<ExtArgs> | null;
    /**
     * Filter, which vendor to fetch.
     */
    where: vendorWhereUniqueInput;
  };

  /**
   * vendor findFirst
   */
  export type vendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude<ExtArgs> | null;
    /**
     * Filter, which vendor to fetch.
     */
    where?: vendorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vendors to fetch.
     */
    orderBy?: vendorOrderByWithRelationInput | vendorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vendors.
     */
    cursor?: vendorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vendors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[];
  };

  /**
   * vendor findFirstOrThrow
   */
  export type vendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude<ExtArgs> | null;
    /**
     * Filter, which vendor to fetch.
     */
    where?: vendorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vendors to fetch.
     */
    orderBy?: vendorOrderByWithRelationInput | vendorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vendors.
     */
    cursor?: vendorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vendors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[];
  };

  /**
   * vendor findMany
   */
  export type vendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude<ExtArgs> | null;
    /**
     * Filter, which vendors to fetch.
     */
    where?: vendorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vendors to fetch.
     */
    orderBy?: vendorOrderByWithRelationInput | vendorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing vendors.
     */
    cursor?: vendorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vendors.
     */
    skip?: number;
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[];
  };

  /**
   * vendor create
   */
  export type vendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude<ExtArgs> | null;
    /**
     * The data needed to create a vendor.
     */
    data: XOR<vendorCreateInput, vendorUncheckedCreateInput>;
  };

  /**
   * vendor createMany
   */
  export type vendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vendors.
     */
    data: vendorCreateManyInput | vendorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * vendor update
   */
  export type vendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude<ExtArgs> | null;
    /**
     * The data needed to update a vendor.
     */
    data: XOR<vendorUpdateInput, vendorUncheckedUpdateInput>;
    /**
     * Choose, which vendor to update.
     */
    where: vendorWhereUniqueInput;
  };

  /**
   * vendor updateMany
   */
  export type vendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vendors.
     */
    data: XOR<vendorUpdateManyMutationInput, vendorUncheckedUpdateManyInput>;
    /**
     * Filter which vendors to update
     */
    where?: vendorWhereInput;
  };

  /**
   * vendor upsert
   */
  export type vendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude<ExtArgs> | null;
    /**
     * The filter to search for the vendor to update in case it exists.
     */
    where: vendorWhereUniqueInput;
    /**
     * In case the vendor found by the `where` argument doesn't exist, create a new vendor with this data.
     */
    create: XOR<vendorCreateInput, vendorUncheckedCreateInput>;
    /**
     * In case the vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vendorUpdateInput, vendorUncheckedUpdateInput>;
  };

  /**
   * vendor delete
   */
  export type vendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude<ExtArgs> | null;
    /**
     * Filter which vendor to delete.
     */
    where: vendorWhereUniqueInput;
  };

  /**
   * vendor deleteMany
   */
  export type vendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendors to delete
     */
    where?: vendorWhereInput;
  };

  /**
   * vendor.event
   */
  export type vendor$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventInclude<ExtArgs> | null;
    where?: eventWhereInput;
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[];
    cursor?: eventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * vendor.movie
   */
  export type vendor$movieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    where?: movieWhereInput;
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    cursor?: movieWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * vendor without action
   */
  export type vendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude<ExtArgs> | null;
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

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const EventScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    date: 'date';
    location: 'location';
    vendor_id: 'vendor_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];

  export const MovieScalarFieldEnum: {
    id: 'id';
    title: 'title';
    genre: 'genre';
    duration: 'duration';
    rating: 'rating';
    release_date: 'release_date';
    vendor_id: 'vendor_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum];

  export const ReviewScalarFieldEnum: {
    id: 'id';
    content: 'content';
    rating: 'rating';
    user_id: 'user_id';
    movie_id: 'movie_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];

  export const TicketScalarFieldEnum: {
    id: 'id';
    price: 'price';
    quantity: 'quantity';
    event_id: 'event_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const VendorScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum];

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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

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

  export type eventWhereInput = {
    AND?: eventWhereInput | eventWhereInput[];
    OR?: eventWhereInput[];
    NOT?: eventWhereInput | eventWhereInput[];
    id?: UuidFilter<'event'> | string;
    name?: StringFilter<'event'> | string;
    description?: StringNullableFilter<'event'> | string | null;
    date?: DateTimeFilter<'event'> | Date | string;
    location?: StringFilter<'event'> | string;
    vendor_id?: UuidFilter<'event'> | string;
    created_at?: DateTimeFilter<'event'> | Date | string;
    updated_at?: DateTimeFilter<'event'> | Date | string;
    vendor?: XOR<VendorRelationFilter, vendorWhereInput>;
    ticket?: TicketListRelationFilter;
  };

  export type eventOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    vendor_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    vendor?: vendorOrderByWithRelationInput;
    ticket?: ticketOrderByRelationAggregateInput;
  };

  export type eventWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: eventWhereInput | eventWhereInput[];
      OR?: eventWhereInput[];
      NOT?: eventWhereInput | eventWhereInput[];
      name?: StringFilter<'event'> | string;
      description?: StringNullableFilter<'event'> | string | null;
      date?: DateTimeFilter<'event'> | Date | string;
      location?: StringFilter<'event'> | string;
      vendor_id?: UuidFilter<'event'> | string;
      created_at?: DateTimeFilter<'event'> | Date | string;
      updated_at?: DateTimeFilter<'event'> | Date | string;
      vendor?: XOR<VendorRelationFilter, vendorWhereInput>;
      ticket?: TicketListRelationFilter;
    },
    'id'
  >;

  export type eventOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    vendor_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: eventCountOrderByAggregateInput;
    _max?: eventMaxOrderByAggregateInput;
    _min?: eventMinOrderByAggregateInput;
  };

  export type eventScalarWhereWithAggregatesInput = {
    AND?: eventScalarWhereWithAggregatesInput | eventScalarWhereWithAggregatesInput[];
    OR?: eventScalarWhereWithAggregatesInput[];
    NOT?: eventScalarWhereWithAggregatesInput | eventScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'event'> | string;
    name?: StringWithAggregatesFilter<'event'> | string;
    description?: StringNullableWithAggregatesFilter<'event'> | string | null;
    date?: DateTimeWithAggregatesFilter<'event'> | Date | string;
    location?: StringWithAggregatesFilter<'event'> | string;
    vendor_id?: UuidWithAggregatesFilter<'event'> | string;
    created_at?: DateTimeWithAggregatesFilter<'event'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'event'> | Date | string;
  };

  export type movieWhereInput = {
    AND?: movieWhereInput | movieWhereInput[];
    OR?: movieWhereInput[];
    NOT?: movieWhereInput | movieWhereInput[];
    id?: UuidFilter<'movie'> | string;
    title?: StringFilter<'movie'> | string;
    genre?: StringFilter<'movie'> | string;
    duration?: IntFilter<'movie'> | number;
    rating?: IntFilter<'movie'> | number;
    release_date?: DateTimeFilter<'movie'> | Date | string;
    vendor_id?: UuidFilter<'movie'> | string;
    created_at?: DateTimeFilter<'movie'> | Date | string;
    updated_at?: DateTimeFilter<'movie'> | Date | string;
    vendor?: XOR<VendorRelationFilter, vendorWhereInput>;
    review?: ReviewListRelationFilter;
  };

  export type movieOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    duration?: SortOrder;
    rating?: SortOrder;
    release_date?: SortOrder;
    vendor_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    vendor?: vendorOrderByWithRelationInput;
    review?: reviewOrderByRelationAggregateInput;
  };

  export type movieWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: movieWhereInput | movieWhereInput[];
      OR?: movieWhereInput[];
      NOT?: movieWhereInput | movieWhereInput[];
      title?: StringFilter<'movie'> | string;
      genre?: StringFilter<'movie'> | string;
      duration?: IntFilter<'movie'> | number;
      rating?: IntFilter<'movie'> | number;
      release_date?: DateTimeFilter<'movie'> | Date | string;
      vendor_id?: UuidFilter<'movie'> | string;
      created_at?: DateTimeFilter<'movie'> | Date | string;
      updated_at?: DateTimeFilter<'movie'> | Date | string;
      vendor?: XOR<VendorRelationFilter, vendorWhereInput>;
      review?: ReviewListRelationFilter;
    },
    'id'
  >;

  export type movieOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    duration?: SortOrder;
    rating?: SortOrder;
    release_date?: SortOrder;
    vendor_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: movieCountOrderByAggregateInput;
    _avg?: movieAvgOrderByAggregateInput;
    _max?: movieMaxOrderByAggregateInput;
    _min?: movieMinOrderByAggregateInput;
    _sum?: movieSumOrderByAggregateInput;
  };

  export type movieScalarWhereWithAggregatesInput = {
    AND?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[];
    OR?: movieScalarWhereWithAggregatesInput[];
    NOT?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'movie'> | string;
    title?: StringWithAggregatesFilter<'movie'> | string;
    genre?: StringWithAggregatesFilter<'movie'> | string;
    duration?: IntWithAggregatesFilter<'movie'> | number;
    rating?: IntWithAggregatesFilter<'movie'> | number;
    release_date?: DateTimeWithAggregatesFilter<'movie'> | Date | string;
    vendor_id?: UuidWithAggregatesFilter<'movie'> | string;
    created_at?: DateTimeWithAggregatesFilter<'movie'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'movie'> | Date | string;
  };

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[];
    OR?: reviewWhereInput[];
    NOT?: reviewWhereInput | reviewWhereInput[];
    id?: UuidFilter<'review'> | string;
    content?: StringFilter<'review'> | string;
    rating?: IntFilter<'review'> | number;
    user_id?: UuidFilter<'review'> | string;
    movie_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
    movie?: XOR<MovieRelationFilter, movieWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    user_id?: SortOrder;
    movie_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    movie?: movieOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type reviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: reviewWhereInput | reviewWhereInput[];
      OR?: reviewWhereInput[];
      NOT?: reviewWhereInput | reviewWhereInput[];
      content?: StringFilter<'review'> | string;
      rating?: IntFilter<'review'> | number;
      user_id?: UuidFilter<'review'> | string;
      movie_id?: UuidFilter<'review'> | string;
      created_at?: DateTimeFilter<'review'> | Date | string;
      updated_at?: DateTimeFilter<'review'> | Date | string;
      movie?: XOR<MovieRelationFilter, movieWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    user_id?: SortOrder;
    movie_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: reviewCountOrderByAggregateInput;
    _avg?: reviewAvgOrderByAggregateInput;
    _max?: reviewMaxOrderByAggregateInput;
    _min?: reviewMinOrderByAggregateInput;
    _sum?: reviewSumOrderByAggregateInput;
  };

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    OR?: reviewScalarWhereWithAggregatesInput[];
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'review'> | string;
    content?: StringWithAggregatesFilter<'review'> | string;
    rating?: IntWithAggregatesFilter<'review'> | number;
    user_id?: UuidWithAggregatesFilter<'review'> | string;
    movie_id?: UuidWithAggregatesFilter<'review'> | string;
    created_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
  };

  export type ticketWhereInput = {
    AND?: ticketWhereInput | ticketWhereInput[];
    OR?: ticketWhereInput[];
    NOT?: ticketWhereInput | ticketWhereInput[];
    id?: UuidFilter<'ticket'> | string;
    price?: IntFilter<'ticket'> | number;
    quantity?: IntFilter<'ticket'> | number;
    event_id?: UuidFilter<'ticket'> | string;
    user_id?: UuidFilter<'ticket'> | string;
    created_at?: DateTimeFilter<'ticket'> | Date | string;
    updated_at?: DateTimeFilter<'ticket'> | Date | string;
    event?: XOR<EventRelationFilter, eventWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type ticketOrderByWithRelationInput = {
    id?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    event_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    event?: eventOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type ticketWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ticketWhereInput | ticketWhereInput[];
      OR?: ticketWhereInput[];
      NOT?: ticketWhereInput | ticketWhereInput[];
      price?: IntFilter<'ticket'> | number;
      quantity?: IntFilter<'ticket'> | number;
      event_id?: UuidFilter<'ticket'> | string;
      user_id?: UuidFilter<'ticket'> | string;
      created_at?: DateTimeFilter<'ticket'> | Date | string;
      updated_at?: DateTimeFilter<'ticket'> | Date | string;
      event?: XOR<EventRelationFilter, eventWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type ticketOrderByWithAggregationInput = {
    id?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    event_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ticketCountOrderByAggregateInput;
    _avg?: ticketAvgOrderByAggregateInput;
    _max?: ticketMaxOrderByAggregateInput;
    _min?: ticketMinOrderByAggregateInput;
    _sum?: ticketSumOrderByAggregateInput;
  };

  export type ticketScalarWhereWithAggregatesInput = {
    AND?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[];
    OR?: ticketScalarWhereWithAggregatesInput[];
    NOT?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'ticket'> | string;
    price?: IntWithAggregatesFilter<'ticket'> | number;
    quantity?: IntWithAggregatesFilter<'ticket'> | number;
    event_id?: UuidWithAggregatesFilter<'ticket'> | string;
    user_id?: UuidWithAggregatesFilter<'ticket'> | string;
    created_at?: DateTimeWithAggregatesFilter<'ticket'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'ticket'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    review?: ReviewListRelationFilter;
    ticket?: TicketListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    review?: reviewOrderByRelationAggregateInput;
    ticket?: ticketOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      review?: ReviewListRelationFilter;
      ticket?: TicketListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type vendorWhereInput = {
    AND?: vendorWhereInput | vendorWhereInput[];
    OR?: vendorWhereInput[];
    NOT?: vendorWhereInput | vendorWhereInput[];
    id?: UuidFilter<'vendor'> | string;
    description?: StringNullableFilter<'vendor'> | string | null;
    name?: StringFilter<'vendor'> | string;
    created_at?: DateTimeFilter<'vendor'> | Date | string;
    updated_at?: DateTimeFilter<'vendor'> | Date | string;
    tenant_id?: StringFilter<'vendor'> | string;
    event?: EventListRelationFilter;
    movie?: MovieListRelationFilter;
  };

  export type vendorOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    event?: eventOrderByRelationAggregateInput;
    movie?: movieOrderByRelationAggregateInput;
  };

  export type vendorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: vendorWhereInput | vendorWhereInput[];
      OR?: vendorWhereInput[];
      NOT?: vendorWhereInput | vendorWhereInput[];
      description?: StringNullableFilter<'vendor'> | string | null;
      name?: StringFilter<'vendor'> | string;
      created_at?: DateTimeFilter<'vendor'> | Date | string;
      updated_at?: DateTimeFilter<'vendor'> | Date | string;
      tenant_id?: StringFilter<'vendor'> | string;
      event?: EventListRelationFilter;
      movie?: MovieListRelationFilter;
    },
    'id'
  >;

  export type vendorOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: vendorCountOrderByAggregateInput;
    _max?: vendorMaxOrderByAggregateInput;
    _min?: vendorMinOrderByAggregateInput;
  };

  export type vendorScalarWhereWithAggregatesInput = {
    AND?: vendorScalarWhereWithAggregatesInput | vendorScalarWhereWithAggregatesInput[];
    OR?: vendorScalarWhereWithAggregatesInput[];
    NOT?: vendorScalarWhereWithAggregatesInput | vendorScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'vendor'> | string;
    description?: StringNullableWithAggregatesFilter<'vendor'> | string | null;
    name?: StringWithAggregatesFilter<'vendor'> | string;
    created_at?: DateTimeWithAggregatesFilter<'vendor'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'vendor'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'vendor'> | string;
  };

  export type eventCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vendor: vendorCreateNestedOneWithoutEventInput;
    ticket?: ticketCreateNestedManyWithoutEventInput;
  };

  export type eventUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    date: Date | string;
    location: string;
    vendor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketUncheckedCreateNestedManyWithoutEventInput;
  };

  export type eventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    vendor?: vendorUpdateOneRequiredWithoutEventNestedInput;
    ticket?: ticketUpdateManyWithoutEventNestedInput;
  };

  export type eventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    vendor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUncheckedUpdateManyWithoutEventNestedInput;
  };

  export type eventCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    date: Date | string;
    location: string;
    vendor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type eventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type eventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    vendor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type movieCreateInput = {
    id?: string;
    title: string;
    genre: string;
    duration: number;
    rating: number;
    release_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vendor: vendorCreateNestedOneWithoutMovieInput;
    review?: reviewCreateNestedManyWithoutMovieInput;
  };

  export type movieUncheckedCreateInput = {
    id?: string;
    title: string;
    genre: string;
    duration: number;
    rating: number;
    release_date: Date | string;
    vendor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutMovieInput;
  };

  export type movieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    vendor?: vendorUpdateOneRequiredWithoutMovieNestedInput;
    review?: reviewUpdateManyWithoutMovieNestedInput;
  };

  export type movieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    vendor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutMovieNestedInput;
  };

  export type movieCreateManyInput = {
    id?: string;
    title: string;
    genre: string;
    duration: number;
    rating: number;
    release_date: Date | string;
    vendor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type movieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type movieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    vendor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateInput = {
    id?: string;
    content: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    movie: movieCreateNestedOneWithoutReviewInput;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateInput = {
    id?: string;
    content: string;
    rating: number;
    user_id: string;
    movie_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: movieUpdateOneRequiredWithoutReviewNestedInput;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateManyInput = {
    id?: string;
    content: string;
    rating: number;
    user_id: string;
    movie_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketCreateInput = {
    id?: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    event: eventCreateNestedOneWithoutTicketInput;
    user: userCreateNestedOneWithoutTicketInput;
  };

  export type ticketUncheckedCreateInput = {
    id?: string;
    price: number;
    quantity: number;
    event_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: eventUpdateOneRequiredWithoutTicketNestedInput;
    user?: userUpdateOneRequiredWithoutTicketNestedInput;
  };

  export type ticketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    event_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketCreateManyInput = {
    id?: string;
    price: number;
    quantity: number;
    event_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    event_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewCreateNestedManyWithoutUserInput;
    ticket?: ticketCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
    ticket?: ticketUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUpdateManyWithoutUserNestedInput;
    ticket?: ticketUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
    ticket?: ticketUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vendorCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    event?: eventCreateNestedManyWithoutVendorInput;
    movie?: movieCreateNestedManyWithoutVendorInput;
  };

  export type vendorUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    event?: eventUncheckedCreateNestedManyWithoutVendorInput;
    movie?: movieUncheckedCreateNestedManyWithoutVendorInput;
  };

  export type vendorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    event?: eventUpdateManyWithoutVendorNestedInput;
    movie?: movieUpdateManyWithoutVendorNestedInput;
  };

  export type vendorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    event?: eventUncheckedUpdateManyWithoutVendorNestedInput;
    movie?: movieUncheckedUpdateManyWithoutVendorNestedInput;
  };

  export type vendorCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type vendorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type vendorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
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

  export type VendorRelationFilter = {
    is?: vendorWhereInput;
    isNot?: vendorWhereInput;
  };

  export type TicketListRelationFilter = {
    every?: ticketWhereInput;
    some?: ticketWhereInput;
    none?: ticketWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ticketOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type eventCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    vendor_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type eventMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    vendor_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type eventMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    vendor_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
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

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput;
    some?: reviewWhereInput;
    none?: reviewWhereInput;
  };

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type movieCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    duration?: SortOrder;
    rating?: SortOrder;
    release_date?: SortOrder;
    vendor_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type movieAvgOrderByAggregateInput = {
    duration?: SortOrder;
    rating?: SortOrder;
  };

  export type movieMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    duration?: SortOrder;
    rating?: SortOrder;
    release_date?: SortOrder;
    vendor_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type movieMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    duration?: SortOrder;
    rating?: SortOrder;
    release_date?: SortOrder;
    vendor_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type movieSumOrderByAggregateInput = {
    duration?: SortOrder;
    rating?: SortOrder;
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

  export type MovieRelationFilter = {
    is?: movieWhereInput;
    isNot?: movieWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    user_id?: SortOrder;
    movie_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    user_id?: SortOrder;
    movie_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    user_id?: SortOrder;
    movie_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type EventRelationFilter = {
    is?: eventWhereInput;
    isNot?: eventWhereInput;
  };

  export type ticketCountOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    event_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ticketAvgOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type ticketMaxOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    event_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ticketMinOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    event_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ticketSumOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EventListRelationFilter = {
    every?: eventWhereInput;
    some?: eventWhereInput;
    none?: eventWhereInput;
  };

  export type MovieListRelationFilter = {
    every?: movieWhereInput;
    some?: movieWhereInput;
    none?: movieWhereInput;
  };

  export type eventOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type movieOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type vendorCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type vendorMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type vendorMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type vendorCreateNestedOneWithoutEventInput = {
    create?: XOR<vendorCreateWithoutEventInput, vendorUncheckedCreateWithoutEventInput>;
    connectOrCreate?: vendorCreateOrConnectWithoutEventInput;
    connect?: vendorWhereUniqueInput;
  };

  export type ticketCreateNestedManyWithoutEventInput = {
    create?:
      | XOR<ticketCreateWithoutEventInput, ticketUncheckedCreateWithoutEventInput>
      | ticketCreateWithoutEventInput[]
      | ticketUncheckedCreateWithoutEventInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutEventInput | ticketCreateOrConnectWithoutEventInput[];
    createMany?: ticketCreateManyEventInputEnvelope;
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
  };

  export type ticketUncheckedCreateNestedManyWithoutEventInput = {
    create?:
      | XOR<ticketCreateWithoutEventInput, ticketUncheckedCreateWithoutEventInput>
      | ticketCreateWithoutEventInput[]
      | ticketUncheckedCreateWithoutEventInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutEventInput | ticketCreateOrConnectWithoutEventInput[];
    createMany?: ticketCreateManyEventInputEnvelope;
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type vendorUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<vendorCreateWithoutEventInput, vendorUncheckedCreateWithoutEventInput>;
    connectOrCreate?: vendorCreateOrConnectWithoutEventInput;
    upsert?: vendorUpsertWithoutEventInput;
    connect?: vendorWhereUniqueInput;
    update?: XOR<
      XOR<vendorUpdateToOneWithWhereWithoutEventInput, vendorUpdateWithoutEventInput>,
      vendorUncheckedUpdateWithoutEventInput
    >;
  };

  export type ticketUpdateManyWithoutEventNestedInput = {
    create?:
      | XOR<ticketCreateWithoutEventInput, ticketUncheckedCreateWithoutEventInput>
      | ticketCreateWithoutEventInput[]
      | ticketUncheckedCreateWithoutEventInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutEventInput | ticketCreateOrConnectWithoutEventInput[];
    upsert?: ticketUpsertWithWhereUniqueWithoutEventInput | ticketUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: ticketCreateManyEventInputEnvelope;
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    update?: ticketUpdateWithWhereUniqueWithoutEventInput | ticketUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: ticketUpdateManyWithWhereWithoutEventInput | ticketUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[];
  };

  export type ticketUncheckedUpdateManyWithoutEventNestedInput = {
    create?:
      | XOR<ticketCreateWithoutEventInput, ticketUncheckedCreateWithoutEventInput>
      | ticketCreateWithoutEventInput[]
      | ticketUncheckedCreateWithoutEventInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutEventInput | ticketCreateOrConnectWithoutEventInput[];
    upsert?: ticketUpsertWithWhereUniqueWithoutEventInput | ticketUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: ticketCreateManyEventInputEnvelope;
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    update?: ticketUpdateWithWhereUniqueWithoutEventInput | ticketUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: ticketUpdateManyWithWhereWithoutEventInput | ticketUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[];
  };

  export type vendorCreateNestedOneWithoutMovieInput = {
    create?: XOR<vendorCreateWithoutMovieInput, vendorUncheckedCreateWithoutMovieInput>;
    connectOrCreate?: vendorCreateOrConnectWithoutMovieInput;
    connect?: vendorWhereUniqueInput;
  };

  export type reviewCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<reviewCreateWithoutMovieInput, reviewUncheckedCreateWithoutMovieInput>
      | reviewCreateWithoutMovieInput[]
      | reviewUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutMovieInput | reviewCreateOrConnectWithoutMovieInput[];
    createMany?: reviewCreateManyMovieInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<reviewCreateWithoutMovieInput, reviewUncheckedCreateWithoutMovieInput>
      | reviewCreateWithoutMovieInput[]
      | reviewUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutMovieInput | reviewCreateOrConnectWithoutMovieInput[];
    createMany?: reviewCreateManyMovieInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type vendorUpdateOneRequiredWithoutMovieNestedInput = {
    create?: XOR<vendorCreateWithoutMovieInput, vendorUncheckedCreateWithoutMovieInput>;
    connectOrCreate?: vendorCreateOrConnectWithoutMovieInput;
    upsert?: vendorUpsertWithoutMovieInput;
    connect?: vendorWhereUniqueInput;
    update?: XOR<
      XOR<vendorUpdateToOneWithWhereWithoutMovieInput, vendorUpdateWithoutMovieInput>,
      vendorUncheckedUpdateWithoutMovieInput
    >;
  };

  export type reviewUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<reviewCreateWithoutMovieInput, reviewUncheckedCreateWithoutMovieInput>
      | reviewCreateWithoutMovieInput[]
      | reviewUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutMovieInput | reviewCreateOrConnectWithoutMovieInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutMovieInput | reviewUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: reviewCreateManyMovieInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutMovieInput | reviewUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutMovieInput | reviewUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<reviewCreateWithoutMovieInput, reviewUncheckedCreateWithoutMovieInput>
      | reviewCreateWithoutMovieInput[]
      | reviewUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutMovieInput | reviewCreateOrConnectWithoutMovieInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutMovieInput | reviewUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: reviewCreateManyMovieInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutMovieInput | reviewUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutMovieInput | reviewUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type movieCreateNestedOneWithoutReviewInput = {
    create?: XOR<movieCreateWithoutReviewInput, movieUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: movieCreateOrConnectWithoutReviewInput;
    connect?: movieWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutReviewInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    connect?: userWhereUniqueInput;
  };

  export type movieUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<movieCreateWithoutReviewInput, movieUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: movieCreateOrConnectWithoutReviewInput;
    upsert?: movieUpsertWithoutReviewInput;
    connect?: movieWhereUniqueInput;
    update?: XOR<
      XOR<movieUpdateToOneWithWhereWithoutReviewInput, movieUpdateWithoutReviewInput>,
      movieUncheckedUpdateWithoutReviewInput
    >;
  };

  export type userUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    upsert?: userUpsertWithoutReviewInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutReviewInput, userUpdateWithoutReviewInput>,
      userUncheckedUpdateWithoutReviewInput
    >;
  };

  export type eventCreateNestedOneWithoutTicketInput = {
    create?: XOR<eventCreateWithoutTicketInput, eventUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: eventCreateOrConnectWithoutTicketInput;
    connect?: eventWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTicketInput = {
    create?: XOR<userCreateWithoutTicketInput, userUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: userCreateOrConnectWithoutTicketInput;
    connect?: userWhereUniqueInput;
  };

  export type eventUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<eventCreateWithoutTicketInput, eventUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: eventCreateOrConnectWithoutTicketInput;
    upsert?: eventUpsertWithoutTicketInput;
    connect?: eventWhereUniqueInput;
    update?: XOR<
      XOR<eventUpdateToOneWithWhereWithoutTicketInput, eventUpdateWithoutTicketInput>,
      eventUncheckedUpdateWithoutTicketInput
    >;
  };

  export type userUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<userCreateWithoutTicketInput, userUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: userCreateOrConnectWithoutTicketInput;
    upsert?: userUpsertWithoutTicketInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTicketInput, userUpdateWithoutTicketInput>,
      userUncheckedUpdateWithoutTicketInput
    >;
  };

  export type reviewCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type ticketCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
      | ticketCreateWithoutUserInput[]
      | ticketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[];
    createMany?: ticketCreateManyUserInputEnvelope;
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type ticketUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
      | ticketCreateWithoutUserInput[]
      | ticketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[];
    createMany?: ticketCreateManyUserInputEnvelope;
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
  };

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type ticketUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
      | ticketCreateWithoutUserInput[]
      | ticketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[];
    upsert?: ticketUpsertWithWhereUniqueWithoutUserInput | ticketUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ticketCreateManyUserInputEnvelope;
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    update?: ticketUpdateWithWhereUniqueWithoutUserInput | ticketUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ticketUpdateManyWithWhereWithoutUserInput | ticketUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type ticketUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
      | ticketCreateWithoutUserInput[]
      | ticketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[];
    upsert?: ticketUpsertWithWhereUniqueWithoutUserInput | ticketUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ticketCreateManyUserInputEnvelope;
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    update?: ticketUpdateWithWhereUniqueWithoutUserInput | ticketUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ticketUpdateManyWithWhereWithoutUserInput | ticketUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[];
  };

  export type eventCreateNestedManyWithoutVendorInput = {
    create?:
      | XOR<eventCreateWithoutVendorInput, eventUncheckedCreateWithoutVendorInput>
      | eventCreateWithoutVendorInput[]
      | eventUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: eventCreateOrConnectWithoutVendorInput | eventCreateOrConnectWithoutVendorInput[];
    createMany?: eventCreateManyVendorInputEnvelope;
    connect?: eventWhereUniqueInput | eventWhereUniqueInput[];
  };

  export type movieCreateNestedManyWithoutVendorInput = {
    create?:
      | XOR<movieCreateWithoutVendorInput, movieUncheckedCreateWithoutVendorInput>
      | movieCreateWithoutVendorInput[]
      | movieUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: movieCreateOrConnectWithoutVendorInput | movieCreateOrConnectWithoutVendorInput[];
    createMany?: movieCreateManyVendorInputEnvelope;
    connect?: movieWhereUniqueInput | movieWhereUniqueInput[];
  };

  export type eventUncheckedCreateNestedManyWithoutVendorInput = {
    create?:
      | XOR<eventCreateWithoutVendorInput, eventUncheckedCreateWithoutVendorInput>
      | eventCreateWithoutVendorInput[]
      | eventUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: eventCreateOrConnectWithoutVendorInput | eventCreateOrConnectWithoutVendorInput[];
    createMany?: eventCreateManyVendorInputEnvelope;
    connect?: eventWhereUniqueInput | eventWhereUniqueInput[];
  };

  export type movieUncheckedCreateNestedManyWithoutVendorInput = {
    create?:
      | XOR<movieCreateWithoutVendorInput, movieUncheckedCreateWithoutVendorInput>
      | movieCreateWithoutVendorInput[]
      | movieUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: movieCreateOrConnectWithoutVendorInput | movieCreateOrConnectWithoutVendorInput[];
    createMany?: movieCreateManyVendorInputEnvelope;
    connect?: movieWhereUniqueInput | movieWhereUniqueInput[];
  };

  export type eventUpdateManyWithoutVendorNestedInput = {
    create?:
      | XOR<eventCreateWithoutVendorInput, eventUncheckedCreateWithoutVendorInput>
      | eventCreateWithoutVendorInput[]
      | eventUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: eventCreateOrConnectWithoutVendorInput | eventCreateOrConnectWithoutVendorInput[];
    upsert?: eventUpsertWithWhereUniqueWithoutVendorInput | eventUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: eventCreateManyVendorInputEnvelope;
    set?: eventWhereUniqueInput | eventWhereUniqueInput[];
    disconnect?: eventWhereUniqueInput | eventWhereUniqueInput[];
    delete?: eventWhereUniqueInput | eventWhereUniqueInput[];
    connect?: eventWhereUniqueInput | eventWhereUniqueInput[];
    update?: eventUpdateWithWhereUniqueWithoutVendorInput | eventUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: eventUpdateManyWithWhereWithoutVendorInput | eventUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: eventScalarWhereInput | eventScalarWhereInput[];
  };

  export type movieUpdateManyWithoutVendorNestedInput = {
    create?:
      | XOR<movieCreateWithoutVendorInput, movieUncheckedCreateWithoutVendorInput>
      | movieCreateWithoutVendorInput[]
      | movieUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: movieCreateOrConnectWithoutVendorInput | movieCreateOrConnectWithoutVendorInput[];
    upsert?: movieUpsertWithWhereUniqueWithoutVendorInput | movieUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: movieCreateManyVendorInputEnvelope;
    set?: movieWhereUniqueInput | movieWhereUniqueInput[];
    disconnect?: movieWhereUniqueInput | movieWhereUniqueInput[];
    delete?: movieWhereUniqueInput | movieWhereUniqueInput[];
    connect?: movieWhereUniqueInput | movieWhereUniqueInput[];
    update?: movieUpdateWithWhereUniqueWithoutVendorInput | movieUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: movieUpdateManyWithWhereWithoutVendorInput | movieUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: movieScalarWhereInput | movieScalarWhereInput[];
  };

  export type eventUncheckedUpdateManyWithoutVendorNestedInput = {
    create?:
      | XOR<eventCreateWithoutVendorInput, eventUncheckedCreateWithoutVendorInput>
      | eventCreateWithoutVendorInput[]
      | eventUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: eventCreateOrConnectWithoutVendorInput | eventCreateOrConnectWithoutVendorInput[];
    upsert?: eventUpsertWithWhereUniqueWithoutVendorInput | eventUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: eventCreateManyVendorInputEnvelope;
    set?: eventWhereUniqueInput | eventWhereUniqueInput[];
    disconnect?: eventWhereUniqueInput | eventWhereUniqueInput[];
    delete?: eventWhereUniqueInput | eventWhereUniqueInput[];
    connect?: eventWhereUniqueInput | eventWhereUniqueInput[];
    update?: eventUpdateWithWhereUniqueWithoutVendorInput | eventUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: eventUpdateManyWithWhereWithoutVendorInput | eventUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: eventScalarWhereInput | eventScalarWhereInput[];
  };

  export type movieUncheckedUpdateManyWithoutVendorNestedInput = {
    create?:
      | XOR<movieCreateWithoutVendorInput, movieUncheckedCreateWithoutVendorInput>
      | movieCreateWithoutVendorInput[]
      | movieUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: movieCreateOrConnectWithoutVendorInput | movieCreateOrConnectWithoutVendorInput[];
    upsert?: movieUpsertWithWhereUniqueWithoutVendorInput | movieUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: movieCreateManyVendorInputEnvelope;
    set?: movieWhereUniqueInput | movieWhereUniqueInput[];
    disconnect?: movieWhereUniqueInput | movieWhereUniqueInput[];
    delete?: movieWhereUniqueInput | movieWhereUniqueInput[];
    connect?: movieWhereUniqueInput | movieWhereUniqueInput[];
    update?: movieUpdateWithWhereUniqueWithoutVendorInput | movieUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: movieUpdateManyWithWhereWithoutVendorInput | movieUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: movieScalarWhereInput | movieScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
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

  export type vendorCreateWithoutEventInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    movie?: movieCreateNestedManyWithoutVendorInput;
  };

  export type vendorUncheckedCreateWithoutEventInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    movie?: movieUncheckedCreateNestedManyWithoutVendorInput;
  };

  export type vendorCreateOrConnectWithoutEventInput = {
    where: vendorWhereUniqueInput;
    create: XOR<vendorCreateWithoutEventInput, vendorUncheckedCreateWithoutEventInput>;
  };

  export type ticketCreateWithoutEventInput = {
    id?: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTicketInput;
  };

  export type ticketUncheckedCreateWithoutEventInput = {
    id?: string;
    price: number;
    quantity: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketCreateOrConnectWithoutEventInput = {
    where: ticketWhereUniqueInput;
    create: XOR<ticketCreateWithoutEventInput, ticketUncheckedCreateWithoutEventInput>;
  };

  export type ticketCreateManyEventInputEnvelope = {
    data: ticketCreateManyEventInput | ticketCreateManyEventInput[];
    skipDuplicates?: boolean;
  };

  export type vendorUpsertWithoutEventInput = {
    update: XOR<vendorUpdateWithoutEventInput, vendorUncheckedUpdateWithoutEventInput>;
    create: XOR<vendorCreateWithoutEventInput, vendorUncheckedCreateWithoutEventInput>;
    where?: vendorWhereInput;
  };

  export type vendorUpdateToOneWithWhereWithoutEventInput = {
    where?: vendorWhereInput;
    data: XOR<vendorUpdateWithoutEventInput, vendorUncheckedUpdateWithoutEventInput>;
  };

  export type vendorUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    movie?: movieUpdateManyWithoutVendorNestedInput;
  };

  export type vendorUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    movie?: movieUncheckedUpdateManyWithoutVendorNestedInput;
  };

  export type ticketUpsertWithWhereUniqueWithoutEventInput = {
    where: ticketWhereUniqueInput;
    update: XOR<ticketUpdateWithoutEventInput, ticketUncheckedUpdateWithoutEventInput>;
    create: XOR<ticketCreateWithoutEventInput, ticketUncheckedCreateWithoutEventInput>;
  };

  export type ticketUpdateWithWhereUniqueWithoutEventInput = {
    where: ticketWhereUniqueInput;
    data: XOR<ticketUpdateWithoutEventInput, ticketUncheckedUpdateWithoutEventInput>;
  };

  export type ticketUpdateManyWithWhereWithoutEventInput = {
    where: ticketScalarWhereInput;
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutEventInput>;
  };

  export type ticketScalarWhereInput = {
    AND?: ticketScalarWhereInput | ticketScalarWhereInput[];
    OR?: ticketScalarWhereInput[];
    NOT?: ticketScalarWhereInput | ticketScalarWhereInput[];
    id?: UuidFilter<'ticket'> | string;
    price?: IntFilter<'ticket'> | number;
    quantity?: IntFilter<'ticket'> | number;
    event_id?: UuidFilter<'ticket'> | string;
    user_id?: UuidFilter<'ticket'> | string;
    created_at?: DateTimeFilter<'ticket'> | Date | string;
    updated_at?: DateTimeFilter<'ticket'> | Date | string;
  };

  export type vendorCreateWithoutMovieInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    event?: eventCreateNestedManyWithoutVendorInput;
  };

  export type vendorUncheckedCreateWithoutMovieInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    event?: eventUncheckedCreateNestedManyWithoutVendorInput;
  };

  export type vendorCreateOrConnectWithoutMovieInput = {
    where: vendorWhereUniqueInput;
    create: XOR<vendorCreateWithoutMovieInput, vendorUncheckedCreateWithoutMovieInput>;
  };

  export type reviewCreateWithoutMovieInput = {
    id?: string;
    content: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutMovieInput = {
    id?: string;
    content: string;
    rating: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutMovieInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutMovieInput, reviewUncheckedCreateWithoutMovieInput>;
  };

  export type reviewCreateManyMovieInputEnvelope = {
    data: reviewCreateManyMovieInput | reviewCreateManyMovieInput[];
    skipDuplicates?: boolean;
  };

  export type vendorUpsertWithoutMovieInput = {
    update: XOR<vendorUpdateWithoutMovieInput, vendorUncheckedUpdateWithoutMovieInput>;
    create: XOR<vendorCreateWithoutMovieInput, vendorUncheckedCreateWithoutMovieInput>;
    where?: vendorWhereInput;
  };

  export type vendorUpdateToOneWithWhereWithoutMovieInput = {
    where?: vendorWhereInput;
    data: XOR<vendorUpdateWithoutMovieInput, vendorUncheckedUpdateWithoutMovieInput>;
  };

  export type vendorUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    event?: eventUpdateManyWithoutVendorNestedInput;
  };

  export type vendorUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    event?: eventUncheckedUpdateManyWithoutVendorNestedInput;
  };

  export type reviewUpsertWithWhereUniqueWithoutMovieInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutMovieInput, reviewUncheckedUpdateWithoutMovieInput>;
    create: XOR<reviewCreateWithoutMovieInput, reviewUncheckedCreateWithoutMovieInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutMovieInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutMovieInput, reviewUncheckedUpdateWithoutMovieInput>;
  };

  export type reviewUpdateManyWithWhereWithoutMovieInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutMovieInput>;
  };

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[];
    OR?: reviewScalarWhereInput[];
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[];
    id?: UuidFilter<'review'> | string;
    content?: StringFilter<'review'> | string;
    rating?: IntFilter<'review'> | number;
    user_id?: UuidFilter<'review'> | string;
    movie_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
  };

  export type movieCreateWithoutReviewInput = {
    id?: string;
    title: string;
    genre: string;
    duration: number;
    rating: number;
    release_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vendor: vendorCreateNestedOneWithoutMovieInput;
  };

  export type movieUncheckedCreateWithoutReviewInput = {
    id?: string;
    title: string;
    genre: string;
    duration: number;
    rating: number;
    release_date: Date | string;
    vendor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type movieCreateOrConnectWithoutReviewInput = {
    where: movieWhereUniqueInput;
    create: XOR<movieCreateWithoutReviewInput, movieUncheckedCreateWithoutReviewInput>;
  };

  export type userCreateWithoutReviewInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutReviewInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutReviewInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
  };

  export type movieUpsertWithoutReviewInput = {
    update: XOR<movieUpdateWithoutReviewInput, movieUncheckedUpdateWithoutReviewInput>;
    create: XOR<movieCreateWithoutReviewInput, movieUncheckedCreateWithoutReviewInput>;
    where?: movieWhereInput;
  };

  export type movieUpdateToOneWithWhereWithoutReviewInput = {
    where?: movieWhereInput;
    data: XOR<movieUpdateWithoutReviewInput, movieUncheckedUpdateWithoutReviewInput>;
  };

  export type movieUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    vendor?: vendorUpdateOneRequiredWithoutMovieNestedInput;
  };

  export type movieUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    vendor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutReviewInput = {
    update: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutReviewInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
  };

  export type userUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type eventCreateWithoutTicketInput = {
    id?: string;
    name: string;
    description?: string | null;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vendor: vendorCreateNestedOneWithoutEventInput;
  };

  export type eventUncheckedCreateWithoutTicketInput = {
    id?: string;
    name: string;
    description?: string | null;
    date: Date | string;
    location: string;
    vendor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type eventCreateOrConnectWithoutTicketInput = {
    where: eventWhereUniqueInput;
    create: XOR<eventCreateWithoutTicketInput, eventUncheckedCreateWithoutTicketInput>;
  };

  export type userCreateWithoutTicketInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTicketInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTicketInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTicketInput, userUncheckedCreateWithoutTicketInput>;
  };

  export type eventUpsertWithoutTicketInput = {
    update: XOR<eventUpdateWithoutTicketInput, eventUncheckedUpdateWithoutTicketInput>;
    create: XOR<eventCreateWithoutTicketInput, eventUncheckedCreateWithoutTicketInput>;
    where?: eventWhereInput;
  };

  export type eventUpdateToOneWithWhereWithoutTicketInput = {
    where?: eventWhereInput;
    data: XOR<eventUpdateWithoutTicketInput, eventUncheckedUpdateWithoutTicketInput>;
  };

  export type eventUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    vendor?: vendorUpdateOneRequiredWithoutEventNestedInput;
  };

  export type eventUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    vendor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutTicketInput = {
    update: XOR<userUpdateWithoutTicketInput, userUncheckedUpdateWithoutTicketInput>;
    create: XOR<userCreateWithoutTicketInput, userUncheckedCreateWithoutTicketInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTicketInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTicketInput, userUncheckedUpdateWithoutTicketInput>;
  };

  export type userUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type reviewCreateWithoutUserInput = {
    id?: string;
    content: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    movie: movieCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutUserInput = {
    id?: string;
    content: string;
    rating: number;
    movie_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ticketCreateWithoutUserInput = {
    id?: string;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    event: eventCreateNestedOneWithoutTicketInput;
  };

  export type ticketUncheckedCreateWithoutUserInput = {
    id?: string;
    price: number;
    quantity: number;
    event_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketCreateOrConnectWithoutUserInput = {
    where: ticketWhereUniqueInput;
    create: XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>;
  };

  export type ticketCreateManyUserInputEnvelope = {
    data: ticketCreateManyUserInput | ticketCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
  };

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>;
  };

  export type ticketUpsertWithWhereUniqueWithoutUserInput = {
    where: ticketWhereUniqueInput;
    update: XOR<ticketUpdateWithoutUserInput, ticketUncheckedUpdateWithoutUserInput>;
    create: XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>;
  };

  export type ticketUpdateWithWhereUniqueWithoutUserInput = {
    where: ticketWhereUniqueInput;
    data: XOR<ticketUpdateWithoutUserInput, ticketUncheckedUpdateWithoutUserInput>;
  };

  export type ticketUpdateManyWithWhereWithoutUserInput = {
    where: ticketScalarWhereInput;
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutUserInput>;
  };

  export type eventCreateWithoutVendorInput = {
    id?: string;
    name: string;
    description?: string | null;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketCreateNestedManyWithoutEventInput;
  };

  export type eventUncheckedCreateWithoutVendorInput = {
    id?: string;
    name: string;
    description?: string | null;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketUncheckedCreateNestedManyWithoutEventInput;
  };

  export type eventCreateOrConnectWithoutVendorInput = {
    where: eventWhereUniqueInput;
    create: XOR<eventCreateWithoutVendorInput, eventUncheckedCreateWithoutVendorInput>;
  };

  export type eventCreateManyVendorInputEnvelope = {
    data: eventCreateManyVendorInput | eventCreateManyVendorInput[];
    skipDuplicates?: boolean;
  };

  export type movieCreateWithoutVendorInput = {
    id?: string;
    title: string;
    genre: string;
    duration: number;
    rating: number;
    release_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewCreateNestedManyWithoutMovieInput;
  };

  export type movieUncheckedCreateWithoutVendorInput = {
    id?: string;
    title: string;
    genre: string;
    duration: number;
    rating: number;
    release_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutMovieInput;
  };

  export type movieCreateOrConnectWithoutVendorInput = {
    where: movieWhereUniqueInput;
    create: XOR<movieCreateWithoutVendorInput, movieUncheckedCreateWithoutVendorInput>;
  };

  export type movieCreateManyVendorInputEnvelope = {
    data: movieCreateManyVendorInput | movieCreateManyVendorInput[];
    skipDuplicates?: boolean;
  };

  export type eventUpsertWithWhereUniqueWithoutVendorInput = {
    where: eventWhereUniqueInput;
    update: XOR<eventUpdateWithoutVendorInput, eventUncheckedUpdateWithoutVendorInput>;
    create: XOR<eventCreateWithoutVendorInput, eventUncheckedCreateWithoutVendorInput>;
  };

  export type eventUpdateWithWhereUniqueWithoutVendorInput = {
    where: eventWhereUniqueInput;
    data: XOR<eventUpdateWithoutVendorInput, eventUncheckedUpdateWithoutVendorInput>;
  };

  export type eventUpdateManyWithWhereWithoutVendorInput = {
    where: eventScalarWhereInput;
    data: XOR<eventUpdateManyMutationInput, eventUncheckedUpdateManyWithoutVendorInput>;
  };

  export type eventScalarWhereInput = {
    AND?: eventScalarWhereInput | eventScalarWhereInput[];
    OR?: eventScalarWhereInput[];
    NOT?: eventScalarWhereInput | eventScalarWhereInput[];
    id?: UuidFilter<'event'> | string;
    name?: StringFilter<'event'> | string;
    description?: StringNullableFilter<'event'> | string | null;
    date?: DateTimeFilter<'event'> | Date | string;
    location?: StringFilter<'event'> | string;
    vendor_id?: UuidFilter<'event'> | string;
    created_at?: DateTimeFilter<'event'> | Date | string;
    updated_at?: DateTimeFilter<'event'> | Date | string;
  };

  export type movieUpsertWithWhereUniqueWithoutVendorInput = {
    where: movieWhereUniqueInput;
    update: XOR<movieUpdateWithoutVendorInput, movieUncheckedUpdateWithoutVendorInput>;
    create: XOR<movieCreateWithoutVendorInput, movieUncheckedCreateWithoutVendorInput>;
  };

  export type movieUpdateWithWhereUniqueWithoutVendorInput = {
    where: movieWhereUniqueInput;
    data: XOR<movieUpdateWithoutVendorInput, movieUncheckedUpdateWithoutVendorInput>;
  };

  export type movieUpdateManyWithWhereWithoutVendorInput = {
    where: movieScalarWhereInput;
    data: XOR<movieUpdateManyMutationInput, movieUncheckedUpdateManyWithoutVendorInput>;
  };

  export type movieScalarWhereInput = {
    AND?: movieScalarWhereInput | movieScalarWhereInput[];
    OR?: movieScalarWhereInput[];
    NOT?: movieScalarWhereInput | movieScalarWhereInput[];
    id?: UuidFilter<'movie'> | string;
    title?: StringFilter<'movie'> | string;
    genre?: StringFilter<'movie'> | string;
    duration?: IntFilter<'movie'> | number;
    rating?: IntFilter<'movie'> | number;
    release_date?: DateTimeFilter<'movie'> | Date | string;
    vendor_id?: UuidFilter<'movie'> | string;
    created_at?: DateTimeFilter<'movie'> | Date | string;
    updated_at?: DateTimeFilter<'movie'> | Date | string;
  };

  export type ticketCreateManyEventInput = {
    id?: string;
    price: number;
    quantity: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTicketNestedInput;
  };

  export type ticketUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateManyMovieInput = {
    id?: string;
    content: string;
    rating: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateManyUserInput = {
    id?: string;
    content: string;
    rating: number;
    movie_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketCreateManyUserInput = {
    id?: string;
    price: number;
    quantity: number;
    event_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: movieUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    movie_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    movie_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    event?: eventUpdateOneRequiredWithoutTicketNestedInput;
  };

  export type ticketUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    event_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    event_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type eventCreateManyVendorInput = {
    id?: string;
    name: string;
    description?: string | null;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type movieCreateManyVendorInput = {
    id?: string;
    title: string;
    genre: string;
    duration: number;
    rating: number;
    release_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type eventUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUpdateManyWithoutEventNestedInput;
  };

  export type eventUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUncheckedUpdateManyWithoutEventNestedInput;
  };

  export type eventUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type movieUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUpdateManyWithoutMovieNestedInput;
  };

  export type movieUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutMovieNestedInput;
  };

  export type movieUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use EventCountOutputTypeDefaultArgs instead
   */
  export type EventCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    EventCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MovieCountOutputTypeDefaultArgs instead
   */
  export type MovieCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    MovieCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use VendorCountOutputTypeDefaultArgs instead
   */
  export type VendorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    VendorCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use eventDefaultArgs instead
   */
  export type eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = eventDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use movieDefaultArgs instead
   */
  export type movieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = movieDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use reviewDefaultArgs instead
   */
  export type reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    reviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ticketDefaultArgs instead
   */
  export type ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ticketDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use vendorDefaultArgs instead
   */
  export type vendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    vendorDefaultArgs<ExtArgs>;

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
