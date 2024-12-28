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

// src/fields/lastModifiedBy/index.ts
var lastModifiedBy_exports = {};
__export(lastModifiedBy_exports, {
  FieldLastModifiedByInitialDataValidator: () => FieldLastModifiedByInitialDataValidator,
  FieldLastModifiedByParamsValidator: () => FieldLastModifiedByParamsValidator,
  FieldLastModifiedByValueValidator: () => FieldLastModifiedByValueValidator
});
module.exports = __toCommonJS(lastModifiedBy_exports);

// src/fields/lastModifiedBy/lastModifiedBy.interface.ts
var import_zod = require("zod");
var FieldLastModifiedByInitialDataValidator = import_zod.z.null().optional();
var FieldLastModifiedByParamsValidator = import_zod.z.object({
  targetFieldID: import_zod.z.string().ulid().nullable()
}).default({
  targetFieldID: null
});
var FieldLastModifiedByValueValidator = FieldLastModifiedByInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldLastModifiedByInitialDataValidator,
  FieldLastModifiedByParamsValidator,
  FieldLastModifiedByValueValidator
});
