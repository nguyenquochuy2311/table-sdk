"use strict";
import { z } from "zod";
import { FieldDataType } from "../../field-datatype";
export var FORMULA_CALC_DATATYPE = ((FORMULA_CALC_DATATYPE2) => {
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["TEXT"] = FieldDataType.TEXT] = "TEXT";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["NUMBER"] = FieldDataType.NUMBER] = "NUMBER";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["DATE"] = FieldDataType.DATE] = "DATE";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["BOOLEAN"] = FieldDataType.CHECKBOX] = "BOOLEAN";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["CALCULATED_ARRAY"] = 1e3] = "CALCULATED_ARRAY";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["CALCULATED_NULL"] = 1001] = "CALCULATED_NULL";
  return FORMULA_CALC_DATATYPE2;
})(FORMULA_CALC_DATATYPE || {});
export const FieldFormulaInitialDataValidator = z.null().optional();
export const FieldFormulaParamsValidator = z.object({
  value: z.string().trim(),
  advanced: z.boolean().optional(),
  resultFormatType: z.any().optional(),
  resultFormatConfig: z.any().optional(),
  formulaFunction: z.any().optional()
});
export const FieldFormulaValueValidator = z.undefined().optional();
export const FormulaDataError = {
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
