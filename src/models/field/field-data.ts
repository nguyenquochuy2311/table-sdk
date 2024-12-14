import type { IFieldFormulaData } from '@/fields/formula';
import type { IFieldLookupData } from '@/fields/lookup';
import type { IFieldReferenceData } from '@/fields/reference';
import type { IFieldTextData } from '@/fields/text';

export type IFieldData = IFieldTextData | IFieldLookupData | IFieldReferenceData | IFieldFormulaData;
