"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
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
var require_field_model = __commonJS({
  "src/models/field/field.model.ts"(exports2) {
    "use strict";
    var _a;
    var _b;
    var _c;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FieldModel = void 0;
    var tslib_1 = require("tslib");
    var lodash_1 = require("lodash");
    var sequelize_typescript_1 = require("sequelize-typescript");
    var ulidx_1 = require("ulidx");
    var field_datatype_1 = (init_field_datatype(), __toCommonJS(field_datatype_exports));
    var FieldModel3 = class FieldModel extends sequelize_typescript_1.Model {
    };
    exports2.FieldModel = FieldModel3;
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
    ], FieldModel3.prototype, "id", void 0);
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
    ], FieldModel3.prototype, "tableID", void 0);
    tslib_1.__decorate([
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
      tslib_1.__metadata("design:type", String)
    ], FieldModel3.prototype, "name", void 0);
    tslib_1.__decorate([
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TINYINT, allowNull: false, validate: { isIn: [(0, lodash_1.values)(field_datatype_1.FieldDataType)] } }),
      tslib_1.__metadata("design:type", typeof (_a = typeof field_datatype_1.FieldDataType !== "undefined" && field_datatype_1.FieldDataType) === "function" ? _a : Object)
    ], FieldModel3.prototype, "dataType", void 0);
    tslib_1.__decorate([
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
      tslib_1.__metadata("design:type", Object)
    ], FieldModel3.prototype, "params", void 0);
    tslib_1.__decorate([
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
      tslib_1.__metadata("design:type", Object)
    ], FieldModel3.prototype, "initialData", void 0);
    tslib_1.__decorate([
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
      tslib_1.__metadata("design:type", Object)
    ], FieldModel3.prototype, "description", void 0);
    tslib_1.__decorate([
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, allowNull: false, defaultValue: false }),
      tslib_1.__metadata("design:type", Boolean)
    ], FieldModel3.prototype, "isRequired", void 0);
    tslib_1.__decorate([
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, allowNull: false, defaultValue: false }),
      tslib_1.__metadata("design:type", Boolean)
    ], FieldModel3.prototype, "isPrimary", void 0);
    tslib_1.__decorate([
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, allowNull: false, defaultValue: false }),
      tslib_1.__metadata("design:type", Boolean)
    ], FieldModel3.prototype, "isInvalid", void 0);
    tslib_1.__decorate([
      sequelize_typescript_1.CreatedAt,
      (0, sequelize_typescript_1.Column)({ allowNull: false }),
      tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], FieldModel3.prototype, "createdAt", void 0);
    tslib_1.__decorate([
      sequelize_typescript_1.UpdatedAt,
      (0, sequelize_typescript_1.Column)({ allowNull: false }),
      tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
    ], FieldModel3.prototype, "updatedAt", void 0);
    tslib_1.__decorate([
      sequelize_typescript_1.DeletedAt,
      sequelize_typescript_1.Index,
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
      tslib_1.__metadata("design:type", Object)
    ], FieldModel3.prototype, "deletedAt", void 0);
    exports2.FieldModel = FieldModel3 = tslib_1.__decorate([
      (0, sequelize_typescript_1.Table)({
        modelName: "field",
        tableName: "Fields",
        paranoid: true
      })
    ], FieldModel3);
  }
});

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
    var RecordMetaModel4 = class RecordMetaModel extends sequelize_typescript_1.Model {
    };
    exports2.RecordMetaModel = RecordMetaModel4;
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
    ], RecordMetaModel4.prototype, "id", void 0);
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
    ], RecordMetaModel4.prototype, "tableID", void 0);
    tslib_1.__decorate([
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
      tslib_1.__metadata("design:type", Object)
    ], RecordMetaModel4.prototype, "name", void 0);
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
    ], RecordMetaModel4.prototype, "createdBy", void 0);
    tslib_1.__decorate([
      sequelize_typescript_1.CreatedAt,
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
      tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], RecordMetaModel4.prototype, "createdAt", void 0);
    tslib_1.__decorate([
      sequelize_typescript_1.UpdatedAt,
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
      tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], RecordMetaModel4.prototype, "updatedAt", void 0);
    tslib_1.__decorate([
      sequelize_typescript_1.DeletedAt,
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
      tslib_1.__metadata("design:type", Object)
    ], RecordMetaModel4.prototype, "deletedAt", void 0);
    exports2.RecordMetaModel = RecordMetaModel4 = tslib_1.__decorate([
      (0, sequelize_typescript_1.Table)({
        modelName: "recordMeta",
        tableName: "RecordMetas",
        paranoid: true
      })
    ], RecordMetaModel4);
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  FieldDataType: () => FieldDataType,
  FieldType: () => fields_exports,
  _FieldModel: () => field_exports,
  _FieldRepository: () => _FieldRepository,
  _RecordDataModel: () => record_data_exports,
  _RecordDataRepository: () => _RecordDataRepository,
  _RecordMetaModel: () => record_meta_exports,
  _RecordMetaRepository: () => _RecordMetaRepository,
  getTableConnection: () => getTableConnection,
  initTableConnection: () => initTableConnection
});
module.exports = __toCommonJS(index_exports);
init_field_datatype();

// src/fields/index.ts
var fields_exports = {};
__export(fields_exports, {
  CONDITION_OPERATOR: () => CONDITION_OPERATOR,
  CalculationType: () => CalculationType,
  FORMULA_CALC_DATATYPE: () => FORMULA_CALC_DATATYPE,
  FieldFormulaInitialDataValidator: () => FieldFormulaInitialDataValidator,
  FieldFormulaParamsValidator: () => FieldFormulaParamsValidator,
  FieldFormulaValueValidator: () => FieldFormulaValueValidator,
  FieldLookupDataValidator: () => FieldLookupDataValidator,
  FieldLookupInitialDataValidator: () => FieldLookupInitialDataValidator,
  FieldLookupParamsValidator: () => FieldLookupParamsValidator,
  FieldReferenceDataValidator: () => FieldReferenceDataValidator,
  FieldReferenceInitialDataValidator: () => FieldReferenceInitialDataValidator,
  FieldReferenceParamsValidator: () => FieldReferenceParamsValidator,
  FieldReferenceTwoWayLinkUpdateMode: () => FieldReferenceTwoWayLinkUpdateMode,
  FieldTextDataValidator: () => FieldTextDataValidator,
  FieldTextInitialDataValidator: () => FieldTextInitialDataValidator,
  FieldTextParamsValidator: () => FieldTextParamsValidator,
  FormulaDataError: () => FormulaDataError,
  LOGICAL_OPERATOR: () => LOGICAL_OPERATOR,
  LOOKUP_CALC_DATATYPE: () => LOOKUP_CALC_DATATYPE,
  LOOKUP_CALC_ERROR: () => LOOKUP_CALC_ERROR,
  LOOKUP_FILTER_VALUE_TYPE: () => LOOKUP_FILTER_VALUE_TYPE,
  LOOKUP_MAX_FIND_RECORD: () => LOOKUP_MAX_FIND_RECORD,
  LOOKUP_SELECTED_ARRANGE: () => LOOKUP_SELECTED_ARRANGE,
  conditionLookupValidator: () => conditionLookupValidator
});

// src/fields/formula/formula.interface.ts
var import_zod = require("zod");
init_field_datatype();
var FORMULA_CALC_DATATYPE = ((FORMULA_CALC_DATATYPE2) => {
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["TEXT"] = FieldDataType.TEXT] = "TEXT";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["NUMBER"] = FieldDataType.NUMBER] = "NUMBER";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["DATE"] = FieldDataType.DATE] = "DATE";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["BOOLEAN"] = FieldDataType.CHECKBOX] = "BOOLEAN";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["CALCULATED_ARRAY"] = 1e3] = "CALCULATED_ARRAY";
  FORMULA_CALC_DATATYPE2[FORMULA_CALC_DATATYPE2["CALCULATED_NULL"] = 1001] = "CALCULATED_NULL";
  return FORMULA_CALC_DATATYPE2;
})(FORMULA_CALC_DATATYPE || {});
var FieldFormulaInitialDataValidator = import_zod.z.null().optional();
var FieldFormulaParamsValidator = import_zod.z.object({
  value: import_zod.z.string().trim(),
  advanced: import_zod.z.boolean().optional(),
  resultFormatType: import_zod.z.any().optional(),
  resultFormatConfig: import_zod.z.any().optional(),
  formulaFunction: import_zod.z.any().optional()
});
var FieldFormulaValueValidator = import_zod.z.undefined().optional();
var FormulaDataError = {
  NAME: "#NAME?",
  CALC: "#CALC!",
  REF: "#REF!",
  VALUE: "#VALUE!",
  INFINITY: "#DIV/0!",
  SYNTAX: "Syntax Error",
  ERROR: "#ERROR!",
  NA: "#N/A",
  LOOP: "#LOOP",
  // internal error
  INTERNAL: "#ERROR!!",
  // for pending keys
  HAS_PENDING: "#Pending"
};

// src/fields/lookup/lookup.interface.ts
var import_zod2 = require("zod");
init_field_datatype();
var CalculationType = /* @__PURE__ */ ((CalculationType2) => {
  CalculationType2["CountAll"] = "count-all";
  CalculationType2["CountValues"] = "count-values";
  CalculationType2["CountUnique"] = "count-unique";
  CalculationType2["CountEmpty"] = "count-empty";
  CalculationType2["CountNotEmpty"] = "count-not-empty";
  CalculationType2["Sum"] = "sum";
  CalculationType2["Average"] = "average";
  CalculationType2["Min"] = "min";
  CalculationType2["Max"] = "max";
  CalculationType2["Med"] = "med";
  CalculationType2["Range"] = "range";
  CalculationType2["CountChecked"] = "count-checked";
  CalculationType2["CountUnchecked"] = "count-unchecked";
  CalculationType2["DayRange"] = "day-range";
  CalculationType2["MonthRange"] = "month-range";
  CalculationType2["EarliestDate"] = "earliest-date";
  CalculationType2["LatestDate"] = "latest-date";
  CalculationType2["NotApply"] = "not-apply";
  return CalculationType2;
})(CalculationType || {});
var CONDITION_OPERATOR = /* @__PURE__ */ ((CONDITION_OPERATOR2) => {
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_EMPTY"] = 1] = "IS_EMPTY";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_NOT_EMPTY"] = 2] = "IS_NOT_EMPTY";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_BETWEEN"] = 3] = "IS_BETWEEN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_NOT_BETWEEN"] = 4] = "IS_NOT_BETWEEN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_EXACTLY"] = 5] = "IS_EXACTLY";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_NOT_EXACTLY"] = 6] = "IS_NOT_EXACTLY";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_BEFORE"] = 7] = "IS_BEFORE";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IS_AFTER"] = 8] = "IS_AFTER";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["CONTAINS"] = 9] = "CONTAINS";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["DOES_NOT_CONTAINS"] = 10] = "DOES_NOT_CONTAINS";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["STARTS_WITH"] = 11] = "STARTS_WITH";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["ENDS_WITH"] = 12] = "ENDS_WITH";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["WORD_COUNT_GREATER_THAN"] = 13] = "WORD_COUNT_GREATER_THAN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["WORD_COUNT_GREATER_THAN_OR_EQUAL"] = 14] = "WORD_COUNT_GREATER_THAN_OR_EQUAL";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["WORD_COUNT_LESS_THAN"] = 15] = "WORD_COUNT_LESS_THAN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["WORD_COUNT_LESS_THAN_OR_EQUAL"] = 16] = "WORD_COUNT_LESS_THAN_OR_EQUAL";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["WORD_COUNT_EQUAL"] = 17] = "WORD_COUNT_EQUAL";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["IN"] = 18] = "IN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["NOT_IN"] = 19] = "NOT_IN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["GREATER_THAN"] = 20] = "GREATER_THAN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["GREATER_THAN_OR_EQUAL"] = 21] = "GREATER_THAN_OR_EQUAL";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["LESS_THAN"] = 22] = "LESS_THAN";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["LESS_THAN_OR_EQUAL"] = 23] = "LESS_THAN_OR_EQUAL";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["COMPARE_TODAY"] = 24] = "COMPARE_TODAY";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["CURRENT_VIEWER"] = 25] = "CURRENT_VIEWER";
  CONDITION_OPERATOR2[CONDITION_OPERATOR2["ANY"] = 26] = "ANY";
  return CONDITION_OPERATOR2;
})(CONDITION_OPERATOR || {});
var LOOKUP_CALC_DATATYPE = {
  NULL: null,
  DATE: FieldDataType.DATE,
  NUMBER: FieldDataType.NUMBER
};
var LOOKUP_FILTER_VALUE_TYPE = /* @__PURE__ */ ((LOOKUP_FILTER_VALUE_TYPE2) => {
  LOOKUP_FILTER_VALUE_TYPE2[LOOKUP_FILTER_VALUE_TYPE2["CUSTOM"] = 1] = "CUSTOM";
  LOOKUP_FILTER_VALUE_TYPE2[LOOKUP_FILTER_VALUE_TYPE2["OTHER_FIELD"] = 2] = "OTHER_FIELD";
  LOOKUP_FILTER_VALUE_TYPE2[LOOKUP_FILTER_VALUE_TYPE2["OTHER_BOARD"] = 3] = "OTHER_BOARD";
  return LOOKUP_FILTER_VALUE_TYPE2;
})(LOOKUP_FILTER_VALUE_TYPE || {});
var LOGICAL_OPERATOR = /* @__PURE__ */ ((LOGICAL_OPERATOR2) => {
  LOGICAL_OPERATOR2[LOGICAL_OPERATOR2["AND"] = 1] = "AND";
  LOGICAL_OPERATOR2[LOGICAL_OPERATOR2["OR"] = 2] = "OR";
  LOGICAL_OPERATOR2[LOGICAL_OPERATOR2["CUSTOM"] = 3] = "CUSTOM";
  return LOGICAL_OPERATOR2;
})(LOGICAL_OPERATOR || {});
var LOOKUP_CALC_ERROR = {
  LOOP: "#LOOP",
  ERROR: "#ERROR"
};
var LOOKUP_SELECTED_ARRANGE = {
  FIRST: 1,
  LAST: 2
};
var LOOKUP_MAX_FIND_RECORD = 20;
var conditionLookupValidator = import_zod2.z.object({
  id: import_zod2.z.string().ulid().optional(),
  fieldID: import_zod2.z.string().ulid(),
  order: import_zod2.z.number(),
  operator: import_zod2.z.nativeEnum(CONDITION_OPERATOR).optional(),
  type: import_zod2.z.nativeEnum(LOOKUP_FILTER_VALUE_TYPE).optional(),
  data: import_zod2.z.any(),
  // For FE
  field: import_zod2.z.any(),
  error: import_zod2.z.any()
});
var FieldLookupInitialDataValidator = import_zod2.z.null().optional();
var FieldLookupParamsValidator = import_zod2.z.object({
  lookup: import_zod2.z.object({
    // new
    customSelectedAmount: import_zod2.z.number().min(1).max(LOOKUP_MAX_FIND_RECORD).nullable().default(1),
    arrangeSelectedData: import_zod2.z.nativeEnum(LOOKUP_SELECTED_ARRANGE).nullable().default(LOOKUP_SELECTED_ARRANGE.FIRST),
    sourceBoardID: import_zod2.z.string().ulid(),
    sourceFieldID: import_zod2.z.string().ulid(),
    sourceFieldDataType: import_zod2.z.number().optional(),
    sourceFieldParams: import_zod2.z.any().optional(),
    format: import_zod2.z.any().optional(),
    operator: import_zod2.z.nativeEnum(CalculationType).default("not-apply" /* NotApply */),
    filter: import_zod2.z.object({
      options: import_zod2.z.array(conditionLookupValidator).min(0).max(5),
      conditions: import_zod2.z.record(
        import_zod2.z.union([import_zod2.z.literal("and"), import_zod2.z.literal("or")]),
        import_zod2.z.array(import_zod2.z.union([conditionLookupValidator, import_zod2.z.any()])).min(0).max(5)
      ),
      logicalOperator: import_zod2.z.nativeEnum(LOGICAL_OPERATOR),
      logicalExpression: import_zod2.z.string().optional()
    }).nullable().optional()
  })
});
var FieldLookupDataValidator = FieldLookupInitialDataValidator;

// src/fields/text/text.interface.ts
var import_zod3 = require("zod");
var FieldTextParamsValidator = import_zod3.z.object({
  notAllowDuplicate: import_zod3.z.boolean().nullable().default(false)
}).nullable().default(null);
var FieldTextInitialDataValidator = import_zod3.z.string().nullable().default(null);
var FieldTextDataValidator = FieldTextInitialDataValidator;

// src/fields/reference/reference.interface.ts
var import_zod4 = require("zod");
var FieldReferenceTwoWayLinkUpdateMode = /* @__PURE__ */ ((FieldReferenceTwoWayLinkUpdateMode2) => {
  FieldReferenceTwoWayLinkUpdateMode2[FieldReferenceTwoWayLinkUpdateMode2["CONVERT_ONE_WAY"] = 1] = "CONVERT_ONE_WAY";
  FieldReferenceTwoWayLinkUpdateMode2[FieldReferenceTwoWayLinkUpdateMode2["DELETE_REFERENCE"] = 2] = "DELETE_REFERENCE";
  return FieldReferenceTwoWayLinkUpdateMode2;
})(FieldReferenceTwoWayLinkUpdateMode || {});
var FieldReferenceInitialDataValidator = import_zod4.z.object({
  value: import_zod4.z.array(import_zod4.z.string().ulid()).min(0),
  selected: import_zod4.z.array(
    import_zod4.z.object({
      id: import_zod4.z.string().ulid(),
      name: import_zod4.z.any()
    })
  ).min(0).optional()
}).nullable().default(null);
var ReferenceTwoWayLinkValidator = import_zod4.z.object({
  sourceReferenceID: import_zod4.z.string().ulid().optional(),
  updateMode: import_zod4.z.nativeEnum(FieldReferenceTwoWayLinkUpdateMode).optional(),
  isKeepTwoWay: import_zod4.z.boolean().optional()
}).nullable().optional();
var FieldReferenceParamsValidator = import_zod4.z.object({
  isMultipleSelect: import_zod4.z.boolean(),
  reference: import_zod4.z.object({
    boardID: import_zod4.z.string().ulid(),
    viewID: import_zod4.z.string().ulid().nullable().optional()
  }),
  twoWayLink: ReferenceTwoWayLinkValidator
});
var FieldReferenceDataValidator = FieldReferenceInitialDataValidator;

// src/models/field/index.ts
var field_exports = {};
__reExport(field_exports, __toESM(require_field_model()));

// src/models/record-data/index.ts
var record_data_exports = {};
__export(record_data_exports, {
  TableDataColumn: () => TableDataColumn
});

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

// src/models/index.ts
var models_exports = {};
__export(models_exports, {
  Models: () => Models,
  TableDataColumn: () => TableDataColumn
});
__reExport(models_exports, field_exports);
__reExport(models_exports, record_meta_exports);
var Models = {
  FieldModel: field_exports.FieldModel,
  RecordMetaModel: record_meta_exports.RecordMetaModel
};

// src/repositories/_repository.ts
var import_sequelize_typescript3 = require("sequelize-typescript");

// src/table-connection.ts
var import_lodash = require("lodash");
var import_promise = require("mysql2/promise");
var import_sequelize_typescript2 = require("sequelize-typescript");
var TABLE_CONNECTIONS = {};
var DEFAULT_CONFIG = {
  dialect: "mysql",
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci"
  },
  pool: {
    min: 0,
    max: 5
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true
    }
  },
  benchmark: false,
  logQueryParameters: false,
  repositoryMode: true
};
var _connect = (dbName) => {
  try {
    const username = DEFAULT_CONFIG.username;
    const password = DEFAULT_CONFIG.password;
    const conn = new import_sequelize_typescript2.Sequelize(dbName, username, password, DEFAULT_CONFIG);
    conn.disconnect = async function() {
      await this.close();
      delete TABLE_CONNECTIONS[dbName];
    };
    conn.createTransaction = async function(options = void 0, callBack = void 0) {
      try {
        const transaction = await this.transaction(options, callBack);
        transaction.safeCommit = async function() {
          return this.finished !== "commit" && this.finished !== "rollback" ? await this.commit() : void 0;
        };
        transaction.safeRollback = async function() {
          return this.finished !== "commit" && this.finished !== "rollback" ? await this.rollback() : void 0;
        };
        return transaction;
      } catch (error) {
        throw error;
      }
    };
    conn.addModels((0, import_lodash.values)(Models));
    TABLE_CONNECTIONS[dbName] = conn;
    return conn;
  } catch (error) {
    throw error;
  }
};
var initTableConnection = async (opts) => {
  (0, import_lodash.assign)(DEFAULT_CONFIG, opts);
  let connection;
  try {
    connection = await (0, import_promise.createConnection)({
      host: opts.host,
      port: opts.port,
      user: opts.username,
      password: opts.password,
      ssl: {
        rejectUnauthorized: true
      }
    });
    await connection.ping();
    console.log("Database host connected");
  } catch (error) {
    throw error;
  } finally {
    await connection?.end();
  }
};
var getTableConnection = (workspaceID) => {
  if (!DEFAULT_CONFIG.database) {
    throw new Error("Database is not set");
  }
  const dbName = `${DEFAULT_CONFIG.database}_${workspaceID}`;
  const conn = TABLE_CONNECTIONS[dbName];
  return conn || _connect(dbName);
};

// src/repositories/_repository.ts
var _Repository = class {
  /**
   * Creates an instance of Repository.
   *
   * @constructor
   * @param {string} workspaceID
   */
  constructor(workspaceID) {
    this.connection = getTableConnection(workspaceID);
  }
  /**
   * @param {ModelCtor} model?
   * @returns {Promise<ModelCtor>}
   */
  async _getModel(model) {
    return model ? this.connection.model(model) : await this._getRepository();
  }
  /**
   * @param {FindOptions} options
   * @returns {Promise<I[]>}
   */
  async _getAll(options) {
    const result = await (await this._getRepository()).findAll(options);
    return result instanceof import_sequelize_typescript3.Sequelize ? result?.map((d) => d.get({ plain: true })) : result;
  }
  /**
   * @param {Identifier} pk
   * @param {FindOptions} options?
   * @returns {Promise<I | null>}
   */
  async _getByPk(pk, options) {
    const result = await (await this._getRepository()).findByPk(pk, options);
    return result instanceof import_sequelize_typescript3.Sequelize ? result?.get({ plain: true }) : result;
  }
  /**
   * @param {FindOptions} options?
   * @returns {Promise<I | null>}
   */
  async _getOne(options) {
    const result = await (await this._getRepository()).findOne(options);
    return result instanceof import_sequelize_typescript3.Sequelize ? result?.get({ plain: true }) : result;
  }
  /**
   * @param {Partial<I>} data
   * @param {CreateOptions} options
   * @returns {Promise<I>}
   */
  async _create(data, options) {
    const result = await (await this._getRepository()).create(data, options);
    return result?.get({ plain: true });
  }
  /**
   * @param {Partial<I>[]} data
   * @param {BulkCreateOptions} options?
   * @returns {Promise<I[]>}
   */
  async _bulkCreate(data, options) {
    const result = await (await this._getRepository()).bulkCreate(data, options);
    return result?.map((d) => d.get({ plain: true }));
  }
  /**
   * @param {Partial<I>} data
   * @param {UpdateOptions} options
   * @returns {Promise<number>}
   */
  async _update(data, options) {
    const result = await (await this._getRepository()).update(data, options);
    return result;
  }
  /**
   * @param {Partial<I>} data
   * @param {UpsertOptions} options
   * @returns {Promise<I>}
   */
  async _upsert(data, options) {
    const [result] = await (await this._getRepository()).upsert(data, options);
    return result?.get({ plain: true });
  }
  /**
   * @param {DestroyOptions} options
   * @returns {Promise<number>}
   */
  async _delete(options) {
    const result = await (await this._getRepository()).destroy(options);
    return result;
  }
};

// src/repositories/field.repository.ts
var _FieldRepository = class extends _Repository {
  /**
   * Creates an instance of FieldRepository.
   *
   * @constructor
   * @param {string} workspaceID
   */
  constructor(workspaceID) {
    super(workspaceID);
  }
  /**
   * Get field repository
   *
   * @returns {Promise<IRepository<FieldModel>>}
   */
  _getRepository() {
    return Promise.resolve(this.connection.getRepository(models_exports.FieldModel));
  }
};

// src/repositories/record-data.repository.ts
var import_lodash2 = require("lodash");
var import_sequelize = require("sequelize");
var import_ulidx = require("ulidx");
var _RecordDataRepository = class extends _Repository {
  /**
   * Creates an instance of RecordDataRepository.
   *
   * @constructor
   * @param {string} workspaceID
   * @param {string} rawTableID
   */
  constructor(workspaceID, rawTableID) {
    super(workspaceID);
    this.tableID = `Table_${rawTableID}`;
  }
  /**
   * Get record data repository
   *
   * @returns {Promise<IRepository<Model>>}
   */
  async _getRepository() {
    const model = await this.checkTableExisted();
    if (!model) throw new Error("Table not found");
    return model;
  }
  /**
   * Check table is existed
   *
   * @returns {Promise<any>}
   */
  async checkTableExisted() {
    if (this.connection.isDefined(this.tableID)) {
      return this.connection.model(this.tableID);
    }
    let attributes;
    try {
      attributes = await this.connection.getQueryInterface().describeTable(this.tableID);
    } catch {
      return;
    }
    const fieldAttributes = (0, import_lodash2.transform)(
      attributes,
      (memo, __, colName) => {
        if ((0, import_ulidx.isValid)(colName)) {
          memo[colName] = { type: import_sequelize.DataTypes.JSON };
        }
      },
      {}
    );
    return this.connection.define(
      this.tableID,
      {
        ...fieldAttributes,
        ...TableDataColumn
      },
      {
        modelName: this.tableID,
        tableName: this.tableID,
        paranoid: true,
        timestamps: false,
        indexes: [
          {
            fields: ["id", "deletedAt"]
          }
        ]
      }
    );
  }
};

// src/repositories/record-meta.repository.ts
var _RecordMetaRepository = class extends _Repository {
  /**
   * Creates an instance of RecordMetaRepository.
   *
   * @constructor
   * @param {string} workspaceID
   */
  constructor(workspaceID) {
    super(workspaceID);
  }
  /**
   * Get record meta repository
   *
   * @returns {Promise<IRepository<RecordMetaModel>>}
   */
  _getRepository() {
    return Promise.resolve(this.connection.getRepository(models_exports.RecordMetaModel));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FieldDataType,
  FieldType,
  _FieldModel,
  _FieldRepository,
  _RecordDataModel,
  _RecordDataRepository,
  _RecordMetaModel,
  _RecordMetaRepository,
  getTableConnection,
  initTableConnection
});
