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

// src/fields/paragraph/parapraph.interface.ts
var parapraph_interface_exports = {};
__export(parapraph_interface_exports, {
  FieldParagraphDataValidator: () => FieldParagraphDataValidator,
  FieldParagraphInitialDataValidator: () => FieldParagraphInitialDataValidator,
  FieldParagraphParamsValidator: () => FieldParagraphParamsValidator
});
module.exports = __toCommonJS(parapraph_interface_exports);
var import_zod = require("zod");
var FieldParagraphInitialDataValidator = import_zod.z.object({
  text: import_zod.z.string(),
  html: import_zod.z.string().nullable().default(null),
  data: import_zod.z.any().default(null)
}).nullable().default(null);
var FieldParagraphParamsValidator = import_zod.z.object({
  isRichTextFormatting: import_zod.z.boolean().optional().default(false)
}).default({
  isRichTextFormatting: false
});
var FieldParagraphDataValidator = FieldParagraphInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldParagraphDataValidator,
  FieldParagraphInitialDataValidator,
  FieldParagraphParamsValidator
});
