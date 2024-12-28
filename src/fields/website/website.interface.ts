import { z } from 'zod';
import type { IFieldModel } from '../../models';

const urlRegex = new RegExp(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}[.]{0,1}(\/.*)?/);

export const FieldWebsiteInitialDataValidator = z
	.object({
		text: z.string().min(0).optional(),
		link: z.string().regex(urlRegex, 'Invalid URL!'),
	})
	.nullable()
	.default(null);
export const FieldWebsiteParamsValidator = z
	.object({
		notAllowDuplicate: z.boolean().nullable().default(false),
	})
	.nullable()
	.default(null);

export const FieldWebsiteDataValidator = FieldWebsiteInitialDataValidator;

export type IFieldWebsiteData = z.infer<typeof FieldWebsiteDataValidator>;
export type IFieldWebsiteInitialData = z.infer<typeof FieldWebsiteInitialDataValidator>;
export type IFieldWebsiteParams = z.infer<typeof FieldWebsiteParamsValidator>;

export interface IFieldWebsiteModel extends IFieldModel {
	initialData: IFieldWebsiteInitialData;
	params: IFieldWebsiteParams;
}
