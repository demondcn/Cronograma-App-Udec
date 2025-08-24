
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
 * Model Programa
 * 
 */
export type Programa = $Result.DefaultSelection<Prisma.$ProgramaPayload>
/**
 * Model Asignatura
 * 
 */
export type Asignatura = $Result.DefaultSelection<Prisma.$AsignaturaPayload>
/**
 * Model Aula
 * 
 */
export type Aula = $Result.DefaultSelection<Prisma.$AulaPayload>
/**
 * Model Profesor
 * 
 */
export type Profesor = $Result.DefaultSelection<Prisma.$ProfesorPayload>
/**
 * Model Horario
 * 
 */
export type Horario = $Result.DefaultSelection<Prisma.$HorarioPayload>
/**
 * Model Asistencia
 * 
 */
export type Asistencia = $Result.DefaultSelection<Prisma.$AsistenciaPayload>
/**
 * Model EstadoAula
 * 
 */
export type EstadoAula = $Result.DefaultSelection<Prisma.$EstadoAulaPayload>
/**
 * Model RegistroSistema
 * 
 */
export type RegistroSistema = $Result.DefaultSelection<Prisma.$RegistroSistemaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoAsistencia: {
  ASISTIO: 'ASISTIO',
  NO_ASISTIO: 'NO_ASISTIO',
  TARDANZA: 'TARDANZA',
  JUSTIFICADA: 'JUSTIFICADA',
  CANCELADA: 'CANCELADA'
};

export type EstadoAsistencia = (typeof EstadoAsistencia)[keyof typeof EstadoAsistencia]

}

export type EstadoAsistencia = $Enums.EstadoAsistencia

export const EstadoAsistencia: typeof $Enums.EstadoAsistencia

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Programas
 * const programas = await prisma.programa.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Programas
   * const programas = await prisma.programa.findMany()
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
   * `prisma.programa`: Exposes CRUD operations for the **Programa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programas
    * const programas = await prisma.programa.findMany()
    * ```
    */
  get programa(): Prisma.ProgramaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asignatura`: Exposes CRUD operations for the **Asignatura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asignaturas
    * const asignaturas = await prisma.asignatura.findMany()
    * ```
    */
  get asignatura(): Prisma.AsignaturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aula`: Exposes CRUD operations for the **Aula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aulas
    * const aulas = await prisma.aula.findMany()
    * ```
    */
  get aula(): Prisma.AulaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profesor`: Exposes CRUD operations for the **Profesor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profesors
    * const profesors = await prisma.profesor.findMany()
    * ```
    */
  get profesor(): Prisma.ProfesorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horario`: Exposes CRUD operations for the **Horario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Horarios
    * const horarios = await prisma.horario.findMany()
    * ```
    */
  get horario(): Prisma.HorarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asistencia`: Exposes CRUD operations for the **Asistencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asistencias
    * const asistencias = await prisma.asistencia.findMany()
    * ```
    */
  get asistencia(): Prisma.AsistenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estadoAula`: Exposes CRUD operations for the **EstadoAula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstadoAulas
    * const estadoAulas = await prisma.estadoAula.findMany()
    * ```
    */
  get estadoAula(): Prisma.EstadoAulaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroSistema`: Exposes CRUD operations for the **RegistroSistema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroSistemas
    * const registroSistemas = await prisma.registroSistema.findMany()
    * ```
    */
  get registroSistema(): Prisma.RegistroSistemaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    Programa: 'Programa',
    Asignatura: 'Asignatura',
    Aula: 'Aula',
    Profesor: 'Profesor',
    Horario: 'Horario',
    Asistencia: 'Asistencia',
    EstadoAula: 'EstadoAula',
    RegistroSistema: 'RegistroSistema'
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
      modelProps: "programa" | "asignatura" | "aula" | "profesor" | "horario" | "asistencia" | "estadoAula" | "registroSistema"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Programa: {
        payload: Prisma.$ProgramaPayload<ExtArgs>
        fields: Prisma.ProgramaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramaPayload>
          }
          findFirst: {
            args: Prisma.ProgramaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramaPayload>
          }
          findMany: {
            args: Prisma.ProgramaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramaPayload>[]
          }
          create: {
            args: Prisma.ProgramaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramaPayload>
          }
          createMany: {
            args: Prisma.ProgramaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramaPayload>[]
          }
          delete: {
            args: Prisma.ProgramaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramaPayload>
          }
          update: {
            args: Prisma.ProgramaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramaPayload>
          }
          deleteMany: {
            args: Prisma.ProgramaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramaPayload>[]
          }
          upsert: {
            args: Prisma.ProgramaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramaPayload>
          }
          aggregate: {
            args: Prisma.ProgramaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrograma>
          }
          groupBy: {
            args: Prisma.ProgramaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramaCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramaCountAggregateOutputType> | number
          }
        }
      }
      Asignatura: {
        payload: Prisma.$AsignaturaPayload<ExtArgs>
        fields: Prisma.AsignaturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsignaturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsignaturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaPayload>
          }
          findFirst: {
            args: Prisma.AsignaturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsignaturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaPayload>
          }
          findMany: {
            args: Prisma.AsignaturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaPayload>[]
          }
          create: {
            args: Prisma.AsignaturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaPayload>
          }
          createMany: {
            args: Prisma.AsignaturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsignaturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaPayload>[]
          }
          delete: {
            args: Prisma.AsignaturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaPayload>
          }
          update: {
            args: Prisma.AsignaturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaPayload>
          }
          deleteMany: {
            args: Prisma.AsignaturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsignaturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsignaturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaPayload>[]
          }
          upsert: {
            args: Prisma.AsignaturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaPayload>
          }
          aggregate: {
            args: Prisma.AsignaturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsignatura>
          }
          groupBy: {
            args: Prisma.AsignaturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsignaturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsignaturaCountArgs<ExtArgs>
            result: $Utils.Optional<AsignaturaCountAggregateOutputType> | number
          }
        }
      }
      Aula: {
        payload: Prisma.$AulaPayload<ExtArgs>
        fields: Prisma.AulaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AulaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AulaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          findFirst: {
            args: Prisma.AulaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AulaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          findMany: {
            args: Prisma.AulaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>[]
          }
          create: {
            args: Prisma.AulaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          createMany: {
            args: Prisma.AulaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AulaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>[]
          }
          delete: {
            args: Prisma.AulaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          update: {
            args: Prisma.AulaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          deleteMany: {
            args: Prisma.AulaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AulaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AulaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>[]
          }
          upsert: {
            args: Prisma.AulaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          aggregate: {
            args: Prisma.AulaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAula>
          }
          groupBy: {
            args: Prisma.AulaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AulaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AulaCountArgs<ExtArgs>
            result: $Utils.Optional<AulaCountAggregateOutputType> | number
          }
        }
      }
      Profesor: {
        payload: Prisma.$ProfesorPayload<ExtArgs>
        fields: Prisma.ProfesorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfesorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfesorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          findFirst: {
            args: Prisma.ProfesorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfesorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          findMany: {
            args: Prisma.ProfesorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>[]
          }
          create: {
            args: Prisma.ProfesorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          createMany: {
            args: Prisma.ProfesorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfesorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>[]
          }
          delete: {
            args: Prisma.ProfesorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          update: {
            args: Prisma.ProfesorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          deleteMany: {
            args: Prisma.ProfesorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfesorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfesorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>[]
          }
          upsert: {
            args: Prisma.ProfesorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          aggregate: {
            args: Prisma.ProfesorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfesor>
          }
          groupBy: {
            args: Prisma.ProfesorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfesorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfesorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfesorCountAggregateOutputType> | number
          }
        }
      }
      Horario: {
        payload: Prisma.$HorarioPayload<ExtArgs>
        fields: Prisma.HorarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          findFirst: {
            args: Prisma.HorarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          findMany: {
            args: Prisma.HorarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>[]
          }
          create: {
            args: Prisma.HorarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          createMany: {
            args: Prisma.HorarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HorarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>[]
          }
          delete: {
            args: Prisma.HorarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          update: {
            args: Prisma.HorarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          deleteMany: {
            args: Prisma.HorarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HorarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>[]
          }
          upsert: {
            args: Prisma.HorarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          aggregate: {
            args: Prisma.HorarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorario>
          }
          groupBy: {
            args: Prisma.HorarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorarioCountArgs<ExtArgs>
            result: $Utils.Optional<HorarioCountAggregateOutputType> | number
          }
        }
      }
      Asistencia: {
        payload: Prisma.$AsistenciaPayload<ExtArgs>
        fields: Prisma.AsistenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsistenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsistenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          findFirst: {
            args: Prisma.AsistenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsistenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          findMany: {
            args: Prisma.AsistenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>[]
          }
          create: {
            args: Prisma.AsistenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          createMany: {
            args: Prisma.AsistenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsistenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>[]
          }
          delete: {
            args: Prisma.AsistenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          update: {
            args: Prisma.AsistenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          deleteMany: {
            args: Prisma.AsistenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsistenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsistenciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>[]
          }
          upsert: {
            args: Prisma.AsistenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          aggregate: {
            args: Prisma.AsistenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsistencia>
          }
          groupBy: {
            args: Prisma.AsistenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsistenciaCountArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaCountAggregateOutputType> | number
          }
        }
      }
      EstadoAula: {
        payload: Prisma.$EstadoAulaPayload<ExtArgs>
        fields: Prisma.EstadoAulaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadoAulaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoAulaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadoAulaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoAulaPayload>
          }
          findFirst: {
            args: Prisma.EstadoAulaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoAulaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadoAulaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoAulaPayload>
          }
          findMany: {
            args: Prisma.EstadoAulaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoAulaPayload>[]
          }
          create: {
            args: Prisma.EstadoAulaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoAulaPayload>
          }
          createMany: {
            args: Prisma.EstadoAulaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstadoAulaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoAulaPayload>[]
          }
          delete: {
            args: Prisma.EstadoAulaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoAulaPayload>
          }
          update: {
            args: Prisma.EstadoAulaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoAulaPayload>
          }
          deleteMany: {
            args: Prisma.EstadoAulaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstadoAulaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstadoAulaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoAulaPayload>[]
          }
          upsert: {
            args: Prisma.EstadoAulaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoAulaPayload>
          }
          aggregate: {
            args: Prisma.EstadoAulaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstadoAula>
          }
          groupBy: {
            args: Prisma.EstadoAulaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoAulaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadoAulaCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoAulaCountAggregateOutputType> | number
          }
        }
      }
      RegistroSistema: {
        payload: Prisma.$RegistroSistemaPayload<ExtArgs>
        fields: Prisma.RegistroSistemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroSistemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSistemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroSistemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSistemaPayload>
          }
          findFirst: {
            args: Prisma.RegistroSistemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSistemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroSistemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSistemaPayload>
          }
          findMany: {
            args: Prisma.RegistroSistemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSistemaPayload>[]
          }
          create: {
            args: Prisma.RegistroSistemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSistemaPayload>
          }
          createMany: {
            args: Prisma.RegistroSistemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroSistemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSistemaPayload>[]
          }
          delete: {
            args: Prisma.RegistroSistemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSistemaPayload>
          }
          update: {
            args: Prisma.RegistroSistemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSistemaPayload>
          }
          deleteMany: {
            args: Prisma.RegistroSistemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroSistemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroSistemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSistemaPayload>[]
          }
          upsert: {
            args: Prisma.RegistroSistemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSistemaPayload>
          }
          aggregate: {
            args: Prisma.RegistroSistemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroSistema>
          }
          groupBy: {
            args: Prisma.RegistroSistemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroSistemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroSistemaCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroSistemaCountAggregateOutputType> | number
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
    programa?: ProgramaOmit
    asignatura?: AsignaturaOmit
    aula?: AulaOmit
    profesor?: ProfesorOmit
    horario?: HorarioOmit
    asistencia?: AsistenciaOmit
    estadoAula?: EstadoAulaOmit
    registroSistema?: RegistroSistemaOmit
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
   * Count Type ProgramaCountOutputType
   */

  export type ProgramaCountOutputType = {
    asignaturas: number
  }

  export type ProgramaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asignaturas?: boolean | ProgramaCountOutputTypeCountAsignaturasArgs
  }

  // Custom InputTypes
  /**
   * ProgramaCountOutputType without action
   */
  export type ProgramaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramaCountOutputType
     */
    select?: ProgramaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramaCountOutputType without action
   */
  export type ProgramaCountOutputTypeCountAsignaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignaturaWhereInput
  }


  /**
   * Count Type AsignaturaCountOutputType
   */

  export type AsignaturaCountOutputType = {
    asistencias: number
    horarios: number
  }

  export type AsignaturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | AsignaturaCountOutputTypeCountAsistenciasArgs
    horarios?: boolean | AsignaturaCountOutputTypeCountHorariosArgs
  }

  // Custom InputTypes
  /**
   * AsignaturaCountOutputType without action
   */
  export type AsignaturaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaCountOutputType
     */
    select?: AsignaturaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AsignaturaCountOutputType without action
   */
  export type AsignaturaCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
  }

  /**
   * AsignaturaCountOutputType without action
   */
  export type AsignaturaCountOutputTypeCountHorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioWhereInput
  }


  /**
   * Count Type AulaCountOutputType
   */

  export type AulaCountOutputType = {
    asistencias: number
    estados: number
    horarios: number
  }

  export type AulaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | AulaCountOutputTypeCountAsistenciasArgs
    estados?: boolean | AulaCountOutputTypeCountEstadosArgs
    horarios?: boolean | AulaCountOutputTypeCountHorariosArgs
  }

  // Custom InputTypes
  /**
   * AulaCountOutputType without action
   */
  export type AulaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaCountOutputType
     */
    select?: AulaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AulaCountOutputType without action
   */
  export type AulaCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
  }

  /**
   * AulaCountOutputType without action
   */
  export type AulaCountOutputTypeCountEstadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoAulaWhereInput
  }

  /**
   * AulaCountOutputType without action
   */
  export type AulaCountOutputTypeCountHorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioWhereInput
  }


  /**
   * Count Type ProfesorCountOutputType
   */

  export type ProfesorCountOutputType = {
    asistencias: number
    horarios: number
  }

  export type ProfesorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | ProfesorCountOutputTypeCountAsistenciasArgs
    horarios?: boolean | ProfesorCountOutputTypeCountHorariosArgs
  }

  // Custom InputTypes
  /**
   * ProfesorCountOutputType without action
   */
  export type ProfesorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfesorCountOutputType
     */
    select?: ProfesorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfesorCountOutputType without action
   */
  export type ProfesorCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
  }

  /**
   * ProfesorCountOutputType without action
   */
  export type ProfesorCountOutputTypeCountHorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioWhereInput
  }


  /**
   * Count Type HorarioCountOutputType
   */

  export type HorarioCountOutputType = {
    asistencias: number
  }

  export type HorarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | HorarioCountOutputTypeCountAsistenciasArgs
  }

  // Custom InputTypes
  /**
   * HorarioCountOutputType without action
   */
  export type HorarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioCountOutputType
     */
    select?: HorarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HorarioCountOutputType without action
   */
  export type HorarioCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Programa
   */

  export type AggregatePrograma = {
    _count: ProgramaCountAggregateOutputType | null
    _min: ProgramaMinAggregateOutputType | null
    _max: ProgramaMaxAggregateOutputType | null
  }

  export type ProgramaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    codigo: string | null
    color: string | null
    colorBrillo: string | null
    colorTexto: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ProgramaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    codigo: string | null
    color: string | null
    colorBrillo: string | null
    colorTexto: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ProgramaCountAggregateOutputType = {
    id: number
    nombre: number
    codigo: number
    color: number
    colorBrillo: number
    colorTexto: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type ProgramaMinAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    color?: true
    colorBrillo?: true
    colorTexto?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ProgramaMaxAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    color?: true
    colorBrillo?: true
    colorTexto?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ProgramaCountAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    color?: true
    colorBrillo?: true
    colorTexto?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type ProgramaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programa to aggregate.
     */
    where?: ProgramaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programas to fetch.
     */
    orderBy?: ProgramaOrderByWithRelationInput | ProgramaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programas
    **/
    _count?: true | ProgramaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramaMaxAggregateInputType
  }

  export type GetProgramaAggregateType<T extends ProgramaAggregateArgs> = {
        [P in keyof T & keyof AggregatePrograma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrograma[P]>
      : GetScalarType<T[P], AggregatePrograma[P]>
  }




  export type ProgramaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramaWhereInput
    orderBy?: ProgramaOrderByWithAggregationInput | ProgramaOrderByWithAggregationInput[]
    by: ProgramaScalarFieldEnum[] | ProgramaScalarFieldEnum
    having?: ProgramaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramaCountAggregateInputType | true
    _min?: ProgramaMinAggregateInputType
    _max?: ProgramaMaxAggregateInputType
  }

  export type ProgramaGroupByOutputType = {
    id: string
    nombre: string
    codigo: string
    color: string
    colorBrillo: string
    colorTexto: string
    creadoEn: Date
    actualizadoEn: Date
    _count: ProgramaCountAggregateOutputType | null
    _min: ProgramaMinAggregateOutputType | null
    _max: ProgramaMaxAggregateOutputType | null
  }

  type GetProgramaGroupByPayload<T extends ProgramaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramaGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramaGroupByOutputType[P]>
        }
      >
    >


  export type ProgramaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    color?: boolean
    colorBrillo?: boolean
    colorTexto?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    asignaturas?: boolean | Programa$asignaturasArgs<ExtArgs>
    _count?: boolean | ProgramaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programa"]>

  export type ProgramaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    color?: boolean
    colorBrillo?: boolean
    colorTexto?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["programa"]>

  export type ProgramaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    color?: boolean
    colorBrillo?: boolean
    colorTexto?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["programa"]>

  export type ProgramaSelectScalar = {
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    color?: boolean
    colorBrillo?: boolean
    colorTexto?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type ProgramaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "codigo" | "color" | "colorBrillo" | "colorTexto" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["programa"]>
  export type ProgramaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asignaturas?: boolean | Programa$asignaturasArgs<ExtArgs>
    _count?: boolean | ProgramaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProgramaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProgramaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProgramaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Programa"
    objects: {
      asignaturas: Prisma.$AsignaturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      codigo: string
      color: string
      colorBrillo: string
      colorTexto: string
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["programa"]>
    composites: {}
  }

  type ProgramaGetPayload<S extends boolean | null | undefined | ProgramaDefaultArgs> = $Result.GetResult<Prisma.$ProgramaPayload, S>

  type ProgramaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramaCountAggregateInputType | true
    }

  export interface ProgramaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Programa'], meta: { name: 'Programa' } }
    /**
     * Find zero or one Programa that matches the filter.
     * @param {ProgramaFindUniqueArgs} args - Arguments to find a Programa
     * @example
     * // Get one Programa
     * const programa = await prisma.programa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramaFindUniqueArgs>(args: SelectSubset<T, ProgramaFindUniqueArgs<ExtArgs>>): Prisma__ProgramaClient<$Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Programa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramaFindUniqueOrThrowArgs} args - Arguments to find a Programa
     * @example
     * // Get one Programa
     * const programa = await prisma.programa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramaClient<$Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Programa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramaFindFirstArgs} args - Arguments to find a Programa
     * @example
     * // Get one Programa
     * const programa = await prisma.programa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramaFindFirstArgs>(args?: SelectSubset<T, ProgramaFindFirstArgs<ExtArgs>>): Prisma__ProgramaClient<$Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Programa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramaFindFirstOrThrowArgs} args - Arguments to find a Programa
     * @example
     * // Get one Programa
     * const programa = await prisma.programa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramaClient<$Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programas
     * const programas = await prisma.programa.findMany()
     * 
     * // Get first 10 Programas
     * const programas = await prisma.programa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programaWithIdOnly = await prisma.programa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramaFindManyArgs>(args?: SelectSubset<T, ProgramaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Programa.
     * @param {ProgramaCreateArgs} args - Arguments to create a Programa.
     * @example
     * // Create one Programa
     * const Programa = await prisma.programa.create({
     *   data: {
     *     // ... data to create a Programa
     *   }
     * })
     * 
     */
    create<T extends ProgramaCreateArgs>(args: SelectSubset<T, ProgramaCreateArgs<ExtArgs>>): Prisma__ProgramaClient<$Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programas.
     * @param {ProgramaCreateManyArgs} args - Arguments to create many Programas.
     * @example
     * // Create many Programas
     * const programa = await prisma.programa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramaCreateManyArgs>(args?: SelectSubset<T, ProgramaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programas and returns the data saved in the database.
     * @param {ProgramaCreateManyAndReturnArgs} args - Arguments to create many Programas.
     * @example
     * // Create many Programas
     * const programa = await prisma.programa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programas and only return the `id`
     * const programaWithIdOnly = await prisma.programa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Programa.
     * @param {ProgramaDeleteArgs} args - Arguments to delete one Programa.
     * @example
     * // Delete one Programa
     * const Programa = await prisma.programa.delete({
     *   where: {
     *     // ... filter to delete one Programa
     *   }
     * })
     * 
     */
    delete<T extends ProgramaDeleteArgs>(args: SelectSubset<T, ProgramaDeleteArgs<ExtArgs>>): Prisma__ProgramaClient<$Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Programa.
     * @param {ProgramaUpdateArgs} args - Arguments to update one Programa.
     * @example
     * // Update one Programa
     * const programa = await prisma.programa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramaUpdateArgs>(args: SelectSubset<T, ProgramaUpdateArgs<ExtArgs>>): Prisma__ProgramaClient<$Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programas.
     * @param {ProgramaDeleteManyArgs} args - Arguments to filter Programas to delete.
     * @example
     * // Delete a few Programas
     * const { count } = await prisma.programa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramaDeleteManyArgs>(args?: SelectSubset<T, ProgramaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programas
     * const programa = await prisma.programa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramaUpdateManyArgs>(args: SelectSubset<T, ProgramaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programas and returns the data updated in the database.
     * @param {ProgramaUpdateManyAndReturnArgs} args - Arguments to update many Programas.
     * @example
     * // Update many Programas
     * const programa = await prisma.programa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Programas and only return the `id`
     * const programaWithIdOnly = await prisma.programa.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgramaUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Programa.
     * @param {ProgramaUpsertArgs} args - Arguments to update or create a Programa.
     * @example
     * // Update or create a Programa
     * const programa = await prisma.programa.upsert({
     *   create: {
     *     // ... data to create a Programa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Programa we want to update
     *   }
     * })
     */
    upsert<T extends ProgramaUpsertArgs>(args: SelectSubset<T, ProgramaUpsertArgs<ExtArgs>>): Prisma__ProgramaClient<$Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramaCountArgs} args - Arguments to filter Programas to count.
     * @example
     * // Count the number of Programas
     * const count = await prisma.programa.count({
     *   where: {
     *     // ... the filter for the Programas we want to count
     *   }
     * })
    **/
    count<T extends ProgramaCountArgs>(
      args?: Subset<T, ProgramaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Programa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramaAggregateArgs>(args: Subset<T, ProgramaAggregateArgs>): Prisma.PrismaPromise<GetProgramaAggregateType<T>>

    /**
     * Group by Programa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramaGroupByArgs} args - Group by arguments.
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
      T extends ProgramaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramaGroupByArgs['orderBy'] }
        : { orderBy?: ProgramaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Programa model
   */
  readonly fields: ProgramaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Programa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asignaturas<T extends Programa$asignaturasArgs<ExtArgs> = {}>(args?: Subset<T, Programa$asignaturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Programa model
   */
  interface ProgramaFieldRefs {
    readonly id: FieldRef<"Programa", 'String'>
    readonly nombre: FieldRef<"Programa", 'String'>
    readonly codigo: FieldRef<"Programa", 'String'>
    readonly color: FieldRef<"Programa", 'String'>
    readonly colorBrillo: FieldRef<"Programa", 'String'>
    readonly colorTexto: FieldRef<"Programa", 'String'>
    readonly creadoEn: FieldRef<"Programa", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Programa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Programa findUnique
   */
  export type ProgramaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programa
     */
    select?: ProgramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programa
     */
    omit?: ProgramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramaInclude<ExtArgs> | null
    /**
     * Filter, which Programa to fetch.
     */
    where: ProgramaWhereUniqueInput
  }

  /**
   * Programa findUniqueOrThrow
   */
  export type ProgramaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programa
     */
    select?: ProgramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programa
     */
    omit?: ProgramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramaInclude<ExtArgs> | null
    /**
     * Filter, which Programa to fetch.
     */
    where: ProgramaWhereUniqueInput
  }

  /**
   * Programa findFirst
   */
  export type ProgramaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programa
     */
    select?: ProgramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programa
     */
    omit?: ProgramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramaInclude<ExtArgs> | null
    /**
     * Filter, which Programa to fetch.
     */
    where?: ProgramaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programas to fetch.
     */
    orderBy?: ProgramaOrderByWithRelationInput | ProgramaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programas.
     */
    cursor?: ProgramaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programas.
     */
    distinct?: ProgramaScalarFieldEnum | ProgramaScalarFieldEnum[]
  }

  /**
   * Programa findFirstOrThrow
   */
  export type ProgramaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programa
     */
    select?: ProgramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programa
     */
    omit?: ProgramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramaInclude<ExtArgs> | null
    /**
     * Filter, which Programa to fetch.
     */
    where?: ProgramaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programas to fetch.
     */
    orderBy?: ProgramaOrderByWithRelationInput | ProgramaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programas.
     */
    cursor?: ProgramaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programas.
     */
    distinct?: ProgramaScalarFieldEnum | ProgramaScalarFieldEnum[]
  }

  /**
   * Programa findMany
   */
  export type ProgramaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programa
     */
    select?: ProgramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programa
     */
    omit?: ProgramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramaInclude<ExtArgs> | null
    /**
     * Filter, which Programas to fetch.
     */
    where?: ProgramaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programas to fetch.
     */
    orderBy?: ProgramaOrderByWithRelationInput | ProgramaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programas.
     */
    cursor?: ProgramaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programas.
     */
    skip?: number
    distinct?: ProgramaScalarFieldEnum | ProgramaScalarFieldEnum[]
  }

  /**
   * Programa create
   */
  export type ProgramaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programa
     */
    select?: ProgramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programa
     */
    omit?: ProgramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramaInclude<ExtArgs> | null
    /**
     * The data needed to create a Programa.
     */
    data: XOR<ProgramaCreateInput, ProgramaUncheckedCreateInput>
  }

  /**
   * Programa createMany
   */
  export type ProgramaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programas.
     */
    data: ProgramaCreateManyInput | ProgramaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Programa createManyAndReturn
   */
  export type ProgramaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programa
     */
    select?: ProgramaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Programa
     */
    omit?: ProgramaOmit<ExtArgs> | null
    /**
     * The data used to create many Programas.
     */
    data: ProgramaCreateManyInput | ProgramaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Programa update
   */
  export type ProgramaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programa
     */
    select?: ProgramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programa
     */
    omit?: ProgramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramaInclude<ExtArgs> | null
    /**
     * The data needed to update a Programa.
     */
    data: XOR<ProgramaUpdateInput, ProgramaUncheckedUpdateInput>
    /**
     * Choose, which Programa to update.
     */
    where: ProgramaWhereUniqueInput
  }

  /**
   * Programa updateMany
   */
  export type ProgramaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programas.
     */
    data: XOR<ProgramaUpdateManyMutationInput, ProgramaUncheckedUpdateManyInput>
    /**
     * Filter which Programas to update
     */
    where?: ProgramaWhereInput
    /**
     * Limit how many Programas to update.
     */
    limit?: number
  }

  /**
   * Programa updateManyAndReturn
   */
  export type ProgramaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programa
     */
    select?: ProgramaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Programa
     */
    omit?: ProgramaOmit<ExtArgs> | null
    /**
     * The data used to update Programas.
     */
    data: XOR<ProgramaUpdateManyMutationInput, ProgramaUncheckedUpdateManyInput>
    /**
     * Filter which Programas to update
     */
    where?: ProgramaWhereInput
    /**
     * Limit how many Programas to update.
     */
    limit?: number
  }

  /**
   * Programa upsert
   */
  export type ProgramaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programa
     */
    select?: ProgramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programa
     */
    omit?: ProgramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramaInclude<ExtArgs> | null
    /**
     * The filter to search for the Programa to update in case it exists.
     */
    where: ProgramaWhereUniqueInput
    /**
     * In case the Programa found by the `where` argument doesn't exist, create a new Programa with this data.
     */
    create: XOR<ProgramaCreateInput, ProgramaUncheckedCreateInput>
    /**
     * In case the Programa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramaUpdateInput, ProgramaUncheckedUpdateInput>
  }

  /**
   * Programa delete
   */
  export type ProgramaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programa
     */
    select?: ProgramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programa
     */
    omit?: ProgramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramaInclude<ExtArgs> | null
    /**
     * Filter which Programa to delete.
     */
    where: ProgramaWhereUniqueInput
  }

  /**
   * Programa deleteMany
   */
  export type ProgramaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programas to delete
     */
    where?: ProgramaWhereInput
    /**
     * Limit how many Programas to delete.
     */
    limit?: number
  }

  /**
   * Programa.asignaturas
   */
  export type Programa$asignaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignatura
     */
    select?: AsignaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignatura
     */
    omit?: AsignaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaInclude<ExtArgs> | null
    where?: AsignaturaWhereInput
    orderBy?: AsignaturaOrderByWithRelationInput | AsignaturaOrderByWithRelationInput[]
    cursor?: AsignaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsignaturaScalarFieldEnum | AsignaturaScalarFieldEnum[]
  }

  /**
   * Programa without action
   */
  export type ProgramaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programa
     */
    select?: ProgramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programa
     */
    omit?: ProgramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramaInclude<ExtArgs> | null
  }


  /**
   * Model Asignatura
   */

  export type AggregateAsignatura = {
    _count: AsignaturaCountAggregateOutputType | null
    _avg: AsignaturaAvgAggregateOutputType | null
    _sum: AsignaturaSumAggregateOutputType | null
    _min: AsignaturaMinAggregateOutputType | null
    _max: AsignaturaMaxAggregateOutputType | null
  }

  export type AsignaturaAvgAggregateOutputType = {
    semestre: number | null
    creditos: number | null
  }

  export type AsignaturaSumAggregateOutputType = {
    semestre: number | null
    creditos: number | null
  }

  export type AsignaturaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    codigo: string | null
    programaId: string | null
    semestre: number | null
    creditos: number | null
    activa: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type AsignaturaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    codigo: string | null
    programaId: string | null
    semestre: number | null
    creditos: number | null
    activa: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type AsignaturaCountAggregateOutputType = {
    id: number
    nombre: number
    codigo: number
    programaId: number
    semestre: number
    creditos: number
    activa: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type AsignaturaAvgAggregateInputType = {
    semestre?: true
    creditos?: true
  }

  export type AsignaturaSumAggregateInputType = {
    semestre?: true
    creditos?: true
  }

  export type AsignaturaMinAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    programaId?: true
    semestre?: true
    creditos?: true
    activa?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type AsignaturaMaxAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    programaId?: true
    semestre?: true
    creditos?: true
    activa?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type AsignaturaCountAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    programaId?: true
    semestre?: true
    creditos?: true
    activa?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type AsignaturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asignatura to aggregate.
     */
    where?: AsignaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asignaturas to fetch.
     */
    orderBy?: AsignaturaOrderByWithRelationInput | AsignaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsignaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asignaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asignaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asignaturas
    **/
    _count?: true | AsignaturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsignaturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsignaturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsignaturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsignaturaMaxAggregateInputType
  }

  export type GetAsignaturaAggregateType<T extends AsignaturaAggregateArgs> = {
        [P in keyof T & keyof AggregateAsignatura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsignatura[P]>
      : GetScalarType<T[P], AggregateAsignatura[P]>
  }




  export type AsignaturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignaturaWhereInput
    orderBy?: AsignaturaOrderByWithAggregationInput | AsignaturaOrderByWithAggregationInput[]
    by: AsignaturaScalarFieldEnum[] | AsignaturaScalarFieldEnum
    having?: AsignaturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsignaturaCountAggregateInputType | true
    _avg?: AsignaturaAvgAggregateInputType
    _sum?: AsignaturaSumAggregateInputType
    _min?: AsignaturaMinAggregateInputType
    _max?: AsignaturaMaxAggregateInputType
  }

  export type AsignaturaGroupByOutputType = {
    id: string
    nombre: string
    codigo: string
    programaId: string
    semestre: number | null
    creditos: number | null
    activa: boolean
    creadoEn: Date
    actualizadoEn: Date
    _count: AsignaturaCountAggregateOutputType | null
    _avg: AsignaturaAvgAggregateOutputType | null
    _sum: AsignaturaSumAggregateOutputType | null
    _min: AsignaturaMinAggregateOutputType | null
    _max: AsignaturaMaxAggregateOutputType | null
  }

  type GetAsignaturaGroupByPayload<T extends AsignaturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsignaturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsignaturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsignaturaGroupByOutputType[P]>
            : GetScalarType<T[P], AsignaturaGroupByOutputType[P]>
        }
      >
    >


  export type AsignaturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    programaId?: boolean
    semestre?: boolean
    creditos?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    asistencias?: boolean | Asignatura$asistenciasArgs<ExtArgs>
    horarios?: boolean | Asignatura$horariosArgs<ExtArgs>
    programa?: boolean | ProgramaDefaultArgs<ExtArgs>
    _count?: boolean | AsignaturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asignatura"]>

  export type AsignaturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    programaId?: boolean
    semestre?: boolean
    creditos?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    programa?: boolean | ProgramaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asignatura"]>

  export type AsignaturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    programaId?: boolean
    semestre?: boolean
    creditos?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    programa?: boolean | ProgramaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asignatura"]>

  export type AsignaturaSelectScalar = {
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    programaId?: boolean
    semestre?: boolean
    creditos?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type AsignaturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "codigo" | "programaId" | "semestre" | "creditos" | "activa" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["asignatura"]>
  export type AsignaturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | Asignatura$asistenciasArgs<ExtArgs>
    horarios?: boolean | Asignatura$horariosArgs<ExtArgs>
    programa?: boolean | ProgramaDefaultArgs<ExtArgs>
    _count?: boolean | AsignaturaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AsignaturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programa?: boolean | ProgramaDefaultArgs<ExtArgs>
  }
  export type AsignaturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programa?: boolean | ProgramaDefaultArgs<ExtArgs>
  }

  export type $AsignaturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asignatura"
    objects: {
      asistencias: Prisma.$AsistenciaPayload<ExtArgs>[]
      horarios: Prisma.$HorarioPayload<ExtArgs>[]
      programa: Prisma.$ProgramaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      codigo: string
      programaId: string
      semestre: number | null
      creditos: number | null
      activa: boolean
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["asignatura"]>
    composites: {}
  }

  type AsignaturaGetPayload<S extends boolean | null | undefined | AsignaturaDefaultArgs> = $Result.GetResult<Prisma.$AsignaturaPayload, S>

  type AsignaturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsignaturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsignaturaCountAggregateInputType | true
    }

  export interface AsignaturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asignatura'], meta: { name: 'Asignatura' } }
    /**
     * Find zero or one Asignatura that matches the filter.
     * @param {AsignaturaFindUniqueArgs} args - Arguments to find a Asignatura
     * @example
     * // Get one Asignatura
     * const asignatura = await prisma.asignatura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsignaturaFindUniqueArgs>(args: SelectSubset<T, AsignaturaFindUniqueArgs<ExtArgs>>): Prisma__AsignaturaClient<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asignatura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsignaturaFindUniqueOrThrowArgs} args - Arguments to find a Asignatura
     * @example
     * // Get one Asignatura
     * const asignatura = await prisma.asignatura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsignaturaFindUniqueOrThrowArgs>(args: SelectSubset<T, AsignaturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsignaturaClient<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asignatura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaFindFirstArgs} args - Arguments to find a Asignatura
     * @example
     * // Get one Asignatura
     * const asignatura = await prisma.asignatura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsignaturaFindFirstArgs>(args?: SelectSubset<T, AsignaturaFindFirstArgs<ExtArgs>>): Prisma__AsignaturaClient<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asignatura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaFindFirstOrThrowArgs} args - Arguments to find a Asignatura
     * @example
     * // Get one Asignatura
     * const asignatura = await prisma.asignatura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsignaturaFindFirstOrThrowArgs>(args?: SelectSubset<T, AsignaturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsignaturaClient<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asignaturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asignaturas
     * const asignaturas = await prisma.asignatura.findMany()
     * 
     * // Get first 10 Asignaturas
     * const asignaturas = await prisma.asignatura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asignaturaWithIdOnly = await prisma.asignatura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsignaturaFindManyArgs>(args?: SelectSubset<T, AsignaturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asignatura.
     * @param {AsignaturaCreateArgs} args - Arguments to create a Asignatura.
     * @example
     * // Create one Asignatura
     * const Asignatura = await prisma.asignatura.create({
     *   data: {
     *     // ... data to create a Asignatura
     *   }
     * })
     * 
     */
    create<T extends AsignaturaCreateArgs>(args: SelectSubset<T, AsignaturaCreateArgs<ExtArgs>>): Prisma__AsignaturaClient<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asignaturas.
     * @param {AsignaturaCreateManyArgs} args - Arguments to create many Asignaturas.
     * @example
     * // Create many Asignaturas
     * const asignatura = await prisma.asignatura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsignaturaCreateManyArgs>(args?: SelectSubset<T, AsignaturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asignaturas and returns the data saved in the database.
     * @param {AsignaturaCreateManyAndReturnArgs} args - Arguments to create many Asignaturas.
     * @example
     * // Create many Asignaturas
     * const asignatura = await prisma.asignatura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asignaturas and only return the `id`
     * const asignaturaWithIdOnly = await prisma.asignatura.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsignaturaCreateManyAndReturnArgs>(args?: SelectSubset<T, AsignaturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asignatura.
     * @param {AsignaturaDeleteArgs} args - Arguments to delete one Asignatura.
     * @example
     * // Delete one Asignatura
     * const Asignatura = await prisma.asignatura.delete({
     *   where: {
     *     // ... filter to delete one Asignatura
     *   }
     * })
     * 
     */
    delete<T extends AsignaturaDeleteArgs>(args: SelectSubset<T, AsignaturaDeleteArgs<ExtArgs>>): Prisma__AsignaturaClient<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asignatura.
     * @param {AsignaturaUpdateArgs} args - Arguments to update one Asignatura.
     * @example
     * // Update one Asignatura
     * const asignatura = await prisma.asignatura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsignaturaUpdateArgs>(args: SelectSubset<T, AsignaturaUpdateArgs<ExtArgs>>): Prisma__AsignaturaClient<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asignaturas.
     * @param {AsignaturaDeleteManyArgs} args - Arguments to filter Asignaturas to delete.
     * @example
     * // Delete a few Asignaturas
     * const { count } = await prisma.asignatura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsignaturaDeleteManyArgs>(args?: SelectSubset<T, AsignaturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asignaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asignaturas
     * const asignatura = await prisma.asignatura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsignaturaUpdateManyArgs>(args: SelectSubset<T, AsignaturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asignaturas and returns the data updated in the database.
     * @param {AsignaturaUpdateManyAndReturnArgs} args - Arguments to update many Asignaturas.
     * @example
     * // Update many Asignaturas
     * const asignatura = await prisma.asignatura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Asignaturas and only return the `id`
     * const asignaturaWithIdOnly = await prisma.asignatura.updateManyAndReturn({
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
    updateManyAndReturn<T extends AsignaturaUpdateManyAndReturnArgs>(args: SelectSubset<T, AsignaturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asignatura.
     * @param {AsignaturaUpsertArgs} args - Arguments to update or create a Asignatura.
     * @example
     * // Update or create a Asignatura
     * const asignatura = await prisma.asignatura.upsert({
     *   create: {
     *     // ... data to create a Asignatura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asignatura we want to update
     *   }
     * })
     */
    upsert<T extends AsignaturaUpsertArgs>(args: SelectSubset<T, AsignaturaUpsertArgs<ExtArgs>>): Prisma__AsignaturaClient<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asignaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaCountArgs} args - Arguments to filter Asignaturas to count.
     * @example
     * // Count the number of Asignaturas
     * const count = await prisma.asignatura.count({
     *   where: {
     *     // ... the filter for the Asignaturas we want to count
     *   }
     * })
    **/
    count<T extends AsignaturaCountArgs>(
      args?: Subset<T, AsignaturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsignaturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asignatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsignaturaAggregateArgs>(args: Subset<T, AsignaturaAggregateArgs>): Prisma.PrismaPromise<GetAsignaturaAggregateType<T>>

    /**
     * Group by Asignatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaGroupByArgs} args - Group by arguments.
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
      T extends AsignaturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsignaturaGroupByArgs['orderBy'] }
        : { orderBy?: AsignaturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AsignaturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsignaturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asignatura model
   */
  readonly fields: AsignaturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asignatura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsignaturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asistencias<T extends Asignatura$asistenciasArgs<ExtArgs> = {}>(args?: Subset<T, Asignatura$asistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    horarios<T extends Asignatura$horariosArgs<ExtArgs> = {}>(args?: Subset<T, Asignatura$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    programa<T extends ProgramaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramaDefaultArgs<ExtArgs>>): Prisma__ProgramaClient<$Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Asignatura model
   */
  interface AsignaturaFieldRefs {
    readonly id: FieldRef<"Asignatura", 'String'>
    readonly nombre: FieldRef<"Asignatura", 'String'>
    readonly codigo: FieldRef<"Asignatura", 'String'>
    readonly programaId: FieldRef<"Asignatura", 'String'>
    readonly semestre: FieldRef<"Asignatura", 'Int'>
    readonly creditos: FieldRef<"Asignatura", 'Int'>
    readonly activa: FieldRef<"Asignatura", 'Boolean'>
    readonly creadoEn: FieldRef<"Asignatura", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Asignatura", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asignatura findUnique
   */
  export type AsignaturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignatura
     */
    select?: AsignaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignatura
     */
    omit?: AsignaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaInclude<ExtArgs> | null
    /**
     * Filter, which Asignatura to fetch.
     */
    where: AsignaturaWhereUniqueInput
  }

  /**
   * Asignatura findUniqueOrThrow
   */
  export type AsignaturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignatura
     */
    select?: AsignaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignatura
     */
    omit?: AsignaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaInclude<ExtArgs> | null
    /**
     * Filter, which Asignatura to fetch.
     */
    where: AsignaturaWhereUniqueInput
  }

  /**
   * Asignatura findFirst
   */
  export type AsignaturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignatura
     */
    select?: AsignaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignatura
     */
    omit?: AsignaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaInclude<ExtArgs> | null
    /**
     * Filter, which Asignatura to fetch.
     */
    where?: AsignaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asignaturas to fetch.
     */
    orderBy?: AsignaturaOrderByWithRelationInput | AsignaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asignaturas.
     */
    cursor?: AsignaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asignaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asignaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asignaturas.
     */
    distinct?: AsignaturaScalarFieldEnum | AsignaturaScalarFieldEnum[]
  }

  /**
   * Asignatura findFirstOrThrow
   */
  export type AsignaturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignatura
     */
    select?: AsignaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignatura
     */
    omit?: AsignaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaInclude<ExtArgs> | null
    /**
     * Filter, which Asignatura to fetch.
     */
    where?: AsignaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asignaturas to fetch.
     */
    orderBy?: AsignaturaOrderByWithRelationInput | AsignaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asignaturas.
     */
    cursor?: AsignaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asignaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asignaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asignaturas.
     */
    distinct?: AsignaturaScalarFieldEnum | AsignaturaScalarFieldEnum[]
  }

  /**
   * Asignatura findMany
   */
  export type AsignaturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignatura
     */
    select?: AsignaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignatura
     */
    omit?: AsignaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaInclude<ExtArgs> | null
    /**
     * Filter, which Asignaturas to fetch.
     */
    where?: AsignaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asignaturas to fetch.
     */
    orderBy?: AsignaturaOrderByWithRelationInput | AsignaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asignaturas.
     */
    cursor?: AsignaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asignaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asignaturas.
     */
    skip?: number
    distinct?: AsignaturaScalarFieldEnum | AsignaturaScalarFieldEnum[]
  }

  /**
   * Asignatura create
   */
  export type AsignaturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignatura
     */
    select?: AsignaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignatura
     */
    omit?: AsignaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Asignatura.
     */
    data: XOR<AsignaturaCreateInput, AsignaturaUncheckedCreateInput>
  }

  /**
   * Asignatura createMany
   */
  export type AsignaturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asignaturas.
     */
    data: AsignaturaCreateManyInput | AsignaturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asignatura createManyAndReturn
   */
  export type AsignaturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignatura
     */
    select?: AsignaturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asignatura
     */
    omit?: AsignaturaOmit<ExtArgs> | null
    /**
     * The data used to create many Asignaturas.
     */
    data: AsignaturaCreateManyInput | AsignaturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asignatura update
   */
  export type AsignaturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignatura
     */
    select?: AsignaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignatura
     */
    omit?: AsignaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Asignatura.
     */
    data: XOR<AsignaturaUpdateInput, AsignaturaUncheckedUpdateInput>
    /**
     * Choose, which Asignatura to update.
     */
    where: AsignaturaWhereUniqueInput
  }

  /**
   * Asignatura updateMany
   */
  export type AsignaturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asignaturas.
     */
    data: XOR<AsignaturaUpdateManyMutationInput, AsignaturaUncheckedUpdateManyInput>
    /**
     * Filter which Asignaturas to update
     */
    where?: AsignaturaWhereInput
    /**
     * Limit how many Asignaturas to update.
     */
    limit?: number
  }

  /**
   * Asignatura updateManyAndReturn
   */
  export type AsignaturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignatura
     */
    select?: AsignaturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asignatura
     */
    omit?: AsignaturaOmit<ExtArgs> | null
    /**
     * The data used to update Asignaturas.
     */
    data: XOR<AsignaturaUpdateManyMutationInput, AsignaturaUncheckedUpdateManyInput>
    /**
     * Filter which Asignaturas to update
     */
    where?: AsignaturaWhereInput
    /**
     * Limit how many Asignaturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asignatura upsert
   */
  export type AsignaturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignatura
     */
    select?: AsignaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignatura
     */
    omit?: AsignaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Asignatura to update in case it exists.
     */
    where: AsignaturaWhereUniqueInput
    /**
     * In case the Asignatura found by the `where` argument doesn't exist, create a new Asignatura with this data.
     */
    create: XOR<AsignaturaCreateInput, AsignaturaUncheckedCreateInput>
    /**
     * In case the Asignatura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsignaturaUpdateInput, AsignaturaUncheckedUpdateInput>
  }

  /**
   * Asignatura delete
   */
  export type AsignaturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignatura
     */
    select?: AsignaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignatura
     */
    omit?: AsignaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaInclude<ExtArgs> | null
    /**
     * Filter which Asignatura to delete.
     */
    where: AsignaturaWhereUniqueInput
  }

  /**
   * Asignatura deleteMany
   */
  export type AsignaturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asignaturas to delete
     */
    where?: AsignaturaWhereInput
    /**
     * Limit how many Asignaturas to delete.
     */
    limit?: number
  }

  /**
   * Asignatura.asistencias
   */
  export type Asignatura$asistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    cursor?: AsistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Asignatura.horarios
   */
  export type Asignatura$horariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    where?: HorarioWhereInput
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    cursor?: HorarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Asignatura without action
   */
  export type AsignaturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignatura
     */
    select?: AsignaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignatura
     */
    omit?: AsignaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaInclude<ExtArgs> | null
  }


  /**
   * Model Aula
   */

  export type AggregateAula = {
    _count: AulaCountAggregateOutputType | null
    _avg: AulaAvgAggregateOutputType | null
    _sum: AulaSumAggregateOutputType | null
    _min: AulaMinAggregateOutputType | null
    _max: AulaMaxAggregateOutputType | null
  }

  export type AulaAvgAggregateOutputType = {
    capacidad: number | null
  }

  export type AulaSumAggregateOutputType = {
    capacidad: number | null
  }

  export type AulaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    capacidad: number | null
    edificio: string | null
    piso: string | null
    activa: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type AulaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    capacidad: number | null
    edificio: string | null
    piso: string | null
    activa: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type AulaCountAggregateOutputType = {
    id: number
    nombre: number
    capacidad: number
    edificio: number
    piso: number
    equipos: number
    activa: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type AulaAvgAggregateInputType = {
    capacidad?: true
  }

  export type AulaSumAggregateInputType = {
    capacidad?: true
  }

  export type AulaMinAggregateInputType = {
    id?: true
    nombre?: true
    capacidad?: true
    edificio?: true
    piso?: true
    activa?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type AulaMaxAggregateInputType = {
    id?: true
    nombre?: true
    capacidad?: true
    edificio?: true
    piso?: true
    activa?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type AulaCountAggregateInputType = {
    id?: true
    nombre?: true
    capacidad?: true
    edificio?: true
    piso?: true
    equipos?: true
    activa?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type AulaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aula to aggregate.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aulas
    **/
    _count?: true | AulaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AulaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AulaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AulaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AulaMaxAggregateInputType
  }

  export type GetAulaAggregateType<T extends AulaAggregateArgs> = {
        [P in keyof T & keyof AggregateAula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAula[P]>
      : GetScalarType<T[P], AggregateAula[P]>
  }




  export type AulaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AulaWhereInput
    orderBy?: AulaOrderByWithAggregationInput | AulaOrderByWithAggregationInput[]
    by: AulaScalarFieldEnum[] | AulaScalarFieldEnum
    having?: AulaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AulaCountAggregateInputType | true
    _avg?: AulaAvgAggregateInputType
    _sum?: AulaSumAggregateInputType
    _min?: AulaMinAggregateInputType
    _max?: AulaMaxAggregateInputType
  }

  export type AulaGroupByOutputType = {
    id: string
    nombre: string
    capacidad: number | null
    edificio: string | null
    piso: string | null
    equipos: JsonValue | null
    activa: boolean
    creadoEn: Date
    actualizadoEn: Date
    _count: AulaCountAggregateOutputType | null
    _avg: AulaAvgAggregateOutputType | null
    _sum: AulaSumAggregateOutputType | null
    _min: AulaMinAggregateOutputType | null
    _max: AulaMaxAggregateOutputType | null
  }

  type GetAulaGroupByPayload<T extends AulaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AulaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AulaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AulaGroupByOutputType[P]>
            : GetScalarType<T[P], AulaGroupByOutputType[P]>
        }
      >
    >


  export type AulaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    capacidad?: boolean
    edificio?: boolean
    piso?: boolean
    equipos?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    asistencias?: boolean | Aula$asistenciasArgs<ExtArgs>
    estados?: boolean | Aula$estadosArgs<ExtArgs>
    horarios?: boolean | Aula$horariosArgs<ExtArgs>
    _count?: boolean | AulaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aula"]>

  export type AulaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    capacidad?: boolean
    edificio?: boolean
    piso?: boolean
    equipos?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["aula"]>

  export type AulaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    capacidad?: boolean
    edificio?: boolean
    piso?: boolean
    equipos?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["aula"]>

  export type AulaSelectScalar = {
    id?: boolean
    nombre?: boolean
    capacidad?: boolean
    edificio?: boolean
    piso?: boolean
    equipos?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type AulaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "capacidad" | "edificio" | "piso" | "equipos" | "activa" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["aula"]>
  export type AulaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | Aula$asistenciasArgs<ExtArgs>
    estados?: boolean | Aula$estadosArgs<ExtArgs>
    horarios?: boolean | Aula$horariosArgs<ExtArgs>
    _count?: boolean | AulaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AulaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AulaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AulaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aula"
    objects: {
      asistencias: Prisma.$AsistenciaPayload<ExtArgs>[]
      estados: Prisma.$EstadoAulaPayload<ExtArgs>[]
      horarios: Prisma.$HorarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      capacidad: number | null
      edificio: string | null
      piso: string | null
      equipos: Prisma.JsonValue | null
      activa: boolean
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["aula"]>
    composites: {}
  }

  type AulaGetPayload<S extends boolean | null | undefined | AulaDefaultArgs> = $Result.GetResult<Prisma.$AulaPayload, S>

  type AulaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AulaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AulaCountAggregateInputType | true
    }

  export interface AulaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aula'], meta: { name: 'Aula' } }
    /**
     * Find zero or one Aula that matches the filter.
     * @param {AulaFindUniqueArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AulaFindUniqueArgs>(args: SelectSubset<T, AulaFindUniqueArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AulaFindUniqueOrThrowArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AulaFindUniqueOrThrowArgs>(args: SelectSubset<T, AulaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindFirstArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AulaFindFirstArgs>(args?: SelectSubset<T, AulaFindFirstArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindFirstOrThrowArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AulaFindFirstOrThrowArgs>(args?: SelectSubset<T, AulaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aulas
     * const aulas = await prisma.aula.findMany()
     * 
     * // Get first 10 Aulas
     * const aulas = await prisma.aula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aulaWithIdOnly = await prisma.aula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AulaFindManyArgs>(args?: SelectSubset<T, AulaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aula.
     * @param {AulaCreateArgs} args - Arguments to create a Aula.
     * @example
     * // Create one Aula
     * const Aula = await prisma.aula.create({
     *   data: {
     *     // ... data to create a Aula
     *   }
     * })
     * 
     */
    create<T extends AulaCreateArgs>(args: SelectSubset<T, AulaCreateArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aulas.
     * @param {AulaCreateManyArgs} args - Arguments to create many Aulas.
     * @example
     * // Create many Aulas
     * const aula = await prisma.aula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AulaCreateManyArgs>(args?: SelectSubset<T, AulaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aulas and returns the data saved in the database.
     * @param {AulaCreateManyAndReturnArgs} args - Arguments to create many Aulas.
     * @example
     * // Create many Aulas
     * const aula = await prisma.aula.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aulas and only return the `id`
     * const aulaWithIdOnly = await prisma.aula.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AulaCreateManyAndReturnArgs>(args?: SelectSubset<T, AulaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aula.
     * @param {AulaDeleteArgs} args - Arguments to delete one Aula.
     * @example
     * // Delete one Aula
     * const Aula = await prisma.aula.delete({
     *   where: {
     *     // ... filter to delete one Aula
     *   }
     * })
     * 
     */
    delete<T extends AulaDeleteArgs>(args: SelectSubset<T, AulaDeleteArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aula.
     * @param {AulaUpdateArgs} args - Arguments to update one Aula.
     * @example
     * // Update one Aula
     * const aula = await prisma.aula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AulaUpdateArgs>(args: SelectSubset<T, AulaUpdateArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aulas.
     * @param {AulaDeleteManyArgs} args - Arguments to filter Aulas to delete.
     * @example
     * // Delete a few Aulas
     * const { count } = await prisma.aula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AulaDeleteManyArgs>(args?: SelectSubset<T, AulaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aulas
     * const aula = await prisma.aula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AulaUpdateManyArgs>(args: SelectSubset<T, AulaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aulas and returns the data updated in the database.
     * @param {AulaUpdateManyAndReturnArgs} args - Arguments to update many Aulas.
     * @example
     * // Update many Aulas
     * const aula = await prisma.aula.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Aulas and only return the `id`
     * const aulaWithIdOnly = await prisma.aula.updateManyAndReturn({
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
    updateManyAndReturn<T extends AulaUpdateManyAndReturnArgs>(args: SelectSubset<T, AulaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aula.
     * @param {AulaUpsertArgs} args - Arguments to update or create a Aula.
     * @example
     * // Update or create a Aula
     * const aula = await prisma.aula.upsert({
     *   create: {
     *     // ... data to create a Aula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aula we want to update
     *   }
     * })
     */
    upsert<T extends AulaUpsertArgs>(args: SelectSubset<T, AulaUpsertArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaCountArgs} args - Arguments to filter Aulas to count.
     * @example
     * // Count the number of Aulas
     * const count = await prisma.aula.count({
     *   where: {
     *     // ... the filter for the Aulas we want to count
     *   }
     * })
    **/
    count<T extends AulaCountArgs>(
      args?: Subset<T, AulaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AulaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AulaAggregateArgs>(args: Subset<T, AulaAggregateArgs>): Prisma.PrismaPromise<GetAulaAggregateType<T>>

    /**
     * Group by Aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaGroupByArgs} args - Group by arguments.
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
      T extends AulaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AulaGroupByArgs['orderBy'] }
        : { orderBy?: AulaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AulaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAulaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aula model
   */
  readonly fields: AulaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AulaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asistencias<T extends Aula$asistenciasArgs<ExtArgs> = {}>(args?: Subset<T, Aula$asistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estados<T extends Aula$estadosArgs<ExtArgs> = {}>(args?: Subset<T, Aula$estadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoAulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    horarios<T extends Aula$horariosArgs<ExtArgs> = {}>(args?: Subset<T, Aula$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Aula model
   */
  interface AulaFieldRefs {
    readonly id: FieldRef<"Aula", 'String'>
    readonly nombre: FieldRef<"Aula", 'String'>
    readonly capacidad: FieldRef<"Aula", 'Int'>
    readonly edificio: FieldRef<"Aula", 'String'>
    readonly piso: FieldRef<"Aula", 'String'>
    readonly equipos: FieldRef<"Aula", 'Json'>
    readonly activa: FieldRef<"Aula", 'Boolean'>
    readonly creadoEn: FieldRef<"Aula", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Aula", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Aula findUnique
   */
  export type AulaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula findUniqueOrThrow
   */
  export type AulaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula findFirst
   */
  export type AulaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aulas.
     */
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula findFirstOrThrow
   */
  export type AulaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aulas.
     */
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula findMany
   */
  export type AulaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aulas to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula create
   */
  export type AulaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The data needed to create a Aula.
     */
    data: XOR<AulaCreateInput, AulaUncheckedCreateInput>
  }

  /**
   * Aula createMany
   */
  export type AulaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aulas.
     */
    data: AulaCreateManyInput | AulaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aula createManyAndReturn
   */
  export type AulaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * The data used to create many Aulas.
     */
    data: AulaCreateManyInput | AulaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aula update
   */
  export type AulaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The data needed to update a Aula.
     */
    data: XOR<AulaUpdateInput, AulaUncheckedUpdateInput>
    /**
     * Choose, which Aula to update.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula updateMany
   */
  export type AulaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aulas.
     */
    data: XOR<AulaUpdateManyMutationInput, AulaUncheckedUpdateManyInput>
    /**
     * Filter which Aulas to update
     */
    where?: AulaWhereInput
    /**
     * Limit how many Aulas to update.
     */
    limit?: number
  }

  /**
   * Aula updateManyAndReturn
   */
  export type AulaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * The data used to update Aulas.
     */
    data: XOR<AulaUpdateManyMutationInput, AulaUncheckedUpdateManyInput>
    /**
     * Filter which Aulas to update
     */
    where?: AulaWhereInput
    /**
     * Limit how many Aulas to update.
     */
    limit?: number
  }

  /**
   * Aula upsert
   */
  export type AulaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The filter to search for the Aula to update in case it exists.
     */
    where: AulaWhereUniqueInput
    /**
     * In case the Aula found by the `where` argument doesn't exist, create a new Aula with this data.
     */
    create: XOR<AulaCreateInput, AulaUncheckedCreateInput>
    /**
     * In case the Aula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AulaUpdateInput, AulaUncheckedUpdateInput>
  }

  /**
   * Aula delete
   */
  export type AulaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter which Aula to delete.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula deleteMany
   */
  export type AulaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aulas to delete
     */
    where?: AulaWhereInput
    /**
     * Limit how many Aulas to delete.
     */
    limit?: number
  }

  /**
   * Aula.asistencias
   */
  export type Aula$asistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    cursor?: AsistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Aula.estados
   */
  export type Aula$estadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoAula
     */
    select?: EstadoAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoAula
     */
    omit?: EstadoAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoAulaInclude<ExtArgs> | null
    where?: EstadoAulaWhereInput
    orderBy?: EstadoAulaOrderByWithRelationInput | EstadoAulaOrderByWithRelationInput[]
    cursor?: EstadoAulaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstadoAulaScalarFieldEnum | EstadoAulaScalarFieldEnum[]
  }

  /**
   * Aula.horarios
   */
  export type Aula$horariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    where?: HorarioWhereInput
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    cursor?: HorarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Aula without action
   */
  export type AulaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aula
     */
    omit?: AulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
  }


  /**
   * Model Profesor
   */

  export type AggregateProfesor = {
    _count: ProfesorCountAggregateOutputType | null
    _min: ProfesorMinAggregateOutputType | null
    _max: ProfesorMaxAggregateOutputType | null
  }

  export type ProfesorMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    correo: string | null
    telefono: string | null
    activo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ProfesorMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    correo: string | null
    telefono: string | null
    activo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ProfesorCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    telefono: number
    activo: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type ProfesorMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    telefono?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ProfesorMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    telefono?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ProfesorCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    telefono?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type ProfesorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesor to aggregate.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profesors
    **/
    _count?: true | ProfesorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfesorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfesorMaxAggregateInputType
  }

  export type GetProfesorAggregateType<T extends ProfesorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfesor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfesor[P]>
      : GetScalarType<T[P], AggregateProfesor[P]>
  }




  export type ProfesorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfesorWhereInput
    orderBy?: ProfesorOrderByWithAggregationInput | ProfesorOrderByWithAggregationInput[]
    by: ProfesorScalarFieldEnum[] | ProfesorScalarFieldEnum
    having?: ProfesorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfesorCountAggregateInputType | true
    _min?: ProfesorMinAggregateInputType
    _max?: ProfesorMaxAggregateInputType
  }

  export type ProfesorGroupByOutputType = {
    id: string
    nombre: string
    correo: string
    telefono: string | null
    activo: boolean
    creadoEn: Date
    actualizadoEn: Date
    _count: ProfesorCountAggregateOutputType | null
    _min: ProfesorMinAggregateOutputType | null
    _max: ProfesorMaxAggregateOutputType | null
  }

  type GetProfesorGroupByPayload<T extends ProfesorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfesorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfesorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfesorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfesorGroupByOutputType[P]>
        }
      >
    >


  export type ProfesorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    asistencias?: boolean | Profesor$asistenciasArgs<ExtArgs>
    horarios?: boolean | Profesor$horariosArgs<ExtArgs>
    _count?: boolean | ProfesorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profesor"]>

  export type ProfesorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["profesor"]>

  export type ProfesorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["profesor"]>

  export type ProfesorSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type ProfesorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "correo" | "telefono" | "activo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["profesor"]>
  export type ProfesorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | Profesor$asistenciasArgs<ExtArgs>
    horarios?: boolean | Profesor$horariosArgs<ExtArgs>
    _count?: boolean | ProfesorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfesorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfesorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfesorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profesor"
    objects: {
      asistencias: Prisma.$AsistenciaPayload<ExtArgs>[]
      horarios: Prisma.$HorarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      correo: string
      telefono: string | null
      activo: boolean
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["profesor"]>
    composites: {}
  }

  type ProfesorGetPayload<S extends boolean | null | undefined | ProfesorDefaultArgs> = $Result.GetResult<Prisma.$ProfesorPayload, S>

  type ProfesorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfesorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfesorCountAggregateInputType | true
    }

  export interface ProfesorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profesor'], meta: { name: 'Profesor' } }
    /**
     * Find zero or one Profesor that matches the filter.
     * @param {ProfesorFindUniqueArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfesorFindUniqueArgs>(args: SelectSubset<T, ProfesorFindUniqueArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profesor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfesorFindUniqueOrThrowArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfesorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfesorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profesor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorFindFirstArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfesorFindFirstArgs>(args?: SelectSubset<T, ProfesorFindFirstArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profesor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorFindFirstOrThrowArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfesorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfesorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profesors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profesors
     * const profesors = await prisma.profesor.findMany()
     * 
     * // Get first 10 Profesors
     * const profesors = await prisma.profesor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profesorWithIdOnly = await prisma.profesor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfesorFindManyArgs>(args?: SelectSubset<T, ProfesorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profesor.
     * @param {ProfesorCreateArgs} args - Arguments to create a Profesor.
     * @example
     * // Create one Profesor
     * const Profesor = await prisma.profesor.create({
     *   data: {
     *     // ... data to create a Profesor
     *   }
     * })
     * 
     */
    create<T extends ProfesorCreateArgs>(args: SelectSubset<T, ProfesorCreateArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profesors.
     * @param {ProfesorCreateManyArgs} args - Arguments to create many Profesors.
     * @example
     * // Create many Profesors
     * const profesor = await prisma.profesor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfesorCreateManyArgs>(args?: SelectSubset<T, ProfesorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profesors and returns the data saved in the database.
     * @param {ProfesorCreateManyAndReturnArgs} args - Arguments to create many Profesors.
     * @example
     * // Create many Profesors
     * const profesor = await prisma.profesor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profesors and only return the `id`
     * const profesorWithIdOnly = await prisma.profesor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfesorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfesorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profesor.
     * @param {ProfesorDeleteArgs} args - Arguments to delete one Profesor.
     * @example
     * // Delete one Profesor
     * const Profesor = await prisma.profesor.delete({
     *   where: {
     *     // ... filter to delete one Profesor
     *   }
     * })
     * 
     */
    delete<T extends ProfesorDeleteArgs>(args: SelectSubset<T, ProfesorDeleteArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profesor.
     * @param {ProfesorUpdateArgs} args - Arguments to update one Profesor.
     * @example
     * // Update one Profesor
     * const profesor = await prisma.profesor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfesorUpdateArgs>(args: SelectSubset<T, ProfesorUpdateArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profesors.
     * @param {ProfesorDeleteManyArgs} args - Arguments to filter Profesors to delete.
     * @example
     * // Delete a few Profesors
     * const { count } = await prisma.profesor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfesorDeleteManyArgs>(args?: SelectSubset<T, ProfesorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profesors
     * const profesor = await prisma.profesor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfesorUpdateManyArgs>(args: SelectSubset<T, ProfesorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profesors and returns the data updated in the database.
     * @param {ProfesorUpdateManyAndReturnArgs} args - Arguments to update many Profesors.
     * @example
     * // Update many Profesors
     * const profesor = await prisma.profesor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profesors and only return the `id`
     * const profesorWithIdOnly = await prisma.profesor.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfesorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfesorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profesor.
     * @param {ProfesorUpsertArgs} args - Arguments to update or create a Profesor.
     * @example
     * // Update or create a Profesor
     * const profesor = await prisma.profesor.upsert({
     *   create: {
     *     // ... data to create a Profesor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profesor we want to update
     *   }
     * })
     */
    upsert<T extends ProfesorUpsertArgs>(args: SelectSubset<T, ProfesorUpsertArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorCountArgs} args - Arguments to filter Profesors to count.
     * @example
     * // Count the number of Profesors
     * const count = await prisma.profesor.count({
     *   where: {
     *     // ... the filter for the Profesors we want to count
     *   }
     * })
    **/
    count<T extends ProfesorCountArgs>(
      args?: Subset<T, ProfesorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfesorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfesorAggregateArgs>(args: Subset<T, ProfesorAggregateArgs>): Prisma.PrismaPromise<GetProfesorAggregateType<T>>

    /**
     * Group by Profesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorGroupByArgs} args - Group by arguments.
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
      T extends ProfesorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfesorGroupByArgs['orderBy'] }
        : { orderBy?: ProfesorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfesorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfesorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profesor model
   */
  readonly fields: ProfesorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profesor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfesorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asistencias<T extends Profesor$asistenciasArgs<ExtArgs> = {}>(args?: Subset<T, Profesor$asistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    horarios<T extends Profesor$horariosArgs<ExtArgs> = {}>(args?: Subset<T, Profesor$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profesor model
   */
  interface ProfesorFieldRefs {
    readonly id: FieldRef<"Profesor", 'String'>
    readonly nombre: FieldRef<"Profesor", 'String'>
    readonly correo: FieldRef<"Profesor", 'String'>
    readonly telefono: FieldRef<"Profesor", 'String'>
    readonly activo: FieldRef<"Profesor", 'Boolean'>
    readonly creadoEn: FieldRef<"Profesor", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Profesor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profesor findUnique
   */
  export type ProfesorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor findUniqueOrThrow
   */
  export type ProfesorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor findFirst
   */
  export type ProfesorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesors.
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesors.
     */
    distinct?: ProfesorScalarFieldEnum | ProfesorScalarFieldEnum[]
  }

  /**
   * Profesor findFirstOrThrow
   */
  export type ProfesorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesors.
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesors.
     */
    distinct?: ProfesorScalarFieldEnum | ProfesorScalarFieldEnum[]
  }

  /**
   * Profesor findMany
   */
  export type ProfesorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesors to fetch.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profesors.
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    distinct?: ProfesorScalarFieldEnum | ProfesorScalarFieldEnum[]
  }

  /**
   * Profesor create
   */
  export type ProfesorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * The data needed to create a Profesor.
     */
    data: XOR<ProfesorCreateInput, ProfesorUncheckedCreateInput>
  }

  /**
   * Profesor createMany
   */
  export type ProfesorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profesors.
     */
    data: ProfesorCreateManyInput | ProfesorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profesor createManyAndReturn
   */
  export type ProfesorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * The data used to create many Profesors.
     */
    data: ProfesorCreateManyInput | ProfesorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profesor update
   */
  export type ProfesorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * The data needed to update a Profesor.
     */
    data: XOR<ProfesorUpdateInput, ProfesorUncheckedUpdateInput>
    /**
     * Choose, which Profesor to update.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor updateMany
   */
  export type ProfesorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profesors.
     */
    data: XOR<ProfesorUpdateManyMutationInput, ProfesorUncheckedUpdateManyInput>
    /**
     * Filter which Profesors to update
     */
    where?: ProfesorWhereInput
    /**
     * Limit how many Profesors to update.
     */
    limit?: number
  }

  /**
   * Profesor updateManyAndReturn
   */
  export type ProfesorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * The data used to update Profesors.
     */
    data: XOR<ProfesorUpdateManyMutationInput, ProfesorUncheckedUpdateManyInput>
    /**
     * Filter which Profesors to update
     */
    where?: ProfesorWhereInput
    /**
     * Limit how many Profesors to update.
     */
    limit?: number
  }

  /**
   * Profesor upsert
   */
  export type ProfesorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * The filter to search for the Profesor to update in case it exists.
     */
    where: ProfesorWhereUniqueInput
    /**
     * In case the Profesor found by the `where` argument doesn't exist, create a new Profesor with this data.
     */
    create: XOR<ProfesorCreateInput, ProfesorUncheckedCreateInput>
    /**
     * In case the Profesor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfesorUpdateInput, ProfesorUncheckedUpdateInput>
  }

  /**
   * Profesor delete
   */
  export type ProfesorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter which Profesor to delete.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor deleteMany
   */
  export type ProfesorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesors to delete
     */
    where?: ProfesorWhereInput
    /**
     * Limit how many Profesors to delete.
     */
    limit?: number
  }

  /**
   * Profesor.asistencias
   */
  export type Profesor$asistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    cursor?: AsistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Profesor.horarios
   */
  export type Profesor$horariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    where?: HorarioWhereInput
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    cursor?: HorarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Profesor without action
   */
  export type ProfesorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
  }


  /**
   * Model Horario
   */

  export type AggregateHorario = {
    _count: HorarioCountAggregateOutputType | null
    _avg: HorarioAvgAggregateOutputType | null
    _sum: HorarioSumAggregateOutputType | null
    _min: HorarioMinAggregateOutputType | null
    _max: HorarioMaxAggregateOutputType | null
  }

  export type HorarioAvgAggregateOutputType = {
    diaSemana: number | null
  }

  export type HorarioSumAggregateOutputType = {
    diaSemana: number | null
  }

  export type HorarioMinAggregateOutputType = {
    id: string | null
    diaSemana: number | null
    horaInicio: string | null
    horaFin: string | null
    semestre: string | null
    grupo: string | null
    activo: boolean | null
    asignaturaId: string | null
    aulaId: string | null
    profesorId: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type HorarioMaxAggregateOutputType = {
    id: string | null
    diaSemana: number | null
    horaInicio: string | null
    horaFin: string | null
    semestre: string | null
    grupo: string | null
    activo: boolean | null
    asignaturaId: string | null
    aulaId: string | null
    profesorId: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type HorarioCountAggregateOutputType = {
    id: number
    diaSemana: number
    horaInicio: number
    horaFin: number
    semestre: number
    grupo: number
    activo: number
    asignaturaId: number
    aulaId: number
    profesorId: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type HorarioAvgAggregateInputType = {
    diaSemana?: true
  }

  export type HorarioSumAggregateInputType = {
    diaSemana?: true
  }

  export type HorarioMinAggregateInputType = {
    id?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    semestre?: true
    grupo?: true
    activo?: true
    asignaturaId?: true
    aulaId?: true
    profesorId?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type HorarioMaxAggregateInputType = {
    id?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    semestre?: true
    grupo?: true
    activo?: true
    asignaturaId?: true
    aulaId?: true
    profesorId?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type HorarioCountAggregateInputType = {
    id?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    semestre?: true
    grupo?: true
    activo?: true
    asignaturaId?: true
    aulaId?: true
    profesorId?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type HorarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Horario to aggregate.
     */
    where?: HorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Horarios
    **/
    _count?: true | HorarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HorarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HorarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorarioMaxAggregateInputType
  }

  export type GetHorarioAggregateType<T extends HorarioAggregateArgs> = {
        [P in keyof T & keyof AggregateHorario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorario[P]>
      : GetScalarType<T[P], AggregateHorario[P]>
  }




  export type HorarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioWhereInput
    orderBy?: HorarioOrderByWithAggregationInput | HorarioOrderByWithAggregationInput[]
    by: HorarioScalarFieldEnum[] | HorarioScalarFieldEnum
    having?: HorarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorarioCountAggregateInputType | true
    _avg?: HorarioAvgAggregateInputType
    _sum?: HorarioSumAggregateInputType
    _min?: HorarioMinAggregateInputType
    _max?: HorarioMaxAggregateInputType
  }

  export type HorarioGroupByOutputType = {
    id: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo: string | null
    activo: boolean
    asignaturaId: string
    aulaId: string
    profesorId: string | null
    creadoEn: Date
    actualizadoEn: Date
    _count: HorarioCountAggregateOutputType | null
    _avg: HorarioAvgAggregateOutputType | null
    _sum: HorarioSumAggregateOutputType | null
    _min: HorarioMinAggregateOutputType | null
    _max: HorarioMaxAggregateOutputType | null
  }

  type GetHorarioGroupByPayload<T extends HorarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorarioGroupByOutputType[P]>
            : GetScalarType<T[P], HorarioGroupByOutputType[P]>
        }
      >
    >


  export type HorarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    semestre?: boolean
    grupo?: boolean
    activo?: boolean
    asignaturaId?: boolean
    aulaId?: boolean
    profesorId?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    asistencias?: boolean | Horario$asistenciasArgs<ExtArgs>
    profesor?: boolean | Horario$profesorArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
    asignatura?: boolean | AsignaturaDefaultArgs<ExtArgs>
    _count?: boolean | HorarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horario"]>

  export type HorarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    semestre?: boolean
    grupo?: boolean
    activo?: boolean
    asignaturaId?: boolean
    aulaId?: boolean
    profesorId?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    profesor?: boolean | Horario$profesorArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
    asignatura?: boolean | AsignaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horario"]>

  export type HorarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    semestre?: boolean
    grupo?: boolean
    activo?: boolean
    asignaturaId?: boolean
    aulaId?: boolean
    profesorId?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    profesor?: boolean | Horario$profesorArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
    asignatura?: boolean | AsignaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horario"]>

  export type HorarioSelectScalar = {
    id?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    semestre?: boolean
    grupo?: boolean
    activo?: boolean
    asignaturaId?: boolean
    aulaId?: boolean
    profesorId?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type HorarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diaSemana" | "horaInicio" | "horaFin" | "semestre" | "grupo" | "activo" | "asignaturaId" | "aulaId" | "profesorId" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["horario"]>
  export type HorarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | Horario$asistenciasArgs<ExtArgs>
    profesor?: boolean | Horario$profesorArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
    asignatura?: boolean | AsignaturaDefaultArgs<ExtArgs>
    _count?: boolean | HorarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HorarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesor?: boolean | Horario$profesorArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
    asignatura?: boolean | AsignaturaDefaultArgs<ExtArgs>
  }
  export type HorarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesor?: boolean | Horario$profesorArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
    asignatura?: boolean | AsignaturaDefaultArgs<ExtArgs>
  }

  export type $HorarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Horario"
    objects: {
      asistencias: Prisma.$AsistenciaPayload<ExtArgs>[]
      profesor: Prisma.$ProfesorPayload<ExtArgs> | null
      aula: Prisma.$AulaPayload<ExtArgs>
      asignatura: Prisma.$AsignaturaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      diaSemana: number
      horaInicio: string
      horaFin: string
      semestre: string
      grupo: string | null
      activo: boolean
      asignaturaId: string
      aulaId: string
      profesorId: string | null
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["horario"]>
    composites: {}
  }

  type HorarioGetPayload<S extends boolean | null | undefined | HorarioDefaultArgs> = $Result.GetResult<Prisma.$HorarioPayload, S>

  type HorarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorarioCountAggregateInputType | true
    }

  export interface HorarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Horario'], meta: { name: 'Horario' } }
    /**
     * Find zero or one Horario that matches the filter.
     * @param {HorarioFindUniqueArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorarioFindUniqueArgs>(args: SelectSubset<T, HorarioFindUniqueArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Horario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorarioFindUniqueOrThrowArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorarioFindUniqueOrThrowArgs>(args: SelectSubset<T, HorarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioFindFirstArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorarioFindFirstArgs>(args?: SelectSubset<T, HorarioFindFirstArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioFindFirstOrThrowArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorarioFindFirstOrThrowArgs>(args?: SelectSubset<T, HorarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Horarios
     * const horarios = await prisma.horario.findMany()
     * 
     * // Get first 10 Horarios
     * const horarios = await prisma.horario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horarioWithIdOnly = await prisma.horario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorarioFindManyArgs>(args?: SelectSubset<T, HorarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Horario.
     * @param {HorarioCreateArgs} args - Arguments to create a Horario.
     * @example
     * // Create one Horario
     * const Horario = await prisma.horario.create({
     *   data: {
     *     // ... data to create a Horario
     *   }
     * })
     * 
     */
    create<T extends HorarioCreateArgs>(args: SelectSubset<T, HorarioCreateArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Horarios.
     * @param {HorarioCreateManyArgs} args - Arguments to create many Horarios.
     * @example
     * // Create many Horarios
     * const horario = await prisma.horario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorarioCreateManyArgs>(args?: SelectSubset<T, HorarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Horarios and returns the data saved in the database.
     * @param {HorarioCreateManyAndReturnArgs} args - Arguments to create many Horarios.
     * @example
     * // Create many Horarios
     * const horario = await prisma.horario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Horarios and only return the `id`
     * const horarioWithIdOnly = await prisma.horario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HorarioCreateManyAndReturnArgs>(args?: SelectSubset<T, HorarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Horario.
     * @param {HorarioDeleteArgs} args - Arguments to delete one Horario.
     * @example
     * // Delete one Horario
     * const Horario = await prisma.horario.delete({
     *   where: {
     *     // ... filter to delete one Horario
     *   }
     * })
     * 
     */
    delete<T extends HorarioDeleteArgs>(args: SelectSubset<T, HorarioDeleteArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Horario.
     * @param {HorarioUpdateArgs} args - Arguments to update one Horario.
     * @example
     * // Update one Horario
     * const horario = await prisma.horario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorarioUpdateArgs>(args: SelectSubset<T, HorarioUpdateArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Horarios.
     * @param {HorarioDeleteManyArgs} args - Arguments to filter Horarios to delete.
     * @example
     * // Delete a few Horarios
     * const { count } = await prisma.horario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorarioDeleteManyArgs>(args?: SelectSubset<T, HorarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Horarios
     * const horario = await prisma.horario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorarioUpdateManyArgs>(args: SelectSubset<T, HorarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios and returns the data updated in the database.
     * @param {HorarioUpdateManyAndReturnArgs} args - Arguments to update many Horarios.
     * @example
     * // Update many Horarios
     * const horario = await prisma.horario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Horarios and only return the `id`
     * const horarioWithIdOnly = await prisma.horario.updateManyAndReturn({
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
    updateManyAndReturn<T extends HorarioUpdateManyAndReturnArgs>(args: SelectSubset<T, HorarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Horario.
     * @param {HorarioUpsertArgs} args - Arguments to update or create a Horario.
     * @example
     * // Update or create a Horario
     * const horario = await prisma.horario.upsert({
     *   create: {
     *     // ... data to create a Horario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Horario we want to update
     *   }
     * })
     */
    upsert<T extends HorarioUpsertArgs>(args: SelectSubset<T, HorarioUpsertArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioCountArgs} args - Arguments to filter Horarios to count.
     * @example
     * // Count the number of Horarios
     * const count = await prisma.horario.count({
     *   where: {
     *     // ... the filter for the Horarios we want to count
     *   }
     * })
    **/
    count<T extends HorarioCountArgs>(
      args?: Subset<T, HorarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Horario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HorarioAggregateArgs>(args: Subset<T, HorarioAggregateArgs>): Prisma.PrismaPromise<GetHorarioAggregateType<T>>

    /**
     * Group by Horario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioGroupByArgs} args - Group by arguments.
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
      T extends HorarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorarioGroupByArgs['orderBy'] }
        : { orderBy?: HorarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HorarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Horario model
   */
  readonly fields: HorarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Horario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asistencias<T extends Horario$asistenciasArgs<ExtArgs> = {}>(args?: Subset<T, Horario$asistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profesor<T extends Horario$profesorArgs<ExtArgs> = {}>(args?: Subset<T, Horario$profesorArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    aula<T extends AulaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AulaDefaultArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    asignatura<T extends AsignaturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AsignaturaDefaultArgs<ExtArgs>>): Prisma__AsignaturaClient<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Horario model
   */
  interface HorarioFieldRefs {
    readonly id: FieldRef<"Horario", 'String'>
    readonly diaSemana: FieldRef<"Horario", 'Int'>
    readonly horaInicio: FieldRef<"Horario", 'String'>
    readonly horaFin: FieldRef<"Horario", 'String'>
    readonly semestre: FieldRef<"Horario", 'String'>
    readonly grupo: FieldRef<"Horario", 'String'>
    readonly activo: FieldRef<"Horario", 'Boolean'>
    readonly asignaturaId: FieldRef<"Horario", 'String'>
    readonly aulaId: FieldRef<"Horario", 'String'>
    readonly profesorId: FieldRef<"Horario", 'String'>
    readonly creadoEn: FieldRef<"Horario", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Horario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Horario findUnique
   */
  export type HorarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horario to fetch.
     */
    where: HorarioWhereUniqueInput
  }

  /**
   * Horario findUniqueOrThrow
   */
  export type HorarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horario to fetch.
     */
    where: HorarioWhereUniqueInput
  }

  /**
   * Horario findFirst
   */
  export type HorarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horario to fetch.
     */
    where?: HorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Horarios.
     */
    cursor?: HorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Horarios.
     */
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Horario findFirstOrThrow
   */
  export type HorarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horario to fetch.
     */
    where?: HorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Horarios.
     */
    cursor?: HorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Horarios.
     */
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Horario findMany
   */
  export type HorarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horarios to fetch.
     */
    where?: HorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Horarios.
     */
    cursor?: HorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Horario create
   */
  export type HorarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Horario.
     */
    data: XOR<HorarioCreateInput, HorarioUncheckedCreateInput>
  }

  /**
   * Horario createMany
   */
  export type HorarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Horarios.
     */
    data: HorarioCreateManyInput | HorarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Horario createManyAndReturn
   */
  export type HorarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * The data used to create many Horarios.
     */
    data: HorarioCreateManyInput | HorarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Horario update
   */
  export type HorarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Horario.
     */
    data: XOR<HorarioUpdateInput, HorarioUncheckedUpdateInput>
    /**
     * Choose, which Horario to update.
     */
    where: HorarioWhereUniqueInput
  }

  /**
   * Horario updateMany
   */
  export type HorarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Horarios.
     */
    data: XOR<HorarioUpdateManyMutationInput, HorarioUncheckedUpdateManyInput>
    /**
     * Filter which Horarios to update
     */
    where?: HorarioWhereInput
    /**
     * Limit how many Horarios to update.
     */
    limit?: number
  }

  /**
   * Horario updateManyAndReturn
   */
  export type HorarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * The data used to update Horarios.
     */
    data: XOR<HorarioUpdateManyMutationInput, HorarioUncheckedUpdateManyInput>
    /**
     * Filter which Horarios to update
     */
    where?: HorarioWhereInput
    /**
     * Limit how many Horarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Horario upsert
   */
  export type HorarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Horario to update in case it exists.
     */
    where: HorarioWhereUniqueInput
    /**
     * In case the Horario found by the `where` argument doesn't exist, create a new Horario with this data.
     */
    create: XOR<HorarioCreateInput, HorarioUncheckedCreateInput>
    /**
     * In case the Horario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorarioUpdateInput, HorarioUncheckedUpdateInput>
  }

  /**
   * Horario delete
   */
  export type HorarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter which Horario to delete.
     */
    where: HorarioWhereUniqueInput
  }

  /**
   * Horario deleteMany
   */
  export type HorarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Horarios to delete
     */
    where?: HorarioWhereInput
    /**
     * Limit how many Horarios to delete.
     */
    limit?: number
  }

  /**
   * Horario.asistencias
   */
  export type Horario$asistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    cursor?: AsistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Horario.profesor
   */
  export type Horario$profesorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    where?: ProfesorWhereInput
  }

  /**
   * Horario without action
   */
  export type HorarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
  }


  /**
   * Model Asistencia
   */

  export type AggregateAsistencia = {
    _count: AsistenciaCountAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  export type AsistenciaMinAggregateOutputType = {
    id: string | null
    fecha: Date | null
    horaInicio: string | null
    horaFin: string | null
    estado: $Enums.EstadoAsistencia | null
    observaciones: string | null
    verificadoPor: string | null
    horarioId: string | null
    asignaturaId: string | null
    aulaId: string | null
    profesorId: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type AsistenciaMaxAggregateOutputType = {
    id: string | null
    fecha: Date | null
    horaInicio: string | null
    horaFin: string | null
    estado: $Enums.EstadoAsistencia | null
    observaciones: string | null
    verificadoPor: string | null
    horarioId: string | null
    asignaturaId: string | null
    aulaId: string | null
    profesorId: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type AsistenciaCountAggregateOutputType = {
    id: number
    fecha: number
    horaInicio: number
    horaFin: number
    estado: number
    observaciones: number
    verificadoPor: number
    horarioId: number
    asignaturaId: number
    aulaId: number
    profesorId: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type AsistenciaMinAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    estado?: true
    observaciones?: true
    verificadoPor?: true
    horarioId?: true
    asignaturaId?: true
    aulaId?: true
    profesorId?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type AsistenciaMaxAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    estado?: true
    observaciones?: true
    verificadoPor?: true
    horarioId?: true
    asignaturaId?: true
    aulaId?: true
    profesorId?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type AsistenciaCountAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    estado?: true
    observaciones?: true
    verificadoPor?: true
    horarioId?: true
    asignaturaId?: true
    aulaId?: true
    profesorId?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type AsistenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asistencia to aggregate.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asistencias
    **/
    _count?: true | AsistenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsistenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsistenciaMaxAggregateInputType
  }

  export type GetAsistenciaAggregateType<T extends AsistenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateAsistencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsistencia[P]>
      : GetScalarType<T[P], AggregateAsistencia[P]>
  }




  export type AsistenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithAggregationInput | AsistenciaOrderByWithAggregationInput[]
    by: AsistenciaScalarFieldEnum[] | AsistenciaScalarFieldEnum
    having?: AsistenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsistenciaCountAggregateInputType | true
    _min?: AsistenciaMinAggregateInputType
    _max?: AsistenciaMaxAggregateInputType
  }

  export type AsistenciaGroupByOutputType = {
    id: string
    fecha: Date
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones: string | null
    verificadoPor: string | null
    horarioId: string
    asignaturaId: string
    aulaId: string
    profesorId: string | null
    creadoEn: Date
    actualizadoEn: Date
    _count: AsistenciaCountAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  type GetAsistenciaGroupByPayload<T extends AsistenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsistenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsistenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
            : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
        }
      >
    >


  export type AsistenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    estado?: boolean
    observaciones?: boolean
    verificadoPor?: boolean
    horarioId?: boolean
    asignaturaId?: boolean
    aulaId?: boolean
    profesorId?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    profesor?: boolean | Asistencia$profesorArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
    horario?: boolean | HorarioDefaultArgs<ExtArgs>
    asignatura?: boolean | AsignaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type AsistenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    estado?: boolean
    observaciones?: boolean
    verificadoPor?: boolean
    horarioId?: boolean
    asignaturaId?: boolean
    aulaId?: boolean
    profesorId?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    profesor?: boolean | Asistencia$profesorArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
    horario?: boolean | HorarioDefaultArgs<ExtArgs>
    asignatura?: boolean | AsignaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type AsistenciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    estado?: boolean
    observaciones?: boolean
    verificadoPor?: boolean
    horarioId?: boolean
    asignaturaId?: boolean
    aulaId?: boolean
    profesorId?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    profesor?: boolean | Asistencia$profesorArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
    horario?: boolean | HorarioDefaultArgs<ExtArgs>
    asignatura?: boolean | AsignaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type AsistenciaSelectScalar = {
    id?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    estado?: boolean
    observaciones?: boolean
    verificadoPor?: boolean
    horarioId?: boolean
    asignaturaId?: boolean
    aulaId?: boolean
    profesorId?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type AsistenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "horaInicio" | "horaFin" | "estado" | "observaciones" | "verificadoPor" | "horarioId" | "asignaturaId" | "aulaId" | "profesorId" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["asistencia"]>
  export type AsistenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesor?: boolean | Asistencia$profesorArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
    horario?: boolean | HorarioDefaultArgs<ExtArgs>
    asignatura?: boolean | AsignaturaDefaultArgs<ExtArgs>
  }
  export type AsistenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesor?: boolean | Asistencia$profesorArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
    horario?: boolean | HorarioDefaultArgs<ExtArgs>
    asignatura?: boolean | AsignaturaDefaultArgs<ExtArgs>
  }
  export type AsistenciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesor?: boolean | Asistencia$profesorArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
    horario?: boolean | HorarioDefaultArgs<ExtArgs>
    asignatura?: boolean | AsignaturaDefaultArgs<ExtArgs>
  }

  export type $AsistenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asistencia"
    objects: {
      profesor: Prisma.$ProfesorPayload<ExtArgs> | null
      aula: Prisma.$AulaPayload<ExtArgs>
      horario: Prisma.$HorarioPayload<ExtArgs>
      asignatura: Prisma.$AsignaturaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fecha: Date
      horaInicio: string
      horaFin: string
      estado: $Enums.EstadoAsistencia
      observaciones: string | null
      verificadoPor: string | null
      horarioId: string
      asignaturaId: string
      aulaId: string
      profesorId: string | null
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["asistencia"]>
    composites: {}
  }

  type AsistenciaGetPayload<S extends boolean | null | undefined | AsistenciaDefaultArgs> = $Result.GetResult<Prisma.$AsistenciaPayload, S>

  type AsistenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsistenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsistenciaCountAggregateInputType | true
    }

  export interface AsistenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asistencia'], meta: { name: 'Asistencia' } }
    /**
     * Find zero or one Asistencia that matches the filter.
     * @param {AsistenciaFindUniqueArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsistenciaFindUniqueArgs>(args: SelectSubset<T, AsistenciaFindUniqueArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asistencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsistenciaFindUniqueOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsistenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, AsistenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindFirstArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsistenciaFindFirstArgs>(args?: SelectSubset<T, AsistenciaFindFirstArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindFirstOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsistenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, AsistenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asistencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistencias
     * const asistencias = await prisma.asistencia.findMany()
     * 
     * // Get first 10 Asistencias
     * const asistencias = await prisma.asistencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsistenciaFindManyArgs>(args?: SelectSubset<T, AsistenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asistencia.
     * @param {AsistenciaCreateArgs} args - Arguments to create a Asistencia.
     * @example
     * // Create one Asistencia
     * const Asistencia = await prisma.asistencia.create({
     *   data: {
     *     // ... data to create a Asistencia
     *   }
     * })
     * 
     */
    create<T extends AsistenciaCreateArgs>(args: SelectSubset<T, AsistenciaCreateArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asistencias.
     * @param {AsistenciaCreateManyArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsistenciaCreateManyArgs>(args?: SelectSubset<T, AsistenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asistencias and returns the data saved in the database.
     * @param {AsistenciaCreateManyAndReturnArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asistencias and only return the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsistenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, AsistenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asistencia.
     * @param {AsistenciaDeleteArgs} args - Arguments to delete one Asistencia.
     * @example
     * // Delete one Asistencia
     * const Asistencia = await prisma.asistencia.delete({
     *   where: {
     *     // ... filter to delete one Asistencia
     *   }
     * })
     * 
     */
    delete<T extends AsistenciaDeleteArgs>(args: SelectSubset<T, AsistenciaDeleteArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asistencia.
     * @param {AsistenciaUpdateArgs} args - Arguments to update one Asistencia.
     * @example
     * // Update one Asistencia
     * const asistencia = await prisma.asistencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsistenciaUpdateArgs>(args: SelectSubset<T, AsistenciaUpdateArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asistencias.
     * @param {AsistenciaDeleteManyArgs} args - Arguments to filter Asistencias to delete.
     * @example
     * // Delete a few Asistencias
     * const { count } = await prisma.asistencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsistenciaDeleteManyArgs>(args?: SelectSubset<T, AsistenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsistenciaUpdateManyArgs>(args: SelectSubset<T, AsistenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias and returns the data updated in the database.
     * @param {AsistenciaUpdateManyAndReturnArgs} args - Arguments to update many Asistencias.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Asistencias and only return the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.updateManyAndReturn({
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
    updateManyAndReturn<T extends AsistenciaUpdateManyAndReturnArgs>(args: SelectSubset<T, AsistenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asistencia.
     * @param {AsistenciaUpsertArgs} args - Arguments to update or create a Asistencia.
     * @example
     * // Update or create a Asistencia
     * const asistencia = await prisma.asistencia.upsert({
     *   create: {
     *     // ... data to create a Asistencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistencia we want to update
     *   }
     * })
     */
    upsert<T extends AsistenciaUpsertArgs>(args: SelectSubset<T, AsistenciaUpsertArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaCountArgs} args - Arguments to filter Asistencias to count.
     * @example
     * // Count the number of Asistencias
     * const count = await prisma.asistencia.count({
     *   where: {
     *     // ... the filter for the Asistencias we want to count
     *   }
     * })
    **/
    count<T extends AsistenciaCountArgs>(
      args?: Subset<T, AsistenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsistenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsistenciaAggregateArgs>(args: Subset<T, AsistenciaAggregateArgs>): Prisma.PrismaPromise<GetAsistenciaAggregateType<T>>

    /**
     * Group by Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaGroupByArgs} args - Group by arguments.
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
      T extends AsistenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsistenciaGroupByArgs['orderBy'] }
        : { orderBy?: AsistenciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AsistenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asistencia model
   */
  readonly fields: AsistenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asistencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsistenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profesor<T extends Asistencia$profesorArgs<ExtArgs> = {}>(args?: Subset<T, Asistencia$profesorArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    aula<T extends AulaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AulaDefaultArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    horario<T extends HorarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HorarioDefaultArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    asignatura<T extends AsignaturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AsignaturaDefaultArgs<ExtArgs>>): Prisma__AsignaturaClient<$Result.GetResult<Prisma.$AsignaturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Asistencia model
   */
  interface AsistenciaFieldRefs {
    readonly id: FieldRef<"Asistencia", 'String'>
    readonly fecha: FieldRef<"Asistencia", 'DateTime'>
    readonly horaInicio: FieldRef<"Asistencia", 'String'>
    readonly horaFin: FieldRef<"Asistencia", 'String'>
    readonly estado: FieldRef<"Asistencia", 'EstadoAsistencia'>
    readonly observaciones: FieldRef<"Asistencia", 'String'>
    readonly verificadoPor: FieldRef<"Asistencia", 'String'>
    readonly horarioId: FieldRef<"Asistencia", 'String'>
    readonly asignaturaId: FieldRef<"Asistencia", 'String'>
    readonly aulaId: FieldRef<"Asistencia", 'String'>
    readonly profesorId: FieldRef<"Asistencia", 'String'>
    readonly creadoEn: FieldRef<"Asistencia", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Asistencia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asistencia findUnique
   */
  export type AsistenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia findUniqueOrThrow
   */
  export type AsistenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia findFirst
   */
  export type AsistenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Asistencia findFirstOrThrow
   */
  export type AsistenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Asistencia findMany
   */
  export type AsistenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencias to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Asistencia create
   */
  export type AsistenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Asistencia.
     */
    data: XOR<AsistenciaCreateInput, AsistenciaUncheckedCreateInput>
  }

  /**
   * Asistencia createMany
   */
  export type AsistenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asistencias.
     */
    data: AsistenciaCreateManyInput | AsistenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asistencia createManyAndReturn
   */
  export type AsistenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * The data used to create many Asistencias.
     */
    data: AsistenciaCreateManyInput | AsistenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asistencia update
   */
  export type AsistenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Asistencia.
     */
    data: XOR<AsistenciaUpdateInput, AsistenciaUncheckedUpdateInput>
    /**
     * Choose, which Asistencia to update.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia updateMany
   */
  export type AsistenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asistencias.
     */
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyInput>
    /**
     * Filter which Asistencias to update
     */
    where?: AsistenciaWhereInput
    /**
     * Limit how many Asistencias to update.
     */
    limit?: number
  }

  /**
   * Asistencia updateManyAndReturn
   */
  export type AsistenciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * The data used to update Asistencias.
     */
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyInput>
    /**
     * Filter which Asistencias to update
     */
    where?: AsistenciaWhereInput
    /**
     * Limit how many Asistencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asistencia upsert
   */
  export type AsistenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Asistencia to update in case it exists.
     */
    where: AsistenciaWhereUniqueInput
    /**
     * In case the Asistencia found by the `where` argument doesn't exist, create a new Asistencia with this data.
     */
    create: XOR<AsistenciaCreateInput, AsistenciaUncheckedCreateInput>
    /**
     * In case the Asistencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsistenciaUpdateInput, AsistenciaUncheckedUpdateInput>
  }

  /**
   * Asistencia delete
   */
  export type AsistenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter which Asistencia to delete.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia deleteMany
   */
  export type AsistenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asistencias to delete
     */
    where?: AsistenciaWhereInput
    /**
     * Limit how many Asistencias to delete.
     */
    limit?: number
  }

  /**
   * Asistencia.profesor
   */
  export type Asistencia$profesorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    where?: ProfesorWhereInput
  }

  /**
   * Asistencia without action
   */
  export type AsistenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
  }


  /**
   * Model EstadoAula
   */

  export type AggregateEstadoAula = {
    _count: EstadoAulaCountAggregateOutputType | null
    _min: EstadoAulaMinAggregateOutputType | null
    _max: EstadoAulaMaxAggregateOutputType | null
  }

  export type EstadoAulaMinAggregateOutputType = {
    id: string | null
    aulaId: string | null
    fecha: Date | null
    franja: string | null
    abierta: boolean | null
    horaApertura: Date | null
    horaCierre: Date | null
    abiertoPor: string | null
    cerradoPor: string | null
    notas: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type EstadoAulaMaxAggregateOutputType = {
    id: string | null
    aulaId: string | null
    fecha: Date | null
    franja: string | null
    abierta: boolean | null
    horaApertura: Date | null
    horaCierre: Date | null
    abiertoPor: string | null
    cerradoPor: string | null
    notas: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type EstadoAulaCountAggregateOutputType = {
    id: number
    aulaId: number
    fecha: number
    franja: number
    abierta: number
    horaApertura: number
    horaCierre: number
    abiertoPor: number
    cerradoPor: number
    notas: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type EstadoAulaMinAggregateInputType = {
    id?: true
    aulaId?: true
    fecha?: true
    franja?: true
    abierta?: true
    horaApertura?: true
    horaCierre?: true
    abiertoPor?: true
    cerradoPor?: true
    notas?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type EstadoAulaMaxAggregateInputType = {
    id?: true
    aulaId?: true
    fecha?: true
    franja?: true
    abierta?: true
    horaApertura?: true
    horaCierre?: true
    abiertoPor?: true
    cerradoPor?: true
    notas?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type EstadoAulaCountAggregateInputType = {
    id?: true
    aulaId?: true
    fecha?: true
    franja?: true
    abierta?: true
    horaApertura?: true
    horaCierre?: true
    abiertoPor?: true
    cerradoPor?: true
    notas?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type EstadoAulaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoAula to aggregate.
     */
    where?: EstadoAulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoAulas to fetch.
     */
    orderBy?: EstadoAulaOrderByWithRelationInput | EstadoAulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadoAulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoAulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoAulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstadoAulas
    **/
    _count?: true | EstadoAulaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoAulaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoAulaMaxAggregateInputType
  }

  export type GetEstadoAulaAggregateType<T extends EstadoAulaAggregateArgs> = {
        [P in keyof T & keyof AggregateEstadoAula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstadoAula[P]>
      : GetScalarType<T[P], AggregateEstadoAula[P]>
  }




  export type EstadoAulaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoAulaWhereInput
    orderBy?: EstadoAulaOrderByWithAggregationInput | EstadoAulaOrderByWithAggregationInput[]
    by: EstadoAulaScalarFieldEnum[] | EstadoAulaScalarFieldEnum
    having?: EstadoAulaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoAulaCountAggregateInputType | true
    _min?: EstadoAulaMinAggregateInputType
    _max?: EstadoAulaMaxAggregateInputType
  }

  export type EstadoAulaGroupByOutputType = {
    id: string
    aulaId: string
    fecha: Date
    franja: string
    abierta: boolean
    horaApertura: Date | null
    horaCierre: Date | null
    abiertoPor: string | null
    cerradoPor: string | null
    notas: string | null
    creadoEn: Date
    actualizadoEn: Date
    _count: EstadoAulaCountAggregateOutputType | null
    _min: EstadoAulaMinAggregateOutputType | null
    _max: EstadoAulaMaxAggregateOutputType | null
  }

  type GetEstadoAulaGroupByPayload<T extends EstadoAulaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoAulaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoAulaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoAulaGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoAulaGroupByOutputType[P]>
        }
      >
    >


  export type EstadoAulaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aulaId?: boolean
    fecha?: boolean
    franja?: boolean
    abierta?: boolean
    horaApertura?: boolean
    horaCierre?: boolean
    abiertoPor?: boolean
    cerradoPor?: boolean
    notas?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estadoAula"]>

  export type EstadoAulaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aulaId?: boolean
    fecha?: boolean
    franja?: boolean
    abierta?: boolean
    horaApertura?: boolean
    horaCierre?: boolean
    abiertoPor?: boolean
    cerradoPor?: boolean
    notas?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estadoAula"]>

  export type EstadoAulaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aulaId?: boolean
    fecha?: boolean
    franja?: boolean
    abierta?: boolean
    horaApertura?: boolean
    horaCierre?: boolean
    abiertoPor?: boolean
    cerradoPor?: boolean
    notas?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estadoAula"]>

  export type EstadoAulaSelectScalar = {
    id?: boolean
    aulaId?: boolean
    fecha?: boolean
    franja?: boolean
    abierta?: boolean
    horaApertura?: boolean
    horaCierre?: boolean
    abiertoPor?: boolean
    cerradoPor?: boolean
    notas?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type EstadoAulaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aulaId" | "fecha" | "franja" | "abierta" | "horaApertura" | "horaCierre" | "abiertoPor" | "cerradoPor" | "notas" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["estadoAula"]>
  export type EstadoAulaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }
  export type EstadoAulaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }
  export type EstadoAulaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }

  export type $EstadoAulaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstadoAula"
    objects: {
      aula: Prisma.$AulaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aulaId: string
      fecha: Date
      franja: string
      abierta: boolean
      horaApertura: Date | null
      horaCierre: Date | null
      abiertoPor: string | null
      cerradoPor: string | null
      notas: string | null
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["estadoAula"]>
    composites: {}
  }

  type EstadoAulaGetPayload<S extends boolean | null | undefined | EstadoAulaDefaultArgs> = $Result.GetResult<Prisma.$EstadoAulaPayload, S>

  type EstadoAulaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstadoAulaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadoAulaCountAggregateInputType | true
    }

  export interface EstadoAulaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstadoAula'], meta: { name: 'EstadoAula' } }
    /**
     * Find zero or one EstadoAula that matches the filter.
     * @param {EstadoAulaFindUniqueArgs} args - Arguments to find a EstadoAula
     * @example
     * // Get one EstadoAula
     * const estadoAula = await prisma.estadoAula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadoAulaFindUniqueArgs>(args: SelectSubset<T, EstadoAulaFindUniqueArgs<ExtArgs>>): Prisma__EstadoAulaClient<$Result.GetResult<Prisma.$EstadoAulaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EstadoAula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstadoAulaFindUniqueOrThrowArgs} args - Arguments to find a EstadoAula
     * @example
     * // Get one EstadoAula
     * const estadoAula = await prisma.estadoAula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadoAulaFindUniqueOrThrowArgs>(args: SelectSubset<T, EstadoAulaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstadoAulaClient<$Result.GetResult<Prisma.$EstadoAulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadoAula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAulaFindFirstArgs} args - Arguments to find a EstadoAula
     * @example
     * // Get one EstadoAula
     * const estadoAula = await prisma.estadoAula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadoAulaFindFirstArgs>(args?: SelectSubset<T, EstadoAulaFindFirstArgs<ExtArgs>>): Prisma__EstadoAulaClient<$Result.GetResult<Prisma.$EstadoAulaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadoAula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAulaFindFirstOrThrowArgs} args - Arguments to find a EstadoAula
     * @example
     * // Get one EstadoAula
     * const estadoAula = await prisma.estadoAula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadoAulaFindFirstOrThrowArgs>(args?: SelectSubset<T, EstadoAulaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstadoAulaClient<$Result.GetResult<Prisma.$EstadoAulaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EstadoAulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAulaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstadoAulas
     * const estadoAulas = await prisma.estadoAula.findMany()
     * 
     * // Get first 10 EstadoAulas
     * const estadoAulas = await prisma.estadoAula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadoAulaWithIdOnly = await prisma.estadoAula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstadoAulaFindManyArgs>(args?: SelectSubset<T, EstadoAulaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoAulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EstadoAula.
     * @param {EstadoAulaCreateArgs} args - Arguments to create a EstadoAula.
     * @example
     * // Create one EstadoAula
     * const EstadoAula = await prisma.estadoAula.create({
     *   data: {
     *     // ... data to create a EstadoAula
     *   }
     * })
     * 
     */
    create<T extends EstadoAulaCreateArgs>(args: SelectSubset<T, EstadoAulaCreateArgs<ExtArgs>>): Prisma__EstadoAulaClient<$Result.GetResult<Prisma.$EstadoAulaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EstadoAulas.
     * @param {EstadoAulaCreateManyArgs} args - Arguments to create many EstadoAulas.
     * @example
     * // Create many EstadoAulas
     * const estadoAula = await prisma.estadoAula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstadoAulaCreateManyArgs>(args?: SelectSubset<T, EstadoAulaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EstadoAulas and returns the data saved in the database.
     * @param {EstadoAulaCreateManyAndReturnArgs} args - Arguments to create many EstadoAulas.
     * @example
     * // Create many EstadoAulas
     * const estadoAula = await prisma.estadoAula.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EstadoAulas and only return the `id`
     * const estadoAulaWithIdOnly = await prisma.estadoAula.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstadoAulaCreateManyAndReturnArgs>(args?: SelectSubset<T, EstadoAulaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoAulaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EstadoAula.
     * @param {EstadoAulaDeleteArgs} args - Arguments to delete one EstadoAula.
     * @example
     * // Delete one EstadoAula
     * const EstadoAula = await prisma.estadoAula.delete({
     *   where: {
     *     // ... filter to delete one EstadoAula
     *   }
     * })
     * 
     */
    delete<T extends EstadoAulaDeleteArgs>(args: SelectSubset<T, EstadoAulaDeleteArgs<ExtArgs>>): Prisma__EstadoAulaClient<$Result.GetResult<Prisma.$EstadoAulaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EstadoAula.
     * @param {EstadoAulaUpdateArgs} args - Arguments to update one EstadoAula.
     * @example
     * // Update one EstadoAula
     * const estadoAula = await prisma.estadoAula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstadoAulaUpdateArgs>(args: SelectSubset<T, EstadoAulaUpdateArgs<ExtArgs>>): Prisma__EstadoAulaClient<$Result.GetResult<Prisma.$EstadoAulaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EstadoAulas.
     * @param {EstadoAulaDeleteManyArgs} args - Arguments to filter EstadoAulas to delete.
     * @example
     * // Delete a few EstadoAulas
     * const { count } = await prisma.estadoAula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstadoAulaDeleteManyArgs>(args?: SelectSubset<T, EstadoAulaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstadoAulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAulaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstadoAulas
     * const estadoAula = await prisma.estadoAula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstadoAulaUpdateManyArgs>(args: SelectSubset<T, EstadoAulaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstadoAulas and returns the data updated in the database.
     * @param {EstadoAulaUpdateManyAndReturnArgs} args - Arguments to update many EstadoAulas.
     * @example
     * // Update many EstadoAulas
     * const estadoAula = await prisma.estadoAula.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EstadoAulas and only return the `id`
     * const estadoAulaWithIdOnly = await prisma.estadoAula.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstadoAulaUpdateManyAndReturnArgs>(args: SelectSubset<T, EstadoAulaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoAulaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EstadoAula.
     * @param {EstadoAulaUpsertArgs} args - Arguments to update or create a EstadoAula.
     * @example
     * // Update or create a EstadoAula
     * const estadoAula = await prisma.estadoAula.upsert({
     *   create: {
     *     // ... data to create a EstadoAula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstadoAula we want to update
     *   }
     * })
     */
    upsert<T extends EstadoAulaUpsertArgs>(args: SelectSubset<T, EstadoAulaUpsertArgs<ExtArgs>>): Prisma__EstadoAulaClient<$Result.GetResult<Prisma.$EstadoAulaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EstadoAulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAulaCountArgs} args - Arguments to filter EstadoAulas to count.
     * @example
     * // Count the number of EstadoAulas
     * const count = await prisma.estadoAula.count({
     *   where: {
     *     // ... the filter for the EstadoAulas we want to count
     *   }
     * })
    **/
    count<T extends EstadoAulaCountArgs>(
      args?: Subset<T, EstadoAulaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoAulaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstadoAula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAulaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadoAulaAggregateArgs>(args: Subset<T, EstadoAulaAggregateArgs>): Prisma.PrismaPromise<GetEstadoAulaAggregateType<T>>

    /**
     * Group by EstadoAula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAulaGroupByArgs} args - Group by arguments.
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
      T extends EstadoAulaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadoAulaGroupByArgs['orderBy'] }
        : { orderBy?: EstadoAulaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstadoAulaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoAulaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstadoAula model
   */
  readonly fields: EstadoAulaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstadoAula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadoAulaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aula<T extends AulaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AulaDefaultArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EstadoAula model
   */
  interface EstadoAulaFieldRefs {
    readonly id: FieldRef<"EstadoAula", 'String'>
    readonly aulaId: FieldRef<"EstadoAula", 'String'>
    readonly fecha: FieldRef<"EstadoAula", 'DateTime'>
    readonly franja: FieldRef<"EstadoAula", 'String'>
    readonly abierta: FieldRef<"EstadoAula", 'Boolean'>
    readonly horaApertura: FieldRef<"EstadoAula", 'DateTime'>
    readonly horaCierre: FieldRef<"EstadoAula", 'DateTime'>
    readonly abiertoPor: FieldRef<"EstadoAula", 'String'>
    readonly cerradoPor: FieldRef<"EstadoAula", 'String'>
    readonly notas: FieldRef<"EstadoAula", 'String'>
    readonly creadoEn: FieldRef<"EstadoAula", 'DateTime'>
    readonly actualizadoEn: FieldRef<"EstadoAula", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EstadoAula findUnique
   */
  export type EstadoAulaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoAula
     */
    select?: EstadoAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoAula
     */
    omit?: EstadoAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoAulaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoAula to fetch.
     */
    where: EstadoAulaWhereUniqueInput
  }

  /**
   * EstadoAula findUniqueOrThrow
   */
  export type EstadoAulaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoAula
     */
    select?: EstadoAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoAula
     */
    omit?: EstadoAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoAulaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoAula to fetch.
     */
    where: EstadoAulaWhereUniqueInput
  }

  /**
   * EstadoAula findFirst
   */
  export type EstadoAulaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoAula
     */
    select?: EstadoAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoAula
     */
    omit?: EstadoAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoAulaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoAula to fetch.
     */
    where?: EstadoAulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoAulas to fetch.
     */
    orderBy?: EstadoAulaOrderByWithRelationInput | EstadoAulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoAulas.
     */
    cursor?: EstadoAulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoAulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoAulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoAulas.
     */
    distinct?: EstadoAulaScalarFieldEnum | EstadoAulaScalarFieldEnum[]
  }

  /**
   * EstadoAula findFirstOrThrow
   */
  export type EstadoAulaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoAula
     */
    select?: EstadoAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoAula
     */
    omit?: EstadoAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoAulaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoAula to fetch.
     */
    where?: EstadoAulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoAulas to fetch.
     */
    orderBy?: EstadoAulaOrderByWithRelationInput | EstadoAulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoAulas.
     */
    cursor?: EstadoAulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoAulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoAulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoAulas.
     */
    distinct?: EstadoAulaScalarFieldEnum | EstadoAulaScalarFieldEnum[]
  }

  /**
   * EstadoAula findMany
   */
  export type EstadoAulaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoAula
     */
    select?: EstadoAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoAula
     */
    omit?: EstadoAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoAulaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoAulas to fetch.
     */
    where?: EstadoAulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoAulas to fetch.
     */
    orderBy?: EstadoAulaOrderByWithRelationInput | EstadoAulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstadoAulas.
     */
    cursor?: EstadoAulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoAulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoAulas.
     */
    skip?: number
    distinct?: EstadoAulaScalarFieldEnum | EstadoAulaScalarFieldEnum[]
  }

  /**
   * EstadoAula create
   */
  export type EstadoAulaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoAula
     */
    select?: EstadoAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoAula
     */
    omit?: EstadoAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoAulaInclude<ExtArgs> | null
    /**
     * The data needed to create a EstadoAula.
     */
    data: XOR<EstadoAulaCreateInput, EstadoAulaUncheckedCreateInput>
  }

  /**
   * EstadoAula createMany
   */
  export type EstadoAulaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstadoAulas.
     */
    data: EstadoAulaCreateManyInput | EstadoAulaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstadoAula createManyAndReturn
   */
  export type EstadoAulaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoAula
     */
    select?: EstadoAulaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoAula
     */
    omit?: EstadoAulaOmit<ExtArgs> | null
    /**
     * The data used to create many EstadoAulas.
     */
    data: EstadoAulaCreateManyInput | EstadoAulaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoAulaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EstadoAula update
   */
  export type EstadoAulaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoAula
     */
    select?: EstadoAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoAula
     */
    omit?: EstadoAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoAulaInclude<ExtArgs> | null
    /**
     * The data needed to update a EstadoAula.
     */
    data: XOR<EstadoAulaUpdateInput, EstadoAulaUncheckedUpdateInput>
    /**
     * Choose, which EstadoAula to update.
     */
    where: EstadoAulaWhereUniqueInput
  }

  /**
   * EstadoAula updateMany
   */
  export type EstadoAulaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstadoAulas.
     */
    data: XOR<EstadoAulaUpdateManyMutationInput, EstadoAulaUncheckedUpdateManyInput>
    /**
     * Filter which EstadoAulas to update
     */
    where?: EstadoAulaWhereInput
    /**
     * Limit how many EstadoAulas to update.
     */
    limit?: number
  }

  /**
   * EstadoAula updateManyAndReturn
   */
  export type EstadoAulaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoAula
     */
    select?: EstadoAulaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoAula
     */
    omit?: EstadoAulaOmit<ExtArgs> | null
    /**
     * The data used to update EstadoAulas.
     */
    data: XOR<EstadoAulaUpdateManyMutationInput, EstadoAulaUncheckedUpdateManyInput>
    /**
     * Filter which EstadoAulas to update
     */
    where?: EstadoAulaWhereInput
    /**
     * Limit how many EstadoAulas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoAulaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EstadoAula upsert
   */
  export type EstadoAulaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoAula
     */
    select?: EstadoAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoAula
     */
    omit?: EstadoAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoAulaInclude<ExtArgs> | null
    /**
     * The filter to search for the EstadoAula to update in case it exists.
     */
    where: EstadoAulaWhereUniqueInput
    /**
     * In case the EstadoAula found by the `where` argument doesn't exist, create a new EstadoAula with this data.
     */
    create: XOR<EstadoAulaCreateInput, EstadoAulaUncheckedCreateInput>
    /**
     * In case the EstadoAula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadoAulaUpdateInput, EstadoAulaUncheckedUpdateInput>
  }

  /**
   * EstadoAula delete
   */
  export type EstadoAulaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoAula
     */
    select?: EstadoAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoAula
     */
    omit?: EstadoAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoAulaInclude<ExtArgs> | null
    /**
     * Filter which EstadoAula to delete.
     */
    where: EstadoAulaWhereUniqueInput
  }

  /**
   * EstadoAula deleteMany
   */
  export type EstadoAulaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoAulas to delete
     */
    where?: EstadoAulaWhereInput
    /**
     * Limit how many EstadoAulas to delete.
     */
    limit?: number
  }

  /**
   * EstadoAula without action
   */
  export type EstadoAulaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoAula
     */
    select?: EstadoAulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoAula
     */
    omit?: EstadoAulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoAulaInclude<ExtArgs> | null
  }


  /**
   * Model RegistroSistema
   */

  export type AggregateRegistroSistema = {
    _count: RegistroSistemaCountAggregateOutputType | null
    _min: RegistroSistemaMinAggregateOutputType | null
    _max: RegistroSistemaMaxAggregateOutputType | null
  }

  export type RegistroSistemaMinAggregateOutputType = {
    id: string | null
    accion: string | null
    tipoEntidad: string | null
    entidadId: string | null
    usuarioId: string | null
    fechaHora: Date | null
  }

  export type RegistroSistemaMaxAggregateOutputType = {
    id: string | null
    accion: string | null
    tipoEntidad: string | null
    entidadId: string | null
    usuarioId: string | null
    fechaHora: Date | null
  }

  export type RegistroSistemaCountAggregateOutputType = {
    id: number
    accion: number
    tipoEntidad: number
    entidadId: number
    usuarioId: number
    detalles: number
    fechaHora: number
    _all: number
  }


  export type RegistroSistemaMinAggregateInputType = {
    id?: true
    accion?: true
    tipoEntidad?: true
    entidadId?: true
    usuarioId?: true
    fechaHora?: true
  }

  export type RegistroSistemaMaxAggregateInputType = {
    id?: true
    accion?: true
    tipoEntidad?: true
    entidadId?: true
    usuarioId?: true
    fechaHora?: true
  }

  export type RegistroSistemaCountAggregateInputType = {
    id?: true
    accion?: true
    tipoEntidad?: true
    entidadId?: true
    usuarioId?: true
    detalles?: true
    fechaHora?: true
    _all?: true
  }

  export type RegistroSistemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroSistema to aggregate.
     */
    where?: RegistroSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroSistemas to fetch.
     */
    orderBy?: RegistroSistemaOrderByWithRelationInput | RegistroSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroSistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroSistemas
    **/
    _count?: true | RegistroSistemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroSistemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroSistemaMaxAggregateInputType
  }

  export type GetRegistroSistemaAggregateType<T extends RegistroSistemaAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroSistema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroSistema[P]>
      : GetScalarType<T[P], AggregateRegistroSistema[P]>
  }




  export type RegistroSistemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroSistemaWhereInput
    orderBy?: RegistroSistemaOrderByWithAggregationInput | RegistroSistemaOrderByWithAggregationInput[]
    by: RegistroSistemaScalarFieldEnum[] | RegistroSistemaScalarFieldEnum
    having?: RegistroSistemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroSistemaCountAggregateInputType | true
    _min?: RegistroSistemaMinAggregateInputType
    _max?: RegistroSistemaMaxAggregateInputType
  }

  export type RegistroSistemaGroupByOutputType = {
    id: string
    accion: string
    tipoEntidad: string
    entidadId: string
    usuarioId: string | null
    detalles: JsonValue | null
    fechaHora: Date
    _count: RegistroSistemaCountAggregateOutputType | null
    _min: RegistroSistemaMinAggregateOutputType | null
    _max: RegistroSistemaMaxAggregateOutputType | null
  }

  type GetRegistroSistemaGroupByPayload<T extends RegistroSistemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroSistemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroSistemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroSistemaGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroSistemaGroupByOutputType[P]>
        }
      >
    >


  export type RegistroSistemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accion?: boolean
    tipoEntidad?: boolean
    entidadId?: boolean
    usuarioId?: boolean
    detalles?: boolean
    fechaHora?: boolean
  }, ExtArgs["result"]["registroSistema"]>

  export type RegistroSistemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accion?: boolean
    tipoEntidad?: boolean
    entidadId?: boolean
    usuarioId?: boolean
    detalles?: boolean
    fechaHora?: boolean
  }, ExtArgs["result"]["registroSistema"]>

  export type RegistroSistemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accion?: boolean
    tipoEntidad?: boolean
    entidadId?: boolean
    usuarioId?: boolean
    detalles?: boolean
    fechaHora?: boolean
  }, ExtArgs["result"]["registroSistema"]>

  export type RegistroSistemaSelectScalar = {
    id?: boolean
    accion?: boolean
    tipoEntidad?: boolean
    entidadId?: boolean
    usuarioId?: boolean
    detalles?: boolean
    fechaHora?: boolean
  }

  export type RegistroSistemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accion" | "tipoEntidad" | "entidadId" | "usuarioId" | "detalles" | "fechaHora", ExtArgs["result"]["registroSistema"]>

  export type $RegistroSistemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroSistema"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accion: string
      tipoEntidad: string
      entidadId: string
      usuarioId: string | null
      detalles: Prisma.JsonValue | null
      fechaHora: Date
    }, ExtArgs["result"]["registroSistema"]>
    composites: {}
  }

  type RegistroSistemaGetPayload<S extends boolean | null | undefined | RegistroSistemaDefaultArgs> = $Result.GetResult<Prisma.$RegistroSistemaPayload, S>

  type RegistroSistemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroSistemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroSistemaCountAggregateInputType | true
    }

  export interface RegistroSistemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroSistema'], meta: { name: 'RegistroSistema' } }
    /**
     * Find zero or one RegistroSistema that matches the filter.
     * @param {RegistroSistemaFindUniqueArgs} args - Arguments to find a RegistroSistema
     * @example
     * // Get one RegistroSistema
     * const registroSistema = await prisma.registroSistema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroSistemaFindUniqueArgs>(args: SelectSubset<T, RegistroSistemaFindUniqueArgs<ExtArgs>>): Prisma__RegistroSistemaClient<$Result.GetResult<Prisma.$RegistroSistemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroSistema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroSistemaFindUniqueOrThrowArgs} args - Arguments to find a RegistroSistema
     * @example
     * // Get one RegistroSistema
     * const registroSistema = await prisma.registroSistema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroSistemaFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroSistemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroSistemaClient<$Result.GetResult<Prisma.$RegistroSistemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroSistema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSistemaFindFirstArgs} args - Arguments to find a RegistroSistema
     * @example
     * // Get one RegistroSistema
     * const registroSistema = await prisma.registroSistema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroSistemaFindFirstArgs>(args?: SelectSubset<T, RegistroSistemaFindFirstArgs<ExtArgs>>): Prisma__RegistroSistemaClient<$Result.GetResult<Prisma.$RegistroSistemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroSistema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSistemaFindFirstOrThrowArgs} args - Arguments to find a RegistroSistema
     * @example
     * // Get one RegistroSistema
     * const registroSistema = await prisma.registroSistema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroSistemaFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroSistemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroSistemaClient<$Result.GetResult<Prisma.$RegistroSistemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroSistemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSistemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroSistemas
     * const registroSistemas = await prisma.registroSistema.findMany()
     * 
     * // Get first 10 RegistroSistemas
     * const registroSistemas = await prisma.registroSistema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroSistemaWithIdOnly = await prisma.registroSistema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroSistemaFindManyArgs>(args?: SelectSubset<T, RegistroSistemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroSistemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroSistema.
     * @param {RegistroSistemaCreateArgs} args - Arguments to create a RegistroSistema.
     * @example
     * // Create one RegistroSistema
     * const RegistroSistema = await prisma.registroSistema.create({
     *   data: {
     *     // ... data to create a RegistroSistema
     *   }
     * })
     * 
     */
    create<T extends RegistroSistemaCreateArgs>(args: SelectSubset<T, RegistroSistemaCreateArgs<ExtArgs>>): Prisma__RegistroSistemaClient<$Result.GetResult<Prisma.$RegistroSistemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroSistemas.
     * @param {RegistroSistemaCreateManyArgs} args - Arguments to create many RegistroSistemas.
     * @example
     * // Create many RegistroSistemas
     * const registroSistema = await prisma.registroSistema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroSistemaCreateManyArgs>(args?: SelectSubset<T, RegistroSistemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroSistemas and returns the data saved in the database.
     * @param {RegistroSistemaCreateManyAndReturnArgs} args - Arguments to create many RegistroSistemas.
     * @example
     * // Create many RegistroSistemas
     * const registroSistema = await prisma.registroSistema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroSistemas and only return the `id`
     * const registroSistemaWithIdOnly = await prisma.registroSistema.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroSistemaCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroSistemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroSistemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistroSistema.
     * @param {RegistroSistemaDeleteArgs} args - Arguments to delete one RegistroSistema.
     * @example
     * // Delete one RegistroSistema
     * const RegistroSistema = await prisma.registroSistema.delete({
     *   where: {
     *     // ... filter to delete one RegistroSistema
     *   }
     * })
     * 
     */
    delete<T extends RegistroSistemaDeleteArgs>(args: SelectSubset<T, RegistroSistemaDeleteArgs<ExtArgs>>): Prisma__RegistroSistemaClient<$Result.GetResult<Prisma.$RegistroSistemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroSistema.
     * @param {RegistroSistemaUpdateArgs} args - Arguments to update one RegistroSistema.
     * @example
     * // Update one RegistroSistema
     * const registroSistema = await prisma.registroSistema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroSistemaUpdateArgs>(args: SelectSubset<T, RegistroSistemaUpdateArgs<ExtArgs>>): Prisma__RegistroSistemaClient<$Result.GetResult<Prisma.$RegistroSistemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroSistemas.
     * @param {RegistroSistemaDeleteManyArgs} args - Arguments to filter RegistroSistemas to delete.
     * @example
     * // Delete a few RegistroSistemas
     * const { count } = await prisma.registroSistema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroSistemaDeleteManyArgs>(args?: SelectSubset<T, RegistroSistemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroSistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSistemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroSistemas
     * const registroSistema = await prisma.registroSistema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroSistemaUpdateManyArgs>(args: SelectSubset<T, RegistroSistemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroSistemas and returns the data updated in the database.
     * @param {RegistroSistemaUpdateManyAndReturnArgs} args - Arguments to update many RegistroSistemas.
     * @example
     * // Update many RegistroSistemas
     * const registroSistema = await prisma.registroSistema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistroSistemas and only return the `id`
     * const registroSistemaWithIdOnly = await prisma.registroSistema.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegistroSistemaUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroSistemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroSistemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistroSistema.
     * @param {RegistroSistemaUpsertArgs} args - Arguments to update or create a RegistroSistema.
     * @example
     * // Update or create a RegistroSistema
     * const registroSistema = await prisma.registroSistema.upsert({
     *   create: {
     *     // ... data to create a RegistroSistema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroSistema we want to update
     *   }
     * })
     */
    upsert<T extends RegistroSistemaUpsertArgs>(args: SelectSubset<T, RegistroSistemaUpsertArgs<ExtArgs>>): Prisma__RegistroSistemaClient<$Result.GetResult<Prisma.$RegistroSistemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroSistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSistemaCountArgs} args - Arguments to filter RegistroSistemas to count.
     * @example
     * // Count the number of RegistroSistemas
     * const count = await prisma.registroSistema.count({
     *   where: {
     *     // ... the filter for the RegistroSistemas we want to count
     *   }
     * })
    **/
    count<T extends RegistroSistemaCountArgs>(
      args?: Subset<T, RegistroSistemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroSistemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroSistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSistemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroSistemaAggregateArgs>(args: Subset<T, RegistroSistemaAggregateArgs>): Prisma.PrismaPromise<GetRegistroSistemaAggregateType<T>>

    /**
     * Group by RegistroSistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSistemaGroupByArgs} args - Group by arguments.
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
      T extends RegistroSistemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroSistemaGroupByArgs['orderBy'] }
        : { orderBy?: RegistroSistemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroSistemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroSistemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroSistema model
   */
  readonly fields: RegistroSistemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroSistema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroSistemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the RegistroSistema model
   */
  interface RegistroSistemaFieldRefs {
    readonly id: FieldRef<"RegistroSistema", 'String'>
    readonly accion: FieldRef<"RegistroSistema", 'String'>
    readonly tipoEntidad: FieldRef<"RegistroSistema", 'String'>
    readonly entidadId: FieldRef<"RegistroSistema", 'String'>
    readonly usuarioId: FieldRef<"RegistroSistema", 'String'>
    readonly detalles: FieldRef<"RegistroSistema", 'Json'>
    readonly fechaHora: FieldRef<"RegistroSistema", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistroSistema findUnique
   */
  export type RegistroSistemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSistema
     */
    select?: RegistroSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSistema
     */
    omit?: RegistroSistemaOmit<ExtArgs> | null
    /**
     * Filter, which RegistroSistema to fetch.
     */
    where: RegistroSistemaWhereUniqueInput
  }

  /**
   * RegistroSistema findUniqueOrThrow
   */
  export type RegistroSistemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSistema
     */
    select?: RegistroSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSistema
     */
    omit?: RegistroSistemaOmit<ExtArgs> | null
    /**
     * Filter, which RegistroSistema to fetch.
     */
    where: RegistroSistemaWhereUniqueInput
  }

  /**
   * RegistroSistema findFirst
   */
  export type RegistroSistemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSistema
     */
    select?: RegistroSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSistema
     */
    omit?: RegistroSistemaOmit<ExtArgs> | null
    /**
     * Filter, which RegistroSistema to fetch.
     */
    where?: RegistroSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroSistemas to fetch.
     */
    orderBy?: RegistroSistemaOrderByWithRelationInput | RegistroSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroSistemas.
     */
    cursor?: RegistroSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroSistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroSistemas.
     */
    distinct?: RegistroSistemaScalarFieldEnum | RegistroSistemaScalarFieldEnum[]
  }

  /**
   * RegistroSistema findFirstOrThrow
   */
  export type RegistroSistemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSistema
     */
    select?: RegistroSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSistema
     */
    omit?: RegistroSistemaOmit<ExtArgs> | null
    /**
     * Filter, which RegistroSistema to fetch.
     */
    where?: RegistroSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroSistemas to fetch.
     */
    orderBy?: RegistroSistemaOrderByWithRelationInput | RegistroSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroSistemas.
     */
    cursor?: RegistroSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroSistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroSistemas.
     */
    distinct?: RegistroSistemaScalarFieldEnum | RegistroSistemaScalarFieldEnum[]
  }

  /**
   * RegistroSistema findMany
   */
  export type RegistroSistemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSistema
     */
    select?: RegistroSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSistema
     */
    omit?: RegistroSistemaOmit<ExtArgs> | null
    /**
     * Filter, which RegistroSistemas to fetch.
     */
    where?: RegistroSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroSistemas to fetch.
     */
    orderBy?: RegistroSistemaOrderByWithRelationInput | RegistroSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroSistemas.
     */
    cursor?: RegistroSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroSistemas.
     */
    skip?: number
    distinct?: RegistroSistemaScalarFieldEnum | RegistroSistemaScalarFieldEnum[]
  }

  /**
   * RegistroSistema create
   */
  export type RegistroSistemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSistema
     */
    select?: RegistroSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSistema
     */
    omit?: RegistroSistemaOmit<ExtArgs> | null
    /**
     * The data needed to create a RegistroSistema.
     */
    data: XOR<RegistroSistemaCreateInput, RegistroSistemaUncheckedCreateInput>
  }

  /**
   * RegistroSistema createMany
   */
  export type RegistroSistemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroSistemas.
     */
    data: RegistroSistemaCreateManyInput | RegistroSistemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroSistema createManyAndReturn
   */
  export type RegistroSistemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSistema
     */
    select?: RegistroSistemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSistema
     */
    omit?: RegistroSistemaOmit<ExtArgs> | null
    /**
     * The data used to create many RegistroSistemas.
     */
    data: RegistroSistemaCreateManyInput | RegistroSistemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroSistema update
   */
  export type RegistroSistemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSistema
     */
    select?: RegistroSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSistema
     */
    omit?: RegistroSistemaOmit<ExtArgs> | null
    /**
     * The data needed to update a RegistroSistema.
     */
    data: XOR<RegistroSistemaUpdateInput, RegistroSistemaUncheckedUpdateInput>
    /**
     * Choose, which RegistroSistema to update.
     */
    where: RegistroSistemaWhereUniqueInput
  }

  /**
   * RegistroSistema updateMany
   */
  export type RegistroSistemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroSistemas.
     */
    data: XOR<RegistroSistemaUpdateManyMutationInput, RegistroSistemaUncheckedUpdateManyInput>
    /**
     * Filter which RegistroSistemas to update
     */
    where?: RegistroSistemaWhereInput
    /**
     * Limit how many RegistroSistemas to update.
     */
    limit?: number
  }

  /**
   * RegistroSistema updateManyAndReturn
   */
  export type RegistroSistemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSistema
     */
    select?: RegistroSistemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSistema
     */
    omit?: RegistroSistemaOmit<ExtArgs> | null
    /**
     * The data used to update RegistroSistemas.
     */
    data: XOR<RegistroSistemaUpdateManyMutationInput, RegistroSistemaUncheckedUpdateManyInput>
    /**
     * Filter which RegistroSistemas to update
     */
    where?: RegistroSistemaWhereInput
    /**
     * Limit how many RegistroSistemas to update.
     */
    limit?: number
  }

  /**
   * RegistroSistema upsert
   */
  export type RegistroSistemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSistema
     */
    select?: RegistroSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSistema
     */
    omit?: RegistroSistemaOmit<ExtArgs> | null
    /**
     * The filter to search for the RegistroSistema to update in case it exists.
     */
    where: RegistroSistemaWhereUniqueInput
    /**
     * In case the RegistroSistema found by the `where` argument doesn't exist, create a new RegistroSistema with this data.
     */
    create: XOR<RegistroSistemaCreateInput, RegistroSistemaUncheckedCreateInput>
    /**
     * In case the RegistroSistema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroSistemaUpdateInput, RegistroSistemaUncheckedUpdateInput>
  }

  /**
   * RegistroSistema delete
   */
  export type RegistroSistemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSistema
     */
    select?: RegistroSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSistema
     */
    omit?: RegistroSistemaOmit<ExtArgs> | null
    /**
     * Filter which RegistroSistema to delete.
     */
    where: RegistroSistemaWhereUniqueInput
  }

  /**
   * RegistroSistema deleteMany
   */
  export type RegistroSistemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroSistemas to delete
     */
    where?: RegistroSistemaWhereInput
    /**
     * Limit how many RegistroSistemas to delete.
     */
    limit?: number
  }

  /**
   * RegistroSistema without action
   */
  export type RegistroSistemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSistema
     */
    select?: RegistroSistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSistema
     */
    omit?: RegistroSistemaOmit<ExtArgs> | null
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


  export const ProgramaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    codigo: 'codigo',
    color: 'color',
    colorBrillo: 'colorBrillo',
    colorTexto: 'colorTexto',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type ProgramaScalarFieldEnum = (typeof ProgramaScalarFieldEnum)[keyof typeof ProgramaScalarFieldEnum]


  export const AsignaturaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    codigo: 'codigo',
    programaId: 'programaId',
    semestre: 'semestre',
    creditos: 'creditos',
    activa: 'activa',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type AsignaturaScalarFieldEnum = (typeof AsignaturaScalarFieldEnum)[keyof typeof AsignaturaScalarFieldEnum]


  export const AulaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    capacidad: 'capacidad',
    edificio: 'edificio',
    piso: 'piso',
    equipos: 'equipos',
    activa: 'activa',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type AulaScalarFieldEnum = (typeof AulaScalarFieldEnum)[keyof typeof AulaScalarFieldEnum]


  export const ProfesorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    telefono: 'telefono',
    activo: 'activo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type ProfesorScalarFieldEnum = (typeof ProfesorScalarFieldEnum)[keyof typeof ProfesorScalarFieldEnum]


  export const HorarioScalarFieldEnum: {
    id: 'id',
    diaSemana: 'diaSemana',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    semestre: 'semestre',
    grupo: 'grupo',
    activo: 'activo',
    asignaturaId: 'asignaturaId',
    aulaId: 'aulaId',
    profesorId: 'profesorId',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type HorarioScalarFieldEnum = (typeof HorarioScalarFieldEnum)[keyof typeof HorarioScalarFieldEnum]


  export const AsistenciaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    estado: 'estado',
    observaciones: 'observaciones',
    verificadoPor: 'verificadoPor',
    horarioId: 'horarioId',
    asignaturaId: 'asignaturaId',
    aulaId: 'aulaId',
    profesorId: 'profesorId',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type AsistenciaScalarFieldEnum = (typeof AsistenciaScalarFieldEnum)[keyof typeof AsistenciaScalarFieldEnum]


  export const EstadoAulaScalarFieldEnum: {
    id: 'id',
    aulaId: 'aulaId',
    fecha: 'fecha',
    franja: 'franja',
    abierta: 'abierta',
    horaApertura: 'horaApertura',
    horaCierre: 'horaCierre',
    abiertoPor: 'abiertoPor',
    cerradoPor: 'cerradoPor',
    notas: 'notas',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type EstadoAulaScalarFieldEnum = (typeof EstadoAulaScalarFieldEnum)[keyof typeof EstadoAulaScalarFieldEnum]


  export const RegistroSistemaScalarFieldEnum: {
    id: 'id',
    accion: 'accion',
    tipoEntidad: 'tipoEntidad',
    entidadId: 'entidadId',
    usuarioId: 'usuarioId',
    detalles: 'detalles',
    fechaHora: 'fechaHora'
  };

  export type RegistroSistemaScalarFieldEnum = (typeof RegistroSistemaScalarFieldEnum)[keyof typeof RegistroSistemaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'EstadoAsistencia'
   */
  export type EnumEstadoAsistenciaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAsistencia'>
    


  /**
   * Reference to a field of type 'EstadoAsistencia[]'
   */
  export type ListEnumEstadoAsistenciaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAsistencia[]'>
    


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


  export type ProgramaWhereInput = {
    AND?: ProgramaWhereInput | ProgramaWhereInput[]
    OR?: ProgramaWhereInput[]
    NOT?: ProgramaWhereInput | ProgramaWhereInput[]
    id?: StringFilter<"Programa"> | string
    nombre?: StringFilter<"Programa"> | string
    codigo?: StringFilter<"Programa"> | string
    color?: StringFilter<"Programa"> | string
    colorBrillo?: StringFilter<"Programa"> | string
    colorTexto?: StringFilter<"Programa"> | string
    creadoEn?: DateTimeFilter<"Programa"> | Date | string
    actualizadoEn?: DateTimeFilter<"Programa"> | Date | string
    asignaturas?: AsignaturaListRelationFilter
  }

  export type ProgramaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    color?: SortOrder
    colorBrillo?: SortOrder
    colorTexto?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    asignaturas?: AsignaturaOrderByRelationAggregateInput
  }

  export type ProgramaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    codigo?: string
    AND?: ProgramaWhereInput | ProgramaWhereInput[]
    OR?: ProgramaWhereInput[]
    NOT?: ProgramaWhereInput | ProgramaWhereInput[]
    color?: StringFilter<"Programa"> | string
    colorBrillo?: StringFilter<"Programa"> | string
    colorTexto?: StringFilter<"Programa"> | string
    creadoEn?: DateTimeFilter<"Programa"> | Date | string
    actualizadoEn?: DateTimeFilter<"Programa"> | Date | string
    asignaturas?: AsignaturaListRelationFilter
  }, "id" | "nombre" | "codigo">

  export type ProgramaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    color?: SortOrder
    colorBrillo?: SortOrder
    colorTexto?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: ProgramaCountOrderByAggregateInput
    _max?: ProgramaMaxOrderByAggregateInput
    _min?: ProgramaMinOrderByAggregateInput
  }

  export type ProgramaScalarWhereWithAggregatesInput = {
    AND?: ProgramaScalarWhereWithAggregatesInput | ProgramaScalarWhereWithAggregatesInput[]
    OR?: ProgramaScalarWhereWithAggregatesInput[]
    NOT?: ProgramaScalarWhereWithAggregatesInput | ProgramaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Programa"> | string
    nombre?: StringWithAggregatesFilter<"Programa"> | string
    codigo?: StringWithAggregatesFilter<"Programa"> | string
    color?: StringWithAggregatesFilter<"Programa"> | string
    colorBrillo?: StringWithAggregatesFilter<"Programa"> | string
    colorTexto?: StringWithAggregatesFilter<"Programa"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Programa"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Programa"> | Date | string
  }

  export type AsignaturaWhereInput = {
    AND?: AsignaturaWhereInput | AsignaturaWhereInput[]
    OR?: AsignaturaWhereInput[]
    NOT?: AsignaturaWhereInput | AsignaturaWhereInput[]
    id?: StringFilter<"Asignatura"> | string
    nombre?: StringFilter<"Asignatura"> | string
    codigo?: StringFilter<"Asignatura"> | string
    programaId?: StringFilter<"Asignatura"> | string
    semestre?: IntNullableFilter<"Asignatura"> | number | null
    creditos?: IntNullableFilter<"Asignatura"> | number | null
    activa?: BoolFilter<"Asignatura"> | boolean
    creadoEn?: DateTimeFilter<"Asignatura"> | Date | string
    actualizadoEn?: DateTimeFilter<"Asignatura"> | Date | string
    asistencias?: AsistenciaListRelationFilter
    horarios?: HorarioListRelationFilter
    programa?: XOR<ProgramaScalarRelationFilter, ProgramaWhereInput>
  }

  export type AsignaturaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    programaId?: SortOrder
    semestre?: SortOrderInput | SortOrder
    creditos?: SortOrderInput | SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    asistencias?: AsistenciaOrderByRelationAggregateInput
    horarios?: HorarioOrderByRelationAggregateInput
    programa?: ProgramaOrderByWithRelationInput
  }

  export type AsignaturaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    AND?: AsignaturaWhereInput | AsignaturaWhereInput[]
    OR?: AsignaturaWhereInput[]
    NOT?: AsignaturaWhereInput | AsignaturaWhereInput[]
    nombre?: StringFilter<"Asignatura"> | string
    programaId?: StringFilter<"Asignatura"> | string
    semestre?: IntNullableFilter<"Asignatura"> | number | null
    creditos?: IntNullableFilter<"Asignatura"> | number | null
    activa?: BoolFilter<"Asignatura"> | boolean
    creadoEn?: DateTimeFilter<"Asignatura"> | Date | string
    actualizadoEn?: DateTimeFilter<"Asignatura"> | Date | string
    asistencias?: AsistenciaListRelationFilter
    horarios?: HorarioListRelationFilter
    programa?: XOR<ProgramaScalarRelationFilter, ProgramaWhereInput>
  }, "id" | "codigo">

  export type AsignaturaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    programaId?: SortOrder
    semestre?: SortOrderInput | SortOrder
    creditos?: SortOrderInput | SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: AsignaturaCountOrderByAggregateInput
    _avg?: AsignaturaAvgOrderByAggregateInput
    _max?: AsignaturaMaxOrderByAggregateInput
    _min?: AsignaturaMinOrderByAggregateInput
    _sum?: AsignaturaSumOrderByAggregateInput
  }

  export type AsignaturaScalarWhereWithAggregatesInput = {
    AND?: AsignaturaScalarWhereWithAggregatesInput | AsignaturaScalarWhereWithAggregatesInput[]
    OR?: AsignaturaScalarWhereWithAggregatesInput[]
    NOT?: AsignaturaScalarWhereWithAggregatesInput | AsignaturaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asignatura"> | string
    nombre?: StringWithAggregatesFilter<"Asignatura"> | string
    codigo?: StringWithAggregatesFilter<"Asignatura"> | string
    programaId?: StringWithAggregatesFilter<"Asignatura"> | string
    semestre?: IntNullableWithAggregatesFilter<"Asignatura"> | number | null
    creditos?: IntNullableWithAggregatesFilter<"Asignatura"> | number | null
    activa?: BoolWithAggregatesFilter<"Asignatura"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"Asignatura"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Asignatura"> | Date | string
  }

  export type AulaWhereInput = {
    AND?: AulaWhereInput | AulaWhereInput[]
    OR?: AulaWhereInput[]
    NOT?: AulaWhereInput | AulaWhereInput[]
    id?: StringFilter<"Aula"> | string
    nombre?: StringFilter<"Aula"> | string
    capacidad?: IntNullableFilter<"Aula"> | number | null
    edificio?: StringNullableFilter<"Aula"> | string | null
    piso?: StringNullableFilter<"Aula"> | string | null
    equipos?: JsonNullableFilter<"Aula">
    activa?: BoolFilter<"Aula"> | boolean
    creadoEn?: DateTimeFilter<"Aula"> | Date | string
    actualizadoEn?: DateTimeFilter<"Aula"> | Date | string
    asistencias?: AsistenciaListRelationFilter
    estados?: EstadoAulaListRelationFilter
    horarios?: HorarioListRelationFilter
  }

  export type AulaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    capacidad?: SortOrderInput | SortOrder
    edificio?: SortOrderInput | SortOrder
    piso?: SortOrderInput | SortOrder
    equipos?: SortOrderInput | SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    asistencias?: AsistenciaOrderByRelationAggregateInput
    estados?: EstadoAulaOrderByRelationAggregateInput
    horarios?: HorarioOrderByRelationAggregateInput
  }

  export type AulaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: AulaWhereInput | AulaWhereInput[]
    OR?: AulaWhereInput[]
    NOT?: AulaWhereInput | AulaWhereInput[]
    capacidad?: IntNullableFilter<"Aula"> | number | null
    edificio?: StringNullableFilter<"Aula"> | string | null
    piso?: StringNullableFilter<"Aula"> | string | null
    equipos?: JsonNullableFilter<"Aula">
    activa?: BoolFilter<"Aula"> | boolean
    creadoEn?: DateTimeFilter<"Aula"> | Date | string
    actualizadoEn?: DateTimeFilter<"Aula"> | Date | string
    asistencias?: AsistenciaListRelationFilter
    estados?: EstadoAulaListRelationFilter
    horarios?: HorarioListRelationFilter
  }, "id" | "nombre">

  export type AulaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    capacidad?: SortOrderInput | SortOrder
    edificio?: SortOrderInput | SortOrder
    piso?: SortOrderInput | SortOrder
    equipos?: SortOrderInput | SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: AulaCountOrderByAggregateInput
    _avg?: AulaAvgOrderByAggregateInput
    _max?: AulaMaxOrderByAggregateInput
    _min?: AulaMinOrderByAggregateInput
    _sum?: AulaSumOrderByAggregateInput
  }

  export type AulaScalarWhereWithAggregatesInput = {
    AND?: AulaScalarWhereWithAggregatesInput | AulaScalarWhereWithAggregatesInput[]
    OR?: AulaScalarWhereWithAggregatesInput[]
    NOT?: AulaScalarWhereWithAggregatesInput | AulaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Aula"> | string
    nombre?: StringWithAggregatesFilter<"Aula"> | string
    capacidad?: IntNullableWithAggregatesFilter<"Aula"> | number | null
    edificio?: StringNullableWithAggregatesFilter<"Aula"> | string | null
    piso?: StringNullableWithAggregatesFilter<"Aula"> | string | null
    equipos?: JsonNullableWithAggregatesFilter<"Aula">
    activa?: BoolWithAggregatesFilter<"Aula"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"Aula"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Aula"> | Date | string
  }

  export type ProfesorWhereInput = {
    AND?: ProfesorWhereInput | ProfesorWhereInput[]
    OR?: ProfesorWhereInput[]
    NOT?: ProfesorWhereInput | ProfesorWhereInput[]
    id?: StringFilter<"Profesor"> | string
    nombre?: StringFilter<"Profesor"> | string
    correo?: StringFilter<"Profesor"> | string
    telefono?: StringNullableFilter<"Profesor"> | string | null
    activo?: BoolFilter<"Profesor"> | boolean
    creadoEn?: DateTimeFilter<"Profesor"> | Date | string
    actualizadoEn?: DateTimeFilter<"Profesor"> | Date | string
    asistencias?: AsistenciaListRelationFilter
    horarios?: HorarioListRelationFilter
  }

  export type ProfesorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    asistencias?: AsistenciaOrderByRelationAggregateInput
    horarios?: HorarioOrderByRelationAggregateInput
  }

  export type ProfesorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    correo?: string
    AND?: ProfesorWhereInput | ProfesorWhereInput[]
    OR?: ProfesorWhereInput[]
    NOT?: ProfesorWhereInput | ProfesorWhereInput[]
    nombre?: StringFilter<"Profesor"> | string
    telefono?: StringNullableFilter<"Profesor"> | string | null
    activo?: BoolFilter<"Profesor"> | boolean
    creadoEn?: DateTimeFilter<"Profesor"> | Date | string
    actualizadoEn?: DateTimeFilter<"Profesor"> | Date | string
    asistencias?: AsistenciaListRelationFilter
    horarios?: HorarioListRelationFilter
  }, "id" | "correo">

  export type ProfesorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: ProfesorCountOrderByAggregateInput
    _max?: ProfesorMaxOrderByAggregateInput
    _min?: ProfesorMinOrderByAggregateInput
  }

  export type ProfesorScalarWhereWithAggregatesInput = {
    AND?: ProfesorScalarWhereWithAggregatesInput | ProfesorScalarWhereWithAggregatesInput[]
    OR?: ProfesorScalarWhereWithAggregatesInput[]
    NOT?: ProfesorScalarWhereWithAggregatesInput | ProfesorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profesor"> | string
    nombre?: StringWithAggregatesFilter<"Profesor"> | string
    correo?: StringWithAggregatesFilter<"Profesor"> | string
    telefono?: StringNullableWithAggregatesFilter<"Profesor"> | string | null
    activo?: BoolWithAggregatesFilter<"Profesor"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"Profesor"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Profesor"> | Date | string
  }

  export type HorarioWhereInput = {
    AND?: HorarioWhereInput | HorarioWhereInput[]
    OR?: HorarioWhereInput[]
    NOT?: HorarioWhereInput | HorarioWhereInput[]
    id?: StringFilter<"Horario"> | string
    diaSemana?: IntFilter<"Horario"> | number
    horaInicio?: StringFilter<"Horario"> | string
    horaFin?: StringFilter<"Horario"> | string
    semestre?: StringFilter<"Horario"> | string
    grupo?: StringNullableFilter<"Horario"> | string | null
    activo?: BoolFilter<"Horario"> | boolean
    asignaturaId?: StringFilter<"Horario"> | string
    aulaId?: StringFilter<"Horario"> | string
    profesorId?: StringNullableFilter<"Horario"> | string | null
    creadoEn?: DateTimeFilter<"Horario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Horario"> | Date | string
    asistencias?: AsistenciaListRelationFilter
    profesor?: XOR<ProfesorNullableScalarRelationFilter, ProfesorWhereInput> | null
    aula?: XOR<AulaScalarRelationFilter, AulaWhereInput>
    asignatura?: XOR<AsignaturaScalarRelationFilter, AsignaturaWhereInput>
  }

  export type HorarioOrderByWithRelationInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    semestre?: SortOrder
    grupo?: SortOrderInput | SortOrder
    activo?: SortOrder
    asignaturaId?: SortOrder
    aulaId?: SortOrder
    profesorId?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    asistencias?: AsistenciaOrderByRelationAggregateInput
    profesor?: ProfesorOrderByWithRelationInput
    aula?: AulaOrderByWithRelationInput
    asignatura?: AsignaturaOrderByWithRelationInput
  }

  export type HorarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    diaSemana_horaInicio_horaFin_aulaId_semestre?: HorarioDiaSemanaHoraInicioHoraFinAulaIdSemestreCompoundUniqueInput
    AND?: HorarioWhereInput | HorarioWhereInput[]
    OR?: HorarioWhereInput[]
    NOT?: HorarioWhereInput | HorarioWhereInput[]
    diaSemana?: IntFilter<"Horario"> | number
    horaInicio?: StringFilter<"Horario"> | string
    horaFin?: StringFilter<"Horario"> | string
    semestre?: StringFilter<"Horario"> | string
    grupo?: StringNullableFilter<"Horario"> | string | null
    activo?: BoolFilter<"Horario"> | boolean
    asignaturaId?: StringFilter<"Horario"> | string
    aulaId?: StringFilter<"Horario"> | string
    profesorId?: StringNullableFilter<"Horario"> | string | null
    creadoEn?: DateTimeFilter<"Horario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Horario"> | Date | string
    asistencias?: AsistenciaListRelationFilter
    profesor?: XOR<ProfesorNullableScalarRelationFilter, ProfesorWhereInput> | null
    aula?: XOR<AulaScalarRelationFilter, AulaWhereInput>
    asignatura?: XOR<AsignaturaScalarRelationFilter, AsignaturaWhereInput>
  }, "id" | "diaSemana_horaInicio_horaFin_aulaId_semestre">

  export type HorarioOrderByWithAggregationInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    semestre?: SortOrder
    grupo?: SortOrderInput | SortOrder
    activo?: SortOrder
    asignaturaId?: SortOrder
    aulaId?: SortOrder
    profesorId?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: HorarioCountOrderByAggregateInput
    _avg?: HorarioAvgOrderByAggregateInput
    _max?: HorarioMaxOrderByAggregateInput
    _min?: HorarioMinOrderByAggregateInput
    _sum?: HorarioSumOrderByAggregateInput
  }

  export type HorarioScalarWhereWithAggregatesInput = {
    AND?: HorarioScalarWhereWithAggregatesInput | HorarioScalarWhereWithAggregatesInput[]
    OR?: HorarioScalarWhereWithAggregatesInput[]
    NOT?: HorarioScalarWhereWithAggregatesInput | HorarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Horario"> | string
    diaSemana?: IntWithAggregatesFilter<"Horario"> | number
    horaInicio?: StringWithAggregatesFilter<"Horario"> | string
    horaFin?: StringWithAggregatesFilter<"Horario"> | string
    semestre?: StringWithAggregatesFilter<"Horario"> | string
    grupo?: StringNullableWithAggregatesFilter<"Horario"> | string | null
    activo?: BoolWithAggregatesFilter<"Horario"> | boolean
    asignaturaId?: StringWithAggregatesFilter<"Horario"> | string
    aulaId?: StringWithAggregatesFilter<"Horario"> | string
    profesorId?: StringNullableWithAggregatesFilter<"Horario"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"Horario"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Horario"> | Date | string
  }

  export type AsistenciaWhereInput = {
    AND?: AsistenciaWhereInput | AsistenciaWhereInput[]
    OR?: AsistenciaWhereInput[]
    NOT?: AsistenciaWhereInput | AsistenciaWhereInput[]
    id?: StringFilter<"Asistencia"> | string
    fecha?: DateTimeFilter<"Asistencia"> | Date | string
    horaInicio?: StringFilter<"Asistencia"> | string
    horaFin?: StringFilter<"Asistencia"> | string
    estado?: EnumEstadoAsistenciaFilter<"Asistencia"> | $Enums.EstadoAsistencia
    observaciones?: StringNullableFilter<"Asistencia"> | string | null
    verificadoPor?: StringNullableFilter<"Asistencia"> | string | null
    horarioId?: StringFilter<"Asistencia"> | string
    asignaturaId?: StringFilter<"Asistencia"> | string
    aulaId?: StringFilter<"Asistencia"> | string
    profesorId?: StringNullableFilter<"Asistencia"> | string | null
    creadoEn?: DateTimeFilter<"Asistencia"> | Date | string
    actualizadoEn?: DateTimeFilter<"Asistencia"> | Date | string
    profesor?: XOR<ProfesorNullableScalarRelationFilter, ProfesorWhereInput> | null
    aula?: XOR<AulaScalarRelationFilter, AulaWhereInput>
    horario?: XOR<HorarioScalarRelationFilter, HorarioWhereInput>
    asignatura?: XOR<AsignaturaScalarRelationFilter, AsignaturaWhereInput>
  }

  export type AsistenciaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    verificadoPor?: SortOrderInput | SortOrder
    horarioId?: SortOrder
    asignaturaId?: SortOrder
    aulaId?: SortOrder
    profesorId?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    profesor?: ProfesorOrderByWithRelationInput
    aula?: AulaOrderByWithRelationInput
    horario?: HorarioOrderByWithRelationInput
    asignatura?: AsignaturaOrderByWithRelationInput
  }

  export type AsistenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    horarioId_fecha?: AsistenciaHorarioIdFechaCompoundUniqueInput
    AND?: AsistenciaWhereInput | AsistenciaWhereInput[]
    OR?: AsistenciaWhereInput[]
    NOT?: AsistenciaWhereInput | AsistenciaWhereInput[]
    fecha?: DateTimeFilter<"Asistencia"> | Date | string
    horaInicio?: StringFilter<"Asistencia"> | string
    horaFin?: StringFilter<"Asistencia"> | string
    estado?: EnumEstadoAsistenciaFilter<"Asistencia"> | $Enums.EstadoAsistencia
    observaciones?: StringNullableFilter<"Asistencia"> | string | null
    verificadoPor?: StringNullableFilter<"Asistencia"> | string | null
    horarioId?: StringFilter<"Asistencia"> | string
    asignaturaId?: StringFilter<"Asistencia"> | string
    aulaId?: StringFilter<"Asistencia"> | string
    profesorId?: StringNullableFilter<"Asistencia"> | string | null
    creadoEn?: DateTimeFilter<"Asistencia"> | Date | string
    actualizadoEn?: DateTimeFilter<"Asistencia"> | Date | string
    profesor?: XOR<ProfesorNullableScalarRelationFilter, ProfesorWhereInput> | null
    aula?: XOR<AulaScalarRelationFilter, AulaWhereInput>
    horario?: XOR<HorarioScalarRelationFilter, HorarioWhereInput>
    asignatura?: XOR<AsignaturaScalarRelationFilter, AsignaturaWhereInput>
  }, "id" | "horarioId_fecha">

  export type AsistenciaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    verificadoPor?: SortOrderInput | SortOrder
    horarioId?: SortOrder
    asignaturaId?: SortOrder
    aulaId?: SortOrder
    profesorId?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: AsistenciaCountOrderByAggregateInput
    _max?: AsistenciaMaxOrderByAggregateInput
    _min?: AsistenciaMinOrderByAggregateInput
  }

  export type AsistenciaScalarWhereWithAggregatesInput = {
    AND?: AsistenciaScalarWhereWithAggregatesInput | AsistenciaScalarWhereWithAggregatesInput[]
    OR?: AsistenciaScalarWhereWithAggregatesInput[]
    NOT?: AsistenciaScalarWhereWithAggregatesInput | AsistenciaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asistencia"> | string
    fecha?: DateTimeWithAggregatesFilter<"Asistencia"> | Date | string
    horaInicio?: StringWithAggregatesFilter<"Asistencia"> | string
    horaFin?: StringWithAggregatesFilter<"Asistencia"> | string
    estado?: EnumEstadoAsistenciaWithAggregatesFilter<"Asistencia"> | $Enums.EstadoAsistencia
    observaciones?: StringNullableWithAggregatesFilter<"Asistencia"> | string | null
    verificadoPor?: StringNullableWithAggregatesFilter<"Asistencia"> | string | null
    horarioId?: StringWithAggregatesFilter<"Asistencia"> | string
    asignaturaId?: StringWithAggregatesFilter<"Asistencia"> | string
    aulaId?: StringWithAggregatesFilter<"Asistencia"> | string
    profesorId?: StringNullableWithAggregatesFilter<"Asistencia"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"Asistencia"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Asistencia"> | Date | string
  }

  export type EstadoAulaWhereInput = {
    AND?: EstadoAulaWhereInput | EstadoAulaWhereInput[]
    OR?: EstadoAulaWhereInput[]
    NOT?: EstadoAulaWhereInput | EstadoAulaWhereInput[]
    id?: StringFilter<"EstadoAula"> | string
    aulaId?: StringFilter<"EstadoAula"> | string
    fecha?: DateTimeFilter<"EstadoAula"> | Date | string
    franja?: StringFilter<"EstadoAula"> | string
    abierta?: BoolFilter<"EstadoAula"> | boolean
    horaApertura?: DateTimeNullableFilter<"EstadoAula"> | Date | string | null
    horaCierre?: DateTimeNullableFilter<"EstadoAula"> | Date | string | null
    abiertoPor?: StringNullableFilter<"EstadoAula"> | string | null
    cerradoPor?: StringNullableFilter<"EstadoAula"> | string | null
    notas?: StringNullableFilter<"EstadoAula"> | string | null
    creadoEn?: DateTimeFilter<"EstadoAula"> | Date | string
    actualizadoEn?: DateTimeFilter<"EstadoAula"> | Date | string
    aula?: XOR<AulaScalarRelationFilter, AulaWhereInput>
  }

  export type EstadoAulaOrderByWithRelationInput = {
    id?: SortOrder
    aulaId?: SortOrder
    fecha?: SortOrder
    franja?: SortOrder
    abierta?: SortOrder
    horaApertura?: SortOrderInput | SortOrder
    horaCierre?: SortOrderInput | SortOrder
    abiertoPor?: SortOrderInput | SortOrder
    cerradoPor?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    aula?: AulaOrderByWithRelationInput
  }

  export type EstadoAulaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    aulaId_fecha_franja?: EstadoAulaAulaIdFechaFranjaCompoundUniqueInput
    AND?: EstadoAulaWhereInput | EstadoAulaWhereInput[]
    OR?: EstadoAulaWhereInput[]
    NOT?: EstadoAulaWhereInput | EstadoAulaWhereInput[]
    aulaId?: StringFilter<"EstadoAula"> | string
    fecha?: DateTimeFilter<"EstadoAula"> | Date | string
    franja?: StringFilter<"EstadoAula"> | string
    abierta?: BoolFilter<"EstadoAula"> | boolean
    horaApertura?: DateTimeNullableFilter<"EstadoAula"> | Date | string | null
    horaCierre?: DateTimeNullableFilter<"EstadoAula"> | Date | string | null
    abiertoPor?: StringNullableFilter<"EstadoAula"> | string | null
    cerradoPor?: StringNullableFilter<"EstadoAula"> | string | null
    notas?: StringNullableFilter<"EstadoAula"> | string | null
    creadoEn?: DateTimeFilter<"EstadoAula"> | Date | string
    actualizadoEn?: DateTimeFilter<"EstadoAula"> | Date | string
    aula?: XOR<AulaScalarRelationFilter, AulaWhereInput>
  }, "id" | "aulaId_fecha_franja">

  export type EstadoAulaOrderByWithAggregationInput = {
    id?: SortOrder
    aulaId?: SortOrder
    fecha?: SortOrder
    franja?: SortOrder
    abierta?: SortOrder
    horaApertura?: SortOrderInput | SortOrder
    horaCierre?: SortOrderInput | SortOrder
    abiertoPor?: SortOrderInput | SortOrder
    cerradoPor?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: EstadoAulaCountOrderByAggregateInput
    _max?: EstadoAulaMaxOrderByAggregateInput
    _min?: EstadoAulaMinOrderByAggregateInput
  }

  export type EstadoAulaScalarWhereWithAggregatesInput = {
    AND?: EstadoAulaScalarWhereWithAggregatesInput | EstadoAulaScalarWhereWithAggregatesInput[]
    OR?: EstadoAulaScalarWhereWithAggregatesInput[]
    NOT?: EstadoAulaScalarWhereWithAggregatesInput | EstadoAulaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EstadoAula"> | string
    aulaId?: StringWithAggregatesFilter<"EstadoAula"> | string
    fecha?: DateTimeWithAggregatesFilter<"EstadoAula"> | Date | string
    franja?: StringWithAggregatesFilter<"EstadoAula"> | string
    abierta?: BoolWithAggregatesFilter<"EstadoAula"> | boolean
    horaApertura?: DateTimeNullableWithAggregatesFilter<"EstadoAula"> | Date | string | null
    horaCierre?: DateTimeNullableWithAggregatesFilter<"EstadoAula"> | Date | string | null
    abiertoPor?: StringNullableWithAggregatesFilter<"EstadoAula"> | string | null
    cerradoPor?: StringNullableWithAggregatesFilter<"EstadoAula"> | string | null
    notas?: StringNullableWithAggregatesFilter<"EstadoAula"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"EstadoAula"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"EstadoAula"> | Date | string
  }

  export type RegistroSistemaWhereInput = {
    AND?: RegistroSistemaWhereInput | RegistroSistemaWhereInput[]
    OR?: RegistroSistemaWhereInput[]
    NOT?: RegistroSistemaWhereInput | RegistroSistemaWhereInput[]
    id?: StringFilter<"RegistroSistema"> | string
    accion?: StringFilter<"RegistroSistema"> | string
    tipoEntidad?: StringFilter<"RegistroSistema"> | string
    entidadId?: StringFilter<"RegistroSistema"> | string
    usuarioId?: StringNullableFilter<"RegistroSistema"> | string | null
    detalles?: JsonNullableFilter<"RegistroSistema">
    fechaHora?: DateTimeFilter<"RegistroSistema"> | Date | string
  }

  export type RegistroSistemaOrderByWithRelationInput = {
    id?: SortOrder
    accion?: SortOrder
    tipoEntidad?: SortOrder
    entidadId?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    detalles?: SortOrderInput | SortOrder
    fechaHora?: SortOrder
  }

  export type RegistroSistemaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistroSistemaWhereInput | RegistroSistemaWhereInput[]
    OR?: RegistroSistemaWhereInput[]
    NOT?: RegistroSistemaWhereInput | RegistroSistemaWhereInput[]
    accion?: StringFilter<"RegistroSistema"> | string
    tipoEntidad?: StringFilter<"RegistroSistema"> | string
    entidadId?: StringFilter<"RegistroSistema"> | string
    usuarioId?: StringNullableFilter<"RegistroSistema"> | string | null
    detalles?: JsonNullableFilter<"RegistroSistema">
    fechaHora?: DateTimeFilter<"RegistroSistema"> | Date | string
  }, "id">

  export type RegistroSistemaOrderByWithAggregationInput = {
    id?: SortOrder
    accion?: SortOrder
    tipoEntidad?: SortOrder
    entidadId?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    detalles?: SortOrderInput | SortOrder
    fechaHora?: SortOrder
    _count?: RegistroSistemaCountOrderByAggregateInput
    _max?: RegistroSistemaMaxOrderByAggregateInput
    _min?: RegistroSistemaMinOrderByAggregateInput
  }

  export type RegistroSistemaScalarWhereWithAggregatesInput = {
    AND?: RegistroSistemaScalarWhereWithAggregatesInput | RegistroSistemaScalarWhereWithAggregatesInput[]
    OR?: RegistroSistemaScalarWhereWithAggregatesInput[]
    NOT?: RegistroSistemaScalarWhereWithAggregatesInput | RegistroSistemaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistroSistema"> | string
    accion?: StringWithAggregatesFilter<"RegistroSistema"> | string
    tipoEntidad?: StringWithAggregatesFilter<"RegistroSistema"> | string
    entidadId?: StringWithAggregatesFilter<"RegistroSistema"> | string
    usuarioId?: StringNullableWithAggregatesFilter<"RegistroSistema"> | string | null
    detalles?: JsonNullableWithAggregatesFilter<"RegistroSistema">
    fechaHora?: DateTimeWithAggregatesFilter<"RegistroSistema"> | Date | string
  }

  export type ProgramaCreateInput = {
    id?: string
    nombre: string
    codigo: string
    color: string
    colorBrillo: string
    colorTexto: string
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asignaturas?: AsignaturaCreateNestedManyWithoutProgramaInput
  }

  export type ProgramaUncheckedCreateInput = {
    id?: string
    nombre: string
    codigo: string
    color: string
    colorBrillo: string
    colorTexto: string
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asignaturas?: AsignaturaUncheckedCreateNestedManyWithoutProgramaInput
  }

  export type ProgramaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    colorBrillo?: StringFieldUpdateOperationsInput | string
    colorTexto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaturas?: AsignaturaUpdateManyWithoutProgramaNestedInput
  }

  export type ProgramaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    colorBrillo?: StringFieldUpdateOperationsInput | string
    colorTexto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaturas?: AsignaturaUncheckedUpdateManyWithoutProgramaNestedInput
  }

  export type ProgramaCreateManyInput = {
    id?: string
    nombre: string
    codigo: string
    color: string
    colorBrillo: string
    colorTexto: string
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type ProgramaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    colorBrillo?: StringFieldUpdateOperationsInput | string
    colorTexto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    colorBrillo?: StringFieldUpdateOperationsInput | string
    colorTexto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignaturaCreateInput = {
    id?: string
    nombre: string
    codigo: string
    semestre?: number | null
    creditos?: number | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutAsignaturaInput
    horarios?: HorarioCreateNestedManyWithoutAsignaturaInput
    programa: ProgramaCreateNestedOneWithoutAsignaturasInput
  }

  export type AsignaturaUncheckedCreateInput = {
    id?: string
    nombre: string
    codigo: string
    programaId: string
    semestre?: number | null
    creditos?: number | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutAsignaturaInput
    horarios?: HorarioUncheckedCreateNestedManyWithoutAsignaturaInput
  }

  export type AsignaturaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    semestre?: NullableIntFieldUpdateOperationsInput | number | null
    creditos?: NullableIntFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutAsignaturaNestedInput
    horarios?: HorarioUpdateManyWithoutAsignaturaNestedInput
    programa?: ProgramaUpdateOneRequiredWithoutAsignaturasNestedInput
  }

  export type AsignaturaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    programaId?: StringFieldUpdateOperationsInput | string
    semestre?: NullableIntFieldUpdateOperationsInput | number | null
    creditos?: NullableIntFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutAsignaturaNestedInput
    horarios?: HorarioUncheckedUpdateManyWithoutAsignaturaNestedInput
  }

  export type AsignaturaCreateManyInput = {
    id?: string
    nombre: string
    codigo: string
    programaId: string
    semestre?: number | null
    creditos?: number | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type AsignaturaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    semestre?: NullableIntFieldUpdateOperationsInput | number | null
    creditos?: NullableIntFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignaturaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    programaId?: StringFieldUpdateOperationsInput | string
    semestre?: NullableIntFieldUpdateOperationsInput | number | null
    creditos?: NullableIntFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AulaCreateInput = {
    id?: string
    nombre: string
    capacidad?: number | null
    edificio?: string | null
    piso?: string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutAulaInput
    estados?: EstadoAulaCreateNestedManyWithoutAulaInput
    horarios?: HorarioCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateInput = {
    id?: string
    nombre: string
    capacidad?: number | null
    edificio?: string | null
    piso?: string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutAulaInput
    estados?: EstadoAulaUncheckedCreateNestedManyWithoutAulaInput
    horarios?: HorarioUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    edificio?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutAulaNestedInput
    estados?: EstadoAulaUpdateManyWithoutAulaNestedInput
    horarios?: HorarioUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    edificio?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutAulaNestedInput
    estados?: EstadoAulaUncheckedUpdateManyWithoutAulaNestedInput
    horarios?: HorarioUncheckedUpdateManyWithoutAulaNestedInput
  }

  export type AulaCreateManyInput = {
    id?: string
    nombre: string
    capacidad?: number | null
    edificio?: string | null
    piso?: string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type AulaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    edificio?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AulaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    edificio?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesorCreateInput = {
    id?: string
    nombre: string
    correo: string
    telefono?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutProfesorInput
    horarios?: HorarioCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorUncheckedCreateInput = {
    id?: string
    nombre: string
    correo: string
    telefono?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutProfesorInput
    horarios?: HorarioUncheckedCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutProfesorNestedInput
    horarios?: HorarioUpdateManyWithoutProfesorNestedInput
  }

  export type ProfesorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutProfesorNestedInput
    horarios?: HorarioUncheckedUpdateManyWithoutProfesorNestedInput
  }

  export type ProfesorCreateManyInput = {
    id?: string
    nombre: string
    correo: string
    telefono?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type ProfesorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioCreateInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutHorarioInput
    profesor?: ProfesorCreateNestedOneWithoutHorariosInput
    aula: AulaCreateNestedOneWithoutHorariosInput
    asignatura: AsignaturaCreateNestedOneWithoutHorariosInput
  }

  export type HorarioUncheckedCreateInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    asignaturaId: string
    aulaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutHorarioInput
  }

  export type HorarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutHorarioNestedInput
    profesor?: ProfesorUpdateOneWithoutHorariosNestedInput
    aula?: AulaUpdateOneRequiredWithoutHorariosNestedInput
    asignatura?: AsignaturaUpdateOneRequiredWithoutHorariosNestedInput
  }

  export type HorarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    asignaturaId?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutHorarioNestedInput
  }

  export type HorarioCreateManyInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    asignaturaId: string
    aulaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type HorarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    asignaturaId?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
    profesor?: ProfesorCreateNestedOneWithoutAsistenciasInput
    aula: AulaCreateNestedOneWithoutAsistenciasInput
    horario: HorarioCreateNestedOneWithoutAsistenciasInput
    asignatura: AsignaturaCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciaUncheckedCreateInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    horarioId: string
    asignaturaId: string
    aulaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type AsistenciaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesor?: ProfesorUpdateOneWithoutAsistenciasNestedInput
    aula?: AulaUpdateOneRequiredWithoutAsistenciasNestedInput
    horario?: HorarioUpdateOneRequiredWithoutAsistenciasNestedInput
    asignatura?: AsignaturaUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type AsistenciaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    horarioId?: StringFieldUpdateOperationsInput | string
    asignaturaId?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateManyInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    horarioId: string
    asignaturaId: string
    aulaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type AsistenciaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    horarioId?: StringFieldUpdateOperationsInput | string
    asignaturaId?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstadoAulaCreateInput = {
    id?: string
    fecha: Date | string
    franja: string
    abierta?: boolean
    horaApertura?: Date | string | null
    horaCierre?: Date | string | null
    abiertoPor?: string | null
    cerradoPor?: string | null
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
    aula: AulaCreateNestedOneWithoutEstadosInput
  }

  export type EstadoAulaUncheckedCreateInput = {
    id?: string
    aulaId: string
    fecha: Date | string
    franja: string
    abierta?: boolean
    horaApertura?: Date | string | null
    horaCierre?: Date | string | null
    abiertoPor?: string | null
    cerradoPor?: string | null
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type EstadoAulaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franja?: StringFieldUpdateOperationsInput | string
    abierta?: BoolFieldUpdateOperationsInput | boolean
    horaApertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abiertoPor?: NullableStringFieldUpdateOperationsInput | string | null
    cerradoPor?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    aula?: AulaUpdateOneRequiredWithoutEstadosNestedInput
  }

  export type EstadoAulaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franja?: StringFieldUpdateOperationsInput | string
    abierta?: BoolFieldUpdateOperationsInput | boolean
    horaApertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abiertoPor?: NullableStringFieldUpdateOperationsInput | string | null
    cerradoPor?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstadoAulaCreateManyInput = {
    id?: string
    aulaId: string
    fecha: Date | string
    franja: string
    abierta?: boolean
    horaApertura?: Date | string | null
    horaCierre?: Date | string | null
    abiertoPor?: string | null
    cerradoPor?: string | null
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type EstadoAulaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franja?: StringFieldUpdateOperationsInput | string
    abierta?: BoolFieldUpdateOperationsInput | boolean
    horaApertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abiertoPor?: NullableStringFieldUpdateOperationsInput | string | null
    cerradoPor?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstadoAulaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franja?: StringFieldUpdateOperationsInput | string
    abierta?: BoolFieldUpdateOperationsInput | boolean
    horaApertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abiertoPor?: NullableStringFieldUpdateOperationsInput | string | null
    cerradoPor?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroSistemaCreateInput = {
    id?: string
    accion: string
    tipoEntidad: string
    entidadId: string
    usuarioId?: string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    fechaHora?: Date | string
  }

  export type RegistroSistemaUncheckedCreateInput = {
    id?: string
    accion: string
    tipoEntidad: string
    entidadId: string
    usuarioId?: string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    fechaHora?: Date | string
  }

  export type RegistroSistemaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    tipoEntidad?: StringFieldUpdateOperationsInput | string
    entidadId?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroSistemaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    tipoEntidad?: StringFieldUpdateOperationsInput | string
    entidadId?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroSistemaCreateManyInput = {
    id?: string
    accion: string
    tipoEntidad: string
    entidadId: string
    usuarioId?: string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    fechaHora?: Date | string
  }

  export type RegistroSistemaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    tipoEntidad?: StringFieldUpdateOperationsInput | string
    entidadId?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroSistemaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    tipoEntidad?: StringFieldUpdateOperationsInput | string
    entidadId?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AsignaturaListRelationFilter = {
    every?: AsignaturaWhereInput
    some?: AsignaturaWhereInput
    none?: AsignaturaWhereInput
  }

  export type AsignaturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    color?: SortOrder
    colorBrillo?: SortOrder
    colorTexto?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ProgramaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    color?: SortOrder
    colorBrillo?: SortOrder
    colorTexto?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ProgramaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    color?: SortOrder
    colorBrillo?: SortOrder
    colorTexto?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AsistenciaListRelationFilter = {
    every?: AsistenciaWhereInput
    some?: AsistenciaWhereInput
    none?: AsistenciaWhereInput
  }

  export type HorarioListRelationFilter = {
    every?: HorarioWhereInput
    some?: HorarioWhereInput
    none?: HorarioWhereInput
  }

  export type ProgramaScalarRelationFilter = {
    is?: ProgramaWhereInput
    isNot?: ProgramaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AsistenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HorarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AsignaturaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    programaId?: SortOrder
    semestre?: SortOrder
    creditos?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type AsignaturaAvgOrderByAggregateInput = {
    semestre?: SortOrder
    creditos?: SortOrder
  }

  export type AsignaturaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    programaId?: SortOrder
    semestre?: SortOrder
    creditos?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type AsignaturaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    programaId?: SortOrder
    semestre?: SortOrder
    creditos?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type AsignaturaSumOrderByAggregateInput = {
    semestre?: SortOrder
    creditos?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EstadoAulaListRelationFilter = {
    every?: EstadoAulaWhereInput
    some?: EstadoAulaWhereInput
    none?: EstadoAulaWhereInput
  }

  export type EstadoAulaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AulaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    capacidad?: SortOrder
    edificio?: SortOrder
    piso?: SortOrder
    equipos?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type AulaAvgOrderByAggregateInput = {
    capacidad?: SortOrder
  }

  export type AulaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    capacidad?: SortOrder
    edificio?: SortOrder
    piso?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type AulaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    capacidad?: SortOrder
    edificio?: SortOrder
    piso?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type AulaSumOrderByAggregateInput = {
    capacidad?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ProfesorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ProfesorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ProfesorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
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

  export type ProfesorNullableScalarRelationFilter = {
    is?: ProfesorWhereInput | null
    isNot?: ProfesorWhereInput | null
  }

  export type AulaScalarRelationFilter = {
    is?: AulaWhereInput
    isNot?: AulaWhereInput
  }

  export type AsignaturaScalarRelationFilter = {
    is?: AsignaturaWhereInput
    isNot?: AsignaturaWhereInput
  }

  export type HorarioDiaSemanaHoraInicioHoraFinAulaIdSemestreCompoundUniqueInput = {
    diaSemana: number
    horaInicio: string
    horaFin: string
    aulaId: string
    semestre: string
  }

  export type HorarioCountOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    semestre?: SortOrder
    grupo?: SortOrder
    activo?: SortOrder
    asignaturaId?: SortOrder
    aulaId?: SortOrder
    profesorId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type HorarioAvgOrderByAggregateInput = {
    diaSemana?: SortOrder
  }

  export type HorarioMaxOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    semestre?: SortOrder
    grupo?: SortOrder
    activo?: SortOrder
    asignaturaId?: SortOrder
    aulaId?: SortOrder
    profesorId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type HorarioMinOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    semestre?: SortOrder
    grupo?: SortOrder
    activo?: SortOrder
    asignaturaId?: SortOrder
    aulaId?: SortOrder
    profesorId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type HorarioSumOrderByAggregateInput = {
    diaSemana?: SortOrder
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

  export type EnumEstadoAsistenciaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAsistencia | EnumEstadoAsistenciaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAsistencia[] | ListEnumEstadoAsistenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAsistencia[] | ListEnumEstadoAsistenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAsistenciaFilter<$PrismaModel> | $Enums.EstadoAsistencia
  }

  export type HorarioScalarRelationFilter = {
    is?: HorarioWhereInput
    isNot?: HorarioWhereInput
  }

  export type AsistenciaHorarioIdFechaCompoundUniqueInput = {
    horarioId: string
    fecha: Date | string
  }

  export type AsistenciaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    verificadoPor?: SortOrder
    horarioId?: SortOrder
    asignaturaId?: SortOrder
    aulaId?: SortOrder
    profesorId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type AsistenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    verificadoPor?: SortOrder
    horarioId?: SortOrder
    asignaturaId?: SortOrder
    aulaId?: SortOrder
    profesorId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type AsistenciaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    verificadoPor?: SortOrder
    horarioId?: SortOrder
    asignaturaId?: SortOrder
    aulaId?: SortOrder
    profesorId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type EnumEstadoAsistenciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAsistencia | EnumEstadoAsistenciaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAsistencia[] | ListEnumEstadoAsistenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAsistencia[] | ListEnumEstadoAsistenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAsistenciaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAsistencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAsistenciaFilter<$PrismaModel>
    _max?: NestedEnumEstadoAsistenciaFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EstadoAulaAulaIdFechaFranjaCompoundUniqueInput = {
    aulaId: string
    fecha: Date | string
    franja: string
  }

  export type EstadoAulaCountOrderByAggregateInput = {
    id?: SortOrder
    aulaId?: SortOrder
    fecha?: SortOrder
    franja?: SortOrder
    abierta?: SortOrder
    horaApertura?: SortOrder
    horaCierre?: SortOrder
    abiertoPor?: SortOrder
    cerradoPor?: SortOrder
    notas?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type EstadoAulaMaxOrderByAggregateInput = {
    id?: SortOrder
    aulaId?: SortOrder
    fecha?: SortOrder
    franja?: SortOrder
    abierta?: SortOrder
    horaApertura?: SortOrder
    horaCierre?: SortOrder
    abiertoPor?: SortOrder
    cerradoPor?: SortOrder
    notas?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type EstadoAulaMinOrderByAggregateInput = {
    id?: SortOrder
    aulaId?: SortOrder
    fecha?: SortOrder
    franja?: SortOrder
    abierta?: SortOrder
    horaApertura?: SortOrder
    horaCierre?: SortOrder
    abiertoPor?: SortOrder
    cerradoPor?: SortOrder
    notas?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RegistroSistemaCountOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    tipoEntidad?: SortOrder
    entidadId?: SortOrder
    usuarioId?: SortOrder
    detalles?: SortOrder
    fechaHora?: SortOrder
  }

  export type RegistroSistemaMaxOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    tipoEntidad?: SortOrder
    entidadId?: SortOrder
    usuarioId?: SortOrder
    fechaHora?: SortOrder
  }

  export type RegistroSistemaMinOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    tipoEntidad?: SortOrder
    entidadId?: SortOrder
    usuarioId?: SortOrder
    fechaHora?: SortOrder
  }

  export type AsignaturaCreateNestedManyWithoutProgramaInput = {
    create?: XOR<AsignaturaCreateWithoutProgramaInput, AsignaturaUncheckedCreateWithoutProgramaInput> | AsignaturaCreateWithoutProgramaInput[] | AsignaturaUncheckedCreateWithoutProgramaInput[]
    connectOrCreate?: AsignaturaCreateOrConnectWithoutProgramaInput | AsignaturaCreateOrConnectWithoutProgramaInput[]
    createMany?: AsignaturaCreateManyProgramaInputEnvelope
    connect?: AsignaturaWhereUniqueInput | AsignaturaWhereUniqueInput[]
  }

  export type AsignaturaUncheckedCreateNestedManyWithoutProgramaInput = {
    create?: XOR<AsignaturaCreateWithoutProgramaInput, AsignaturaUncheckedCreateWithoutProgramaInput> | AsignaturaCreateWithoutProgramaInput[] | AsignaturaUncheckedCreateWithoutProgramaInput[]
    connectOrCreate?: AsignaturaCreateOrConnectWithoutProgramaInput | AsignaturaCreateOrConnectWithoutProgramaInput[]
    createMany?: AsignaturaCreateManyProgramaInputEnvelope
    connect?: AsignaturaWhereUniqueInput | AsignaturaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AsignaturaUpdateManyWithoutProgramaNestedInput = {
    create?: XOR<AsignaturaCreateWithoutProgramaInput, AsignaturaUncheckedCreateWithoutProgramaInput> | AsignaturaCreateWithoutProgramaInput[] | AsignaturaUncheckedCreateWithoutProgramaInput[]
    connectOrCreate?: AsignaturaCreateOrConnectWithoutProgramaInput | AsignaturaCreateOrConnectWithoutProgramaInput[]
    upsert?: AsignaturaUpsertWithWhereUniqueWithoutProgramaInput | AsignaturaUpsertWithWhereUniqueWithoutProgramaInput[]
    createMany?: AsignaturaCreateManyProgramaInputEnvelope
    set?: AsignaturaWhereUniqueInput | AsignaturaWhereUniqueInput[]
    disconnect?: AsignaturaWhereUniqueInput | AsignaturaWhereUniqueInput[]
    delete?: AsignaturaWhereUniqueInput | AsignaturaWhereUniqueInput[]
    connect?: AsignaturaWhereUniqueInput | AsignaturaWhereUniqueInput[]
    update?: AsignaturaUpdateWithWhereUniqueWithoutProgramaInput | AsignaturaUpdateWithWhereUniqueWithoutProgramaInput[]
    updateMany?: AsignaturaUpdateManyWithWhereWithoutProgramaInput | AsignaturaUpdateManyWithWhereWithoutProgramaInput[]
    deleteMany?: AsignaturaScalarWhereInput | AsignaturaScalarWhereInput[]
  }

  export type AsignaturaUncheckedUpdateManyWithoutProgramaNestedInput = {
    create?: XOR<AsignaturaCreateWithoutProgramaInput, AsignaturaUncheckedCreateWithoutProgramaInput> | AsignaturaCreateWithoutProgramaInput[] | AsignaturaUncheckedCreateWithoutProgramaInput[]
    connectOrCreate?: AsignaturaCreateOrConnectWithoutProgramaInput | AsignaturaCreateOrConnectWithoutProgramaInput[]
    upsert?: AsignaturaUpsertWithWhereUniqueWithoutProgramaInput | AsignaturaUpsertWithWhereUniqueWithoutProgramaInput[]
    createMany?: AsignaturaCreateManyProgramaInputEnvelope
    set?: AsignaturaWhereUniqueInput | AsignaturaWhereUniqueInput[]
    disconnect?: AsignaturaWhereUniqueInput | AsignaturaWhereUniqueInput[]
    delete?: AsignaturaWhereUniqueInput | AsignaturaWhereUniqueInput[]
    connect?: AsignaturaWhereUniqueInput | AsignaturaWhereUniqueInput[]
    update?: AsignaturaUpdateWithWhereUniqueWithoutProgramaInput | AsignaturaUpdateWithWhereUniqueWithoutProgramaInput[]
    updateMany?: AsignaturaUpdateManyWithWhereWithoutProgramaInput | AsignaturaUpdateManyWithWhereWithoutProgramaInput[]
    deleteMany?: AsignaturaScalarWhereInput | AsignaturaScalarWhereInput[]
  }

  export type AsistenciaCreateNestedManyWithoutAsignaturaInput = {
    create?: XOR<AsistenciaCreateWithoutAsignaturaInput, AsistenciaUncheckedCreateWithoutAsignaturaInput> | AsistenciaCreateWithoutAsignaturaInput[] | AsistenciaUncheckedCreateWithoutAsignaturaInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutAsignaturaInput | AsistenciaCreateOrConnectWithoutAsignaturaInput[]
    createMany?: AsistenciaCreateManyAsignaturaInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type HorarioCreateNestedManyWithoutAsignaturaInput = {
    create?: XOR<HorarioCreateWithoutAsignaturaInput, HorarioUncheckedCreateWithoutAsignaturaInput> | HorarioCreateWithoutAsignaturaInput[] | HorarioUncheckedCreateWithoutAsignaturaInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutAsignaturaInput | HorarioCreateOrConnectWithoutAsignaturaInput[]
    createMany?: HorarioCreateManyAsignaturaInputEnvelope
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
  }

  export type ProgramaCreateNestedOneWithoutAsignaturasInput = {
    create?: XOR<ProgramaCreateWithoutAsignaturasInput, ProgramaUncheckedCreateWithoutAsignaturasInput>
    connectOrCreate?: ProgramaCreateOrConnectWithoutAsignaturasInput
    connect?: ProgramaWhereUniqueInput
  }

  export type AsistenciaUncheckedCreateNestedManyWithoutAsignaturaInput = {
    create?: XOR<AsistenciaCreateWithoutAsignaturaInput, AsistenciaUncheckedCreateWithoutAsignaturaInput> | AsistenciaCreateWithoutAsignaturaInput[] | AsistenciaUncheckedCreateWithoutAsignaturaInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutAsignaturaInput | AsistenciaCreateOrConnectWithoutAsignaturaInput[]
    createMany?: AsistenciaCreateManyAsignaturaInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type HorarioUncheckedCreateNestedManyWithoutAsignaturaInput = {
    create?: XOR<HorarioCreateWithoutAsignaturaInput, HorarioUncheckedCreateWithoutAsignaturaInput> | HorarioCreateWithoutAsignaturaInput[] | HorarioUncheckedCreateWithoutAsignaturaInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutAsignaturaInput | HorarioCreateOrConnectWithoutAsignaturaInput[]
    createMany?: HorarioCreateManyAsignaturaInputEnvelope
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AsistenciaUpdateManyWithoutAsignaturaNestedInput = {
    create?: XOR<AsistenciaCreateWithoutAsignaturaInput, AsistenciaUncheckedCreateWithoutAsignaturaInput> | AsistenciaCreateWithoutAsignaturaInput[] | AsistenciaUncheckedCreateWithoutAsignaturaInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutAsignaturaInput | AsistenciaCreateOrConnectWithoutAsignaturaInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutAsignaturaInput | AsistenciaUpsertWithWhereUniqueWithoutAsignaturaInput[]
    createMany?: AsistenciaCreateManyAsignaturaInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutAsignaturaInput | AsistenciaUpdateWithWhereUniqueWithoutAsignaturaInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutAsignaturaInput | AsistenciaUpdateManyWithWhereWithoutAsignaturaInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type HorarioUpdateManyWithoutAsignaturaNestedInput = {
    create?: XOR<HorarioCreateWithoutAsignaturaInput, HorarioUncheckedCreateWithoutAsignaturaInput> | HorarioCreateWithoutAsignaturaInput[] | HorarioUncheckedCreateWithoutAsignaturaInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutAsignaturaInput | HorarioCreateOrConnectWithoutAsignaturaInput[]
    upsert?: HorarioUpsertWithWhereUniqueWithoutAsignaturaInput | HorarioUpsertWithWhereUniqueWithoutAsignaturaInput[]
    createMany?: HorarioCreateManyAsignaturaInputEnvelope
    set?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    disconnect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    delete?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    update?: HorarioUpdateWithWhereUniqueWithoutAsignaturaInput | HorarioUpdateWithWhereUniqueWithoutAsignaturaInput[]
    updateMany?: HorarioUpdateManyWithWhereWithoutAsignaturaInput | HorarioUpdateManyWithWhereWithoutAsignaturaInput[]
    deleteMany?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
  }

  export type ProgramaUpdateOneRequiredWithoutAsignaturasNestedInput = {
    create?: XOR<ProgramaCreateWithoutAsignaturasInput, ProgramaUncheckedCreateWithoutAsignaturasInput>
    connectOrCreate?: ProgramaCreateOrConnectWithoutAsignaturasInput
    upsert?: ProgramaUpsertWithoutAsignaturasInput
    connect?: ProgramaWhereUniqueInput
    update?: XOR<XOR<ProgramaUpdateToOneWithWhereWithoutAsignaturasInput, ProgramaUpdateWithoutAsignaturasInput>, ProgramaUncheckedUpdateWithoutAsignaturasInput>
  }

  export type AsistenciaUncheckedUpdateManyWithoutAsignaturaNestedInput = {
    create?: XOR<AsistenciaCreateWithoutAsignaturaInput, AsistenciaUncheckedCreateWithoutAsignaturaInput> | AsistenciaCreateWithoutAsignaturaInput[] | AsistenciaUncheckedCreateWithoutAsignaturaInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutAsignaturaInput | AsistenciaCreateOrConnectWithoutAsignaturaInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutAsignaturaInput | AsistenciaUpsertWithWhereUniqueWithoutAsignaturaInput[]
    createMany?: AsistenciaCreateManyAsignaturaInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutAsignaturaInput | AsistenciaUpdateWithWhereUniqueWithoutAsignaturaInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutAsignaturaInput | AsistenciaUpdateManyWithWhereWithoutAsignaturaInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type HorarioUncheckedUpdateManyWithoutAsignaturaNestedInput = {
    create?: XOR<HorarioCreateWithoutAsignaturaInput, HorarioUncheckedCreateWithoutAsignaturaInput> | HorarioCreateWithoutAsignaturaInput[] | HorarioUncheckedCreateWithoutAsignaturaInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutAsignaturaInput | HorarioCreateOrConnectWithoutAsignaturaInput[]
    upsert?: HorarioUpsertWithWhereUniqueWithoutAsignaturaInput | HorarioUpsertWithWhereUniqueWithoutAsignaturaInput[]
    createMany?: HorarioCreateManyAsignaturaInputEnvelope
    set?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    disconnect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    delete?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    update?: HorarioUpdateWithWhereUniqueWithoutAsignaturaInput | HorarioUpdateWithWhereUniqueWithoutAsignaturaInput[]
    updateMany?: HorarioUpdateManyWithWhereWithoutAsignaturaInput | HorarioUpdateManyWithWhereWithoutAsignaturaInput[]
    deleteMany?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
  }

  export type AsistenciaCreateNestedManyWithoutAulaInput = {
    create?: XOR<AsistenciaCreateWithoutAulaInput, AsistenciaUncheckedCreateWithoutAulaInput> | AsistenciaCreateWithoutAulaInput[] | AsistenciaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutAulaInput | AsistenciaCreateOrConnectWithoutAulaInput[]
    createMany?: AsistenciaCreateManyAulaInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type EstadoAulaCreateNestedManyWithoutAulaInput = {
    create?: XOR<EstadoAulaCreateWithoutAulaInput, EstadoAulaUncheckedCreateWithoutAulaInput> | EstadoAulaCreateWithoutAulaInput[] | EstadoAulaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: EstadoAulaCreateOrConnectWithoutAulaInput | EstadoAulaCreateOrConnectWithoutAulaInput[]
    createMany?: EstadoAulaCreateManyAulaInputEnvelope
    connect?: EstadoAulaWhereUniqueInput | EstadoAulaWhereUniqueInput[]
  }

  export type HorarioCreateNestedManyWithoutAulaInput = {
    create?: XOR<HorarioCreateWithoutAulaInput, HorarioUncheckedCreateWithoutAulaInput> | HorarioCreateWithoutAulaInput[] | HorarioUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutAulaInput | HorarioCreateOrConnectWithoutAulaInput[]
    createMany?: HorarioCreateManyAulaInputEnvelope
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
  }

  export type AsistenciaUncheckedCreateNestedManyWithoutAulaInput = {
    create?: XOR<AsistenciaCreateWithoutAulaInput, AsistenciaUncheckedCreateWithoutAulaInput> | AsistenciaCreateWithoutAulaInput[] | AsistenciaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutAulaInput | AsistenciaCreateOrConnectWithoutAulaInput[]
    createMany?: AsistenciaCreateManyAulaInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type EstadoAulaUncheckedCreateNestedManyWithoutAulaInput = {
    create?: XOR<EstadoAulaCreateWithoutAulaInput, EstadoAulaUncheckedCreateWithoutAulaInput> | EstadoAulaCreateWithoutAulaInput[] | EstadoAulaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: EstadoAulaCreateOrConnectWithoutAulaInput | EstadoAulaCreateOrConnectWithoutAulaInput[]
    createMany?: EstadoAulaCreateManyAulaInputEnvelope
    connect?: EstadoAulaWhereUniqueInput | EstadoAulaWhereUniqueInput[]
  }

  export type HorarioUncheckedCreateNestedManyWithoutAulaInput = {
    create?: XOR<HorarioCreateWithoutAulaInput, HorarioUncheckedCreateWithoutAulaInput> | HorarioCreateWithoutAulaInput[] | HorarioUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutAulaInput | HorarioCreateOrConnectWithoutAulaInput[]
    createMany?: HorarioCreateManyAulaInputEnvelope
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AsistenciaUpdateManyWithoutAulaNestedInput = {
    create?: XOR<AsistenciaCreateWithoutAulaInput, AsistenciaUncheckedCreateWithoutAulaInput> | AsistenciaCreateWithoutAulaInput[] | AsistenciaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutAulaInput | AsistenciaCreateOrConnectWithoutAulaInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutAulaInput | AsistenciaUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: AsistenciaCreateManyAulaInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutAulaInput | AsistenciaUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutAulaInput | AsistenciaUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type EstadoAulaUpdateManyWithoutAulaNestedInput = {
    create?: XOR<EstadoAulaCreateWithoutAulaInput, EstadoAulaUncheckedCreateWithoutAulaInput> | EstadoAulaCreateWithoutAulaInput[] | EstadoAulaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: EstadoAulaCreateOrConnectWithoutAulaInput | EstadoAulaCreateOrConnectWithoutAulaInput[]
    upsert?: EstadoAulaUpsertWithWhereUniqueWithoutAulaInput | EstadoAulaUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: EstadoAulaCreateManyAulaInputEnvelope
    set?: EstadoAulaWhereUniqueInput | EstadoAulaWhereUniqueInput[]
    disconnect?: EstadoAulaWhereUniqueInput | EstadoAulaWhereUniqueInput[]
    delete?: EstadoAulaWhereUniqueInput | EstadoAulaWhereUniqueInput[]
    connect?: EstadoAulaWhereUniqueInput | EstadoAulaWhereUniqueInput[]
    update?: EstadoAulaUpdateWithWhereUniqueWithoutAulaInput | EstadoAulaUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: EstadoAulaUpdateManyWithWhereWithoutAulaInput | EstadoAulaUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: EstadoAulaScalarWhereInput | EstadoAulaScalarWhereInput[]
  }

  export type HorarioUpdateManyWithoutAulaNestedInput = {
    create?: XOR<HorarioCreateWithoutAulaInput, HorarioUncheckedCreateWithoutAulaInput> | HorarioCreateWithoutAulaInput[] | HorarioUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutAulaInput | HorarioCreateOrConnectWithoutAulaInput[]
    upsert?: HorarioUpsertWithWhereUniqueWithoutAulaInput | HorarioUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: HorarioCreateManyAulaInputEnvelope
    set?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    disconnect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    delete?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    update?: HorarioUpdateWithWhereUniqueWithoutAulaInput | HorarioUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: HorarioUpdateManyWithWhereWithoutAulaInput | HorarioUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
  }

  export type AsistenciaUncheckedUpdateManyWithoutAulaNestedInput = {
    create?: XOR<AsistenciaCreateWithoutAulaInput, AsistenciaUncheckedCreateWithoutAulaInput> | AsistenciaCreateWithoutAulaInput[] | AsistenciaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutAulaInput | AsistenciaCreateOrConnectWithoutAulaInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutAulaInput | AsistenciaUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: AsistenciaCreateManyAulaInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutAulaInput | AsistenciaUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutAulaInput | AsistenciaUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type EstadoAulaUncheckedUpdateManyWithoutAulaNestedInput = {
    create?: XOR<EstadoAulaCreateWithoutAulaInput, EstadoAulaUncheckedCreateWithoutAulaInput> | EstadoAulaCreateWithoutAulaInput[] | EstadoAulaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: EstadoAulaCreateOrConnectWithoutAulaInput | EstadoAulaCreateOrConnectWithoutAulaInput[]
    upsert?: EstadoAulaUpsertWithWhereUniqueWithoutAulaInput | EstadoAulaUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: EstadoAulaCreateManyAulaInputEnvelope
    set?: EstadoAulaWhereUniqueInput | EstadoAulaWhereUniqueInput[]
    disconnect?: EstadoAulaWhereUniqueInput | EstadoAulaWhereUniqueInput[]
    delete?: EstadoAulaWhereUniqueInput | EstadoAulaWhereUniqueInput[]
    connect?: EstadoAulaWhereUniqueInput | EstadoAulaWhereUniqueInput[]
    update?: EstadoAulaUpdateWithWhereUniqueWithoutAulaInput | EstadoAulaUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: EstadoAulaUpdateManyWithWhereWithoutAulaInput | EstadoAulaUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: EstadoAulaScalarWhereInput | EstadoAulaScalarWhereInput[]
  }

  export type HorarioUncheckedUpdateManyWithoutAulaNestedInput = {
    create?: XOR<HorarioCreateWithoutAulaInput, HorarioUncheckedCreateWithoutAulaInput> | HorarioCreateWithoutAulaInput[] | HorarioUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutAulaInput | HorarioCreateOrConnectWithoutAulaInput[]
    upsert?: HorarioUpsertWithWhereUniqueWithoutAulaInput | HorarioUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: HorarioCreateManyAulaInputEnvelope
    set?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    disconnect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    delete?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    update?: HorarioUpdateWithWhereUniqueWithoutAulaInput | HorarioUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: HorarioUpdateManyWithWhereWithoutAulaInput | HorarioUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
  }

  export type AsistenciaCreateNestedManyWithoutProfesorInput = {
    create?: XOR<AsistenciaCreateWithoutProfesorInput, AsistenciaUncheckedCreateWithoutProfesorInput> | AsistenciaCreateWithoutProfesorInput[] | AsistenciaUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutProfesorInput | AsistenciaCreateOrConnectWithoutProfesorInput[]
    createMany?: AsistenciaCreateManyProfesorInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type HorarioCreateNestedManyWithoutProfesorInput = {
    create?: XOR<HorarioCreateWithoutProfesorInput, HorarioUncheckedCreateWithoutProfesorInput> | HorarioCreateWithoutProfesorInput[] | HorarioUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutProfesorInput | HorarioCreateOrConnectWithoutProfesorInput[]
    createMany?: HorarioCreateManyProfesorInputEnvelope
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
  }

  export type AsistenciaUncheckedCreateNestedManyWithoutProfesorInput = {
    create?: XOR<AsistenciaCreateWithoutProfesorInput, AsistenciaUncheckedCreateWithoutProfesorInput> | AsistenciaCreateWithoutProfesorInput[] | AsistenciaUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutProfesorInput | AsistenciaCreateOrConnectWithoutProfesorInput[]
    createMany?: AsistenciaCreateManyProfesorInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type HorarioUncheckedCreateNestedManyWithoutProfesorInput = {
    create?: XOR<HorarioCreateWithoutProfesorInput, HorarioUncheckedCreateWithoutProfesorInput> | HorarioCreateWithoutProfesorInput[] | HorarioUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutProfesorInput | HorarioCreateOrConnectWithoutProfesorInput[]
    createMany?: HorarioCreateManyProfesorInputEnvelope
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
  }

  export type AsistenciaUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<AsistenciaCreateWithoutProfesorInput, AsistenciaUncheckedCreateWithoutProfesorInput> | AsistenciaCreateWithoutProfesorInput[] | AsistenciaUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutProfesorInput | AsistenciaCreateOrConnectWithoutProfesorInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutProfesorInput | AsistenciaUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: AsistenciaCreateManyProfesorInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutProfesorInput | AsistenciaUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutProfesorInput | AsistenciaUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type HorarioUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<HorarioCreateWithoutProfesorInput, HorarioUncheckedCreateWithoutProfesorInput> | HorarioCreateWithoutProfesorInput[] | HorarioUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutProfesorInput | HorarioCreateOrConnectWithoutProfesorInput[]
    upsert?: HorarioUpsertWithWhereUniqueWithoutProfesorInput | HorarioUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: HorarioCreateManyProfesorInputEnvelope
    set?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    disconnect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    delete?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    update?: HorarioUpdateWithWhereUniqueWithoutProfesorInput | HorarioUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: HorarioUpdateManyWithWhereWithoutProfesorInput | HorarioUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
  }

  export type AsistenciaUncheckedUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<AsistenciaCreateWithoutProfesorInput, AsistenciaUncheckedCreateWithoutProfesorInput> | AsistenciaCreateWithoutProfesorInput[] | AsistenciaUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutProfesorInput | AsistenciaCreateOrConnectWithoutProfesorInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutProfesorInput | AsistenciaUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: AsistenciaCreateManyProfesorInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutProfesorInput | AsistenciaUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutProfesorInput | AsistenciaUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type HorarioUncheckedUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<HorarioCreateWithoutProfesorInput, HorarioUncheckedCreateWithoutProfesorInput> | HorarioCreateWithoutProfesorInput[] | HorarioUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutProfesorInput | HorarioCreateOrConnectWithoutProfesorInput[]
    upsert?: HorarioUpsertWithWhereUniqueWithoutProfesorInput | HorarioUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: HorarioCreateManyProfesorInputEnvelope
    set?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    disconnect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    delete?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    update?: HorarioUpdateWithWhereUniqueWithoutProfesorInput | HorarioUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: HorarioUpdateManyWithWhereWithoutProfesorInput | HorarioUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
  }

  export type AsistenciaCreateNestedManyWithoutHorarioInput = {
    create?: XOR<AsistenciaCreateWithoutHorarioInput, AsistenciaUncheckedCreateWithoutHorarioInput> | AsistenciaCreateWithoutHorarioInput[] | AsistenciaUncheckedCreateWithoutHorarioInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutHorarioInput | AsistenciaCreateOrConnectWithoutHorarioInput[]
    createMany?: AsistenciaCreateManyHorarioInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type ProfesorCreateNestedOneWithoutHorariosInput = {
    create?: XOR<ProfesorCreateWithoutHorariosInput, ProfesorUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: ProfesorCreateOrConnectWithoutHorariosInput
    connect?: ProfesorWhereUniqueInput
  }

  export type AulaCreateNestedOneWithoutHorariosInput = {
    create?: XOR<AulaCreateWithoutHorariosInput, AulaUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: AulaCreateOrConnectWithoutHorariosInput
    connect?: AulaWhereUniqueInput
  }

  export type AsignaturaCreateNestedOneWithoutHorariosInput = {
    create?: XOR<AsignaturaCreateWithoutHorariosInput, AsignaturaUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: AsignaturaCreateOrConnectWithoutHorariosInput
    connect?: AsignaturaWhereUniqueInput
  }

  export type AsistenciaUncheckedCreateNestedManyWithoutHorarioInput = {
    create?: XOR<AsistenciaCreateWithoutHorarioInput, AsistenciaUncheckedCreateWithoutHorarioInput> | AsistenciaCreateWithoutHorarioInput[] | AsistenciaUncheckedCreateWithoutHorarioInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutHorarioInput | AsistenciaCreateOrConnectWithoutHorarioInput[]
    createMany?: AsistenciaCreateManyHorarioInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AsistenciaUpdateManyWithoutHorarioNestedInput = {
    create?: XOR<AsistenciaCreateWithoutHorarioInput, AsistenciaUncheckedCreateWithoutHorarioInput> | AsistenciaCreateWithoutHorarioInput[] | AsistenciaUncheckedCreateWithoutHorarioInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutHorarioInput | AsistenciaCreateOrConnectWithoutHorarioInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutHorarioInput | AsistenciaUpsertWithWhereUniqueWithoutHorarioInput[]
    createMany?: AsistenciaCreateManyHorarioInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutHorarioInput | AsistenciaUpdateWithWhereUniqueWithoutHorarioInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutHorarioInput | AsistenciaUpdateManyWithWhereWithoutHorarioInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type ProfesorUpdateOneWithoutHorariosNestedInput = {
    create?: XOR<ProfesorCreateWithoutHorariosInput, ProfesorUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: ProfesorCreateOrConnectWithoutHorariosInput
    upsert?: ProfesorUpsertWithoutHorariosInput
    disconnect?: ProfesorWhereInput | boolean
    delete?: ProfesorWhereInput | boolean
    connect?: ProfesorWhereUniqueInput
    update?: XOR<XOR<ProfesorUpdateToOneWithWhereWithoutHorariosInput, ProfesorUpdateWithoutHorariosInput>, ProfesorUncheckedUpdateWithoutHorariosInput>
  }

  export type AulaUpdateOneRequiredWithoutHorariosNestedInput = {
    create?: XOR<AulaCreateWithoutHorariosInput, AulaUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: AulaCreateOrConnectWithoutHorariosInput
    upsert?: AulaUpsertWithoutHorariosInput
    connect?: AulaWhereUniqueInput
    update?: XOR<XOR<AulaUpdateToOneWithWhereWithoutHorariosInput, AulaUpdateWithoutHorariosInput>, AulaUncheckedUpdateWithoutHorariosInput>
  }

  export type AsignaturaUpdateOneRequiredWithoutHorariosNestedInput = {
    create?: XOR<AsignaturaCreateWithoutHorariosInput, AsignaturaUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: AsignaturaCreateOrConnectWithoutHorariosInput
    upsert?: AsignaturaUpsertWithoutHorariosInput
    connect?: AsignaturaWhereUniqueInput
    update?: XOR<XOR<AsignaturaUpdateToOneWithWhereWithoutHorariosInput, AsignaturaUpdateWithoutHorariosInput>, AsignaturaUncheckedUpdateWithoutHorariosInput>
  }

  export type AsistenciaUncheckedUpdateManyWithoutHorarioNestedInput = {
    create?: XOR<AsistenciaCreateWithoutHorarioInput, AsistenciaUncheckedCreateWithoutHorarioInput> | AsistenciaCreateWithoutHorarioInput[] | AsistenciaUncheckedCreateWithoutHorarioInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutHorarioInput | AsistenciaCreateOrConnectWithoutHorarioInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutHorarioInput | AsistenciaUpsertWithWhereUniqueWithoutHorarioInput[]
    createMany?: AsistenciaCreateManyHorarioInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutHorarioInput | AsistenciaUpdateWithWhereUniqueWithoutHorarioInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutHorarioInput | AsistenciaUpdateManyWithWhereWithoutHorarioInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type ProfesorCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<ProfesorCreateWithoutAsistenciasInput, ProfesorUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: ProfesorCreateOrConnectWithoutAsistenciasInput
    connect?: ProfesorWhereUniqueInput
  }

  export type AulaCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<AulaCreateWithoutAsistenciasInput, AulaUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: AulaCreateOrConnectWithoutAsistenciasInput
    connect?: AulaWhereUniqueInput
  }

  export type HorarioCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<HorarioCreateWithoutAsistenciasInput, HorarioUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: HorarioCreateOrConnectWithoutAsistenciasInput
    connect?: HorarioWhereUniqueInput
  }

  export type AsignaturaCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<AsignaturaCreateWithoutAsistenciasInput, AsignaturaUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: AsignaturaCreateOrConnectWithoutAsistenciasInput
    connect?: AsignaturaWhereUniqueInput
  }

  export type EnumEstadoAsistenciaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoAsistencia
  }

  export type ProfesorUpdateOneWithoutAsistenciasNestedInput = {
    create?: XOR<ProfesorCreateWithoutAsistenciasInput, ProfesorUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: ProfesorCreateOrConnectWithoutAsistenciasInput
    upsert?: ProfesorUpsertWithoutAsistenciasInput
    disconnect?: ProfesorWhereInput | boolean
    delete?: ProfesorWhereInput | boolean
    connect?: ProfesorWhereUniqueInput
    update?: XOR<XOR<ProfesorUpdateToOneWithWhereWithoutAsistenciasInput, ProfesorUpdateWithoutAsistenciasInput>, ProfesorUncheckedUpdateWithoutAsistenciasInput>
  }

  export type AulaUpdateOneRequiredWithoutAsistenciasNestedInput = {
    create?: XOR<AulaCreateWithoutAsistenciasInput, AulaUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: AulaCreateOrConnectWithoutAsistenciasInput
    upsert?: AulaUpsertWithoutAsistenciasInput
    connect?: AulaWhereUniqueInput
    update?: XOR<XOR<AulaUpdateToOneWithWhereWithoutAsistenciasInput, AulaUpdateWithoutAsistenciasInput>, AulaUncheckedUpdateWithoutAsistenciasInput>
  }

  export type HorarioUpdateOneRequiredWithoutAsistenciasNestedInput = {
    create?: XOR<HorarioCreateWithoutAsistenciasInput, HorarioUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: HorarioCreateOrConnectWithoutAsistenciasInput
    upsert?: HorarioUpsertWithoutAsistenciasInput
    connect?: HorarioWhereUniqueInput
    update?: XOR<XOR<HorarioUpdateToOneWithWhereWithoutAsistenciasInput, HorarioUpdateWithoutAsistenciasInput>, HorarioUncheckedUpdateWithoutAsistenciasInput>
  }

  export type AsignaturaUpdateOneRequiredWithoutAsistenciasNestedInput = {
    create?: XOR<AsignaturaCreateWithoutAsistenciasInput, AsignaturaUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: AsignaturaCreateOrConnectWithoutAsistenciasInput
    upsert?: AsignaturaUpsertWithoutAsistenciasInput
    connect?: AsignaturaWhereUniqueInput
    update?: XOR<XOR<AsignaturaUpdateToOneWithWhereWithoutAsistenciasInput, AsignaturaUpdateWithoutAsistenciasInput>, AsignaturaUncheckedUpdateWithoutAsistenciasInput>
  }

  export type AulaCreateNestedOneWithoutEstadosInput = {
    create?: XOR<AulaCreateWithoutEstadosInput, AulaUncheckedCreateWithoutEstadosInput>
    connectOrCreate?: AulaCreateOrConnectWithoutEstadosInput
    connect?: AulaWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AulaUpdateOneRequiredWithoutEstadosNestedInput = {
    create?: XOR<AulaCreateWithoutEstadosInput, AulaUncheckedCreateWithoutEstadosInput>
    connectOrCreate?: AulaCreateOrConnectWithoutEstadosInput
    upsert?: AulaUpsertWithoutEstadosInput
    connect?: AulaWhereUniqueInput
    update?: XOR<XOR<AulaUpdateToOneWithWhereWithoutEstadosInput, AulaUpdateWithoutEstadosInput>, AulaUncheckedUpdateWithoutEstadosInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumEstadoAsistenciaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAsistencia | EnumEstadoAsistenciaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAsistencia[] | ListEnumEstadoAsistenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAsistencia[] | ListEnumEstadoAsistenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAsistenciaFilter<$PrismaModel> | $Enums.EstadoAsistencia
  }

  export type NestedEnumEstadoAsistenciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAsistencia | EnumEstadoAsistenciaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAsistencia[] | ListEnumEstadoAsistenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAsistencia[] | ListEnumEstadoAsistenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAsistenciaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAsistencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAsistenciaFilter<$PrismaModel>
    _max?: NestedEnumEstadoAsistenciaFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AsignaturaCreateWithoutProgramaInput = {
    id?: string
    nombre: string
    codigo: string
    semestre?: number | null
    creditos?: number | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutAsignaturaInput
    horarios?: HorarioCreateNestedManyWithoutAsignaturaInput
  }

  export type AsignaturaUncheckedCreateWithoutProgramaInput = {
    id?: string
    nombre: string
    codigo: string
    semestre?: number | null
    creditos?: number | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutAsignaturaInput
    horarios?: HorarioUncheckedCreateNestedManyWithoutAsignaturaInput
  }

  export type AsignaturaCreateOrConnectWithoutProgramaInput = {
    where: AsignaturaWhereUniqueInput
    create: XOR<AsignaturaCreateWithoutProgramaInput, AsignaturaUncheckedCreateWithoutProgramaInput>
  }

  export type AsignaturaCreateManyProgramaInputEnvelope = {
    data: AsignaturaCreateManyProgramaInput | AsignaturaCreateManyProgramaInput[]
    skipDuplicates?: boolean
  }

  export type AsignaturaUpsertWithWhereUniqueWithoutProgramaInput = {
    where: AsignaturaWhereUniqueInput
    update: XOR<AsignaturaUpdateWithoutProgramaInput, AsignaturaUncheckedUpdateWithoutProgramaInput>
    create: XOR<AsignaturaCreateWithoutProgramaInput, AsignaturaUncheckedCreateWithoutProgramaInput>
  }

  export type AsignaturaUpdateWithWhereUniqueWithoutProgramaInput = {
    where: AsignaturaWhereUniqueInput
    data: XOR<AsignaturaUpdateWithoutProgramaInput, AsignaturaUncheckedUpdateWithoutProgramaInput>
  }

  export type AsignaturaUpdateManyWithWhereWithoutProgramaInput = {
    where: AsignaturaScalarWhereInput
    data: XOR<AsignaturaUpdateManyMutationInput, AsignaturaUncheckedUpdateManyWithoutProgramaInput>
  }

  export type AsignaturaScalarWhereInput = {
    AND?: AsignaturaScalarWhereInput | AsignaturaScalarWhereInput[]
    OR?: AsignaturaScalarWhereInput[]
    NOT?: AsignaturaScalarWhereInput | AsignaturaScalarWhereInput[]
    id?: StringFilter<"Asignatura"> | string
    nombre?: StringFilter<"Asignatura"> | string
    codigo?: StringFilter<"Asignatura"> | string
    programaId?: StringFilter<"Asignatura"> | string
    semestre?: IntNullableFilter<"Asignatura"> | number | null
    creditos?: IntNullableFilter<"Asignatura"> | number | null
    activa?: BoolFilter<"Asignatura"> | boolean
    creadoEn?: DateTimeFilter<"Asignatura"> | Date | string
    actualizadoEn?: DateTimeFilter<"Asignatura"> | Date | string
  }

  export type AsistenciaCreateWithoutAsignaturaInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
    profesor?: ProfesorCreateNestedOneWithoutAsistenciasInput
    aula: AulaCreateNestedOneWithoutAsistenciasInput
    horario: HorarioCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciaUncheckedCreateWithoutAsignaturaInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    horarioId: string
    aulaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type AsistenciaCreateOrConnectWithoutAsignaturaInput = {
    where: AsistenciaWhereUniqueInput
    create: XOR<AsistenciaCreateWithoutAsignaturaInput, AsistenciaUncheckedCreateWithoutAsignaturaInput>
  }

  export type AsistenciaCreateManyAsignaturaInputEnvelope = {
    data: AsistenciaCreateManyAsignaturaInput | AsistenciaCreateManyAsignaturaInput[]
    skipDuplicates?: boolean
  }

  export type HorarioCreateWithoutAsignaturaInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutHorarioInput
    profesor?: ProfesorCreateNestedOneWithoutHorariosInput
    aula: AulaCreateNestedOneWithoutHorariosInput
  }

  export type HorarioUncheckedCreateWithoutAsignaturaInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    aulaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutHorarioInput
  }

  export type HorarioCreateOrConnectWithoutAsignaturaInput = {
    where: HorarioWhereUniqueInput
    create: XOR<HorarioCreateWithoutAsignaturaInput, HorarioUncheckedCreateWithoutAsignaturaInput>
  }

  export type HorarioCreateManyAsignaturaInputEnvelope = {
    data: HorarioCreateManyAsignaturaInput | HorarioCreateManyAsignaturaInput[]
    skipDuplicates?: boolean
  }

  export type ProgramaCreateWithoutAsignaturasInput = {
    id?: string
    nombre: string
    codigo: string
    color: string
    colorBrillo: string
    colorTexto: string
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type ProgramaUncheckedCreateWithoutAsignaturasInput = {
    id?: string
    nombre: string
    codigo: string
    color: string
    colorBrillo: string
    colorTexto: string
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type ProgramaCreateOrConnectWithoutAsignaturasInput = {
    where: ProgramaWhereUniqueInput
    create: XOR<ProgramaCreateWithoutAsignaturasInput, ProgramaUncheckedCreateWithoutAsignaturasInput>
  }

  export type AsistenciaUpsertWithWhereUniqueWithoutAsignaturaInput = {
    where: AsistenciaWhereUniqueInput
    update: XOR<AsistenciaUpdateWithoutAsignaturaInput, AsistenciaUncheckedUpdateWithoutAsignaturaInput>
    create: XOR<AsistenciaCreateWithoutAsignaturaInput, AsistenciaUncheckedCreateWithoutAsignaturaInput>
  }

  export type AsistenciaUpdateWithWhereUniqueWithoutAsignaturaInput = {
    where: AsistenciaWhereUniqueInput
    data: XOR<AsistenciaUpdateWithoutAsignaturaInput, AsistenciaUncheckedUpdateWithoutAsignaturaInput>
  }

  export type AsistenciaUpdateManyWithWhereWithoutAsignaturaInput = {
    where: AsistenciaScalarWhereInput
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyWithoutAsignaturaInput>
  }

  export type AsistenciaScalarWhereInput = {
    AND?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
    OR?: AsistenciaScalarWhereInput[]
    NOT?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
    id?: StringFilter<"Asistencia"> | string
    fecha?: DateTimeFilter<"Asistencia"> | Date | string
    horaInicio?: StringFilter<"Asistencia"> | string
    horaFin?: StringFilter<"Asistencia"> | string
    estado?: EnumEstadoAsistenciaFilter<"Asistencia"> | $Enums.EstadoAsistencia
    observaciones?: StringNullableFilter<"Asistencia"> | string | null
    verificadoPor?: StringNullableFilter<"Asistencia"> | string | null
    horarioId?: StringFilter<"Asistencia"> | string
    asignaturaId?: StringFilter<"Asistencia"> | string
    aulaId?: StringFilter<"Asistencia"> | string
    profesorId?: StringNullableFilter<"Asistencia"> | string | null
    creadoEn?: DateTimeFilter<"Asistencia"> | Date | string
    actualizadoEn?: DateTimeFilter<"Asistencia"> | Date | string
  }

  export type HorarioUpsertWithWhereUniqueWithoutAsignaturaInput = {
    where: HorarioWhereUniqueInput
    update: XOR<HorarioUpdateWithoutAsignaturaInput, HorarioUncheckedUpdateWithoutAsignaturaInput>
    create: XOR<HorarioCreateWithoutAsignaturaInput, HorarioUncheckedCreateWithoutAsignaturaInput>
  }

  export type HorarioUpdateWithWhereUniqueWithoutAsignaturaInput = {
    where: HorarioWhereUniqueInput
    data: XOR<HorarioUpdateWithoutAsignaturaInput, HorarioUncheckedUpdateWithoutAsignaturaInput>
  }

  export type HorarioUpdateManyWithWhereWithoutAsignaturaInput = {
    where: HorarioScalarWhereInput
    data: XOR<HorarioUpdateManyMutationInput, HorarioUncheckedUpdateManyWithoutAsignaturaInput>
  }

  export type HorarioScalarWhereInput = {
    AND?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
    OR?: HorarioScalarWhereInput[]
    NOT?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
    id?: StringFilter<"Horario"> | string
    diaSemana?: IntFilter<"Horario"> | number
    horaInicio?: StringFilter<"Horario"> | string
    horaFin?: StringFilter<"Horario"> | string
    semestre?: StringFilter<"Horario"> | string
    grupo?: StringNullableFilter<"Horario"> | string | null
    activo?: BoolFilter<"Horario"> | boolean
    asignaturaId?: StringFilter<"Horario"> | string
    aulaId?: StringFilter<"Horario"> | string
    profesorId?: StringNullableFilter<"Horario"> | string | null
    creadoEn?: DateTimeFilter<"Horario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Horario"> | Date | string
  }

  export type ProgramaUpsertWithoutAsignaturasInput = {
    update: XOR<ProgramaUpdateWithoutAsignaturasInput, ProgramaUncheckedUpdateWithoutAsignaturasInput>
    create: XOR<ProgramaCreateWithoutAsignaturasInput, ProgramaUncheckedCreateWithoutAsignaturasInput>
    where?: ProgramaWhereInput
  }

  export type ProgramaUpdateToOneWithWhereWithoutAsignaturasInput = {
    where?: ProgramaWhereInput
    data: XOR<ProgramaUpdateWithoutAsignaturasInput, ProgramaUncheckedUpdateWithoutAsignaturasInput>
  }

  export type ProgramaUpdateWithoutAsignaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    colorBrillo?: StringFieldUpdateOperationsInput | string
    colorTexto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramaUncheckedUpdateWithoutAsignaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    colorBrillo?: StringFieldUpdateOperationsInput | string
    colorTexto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateWithoutAulaInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
    profesor?: ProfesorCreateNestedOneWithoutAsistenciasInput
    horario: HorarioCreateNestedOneWithoutAsistenciasInput
    asignatura: AsignaturaCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciaUncheckedCreateWithoutAulaInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    horarioId: string
    asignaturaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type AsistenciaCreateOrConnectWithoutAulaInput = {
    where: AsistenciaWhereUniqueInput
    create: XOR<AsistenciaCreateWithoutAulaInput, AsistenciaUncheckedCreateWithoutAulaInput>
  }

  export type AsistenciaCreateManyAulaInputEnvelope = {
    data: AsistenciaCreateManyAulaInput | AsistenciaCreateManyAulaInput[]
    skipDuplicates?: boolean
  }

  export type EstadoAulaCreateWithoutAulaInput = {
    id?: string
    fecha: Date | string
    franja: string
    abierta?: boolean
    horaApertura?: Date | string | null
    horaCierre?: Date | string | null
    abiertoPor?: string | null
    cerradoPor?: string | null
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type EstadoAulaUncheckedCreateWithoutAulaInput = {
    id?: string
    fecha: Date | string
    franja: string
    abierta?: boolean
    horaApertura?: Date | string | null
    horaCierre?: Date | string | null
    abiertoPor?: string | null
    cerradoPor?: string | null
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type EstadoAulaCreateOrConnectWithoutAulaInput = {
    where: EstadoAulaWhereUniqueInput
    create: XOR<EstadoAulaCreateWithoutAulaInput, EstadoAulaUncheckedCreateWithoutAulaInput>
  }

  export type EstadoAulaCreateManyAulaInputEnvelope = {
    data: EstadoAulaCreateManyAulaInput | EstadoAulaCreateManyAulaInput[]
    skipDuplicates?: boolean
  }

  export type HorarioCreateWithoutAulaInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutHorarioInput
    profesor?: ProfesorCreateNestedOneWithoutHorariosInput
    asignatura: AsignaturaCreateNestedOneWithoutHorariosInput
  }

  export type HorarioUncheckedCreateWithoutAulaInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    asignaturaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutHorarioInput
  }

  export type HorarioCreateOrConnectWithoutAulaInput = {
    where: HorarioWhereUniqueInput
    create: XOR<HorarioCreateWithoutAulaInput, HorarioUncheckedCreateWithoutAulaInput>
  }

  export type HorarioCreateManyAulaInputEnvelope = {
    data: HorarioCreateManyAulaInput | HorarioCreateManyAulaInput[]
    skipDuplicates?: boolean
  }

  export type AsistenciaUpsertWithWhereUniqueWithoutAulaInput = {
    where: AsistenciaWhereUniqueInput
    update: XOR<AsistenciaUpdateWithoutAulaInput, AsistenciaUncheckedUpdateWithoutAulaInput>
    create: XOR<AsistenciaCreateWithoutAulaInput, AsistenciaUncheckedCreateWithoutAulaInput>
  }

  export type AsistenciaUpdateWithWhereUniqueWithoutAulaInput = {
    where: AsistenciaWhereUniqueInput
    data: XOR<AsistenciaUpdateWithoutAulaInput, AsistenciaUncheckedUpdateWithoutAulaInput>
  }

  export type AsistenciaUpdateManyWithWhereWithoutAulaInput = {
    where: AsistenciaScalarWhereInput
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyWithoutAulaInput>
  }

  export type EstadoAulaUpsertWithWhereUniqueWithoutAulaInput = {
    where: EstadoAulaWhereUniqueInput
    update: XOR<EstadoAulaUpdateWithoutAulaInput, EstadoAulaUncheckedUpdateWithoutAulaInput>
    create: XOR<EstadoAulaCreateWithoutAulaInput, EstadoAulaUncheckedCreateWithoutAulaInput>
  }

  export type EstadoAulaUpdateWithWhereUniqueWithoutAulaInput = {
    where: EstadoAulaWhereUniqueInput
    data: XOR<EstadoAulaUpdateWithoutAulaInput, EstadoAulaUncheckedUpdateWithoutAulaInput>
  }

  export type EstadoAulaUpdateManyWithWhereWithoutAulaInput = {
    where: EstadoAulaScalarWhereInput
    data: XOR<EstadoAulaUpdateManyMutationInput, EstadoAulaUncheckedUpdateManyWithoutAulaInput>
  }

  export type EstadoAulaScalarWhereInput = {
    AND?: EstadoAulaScalarWhereInput | EstadoAulaScalarWhereInput[]
    OR?: EstadoAulaScalarWhereInput[]
    NOT?: EstadoAulaScalarWhereInput | EstadoAulaScalarWhereInput[]
    id?: StringFilter<"EstadoAula"> | string
    aulaId?: StringFilter<"EstadoAula"> | string
    fecha?: DateTimeFilter<"EstadoAula"> | Date | string
    franja?: StringFilter<"EstadoAula"> | string
    abierta?: BoolFilter<"EstadoAula"> | boolean
    horaApertura?: DateTimeNullableFilter<"EstadoAula"> | Date | string | null
    horaCierre?: DateTimeNullableFilter<"EstadoAula"> | Date | string | null
    abiertoPor?: StringNullableFilter<"EstadoAula"> | string | null
    cerradoPor?: StringNullableFilter<"EstadoAula"> | string | null
    notas?: StringNullableFilter<"EstadoAula"> | string | null
    creadoEn?: DateTimeFilter<"EstadoAula"> | Date | string
    actualizadoEn?: DateTimeFilter<"EstadoAula"> | Date | string
  }

  export type HorarioUpsertWithWhereUniqueWithoutAulaInput = {
    where: HorarioWhereUniqueInput
    update: XOR<HorarioUpdateWithoutAulaInput, HorarioUncheckedUpdateWithoutAulaInput>
    create: XOR<HorarioCreateWithoutAulaInput, HorarioUncheckedCreateWithoutAulaInput>
  }

  export type HorarioUpdateWithWhereUniqueWithoutAulaInput = {
    where: HorarioWhereUniqueInput
    data: XOR<HorarioUpdateWithoutAulaInput, HorarioUncheckedUpdateWithoutAulaInput>
  }

  export type HorarioUpdateManyWithWhereWithoutAulaInput = {
    where: HorarioScalarWhereInput
    data: XOR<HorarioUpdateManyMutationInput, HorarioUncheckedUpdateManyWithoutAulaInput>
  }

  export type AsistenciaCreateWithoutProfesorInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
    aula: AulaCreateNestedOneWithoutAsistenciasInput
    horario: HorarioCreateNestedOneWithoutAsistenciasInput
    asignatura: AsignaturaCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciaUncheckedCreateWithoutProfesorInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    horarioId: string
    asignaturaId: string
    aulaId: string
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type AsistenciaCreateOrConnectWithoutProfesorInput = {
    where: AsistenciaWhereUniqueInput
    create: XOR<AsistenciaCreateWithoutProfesorInput, AsistenciaUncheckedCreateWithoutProfesorInput>
  }

  export type AsistenciaCreateManyProfesorInputEnvelope = {
    data: AsistenciaCreateManyProfesorInput | AsistenciaCreateManyProfesorInput[]
    skipDuplicates?: boolean
  }

  export type HorarioCreateWithoutProfesorInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutHorarioInput
    aula: AulaCreateNestedOneWithoutHorariosInput
    asignatura: AsignaturaCreateNestedOneWithoutHorariosInput
  }

  export type HorarioUncheckedCreateWithoutProfesorInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    asignaturaId: string
    aulaId: string
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutHorarioInput
  }

  export type HorarioCreateOrConnectWithoutProfesorInput = {
    where: HorarioWhereUniqueInput
    create: XOR<HorarioCreateWithoutProfesorInput, HorarioUncheckedCreateWithoutProfesorInput>
  }

  export type HorarioCreateManyProfesorInputEnvelope = {
    data: HorarioCreateManyProfesorInput | HorarioCreateManyProfesorInput[]
    skipDuplicates?: boolean
  }

  export type AsistenciaUpsertWithWhereUniqueWithoutProfesorInput = {
    where: AsistenciaWhereUniqueInput
    update: XOR<AsistenciaUpdateWithoutProfesorInput, AsistenciaUncheckedUpdateWithoutProfesorInput>
    create: XOR<AsistenciaCreateWithoutProfesorInput, AsistenciaUncheckedCreateWithoutProfesorInput>
  }

  export type AsistenciaUpdateWithWhereUniqueWithoutProfesorInput = {
    where: AsistenciaWhereUniqueInput
    data: XOR<AsistenciaUpdateWithoutProfesorInput, AsistenciaUncheckedUpdateWithoutProfesorInput>
  }

  export type AsistenciaUpdateManyWithWhereWithoutProfesorInput = {
    where: AsistenciaScalarWhereInput
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyWithoutProfesorInput>
  }

  export type HorarioUpsertWithWhereUniqueWithoutProfesorInput = {
    where: HorarioWhereUniqueInput
    update: XOR<HorarioUpdateWithoutProfesorInput, HorarioUncheckedUpdateWithoutProfesorInput>
    create: XOR<HorarioCreateWithoutProfesorInput, HorarioUncheckedCreateWithoutProfesorInput>
  }

  export type HorarioUpdateWithWhereUniqueWithoutProfesorInput = {
    where: HorarioWhereUniqueInput
    data: XOR<HorarioUpdateWithoutProfesorInput, HorarioUncheckedUpdateWithoutProfesorInput>
  }

  export type HorarioUpdateManyWithWhereWithoutProfesorInput = {
    where: HorarioScalarWhereInput
    data: XOR<HorarioUpdateManyMutationInput, HorarioUncheckedUpdateManyWithoutProfesorInput>
  }

  export type AsistenciaCreateWithoutHorarioInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
    profesor?: ProfesorCreateNestedOneWithoutAsistenciasInput
    aula: AulaCreateNestedOneWithoutAsistenciasInput
    asignatura: AsignaturaCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciaUncheckedCreateWithoutHorarioInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    asignaturaId: string
    aulaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type AsistenciaCreateOrConnectWithoutHorarioInput = {
    where: AsistenciaWhereUniqueInput
    create: XOR<AsistenciaCreateWithoutHorarioInput, AsistenciaUncheckedCreateWithoutHorarioInput>
  }

  export type AsistenciaCreateManyHorarioInputEnvelope = {
    data: AsistenciaCreateManyHorarioInput | AsistenciaCreateManyHorarioInput[]
    skipDuplicates?: boolean
  }

  export type ProfesorCreateWithoutHorariosInput = {
    id?: string
    nombre: string
    correo: string
    telefono?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorUncheckedCreateWithoutHorariosInput = {
    id?: string
    nombre: string
    correo: string
    telefono?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorCreateOrConnectWithoutHorariosInput = {
    where: ProfesorWhereUniqueInput
    create: XOR<ProfesorCreateWithoutHorariosInput, ProfesorUncheckedCreateWithoutHorariosInput>
  }

  export type AulaCreateWithoutHorariosInput = {
    id?: string
    nombre: string
    capacidad?: number | null
    edificio?: string | null
    piso?: string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutAulaInput
    estados?: EstadoAulaCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateWithoutHorariosInput = {
    id?: string
    nombre: string
    capacidad?: number | null
    edificio?: string | null
    piso?: string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutAulaInput
    estados?: EstadoAulaUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaCreateOrConnectWithoutHorariosInput = {
    where: AulaWhereUniqueInput
    create: XOR<AulaCreateWithoutHorariosInput, AulaUncheckedCreateWithoutHorariosInput>
  }

  export type AsignaturaCreateWithoutHorariosInput = {
    id?: string
    nombre: string
    codigo: string
    semestre?: number | null
    creditos?: number | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutAsignaturaInput
    programa: ProgramaCreateNestedOneWithoutAsignaturasInput
  }

  export type AsignaturaUncheckedCreateWithoutHorariosInput = {
    id?: string
    nombre: string
    codigo: string
    programaId: string
    semestre?: number | null
    creditos?: number | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutAsignaturaInput
  }

  export type AsignaturaCreateOrConnectWithoutHorariosInput = {
    where: AsignaturaWhereUniqueInput
    create: XOR<AsignaturaCreateWithoutHorariosInput, AsignaturaUncheckedCreateWithoutHorariosInput>
  }

  export type AsistenciaUpsertWithWhereUniqueWithoutHorarioInput = {
    where: AsistenciaWhereUniqueInput
    update: XOR<AsistenciaUpdateWithoutHorarioInput, AsistenciaUncheckedUpdateWithoutHorarioInput>
    create: XOR<AsistenciaCreateWithoutHorarioInput, AsistenciaUncheckedCreateWithoutHorarioInput>
  }

  export type AsistenciaUpdateWithWhereUniqueWithoutHorarioInput = {
    where: AsistenciaWhereUniqueInput
    data: XOR<AsistenciaUpdateWithoutHorarioInput, AsistenciaUncheckedUpdateWithoutHorarioInput>
  }

  export type AsistenciaUpdateManyWithWhereWithoutHorarioInput = {
    where: AsistenciaScalarWhereInput
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyWithoutHorarioInput>
  }

  export type ProfesorUpsertWithoutHorariosInput = {
    update: XOR<ProfesorUpdateWithoutHorariosInput, ProfesorUncheckedUpdateWithoutHorariosInput>
    create: XOR<ProfesorCreateWithoutHorariosInput, ProfesorUncheckedCreateWithoutHorariosInput>
    where?: ProfesorWhereInput
  }

  export type ProfesorUpdateToOneWithWhereWithoutHorariosInput = {
    where?: ProfesorWhereInput
    data: XOR<ProfesorUpdateWithoutHorariosInput, ProfesorUncheckedUpdateWithoutHorariosInput>
  }

  export type ProfesorUpdateWithoutHorariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutProfesorNestedInput
  }

  export type ProfesorUncheckedUpdateWithoutHorariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutProfesorNestedInput
  }

  export type AulaUpsertWithoutHorariosInput = {
    update: XOR<AulaUpdateWithoutHorariosInput, AulaUncheckedUpdateWithoutHorariosInput>
    create: XOR<AulaCreateWithoutHorariosInput, AulaUncheckedCreateWithoutHorariosInput>
    where?: AulaWhereInput
  }

  export type AulaUpdateToOneWithWhereWithoutHorariosInput = {
    where?: AulaWhereInput
    data: XOR<AulaUpdateWithoutHorariosInput, AulaUncheckedUpdateWithoutHorariosInput>
  }

  export type AulaUpdateWithoutHorariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    edificio?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutAulaNestedInput
    estados?: EstadoAulaUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateWithoutHorariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    edificio?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutAulaNestedInput
    estados?: EstadoAulaUncheckedUpdateManyWithoutAulaNestedInput
  }

  export type AsignaturaUpsertWithoutHorariosInput = {
    update: XOR<AsignaturaUpdateWithoutHorariosInput, AsignaturaUncheckedUpdateWithoutHorariosInput>
    create: XOR<AsignaturaCreateWithoutHorariosInput, AsignaturaUncheckedCreateWithoutHorariosInput>
    where?: AsignaturaWhereInput
  }

  export type AsignaturaUpdateToOneWithWhereWithoutHorariosInput = {
    where?: AsignaturaWhereInput
    data: XOR<AsignaturaUpdateWithoutHorariosInput, AsignaturaUncheckedUpdateWithoutHorariosInput>
  }

  export type AsignaturaUpdateWithoutHorariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    semestre?: NullableIntFieldUpdateOperationsInput | number | null
    creditos?: NullableIntFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutAsignaturaNestedInput
    programa?: ProgramaUpdateOneRequiredWithoutAsignaturasNestedInput
  }

  export type AsignaturaUncheckedUpdateWithoutHorariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    programaId?: StringFieldUpdateOperationsInput | string
    semestre?: NullableIntFieldUpdateOperationsInput | number | null
    creditos?: NullableIntFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutAsignaturaNestedInput
  }

  export type ProfesorCreateWithoutAsistenciasInput = {
    id?: string
    nombre: string
    correo: string
    telefono?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    horarios?: HorarioCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorUncheckedCreateWithoutAsistenciasInput = {
    id?: string
    nombre: string
    correo: string
    telefono?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    horarios?: HorarioUncheckedCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorCreateOrConnectWithoutAsistenciasInput = {
    where: ProfesorWhereUniqueInput
    create: XOR<ProfesorCreateWithoutAsistenciasInput, ProfesorUncheckedCreateWithoutAsistenciasInput>
  }

  export type AulaCreateWithoutAsistenciasInput = {
    id?: string
    nombre: string
    capacidad?: number | null
    edificio?: string | null
    piso?: string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    estados?: EstadoAulaCreateNestedManyWithoutAulaInput
    horarios?: HorarioCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateWithoutAsistenciasInput = {
    id?: string
    nombre: string
    capacidad?: number | null
    edificio?: string | null
    piso?: string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    estados?: EstadoAulaUncheckedCreateNestedManyWithoutAulaInput
    horarios?: HorarioUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaCreateOrConnectWithoutAsistenciasInput = {
    where: AulaWhereUniqueInput
    create: XOR<AulaCreateWithoutAsistenciasInput, AulaUncheckedCreateWithoutAsistenciasInput>
  }

  export type HorarioCreateWithoutAsistenciasInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    profesor?: ProfesorCreateNestedOneWithoutHorariosInput
    aula: AulaCreateNestedOneWithoutHorariosInput
    asignatura: AsignaturaCreateNestedOneWithoutHorariosInput
  }

  export type HorarioUncheckedCreateWithoutAsistenciasInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    asignaturaId: string
    aulaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type HorarioCreateOrConnectWithoutAsistenciasInput = {
    where: HorarioWhereUniqueInput
    create: XOR<HorarioCreateWithoutAsistenciasInput, HorarioUncheckedCreateWithoutAsistenciasInput>
  }

  export type AsignaturaCreateWithoutAsistenciasInput = {
    id?: string
    nombre: string
    codigo: string
    semestre?: number | null
    creditos?: number | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    horarios?: HorarioCreateNestedManyWithoutAsignaturaInput
    programa: ProgramaCreateNestedOneWithoutAsignaturasInput
  }

  export type AsignaturaUncheckedCreateWithoutAsistenciasInput = {
    id?: string
    nombre: string
    codigo: string
    programaId: string
    semestre?: number | null
    creditos?: number | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    horarios?: HorarioUncheckedCreateNestedManyWithoutAsignaturaInput
  }

  export type AsignaturaCreateOrConnectWithoutAsistenciasInput = {
    where: AsignaturaWhereUniqueInput
    create: XOR<AsignaturaCreateWithoutAsistenciasInput, AsignaturaUncheckedCreateWithoutAsistenciasInput>
  }

  export type ProfesorUpsertWithoutAsistenciasInput = {
    update: XOR<ProfesorUpdateWithoutAsistenciasInput, ProfesorUncheckedUpdateWithoutAsistenciasInput>
    create: XOR<ProfesorCreateWithoutAsistenciasInput, ProfesorUncheckedCreateWithoutAsistenciasInput>
    where?: ProfesorWhereInput
  }

  export type ProfesorUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: ProfesorWhereInput
    data: XOR<ProfesorUpdateWithoutAsistenciasInput, ProfesorUncheckedUpdateWithoutAsistenciasInput>
  }

  export type ProfesorUpdateWithoutAsistenciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    horarios?: HorarioUpdateManyWithoutProfesorNestedInput
  }

  export type ProfesorUncheckedUpdateWithoutAsistenciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    horarios?: HorarioUncheckedUpdateManyWithoutProfesorNestedInput
  }

  export type AulaUpsertWithoutAsistenciasInput = {
    update: XOR<AulaUpdateWithoutAsistenciasInput, AulaUncheckedUpdateWithoutAsistenciasInput>
    create: XOR<AulaCreateWithoutAsistenciasInput, AulaUncheckedCreateWithoutAsistenciasInput>
    where?: AulaWhereInput
  }

  export type AulaUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: AulaWhereInput
    data: XOR<AulaUpdateWithoutAsistenciasInput, AulaUncheckedUpdateWithoutAsistenciasInput>
  }

  export type AulaUpdateWithoutAsistenciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    edificio?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estados?: EstadoAulaUpdateManyWithoutAulaNestedInput
    horarios?: HorarioUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateWithoutAsistenciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    edificio?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estados?: EstadoAulaUncheckedUpdateManyWithoutAulaNestedInput
    horarios?: HorarioUncheckedUpdateManyWithoutAulaNestedInput
  }

  export type HorarioUpsertWithoutAsistenciasInput = {
    update: XOR<HorarioUpdateWithoutAsistenciasInput, HorarioUncheckedUpdateWithoutAsistenciasInput>
    create: XOR<HorarioCreateWithoutAsistenciasInput, HorarioUncheckedCreateWithoutAsistenciasInput>
    where?: HorarioWhereInput
  }

  export type HorarioUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: HorarioWhereInput
    data: XOR<HorarioUpdateWithoutAsistenciasInput, HorarioUncheckedUpdateWithoutAsistenciasInput>
  }

  export type HorarioUpdateWithoutAsistenciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesor?: ProfesorUpdateOneWithoutHorariosNestedInput
    aula?: AulaUpdateOneRequiredWithoutHorariosNestedInput
    asignatura?: AsignaturaUpdateOneRequiredWithoutHorariosNestedInput
  }

  export type HorarioUncheckedUpdateWithoutAsistenciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    asignaturaId?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignaturaUpsertWithoutAsistenciasInput = {
    update: XOR<AsignaturaUpdateWithoutAsistenciasInput, AsignaturaUncheckedUpdateWithoutAsistenciasInput>
    create: XOR<AsignaturaCreateWithoutAsistenciasInput, AsignaturaUncheckedCreateWithoutAsistenciasInput>
    where?: AsignaturaWhereInput
  }

  export type AsignaturaUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: AsignaturaWhereInput
    data: XOR<AsignaturaUpdateWithoutAsistenciasInput, AsignaturaUncheckedUpdateWithoutAsistenciasInput>
  }

  export type AsignaturaUpdateWithoutAsistenciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    semestre?: NullableIntFieldUpdateOperationsInput | number | null
    creditos?: NullableIntFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    horarios?: HorarioUpdateManyWithoutAsignaturaNestedInput
    programa?: ProgramaUpdateOneRequiredWithoutAsignaturasNestedInput
  }

  export type AsignaturaUncheckedUpdateWithoutAsistenciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    programaId?: StringFieldUpdateOperationsInput | string
    semestre?: NullableIntFieldUpdateOperationsInput | number | null
    creditos?: NullableIntFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    horarios?: HorarioUncheckedUpdateManyWithoutAsignaturaNestedInput
  }

  export type AulaCreateWithoutEstadosInput = {
    id?: string
    nombre: string
    capacidad?: number | null
    edificio?: string | null
    piso?: string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutAulaInput
    horarios?: HorarioCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateWithoutEstadosInput = {
    id?: string
    nombre: string
    capacidad?: number | null
    edificio?: string | null
    piso?: string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutAulaInput
    horarios?: HorarioUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaCreateOrConnectWithoutEstadosInput = {
    where: AulaWhereUniqueInput
    create: XOR<AulaCreateWithoutEstadosInput, AulaUncheckedCreateWithoutEstadosInput>
  }

  export type AulaUpsertWithoutEstadosInput = {
    update: XOR<AulaUpdateWithoutEstadosInput, AulaUncheckedUpdateWithoutEstadosInput>
    create: XOR<AulaCreateWithoutEstadosInput, AulaUncheckedCreateWithoutEstadosInput>
    where?: AulaWhereInput
  }

  export type AulaUpdateToOneWithWhereWithoutEstadosInput = {
    where?: AulaWhereInput
    data: XOR<AulaUpdateWithoutEstadosInput, AulaUncheckedUpdateWithoutEstadosInput>
  }

  export type AulaUpdateWithoutEstadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    edificio?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutAulaNestedInput
    horarios?: HorarioUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateWithoutEstadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    edificio?: NullableStringFieldUpdateOperationsInput | string | null
    piso?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: NullableJsonNullValueInput | InputJsonValue
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutAulaNestedInput
    horarios?: HorarioUncheckedUpdateManyWithoutAulaNestedInput
  }

  export type AsignaturaCreateManyProgramaInput = {
    id?: string
    nombre: string
    codigo: string
    semestre?: number | null
    creditos?: number | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type AsignaturaUpdateWithoutProgramaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    semestre?: NullableIntFieldUpdateOperationsInput | number | null
    creditos?: NullableIntFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutAsignaturaNestedInput
    horarios?: HorarioUpdateManyWithoutAsignaturaNestedInput
  }

  export type AsignaturaUncheckedUpdateWithoutProgramaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    semestre?: NullableIntFieldUpdateOperationsInput | number | null
    creditos?: NullableIntFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutAsignaturaNestedInput
    horarios?: HorarioUncheckedUpdateManyWithoutAsignaturaNestedInput
  }

  export type AsignaturaUncheckedUpdateManyWithoutProgramaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    semestre?: NullableIntFieldUpdateOperationsInput | number | null
    creditos?: NullableIntFieldUpdateOperationsInput | number | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateManyAsignaturaInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    horarioId: string
    aulaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type HorarioCreateManyAsignaturaInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    aulaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type AsistenciaUpdateWithoutAsignaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesor?: ProfesorUpdateOneWithoutAsistenciasNestedInput
    aula?: AulaUpdateOneRequiredWithoutAsistenciasNestedInput
    horario?: HorarioUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type AsistenciaUncheckedUpdateWithoutAsignaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    horarioId?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaUncheckedUpdateManyWithoutAsignaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    horarioId?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioUpdateWithoutAsignaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutHorarioNestedInput
    profesor?: ProfesorUpdateOneWithoutHorariosNestedInput
    aula?: AulaUpdateOneRequiredWithoutHorariosNestedInput
  }

  export type HorarioUncheckedUpdateWithoutAsignaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    aulaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutHorarioNestedInput
  }

  export type HorarioUncheckedUpdateManyWithoutAsignaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    aulaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateManyAulaInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    horarioId: string
    asignaturaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type EstadoAulaCreateManyAulaInput = {
    id?: string
    fecha: Date | string
    franja: string
    abierta?: boolean
    horaApertura?: Date | string | null
    horaCierre?: Date | string | null
    abiertoPor?: string | null
    cerradoPor?: string | null
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type HorarioCreateManyAulaInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    asignaturaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type AsistenciaUpdateWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesor?: ProfesorUpdateOneWithoutAsistenciasNestedInput
    horario?: HorarioUpdateOneRequiredWithoutAsistenciasNestedInput
    asignatura?: AsignaturaUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type AsistenciaUncheckedUpdateWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    horarioId?: StringFieldUpdateOperationsInput | string
    asignaturaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaUncheckedUpdateManyWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    horarioId?: StringFieldUpdateOperationsInput | string
    asignaturaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstadoAulaUpdateWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franja?: StringFieldUpdateOperationsInput | string
    abierta?: BoolFieldUpdateOperationsInput | boolean
    horaApertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abiertoPor?: NullableStringFieldUpdateOperationsInput | string | null
    cerradoPor?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstadoAulaUncheckedUpdateWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franja?: StringFieldUpdateOperationsInput | string
    abierta?: BoolFieldUpdateOperationsInput | boolean
    horaApertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abiertoPor?: NullableStringFieldUpdateOperationsInput | string | null
    cerradoPor?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstadoAulaUncheckedUpdateManyWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franja?: StringFieldUpdateOperationsInput | string
    abierta?: BoolFieldUpdateOperationsInput | boolean
    horaApertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abiertoPor?: NullableStringFieldUpdateOperationsInput | string | null
    cerradoPor?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioUpdateWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutHorarioNestedInput
    profesor?: ProfesorUpdateOneWithoutHorariosNestedInput
    asignatura?: AsignaturaUpdateOneRequiredWithoutHorariosNestedInput
  }

  export type HorarioUncheckedUpdateWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    asignaturaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutHorarioNestedInput
  }

  export type HorarioUncheckedUpdateManyWithoutAulaInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    asignaturaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateManyProfesorInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    horarioId: string
    asignaturaId: string
    aulaId: string
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type HorarioCreateManyProfesorInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    semestre: string
    grupo?: string | null
    activo?: boolean
    asignaturaId: string
    aulaId: string
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type AsistenciaUpdateWithoutProfesorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    aula?: AulaUpdateOneRequiredWithoutAsistenciasNestedInput
    horario?: HorarioUpdateOneRequiredWithoutAsistenciasNestedInput
    asignatura?: AsignaturaUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type AsistenciaUncheckedUpdateWithoutProfesorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    horarioId?: StringFieldUpdateOperationsInput | string
    asignaturaId?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaUncheckedUpdateManyWithoutProfesorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    horarioId?: StringFieldUpdateOperationsInput | string
    asignaturaId?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioUpdateWithoutProfesorInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutHorarioNestedInput
    aula?: AulaUpdateOneRequiredWithoutHorariosNestedInput
    asignatura?: AsignaturaUpdateOneRequiredWithoutHorariosNestedInput
  }

  export type HorarioUncheckedUpdateWithoutProfesorInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    asignaturaId?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutHorarioNestedInput
  }

  export type HorarioUncheckedUpdateManyWithoutProfesorInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    semestre?: StringFieldUpdateOperationsInput | string
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    asignaturaId?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateManyHorarioInput = {
    id?: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    estado: $Enums.EstadoAsistencia
    observaciones?: string | null
    verificadoPor?: string | null
    asignaturaId: string
    aulaId: string
    profesorId?: string | null
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type AsistenciaUpdateWithoutHorarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesor?: ProfesorUpdateOneWithoutAsistenciasNestedInput
    aula?: AulaUpdateOneRequiredWithoutAsistenciasNestedInput
    asignatura?: AsignaturaUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type AsistenciaUncheckedUpdateWithoutHorarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    asignaturaId?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaUncheckedUpdateManyWithoutHorarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAsistenciaFieldUpdateOperationsInput | $Enums.EstadoAsistencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    verificadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    asignaturaId?: StringFieldUpdateOperationsInput | string
    aulaId?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableStringFieldUpdateOperationsInput | string | null
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