import { z } from 'zod';
import type { IFieldModel } from '../../models';

export const FieldRatingInitialDataValidator = z.coerce.number().int().gte(1).lte(10).nullable().default(null);
export const FieldRatingParamsValidator = z
	.object({
		maxPoint: z.coerce.number().int().gte(1).lte(10),
	})
	.default({
		maxPoint: 5,
	});

export const FieldRatingDataValidator = FieldRatingInitialDataValidator;

export type IFieldRatingData = z.infer<typeof FieldRatingDataValidator>;
export type IFieldRatingInitialData = z.infer<typeof FieldRatingInitialDataValidator>;
export type IFieldRatingParams = z.infer<typeof FieldRatingParamsValidator>;

export interface IFieldRatingModel extends IFieldModel {
	initialData: IFieldRatingInitialData;
	params: IFieldRatingParams;
}
