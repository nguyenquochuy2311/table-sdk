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
export declare const FieldDateInitialDataValidator: z.ZodDefault<z.ZodNullable<z.ZodDate>>;
export declare const FieldDateParamsValidator: z.ZodDefault<z.ZodObject<{
    format: z.ZodDefault<z.ZodNativeEnum<typeof FieldDateFormatDisplayEnum>>;
    timeFormat: z.ZodDefault<z.ZodNativeEnum<typeof FieldDateFormatHourEnum>>;
}, "strip", z.ZodTypeAny, {
    format: FieldDateFormatDisplayEnum;
    timeFormat: FieldDateFormatHourEnum;
}, {
    format?: FieldDateFormatDisplayEnum | undefined;
    timeFormat?: FieldDateFormatHourEnum | undefined;
}>>;
export declare const FieldDateDataValidator: z.ZodDefault<z.ZodNullable<z.ZodDate>>;
export type IFieldDateData = z.infer<typeof FieldDateDataValidator>;
export type IFieldDateInitialData = z.infer<typeof FieldDateInitialDataValidator>;
export type IFieldDateParams = z.infer<typeof FieldDateParamsValidator>;
export interface IFieldDateModel extends IFieldModel {
    initialData: IFieldDateInitialData;
    params: IFieldDateParams;
}
export {};
