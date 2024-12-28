import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare const FieldPhoneInitialDataValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    phone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    countryCode: z.ZodDefault<z.ZodNullable<z.ZodEnum<z.Writeable<any>>>>;
}, "strip", z.ZodTypeAny, {
    phone: string | null;
    countryCode?: any;
}, {
    countryCode?: any;
    phone?: string | null | undefined;
}>>>;
export declare const FieldPhoneParamsValidator: z.ZodDefault<z.ZodObject<{
    countryCode: z.ZodNullable<z.ZodEnum<z.Writeable<any>>>;
    notAllowDuplicate: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    notAllowDuplicate: boolean | null;
    countryCode?: any;
}, {
    notAllowDuplicate?: boolean | null | undefined;
    countryCode?: any;
}>>;
export declare const FieldPhoneDataValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    phone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    countryCode: z.ZodDefault<z.ZodNullable<z.ZodEnum<z.Writeable<any>>>>;
}, "strip", z.ZodTypeAny, {
    phone: string | null;
    countryCode?: any;
}, {
    countryCode?: any;
    phone?: string | null | undefined;
}>>>;
export type IFieldPhoneData = z.infer<typeof FieldPhoneDataValidator>;
export type IFieldPhoneInitialData = z.infer<typeof FieldPhoneInitialDataValidator>;
export type IFieldPhoneParams = z.infer<typeof FieldPhoneParamsValidator>;
export interface IFieldPhoneModel extends IFieldModel {
    initialData: IFieldPhoneInitialData;
    params: IFieldPhoneParams;
}
