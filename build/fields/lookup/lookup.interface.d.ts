import { z } from 'zod';
import type { IFieldModel } from '../../models/field';
export declare enum CalculationType {
    CountAll = "count-all",
    CountValues = "count-values",
    CountUnique = "count-unique",
    CountEmpty = "count-empty",
    CountNotEmpty = "count-not-empty",
    Sum = "sum",
    Average = "average",
    Min = "min",
    Max = "max",
    Med = "med",
    Range = "range",
    CountChecked = "count-checked",
    CountUnchecked = "count-unchecked",
    DayRange = "day-range",
    MonthRange = "month-range",
    EarliestDate = "earliest-date",
    LatestDate = "latest-date",
    NotApply = "not-apply"
}
export declare enum CONDITION_OPERATOR {
    IS_EMPTY = 1,
    IS_NOT_EMPTY = 2,
    IS_BETWEEN = 3,
    IS_NOT_BETWEEN = 4,
    IS_EXACTLY = 5,
    IS_NOT_EXACTLY = 6,
    IS_BEFORE = 7,
    IS_AFTER = 8,
    CONTAINS = 9,
    DOES_NOT_CONTAINS = 10,
    STARTS_WITH = 11,
    ENDS_WITH = 12,
    WORD_COUNT_GREATER_THAN = 13,
    WORD_COUNT_GREATER_THAN_OR_EQUAL = 14,
    WORD_COUNT_LESS_THAN = 15,
    WORD_COUNT_LESS_THAN_OR_EQUAL = 16,
    WORD_COUNT_EQUAL = 17,
    IN = 18,
    NOT_IN = 19,
    GREATER_THAN = 20,
    GREATER_THAN_OR_EQUAL = 21,
    LESS_THAN = 22,
    LESS_THAN_OR_EQUAL = 23,
    COMPARE_TODAY = 24,
    CURRENT_VIEWER = 25,
    ANY = 26
}
export declare const LOOKUP_CALC_DATATYPE: {
    NULL: null;
    DATE: 7;
    NUMBER: 6;
};
export declare enum LOOKUP_FILTER_VALUE_TYPE {
    CUSTOM = 1,
    OTHER_FIELD = 2,
    OTHER_BOARD = 3
}
export declare enum LOGICAL_OPERATOR {
    AND = 1,
    OR = 2,
    CUSTOM = 3
}
export declare const LOOKUP_CALC_ERROR: {
    LOOP: string;
    ERROR: string;
};
export declare const LOOKUP_SELECTED_ARRANGE: {
    FIRST: number;
    LAST: number;
};
export declare const LOOKUP_MAX_FIND_RECORD = 20;
export declare const conditionLookupValidator: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    fieldID: z.ZodString;
    order: z.ZodNumber;
    operator: z.ZodOptional<z.ZodNativeEnum<typeof CONDITION_OPERATOR>>;
    type: z.ZodOptional<z.ZodNativeEnum<typeof LOOKUP_FILTER_VALUE_TYPE>>;
    data: z.ZodAny;
    field: z.ZodAny;
    error: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    fieldID: string;
    order: number;
    id?: string | undefined;
    operator?: CONDITION_OPERATOR | undefined;
    type?: LOOKUP_FILTER_VALUE_TYPE | undefined;
    data?: any;
    field?: any;
    error?: any;
}, {
    fieldID: string;
    order: number;
    id?: string | undefined;
    operator?: CONDITION_OPERATOR | undefined;
    type?: LOOKUP_FILTER_VALUE_TYPE | undefined;
    data?: any;
    field?: any;
    error?: any;
}>;
export declare const FieldLookupInitialDataValidator: z.ZodOptional<z.ZodNull>;
export declare const FieldLookupParamsValidator: z.ZodObject<{
    lookup: z.ZodObject<{
        customSelectedAmount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        arrangeSelectedData: z.ZodDefault<z.ZodNullable<z.ZodNativeEnum<{
            FIRST: number;
            LAST: number;
        }>>>;
        sourceBoardID: z.ZodString;
        sourceFieldID: z.ZodString;
        sourceFieldDataType: z.ZodOptional<z.ZodNumber>;
        sourceFieldParams: z.ZodOptional<z.ZodAny>;
        format: z.ZodOptional<z.ZodAny>;
        operator: z.ZodDefault<z.ZodNativeEnum<typeof CalculationType>>;
        filter: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            options: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                fieldID: z.ZodString;
                order: z.ZodNumber;
                operator: z.ZodOptional<z.ZodNativeEnum<typeof CONDITION_OPERATOR>>;
                type: z.ZodOptional<z.ZodNativeEnum<typeof LOOKUP_FILTER_VALUE_TYPE>>;
                data: z.ZodAny;
                field: z.ZodAny;
                error: z.ZodAny;
            }, "strip", z.ZodTypeAny, {
                fieldID: string;
                order: number;
                id?: string | undefined;
                operator?: CONDITION_OPERATOR | undefined;
                type?: LOOKUP_FILTER_VALUE_TYPE | undefined;
                data?: any;
                field?: any;
                error?: any;
            }, {
                fieldID: string;
                order: number;
                id?: string | undefined;
                operator?: CONDITION_OPERATOR | undefined;
                type?: LOOKUP_FILTER_VALUE_TYPE | undefined;
                data?: any;
                field?: any;
                error?: any;
            }>, "many">;
            conditions: z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"and">, z.ZodLiteral<"or">]>, z.ZodArray<z.ZodUnion<[z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                fieldID: z.ZodString;
                order: z.ZodNumber;
                operator: z.ZodOptional<z.ZodNativeEnum<typeof CONDITION_OPERATOR>>;
                type: z.ZodOptional<z.ZodNativeEnum<typeof LOOKUP_FILTER_VALUE_TYPE>>;
                data: z.ZodAny;
                field: z.ZodAny;
                error: z.ZodAny;
            }, "strip", z.ZodTypeAny, {
                fieldID: string;
                order: number;
                id?: string | undefined;
                operator?: CONDITION_OPERATOR | undefined;
                type?: LOOKUP_FILTER_VALUE_TYPE | undefined;
                data?: any;
                field?: any;
                error?: any;
            }, {
                fieldID: string;
                order: number;
                id?: string | undefined;
                operator?: CONDITION_OPERATOR | undefined;
                type?: LOOKUP_FILTER_VALUE_TYPE | undefined;
                data?: any;
                field?: any;
                error?: any;
            }>, z.ZodAny]>, "many">>;
            logicalOperator: z.ZodNativeEnum<typeof LOGICAL_OPERATOR>;
            logicalExpression: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            options: {
                fieldID: string;
                order: number;
                id?: string | undefined;
                operator?: CONDITION_OPERATOR | undefined;
                type?: LOOKUP_FILTER_VALUE_TYPE | undefined;
                data?: any;
                field?: any;
                error?: any;
            }[];
            conditions: Partial<Record<"and" | "or", any[]>>;
            logicalOperator: LOGICAL_OPERATOR;
            logicalExpression?: string | undefined;
        }, {
            options: {
                fieldID: string;
                order: number;
                id?: string | undefined;
                operator?: CONDITION_OPERATOR | undefined;
                type?: LOOKUP_FILTER_VALUE_TYPE | undefined;
                data?: any;
                field?: any;
                error?: any;
            }[];
            conditions: Partial<Record<"and" | "or", any[]>>;
            logicalOperator: LOGICAL_OPERATOR;
            logicalExpression?: string | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        operator: CalculationType;
        customSelectedAmount: number | null;
        arrangeSelectedData: number | null;
        sourceBoardID: string;
        sourceFieldID: string;
        filter?: {
            options: {
                fieldID: string;
                order: number;
                id?: string | undefined;
                operator?: CONDITION_OPERATOR | undefined;
                type?: LOOKUP_FILTER_VALUE_TYPE | undefined;
                data?: any;
                field?: any;
                error?: any;
            }[];
            conditions: Partial<Record<"and" | "or", any[]>>;
            logicalOperator: LOGICAL_OPERATOR;
            logicalExpression?: string | undefined;
        } | null | undefined;
        sourceFieldDataType?: number | undefined;
        sourceFieldParams?: any;
        format?: any;
    }, {
        sourceBoardID: string;
        sourceFieldID: string;
        operator?: CalculationType | undefined;
        filter?: {
            options: {
                fieldID: string;
                order: number;
                id?: string | undefined;
                operator?: CONDITION_OPERATOR | undefined;
                type?: LOOKUP_FILTER_VALUE_TYPE | undefined;
                data?: any;
                field?: any;
                error?: any;
            }[];
            conditions: Partial<Record<"and" | "or", any[]>>;
            logicalOperator: LOGICAL_OPERATOR;
            logicalExpression?: string | undefined;
        } | null | undefined;
        customSelectedAmount?: number | null | undefined;
        arrangeSelectedData?: number | null | undefined;
        sourceFieldDataType?: number | undefined;
        sourceFieldParams?: any;
        format?: any;
    }>;
}, "strip", z.ZodTypeAny, {
    lookup: {
        operator: CalculationType;
        customSelectedAmount: number | null;
        arrangeSelectedData: number | null;
        sourceBoardID: string;
        sourceFieldID: string;
        filter?: {
            options: {
                fieldID: string;
                order: number;
                id?: string | undefined;
                operator?: CONDITION_OPERATOR | undefined;
                type?: LOOKUP_FILTER_VALUE_TYPE | undefined;
                data?: any;
                field?: any;
                error?: any;
            }[];
            conditions: Partial<Record<"and" | "or", any[]>>;
            logicalOperator: LOGICAL_OPERATOR;
            logicalExpression?: string | undefined;
        } | null | undefined;
        sourceFieldDataType?: number | undefined;
        sourceFieldParams?: any;
        format?: any;
    };
}, {
    lookup: {
        sourceBoardID: string;
        sourceFieldID: string;
        operator?: CalculationType | undefined;
        filter?: {
            options: {
                fieldID: string;
                order: number;
                id?: string | undefined;
                operator?: CONDITION_OPERATOR | undefined;
                type?: LOOKUP_FILTER_VALUE_TYPE | undefined;
                data?: any;
                field?: any;
                error?: any;
            }[];
            conditions: Partial<Record<"and" | "or", any[]>>;
            logicalOperator: LOGICAL_OPERATOR;
            logicalExpression?: string | undefined;
        } | null | undefined;
        customSelectedAmount?: number | null | undefined;
        arrangeSelectedData?: number | null | undefined;
        sourceFieldDataType?: number | undefined;
        sourceFieldParams?: any;
        format?: any;
    };
}>;
export declare const FieldLookupDataValidator: z.ZodOptional<z.ZodNull>;
export type IConditionLookupDataValidator = z.infer<typeof conditionLookupValidator>;
export type IFieldLookupParams = z.infer<typeof FieldLookupParamsValidator> & {
    isCalculating?: boolean;
};
export type IFieldLookupInitialData = z.infer<typeof FieldLookupInitialDataValidator>;
export type IFieldLookupData = z.infer<typeof FieldLookupDataValidator>;
export interface IFieldLookupModel extends IFieldModel {
    params: IFieldLookupParams;
    initialData: IFieldLookupInitialData;
}
