import { z } from 'zod';
import type { IFieldModel } from '../../models';
declare enum FieldDateFormatDisplayEnum {
    'DD_MM_YYYY' = "DD/MM/YYYY",
    'DD_MM_YY' = "DD/MM/YY",
    'YYYY_MM_DD' = "YYYY/MM/DD",
    'YY_MM_DD' = "YY/MM/DD",
    'DDDD#DD#MM#YYYY' = "dddd, DD MMM, YYYY",
    'DD#MMMM#YYYY' = "DD MMMM, YYYY",
    'DD#MMM#YYYY' = "DD MMM, YYYY"
}
declare enum FieldDateFormatHourEnum {
    NONE = 0,
    TWELVE_HOUR = "hh:mm A",
    TWENTY_HOUR = "HH:mm"
}
export declare const FieldLastModifiedTimeInitialDataValidator: z.ZodOptional<z.ZodNull>;
export declare const FieldLastModifiedTimeParamsValidator: z.ZodDefault<z.ZodObject<{
    format: z.ZodDefault<z.ZodNativeEnum<typeof FieldDateFormatDisplayEnum>>;
    timeFormat: z.ZodDefault<z.ZodNativeEnum<typeof FieldDateFormatHourEnum>>;
    targetFieldID: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    format: FieldDateFormatDisplayEnum;
    timeFormat: FieldDateFormatHourEnum;
    targetFieldID: string | null;
}, {
    targetFieldID: string | null;
    format?: FieldDateFormatDisplayEnum | undefined;
    timeFormat?: FieldDateFormatHourEnum | undefined;
}>>;
export declare const FieldLastModifiedTimeDataValidator: z.ZodOptional<z.ZodNull>;
export type IFieldLastModifiedTimeData = z.infer<typeof FieldLastModifiedTimeDataValidator>;
export type IFieldLastModifiedTimeInitialData = z.infer<typeof FieldLastModifiedTimeInitialDataValidator>;
export type IFieldLastModifiedTimeParams = z.infer<typeof FieldLastModifiedTimeParamsValidator>;
export interface IFieldLastModifiedTimeModel extends IFieldModel {
    initialData: IFieldLastModifiedTimeInitialData;
    params: IFieldLastModifiedTimeParams;
}
export {};
