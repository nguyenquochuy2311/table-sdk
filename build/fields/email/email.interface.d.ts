import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare const FieldEmailInitialDataValidator: z.ZodDefault<z.ZodNullable<z.ZodString>>;
export declare const FieldEmailParamsValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    notAllowDuplicate: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    notAllowDuplicate: boolean | null;
}, {
    notAllowDuplicate?: boolean | null | undefined;
}>>>;
export declare const FieldEmailDataValidator: z.ZodDefault<z.ZodNullable<z.ZodString>>;
export type IFieldEmailData = z.infer<typeof FieldEmailDataValidator>;
export type IFieldEmailInitialData = z.infer<typeof FieldEmailInitialDataValidator>;
export type IFieldEmailParams = z.infer<typeof FieldEmailParamsValidator>;
export interface IFieldEmailModel extends IFieldModel {
    initialData: IFieldEmailInitialData;
    params: IFieldEmailParams;
}
