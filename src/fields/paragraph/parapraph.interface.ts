import { z } from 'zod';
import type { IFieldModel } from '../../models';

export const FieldParagraphInitialDataValidator = z
	.object({
		text: z.string(),
		html: z.string().nullable().default(null),
		data: z.any().default(null),
	})
	.nullable()
	.default(null);
export const FieldParagraphParamsValidator = z
	.object({
		isRichTextFormatting: z.boolean().optional().default(false),
	})
	.default({
		isRichTextFormatting: false,
	});

export const FieldParagraphDataValidator = FieldParagraphInitialDataValidator;

export type IFieldParagraphData = z.infer<typeof FieldParagraphDataValidator>;
export type IFieldParagraphInitialData = z.infer<typeof FieldParagraphInitialDataValidator>;
export type IFieldParagraphParams = z.infer<typeof FieldParagraphParamsValidator>;

export interface IFieldParagraphModel extends IFieldModel {
	initialData: IFieldParagraphInitialData;
	params: IFieldParagraphParams;
}
