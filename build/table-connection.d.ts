import type { SequelizeOptions } from 'sequelize-typescript';
import type { ISequelize } from './interfaces/sequelize.interface';
declare const initTableConnection: (opts: SequelizeOptions & {
    username: string;
    password: string;
    host: string;
    port: number;
}) => Promise<void>;
declare const getTableConnection: (workspaceID: string) => ISequelize;
export { getTableConnection, initTableConnection };
