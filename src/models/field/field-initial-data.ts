import type { IFieldFormulaInitialData } from '@/fields/formula';
import type { IFieldLookupInitialData } from '@/fields/lookup';
import type { IFieldReferenceInitialData } from '@/fields/reference';
import type { IFieldTextInitialData } from '@/fields/text';

export type IFieldInitialData = IFieldTextInitialData | IFieldLookupInitialData | IFieldReferenceInitialData | IFieldFormulaInitialData;
