import { z } from 'zod';
import type { IFieldModel } from '../../models';
declare const FieldDropdownParamsReferenceValidator: z.ZodObject<{
    isMultipleSelect: z.ZodBoolean;
    reference: z.ZodObject<{
        boardID: z.ZodString;
        fieldID: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        boardID: string;
        fieldID: string;
    }, {
        boardID: string;
        fieldID: string;
    }>;
}, "strip", z.ZodTypeAny, {
    isMultipleSelect: boolean;
    reference: {
        boardID: string;
        fieldID: string;
    };
}, {
    isMultipleSelect: boolean;
    reference: {
        boardID: string;
        fieldID: string;
    };
}>;
declare const OptionValidator: z.ZodObject<{
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    color: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    name: string | null;
    color: string;
}, {
    value: string;
    color: string;
    name?: string | null | undefined;
}>;
declare const FieldDropdownParamsOptionsValidator: z.ZodObject<{
    isMultipleSelect: z.ZodBoolean;
    allowAddSelections: z.ZodDefault<z.ZodBoolean>;
    options: z.ZodNullable<z.ZodArray<z.ZodObject<{
        name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        color: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string | null;
        color: string;
    }, {
        value: string;
        color: string;
        name?: string | null | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    options: {
        value: string;
        name: string | null;
        color: string;
    }[] | null;
    isMultipleSelect: boolean;
    allowAddSelections: boolean;
}, {
    options: {
        value: string;
        color: string;
        name?: string | null | undefined;
    }[] | null;
    isMultipleSelect: boolean;
    allowAddSelections?: boolean | undefined;
}>;
export declare const FieldDropdownInitialDataValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    value: z.ZodArray<z.ZodString, "many">;
    selected: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        color: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string | null;
        color: string;
    }, {
        value: string;
        color: string;
        name?: string | null | undefined;
    }>, "many">>;
    newOptions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        color: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string | null;
        color: string;
    }, {
        value: string;
        color: string;
        name?: string | null | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    value: string[];
    selected?: {
        value: string;
        name: string | null;
        color: string;
    }[] | undefined;
    newOptions?: {
        value: string;
        name: string | null;
        color: string;
    }[] | undefined;
}, {
    value: string[];
    selected?: {
        value: string;
        color: string;
        name?: string | null | undefined;
    }[] | undefined;
    newOptions?: {
        value: string;
        color: string;
        name?: string | null | undefined;
    }[] | undefined;
}>>>;
export declare const FieldDropdownParamsValidator: z.ZodDefault<z.ZodUnion<[z.ZodObject<{
    isMultipleSelect: z.ZodBoolean;
    reference: z.ZodObject<{
        boardID: z.ZodString;
        fieldID: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        boardID: string;
        fieldID: string;
    }, {
        boardID: string;
        fieldID: string;
    }>;
}, "strip", z.ZodTypeAny, {
    isMultipleSelect: boolean;
    reference: {
        boardID: string;
        fieldID: string;
    };
}, {
    isMultipleSelect: boolean;
    reference: {
        boardID: string;
        fieldID: string;
    };
}>, z.ZodObject<{
    isMultipleSelect: z.ZodBoolean;
    allowAddSelections: z.ZodDefault<z.ZodBoolean>;
    options: z.ZodNullable<z.ZodArray<z.ZodObject<{
        name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        color: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string | null;
        color: string;
    }, {
        value: string;
        color: string;
        name?: string | null | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    options: {
        value: string;
        name: string | null;
        color: string;
    }[] | null;
    isMultipleSelect: boolean;
    allowAddSelections: boolean;
}, {
    options: {
        value: string;
        color: string;
        name?: string | null | undefined;
    }[] | null;
    isMultipleSelect: boolean;
    allowAddSelections?: boolean | undefined;
}>]>>;
export declare const FieldDropdownDataValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    value: z.ZodArray<z.ZodString, "many">;
    selected: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        color: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string | null;
        color: string;
    }, {
        value: string;
        color: string;
        name?: string | null | undefined;
    }>, "many">>;
    newOptions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        color: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string | null;
        color: string;
    }, {
        value: string;
        color: string;
        name?: string | null | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    value: string[];
    selected?: {
        value: string;
        name: string | null;
        color: string;
    }[] | undefined;
    newOptions?: {
        value: string;
        name: string | null;
        color: string;
    }[] | undefined;
}, {
    value: string[];
    selected?: {
        value: string;
        color: string;
        name?: string | null | undefined;
    }[] | undefined;
    newOptions?: {
        value: string;
        color: string;
        name?: string | null | undefined;
    }[] | undefined;
}>>>;
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
export {};
