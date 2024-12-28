import { z } from 'zod';
import type { IFieldModel } from '../../models';

export enum FieldDateFormatDisplayEnum {
	'DD_MM_YYYY' = 'DD/MM/YYYY',
	'DD_MM_YY' = 'DD/MM/YY',
	'YYYY_MM_DD' = 'YYYY/MM/DD',
	'YY_MM_DD' = 'YY/MM/DD',
	'DDDD#DD#MM#YYYY' = 'dddd, DD MMM, YYYY',
	'DD#MMMM#YYYY' = 'DD MMMM, YYYY',
	'DD#MMM#YYYY' = 'DD MMM, YYYY',
}

export enum FieldDateFormatHourEnum {
	NONE = 0,
	TWELVE_HOUR = 'hh:mm A',
	TWENTY_HOUR = 'HH:mm',
}

export const FieldCreatedTimeInitialDataValidator = z.null().optional();
export const FieldCreatedTimeParamsValidator = z
	.object({
		format: z.nativeEnum(FieldDateFormatDisplayEnum).default(FieldDateFormatDisplayEnum.DD_MM_YY),
		timeFormat: z.nativeEnum(FieldDateFormatHourEnum).default(FieldDateFormatHourEnum.NONE),
	})
	.default({
		format: FieldDateFormatDisplayEnum.DD_MM_YY,
		timeFormat: FieldDateFormatHourEnum.NONE,
	});

export const FieldCreatedTimeDataValidator = FieldCreatedTimeInitialDataValidator;

export type IFieldCreatedTimeData = z.infer<typeof FieldCreatedTimeDataValidator>;
export type IFieldCreatedTimeInitialData = z.infer<typeof FieldCreatedTimeInitialDataValidator>;
export type IFieldCreatedTimeParams = z.infer<typeof FieldCreatedTimeParamsValidator>;

export interface IFieldCreatedTimeModel extends IFieldModel {
	initialData: IFieldCreatedTimeInitialData;
	params: IFieldCreatedTimeParams;
}
