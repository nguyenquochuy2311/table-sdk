import type { IFieldData } from '../field/field-data';

export type IRecordDataModel = {
	id: string;
	deletedAt: Date;
} & { [fieldID: string]: IFieldData };
