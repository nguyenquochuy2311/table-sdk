import type {
	IFieldAttachmentParams,
	IFieldAutoNumberParams,
	IFieldCheckboxParams,
	IFieldCreatedByParams,
	IFieldCreatedTimeParams,
	IFieldCurrencyParams,
	IFieldDateParams,
	IFieldDropdownParams,
	IFieldEmailParams,
	IFieldFormulaParams,
	IFieldLastModifiedByParams,
	IFieldLastModifiedTimeParams,
	IFieldLookupParams,
	IFieldNumberParams,
	IFieldParagraphParams,
	IFieldPeopleParams,
	IFieldPhoneParams,
	IFieldProgressParams,
	IFieldRatingParams,
	IFieldReferenceParams,
	IFieldTextParams,
	IFieldWebsiteParams,
} from 'fields';

export type IFieldParams =
	| IFieldTextParams
	| IFieldParagraphParams
	| IFieldEmailParams
	| IFieldWebsiteParams
	| IFieldCheckboxParams
	| IFieldNumberParams
	| IFieldRatingParams
	| IFieldProgressParams
	| IFieldPhoneParams
	| IFieldCurrencyParams
	| IFieldDateParams
	| IFieldCreatedTimeParams
	| IFieldLastModifiedTimeParams
	| IFieldCreatedByParams
	| IFieldLastModifiedByParams
	| IFieldPeopleParams
	| IFieldAttachmentParams
	| IFieldDropdownParams
	| IFieldReferenceParams
	| IFieldLookupParams
	| IFieldFormulaParams
	| IFieldAutoNumberParams;
