import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare enum FieldAutoNumberParamsFormatType {
    NUMBER = 1,
    PREFIX_SUFFIX = 2,
    FIELD_VALUE = 3
}
export declare const FieldAutoNumberInitialDataValidator: z.ZodUndefined;
export declare const FieldAutoNumberParamsFormatValidator: z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<FieldAutoNumberParamsFormatType.NUMBER>;
    value: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    value: number;
    type: FieldAutoNumberParamsFormatType.NUMBER;
}, {
    value: number;
    type: FieldAutoNumberParamsFormatType.NUMBER;
}>, z.ZodObject<{
    type: z.ZodLiteral<FieldAutoNumberParamsFormatType.PREFIX_SUFFIX>;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    type: FieldAutoNumberParamsFormatType.PREFIX_SUFFIX;
}, {
    value: string;
    type: FieldAutoNumberParamsFormatType.PREFIX_SUFFIX;
}>]>;
export declare const FieldAutoNumberParamsValidator: z.ZodObject<{
    format: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<FieldAutoNumberParamsFormatType.NUMBER>;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        type: FieldAutoNumberParamsFormatType.NUMBER;
    }, {
        value: number;
        type: FieldAutoNumberParamsFormatType.NUMBER;
    }>, z.ZodObject<{
        type: z.ZodLiteral<FieldAutoNumberParamsFormatType.PREFIX_SUFFIX>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: FieldAutoNumberParamsFormatType.PREFIX_SUFFIX;
    }, {
        value: string;
        type: FieldAutoNumberParamsFormatType.PREFIX_SUFFIX;
    }>]>, "many">;
    reCalculate: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    format: ({
        value: number;
        type: FieldAutoNumberParamsFormatType.NUMBER;
    } | {
        value: string;
        type: FieldAutoNumberParamsFormatType.PREFIX_SUFFIX;
    })[];
    reCalculate?: boolean | undefined;
}, {
    format: ({
        value: number;
        type: FieldAutoNumberParamsFormatType.NUMBER;
    } | {
        value: string;
        type: FieldAutoNumberParamsFormatType.PREFIX_SUFFIX;
    })[];
    reCalculate?: boolean | undefined;
}>;
export declare const FieldAutoNumberDataValidator: z.ZodUndefined;
export type IFieldAutoNumberData = z.infer<typeof FieldAutoNumberDataValidator>;
export type IFieldAutoNumberInitialData = z.infer<typeof FieldAutoNumberInitialDataValidator>;
export type IFieldAutoNumberParams = z.infer<typeof FieldAutoNumberParamsValidator>;
export interface IFieldAutoNumberModel extends IFieldModel {
    params: IFieldAutoNumberParams;
    initialData: IFieldAutoNumberInitialData;
}
