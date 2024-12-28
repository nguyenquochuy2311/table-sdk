import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare enum FieldDateFormatDisplayEnum {
    'DD_MM_YYYY' = "DD/MM/YYYY",
    'DD_MM_YY' = "DD/MM/YY",
    'YYYY_MM_DD' = "YYYY/MM/DD",
    'YY_MM_DD' = "YY/MM/DD",
    'DDDD#DD#MM#YYYY' = "dddd, DD MMM, YYYY",
    'DD#MMMM#YYYY' = "DD MMMM, YYYY",
    'DD#MMM#YYYY' = "DD MMM, YYYY"
}
export declare enum FieldDateFormatHourEnum {
    NONE = 0,
    TWELVE_HOUR = "hh:mm A",
    TWENTY_HOUR = "HH:mm"
}
export declare const FieldCreatedTimeInitialDataValidator: z.ZodOptional<z.ZodNull>;
export declare const FieldCreatedTimeParamsValidator: z.ZodDefault<z.ZodObject<{
    format: z.ZodDefault<z.ZodNativeEnum<typeof FieldDateFormatDisplayEnum>>;
    timeFormat: z.ZodDefault<z.ZodNativeEnum<typeof FieldDateFormatHourEnum>>;
}, "strip", z.ZodTypeAny, {
    format: FieldDateFormatDisplayEnum;
    timeFormat: FieldDateFormatHourEnum;
}, {
    format?: FieldDateFormatDisplayEnum | undefined;
    timeFormat?: FieldDateFormatHourEnum | undefined;
}>>;
export declare const FieldCreatedTimeDataValidator: z.ZodOptional<z.ZodNull>;
export type IFieldCreatedTimeData = z.infer<typeof FieldCreatedTimeDataValidator>;
export type IFieldCreatedTimeInitialData = z.infer<typeof FieldCreatedTimeInitialDataValidator>;
export type IFieldCreatedTimeParams = z.infer<typeof FieldCreatedTimeParamsValidator>;
export interface IFieldCreatedTimeModel extends IFieldModel {
    initialData: IFieldCreatedTimeInitialData;
    params: IFieldCreatedTimeParams;
}
