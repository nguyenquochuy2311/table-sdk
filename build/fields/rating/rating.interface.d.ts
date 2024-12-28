import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare const FieldRatingInitialDataValidator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
export declare const FieldRatingParamsValidator: z.ZodDefault<z.ZodObject<{
    maxPoint: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    maxPoint: number;
}, {
    maxPoint: number;
}>>;
export declare const FieldRatingDataValidator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
export type IFieldRatingData = z.infer<typeof FieldRatingDataValidator>;
export type IFieldRatingInitialData = z.infer<typeof FieldRatingInitialDataValidator>;
export type IFieldRatingParams = z.infer<typeof FieldRatingParamsValidator>;
export interface IFieldRatingModel extends IFieldModel {
    initialData: IFieldRatingInitialData;
    params: IFieldRatingParams;
}
