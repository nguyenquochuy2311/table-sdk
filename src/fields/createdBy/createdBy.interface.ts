import { z } from 'zod';
import type { IFieldModel } from '../../models';

export const FieldCreatedByInitialDataValidator = z.null().default(null);
export const FieldCreatedByParamsValidator = z.undefined().nullable().default(null);

export const FieldCreatedByDataValidator = FieldCreatedByInitialDataValidator;

export type IFieldCreatedByData = z.infer<typeof FieldCreatedByDataValidator>;
export type IFieldCreatedByInitialData = z.infer<typeof FieldCreatedByInitialDataValidator>;
export type IFieldCreatedByParams = z.infer<typeof FieldCreatedByParamsValidator>;

export interface IFieldCreatedByModel extends IFieldModel {
	initialData: IFieldCreatedByInitialData;
	params: IFieldCreatedByParams;
}
