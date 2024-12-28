import { z } from 'zod';
import type { IFieldModel } from '../../models';

export const FieldLastModifiedByInitialDataValidator = z.null().optional();
export const FieldLastModifiedByParamsValidator = z
	.object({
		targetFieldID: z.string().ulid().nullable(),
	})
	.default({
		targetFieldID: null,
	});

export const FieldLastModifiedByValueValidator = FieldLastModifiedByInitialDataValidator;

export type IFieldLastModifiedByData = z.infer<typeof FieldLastModifiedByValueValidator>;
export type IFieldLastModifiedByInitialData = z.infer<typeof FieldLastModifiedByInitialDataValidator>;
export type IFieldLastModifiedByParams = z.infer<typeof FieldLastModifiedByParamsValidator>;

export interface IFieldLastModifiedByModel extends IFieldModel {
	initialData: IFieldLastModifiedByInitialData;
	params: IFieldLastModifiedByParams;
}
