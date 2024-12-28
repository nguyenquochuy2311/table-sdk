import type {
	IFieldAttachmentInitialData,
	IFieldAutoNumberInitialData,
	IFieldCheckboxInitialData,
	IFieldCreatedByInitialData,
	IFieldCreatedTimeInitialData,
	IFieldCurrencyInitialData,
	IFieldDateInitialData,
	IFieldDropdownInitialData,
	IFieldEmailInitialData,
	IFieldFormulaInitialData,
	IFieldLastModifiedByInitialData,
	IFieldLastModifiedTimeInitialData,
	IFieldLookupInitialData,
	IFieldNumberInitialData,
	IFieldParagraphInitialData,
	IFieldPeopleInitialData,
	IFieldPhoneInitialData,
	IFieldProgressInitialData,
	IFieldRatingInitialData,
	IFieldReferenceInitialData,
	IFieldTextInitialData,
	IFieldWebsiteInitialData,
} from '../../fields';

export type IFieldInitialData =
	| IFieldTextInitialData
	| IFieldCheckboxInitialData
	| IFieldCreatedTimeInitialData
	| IFieldCreatedByInitialData
	| IFieldCurrencyInitialData
	| IFieldDateInitialData
	| IFieldEmailInitialData
	| IFieldNumberInitialData
	| IFieldParagraphInitialData
	| IFieldPeopleInitialData
	| IFieldPhoneInitialData
	| IFieldProgressInitialData
	| IFieldRatingInitialData
	| IFieldWebsiteInitialData
	| IFieldLastModifiedTimeInitialData
	| IFieldLastModifiedByInitialData
	| IFieldDropdownInitialData
	| IFieldAttachmentInitialData
	| IFieldAutoNumberInitialData
	| IFieldLookupInitialData
	| IFieldReferenceInitialData
	| IFieldFormulaInitialData;
