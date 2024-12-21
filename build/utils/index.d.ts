import type { ULID } from 'ulidx';
export declare const parseTableID: (tableID: ULID) => string;
export declare const catchError: <T>(promise: Promise<T>) => Promise<[undefined, T] | [Error]>;
