import { z } from 'zod';
import type { IFieldModel } from '../../models';

export const FieldCheckboxInitialDataValidator = z.boolean().default(false);
export const FieldCheckboxParams = z.undefined().nullable().default(null);

export const FieldCheckboxDataValidator = FieldCheckboxInitialDataValidator;

export type IFieldCheckboxData = z.infer<typeof FieldCheckboxDataValidator>;
export type IFieldCheckboxInitialData = z.infer<typeof FieldCheckboxInitialDataValidator>;
export type IFieldCheckboxParams = z.infer<typeof FieldCheckboxParams>;

export interface IFieldCheckboxModel extends IFieldModel {
	initialData: IFieldCheckboxInitialData;
	params: IFieldCheckboxParams;
}
