import { FieldDataType } from '@/field-datatype';
import type { IFieldModel } from '@/models/field';
import { z } from 'zod';

export enum FORMULA_CALC_DATATYPE {
	TEXT = FieldDataType.TEXT,
	NUMBER = FieldDataType.NUMBER,
	DATE = FieldDataType.DATE,
	BOOLEAN = FieldDataType.CHECKBOX,

	CALCULATED_ARRAY = 1000,
	CALCULATED_NULL = 1001,
}

export const FieldFormulaInitialDataValidator = z.null().optional();

export const FieldFormulaParamsValidator = z.object({
	value: z.string().trim(),
	advanced: z.boolean().optional(),
	resultFormatType: z.any().optional(),
	resultFormatConfig: z.any().optional(),
	formulaFunction: z.any().optional(),
});

export const FieldFormulaValueValidator = z.undefined().optional();

export type FormulaCalculatedType = { data: any; resultType: number | null; resultError?: any };

export const FormulaDataError = {
	NAME: '#NAME?',
	CALC: '#CALC!',
	REF: '#REF!',

	VALUE: '#VALUE!',
	INFINITY: '#DIV/0!',
	SYNTAX: 'Syntax Error',
	ERROR: '#ERROR!',

	NA: '#N/A',

	LOOP: '#LOOP',

	// internal error
	INTERNAL: '#ERROR!!',

	// for pending keys
	HAS_PENDING: '#Pending',
} as const;

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
