import type { FieldDataType } from '../../field-datatype';
import type { IFieldInitialData } from './field-initial-data';
import type { IFieldParams } from './field-params';

export interface IFieldModel {
	id: string;
	tableID: string;
	name: string;
	dataType: FieldDataType;
	params: IFieldParams;
	initialData: IFieldInitialData;
	isPrimary: boolean;
	isRequired: boolean;
	isInvalid: boolean;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date | null;
}
