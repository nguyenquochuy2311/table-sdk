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

// src/fields/reference/index.ts
var reference_exports = {};
__export(reference_exports, {
  FieldReferenceDataValidator: () => FieldReferenceDataValidator,
  FieldReferenceInitialDataValidator: () => FieldReferenceInitialDataValidator,
  FieldReferenceParamsValidator: () => FieldReferenceParamsValidator,
  FieldReferenceTwoWayLinkUpdateMode: () => FieldReferenceTwoWayLinkUpdateMode
});
module.exports = __toCommonJS(reference_exports);

// src/fields/reference/reference.interface.ts
var import_zod = require("zod");
var FieldReferenceTwoWayLinkUpdateMode = /* @__PURE__ */ ((FieldReferenceTwoWayLinkUpdateMode2) => {
  FieldReferenceTwoWayLinkUpdateMode2[FieldReferenceTwoWayLinkUpdateMode2["CONVERT_ONE_WAY"] = 1] = "CONVERT_ONE_WAY";
  FieldReferenceTwoWayLinkUpdateMode2[FieldReferenceTwoWayLinkUpdateMode2["DELETE_REFERENCE"] = 2] = "DELETE_REFERENCE";
  return FieldReferenceTwoWayLinkUpdateMode2;
})(FieldReferenceTwoWayLinkUpdateMode || {});
var FieldReferenceInitialDataValidator = import_zod.z.object({
  value: import_zod.z.array(import_zod.z.string().ulid()).min(0),
  selected: import_zod.z.array(
    import_zod.z.object({
      id: import_zod.z.string().ulid(),
      name: import_zod.z.any()
    })
  ).min(0).optional()
}).nullable().default(null);
var ReferenceTwoWayLinkValidator = import_zod.z.object({
  sourceReferenceID: import_zod.z.string().ulid().optional(),
  updateMode: import_zod.z.nativeEnum(FieldReferenceTwoWayLinkUpdateMode).optional(),
  isKeepTwoWay: import_zod.z.boolean().optional()
}).nullable().optional();
var FieldReferenceParamsValidator = import_zod.z.object({
  isMultipleSelect: import_zod.z.boolean(),
  reference: import_zod.z.object({
    boardID: import_zod.z.string().ulid(),
    viewID: import_zod.z.string().ulid().nullable().optional()
  }),
  twoWayLink: ReferenceTwoWayLinkValidator
});
var FieldReferenceDataValidator = FieldReferenceInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldReferenceDataValidator,
  FieldReferenceInitialDataValidator,
  FieldReferenceParamsValidator,
  FieldReferenceTwoWayLinkUpdateMode
});
