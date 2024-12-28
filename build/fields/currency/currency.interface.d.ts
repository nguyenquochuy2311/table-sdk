import { z } from 'zod';
import type { IFieldModel } from '../../models';
declare enum CurrencyDisplayFormat {
    COMMA = "commas-separator",
    THOUSAND = "thousand-unit"
}
export declare const FieldCurrencyInitialDataValidator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
export declare const FieldCurrencyParamsValidator: z.ZodDefault<z.ZodObject<{
    currency: z.ZodDefault<z.ZodNullable<z.ZodEnum<z.Writeable<any>>>>;
    decimalPlaces: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    format: z.ZodDefault<z.ZodNullable<z.ZodNativeEnum<typeof CurrencyDisplayFormat>>>;
    allowNegative: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    format: CurrencyDisplayFormat | null;
    decimalPlaces: number | null;
    allowNegative: boolean;
    currency?: any;
}, {
    format?: CurrencyDisplayFormat | null | undefined;
    decimalPlaces?: number | null | undefined;
    allowNegative?: boolean | undefined;
    currency?: any;
}>>;
export declare const FieldCurrencyDataValidator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
export type IFieldCurrencyData = z.infer<typeof FieldCurrencyDataValidator>;
export type IFieldCurrencyInitialData = z.infer<typeof FieldCurrencyInitialDataValidator>;
export type IFieldCurrencyParams = z.infer<typeof FieldCurrencyParamsValidator>;
export interface IFieldCurrencyModel extends IFieldModel {
    initialData: IFieldCurrencyInitialData;
    params: IFieldCurrencyParams;
}
export {};
