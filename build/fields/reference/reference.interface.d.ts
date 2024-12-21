import { z } from 'zod';
import type { IFieldModel } from '../../models/field';
export declare enum FieldReferenceTwoWayLinkUpdateMode {
    CONVERT_ONE_WAY = 1,
    DELETE_REFERENCE = 2
}
export declare const FieldReferenceInitialDataValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    value: z.ZodArray<z.ZodString, "many">;
    selected: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name?: any;
    }, {
        id: string;
        name?: any;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    value: string[];
    selected?: {
        id: string;
        name?: any;
    }[] | undefined;
}, {
    value: string[];
    selected?: {
        id: string;
        name?: any;
    }[] | undefined;
}>>>;
declare const ReferenceTwoWayLinkValidator: z.ZodOptional<z.ZodNullable<z.ZodObject<{
    sourceReferenceID: z.ZodOptional<z.ZodString>;
    updateMode: z.ZodOptional<z.ZodNativeEnum<typeof FieldReferenceTwoWayLinkUpdateMode>>;
    isKeepTwoWay: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    sourceReferenceID?: string | undefined;
    updateMode?: FieldReferenceTwoWayLinkUpdateMode | undefined;
    isKeepTwoWay?: boolean | undefined;
}, {
    sourceReferenceID?: string | undefined;
    updateMode?: FieldReferenceTwoWayLinkUpdateMode | undefined;
    isKeepTwoWay?: boolean | undefined;
}>>>;
export declare const FieldReferenceParamsValidator: z.ZodObject<{
    isMultipleSelect: z.ZodBoolean;
    reference: z.ZodObject<{
        boardID: z.ZodString;
        viewID: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        boardID: string;
        viewID?: string | null | undefined;
    }, {
        boardID: string;
        viewID?: string | null | undefined;
    }>;
    twoWayLink: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        sourceReferenceID: z.ZodOptional<z.ZodString>;
        updateMode: z.ZodOptional<z.ZodNativeEnum<typeof FieldReferenceTwoWayLinkUpdateMode>>;
        isKeepTwoWay: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        sourceReferenceID?: string | undefined;
        updateMode?: FieldReferenceTwoWayLinkUpdateMode | undefined;
        isKeepTwoWay?: boolean | undefined;
    }, {
        sourceReferenceID?: string | undefined;
        updateMode?: FieldReferenceTwoWayLinkUpdateMode | undefined;
        isKeepTwoWay?: boolean | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    isMultipleSelect: boolean;
    reference: {
        boardID: string;
        viewID?: string | null | undefined;
    };
    twoWayLink?: {
        sourceReferenceID?: string | undefined;
        updateMode?: FieldReferenceTwoWayLinkUpdateMode | undefined;
        isKeepTwoWay?: boolean | undefined;
    } | null | undefined;
}, {
    isMultipleSelect: boolean;
    reference: {
        boardID: string;
        viewID?: string | null | undefined;
    };
    twoWayLink?: {
        sourceReferenceID?: string | undefined;
        updateMode?: FieldReferenceTwoWayLinkUpdateMode | undefined;
        isKeepTwoWay?: boolean | undefined;
    } | null | undefined;
}>;
export declare const FieldReferenceDataValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    value: z.ZodArray<z.ZodString, "many">;
    selected: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name?: any;
    }, {
        id: string;
        name?: any;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    value: string[];
    selected?: {
        id: string;
        name?: any;
    }[] | undefined;
}, {
    value: string[];
    selected?: {
        id: string;
        name?: any;
    }[] | undefined;
}>>>;
export type IFieldReferenceParams = z.infer<typeof FieldReferenceParamsValidator> & {
    twoWayLink?: z.infer<typeof ReferenceTwoWayLinkValidator> & {
        _isSwitchTwoWaySameBoard?: boolean;
    };
};
export type IFieldReferenceInitialData = z.infer<typeof FieldReferenceInitialDataValidator>;
export type IFieldReferenceData = z.infer<typeof FieldReferenceDataValidator>;
export interface IFieldReferenceModel extends IFieldModel {
    params: IFieldReferenceParams;
    initialData: IFieldReferenceInitialData;
}
export {};
