import { z } from 'zod';
import type { IFieldModel } from '../../models';

export enum NumberFormatEnum {
	COMMA = 'commas-separator',
	THOUSAND = 'thousand-unit',
	HUNDRED = 'percent',
}

export const FieldNumberInitialDataValidator = z.number().nullable().default(null);
export const FieldNumberParamsValidator = z
	.object({
		format: z.nativeEnum(NumberFormatEnum).nullable().default(null),
		decimalPlaces: z.coerce.number().int().gte(0).lte(6).nullable().default(null),
		allowNegative: z.boolean().default(false),
	})
	.default({
		format: null,
		decimalPlaces: null,
		allowNegative: false,
	});

export const FieldNumberDataValidator = FieldNumberInitialDataValidator;

export type IFieldNumberData = z.infer<typeof FieldNumberDataValidator>;
export type IFieldNumberInitialData = z.infer<typeof FieldNumberInitialDataValidator>;
export type IFieldNumberParams = z.infer<typeof FieldNumberParamsValidator>;

export interface IFieldNumberModel extends IFieldModel {
	initialData: IFieldNumberInitialData;
	params: IFieldNumberParams;
}
