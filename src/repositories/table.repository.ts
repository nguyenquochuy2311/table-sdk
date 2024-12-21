import type { IRepository } from 'interfaces/sequelize.interface';
import { reduce, startsWith } from 'lodash';
import { RecordDataColumn, RecordMetaModel, type IRecordDataModel } from 'models';
import type { ModelAttributeColumnOptions } from 'sequelize';
import type { Model, ModelCtor } from 'sequelize-typescript';
import { isValid } from 'ulidx';
import { catchError, parseTableID } from '../utils';
import { _Repository } from './_repository';

export class _TableRepository extends _Repository<IRecordDataModel> {
	private parseTableID: string;

	/**
	 * Creates an instance of TableRepository.
	 *
	 * @constructor
	 * @param {string} workspaceID
	 * @param {string} tableID
	 */
	constructor(workspaceID: string, tableID: string) {
		super(workspaceID);

		this.parseTableID = parseTableID(tableID);
	}

	/**
	 * Get repository
	 *
	 * @protected
	 * @override
	 * @returns {Promise<IRepository<Model>>}
	 */
	protected override async _getRepository(): Promise<IRepository<Model>> {
		const model = await this.checkTableExisted();

		if (!model) {
			throw new Error('Table not existed');
		}

		return model;
	}

	/**
	 * Check table is existed
	 *
	 * @returns {Promise<any>}
	 */
	async checkTableExisted(): Promise<ModelCtor | undefined> {
		const tableModel = this.connection.models[this.parseTableID];
		if (tableModel) return tableModel as ModelCtor;

		const [error, attributes] = await catchError(this.connection.getQueryInterface().describeTable(this.parseTableID));

		if (startsWith(error?.message, 'No')) return;

		const fieldIDs = reduce(attributes, (res: string[], __, colName) => (isValid(colName) ? res.concat(colName) : res), []);
		const fieldAttributes = RecordDataColumn(fieldIDs);

		return this._defineModel(fieldAttributes);
	}

	/**
	 * Define model
	 *
	 * @param {Record<string, ModelAttributeColumnOptions<Model<any, any>>>} fieldAttributes
	 * @returns {ModelCtor}
	 */
	private _defineModel(fieldAttributes: Record<string, ModelAttributeColumnOptions<Model<any, any>>>): ModelCtor {
		this.connection.define(this.parseTableID, fieldAttributes, {
			indexes: [{ name: 'idx_deletedAt', fields: ['deletedAt'] }],
			modelName: this.parseTableID,
			tableName: this.parseTableID,
			timestamps: false,
			paranoid: true,
		});

		this.connection.models[this.parseTableID].belongsTo(this.connection.getRepository(RecordMetaModel), {
			as: 'recordMeta',
			foreignKey: 'id',
			onDelete: 'CASCADE',
		});

		return this.connection.models[this.parseTableID] as ModelCtor;
	}
}
