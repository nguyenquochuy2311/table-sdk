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

// src/fields/progress/progress.interface.ts
var progress_interface_exports = {};
__export(progress_interface_exports, {
  FieldProgressDataValidator: () => FieldProgressDataValidator,
  FieldProgressInitialDataValidator: () => FieldProgressInitialDataValidator,
  FieldProgressParamsValidator: () => FieldProgressParamsValidator
});
module.exports = __toCommonJS(progress_interface_exports);
var import_zod = require("zod");
var FieldProgressInitialDataValidator = import_zod.z.number().min(0).nullable().default(null);
var FieldProgressAuto = import_zod.z.object({
  isAuto: import_zod.z.literal(true)
});
var FieldProgressManual = import_zod.z.object({
  isAuto: import_zod.z.literal(false).default(false),
  startValue: import_zod.z.number().min(0),
  endValue: import_zod.z.number().min(0)
});
var FieldProgressParamsValidator = import_zod.z.union([FieldProgressAuto, FieldProgressManual]).default({
  isAuto: false,
  startValue: 0,
  endValue: 1
});
var FieldProgressDataValidator = FieldProgressInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldProgressDataValidator,
  FieldProgressInitialDataValidator,
  FieldProgressParamsValidator
});
