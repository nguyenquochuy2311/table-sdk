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

// src/fields/autoNumber/autoNumber.interface.ts
var autoNumber_interface_exports = {};
__export(autoNumber_interface_exports, {
  FieldAutoNumberDataValidator: () => FieldAutoNumberDataValidator,
  FieldAutoNumberInitialDataValidator: () => FieldAutoNumberInitialDataValidator,
  FieldAutoNumberParamsFormatType: () => FieldAutoNumberParamsFormatType,
  FieldAutoNumberParamsFormatValidator: () => FieldAutoNumberParamsFormatValidator,
  FieldAutoNumberParamsValidator: () => FieldAutoNumberParamsValidator
});
module.exports = __toCommonJS(autoNumber_interface_exports);
var import_zod = require("zod");
var FieldAutoNumberParamsFormatType = /* @__PURE__ */ ((FieldAutoNumberParamsFormatType2) => {
  FieldAutoNumberParamsFormatType2[FieldAutoNumberParamsFormatType2["NUMBER"] = 1] = "NUMBER";
  FieldAutoNumberParamsFormatType2[FieldAutoNumberParamsFormatType2["PREFIX_SUFFIX"] = 2] = "PREFIX_SUFFIX";
  FieldAutoNumberParamsFormatType2[FieldAutoNumberParamsFormatType2["FIELD_VALUE"] = 3] = "FIELD_VALUE";
  return FieldAutoNumberParamsFormatType2;
})(FieldAutoNumberParamsFormatType || {});
var FieldAutoNumberInitialDataValidator = import_zod.z.undefined();
var FieldAutoNumberParamsFormatValidator = import_zod.z.union([
  import_zod.z.object({
    type: import_zod.z.literal(1 /* NUMBER */),
    value: import_zod.z.number().max(9).min(1)
  }),
  import_zod.z.object({
    type: import_zod.z.literal(2 /* PREFIX_SUFFIX */),
    value: import_zod.z.string().min(1).max(18)
  })
]);
var FieldAutoNumberParamsValidator = import_zod.z.object({
  format: import_zod.z.array(FieldAutoNumberParamsFormatValidator).min(1),
  reCalculate: import_zod.z.boolean().optional()
});
var FieldAutoNumberDataValidator = FieldAutoNumberInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldAutoNumberDataValidator,
  FieldAutoNumberInitialDataValidator,
  FieldAutoNumberParamsFormatType,
  FieldAutoNumberParamsFormatValidator,
  FieldAutoNumberParamsValidator
});
