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

// src/field-datatype.ts
var field_datatype_exports = {};
__export(field_datatype_exports, {
  FieldDataType: () => FieldDataType
});
module.exports = __toCommonJS(field_datatype_exports);
var FieldDataType = {
  TEXT: 1,
  CHECKBOX: 2,
  PARAGRAPH: 3,
  ATTACHMENT: 4,
  DROPDOWN: 5,
  NUMBER: 6,
  DATE: 7,
  PHONE: 8,
  WEBSITE: 9,
  EMAIL: 10,
  CURRENCY: 11,
  PEOPLE: 12,
  RATING: 13,
  PROGRESS: 14,
  REFERENCE: 15,
  FORMULA: 16,
  LOOKUP: 18,
  LAST_MODIFIED_BY: 19,
  LAST_MODIFIED_TIME: 20,
  CREATED_BY: 21,
  CREATED_TIME: 22,
  AUTO_NUMBER: 23
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldDataType
});
