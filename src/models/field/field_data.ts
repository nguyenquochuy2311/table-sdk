import type {
	IFieldAttachmentData,
	IFieldAutoNumberData,
	IFieldCheckboxData,
	IFieldCreatedByData,
	IFieldCreatedTimeData,
	IFieldCurrencyData,
	IFieldDateData,
	IFieldDropdownData,
	IFieldEmailData,
	IFieldFormulaData,
	IFieldLastModifiedByData,
	IFieldLastModifiedTimeData,
	IFieldLookupData,
	IFieldNumberData,
	IFieldParagraphData,
	IFieldPeopleData,
	IFieldPhoneData,
	IFieldProgressData,
	IFieldRatingData,
	IFieldReferenceData,
	IFieldTextData,
	IFieldWebsiteData,
} from '../../fields';

export type IFieldData =
	| IFieldTextData
	| IFieldParagraphData
	| IFieldEmailData
	| IFieldWebsiteData
	| IFieldCheckboxData
	| IFieldNumberData
	| IFieldRatingData
	| IFieldProgressData
	| IFieldPhoneData
	| IFieldCurrencyData
	| IFieldDateData
	| IFieldCreatedTimeData
	| IFieldLastModifiedTimeData
	| IFieldCreatedByData
	| IFieldLastModifiedByData
	| IFieldPeopleData
	| IFieldAttachmentData
	| IFieldDropdownData
	| IFieldReferenceData
	| IFieldLookupData
	| IFieldFormulaData
	| IFieldAutoNumberData;