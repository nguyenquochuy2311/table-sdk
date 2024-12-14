import type { IFieldFormulaParams } from '@/fields/formula';
import type { IFieldLookupParams } from '@/fields/lookup';
import type { IFieldReferenceParams } from '@/fields/reference';
import type { IFieldTextParams } from '@/fields/text';

export type IFieldParams = IFieldTextParams | IFieldLookupParams | IFieldReferenceParams | IFieldFormulaParams;
