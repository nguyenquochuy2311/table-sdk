"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/models/record-meta/record-meta.model.ts
var require_record_meta_model = __commonJS({
  "src/models/record-meta/record-meta.model.ts"(exports2) {
    "use strict";
    var _a;
    var _b;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RecordMetaModel = void 0;
    var tslib_1 = require("tslib");
    var sequelize_typescript_1 = require("sequelize-typescript");
    var ulidx_1 = require("ulidx");
    var RecordMetaModel2 = class RecordMetaModel extends sequelize_typescript_1.Model {
    };
    exports2.RecordMetaModel = RecordMetaModel2;
    tslib_1.__decorate([
      sequelize_typescript_1.PrimaryKey,
      (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(26),
        defaultValue: () => (0, ulidx_1.ulid)(),
        validate: {
          isValidULID(value) {
            return (0, ulidx_1.isValid)(value);
          }
        }
      }),
      tslib_1.__metadata("design:type", String)
    ], RecordMetaModel2.prototype, "id", void 0);
    tslib_1.__decorate([
      (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(26),
        allowNull: false,
        validate: {
          isValidULID(value) {
            return (0, ulidx_1.isValid)(value);
          }
        }
      }),
      sequelize_typescript_1.Index,
      tslib_1.__metadata("design:type", String)
    ], RecordMetaModel2.prototype, "tableID", void 0);
    tslib_1.__decorate([
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
      tslib_1.__metadata("design:type", Object)
    ], RecordMetaModel2.prototype, "name", void 0);
    tslib_1.__decorate([
      (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(26),
        validate: {
          isValidULID(value) {
            return (0, ulidx_1.isValid)(value);
          }
        }
      }),
      tslib_1.__metadata("design:type", Object)
    ], RecordMetaModel2.prototype, "createdBy", void 0);
    tslib_1.__decorate([
      sequelize_typescript_1.CreatedAt,
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
      tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], RecordMetaModel2.prototype, "createdAt", void 0);
    tslib_1.__decorate([
      sequelize_typescript_1.UpdatedAt,
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
      tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], RecordMetaModel2.prototype, "updatedAt", void 0);
    tslib_1.__decorate([
      sequelize_typescript_1.DeletedAt,
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
      tslib_1.__metadata("design:type", Object)
    ], RecordMetaModel2.prototype, "deletedAt", void 0);
    exports2.RecordMetaModel = RecordMetaModel2 = tslib_1.__decorate([
      (0, sequelize_typescript_1.Table)({
        modelName: "recordMeta",
        tableName: "RecordMetas",
        paranoid: true
      })
    ], RecordMetaModel2);
  }
});

// src/models/record-data/index.ts
var record_data_exports = {};
__export(record_data_exports, {
  TableDataColumn: () => TableDataColumn
});
module.exports = __toCommonJS(record_data_exports);

// src/models/record-data/record-data.column.ts
var import_sequelize_typescript = require("sequelize-typescript");

// src/models/record-meta/index.ts
var record_meta_exports = {};
__reExport(record_meta_exports, __toESM(require_record_meta_model()));

// src/models/record-data/record-data.column.ts
var TableDataColumn = {
  id: {
    type: import_sequelize_typescript.DataType.STRING(26),
    primaryKey: true,
    references: {
      model: record_meta_exports.RecordMetaModel,
      key: "id"
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  },
  deletedAt: {
    type: import_sequelize_typescript.DataType.DATE
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TableDataColumn
});