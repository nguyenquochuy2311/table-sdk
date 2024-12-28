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

export const FieldLastModifiedTimeInitialDataValidator = z.null().optional();
export const FieldLastModifiedTimeParamsValidator = z
	.object({
		format: z.nativeEnum(FieldDateFormatDisplayEnum).default(FieldDateFormatDisplayEnum.DD_MM_YY),
		timeFormat: z.nativeEnum(FieldDateFormatHourEnum).default(FieldDateFormatHourEnum.NONE),
		targetFieldID: z.string().ulid().nullable(),
	})
	.default({
		format: FieldDateFormatDisplayEnum.DD_MM_YY,
		timeFormat: FieldDateFormatHourEnum.NONE,
		targetFieldID: null,
	});

export const FieldLastModifiedTimeDataValidator = FieldLastModifiedTimeInitialDataValidator;

export type IFieldLastModifiedTimeData = z.infer<typeof FieldLastModifiedTimeDataValidator>;
export type IFieldLastModifiedTimeInitialData = z.infer<typeof FieldLastModifiedTimeInitialDataValidator>;
export type IFieldLastModifiedTimeParams = z.infer<typeof FieldLastModifiedTimeParamsValidator>;

export interface IFieldLastModifiedTimeModel extends IFieldModel {
	initialData: IFieldLastModifiedTimeInitialData;
	params: IFieldLastModifiedTimeParams;
}
