import { z } from 'zod';
import type { IFieldModel } from '../../models/field';

export const FieldTextParamsValidator = z
	.object({
		notAllowDuplicate: z.boolean().nullable().default(false),
	})
	.nullable()
	.default(null);

export const FieldTextInitialDataValidator = z.string().nullable().default(null);
export const FieldTextDataValidator = FieldTextInitialDataValidator;

export type IFieldTextParams = z.infer<typeof FieldTextParamsValidator>;
export type IFieldTextInitialData = z.infer<typeof FieldTextInitialDataValidator>;
export type IFieldTextData = z.infer<typeof FieldTextDataValidator>;

export interface IFieldTextModel extends IFieldModel {
	params: IFieldTextParams;
	initialData: IFieldTextInitialData;
}
