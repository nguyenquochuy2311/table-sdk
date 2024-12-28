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

// src/models/record_data/index.ts
var record_data_exports = {};
__export(record_data_exports, {
  RecordDataColumn: () => RecordDataColumn
});
module.exports = __toCommonJS(record_data_exports);

// src/models/record_data/record_data.column.ts
var import_lodash = require("lodash");
var import_sequelize_typescript = require("sequelize-typescript");
var import_ulidx = require("ulidx");
var RecordDataColumn = (fieldIDs) => ({
  id: {
    type: import_sequelize_typescript.DataType.STRING(26),
    primaryKey: true,
    validate: {
      isValid(value) {
        return (0, import_ulidx.isValid)(value);
      }
    }
  },
  deletedAt: {
    type: import_sequelize_typescript.DataType.DATE
  },
  ...(0, import_lodash.transform)(
    fieldIDs,
    (memo, fieldID) => {
      memo[fieldID] = { type: import_sequelize_typescript.DataType.JSON };
    },
    {}
  )
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RecordDataColumn
});
