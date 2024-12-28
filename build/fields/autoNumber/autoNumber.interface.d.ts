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
    type: FieldAutoNumberParamsFormatType.NUMBER;
    value: number;
}, {
    type: FieldAutoNumberParamsFormatType.NUMBER;
    value: number;
}>, z.ZodObject<{
    type: z.ZodLiteral<FieldAutoNumberParamsFormatType.PREFIX_SUFFIX>;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: FieldAutoNumberParamsFormatType.PREFIX_SUFFIX;
    value: string;
}, {
    type: FieldAutoNumberParamsFormatType.PREFIX_SUFFIX;
    value: string;
}>]>;
export declare const FieldAutoNumberParamsValidator: z.ZodObject<{
    format: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<FieldAutoNumberParamsFormatType.NUMBER>;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: FieldAutoNumberParamsFormatType.NUMBER;
        value: number;
    }, {
        type: FieldAutoNumberParamsFormatType.NUMBER;
        value: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<FieldAutoNumberParamsFormatType.PREFIX_SUFFIX>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: FieldAutoNumberParamsFormatType.PREFIX_SUFFIX;
        value: string;
    }, {
        type: FieldAutoNumberParamsFormatType.PREFIX_SUFFIX;
        value: string;
    }>]>, "many">;
    reCalculate: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    format: ({
        type: FieldAutoNumberParamsFormatType.NUMBER;
        value: number;
    } | {
        type: FieldAutoNumberParamsFormatType.PREFIX_SUFFIX;
        value: string;
    })[];
    reCalculate?: boolean | undefined;
}, {
    format: ({
        type: FieldAutoNumberParamsFormatType.NUMBER;
        value: number;
    } | {
        type: FieldAutoNumberParamsFormatType.PREFIX_SUFFIX;
        value: string;
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
