"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/field-datatype.ts
var field_datatype_exports = {};
__export(field_datatype_exports, {
  FieldDataType: () => FieldDataType
});
var FieldDataType;
var init_field_datatype = __esm({
  "src/field-datatype.ts"() {
    "use strict";
    FieldDataType = {
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
  }
});

// src/models/field/field.model.ts
var _a;
var _b;
var _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldModel = void 0;
var tslib_1 = require("tslib");
var lodash_1 = require("lodash");
var sequelize_typescript_1 = require("sequelize-typescript");
var ulidx_1 = require("ulidx");
var field_datatype_1 = (init_field_datatype(), __toCommonJS(field_datatype_exports));
var FieldModel = class FieldModel2 extends sequelize_typescript_1.Model {
};
exports.FieldModel = FieldModel;
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
], FieldModel.prototype, "id", void 0);
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
  tslib_1.__metadata("design:type", String)
], FieldModel.prototype, "tableID", void 0);
tslib_1.__decorate([
  (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
  tslib_1.__metadata("design:type", String)
], FieldModel.prototype, "name", void 0);
tslib_1.__decorate([
  (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TINYINT, allowNull: false, validate: { isIn: [(0, lodash_1.values)(field_datatype_1.FieldDataType)] } }),
  tslib_1.__metadata("design:type", typeof (_a = typeof field_datatype_1.FieldDataType !== "undefined" && field_datatype_1.FieldDataType) === "function" ? _a : Object)
], FieldModel.prototype, "dataType", void 0);
tslib_1.__decorate([
  (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
  tslib_1.__metadata("design:type", Object)
], FieldModel.prototype, "params", void 0);
tslib_1.__decorate([
  (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
  tslib_1.__metadata("design:type", Object)
], FieldModel.prototype, "initialData", void 0);
tslib_1.__decorate([
  (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
  tslib_1.__metadata("design:type", Object)
], FieldModel.prototype, "description", void 0);
tslib_1.__decorate([
  (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, allowNull: false, defaultValue: false }),
  tslib_1.__metadata("design:type", Boolean)
], FieldModel.prototype, "isRequired", void 0);
tslib_1.__decorate([
  (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, allowNull: false, defaultValue: false }),
  tslib_1.__metadata("design:type", Boolean)
], FieldModel.prototype, "isPrimary", void 0);
tslib_1.__decorate([
  (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, allowNull: false, defaultValue: false }),
  tslib_1.__metadata("design:type", Boolean)
], FieldModel.prototype, "isInvalid", void 0);
tslib_1.__decorate([
  sequelize_typescript_1.CreatedAt,
  (0, sequelize_typescript_1.Column)({ allowNull: false }),
  tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], FieldModel.prototype, "createdAt", void 0);
tslib_1.__decorate([
  sequelize_typescript_1.UpdatedAt,
  (0, sequelize_typescript_1.Column)({ allowNull: false }),
  tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], FieldModel.prototype, "updatedAt", void 0);
tslib_1.__decorate([
  sequelize_typescript_1.DeletedAt,
  sequelize_typescript_1.Index,
  (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
  tslib_1.__metadata("design:type", Object)
], FieldModel.prototype, "deletedAt", void 0);
exports.FieldModel = FieldModel = tslib_1.__decorate([
  (0, sequelize_typescript_1.Table)({
    modelName: "field",
    tableName: "Fields",
    paranoid: true
  })
], FieldModel);
