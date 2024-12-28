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

// src/fields/formula/index.ts
var formula_exports = {};
__export(formula_exports, {
  FORMULA_CALC_DATATYPE: () => FORMULA_CALC_DATATYPE,
  FieldFormulaInitialDataValidator: () => FieldFormulaInitialDataValidator,
  FieldFormulaParamsValidator: () => FieldFormulaParamsValidator,
  FieldFormulaValueValidator: () => FieldFormulaValueValidator,
  FormulaDataError: () => FormulaDataError
});
module.exports = __toCommonJS(formula_exports);

// src/fields/formula/formula.interface.ts
var import_zod = require("zod");

// src/field_datatype.ts
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FORMULA_CALC_DATATYPE,
  FieldFormulaInitialDataValidator,
  FieldFormulaParamsValidator,
  FieldFormulaValueValidator,
  FormulaDataError
});
