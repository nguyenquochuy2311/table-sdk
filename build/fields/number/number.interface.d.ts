import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare enum NumberFormatEnum {
    COMMA = "commas-separator",
    THOUSAND = "thousand-unit",
    HUNDRED = "percent"
}
export declare const FieldNumberInitialDataValidator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
export declare const FieldNumberParamsValidator: z.ZodDefault<z.ZodObject<{
    format: z.ZodDefault<z.ZodNullable<z.ZodNativeEnum<typeof NumberFormatEnum>>>;
    decimalPlaces: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    allowNegative: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    format: NumberFormatEnum | null;
    decimalPlaces: number | null;
    allowNegative: boolean;
}, {
    format?: NumberFormatEnum | null | undefined;
    decimalPlaces?: number | null | undefined;
    allowNegative?: boolean | undefined;
}>>;
export declare const FieldNumberDataValidator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
export type IFieldNumberData = z.infer<typeof FieldNumberDataValidator>;
export type IFieldNumberInitialData = z.infer<typeof FieldNumberInitialDataValidator>;
export type IFieldNumberParams = z.infer<typeof FieldNumberParamsValidator>;
export interface IFieldNumberModel extends IFieldModel {
    initialData: IFieldNumberInitialData;
    params: IFieldNumberParams;
}
