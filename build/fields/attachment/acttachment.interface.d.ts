import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare const FieldAttachmentInitialDataValidator: z.ZodDefault<z.ZodNull>;
export declare const FieldAttachmentParamsValidator: z.ZodDefault<z.ZodNullable<z.ZodUndefined>>;
export declare const FieldAttachmentDataValidator: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodAny, "many">>>;
export type IFieldAttachmentData = z.infer<typeof FieldAttachmentDataValidator>;
export type IFieldAttachmentInitialData = z.infer<typeof FieldAttachmentInitialDataValidator>;
export type IFieldAttachmentParams = z.infer<typeof FieldAttachmentParamsValidator>;
export interface IFieldAttachmentModel extends IFieldModel {
    initialData: IFieldAttachmentInitialData;
    params: IFieldAttachmentParams;
}
