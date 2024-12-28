import { z } from 'zod';
import type { IFieldModel } from '../../models';

export const FieldProgressInitialDataValidator = z.number().min(0).nullable().default(null);
const FieldProgressAuto = z.object({
	isAuto: z.literal(true),
});
const FieldProgressManual = z.object({
	isAuto: z.literal(false).default(false),
	startValue: z.number().min(0),
	endValue: z.number().min(0),
});
export const FieldProgressParamsValidator = z.union([FieldProgressAuto, FieldProgressManual]).default({
	isAuto: false,
	startValue: 0,
	endValue: 1,
});

export const FieldProgressDataValidator = FieldProgressInitialDataValidator;

export type IFieldProgressData = z.infer<typeof FieldProgressDataValidator>;
export type IFieldProgressInitialData = z.infer<typeof FieldProgressInitialDataValidator>;
export type IFieldProgressParams = z.infer<typeof FieldProgressParamsValidator>;
export type IFieldProgressParamsManual = z.infer<typeof FieldProgressManual>;

export interface IFieldProgressModel extends IFieldModel {
	initialData: IFieldProgressInitialData;
	params: IFieldProgressParams;
}
