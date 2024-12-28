import { z } from 'zod';
import type { IFieldModel } from '../../models';

export enum FieldAutoNumberParamsFormatType {
	NUMBER = 1,
	PREFIX_SUFFIX,
	FIELD_VALUE,
}

export const FieldAutoNumberInitialDataValidator = z.undefined();

export const FieldAutoNumberParamsFormatValidator = z.union([
	z.object({
		type: z.literal(FieldAutoNumberParamsFormatType.NUMBER),
		value: z.number().max(9).min(1),
	}),
	z.object({
		type: z.literal(FieldAutoNumberParamsFormatType.PREFIX_SUFFIX),
		value: z.string().min(1).max(18),
	}),
]);

export const FieldAutoNumberParamsValidator = z.object({
	format: z.array(FieldAutoNumberParamsFormatValidator).min(1),
	reCalculate: z.boolean().optional(),
});

export const FieldAutoNumberDataValidator = FieldAutoNumberInitialDataValidator;

export type IFieldAutoNumberData = z.infer<typeof FieldAutoNumberDataValidator>;
export type IFieldAutoNumberInitialData = z.infer<typeof FieldAutoNumberInitialDataValidator>;
export type IFieldAutoNumberParams = z.infer<typeof FieldAutoNumberParamsValidator>;

export interface IFieldAutoNumberModel extends IFieldModel {
	params: IFieldAutoNumberParams;
	initialData: IFieldAutoNumberInitialData;
}
