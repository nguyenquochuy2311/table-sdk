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

// src/fields/people/index.ts
var people_exports = {};
__export(people_exports, {
  FieldPeopleDataValidator: () => FieldPeopleDataValidator,
  FieldPeopleInitialDataValidator: () => FieldPeopleInitialDataValidator,
  FieldPeopleParamsValidator: () => FieldPeopleParamsValidator,
  PeopleIncludeModeEnum: () => PeopleIncludeModeEnum
});
module.exports = __toCommonJS(people_exports);

// src/fields/people/people.interface.ts
var import_zod = require("zod");
var PeopleIncludeModeEnum = /* @__PURE__ */ ((PeopleIncludeModeEnum2) => {
  PeopleIncludeModeEnum2[PeopleIncludeModeEnum2["ALL_WORKSPACE_MEMBER"] = 0] = "ALL_WORKSPACE_MEMBER";
  PeopleIncludeModeEnum2[PeopleIncludeModeEnum2["CURRENT_VIEWER"] = 1] = "CURRENT_VIEWER";
  PeopleIncludeModeEnum2[PeopleIncludeModeEnum2["MEMBER_SAME_TEAM"] = 2] = "MEMBER_SAME_TEAM";
  PeopleIncludeModeEnum2[PeopleIncludeModeEnum2["USERS"] = 3] = "USERS";
  PeopleIncludeModeEnum2[PeopleIncludeModeEnum2["TEAMS"] = 4] = "TEAMS";
  return PeopleIncludeModeEnum2;
})(PeopleIncludeModeEnum || {});
var PeopleValidator = import_zod.z.object({
  id: import_zod.z.string().ulid(),
  name: import_zod.z.string(),
  avatar: import_zod.z.any(),
  status: import_zod.z.any()
});
var typeUsers = import_zod.z.object({
  type: import_zod.z.literal(3 /* USERS */),
  value: import_zod.z.array(import_zod.z.string().ulid()).min(0),
  selected: import_zod.z.array(PeopleValidator).min(0).optional()
});
var typeTeams = import_zod.z.object({
  type: import_zod.z.literal(4 /* TEAMS */),
  value: import_zod.z.array(import_zod.z.string().ulid()).min(0),
  selected: import_zod.z.array(PeopleValidator).min(0).optional()
});
var typeIncludeOthers = import_zod.z.object({
  type: import_zod.z.union([
    import_zod.z.literal(0 /* ALL_WORKSPACE_MEMBER */),
    import_zod.z.literal(1 /* CURRENT_VIEWER */),
    import_zod.z.literal(2 /* MEMBER_SAME_TEAM */)
  ])
});
var typeExcludeOthers = import_zod.z.object({
  type: import_zod.z.union([import_zod.z.literal(1 /* CURRENT_VIEWER */), import_zod.z.literal(2 /* MEMBER_SAME_TEAM */)])
});
var FieldPeopleInitialDataValidator = import_zod.z.object({
  value: import_zod.z.array(import_zod.z.string().ulid()).min(1),
  selected: import_zod.z.array(PeopleValidator).min(1).optional()
}).nullable().default(null);
var FieldPeopleParamsValidator = import_zod.z.object({
  isMultipleSelect: import_zod.z.boolean(),
  isNotifyAdded: import_zod.z.boolean().default(false),
  includeSetting: import_zod.z.union([typeIncludeOthers, typeUsers, typeTeams]),
  excludeSetting: import_zod.z.union([typeExcludeOthers, typeUsers, typeTeams]).nullable().default(null)
}).default({
  isMultipleSelect: true,
  isNotifyAdded: false,
  includeSetting: {
    type: 0 /* ALL_WORKSPACE_MEMBER */
  },
  excludeSetting: null
});
var FieldPeopleDataValidator = FieldPeopleInitialDataValidator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldPeopleDataValidator,
  FieldPeopleInitialDataValidator,
  FieldPeopleParamsValidator,
  PeopleIncludeModeEnum
});
