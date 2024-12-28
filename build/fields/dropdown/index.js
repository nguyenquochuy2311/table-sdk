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

// src/fields/dropdown/index.ts
var dropdown_exports = {};
__export(dropdown_exports, {
  FieldDropdownDataValidator: () => FieldDropdownDataValidator,
  FieldDropdownInitialDataValidator: () => FieldDropdownInitialDataValidator,
  FieldDropdownParamsValidator: () => FieldDropdownParamsValidator
});
module.exports = __toCommonJS(dropdown_exports);

// src/fields/dropdown/dropdown.interface.ts
var import_zod = require("zod");
var FieldDropdownParamsReferenceValidator = import_zod.z.object({
  isMultipleSelect: import_zod.z.boolean(),
  reference: import_zod.z.object({
    boardID: import_zod.z.string().ulid(),
    fieldID: import_zod.z.string().ulid()
  })
});
var OptionValidator = import_zod.z.object({
  name: import_zod.z.string().max(255).min(0).nullable().default(null),
  color: import_zod.z.string().length(7),
  value: import_zod.z.string().ulid()
});
var FieldDropdownParamsOptionsValidator = import_zod.z.object({
  isMultipleSelect: import_zod.z.boolean(),
  allowAddSelections: import_zod.z.boolean().default(false),
  options: import_zod.z.array(OptionValidator).min(1).nullable()
});
var FieldDropdownInitialDataValidator = import_zod.z.object({
  value: import_zod.z.array(import_zod.z.string().ulid()).min(1),
  selected: import_zod.z.array(OptionValidator).min(1).optional(),
  newOptions: import_zod.z.array(OptionValidator).optional()
}).nullable().default(null);
var FieldDropdownParamsValidator = import_zod.z.union([FieldDropdownParamsReferenceValidator, FieldDropdownParamsOptionsValidator]).default({
  options: null,
  isMultipleSelect: true,
  allowAddSelections: false
});
var FieldDropdownDataValidator = FieldDropdownInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldDropdownDataValidator,
  FieldDropdownInitialDataValidator,
  FieldDropdownParamsValidator
});
