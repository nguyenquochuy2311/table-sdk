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

// src/fields/website/index.ts
var website_exports = {};
__export(website_exports, {
  FieldWebsiteDataValidator: () => FieldWebsiteDataValidator,
  FieldWebsiteInitialDataValidator: () => FieldWebsiteInitialDataValidator,
  FieldWebsiteParamsValidator: () => FieldWebsiteParamsValidator
});
module.exports = __toCommonJS(website_exports);

// src/fields/website/website.interface.ts
var import_zod = require("zod");
var urlRegex = new RegExp(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}[.]{0,1}(\/.*)?/);
var FieldWebsiteInitialDataValidator = import_zod.z.object({
  text: import_zod.z.string().min(0).optional(),
  link: import_zod.z.string().regex(urlRegex, "Invalid URL!")
}).nullable().default(null);
var FieldWebsiteParamsValidator = import_zod.z.object({
  notAllowDuplicate: import_zod.z.boolean().nullable().default(false)
}).nullable().default(null);
var FieldWebsiteDataValidator = FieldWebsiteInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldWebsiteDataValidator,
  FieldWebsiteInitialDataValidator,
  FieldWebsiteParamsValidator
});
