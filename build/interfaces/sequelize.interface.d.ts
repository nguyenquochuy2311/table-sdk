import type { Model, Transaction } from 'sequelize';
import type { Repository, Sequelize } from 'sequelize-typescript';
export interface ITransaction extends Transaction {
    finished: string;
    safeCommit(): Promise<void>;
    safeRollback(): Promise<void>;
}
export interface ISequelize extends Sequelize {
    disconnect(): Promise<void>;
    createTransaction(options?: object, callBack?: object): Promise<ITransaction>;
}
export type IRepository<M extends Model> = Repository<M>;
