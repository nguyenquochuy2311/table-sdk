import type { IFieldModel } from '@/models/field';
import { z } from 'zod';

export enum FieldReferenceTwoWayLinkUpdateMode {
	CONVERT_ONE_WAY = 1,
	DELETE_REFERENCE,
}

export const FieldReferenceInitialDataValidator = z
	.object({
		value: z.array(z.string().ulid()).min(0),
		selected: z
			.array(
				z.object({
					id: z.string().ulid(),
					name: z.any(),
				}),
			)
			.min(0)
			.optional(),
	})
	.nullable()
	.default(null);

const ReferenceTwoWayLinkValidator = z
	.object({
		sourceReferenceID: z.string().ulid().optional(),
		updateMode: z.nativeEnum(FieldReferenceTwoWayLinkUpdateMode).optional(),
		isKeepTwoWay: z.boolean().optional(),
	})
	.nullable()
	.optional();

export const FieldReferenceParamsValidator = z.object({
	isMultipleSelect: z.boolean(),
	reference: z.object({
		boardID: z.string().ulid(),
		viewID: z.string().ulid().nullable().optional(),
	}),
	twoWayLink: ReferenceTwoWayLinkValidator,
});

export const FieldReferenceDataValidator = FieldReferenceInitialDataValidator;

export type IFieldReferenceParams = z.infer<typeof FieldReferenceParamsValidator> & {
	twoWayLink?: z.infer<typeof ReferenceTwoWayLinkValidator> & { _isSwitchTwoWaySameBoard?: boolean };
};
export type IFieldReferenceInitialData = z.infer<typeof FieldReferenceInitialDataValidator>;
export type IFieldReferenceData = z.infer<typeof FieldReferenceDataValidator>;

export interface IFieldReferenceModel extends IFieldModel {
	params: IFieldReferenceParams;
	initialData: IFieldReferenceInitialData;
}
