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

// src/fields/rating/rating.interface.ts
var rating_interface_exports = {};
__export(rating_interface_exports, {
  FieldRatingDataValidator: () => FieldRatingDataValidator,
  FieldRatingInitialDataValidator: () => FieldRatingInitialDataValidator,
  FieldRatingParamsValidator: () => FieldRatingParamsValidator
});
module.exports = __toCommonJS(rating_interface_exports);
var import_zod = require("zod");
var FieldRatingInitialDataValidator = import_zod.z.coerce.number().int().gte(1).lte(10).nullable().default(null);
var FieldRatingParamsValidator = import_zod.z.object({
  maxPoint: import_zod.z.coerce.number().int().gte(1).lte(10)
}).default({
  maxPoint: 5
});
var FieldRatingDataValidator = FieldRatingInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldRatingDataValidator,
  FieldRatingInitialDataValidator,
  FieldRatingParamsValidator
});
