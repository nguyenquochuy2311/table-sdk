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

// src/fields/email/index.ts
var email_exports = {};
__export(email_exports, {
  FieldEmailDataValidator: () => FieldEmailDataValidator,
  FieldEmailInitialDataValidator: () => FieldEmailInitialDataValidator,
  FieldEmailParamsValidator: () => FieldEmailParamsValidator
});
module.exports = __toCommonJS(email_exports);

// src/fields/email/email.interface.ts
var import_zod = require("zod");
var emailRegex = new RegExp(
  /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
);
var FieldEmailInitialDataValidator = import_zod.z.string().regex(emailRegex, "Invalid Email!").nullable().default(null);
var FieldEmailParamsValidator = import_zod.z.object({
  notAllowDuplicate: import_zod.z.boolean().nullable().default(false)
}).nullable().default(null);
var FieldEmailDataValidator = FieldEmailInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldEmailDataValidator,
  FieldEmailInitialDataValidator,
  FieldEmailParamsValidator
});
