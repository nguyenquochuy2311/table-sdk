import type {
	BulkCreateOptions,
	CreateOptions,
	DestroyOptions,
	FindOptions,
	Identifier,
	UpdateOptions,
	UpsertOptions,
	WhereOptions,
} from 'sequelize';
import { Sequelize, type Model, type ModelCtor } from 'sequelize-typescript';
import type { IRepository, ISequelize } from '../interfaces/sequelize.interface';
import { getTableConnection } from '../table-connection';

export abstract class _Repository<I> {
	protected connection: ISequelize;

	/**
	 * Creates an instance of Repository.
	 *
	 * @constructor
	 * @param {string} workspaceID
	 */
	constructor(workspaceID: string) {
		this.connection = getTableConnection(workspaceID);
	}

	protected abstract _getRepository(): Promise<IRepository<Model>>;

	/**
	 * @param {ModelCtor} model?
	 * @returns {Promise<ModelCtor>}
	 */
	protected async _getModel(model?: ModelCtor): Promise<ModelCtor> {
		return model ? this.connection.model(model) : await this._getRepository();
	}

	/**
	 * @param {FindOptions} options
	 * @returns {Promise<I[]>}
	 */
	protected async _getAll(options: FindOptions): Promise<I[]> {
		const result = await (await this._getRepository()).findAll(options);

		return result instanceof Sequelize ? result?.map((d: Model): I => d.get({ plain: true })) : (result as unknown as I[]);
	}

	/**
	 * @param {Identifier} pk
	 * @param {FindOptions} options?
	 * @returns {Promise<I | null>}
	 */
	protected async _getByPk(pk: Identifier, options: FindOptions): Promise<I | null> {
		const result = await (await this._getRepository()).findByPk(pk, options);

		return result instanceof Sequelize ? result?.get({ plain: true }) : (result as I);
	}

	/**
	 * @param {FindOptions} options?
	 * @returns {Promise<I | null>}
	 */
	protected async _getOne(options: FindOptions): Promise<I | null> {
		const result = await (await this._getRepository()).findOne(options);

		return result instanceof Sequelize ? result?.get({ plain: true }) : (result as I);
	}

	/**
	 * @param {Partial<I>} data
	 * @param {CreateOptions} options
	 * @returns {Promise<I>}
	 */
	protected async _create(data: Partial<I>, options: CreateOptions): Promise<I> {
		const result = await (await this._getRepository()).create(data, options);

		return result?.get({ plain: true });
	}

	/**
	 * @param {Partial<I>[]} data
	 * @param {BulkCreateOptions} options?
	 * @returns {Promise<I[]>}
	 */
	protected async _bulkCreate(data: Partial<I>[], options: BulkCreateOptions): Promise<I[]> {
		const result = await (await this._getRepository()).bulkCreate(data, options);

		return result?.map((d: Model): I => d.get({ plain: true }));
	}

	/**
	 * @param {Partial<I>} data
	 * @param {UpdateOptions} options
	 * @returns {Promise<number>}
	 */
	protected async _update(data: Partial<I>, options: UpdateOptions & { where: WhereOptions }): Promise<[affectedCount: number]> {
		const result = await (await this._getRepository()).update(data, options);

		return result;
	}

	/**
	 * @param {Partial<I>} data
	 * @param {UpsertOptions} options
	 * @returns {Promise<I>}
	 */
	protected async _upsert(data: Partial<I>, options: UpsertOptions): Promise<I> {
		const [result] = await (await this._getRepository()).upsert(data, options);

		return result?.get({ plain: true });
	}

	/**
	 * @param {DestroyOptions} options
	 * @returns {Promise<number>}
	 */
	protected async _delete(options: DestroyOptions & { where: WhereOptions }): Promise<number> {
		const result = await (await this._getRepository()).destroy(options);

		return result;
	}
}
