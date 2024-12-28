import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare const FieldCheckboxInitialDataValidator: z.ZodDefault<z.ZodBoolean>;
export declare const FieldCheckboxParams: z.ZodDefault<z.ZodNullable<z.ZodUndefined>>;
export declare const FieldCheckboxDataValidator: z.ZodDefault<z.ZodBoolean>;
export type IFieldCheckboxData = z.infer<typeof FieldCheckboxDataValidator>;
export type IFieldCheckboxInitialData = z.infer<typeof FieldCheckboxInitialDataValidator>;
export type IFieldCheckboxParams = z.infer<typeof FieldCheckboxParams>;
export interface IFieldCheckboxModel extends IFieldModel {
    initialData: IFieldCheckboxInitialData;
    params: IFieldCheckboxParams;
}
