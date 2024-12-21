import { transform } from 'lodash';
import type { ModelAttributeColumnOptions } from 'sequelize';
import { DataTypes } from 'sequelize';
import type { Model, ModelCtor } from 'sequelize-typescript';
import { isValid } from 'ulidx';
import type { IRepository } from '../interfaces/sequelize.interface';
import { TableDataColumn, type IRecordDataModel } from '../models';
import { _Repository } from './_repository';

export class _RecordDataRepository extends _Repository<IRecordDataModel> {
	private tableID: string;

	/**
	 * Creates an instance of RecordDataRepository.
	 *
	 * @constructor
	 * @param {string} workspaceID
	 * @param {string} rawTableID
	 */
	constructor(workspaceID: string, rawTableID: string) {
		super(workspaceID);

		this.tableID = `Table_${rawTableID}`;
	}

	/**
	 * Get record data repository
	 *
	 * @returns {Promise<IRepository<Model>>}
	 */
	protected override async _getRepository(): Promise<IRepository<Model>> {
		const model = await this.checkTableExisted();
		if (!model) throw new Error('Table not found');

		return model;
	}

	/**
	 * Check table is existed
	 *
	 * @returns {Promise<any>}
	 */
	async checkTableExisted(): Promise<ModelCtor | undefined> {
		if (this.connection.isDefined(this.tableID)) {
			return this.connection.model(this.tableID);
		}

		let attributes;

		try {
			attributes = await this.connection.getQueryInterface().describeTable(this.tableID);
		} catch {
			return;
		}

		const fieldAttributes = transform(
			attributes,
			(memo, __, colName) => {
				if (isValid(colName)) {
					memo[colName] = { type: DataTypes.JSON };
				}
			},
			{} as Record<string, ModelAttributeColumnOptions>,
		);

		return this.connection.define(
			this.tableID,
			{
				...fieldAttributes,
				...TableDataColumn,
			},
			{
				modelName: this.tableID,
				tableName: this.tableID,
				paranoid: true,
				timestamps: false,
				indexes: [
					{
						fields: ['id', 'deletedAt'],
					},
				],
			},
		) as ModelCtor;
	}
}
