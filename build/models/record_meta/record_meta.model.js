"use strict";

// src/models/record_meta/record_meta.model.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordMetaModel = void 0;
var tslib_1 = require("tslib");
var sequelize_typescript_1 = require("sequelize-typescript");
var ulidx_1 = require("ulidx");
var RecordMetaModel = class RecordMetaModel2 extends sequelize_typescript_1.Model {
};
exports.RecordMetaModel = RecordMetaModel;
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
], RecordMetaModel.prototype, "id", void 0);
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
], RecordMetaModel.prototype, "tableID", void 0);
tslib_1.__decorate([
  (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
  tslib_1.__metadata("design:type", Object)
], RecordMetaModel.prototype, "name", void 0);
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
], RecordMetaModel.prototype, "createdBy", void 0);
tslib_1.__decorate([
  sequelize_typescript_1.DeletedAt,
  (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
  sequelize_typescript_1.Index,
  tslib_1.__metadata("design:type", Object)
], RecordMetaModel.prototype, "deletedAt", void 0);
exports.RecordMetaModel = RecordMetaModel = tslib_1.__decorate([
  (0, sequelize_typescript_1.Table)({
    modelName: "recordMeta",
    tableName: "RecordMetas",
    paranoid: true,
    timestamps: false
  })
], RecordMetaModel);
