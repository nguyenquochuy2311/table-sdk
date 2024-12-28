import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare const FieldProgressInitialDataValidator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
declare const FieldProgressManual: z.ZodObject<{
    isAuto: z.ZodDefault<z.ZodLiteral<false>>;
    startValue: z.ZodNumber;
    endValue: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    isAuto: false;
    startValue: number;
    endValue: number;
}, {
    startValue: number;
    endValue: number;
    isAuto?: false | undefined;
}>;
export declare const FieldProgressParamsValidator: z.ZodDefault<z.ZodUnion<[z.ZodObject<{
    isAuto: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    isAuto: true;
}, {
    isAuto: true;
}>, z.ZodObject<{
    isAuto: z.ZodDefault<z.ZodLiteral<false>>;
    startValue: z.ZodNumber;
    endValue: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    isAuto: false;
    startValue: number;
    endValue: number;
}, {
    startValue: number;
    endValue: number;
    isAuto?: false | undefined;
}>]>>;
export declare const FieldProgressDataValidator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
export type IFieldProgressData = z.infer<typeof FieldProgressDataValidator>;
export type IFieldProgressInitialData = z.infer<typeof FieldProgressInitialDataValidator>;
export type IFieldProgressParams = z.infer<typeof FieldProgressParamsValidator>;
export type IFieldProgressParamsManual = z.infer<typeof FieldProgressManual>;
export interface IFieldProgressModel extends IFieldModel {
    initialData: IFieldProgressInitialData;
    params: IFieldProgressParams;
}
export {};
