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

// src/fields/number/number.interface.ts
var number_interface_exports = {};
__export(number_interface_exports, {
  FieldNumberDataValidator: () => FieldNumberDataValidator,
  FieldNumberInitialDataValidator: () => FieldNumberInitialDataValidator,
  FieldNumberParamsValidator: () => FieldNumberParamsValidator,
  NumberFormatEnum: () => NumberFormatEnum
});
module.exports = __toCommonJS(number_interface_exports);
var import_zod = require("zod");
var NumberFormatEnum = /* @__PURE__ */ ((NumberFormatEnum2) => {
  NumberFormatEnum2["COMMA"] = "commas-separator";
  NumberFormatEnum2["THOUSAND"] = "thousand-unit";
  NumberFormatEnum2["HUNDRED"] = "percent";
  return NumberFormatEnum2;
})(NumberFormatEnum || {});
var FieldNumberInitialDataValidator = import_zod.z.number().nullable().default(null);
var FieldNumberParamsValidator = import_zod.z.object({
  format: import_zod.z.nativeEnum(NumberFormatEnum).nullable().default(null),
  decimalPlaces: import_zod.z.coerce.number().int().gte(0).lte(6).nullable().default(null),
  allowNegative: import_zod.z.boolean().default(false)
}).default({
  format: null,
  decimalPlaces: null,
  allowNegative: false
});
var FieldNumberDataValidator = FieldNumberInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldNumberDataValidator,
  FieldNumberInitialDataValidator,
  FieldNumberParamsValidator,
  NumberFormatEnum
});
