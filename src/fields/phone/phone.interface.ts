import { map } from 'lodash';
import { z } from 'zod';
import type { IFieldModel } from '../../models';
import { DEFAULT_COUNTRY_CODE, PHONE_COUNTRIES } from './phone_countries';

const phoneRegex = new RegExp(/^[0-9()\-+ ]*$/);

export const FieldPhoneInitialDataValidator = z
	.object({
		phone: z.string().regex(phoneRegex, 'Invalid Number!').nullable().default(null),
		countryCode: z
			.enum(map(PHONE_COUNTRIES, 'code') as any)
			.nullable()
			.default(null),
	})
	.nullable()
	.default(null);
export const FieldPhoneParamsValidator = z
	.object({
		countryCode: z.enum(map(PHONE_COUNTRIES, 'code') as any).nullable(),
		notAllowDuplicate: z.boolean().nullable().default(false),
	})
	.default({
		countryCode: DEFAULT_COUNTRY_CODE,
	});

export const FieldPhoneDataValidator = FieldPhoneInitialDataValidator;

export type IFieldPhoneData = z.infer<typeof FieldPhoneDataValidator>;
export type IFieldPhoneInitialData = z.infer<typeof FieldPhoneInitialDataValidator>;
export type IFieldPhoneParams = z.infer<typeof FieldPhoneParamsValidator>;

export interface IFieldPhoneModel extends IFieldModel {
	initialData: IFieldPhoneInitialData;
	params: IFieldPhoneParams;
}
