import { z } from 'zod';
import type { IFieldModel } from '../../models';

enum FieldDateFormatDisplayEnum {
	'DD_MM_YYYY' = 'DD/MM/YYYY',
	'DD_MM_YY' = 'DD/MM/YY',
	'YYYY_MM_DD' = 'YYYY/MM/DD',
	'YY_MM_DD' = 'YY/MM/DD',
	'DDDD#DD#MM#YYYY' = 'dddd, DD MMM, YYYY',
	'DD#MMMM#YYYY' = 'DD MMMM, YYYY',
	'DD#MMM#YYYY' = 'DD MMM, YYYY',
}

enum FieldDateFormatHourEnum {
	NONE = 0,
	TWELVE_HOUR = 'hh:mm A',
	TWENTY_HOUR = 'HH:mm',
}

export const FieldDateInitialDataValidator = z.coerce.date().nullable().default(null);
export const FieldDateParamsValidator = z
	.object({
		format: z.nativeEnum(FieldDateFormatDisplayEnum).default(FieldDateFormatDisplayEnum.DD_MM_YY),
		timeFormat: z.nativeEnum(FieldDateFormatHourEnum).default(FieldDateFormatHourEnum.NONE),
	})
	.default({
		format: FieldDateFormatDisplayEnum.DD_MM_YY,
		timeFormat: FieldDateFormatHourEnum.NONE,
	});

export const FieldDateDataValidator = FieldDateInitialDataValidator;

export type IFieldDateData = z.infer<typeof FieldDateDataValidator>;
export type IFieldDateInitialData = z.infer<typeof FieldDateInitialDataValidator>;
export type IFieldDateParams = z.infer<typeof FieldDateParamsValidator>;

export interface IFieldDateModel extends IFieldModel {
	initialData: IFieldDateInitialData;
	params: IFieldDateParams;
}
