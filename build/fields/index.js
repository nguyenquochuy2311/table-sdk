"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/fields/index.ts
var fields_exports = {};
__export(fields_exports, {
  CONDITION_OPERATOR: () => CONDITION_OPERATOR,
  CalculationType: () => CalculationType,
  FORMULA_CALC_DATATYPE: () => FORMULA_CALC_DATATYPE,
  FieldFormulaInitialDataValidator: () => FieldFormulaInitialDataValidator,
  FieldFormulaParamsValidator: () => FieldFormulaParamsValidator,
  FieldFormulaValueValidator: () => FieldFormulaValueValidator,
  FieldLookupDataValidator: () => FieldLookupDataValidator,
  FieldLookupInitialDataValidator: () => FieldLookupInitialDataValidator,
  FieldLookupParamsValidator: () => FieldLookupParamsValidator,
  FieldReferenceDataValidator: () => FieldReferenceDataValidator,
  FieldReferenceInitialDataValidator: () => FieldReferenceInitialDataValidator,
  FieldReferenceParamsValidator: () => FieldReferenceParamsValidator,
  FieldReferenceTwoWayLinkUpdateMode: () => FieldReferenceTwoWayLinkUpdateMode,
  FieldTextDataValidator: () => FieldTextDataValidator,
  FieldTextInitialDataValidator: () => FieldTextInitialDataValidator,
  FieldTextParamsValidator: () => FieldTextParamsValidator,
  FormulaDataError: () => FormulaDataError,
  LOGICAL_OPERATOR: () => LOGICAL_OPERATOR,
  LOOKUP_CALC_DATATYPE: () => LOOKUP_CALC_DATATYPE,
  LOOKUP_CALC_ERROR: () => LOOKUP_CALC_ERROR,
  LOOKUP_FILTER_VALUE_TYPE: () => LOOKUP_FILTER_VALUE_TYPE,
  LOOKUP_MAX_FIND_RECORD: () => LOOKUP_MAX_FIND_RECORD,
  LOOKUP_SELECTED_ARRANGE: () => LOOKUP_SELECTED_ARRANGE,
  conditionLookupValidator: () => conditionLookupValidator
});
module.exports = __toCommonJS(fields_exports);

// src/fields/formula/formula.interface.ts
var import_zod = require("zod");

// src/field-datatype.ts
var FieldDataType = {
  TEXT: 1,
  CHECKBOX: 2,
  PARAGRAPH: 3,
  ATTACHMENT: 4,
  DROPDOWN: 5,
  NUMBER: 6,
  DATE: 7,
  PHONE: 8,
  WEBSITE: 9,
  EMAIL: 10,
  CURRENCY: 11,
  PEOPLE: 12,
  RATING: 13,
  PROGRESS: 14,
  REFERENCE: 15,
  FORMULA: 16,
  LOOKUP: 18,
  LAST_MODIFIED_BY: 19,
  LAST_MODIFIED_TIME: 20,
  CREATED_BY: 21,
  CREATED_TIME: 22,
  AUTO_NUMBER: 23
};

// src/fields/formula/formula.interface.ts
var FORMULA_CALC_DATATYPE = ((FORMULA_CALC_DATATYPE2) => {
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["TEXT"] = FieldDataType.TEXT] = "TEXT";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["NUMBER"] = FieldDataType.NUMBER] = "NUMBER";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["DATE"] = FieldDataType.DATE] = "DATE";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["BOOLEAN"] = FieldDataType.CHECKBOX] = "BOOLEAN";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["CALCULATED_ARRAY"] = 1e3] = "CALCULATED_ARRAY";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["CALCULATED_NULL"] = 1001] = "CALCULATED_NULL";
  return FORMULA_CALC_DATATYPE2;
})(FORMULA_CALC_DATATYPE || {});
var FieldFormulaInitialDataValidator = import_zod.z.null().optional();
var FieldFormulaParamsValidator = import_zod.z.object({
  value: import_zod.z.string().trim(),
  advanced: import_zod.z.boolean().optional(),
  resultFormatType: import_zod.z.any().optional(),
  resultFormatConfig: import_zod.z.any().optional(),
  formulaFunction: import_zod.z.any().optional()
});
var FieldFormulaValueValidator = import_zod.z.undefined().optional();
var FormulaDataError = {
  NAME: "#NAME?",
  CALC: "#CALC!",
  REF: "#REF!",
  VALUE: "#VALUE!",
  INFINITY: "#DIV/0!",
  SYNTAX: "Syntax Error",
  ERROR: "#ERROR!",
  NA: "#N/A",
  LOOP: "#LOOP",
  // internal error
  INTERNAL: "#ERROR!!",
  // for pending keys
  HAS_PENDING: "#Pending"
};

// src/fields/lookup/lookup.interface.ts
var import_zod2 = require("zod");
var CalculationType = /* @__PURE__ */ ((CalculationType2) => {
  CalculationType2["CountAll"] = "count-all";
  CalculationType2["CountValues"] = "count-values";
  CalculationType2["CountUnique"] = "count-unique";
  CalculationType2["CountEmpty"] = "count-empty";
  CalculationType2["CountNotEmpty"] = "count-not-empty";
  CalculationType2["Sum"] = "sum";
  CalculationType2["Average"] = "average";
  CalculationType2["Min"] = "min";
  CalculationType2["Max"] = "max";
  CalculationType2["Med"] = "med";
  CalculationType2["Range"] = "range";
  CalculationType2["CountChecked"] = "count-checked";
  CalculationType2["CountUnchecked"] = "count-unchecked";
  CalculationType2["DayRange"] = "day-range";
  CalculationType2["MonthRange"] = "month-range";
  CalculationType2["EarliestDate"] = "earliest-date";
  CalculationType2["LatestDate"] = "latest-date";
  CalculationType2["NotApply"] = "not-apply";
  return CalculationType2;
})(CalculationType || {});
var CONDITION_OPERATOR = /* @__PURE__ */ ((CONDITION_OPERATOR2) => {
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_EMPTY"] = 1] = "IS_EMPTY";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_NOT_EMPTY"] = 2] = "IS_NOT_EMPTY";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_BETWEEN"] = 3] = "IS_BETWEEN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_NOT_BETWEEN"] = 4] = "IS_NOT_BETWEEN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_EXACTLY"] = 5] = "IS_EXACTLY";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_NOT_EXACTLY"] = 6] = "IS_NOT_EXACTLY";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_BEFORE"] = 7] = "IS_BEFORE";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_AFTER"] = 8] = "IS_AFTER";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["CONTAINS"] = 9] = "CONTAINS";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["DOES_NOT_CONTAINS"] = 10] = "DOES_NOT_CONTAINS";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["STARTS_WITH"] = 11] = "STARTS_WITH";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["ENDS_WITH"] = 12] = "ENDS_WITH";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["WORD_COUNT_GREATER_THAN"] = 13] = "WORD_COUNT_GREATER_THAN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["WORD_COUNT_GREATER_THAN_OR_EQUAL"] = 14] = "WORD_COUNT_GREATER_THAN_OR_EQUAL";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["WORD_COUNT_LESS_THAN"] = 15] = "WORD_COUNT_LESS_THAN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["WORD_COUNT_LESS_THAN_OR_EQUAL"] = 16] = "WORD_COUNT_LESS_THAN_OR_EQUAL";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["WORD_COUNT_EQUAL"] = 17] = "WORD_COUNT_EQUAL";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IN"] = 18] = "IN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["NOT_IN"] = 19] = "NOT_IN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["GREATER_THAN"] = 20] = "GREATER_THAN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["GREATER_THAN_OR_EQUAL"] = 21] = "GREATER_THAN_OR_EQUAL";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["LESS_THAN"] = 22] = "LESS_THAN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["LESS_THAN_OR_EQUAL"] = 23] = "LESS_THAN_OR_EQUAL";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["COMPARE_TODAY"] = 24] = "COMPARE_TODAY";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["CURRENT_VIEWER"] = 25] = "CURRENT_VIEWER";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["ANY"] = 26] = "ANY";
  return CONDITION_OPERATOR2;
})(CONDITION_OPERATOR || {});
var LOOKUP_CALC_DATATYPE = {
  NULL: null,
  DATE: FieldDataType.DATE,
  NUMBER: FieldDataType.NUMBER
};
var LOOKUP_FILTER_VALUE_TYPE = /* @__PURE__ */ ((LOOKUP_FILTER_VALUE_TYPE2) => {
  LOOKUP_FILTER_VALUE_TYPE2[LOOKUP_FILTER_VALUE_TYPE2["CUSTOM"] = 1] = "CUSTOM";
  LOOKUP_FILTER_VALUE_TYPE2[LOOKUP_FILTER_VALUE_TYPE2["OTHER_FIELD"] = 2] = "OTHER_FIELD";
  LOOKUP_FILTER_VALUE_TYPE2[LOOKUP_FILTER_VALUE_TYPE2["OTHER_BOARD"] = 3] = "OTHER_BOARD";
  return LOOKUP_FILTER_VALUE_TYPE2;
})(LOOKUP_FILTER_VALUE_TYPE || {});
var LOGICAL_OPERATOR = /* @__PURE__ */ ((LOGICAL_OPERATOR2) => {
  LOGICAL_OPERATOR2[LOGICAL_OPERATOR2["AND"] = 1] = "AND";
  LOGICAL_OPERATOR2[LOGICAL_OPERATOR2["OR"] = 2] = "OR";
  LOGICAL_OPERATOR2[LOGICAL_OPERATOR2["CUSTOM"] = 3] = "CUSTOM";
  return LOGICAL_OPERATOR2;
})(LOGICAL_OPERATOR || {});
var LOOKUP_CALC_ERROR = {
  LOOP: "#LOOP",
  ERROR: "#ERROR"
};
var LOOKUP_SELECTED_ARRANGE = {
  FIRST: 1,
  LAST: 2
};
var LOOKUP_MAX_FIND_RECORD = 20;
var conditionLookupValidator = import_zod2.z.object({
  id: import_zod2.z.string().ulid().optional(),
  fieldID: import_zod2.z.string().ulid(),
  order: import_zod2.z.number(),
  operator: import_zod2.z.nativeEnum(CONDITION_OPERATOR).optional(),
  type: import_zod2.z.nativeEnum(LOOKUP_FILTER_VALUE_TYPE).optional(),
  data: import_zod2.z.any(),
  // For FE
  field: import_zod2.z.any(),
  error: import_zod2.z.any()
});
var FieldLookupInitialDataValidator = import_zod2.z.null().optional();
var FieldLookupParamsValidator = import_zod2.z.object({
  lookup: import_zod2.z.object({
    // new
    customSelectedAmount: import_zod2.z.number().min(1).max(LOOKUP_MAX_FIND_RECORD).nullable().default(1),
    arrangeSelectedData: import_zod2.z.nativeEnum(LOOKUP_SELECTED_ARRANGE).nullable().default(LOOKUP_SELECTED_ARRANGE.FIRST),
    sourceBoardID: import_zod2.z.string().ulid(),
    sourceFieldID: import_zod2.z.string().ulid(),
    sourceFieldDataType: import_zod2.z.number().optional(),
    sourceFieldParams: import_zod2.z.any().optional(),
    format: import_zod2.z.any().optional(),
    operator: import_zod2.z.nativeEnum(CalculationType).default("not-apply" /* NotApply */),
    filter: import_zod2.z.object({
      options: import_zod2.z.array(conditionLookupValidator).min(0).max(5),
      conditions: import_zod2.z.record(
        import_zod2.z.union([import_zod2.z.literal("and"), import_zod2.z.literal("or")]),
        import_zod2.z.array(import_zod2.z.union([conditionLookupValidator, import_zod2.z.any()])).min(0).max(5)
      ),
      logicalOperator: import_zod2.z.nativeEnum(LOGICAL_OPERATOR),
      logicalExpression: import_zod2.z.string().optional()
    }).nullable().optional()
  })
});
var FieldLookupDataValidator = FieldLookupInitialDataValidator;

// src/fields/text/text.interface.ts
var import_zod3 = require("zod");
var FieldTextParamsValidator = import_zod3.z.object({
  notAllowDuplicate: import_zod3.z.boolean().nullable().default(false)
}).nullable().default(null);
var FieldTextInitialDataValidator = import_zod3.z.string().nullable().default(null);
var FieldTextDataValidator = FieldTextInitialDataValidator;

// src/fields/reference/reference.interface.ts
var import_zod4 = require("zod");
var FieldReferenceTwoWayLinkUpdateMode = /* @__PURE__ */ ((FieldReferenceTwoWayLinkUpdateMode2) => {
  FieldReferenceTwoWayLinkUpdateMode2[FieldReferenceTwoWayLinkUpdateMode2["CONVERT_ONE_WAY"] = 1] = "CONVERT_ONE_WAY";
  FieldReferenceTwoWayLinkUpdateMode2[FieldReferenceTwoWayLinkUpdateMode2["DELETE_REFERENCE"] = 2] = "DELETE_REFERENCE";
  return FieldReferenceTwoWayLinkUpdateMode2;
})(FieldReferenceTwoWayLinkUpdateMode || {});
var FieldReferenceInitialDataValidator = import_zod4.z.object({
  value: import_zod4.z.array(import_zod4.z.string().ulid()).min(0),
  selected: import_zod4.z.array(
    import_zod4.z.object({
      id: import_zod4.z.string().ulid(),
      name: import_zod4.z.any()
    })
  ).min(0).optional()
}).nullable().default(null);
var ReferenceTwoWayLinkValidator = import_zod4.z.object({
  sourceReferenceID: import_zod4.z.string().ulid().optional(),
  updateMode: import_zod4.z.nativeEnum(FieldReferenceTwoWayLinkUpdateMode).optional(),
  isKeepTwoWay: import_zod4.z.boolean().optional()
}).nullable().optional();
var FieldReferenceParamsValidator = import_zod4.z.object({
  isMultipleSelect: import_zod4.z.boolean(),
  reference: import_zod4.z.object({
    boardID: import_zod4.z.string().ulid(),
    viewID: import_zod4.z.string().ulid().nullable().optional()
  }),
  twoWayLink: ReferenceTwoWayLinkValidator
});
var FieldReferenceDataValidator = FieldReferenceInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CONDITION_OPERATOR,
  CalculationType,
  FORMULA_CALC_DATATYPE,
  FieldFormulaInitialDataValidator,
  FieldFormulaParamsValidator,
  FieldFormulaValueValidator,
  FieldLookupDataValidator,
  FieldLookupInitialDataValidator,
  FieldLookupParamsValidator,
  FieldReferenceDataValidator,
  FieldReferenceInitialDataValidator,
  FieldReferenceParamsValidator,
  FieldReferenceTwoWayLinkUpdateMode,
  FieldTextDataValidator,
  FieldTextInitialDataValidator,
  FieldTextParamsValidator,
  FormulaDataError,
  LOGICAL_OPERATOR,
  LOOKUP_CALC_DATATYPE,
  LOOKUP_CALC_ERROR,
  LOOKUP_FILTER_VALUE_TYPE,
  LOOKUP_MAX_FIND_RECORD,
  LOOKUP_SELECTED_ARRANGE,
  conditionLookupValidator
});
