import { FieldDataType } from '../../field-datatype';
import { values } from 'lodash';
import { Column, CreatedAt, DataType, DeletedAt, Index, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { isValid, ulid } from 'ulidx';
import type { IFieldInitialData } from './field-initial-data';
import type { IFieldParams } from './field-params';
import type { IFieldModel } from './field.interface';

@Table({
	modelName: 'field',
	tableName: 'Fields',
	paranoid: true,
})
export class FieldModel extends Model implements IFieldModel {
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
	declare tableID: string;

	@Column({ type: DataType.STRING, allowNull: false })
	declare name: string;

	@Column({ type: DataType.TINYINT, allowNull: false, validate: { isIn: [values(FieldDataType)] } })
	declare dataType: FieldDataType;

	@Column({ type: DataType.JSON })
	declare params: IFieldParams;

	@Column({ type: DataType.JSON })
	declare initialData: IFieldInitialData;

	@Column({ type: DataType.STRING })
	declare description: string | null;

	@Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
	declare isRequired: boolean;

	@Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
	declare isPrimary: boolean;

	@Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
	declare isInvalid: boolean;

	@CreatedAt
	@Column({ allowNull: false })
	declare createdAt: Date;

	@UpdatedAt
	@Column({ allowNull: false })
	declare updatedAt: Date;

	@DeletedAt
	@Index
	@Column({ type: DataType.DATE })
	declare deletedAt: Date | null;
}
