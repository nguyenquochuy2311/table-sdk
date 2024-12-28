import { transform } from 'lodash';
import type { Model, ModelAttributeColumnOptions } from 'sequelize';
import { DataType } from 'sequelize-typescript';
import { isValid } from 'ulidx';

export const RecordDataColumn = (fieldIDs: string[]): Record<string, ModelAttributeColumnOptions<Model<any, any>>> => ({
	id: {
		type: DataType.STRING(26),
		primaryKey: true,
		validate: {
			isValid(value: any): boolean {
				return isValid(value);
			},
		},
	},
	createdAt: {
		type: DataType.DATE,
		allowNull: false,
	},
	updatedAt: {
		type: DataType.DATE,
		allowNull: false,
	},
	deletedAt: {
		type: DataType.DATE,
	},
	...transform(
		fieldIDs,
		(memo: any, fieldID) => {
			memo[fieldID] = { type: DataType.JSON };
		},
		{},
	),
});
