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

// src/fields/attachment/acttachment.interface.ts
var acttachment_interface_exports = {};
__export(acttachment_interface_exports, {
  FieldAttachmentDataValidator: () => FieldAttachmentDataValidator,
  FieldAttachmentInitialDataValidator: () => FieldAttachmentInitialDataValidator,
  FieldAttachmentParamsValidator: () => FieldAttachmentParamsValidator
});
module.exports = __toCommonJS(acttachment_interface_exports);
var import_zod = require("zod");
var FieldAttachmentInitialDataValidator = import_zod.z.null().default(null);
var FieldAttachmentParamsValidator = import_zod.z.undefined().nullable().default(null);
var FieldAttachmentDataValidator = import_zod.z.array(import_zod.z.any()).min(1).nullable().default(null);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldAttachmentDataValidator,
  FieldAttachmentInitialDataValidator,
  FieldAttachmentParamsValidator
});
