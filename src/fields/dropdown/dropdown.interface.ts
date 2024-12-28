import { z } from 'zod';
import type { IFieldModel } from '../../models';

const FieldDropdownParamsReferenceValidator = z.object({
	isMultipleSelect: z.boolean(),
	reference: z.object({
		boardID: z.string().ulid(),
		fieldID: z.string().ulid(),
	}),
});
const OptionValidator = z.object({
	name: z.string().max(255).min(0).nullable().default(null),
	color: z.string().length(7),
	value: z.string().ulid(),
});
const FieldDropdownParamsOptionsValidator = z.object({
	isMultipleSelect: z.boolean(),
	allowAddSelections: z.boolean().default(false),
	options: z.array(OptionValidator).min(1).nullable(),
});

export const FieldDropdownInitialDataValidator = z
	.object({
		value: z.array(z.string().ulid()).min(1),
		selected: z.array(OptionValidator).min(1).optional(),
		newOptions: z.array(OptionValidator).optional(),
	})
	.nullable()
	.default(null);
export const FieldDropdownParamsValidator = z.union([FieldDropdownParamsReferenceValidator, FieldDropdownParamsOptionsValidator]).default({
	options: null,
	isMultipleSelect: true,
	allowAddSelections: false,
});

export const FieldDropdownDataValidator = FieldDropdownInitialDataValidator;

export type IFieldDropdownData = z.infer<typeof FieldDropdownDataValidator>;
export type IFieldDropdownInitialData = z.infer<typeof FieldDropdownInitialDataValidator>;
export type IFieldDropdownParams = z.infer<typeof FieldDropdownParamsValidator>;
export type IFieldDropdownParamsReferenceValidator = z.infer<typeof FieldDropdownParamsReferenceValidator>;
export type IFieldDropdownParamsOptionsValidator = z.infer<typeof FieldDropdownParamsOptionsValidator>;
export type IFieldDropdownOptions = z.infer<typeof OptionValidator>;

export interface IFieldDropdownModel extends IFieldModel {
	initialData: IFieldDropdownInitialData;
	params: IFieldDropdownParams;
}
