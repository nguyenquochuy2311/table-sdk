import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare const FieldLastModifiedByInitialDataValidator: z.ZodOptional<z.ZodNull>;
export declare const FieldLastModifiedByParamsValidator: z.ZodDefault<z.ZodObject<{
    targetFieldID: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    targetFieldID: string | null;
}, {
    targetFieldID: string | null;
}>>;
export declare const FieldLastModifiedByValueValidator: z.ZodOptional<z.ZodNull>;
export type IFieldLastModifiedByData = z.infer<typeof FieldLastModifiedByValueValidator>;
export type IFieldLastModifiedByInitialData = z.infer<typeof FieldLastModifiedByInitialDataValidator>;
export type IFieldLastModifiedByParams = z.infer<typeof FieldLastModifiedByParamsValidator>;
export interface IFieldLastModifiedByModel extends IFieldModel {
    initialData: IFieldLastModifiedByInitialData;
    params: IFieldLastModifiedByParams;
}
