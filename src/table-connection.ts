import { assign, values } from 'lodash';
import type { Connection } from 'mysql2/promise';
import { createConnection } from 'mysql2/promise';
import type { SequelizeOptions } from 'sequelize-typescript';
import { Sequelize } from 'sequelize-typescript';
import type { ISequelize, ITransaction } from './interfaces/sequelize.interface';
import { Models } from './models';

const TABLE_CONNECTIONS = {} as Record<string, ISequelize>;

const DEFAULT_CONFIG: SequelizeOptions = {
	dialect: 'mysql',
	define: {
		charset: 'utf8mb4',
		collate: 'utf8mb4_general_ci',
	},
	pool: {
		min: 0,
		max: 5,
	},
	dialectOptions: {
		ssl: {
			rejectUnauthorized: true,
		},
	},
	benchmark: false,
	logQueryParameters: false,
	repositoryMode: true,
};

const _connect = (dbName: string): ISequelize => {
	try {
		const username = DEFAULT_CONFIG.username as string;
		const password = DEFAULT_CONFIG.password as string;

		const conn = new Sequelize(dbName, username, password, DEFAULT_CONFIG) as ISequelize;

		conn.disconnect = async function (): Promise<void> {
			await this.close();

			delete TABLE_CONNECTIONS[dbName];
		};

		// Declare create transaction fn
		conn.createTransaction = async function (options: any = undefined, callBack: any = undefined): Promise<ITransaction> {
			try {
				const transaction = (await this.transaction(options, callBack)) as ITransaction;

				transaction.safeCommit = async function (): Promise<void> {
					return this.finished !== 'commit' && this.finished !== 'rollback' ? await this.commit() : undefined;
				};

				transaction.safeRollback = async function (): Promise<void> {
					return this.finished !== 'commit' && this.finished !== 'rollback' ? await this.rollback() : undefined;
				};

				return transaction;
			} catch (error) {
				throw error;
			}
		};

		conn.addModels(values(Models));

		TABLE_CONNECTIONS[dbName] = conn;

		return conn;
	} catch (error) {
		throw error;
	}
};

const initTableConnection = async (
	opts: SequelizeOptions & {
		username: string;
		password: string;
		host: string;
		port: number;
	},
): Promise<void> => {
	assign(DEFAULT_CONFIG, opts);

	let connection!: Connection;

	try {
		connection = await createConnection({
			host: opts.host,
			port: opts.port,
			user: opts.username,
			password: opts.password,
			ssl: {
				rejectUnauthorized: true,
			},
		});

		await connection.ping();

		console.log('Database host connected');
	} catch (error) {
		throw error;
	} finally {
		await connection?.end();
	}
};

const getTableConnection = (workspaceID: string): ISequelize => {
	if (!DEFAULT_CONFIG.database) {
		throw new Error('Database is not set');
	}

	const dbName = `${DEFAULT_CONFIG.database}_${workspaceID}`;

	const conn = TABLE_CONNECTIONS[dbName];

	return conn || _connect(dbName);
};

export { getTableConnection, initTableConnection };
