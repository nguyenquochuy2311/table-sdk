import type { ModelAttributeColumnOptions } from 'sequelize';
import { DataType } from 'sequelize-typescript';
import { RecordMetaModel } from '../record-meta';
import type { IRecordDataModel } from './record-data.interface';

export const TableDataColumn: Record<keyof IRecordDataModel, ModelAttributeColumnOptions> = {
	id: {
		type: DataType.STRING(26),
		primaryKey: true,
		references: {
			model: RecordMetaModel,
			key: 'id',
		},
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	},
	deletedAt: {
		type: DataType.DATE,
	},
};
