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

// src/fields/date/index.ts
var date_exports = {};
__export(date_exports, {
  FieldDateDataValidator: () => FieldDateDataValidator,
  FieldDateInitialDataValidator: () => FieldDateInitialDataValidator,
  FieldDateParamsValidator: () => FieldDateParamsValidator
});
module.exports = __toCommonJS(date_exports);

// src/fields/date/date.interface.ts
var import_zod = require("zod");
var FieldDateFormatDisplayEnum = /* @__PURE__ */ ((FieldDateFormatDisplayEnum2) => {
  FieldDateFormatDisplayEnum2["DD_MM_YYYY"] = "DD/MM/YYYY";
  FieldDateFormatDisplayEnum2["DD_MM_YY"] = "DD/MM/YY";
  FieldDateFormatDisplayEnum2["YYYY_MM_DD"] = "YYYY/MM/DD";
  FieldDateFormatDisplayEnum2["YY_MM_DD"] = "YY/MM/DD";
  FieldDateFormatDisplayEnum2["DDDD#DD#MM#YYYY"] = "dddd, DD MMM, YYYY";
  FieldDateFormatDisplayEnum2["DD#MMMM#YYYY"] = "DD MMMM, YYYY";
  FieldDateFormatDisplayEnum2["DD#MMM#YYYY"] = "DD MMM, YYYY";
  return FieldDateFormatDisplayEnum2;
})(FieldDateFormatDisplayEnum || {});
var FieldDateFormatHourEnum = /* @__PURE__ */ ((FieldDateFormatHourEnum2) => {
  FieldDateFormatHourEnum2[FieldDateFormatHourEnum2["NONE"] = 0] = "NONE";
  FieldDateFormatHourEnum2["TWELVE_HOUR"] = "hh:mm A";
  FieldDateFormatHourEnum2["TWENTY_HOUR"] = "HH:mm";
  return FieldDateFormatHourEnum2;
})(FieldDateFormatHourEnum || {});
var FieldDateInitialDataValidator = import_zod.z.coerce.date().nullable().default(null);
var FieldDateParamsValidator = import_zod.z.object({
  format: import_zod.z.nativeEnum(FieldDateFormatDisplayEnum).default("DD/MM/YY" /* DD_MM_YY */),
  timeFormat: import_zod.z.nativeEnum(FieldDateFormatHourEnum).default(0 /* NONE */)
}).default({
  format: "DD/MM/YY" /* DD_MM_YY */,
  timeFormat: 0 /* NONE */
});
var FieldDateDataValidator = FieldDateInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldDateDataValidator,
  FieldDateInitialDataValidator,
  FieldDateParamsValidator
});
