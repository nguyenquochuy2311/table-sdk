import { Column, CreatedAt, DataType, DeletedAt, Index, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { isValid, ulid } from 'ulidx';
import type { IRecordMetaModel } from './record-meta.interface';

@Table({
	modelName: 'recordMeta',
	tableName: 'RecordMetas',
	paranoid: true,
})
export class RecordMetaModel extends Model implements IRecordMetaModel {
	@PrimaryKey
	@Column({
		type: DataType.STRING(26),
		defaultValue: (): string => ulid(),
		validate: {
			isValidULID(value: any): boolean {
				return isValid(value);
			},
		},
	})
	declare id: string;

	@Column({
		type: DataType.STRING(26),
		allowNull: false,
		validate: {
			isValidULID(value: any): boolean {
				return isValid(value);
			},
		},
	})
	@Index
	declare tableID: string;

	@Column({ type: DataType.STRING })
	declare name: string | null;

	@Column({
		type: DataType.STRING(26),
		validate: {
			isValidULID(value: any): boolean {
				return isValid(value);
			},
		},
	})
	declare createdBy: string | null;

	@CreatedAt
	@Column({ type: DataType.DATE })
	declare createdAt: Date;

	@UpdatedAt
	@Column({ type: DataType.DATE })
	declare updatedAt: Date;

	@DeletedAt
	@Column({ type: DataType.DATE })
	@Index
	declare deletedAt: Date | null;
}
