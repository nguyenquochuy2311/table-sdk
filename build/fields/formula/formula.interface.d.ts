import { z } from 'zod';
import type { IFieldModel } from '../../models/field';
export declare enum FORMULA_CALC_DATATYPE {
    TEXT,
    NUMBER,
    DATE,
    BOOLEAN,
    CALCULATED_ARRAY = 1000,
    CALCULATED_NULL = 1001
}
export declare const FieldFormulaInitialDataValidator: z.ZodOptional<z.ZodNull>;
export declare const FieldFormulaParamsValidator: z.ZodObject<{
    value: z.ZodString;
    advanced: z.ZodOptional<z.ZodBoolean>;
    resultFormatType: z.ZodOptional<z.ZodAny>;
    resultFormatConfig: z.ZodOptional<z.ZodAny>;
    formulaFunction: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    value: string;
    advanced?: boolean | undefined;
    resultFormatType?: any;
    resultFormatConfig?: any;
    formulaFunction?: any;
}, {
    value: string;
    advanced?: boolean | undefined;
    resultFormatType?: any;
    resultFormatConfig?: any;
    formulaFunction?: any;
}>;
export declare const FieldFormulaValueValidator: z.ZodOptional<z.ZodUndefined>;
export type FormulaCalculatedType = {
    data: any;
    resultType: number | null;
    resultError?: any;
};
export declare const FormulaDataError: {
    readonly NAME: "#NAME?";
    readonly CALC: "#CALC!";
    readonly REF: "#REF!";
    readonly VALUE: "#VALUE!";
    readonly INFINITY: "#DIV/0!";
    readonly SYNTAX: "Syntax Error";
    readonly ERROR: "#ERROR!";
    readonly NA: "#N/A";
    readonly LOOP: "#LOOP";
    readonly INTERNAL: "#ERROR!!";
    readonly HAS_PENDING: "#Pending";
};
export type IFieldFormulaData = {
    calculated: FormulaCalculatedType;
};
export type IFieldFormulaInitialData = z.infer<typeof FieldFormulaInitialDataValidator>;
export type IFieldFormulaParams = z.infer<typeof FieldFormulaParamsValidator> & {
    _calculated?: IFieldFormulaData;
    _pendingFieldIDs?: string[];
};
export interface IFieldFormulaModel extends IFieldModel {
    params: IFieldFormulaParams;
    initialData: IFieldFormulaInitialData;
}
