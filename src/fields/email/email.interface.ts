import { z } from 'zod';
import type { IFieldModel } from '../../models';

const emailRegex = new RegExp(
	/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
);

export const FieldEmailInitialDataValidator = z.string().regex(emailRegex, 'Invalid Email!').nullable().default(null);
export const FieldEmailParamsValidator = z
	.object({
		notAllowDuplicate: z.boolean().nullable().default(false),
	})
	.nullable()
	.default(null);

export const FieldEmailDataValidator = FieldEmailInitialDataValidator;

export type IFieldEmailData = z.infer<typeof FieldEmailDataValidator>;
export type IFieldEmailInitialData = z.infer<typeof FieldEmailInitialDataValidator>;
export type IFieldEmailParams = z.infer<typeof FieldEmailParamsValidator>;

export interface IFieldEmailModel extends IFieldModel {
	initialData: IFieldEmailInitialData;
	params: IFieldEmailParams;
}
