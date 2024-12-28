import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare const FieldCreatedByInitialDataValidator: z.ZodDefault<z.ZodNull>;
export declare const FieldCreatedByParamsValidator: z.ZodDefault<z.ZodNullable<z.ZodUndefined>>;
export declare const FieldCreatedByDataValidator: z.ZodDefault<z.ZodNull>;
export type IFieldCreatedByData = z.infer<typeof FieldCreatedByDataValidator>;
export type IFieldCreatedByInitialData = z.infer<typeof FieldCreatedByInitialDataValidator>;
export type IFieldCreatedByParams = z.infer<typeof FieldCreatedByParamsValidator>;
export interface IFieldCreatedByModel extends IFieldModel {
    initialData: IFieldCreatedByInitialData;
    params: IFieldCreatedByParams;
}
