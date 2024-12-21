"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldModel = void 0;
const tslib_1 = require("tslib");
const lodash_1 = require("lodash");
const sequelize_typescript_1 = require("sequelize-typescript");
const ulidx_1 = require("ulidx");
const field_datatype_1 = require("../../field-datatype");
let FieldModel = class FieldModel2 extends sequelize_typescript_1.Model {
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
