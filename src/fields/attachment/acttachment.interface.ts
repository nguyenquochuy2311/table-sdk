import { z } from 'zod';
import type { IFieldModel } from '../../models';

export const FieldAttachmentInitialDataValidator = z.null().default(null);
export const FieldAttachmentParamsValidator = z.undefined().nullable().default(null);

export const FieldAttachmentDataValidator = z.array(z.any()).min(1).nullable().default(null);

export type IFieldAttachmentData = z.infer<typeof FieldAttachmentDataValidator>;
export type IFieldAttachmentInitialData = z.infer<typeof FieldAttachmentInitialDataValidator>;
export type IFieldAttachmentParams = z.infer<typeof FieldAttachmentParamsValidator>;

export interface IFieldAttachmentModel extends IFieldModel {
	initialData: IFieldAttachmentInitialData;
	params: IFieldAttachmentParams;
}
