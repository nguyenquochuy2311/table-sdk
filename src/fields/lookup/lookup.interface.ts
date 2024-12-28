import { z } from 'zod';
import { FieldDataType } from '../../field_datatype';
import type { IFieldModel } from '../../models/field';

export enum CalculationType {
	CountAll = 'count-all',
	CountValues = 'count-values',
	CountUnique = 'count-unique',
	CountEmpty = 'count-empty',
	CountNotEmpty = 'count-not-empty',
	Sum = 'sum',
	Average = 'average',
	Min = 'min',
	Max = 'max',
	Med = 'med',
	Range = 'range',
	CountChecked = 'count-checked',
	CountUnchecked = 'count-unchecked',
	DayRange = 'day-range',
	MonthRange = 'month-range',
	EarliestDate = 'earliest-date',
	LatestDate = 'latest-date',
	NotApply = 'not-apply',
}

export enum CONDITION_OPERATOR {
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
	ANY = 26,
}

export const LOOKUP_CALC_DATATYPE = {
	NULL: null,
	DATE: FieldDataType.DATE,
	NUMBER: FieldDataType.NUMBER,
};

export enum LOOKUP_FILTER_VALUE_TYPE {
	CUSTOM = 1,
	OTHER_FIELD = 2,
	OTHER_BOARD = 3,
}

export enum LOGICAL_OPERATOR {
	AND = 1,
	OR = 2,
	CUSTOM = 3,
}

export const LOOKUP_CALC_ERROR = {
	LOOP: '#LOOP',
	ERROR: '#ERROR',
};

export const LOOKUP_SELECTED_ARRANGE = {
	FIRST: 1,
	LAST: 2,
};

export const LOOKUP_MAX_FIND_RECORD = 20;

export const conditionLookupValidator = z.object({
	id: z.string().ulid().optional(),
	fieldID: z.string().ulid(),
	order: z.number(),
	operator: z.nativeEnum(CONDITION_OPERATOR).optional(),
	type: z.nativeEnum(LOOKUP_FILTER_VALUE_TYPE).optional(),
	data: z.any(),

	// For FE
	field: z.any(),
	error: z.any(),
});

export const FieldLookupInitialDataValidator = z.null().optional();
export const FieldLookupParamsValidator = z.object({
	lookup: z.object({
		// new
		customSelectedAmount: z.number().min(1).max(LOOKUP_MAX_FIND_RECORD).nullable().default(1),
		arrangeSelectedData: z.nativeEnum(LOOKUP_SELECTED_ARRANGE).nullable().default(LOOKUP_SELECTED_ARRANGE.FIRST),

		sourceBoardID: z.string().ulid(),
		sourceFieldID: z.string().ulid(),
		sourceFieldDataType: z.number().optional(),
		sourceFieldParams: z.any().optional(),
		format: z.any().optional(),
		operator: z.nativeEnum(CalculationType).default(CalculationType.NotApply),
		filter: z
			.object({
				options: z.array(conditionLookupValidator).min(0).max(5),
				conditions: z.record(
					z.union([z.literal('and'), z.literal('or')]),
					z
						.array(z.union([conditionLookupValidator, z.any()]))
						.min(0)
						.max(5),
				),
				logicalOperator: z.nativeEnum(LOGICAL_OPERATOR),
				logicalExpression: z.string().optional(),
			})
			.nullable()
			.optional(),
	}),
});

export const FieldLookupDataValidator = FieldLookupInitialDataValidator;
export type IConditionLookupDataValidator = z.infer<typeof conditionLookupValidator>;

export type IFieldLookupParams = z.infer<typeof FieldLookupParamsValidator> & { isCalculating?: boolean };
export type IFieldLookupInitialData = z.infer<typeof FieldLookupInitialDataValidator>;
export type IFieldLookupData = z.infer<typeof FieldLookupDataValidator>;

export interface IFieldLookupModel extends IFieldModel {
	params: IFieldLookupParams;
	initialData: IFieldLookupInitialData;
}
