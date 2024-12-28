import type { FieldDataType } from '../../field_datatype';
import type { IFieldInitialData } from './field_initial_data';
import type { IFieldParams } from './field_params';

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
