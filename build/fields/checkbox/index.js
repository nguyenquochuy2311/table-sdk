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

// src/fields/checkbox/index.ts
var checkbox_exports = {};
__export(checkbox_exports, {
  FieldCheckboxDataValidator: () => FieldCheckboxDataValidator,
  FieldCheckboxInitialDataValidator: () => FieldCheckboxInitialDataValidator,
  FieldCheckboxParams: () => FieldCheckboxParams
});
module.exports = __toCommonJS(checkbox_exports);

// src/fields/checkbox/checkbox.interface.ts
var import_zod = require("zod");
var FieldCheckboxInitialDataValidator = import_zod.z.boolean().default(false);
var FieldCheckboxParams = import_zod.z.undefined().nullable().default(null);
var FieldCheckboxDataValidator = FieldCheckboxInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldCheckboxDataValidator,
  FieldCheckboxInitialDataValidator,
  FieldCheckboxParams
});
