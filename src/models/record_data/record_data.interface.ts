import type { IFieldData } from '../field/field_data';

export type IRecordDataModel = {
	id: string;
	deletedAt: Date;
} & { [fieldID: string]: IFieldData };
