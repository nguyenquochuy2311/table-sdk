"use strict";
import { z } from "zod";
export var FieldReferenceTwoWayLinkUpdateMode = /* @__PURE__ */ ((FieldReferenceTwoWayLinkUpdateMode2) => {
  FieldReferenceTwoWayLinkUpdateMode2[FieldReferenceTwoWayLinkUpdateMode2["CONVERT_ONE_WAY"] = 1] = "CONVERT_ONE_WAY";
  FieldReferenceTwoWayLinkUpdateMode2[FieldReferenceTwoWayLinkUpdateMode2["DELETE_REFERENCE"] = 2] = "DELETE_REFERENCE";
  return FieldReferenceTwoWayLinkUpdateMode2;
})(FieldReferenceTwoWayLinkUpdateMode || {});
export const FieldReferenceInitialDataValidator = z.object({
  value: z.array(z.string().ulid()).min(0),
  selected: z.array(
    z.object({
      id: z.string().ulid(),
      name: z.any()
    })
  ).min(0).optional()
}).nullable().default(null);
const ReferenceTwoWayLinkValidator = z.object({
  sourceReferenceID: z.string().ulid().optional(),
  updateMode: z.nativeEnum(FieldReferenceTwoWayLinkUpdateMode).optional(),
  isKeepTwoWay: z.boolean().optional()
}).nullable().optional();
export const FieldReferenceParamsValidator = z.object({
  isMultipleSelect: z.boolean(),
  reference: z.object({
    boardID: z.string().ulid(),
    viewID: z.string().ulid().nullable().optional()
  }),
  twoWayLink: ReferenceTwoWayLinkValidator
});
export const FieldReferenceDataValidator = FieldReferenceInitialDataValidator;
