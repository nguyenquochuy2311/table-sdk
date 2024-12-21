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

// src/fields/text/text.interface.ts
var text_interface_exports = {};
__export(text_interface_exports, {
  FieldTextDataValidator: () => FieldTextDataValidator,
  FieldTextInitialDataValidator: () => FieldTextInitialDataValidator,
  FieldTextParamsValidator: () => FieldTextParamsValidator
});
module.exports = __toCommonJS(text_interface_exports);
var import_zod = require("zod");
var FieldTextParamsValidator = import_zod.z.object({
  notAllowDuplicate: import_zod.z.boolean().nullable().default(false)
}).nullable().default(null);
var FieldTextInitialDataValidator = import_zod.z.string().nullable().default(null);
var FieldTextDataValidator = FieldTextInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldTextDataValidator,
  FieldTextInitialDataValidator,
  FieldTextParamsValidator
});
