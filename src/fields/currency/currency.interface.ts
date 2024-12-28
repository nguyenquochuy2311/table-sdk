import { map } from 'lodash';
import { z } from 'zod';
import type { IFieldModel } from '../../models';
import { CURRENCIES } from './currency.constant';

enum CurrencyDisplayFormat {
	COMMA = 'commas-separator',
	THOUSAND = 'thousand-unit',
}

export const FieldCurrencyInitialDataValidator = z.number().nullable().default(null);
export const FieldCurrencyParamsValidator = z
	.object({
		currency: z
			.enum(map(CURRENCIES, 'symbol') as any)
			.nullable()
			.default(null),
		decimalPlaces: z.coerce.number().int().gte(0).lte(6).nullable().default(null),
		format: z.nativeEnum(CurrencyDisplayFormat).nullable().default(null),
		allowNegative: z.boolean().default(false),
	})
	.default({
		currency: null,
		decimalPlaces: null,
		format: null,
		allowNegative: false,
	});

export const FieldCurrencyDataValidator = FieldCurrencyInitialDataValidator;

export type IFieldCurrencyData = z.infer<typeof FieldCurrencyDataValidator>;
export type IFieldCurrencyInitialData = z.infer<typeof FieldCurrencyInitialDataValidator>;
export type IFieldCurrencyParams = z.infer<typeof FieldCurrencyParamsValidator>;

export interface IFieldCurrencyModel extends IFieldModel {
	initialData: IFieldCurrencyInitialData;
	params: IFieldCurrencyParams;
}
