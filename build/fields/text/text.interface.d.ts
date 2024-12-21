import { z } from 'zod';
import type { IFieldModel } from '../..//models/field';
export declare const FieldTextParamsValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    notAllowDuplicate: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    notAllowDuplicate: boolean | null;
}, {
    notAllowDuplicate?: boolean | null | undefined;
}>>>;
export declare const FieldTextInitialDataValidator: z.ZodDefault<z.ZodNullable<z.ZodString>>;
export declare const FieldTextDataValidator: z.ZodDefault<z.ZodNullable<z.ZodString>>;
export type IFieldTextParams = z.infer<typeof FieldTextParamsValidator>;
export type IFieldTextInitialData = z.infer<typeof FieldTextInitialDataValidator>;
export type IFieldTextData = z.infer<typeof FieldTextDataValidator>;
export interface IFieldTextModel extends IFieldModel {
    params: IFieldTextParams;
    initialData: IFieldTextInitialData;
}
