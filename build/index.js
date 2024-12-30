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

// src/field_datatype.ts
var field_datatype_exports = {};
__export(field_datatype_exports, {
  FieldDataType: () => FieldDataType
});
var FieldDataType;
var init_field_datatype = __esm({
  "src/field_datatype.ts"() {
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
      sequelize_typescript_1.Index,
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
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
      sequelize_typescript_1.Index,
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

// src/models/record_meta/record_meta.model.ts
var require_record_meta_model = __commonJS({
  "src/models/record_meta/record_meta.model.ts"(exports2) {
    "use strict";
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
      sequelize_typescript_1.DeletedAt,
      (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
      sequelize_typescript_1.Index,
      tslib_1.__metadata("design:type", Object)
    ], RecordMetaModel4.prototype, "deletedAt", void 0);
    exports2.RecordMetaModel = RecordMetaModel4 = tslib_1.__decorate([
      (0, sequelize_typescript_1.Table)({
        modelName: "recordMeta",
        tableName: "RecordMetas",
        paranoid: true,
        timestamps: false
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
  CURRENCIES: () => CURRENCIES,
  CalculationType: () => CalculationType,
  DEFAULT_COUNTRY_CODE: () => DEFAULT_COUNTRY_CODE,
  FORMULA_CALC_DATATYPE: () => FORMULA_CALC_DATATYPE,
  FieldAttachmentDataValidator: () => FieldAttachmentDataValidator,
  FieldAttachmentInitialDataValidator: () => FieldAttachmentInitialDataValidator,
  FieldAttachmentParamsValidator: () => FieldAttachmentParamsValidator,
  FieldAutoNumberDataValidator: () => FieldAutoNumberDataValidator,
  FieldAutoNumberInitialDataValidator: () => FieldAutoNumberInitialDataValidator,
  FieldAutoNumberParamsFormatType: () => FieldAutoNumberParamsFormatType,
  FieldAutoNumberParamsFormatValidator: () => FieldAutoNumberParamsFormatValidator,
  FieldAutoNumberParamsValidator: () => FieldAutoNumberParamsValidator,
  FieldCheckboxDataValidator: () => FieldCheckboxDataValidator,
  FieldCheckboxInitialDataValidator: () => FieldCheckboxInitialDataValidator,
  FieldCheckboxParams: () => FieldCheckboxParams,
  FieldCreatedByDataValidator: () => FieldCreatedByDataValidator,
  FieldCreatedByInitialDataValidator: () => FieldCreatedByInitialDataValidator,
  FieldCreatedByParamsValidator: () => FieldCreatedByParamsValidator,
  FieldCreatedTimeDataValidator: () => FieldCreatedTimeDataValidator,
  FieldCreatedTimeInitialDataValidator: () => FieldCreatedTimeInitialDataValidator,
  FieldCreatedTimeParamsValidator: () => FieldCreatedTimeParamsValidator,
  FieldCurrencyDataValidator: () => FieldCurrencyDataValidator,
  FieldCurrencyInitialDataValidator: () => FieldCurrencyInitialDataValidator,
  FieldCurrencyParamsValidator: () => FieldCurrencyParamsValidator,
  FieldDateDataValidator: () => FieldDateDataValidator,
  FieldDateFormatDisplayEnum: () => FieldDateFormatDisplayEnum,
  FieldDateFormatHourEnum: () => FieldDateFormatHourEnum,
  FieldDateInitialDataValidator: () => FieldDateInitialDataValidator,
  FieldDateParamsValidator: () => FieldDateParamsValidator,
  FieldDropdownDataValidator: () => FieldDropdownDataValidator,
  FieldDropdownInitialDataValidator: () => FieldDropdownInitialDataValidator,
  FieldDropdownParamsValidator: () => FieldDropdownParamsValidator,
  FieldEmailDataValidator: () => FieldEmailDataValidator,
  FieldEmailInitialDataValidator: () => FieldEmailInitialDataValidator,
  FieldEmailParamsValidator: () => FieldEmailParamsValidator,
  FieldFormulaInitialDataValidator: () => FieldFormulaInitialDataValidator,
  FieldFormulaParamsValidator: () => FieldFormulaParamsValidator,
  FieldFormulaValueValidator: () => FieldFormulaValueValidator,
  FieldLastModifiedByInitialDataValidator: () => FieldLastModifiedByInitialDataValidator,
  FieldLastModifiedByParamsValidator: () => FieldLastModifiedByParamsValidator,
  FieldLastModifiedByValueValidator: () => FieldLastModifiedByValueValidator,
  FieldLastModifiedTimeDataValidator: () => FieldLastModifiedTimeDataValidator,
  FieldLastModifiedTimeInitialDataValidator: () => FieldLastModifiedTimeInitialDataValidator,
  FieldLastModifiedTimeParamsValidator: () => FieldLastModifiedTimeParamsValidator,
  FieldLookupDataValidator: () => FieldLookupDataValidator,
  FieldLookupInitialDataValidator: () => FieldLookupInitialDataValidator,
  FieldLookupParamsValidator: () => FieldLookupParamsValidator,
  FieldNumberDataValidator: () => FieldNumberDataValidator,
  FieldNumberInitialDataValidator: () => FieldNumberInitialDataValidator,
  FieldNumberParamsValidator: () => FieldNumberParamsValidator,
  FieldParagraphDataValidator: () => FieldParagraphDataValidator,
  FieldParagraphInitialDataValidator: () => FieldParagraphInitialDataValidator,
  FieldParagraphParamsValidator: () => FieldParagraphParamsValidator,
  FieldPeopleDataValidator: () => FieldPeopleDataValidator,
  FieldPeopleInitialDataValidator: () => FieldPeopleInitialDataValidator,
  FieldPeopleParamsValidator: () => FieldPeopleParamsValidator,
  FieldPhoneDataValidator: () => FieldPhoneDataValidator,
  FieldPhoneInitialDataValidator: () => FieldPhoneInitialDataValidator,
  FieldPhoneParamsValidator: () => FieldPhoneParamsValidator,
  FieldProgressDataValidator: () => FieldProgressDataValidator,
  FieldProgressInitialDataValidator: () => FieldProgressInitialDataValidator,
  FieldProgressParamsValidator: () => FieldProgressParamsValidator,
  FieldRatingDataValidator: () => FieldRatingDataValidator,
  FieldRatingInitialDataValidator: () => FieldRatingInitialDataValidator,
  FieldRatingParamsValidator: () => FieldRatingParamsValidator,
  FieldReferenceDataValidator: () => FieldReferenceDataValidator,
  FieldReferenceInitialDataValidator: () => FieldReferenceInitialDataValidator,
  FieldReferenceParamsValidator: () => FieldReferenceParamsValidator,
  FieldReferenceTwoWayLinkUpdateMode: () => FieldReferenceTwoWayLinkUpdateMode,
  FieldTextDataValidator: () => FieldTextDataValidator,
  FieldTextInitialDataValidator: () => FieldTextInitialDataValidator,
  FieldTextParamsValidator: () => FieldTextParamsValidator,
  FieldWebsiteDataValidator: () => FieldWebsiteDataValidator,
  FieldWebsiteInitialDataValidator: () => FieldWebsiteInitialDataValidator,
  FieldWebsiteParamsValidator: () => FieldWebsiteParamsValidator,
  FormulaDataError: () => FormulaDataError,
  LOGICAL_OPERATOR: () => LOGICAL_OPERATOR,
  LOOKUP_CALC_DATATYPE: () => LOOKUP_CALC_DATATYPE,
  LOOKUP_CALC_ERROR: () => LOOKUP_CALC_ERROR,
  LOOKUP_FILTER_VALUE_TYPE: () => LOOKUP_FILTER_VALUE_TYPE,
  LOOKUP_MAX_FIND_RECORD: () => LOOKUP_MAX_FIND_RECORD,
  LOOKUP_SELECTED_ARRANGE: () => LOOKUP_SELECTED_ARRANGE,
  NumberFormatEnum: () => NumberFormatEnum,
  PHONE_COUNTRIES: () => PHONE_COUNTRIES,
  PeopleIncludeModeEnum: () => PeopleIncludeModeEnum,
  conditionLookupValidator: () => conditionLookupValidator
});

// src/fields/attachment/acttachment.interface.ts
var import_zod = require("zod");
var FieldAttachmentInitialDataValidator = import_zod.z.null().default(null);
var FieldAttachmentParamsValidator = import_zod.z.undefined().nullable().default(null);
var FieldAttachmentDataValidator = import_zod.z.array(import_zod.z.any()).min(1).nullable().default(null);

// src/fields/autoNumber/autoNumber.interface.ts
var import_zod2 = require("zod");
var FieldAutoNumberParamsFormatType = /* @__PURE__ */ ((FieldAutoNumberParamsFormatType2) => {
  FieldAutoNumberParamsFormatType2[FieldAutoNumberParamsFormatType2["NUMBER"] = 1] = "NUMBER";
  FieldAutoNumberParamsFormatType2[FieldAutoNumberParamsFormatType2["PREFIX_SUFFIX"] = 2] = "PREFIX_SUFFIX";
  FieldAutoNumberParamsFormatType2[FieldAutoNumberParamsFormatType2["FIELD_VALUE"] = 3] = "FIELD_VALUE";
  return FieldAutoNumberParamsFormatType2;
})(FieldAutoNumberParamsFormatType || {});
var FieldAutoNumberInitialDataValidator = import_zod2.z.undefined();
var FieldAutoNumberParamsFormatValidator = import_zod2.z.union([
  import_zod2.z.object({
    type: import_zod2.z.literal(1 /* NUMBER */),
    value: import_zod2.z.number().max(9).min(1)
  }),
  import_zod2.z.object({
    type: import_zod2.z.literal(2 /* PREFIX_SUFFIX */),
    value: import_zod2.z.string().min(1).max(18)
  })
]);
var FieldAutoNumberParamsValidator = import_zod2.z.object({
  format: import_zod2.z.array(FieldAutoNumberParamsFormatValidator).min(1),
  reCalculate: import_zod2.z.boolean().optional()
});
var FieldAutoNumberDataValidator = FieldAutoNumberInitialDataValidator;

// src/fields/checkbox/checkbox.interface.ts
var import_zod3 = require("zod");
var FieldCheckboxInitialDataValidator = import_zod3.z.boolean().default(false);
var FieldCheckboxParams = import_zod3.z.undefined().nullable().default(null);
var FieldCheckboxDataValidator = FieldCheckboxInitialDataValidator;

// src/fields/createdBy/createdBy.interface.ts
var import_zod4 = require("zod");
var FieldCreatedByInitialDataValidator = import_zod4.z.null().default(null);
var FieldCreatedByParamsValidator = import_zod4.z.undefined().nullable().default(null);
var FieldCreatedByDataValidator = FieldCreatedByInitialDataValidator;

// src/fields/createdTime/createdTime.interface.ts
var import_zod5 = require("zod");
var FieldDateFormatDisplayEnum = /* @__PURE__ */ ((FieldDateFormatDisplayEnum4) => {
  FieldDateFormatDisplayEnum4["DD_MM_YYYY"] = "DD/MM/YYYY";
  FieldDateFormatDisplayEnum4["DD_MM_YY"] = "DD/MM/YY";
  FieldDateFormatDisplayEnum4["YYYY_MM_DD"] = "YYYY/MM/DD";
  FieldDateFormatDisplayEnum4["YY_MM_DD"] = "YY/MM/DD";
  FieldDateFormatDisplayEnum4["DDDD#DD#MM#YYYY"] = "dddd, DD MMM, YYYY";
  FieldDateFormatDisplayEnum4["DD#MMMM#YYYY"] = "DD MMMM, YYYY";
  FieldDateFormatDisplayEnum4["DD#MMM#YYYY"] = "DD MMM, YYYY";
  return FieldDateFormatDisplayEnum4;
})(FieldDateFormatDisplayEnum || {});
var FieldDateFormatHourEnum = /* @__PURE__ */ ((FieldDateFormatHourEnum4) => {
  FieldDateFormatHourEnum4[FieldDateFormatHourEnum4["NONE"] = 0] = "NONE";
  FieldDateFormatHourEnum4["TWELVE_HOUR"] = "hh:mm A";
  FieldDateFormatHourEnum4["TWENTY_HOUR"] = "HH:mm";
  return FieldDateFormatHourEnum4;
})(FieldDateFormatHourEnum || {});
var FieldCreatedTimeInitialDataValidator = import_zod5.z.null().optional();
var FieldCreatedTimeParamsValidator = import_zod5.z.object({
  format: import_zod5.z.nativeEnum(FieldDateFormatDisplayEnum).default("DD/MM/YY" /* DD_MM_YY */),
  timeFormat: import_zod5.z.nativeEnum(FieldDateFormatHourEnum).default(0 /* NONE */)
}).default({
  format: "DD/MM/YY" /* DD_MM_YY */,
  timeFormat: 0 /* NONE */
});
var FieldCreatedTimeDataValidator = FieldCreatedTimeInitialDataValidator;

// src/fields/currency/currency.constant.ts
var CURRENCIES = [
  {
    symbol: "$",
    name: "US Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "USD",
    namePlural: "US dollars"
  },
  {
    symbol: "CA$",
    name: "Canadian Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "CAD",
    namePlural: "Canadian dollars"
  },
  {
    symbol: "\u20AC",
    name: "Euro",
    symbolNative: "\u20AC",
    decimalDigits: 2,
    rounding: 0,
    code: "EUR",
    namePlural: "euros"
  },
  {
    symbol: "AED",
    name: "United Arab Emirates Dirham",
    symbolNative: "\u062F.\u0625.\u200F",
    decimalDigits: 2,
    rounding: 0,
    code: "AED",
    namePlural: "UAE dirhams"
  },
  {
    symbol: "Af",
    name: "Afghan Afghani",
    symbolNative: "\u060B",
    decimalDigits: 0,
    rounding: 0,
    code: "AFN",
    namePlural: "Afghan Afghanis"
  },
  {
    symbol: "ALL",
    name: "Albanian Lek",
    symbolNative: "Lek",
    decimalDigits: 0,
    rounding: 0,
    code: "ALL",
    namePlural: "Albanian lek\xEB"
  },
  {
    symbol: "AMD",
    name: "Armenian Dram",
    symbolNative: "\u0564\u0580.",
    decimalDigits: 0,
    rounding: 0,
    code: "AMD",
    namePlural: "Armenian drams"
  },
  {
    symbol: "AR$",
    name: "Argentine Peso",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "ARS",
    namePlural: "Argentine pesos"
  },
  {
    symbol: "AU$",
    name: "Australian Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "AUD",
    namePlural: "Australian dollars"
  },
  {
    symbol: "man.",
    name: "Azerbaijani Manat",
    symbolNative: "\u043C\u0430\u043D.",
    decimalDigits: 2,
    rounding: 0,
    code: "AZN",
    namePlural: "Azerbaijani manats"
  },
  {
    symbol: "KM",
    name: "Bosnia-Herzegovina Convertible Mark",
    symbolNative: "KM",
    decimalDigits: 2,
    rounding: 0,
    code: "BAM",
    namePlural: "Bosnia-Herzegovina convertible marks"
  },
  {
    symbol: "Tk",
    name: "Bangladeshi Taka",
    symbolNative: "\u09F3",
    decimalDigits: 2,
    rounding: 0,
    code: "BDT",
    namePlural: "Bangladeshi takas"
  },
  {
    symbol: "BGN",
    name: "Bulgarian Lev",
    symbolNative: "\u043B\u0432.",
    decimalDigits: 2,
    rounding: 0,
    code: "BGN",
    namePlural: "Bulgarian leva"
  },
  {
    symbol: "BD",
    name: "Bahraini Dinar",
    symbolNative: "\u062F.\u0628.\u200F",
    decimalDigits: 3,
    rounding: 0,
    code: "BHD",
    namePlural: "Bahraini dinars"
  },
  {
    symbol: "FBu",
    name: "Burundian Franc",
    symbolNative: "FBu",
    decimalDigits: 0,
    rounding: 0,
    code: "BIF",
    namePlural: "Burundian francs"
  },
  {
    symbol: "BN$",
    name: "Brunei Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "BND",
    namePlural: "Brunei dollars"
  },
  {
    symbol: "Bs",
    name: "Bolivian Boliviano",
    symbolNative: "Bs",
    decimalDigits: 2,
    rounding: 0,
    code: "BOB",
    namePlural: "Bolivian bolivianos"
  },
  {
    symbol: "R$",
    name: "Brazilian Real",
    symbolNative: "R$",
    decimalDigits: 2,
    rounding: 0,
    code: "BRL",
    namePlural: "Brazilian reals"
  },
  {
    symbol: "BWP",
    name: "Botswanan Pula",
    symbolNative: "P",
    decimalDigits: 2,
    rounding: 0,
    code: "BWP",
    namePlural: "Botswanan pulas"
  },
  {
    symbol: "Br",
    name: "Belarusian Ruble",
    symbolNative: "\u0440\u0443\u0431.",
    decimalDigits: 2,
    rounding: 0,
    code: "BYN",
    namePlural: "Belarusian rubles"
  },
  {
    symbol: "BZ$",
    name: "Belize Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "BZD",
    namePlural: "Belize dollars"
  },
  {
    symbol: "CDF",
    name: "Congolese Franc",
    symbolNative: "FrCD",
    decimalDigits: 2,
    rounding: 0,
    code: "CDF",
    namePlural: "Congolese francs"
  },
  {
    symbol: "CHF",
    name: "Swiss Franc",
    symbolNative: "CHF",
    decimalDigits: 2,
    rounding: 0.05,
    code: "CHF",
    namePlural: "Swiss francs"
  },
  {
    symbol: "CL$",
    name: "Chilean Peso",
    symbolNative: "$",
    decimalDigits: 0,
    rounding: 0,
    code: "CLP",
    namePlural: "Chilean pesos"
  },
  {
    symbol: "CN\xA5",
    name: "Chinese Yuan",
    symbolNative: "CN\xA5",
    decimalDigits: 2,
    rounding: 0,
    code: "CNY",
    namePlural: "Chinese yuan"
  },
  {
    symbol: "CO$",
    name: "Colombian Peso",
    symbolNative: "$",
    decimalDigits: 0,
    rounding: 0,
    code: "COP",
    namePlural: "Colombian pesos"
  },
  {
    symbol: "\u20A1",
    name: "Costa Rican Col\xF3n",
    symbolNative: "\u20A1",
    decimalDigits: 0,
    rounding: 0,
    code: "CRC",
    namePlural: "Costa Rican col\xF3ns"
  },
  {
    symbol: "CV$",
    name: "Cape Verdean Escudo",
    symbolNative: "CV$",
    decimalDigits: 2,
    rounding: 0,
    code: "CVE",
    namePlural: "Cape Verdean escudos"
  },
  {
    symbol: "K\u010D",
    name: "Czech Republic Koruna",
    symbolNative: "K\u010D",
    decimalDigits: 2,
    rounding: 0,
    code: "CZK",
    namePlural: "Czech Republic korunas"
  },
  {
    symbol: "Fdj",
    name: "Djiboutian Franc",
    symbolNative: "Fdj",
    decimalDigits: 0,
    rounding: 0,
    code: "DJF",
    namePlural: "Djiboutian francs"
  },
  {
    symbol: "Dkr",
    name: "Danish Krone",
    symbolNative: "kr",
    decimalDigits: 2,
    rounding: 0,
    code: "DKK",
    namePlural: "Danish kroner"
  },
  {
    symbol: "RD$",
    name: "Dominican Peso",
    symbolNative: "RD$",
    decimalDigits: 2,
    rounding: 0,
    code: "DOP",
    namePlural: "Dominican pesos"
  },
  {
    symbol: "DA",
    name: "Algerian Dinar",
    symbolNative: "\u062F.\u062C.\u200F",
    decimalDigits: 2,
    rounding: 0,
    code: "DZD",
    namePlural: "Algerian dinars"
  },
  {
    symbol: "Ekr",
    name: "Estonian Kroon",
    symbolNative: "kr",
    decimalDigits: 2,
    rounding: 0,
    code: "EEK",
    namePlural: "Estonian kroons"
  },
  {
    symbol: "EGP",
    name: "Egyptian Pound",
    symbolNative: "\u062C.\u0645.\u200F",
    decimalDigits: 2,
    rounding: 0,
    code: "EGP",
    namePlural: "Egyptian pounds"
  },
  {
    symbol: "Nfk",
    name: "Eritrean Nakfa",
    symbolNative: "Nfk",
    decimalDigits: 2,
    rounding: 0,
    code: "ERN",
    namePlural: "Eritrean nakfas"
  },
  {
    symbol: "Br",
    name: "Ethiopian Birr",
    symbolNative: "Br",
    decimalDigits: 2,
    rounding: 0,
    code: "ETB",
    namePlural: "Ethiopian birrs"
  },
  {
    symbol: "\xA3",
    name: "British Pound Sterling",
    symbolNative: "\xA3",
    decimalDigits: 2,
    rounding: 0,
    code: "GBP",
    namePlural: "British pounds sterling"
  },
  {
    symbol: "GEL",
    name: "Georgian Lari",
    symbolNative: "GEL",
    decimalDigits: 2,
    rounding: 0,
    code: "GEL",
    namePlural: "Georgian laris"
  },
  {
    symbol: "GH\u20B5",
    name: "Ghanaian Cedi",
    symbolNative: "GH\u20B5",
    decimalDigits: 2,
    rounding: 0,
    code: "GHS",
    namePlural: "Ghanaian cedis"
  },
  {
    symbol: "FG",
    name: "Guinean Franc",
    symbolNative: "FG",
    decimalDigits: 0,
    rounding: 0,
    code: "GNF",
    namePlural: "Guinean francs"
  },
  {
    symbol: "GTQ",
    name: "Guatemalan Quetzal",
    symbolNative: "Q",
    decimalDigits: 2,
    rounding: 0,
    code: "GTQ",
    namePlural: "Guatemalan quetzals"
  },
  {
    symbol: "HK$",
    name: "Hong Kong Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "HKD",
    namePlural: "Hong Kong dollars"
  },
  {
    symbol: "HNL",
    name: "Honduran Lempira",
    symbolNative: "L",
    decimalDigits: 2,
    rounding: 0,
    code: "HNL",
    namePlural: "Honduran lempiras"
  },
  {
    symbol: "kn",
    name: "Croatian Kuna",
    symbolNative: "kn",
    decimalDigits: 2,
    rounding: 0,
    code: "HRK",
    namePlural: "Croatian kunas"
  },
  {
    symbol: "Ft",
    name: "Hungarian Forint",
    symbolNative: "Ft",
    decimalDigits: 0,
    rounding: 0,
    code: "HUF",
    namePlural: "Hungarian forints"
  },
  {
    symbol: "Rp",
    name: "Indonesian Rupiah",
    symbolNative: "Rp",
    decimalDigits: 0,
    rounding: 0,
    code: "IDR",
    namePlural: "Indonesian rupiahs"
  },
  {
    symbol: "\u20AA",
    name: "Israeli New Sheqel",
    symbolNative: "\u20AA",
    decimalDigits: 2,
    rounding: 0,
    code: "ILS",
    namePlural: "Israeli new sheqels"
  },
  {
    symbol: "Rs",
    name: "Indian Rupee",
    symbolNative: "\u099F\u0995\u09BE",
    decimalDigits: 2,
    rounding: 0,
    code: "INR",
    namePlural: "Indian rupees"
  },
  {
    symbol: "IQD",
    name: "Iraqi Dinar",
    symbolNative: "\u062F.\u0639.\u200F",
    decimalDigits: 0,
    rounding: 0,
    code: "IQD",
    namePlural: "Iraqi dinars"
  },
  {
    symbol: "IRR",
    name: "Iranian Rial",
    symbolNative: "\uFDFC",
    decimalDigits: 0,
    rounding: 0,
    code: "IRR",
    namePlural: "Iranian rials"
  },
  {
    symbol: "Ikr",
    name: "Icelandic Kr\xF3na",
    symbolNative: "kr",
    decimalDigits: 0,
    rounding: 0,
    code: "ISK",
    namePlural: "Icelandic kr\xF3nur"
  },
  {
    symbol: "J$",
    name: "Jamaican Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "JMD",
    namePlural: "Jamaican dollars"
  },
  {
    symbol: "JD",
    name: "Jordanian Dinar",
    symbolNative: "\u062F.\u0623.\u200F",
    decimalDigits: 3,
    rounding: 0,
    code: "JOD",
    namePlural: "Jordanian dinars"
  },
  {
    symbol: "\xA5",
    name: "Japanese Yen",
    symbolNative: "\uFFE5",
    decimalDigits: 0,
    rounding: 0,
    code: "JPY",
    namePlural: "Japanese yen"
  },
  {
    symbol: "Ksh",
    name: "Kenyan Shilling",
    symbolNative: "Ksh",
    decimalDigits: 2,
    rounding: 0,
    code: "KES",
    namePlural: "Kenyan shillings"
  },
  {
    symbol: "KHR",
    name: "Cambodian Riel",
    symbolNative: "\u17DB",
    decimalDigits: 2,
    rounding: 0,
    code: "KHR",
    namePlural: "Cambodian riels"
  },
  {
    symbol: "CF",
    name: "Comorian Franc",
    symbolNative: "FC",
    decimalDigits: 0,
    rounding: 0,
    code: "KMF",
    namePlural: "Comorian francs"
  },
  {
    symbol: "\u20A9",
    name: "South Korean Won",
    symbolNative: "\u20A9",
    decimalDigits: 0,
    rounding: 0,
    code: "KRW",
    namePlural: "South Korean won"
  },
  {
    symbol: "KD",
    name: "Kuwaiti Dinar",
    symbolNative: "\u062F.\u0643.\u200F",
    decimalDigits: 3,
    rounding: 0,
    code: "KWD",
    namePlural: "Kuwaiti dinars"
  },
  {
    symbol: "KZT",
    name: "Kazakhstani Tenge",
    symbolNative: "\u0442\u04A3\u0433.",
    decimalDigits: 2,
    rounding: 0,
    code: "KZT",
    namePlural: "Kazakhstani tenges"
  },
  {
    symbol: "LB\xA3",
    name: "Lebanese Pound",
    symbolNative: "\u0644.\u0644.\u200F",
    decimalDigits: 0,
    rounding: 0,
    code: "LBP",
    namePlural: "Lebanese pounds"
  },
  {
    symbol: "SLRs",
    name: "Sri Lankan Rupee",
    symbolNative: "SL Re",
    decimalDigits: 2,
    rounding: 0,
    code: "LKR",
    namePlural: "Sri Lankan rupees"
  },
  {
    symbol: "Lt",
    name: "Lithuanian Litas",
    symbolNative: "Lt",
    decimalDigits: 2,
    rounding: 0,
    code: "LTL",
    namePlural: "Lithuanian litai"
  },
  {
    symbol: "Ls",
    name: "Latvian Lats",
    symbolNative: "Ls",
    decimalDigits: 2,
    rounding: 0,
    code: "LVL",
    namePlural: "Latvian lati"
  },
  {
    symbol: "LD",
    name: "Libyan Dinar",
    symbolNative: "\u062F.\u0644.\u200F",
    decimalDigits: 3,
    rounding: 0,
    code: "LYD",
    namePlural: "Libyan dinars"
  },
  {
    symbol: "MAD",
    name: "Moroccan Dirham",
    symbolNative: "\u062F.\u0645.\u200F",
    decimalDigits: 2,
    rounding: 0,
    code: "MAD",
    namePlural: "Moroccan dirhams"
  },
  {
    symbol: "MDL",
    name: "Moldovan Leu",
    symbolNative: "MDL",
    decimalDigits: 2,
    rounding: 0,
    code: "MDL",
    namePlural: "Moldovan lei"
  },
  {
    symbol: "MGA",
    name: "Malagasy Ariary",
    symbolNative: "MGA",
    decimalDigits: 0,
    rounding: 0,
    code: "MGA",
    namePlural: "Malagasy Ariaries"
  },
  {
    symbol: "MKD",
    name: "Macedonian Denar",
    symbolNative: "MKD",
    decimalDigits: 2,
    rounding: 0,
    code: "MKD",
    namePlural: "Macedonian denari"
  },
  {
    symbol: "MMK",
    name: "Myanma Kyat",
    symbolNative: "K",
    decimalDigits: 0,
    rounding: 0,
    code: "MMK",
    namePlural: "Myanma kyats"
  },
  {
    symbol: "MOP$",
    name: "Macanese Pataca",
    symbolNative: "MOP$",
    decimalDigits: 2,
    rounding: 0,
    code: "MOP",
    namePlural: "Macanese patacas"
  },
  {
    symbol: "MURs",
    name: "Mauritian Rupee",
    symbolNative: "MURs",
    decimalDigits: 0,
    rounding: 0,
    code: "MUR",
    namePlural: "Mauritian rupees"
  },
  {
    symbol: "MX$",
    name: "Mexican Peso",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "MXN",
    namePlural: "Mexican pesos"
  },
  {
    symbol: "RM",
    name: "Malaysian Ringgit",
    symbolNative: "RM",
    decimalDigits: 2,
    rounding: 0,
    code: "MYR",
    namePlural: "Malaysian ringgits"
  },
  {
    symbol: "MTn",
    name: "Mozambican Metical",
    symbolNative: "MTn",
    decimalDigits: 2,
    rounding: 0,
    code: "MZN",
    namePlural: "Mozambican meticals"
  },
  {
    symbol: "N$",
    name: "Namibian Dollar",
    symbolNative: "N$",
    decimalDigits: 2,
    rounding: 0,
    code: "NAD",
    namePlural: "Namibian dollars"
  },
  {
    symbol: "\u20A6",
    name: "Nigerian Naira",
    symbolNative: "\u20A6",
    decimalDigits: 2,
    rounding: 0,
    code: "NGN",
    namePlural: "Nigerian nairas"
  },
  {
    symbol: "C$",
    name: "Nicaraguan C\xF3rdoba",
    symbolNative: "C$",
    decimalDigits: 2,
    rounding: 0,
    code: "NIO",
    namePlural: "Nicaraguan c\xF3rdobas"
  },
  {
    symbol: "Nkr",
    name: "Norwegian Krone",
    symbolNative: "kr",
    decimalDigits: 2,
    rounding: 0,
    code: "NOK",
    namePlural: "Norwegian kroner"
  },
  {
    symbol: "NPRs",
    name: "Nepalese Rupee",
    symbolNative: "\u0928\u0947\u0930\u0942",
    decimalDigits: 2,
    rounding: 0,
    code: "NPR",
    namePlural: "Nepalese rupees"
  },
  {
    symbol: "NZ$",
    name: "New Zealand Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "NZD",
    namePlural: "New Zealand dollars"
  },
  {
    symbol: "OMR",
    name: "Omani Rial",
    symbolNative: "\u0631.\u0639.\u200F",
    decimalDigits: 3,
    rounding: 0,
    code: "OMR",
    namePlural: "Omani rials"
  },
  {
    symbol: "B/.",
    name: "Panamanian Balboa",
    symbolNative: "B/.",
    decimalDigits: 2,
    rounding: 0,
    code: "PAB",
    namePlural: "Panamanian balboas"
  },
  {
    symbol: "S/.",
    name: "Peruvian Nuevo Sol",
    symbolNative: "S/.",
    decimalDigits: 2,
    rounding: 0,
    code: "PEN",
    namePlural: "Peruvian nuevos soles"
  },
  {
    symbol: "\u20B1",
    name: "Philippine Peso",
    symbolNative: "\u20B1",
    decimalDigits: 2,
    rounding: 0,
    code: "PHP",
    namePlural: "Philippine pesos"
  },
  {
    symbol: "PKRs",
    name: "Pakistani Rupee",
    symbolNative: "\u20A8",
    decimalDigits: 0,
    rounding: 0,
    code: "PKR",
    namePlural: "Pakistani rupees"
  },
  {
    symbol: "z\u0142",
    name: "Polish Zloty",
    symbolNative: "z\u0142",
    decimalDigits: 2,
    rounding: 0,
    code: "PLN",
    namePlural: "Polish zlotys"
  },
  {
    symbol: "\u20B2",
    name: "Paraguayan Guarani",
    symbolNative: "\u20B2",
    decimalDigits: 0,
    rounding: 0,
    code: "PYG",
    namePlural: "Paraguayan guaranis"
  },
  {
    symbol: "QR",
    name: "Qatari Rial",
    symbolNative: "\u0631.\u0642.\u200F",
    decimalDigits: 2,
    rounding: 0,
    code: "QAR",
    namePlural: "Qatari rials"
  },
  {
    symbol: "RON",
    name: "Romanian Leu",
    symbolNative: "RON",
    decimalDigits: 2,
    rounding: 0,
    code: "RON",
    namePlural: "Romanian lei"
  },
  {
    symbol: "din.",
    name: "Serbian Dinar",
    symbolNative: "\u0434\u0438\u043D.",
    decimalDigits: 0,
    rounding: 0,
    code: "RSD",
    namePlural: "Serbian dinars"
  },
  {
    symbol: "RUB",
    name: "Russian Ruble",
    symbolNative: "\u20BD.",
    decimalDigits: 2,
    rounding: 0,
    code: "RUB",
    namePlural: "Russian rubles"
  },
  {
    symbol: "RWF",
    name: "Rwandan Franc",
    symbolNative: "FR",
    decimalDigits: 0,
    rounding: 0,
    code: "RWF",
    namePlural: "Rwandan francs"
  },
  {
    symbol: "SR",
    name: "Saudi Riyal",
    symbolNative: "\u0631.\u0633.\u200F",
    decimalDigits: 2,
    rounding: 0,
    code: "SAR",
    namePlural: "Saudi riyals"
  },
  {
    symbol: "SDG",
    name: "Sudanese Pound",
    symbolNative: "SDG",
    decimalDigits: 2,
    rounding: 0,
    code: "SDG",
    namePlural: "Sudanese pounds"
  },
  {
    symbol: "Skr",
    name: "Swedish Krona",
    symbolNative: "kr",
    decimalDigits: 2,
    rounding: 0,
    code: "SEK",
    namePlural: "Swedish kronor"
  },
  {
    symbol: "S$",
    name: "Singapore Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "SGD",
    namePlural: "Singapore dollars"
  },
  {
    symbol: "Ssh",
    name: "Somali Shilling",
    symbolNative: "Ssh",
    decimalDigits: 0,
    rounding: 0,
    code: "SOS",
    namePlural: "Somali shillings"
  },
  {
    symbol: "SY\xA3",
    name: "Syrian Pound",
    symbolNative: "\u0644.\u0633.\u200F",
    decimalDigits: 0,
    rounding: 0,
    code: "SYP",
    namePlural: "Syrian pounds"
  },
  {
    symbol: "\u0E3F",
    name: "Thai Baht",
    symbolNative: "\u0E3F",
    decimalDigits: 2,
    rounding: 0,
    code: "THB",
    namePlural: "Thai baht"
  },
  {
    symbol: "DT",
    name: "Tunisian Dinar",
    symbolNative: "\u062F.\u062A.\u200F",
    decimalDigits: 3,
    rounding: 0,
    code: "TND",
    namePlural: "Tunisian dinars"
  },
  {
    symbol: "T$",
    name: "Tongan Pa\u02BBanga",
    symbolNative: "T$",
    decimalDigits: 2,
    rounding: 0,
    code: "TOP",
    namePlural: "Tongan pa\u02BBanga"
  },
  {
    symbol: "TL",
    name: "Turkish Lira",
    symbolNative: "TL",
    decimalDigits: 2,
    rounding: 0,
    code: "TRY",
    namePlural: "Turkish Lira"
  },
  {
    symbol: "TT$",
    name: "Trinidad and Tobago Dollar",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "TTD",
    namePlural: "Trinidad and Tobago dollars"
  },
  {
    symbol: "NT$",
    name: "New Taiwan Dollar",
    symbolNative: "NT$",
    decimalDigits: 2,
    rounding: 0,
    code: "TWD",
    namePlural: "New Taiwan dollars"
  },
  {
    symbol: "TSh",
    name: "Tanzanian Shilling",
    symbolNative: "TSh",
    decimalDigits: 0,
    rounding: 0,
    code: "TZS",
    namePlural: "Tanzanian shillings"
  },
  {
    symbol: "\u20B4",
    name: "Ukrainian Hryvnia",
    symbolNative: "\u20B4",
    decimalDigits: 2,
    rounding: 0,
    code: "UAH",
    namePlural: "Ukrainian hryvnias"
  },
  {
    symbol: "USh",
    name: "Ugandan Shilling",
    symbolNative: "USh",
    decimalDigits: 0,
    rounding: 0,
    code: "UGX",
    namePlural: "Ugandan shillings"
  },
  {
    symbol: "$U",
    name: "Uruguayan Peso",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "UYU",
    namePlural: "Uruguayan pesos"
  },
  {
    symbol: "UZS",
    name: "Uzbekistan Som",
    symbolNative: "UZS",
    decimalDigits: 0,
    rounding: 0,
    code: "UZS",
    namePlural: "Uzbekistan som"
  },
  {
    symbol: "Bs.F.",
    name: "Venezuelan Bol\xEDvar",
    symbolNative: "Bs.F.",
    decimalDigits: 2,
    rounding: 0,
    code: "VEF",
    namePlural: "Venezuelan bol\xEDvars"
  },
  {
    symbol: "\u20AB",
    name: "Vietnamese Dong",
    symbolNative: "\u20AB",
    decimalDigits: 0,
    rounding: 0,
    code: "VND",
    namePlural: "Vietnamese dong"
  },
  {
    symbol: "FCFA",
    name: "CFA Franc BEAC",
    symbolNative: "FCFA",
    decimalDigits: 0,
    rounding: 0,
    code: "XAF",
    namePlural: "CFA francs BEAC"
  },
  {
    symbol: "CFA",
    name: "CFA Franc BCEAO",
    symbolNative: "CFA",
    decimalDigits: 0,
    rounding: 0,
    code: "XOF",
    namePlural: "CFA francs BCEAO"
  },
  {
    symbol: "YR",
    name: "Yemeni Rial",
    symbolNative: "\u0631.\u064A.\u200F",
    decimalDigits: 0,
    rounding: 0,
    code: "YER",
    namePlural: "Yemeni rials"
  },
  {
    symbol: "R",
    name: "South African Rand",
    symbolNative: "R",
    decimalDigits: 2,
    rounding: 0,
    code: "ZAR",
    namePlural: "South African rand"
  },
  {
    symbol: "ZK",
    name: "Zambian Kwacha",
    symbolNative: "ZK",
    decimalDigits: 0,
    rounding: 0,
    code: "ZMK",
    namePlural: "Zambian kwachas"
  },
  {
    symbol: "ZWL$",
    name: "Zimbabwean Dollar",
    symbolNative: "ZWL$",
    decimalDigits: 0,
    rounding: 0,
    code: "ZWL",
    namePlural: "Zimbabwean Dollar"
  }
];

// src/fields/currency/currency.interface.ts
var import_lodash = require("lodash");
var import_zod6 = require("zod");
var CurrencyDisplayFormat = /* @__PURE__ */ ((CurrencyDisplayFormat2) => {
  CurrencyDisplayFormat2["COMMA"] = "commas-separator";
  CurrencyDisplayFormat2["THOUSAND"] = "thousand-unit";
  return CurrencyDisplayFormat2;
})(CurrencyDisplayFormat || {});
var FieldCurrencyInitialDataValidator = import_zod6.z.number().nullable().default(null);
var FieldCurrencyParamsValidator = import_zod6.z.object({
  currency: import_zod6.z.enum((0, import_lodash.map)(CURRENCIES, "symbol")).nullable().default(null),
  decimalPlaces: import_zod6.z.coerce.number().int().gte(0).lte(6).nullable().default(null),
  format: import_zod6.z.nativeEnum(CurrencyDisplayFormat).nullable().default(null),
  allowNegative: import_zod6.z.boolean().default(false)
}).default({
  currency: null,
  decimalPlaces: null,
  format: null,
  allowNegative: false
});
var FieldCurrencyDataValidator = FieldCurrencyInitialDataValidator;

// src/fields/date/date.interface.ts
var import_zod7 = require("zod");
var FieldDateFormatDisplayEnum2 = /* @__PURE__ */ ((FieldDateFormatDisplayEnum4) => {
  FieldDateFormatDisplayEnum4["DD_MM_YYYY"] = "DD/MM/YYYY";
  FieldDateFormatDisplayEnum4["DD_MM_YY"] = "DD/MM/YY";
  FieldDateFormatDisplayEnum4["YYYY_MM_DD"] = "YYYY/MM/DD";
  FieldDateFormatDisplayEnum4["YY_MM_DD"] = "YY/MM/DD";
  FieldDateFormatDisplayEnum4["DDDD#DD#MM#YYYY"] = "dddd, DD MMM, YYYY";
  FieldDateFormatDisplayEnum4["DD#MMMM#YYYY"] = "DD MMMM, YYYY";
  FieldDateFormatDisplayEnum4["DD#MMM#YYYY"] = "DD MMM, YYYY";
  return FieldDateFormatDisplayEnum4;
})(FieldDateFormatDisplayEnum2 || {});
var FieldDateFormatHourEnum2 = /* @__PURE__ */ ((FieldDateFormatHourEnum4) => {
  FieldDateFormatHourEnum4[FieldDateFormatHourEnum4["NONE"] = 0] = "NONE";
  FieldDateFormatHourEnum4["TWELVE_HOUR"] = "hh:mm A";
  FieldDateFormatHourEnum4["TWENTY_HOUR"] = "HH:mm";
  return FieldDateFormatHourEnum4;
})(FieldDateFormatHourEnum2 || {});
var FieldDateInitialDataValidator = import_zod7.z.coerce.date().nullable().default(null);
var FieldDateParamsValidator = import_zod7.z.object({
  format: import_zod7.z.nativeEnum(FieldDateFormatDisplayEnum2).default("DD/MM/YY" /* DD_MM_YY */),
  timeFormat: import_zod7.z.nativeEnum(FieldDateFormatHourEnum2).default(0 /* NONE */)
}).default({
  format: "DD/MM/YY" /* DD_MM_YY */,
  timeFormat: 0 /* NONE */
});
var FieldDateDataValidator = FieldDateInitialDataValidator;

// src/fields/dropdown/dropdown.interface.ts
var import_zod8 = require("zod");
var FieldDropdownParamsReferenceValidator = import_zod8.z.object({
  isMultipleSelect: import_zod8.z.boolean(),
  reference: import_zod8.z.object({
    boardID: import_zod8.z.string().ulid(),
    fieldID: import_zod8.z.string().ulid()
  })
});
var OptionValidator = import_zod8.z.object({
  name: import_zod8.z.string().max(255).min(0).nullable().default(null),
  color: import_zod8.z.string().length(7),
  value: import_zod8.z.string().ulid()
});
var FieldDropdownParamsOptionsValidator = import_zod8.z.object({
  isMultipleSelect: import_zod8.z.boolean(),
  allowAddSelections: import_zod8.z.boolean().default(false),
  options: import_zod8.z.array(OptionValidator).min(1).nullable()
});
var FieldDropdownInitialDataValidator = import_zod8.z.object({
  value: import_zod8.z.array(import_zod8.z.string().ulid()).min(1),
  selected: import_zod8.z.array(OptionValidator).min(1).optional(),
  newOptions: import_zod8.z.array(OptionValidator).optional()
}).nullable().default(null);
var FieldDropdownParamsValidator = import_zod8.z.union([FieldDropdownParamsReferenceValidator, FieldDropdownParamsOptionsValidator]).default({
  options: null,
  isMultipleSelect: true,
  allowAddSelections: false
});
var FieldDropdownDataValidator = FieldDropdownInitialDataValidator;

// src/fields/email/email.interface.ts
var import_zod9 = require("zod");
var emailRegex = new RegExp(
  /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
);
var FieldEmailInitialDataValidator = import_zod9.z.string().regex(emailRegex, "Invalid Email!").nullable().default(null);
var FieldEmailParamsValidator = import_zod9.z.object({
  notAllowDuplicate: import_zod9.z.boolean().nullable().default(false)
}).nullable().default(null);
var FieldEmailDataValidator = FieldEmailInitialDataValidator;

// src/fields/formula/formula.interface.ts
var import_zod10 = require("zod");
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
var FieldFormulaInitialDataValidator = import_zod10.z.null().optional();
var FieldFormulaParamsValidator = import_zod10.z.object({
  value: import_zod10.z.string().trim(),
  advanced: import_zod10.z.boolean().optional(),
  resultFormatType: import_zod10.z.any().optional(),
  resultFormatConfig: import_zod10.z.any().optional(),
  formulaFunction: import_zod10.z.any().optional()
});
var FieldFormulaValueValidator = import_zod10.z.undefined().optional();
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

// src/fields/lastModifiedBy/lastModifiedBy.interface.ts
var import_zod11 = require("zod");
var FieldLastModifiedByInitialDataValidator = import_zod11.z.null().optional();
var FieldLastModifiedByParamsValidator = import_zod11.z.object({
  targetFieldID: import_zod11.z.string().ulid().nullable()
}).default({
  targetFieldID: null
});
var FieldLastModifiedByValueValidator = FieldLastModifiedByInitialDataValidator;

// src/fields/lastModifiedTime/lastModifiedTime.interface.ts
var import_zod12 = require("zod");
var FieldDateFormatDisplayEnum3 = /* @__PURE__ */ ((FieldDateFormatDisplayEnum4) => {
  FieldDateFormatDisplayEnum4["DD_MM_YYYY"] = "DD/MM/YYYY";
  FieldDateFormatDisplayEnum4["DD_MM_YY"] = "DD/MM/YY";
  FieldDateFormatDisplayEnum4["YYYY_MM_DD"] = "YYYY/MM/DD";
  FieldDateFormatDisplayEnum4["YY_MM_DD"] = "YY/MM/DD";
  FieldDateFormatDisplayEnum4["DDDD#DD#MM#YYYY"] = "dddd, DD MMM, YYYY";
  FieldDateFormatDisplayEnum4["DD#MMMM#YYYY"] = "DD MMMM, YYYY";
  FieldDateFormatDisplayEnum4["DD#MMM#YYYY"] = "DD MMM, YYYY";
  return FieldDateFormatDisplayEnum4;
})(FieldDateFormatDisplayEnum3 || {});
var FieldDateFormatHourEnum3 = /* @__PURE__ */ ((FieldDateFormatHourEnum4) => {
  FieldDateFormatHourEnum4[FieldDateFormatHourEnum4["NONE"] = 0] = "NONE";
  FieldDateFormatHourEnum4["TWELVE_HOUR"] = "hh:mm A";
  FieldDateFormatHourEnum4["TWENTY_HOUR"] = "HH:mm";
  return FieldDateFormatHourEnum4;
})(FieldDateFormatHourEnum3 || {});
var FieldLastModifiedTimeInitialDataValidator = import_zod12.z.null().optional();
var FieldLastModifiedTimeParamsValidator = import_zod12.z.object({
  format: import_zod12.z.nativeEnum(FieldDateFormatDisplayEnum3).default("DD/MM/YY" /* DD_MM_YY */),
  timeFormat: import_zod12.z.nativeEnum(FieldDateFormatHourEnum3).default(0 /* NONE */),
  targetFieldID: import_zod12.z.string().ulid().nullable()
}).default({
  format: "DD/MM/YY" /* DD_MM_YY */,
  timeFormat: 0 /* NONE */,
  targetFieldID: null
});
var FieldLastModifiedTimeDataValidator = FieldLastModifiedTimeInitialDataValidator;

// src/fields/lookup/lookup.interface.ts
var import_zod13 = require("zod");
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
var conditionLookupValidator = import_zod13.z.object({
  id: import_zod13.z.string().ulid().optional(),
  fieldID: import_zod13.z.string().ulid(),
  order: import_zod13.z.number(),
  operator: import_zod13.z.nativeEnum(CONDITION_OPERATOR).optional(),
  type: import_zod13.z.nativeEnum(LOOKUP_FILTER_VALUE_TYPE).optional(),
  data: import_zod13.z.any(),
  // For FE
  field: import_zod13.z.any(),
  error: import_zod13.z.any()
});
var FieldLookupInitialDataValidator = import_zod13.z.null().optional();
var FieldLookupParamsValidator = import_zod13.z.object({
  lookup: import_zod13.z.object({
    // new
    customSelectedAmount: import_zod13.z.number().min(1).max(LOOKUP_MAX_FIND_RECORD).nullable().default(1),
    arrangeSelectedData: import_zod13.z.nativeEnum(LOOKUP_SELECTED_ARRANGE).nullable().default(LOOKUP_SELECTED_ARRANGE.FIRST),
    sourceBoardID: import_zod13.z.string().ulid(),
    sourceFieldID: import_zod13.z.string().ulid(),
    sourceFieldDataType: import_zod13.z.number().optional(),
    sourceFieldParams: import_zod13.z.any().optional(),
    format: import_zod13.z.any().optional(),
    operator: import_zod13.z.nativeEnum(CalculationType).default("not-apply" /* NotApply */),
    filter: import_zod13.z.object({
      options: import_zod13.z.array(conditionLookupValidator).min(0).max(5),
      conditions: import_zod13.z.record(
        import_zod13.z.union([import_zod13.z.literal("and"), import_zod13.z.literal("or")]),
        import_zod13.z.array(import_zod13.z.union([conditionLookupValidator, import_zod13.z.any()])).min(0).max(5)
      ),
      logicalOperator: import_zod13.z.nativeEnum(LOGICAL_OPERATOR),
      logicalExpression: import_zod13.z.string().optional()
    }).nullable().optional()
  })
});
var FieldLookupDataValidator = FieldLookupInitialDataValidator;

// src/fields/number/number.interface.ts
var import_zod14 = require("zod");
var NumberFormatEnum = /* @__PURE__ */ ((NumberFormatEnum2) => {
  NumberFormatEnum2["COMMA"] = "commas-separator";
  NumberFormatEnum2["THOUSAND"] = "thousand-unit";
  NumberFormatEnum2["HUNDRED"] = "percent";
  return NumberFormatEnum2;
})(NumberFormatEnum || {});
var FieldNumberInitialDataValidator = import_zod14.z.number().nullable().default(null);
var FieldNumberParamsValidator = import_zod14.z.object({
  format: import_zod14.z.nativeEnum(NumberFormatEnum).nullable().default(null),
  decimalPlaces: import_zod14.z.coerce.number().int().gte(0).lte(6).nullable().default(null),
  allowNegative: import_zod14.z.boolean().default(false)
}).default({
  format: null,
  decimalPlaces: null,
  allowNegative: false
});
var FieldNumberDataValidator = FieldNumberInitialDataValidator;

// src/fields/paragraph/parapraph.interface.ts
var import_zod15 = require("zod");
var FieldParagraphInitialDataValidator = import_zod15.z.object({
  text: import_zod15.z.string(),
  html: import_zod15.z.string().nullable().default(null),
  data: import_zod15.z.any().default(null)
}).nullable().default(null);
var FieldParagraphParamsValidator = import_zod15.z.object({
  isRichTextFormatting: import_zod15.z.boolean().optional().default(false)
}).default({
  isRichTextFormatting: false
});
var FieldParagraphDataValidator = FieldParagraphInitialDataValidator;

// src/fields/people/people.interface.ts
var import_zod16 = require("zod");
var PeopleIncludeModeEnum = /* @__PURE__ */ ((PeopleIncludeModeEnum2) => {
  PeopleIncludeModeEnum2[PeopleIncludeModeEnum2["ALL_WORKSPACE_MEMBER"] = 0] = "ALL_WORKSPACE_MEMBER";
  PeopleIncludeModeEnum2[PeopleIncludeModeEnum2["CURRENT_VIEWER"] = 1] = "CURRENT_VIEWER";
  PeopleIncludeModeEnum2[PeopleIncludeModeEnum2["MEMBER_SAME_TEAM"] = 2] = "MEMBER_SAME_TEAM";
  PeopleIncludeModeEnum2[PeopleIncludeModeEnum2["USERS"] = 3] = "USERS";
  PeopleIncludeModeEnum2[PeopleIncludeModeEnum2["TEAMS"] = 4] = "TEAMS";
  return PeopleIncludeModeEnum2;
})(PeopleIncludeModeEnum || {});
var PeopleValidator = import_zod16.z.object({
  id: import_zod16.z.string().ulid(),
  name: import_zod16.z.string(),
  avatar: import_zod16.z.any(),
  status: import_zod16.z.any()
});
var typeUsers = import_zod16.z.object({
  type: import_zod16.z.literal(3 /* USERS */),
  value: import_zod16.z.array(import_zod16.z.string().ulid()).min(0),
  selected: import_zod16.z.array(PeopleValidator).min(0).optional()
});
var typeTeams = import_zod16.z.object({
  type: import_zod16.z.literal(4 /* TEAMS */),
  value: import_zod16.z.array(import_zod16.z.string().ulid()).min(0),
  selected: import_zod16.z.array(PeopleValidator).min(0).optional()
});
var typeIncludeOthers = import_zod16.z.object({
  type: import_zod16.z.union([
    import_zod16.z.literal(0 /* ALL_WORKSPACE_MEMBER */),
    import_zod16.z.literal(1 /* CURRENT_VIEWER */),
    import_zod16.z.literal(2 /* MEMBER_SAME_TEAM */)
  ])
});
var typeExcludeOthers = import_zod16.z.object({
  type: import_zod16.z.union([import_zod16.z.literal(1 /* CURRENT_VIEWER */), import_zod16.z.literal(2 /* MEMBER_SAME_TEAM */)])
});
var FieldPeopleInitialDataValidator = import_zod16.z.object({
  value: import_zod16.z.array(import_zod16.z.string().ulid()).min(1),
  selected: import_zod16.z.array(PeopleValidator).min(1).optional()
}).nullable().default(null);
var FieldPeopleParamsValidator = import_zod16.z.object({
  isMultipleSelect: import_zod16.z.boolean(),
  isNotifyAdded: import_zod16.z.boolean().default(false),
  includeSetting: import_zod16.z.union([typeIncludeOthers, typeUsers, typeTeams]),
  excludeSetting: import_zod16.z.union([typeExcludeOthers, typeUsers, typeTeams]).nullable().default(null)
}).default({
  isMultipleSelect: true,
  isNotifyAdded: false,
  includeSetting: {
    type: 0 /* ALL_WORKSPACE_MEMBER */
  },
  excludeSetting: null
});
var FieldPeopleDataValidator = FieldPeopleInitialDataValidator;

// src/fields/phone/phone.interface.ts
var import_lodash2 = require("lodash");
var import_zod17 = require("zod");

// src/fields/phone/phone_countries.ts
var DEFAULT_COUNTRY_CODE = "VN";
var PHONE_COUNTRIES = [
  { name: "Israel", dialCode: "+972", code: "IL" },
  { name: "Afghanistan", dialCode: "+93", code: "AF" },
  { name: "Albania", dialCode: "+355", code: "AL" },
  { name: "Algeria", dialCode: "+213", code: "DZ" },
  { name: "AmericanSamoa", dialCode: "+1 684", code: "AS" },
  { name: "Andorra", dialCode: "+376", code: "AD" },
  { name: "Angola", dialCode: "+244", code: "AO" },
  { name: "Anguilla", dialCode: "+1 264", code: "AI" },
  { name: "Antigua and Barbuda", dialCode: "+1268", code: "AG" },
  { name: "Argentina", dialCode: "+54", code: "AR" },
  { name: "Armenia", dialCode: "+374", code: "AM" },
  { name: "Aruba", dialCode: "+297", code: "AW" },
  { name: "Australia", dialCode: "+61", code: "AU" },
  { name: "Austria", dialCode: "+43", code: "AT" },
  { name: "Azerbaijan", dialCode: "+994", code: "AZ" },
  { name: "Bahamas", dialCode: "+1 242", code: "BS" },
  { name: "Bahrain", dialCode: "+973", code: "BH" },
  { name: "Bangladesh", dialCode: "+880", code: "BD" },
  { name: "Barbados", dialCode: "+1 246", code: "BB" },
  { name: "Belarus", dialCode: "+375", code: "BY" },
  { name: "Belgium", dialCode: "+32", code: "BE" },
  { name: "Belize", dialCode: "+501", code: "BZ" },
  { name: "Benin", dialCode: "+229", code: "BJ" },
  { name: "Bermuda", dialCode: "+1 441", code: "BM" },
  { name: "Bhutan", dialCode: "+975", code: "BT" },
  { name: "Bosnia and Herzegovina", dialCode: "+387", code: "BA" },
  { name: "Botswana", dialCode: "+267", code: "BW" },
  { name: "Brazil", dialCode: "+55", code: "BR" },
  { name: "British Indian Ocean Territory", dialCode: "+246", code: "IO" },
  { name: "Bulgaria", dialCode: "+359", code: "BG" },
  { name: "Burkina Faso", dialCode: "+226", code: "BF" },
  { name: "Burundi", dialCode: "+257", code: "BI" },
  { name: "Cambodia", dialCode: "+855", code: "KH" },
  { name: "Cameroon", dialCode: "+237", code: "CM" },
  { name: "Canada", dialCode: "+1", code: "CA" },
  { name: "Cape Verde", dialCode: "+238", code: "CV" },
  { name: "Cayman Islands", dialCode: "+ 345", code: "KY" },
  { name: "Central African Republic", dialCode: "+236", code: "CF" },
  { name: "Chad", dialCode: "+235", code: "TD" },
  { name: "Chile", dialCode: "+56", code: "CL" },
  { name: "China", dialCode: "+86", code: "CN" },
  { name: "Christmas Island", dialCode: "+61", code: "CX" },
  { name: "Colombia", dialCode: "+57", code: "CO" },
  { name: "Comoros", dialCode: "+269", code: "KM" },
  { name: "Congo", dialCode: "+242", code: "CG" },
  { name: "Cook Islands", dialCode: "+682", code: "CK" },
  { name: "Costa Rica", dialCode: "+506", code: "CR" },
  { name: "Croatia", dialCode: "+385", code: "HR" },
  { name: "Cuba", dialCode: "+53", code: "CU" },
  { name: "Cyprus", dialCode: "+537", code: "CY" },
  { name: "Czech Republic", dialCode: "+420", code: "CZ" },
  { name: "Denmark", dialCode: "+45", code: "DK" },
  { name: "Djibouti", dialCode: "+253", code: "DJ" },
  { name: "Dominica", dialCode: "+1 767", code: "DM" },
  { name: "Dominican Republic", dialCode: "+1 849", code: "DO" },
  { name: "Ecuador", dialCode: "+593", code: "EC" },
  { name: "Egypt", dialCode: "+20", code: "EG" },
  { name: "El Salvador", dialCode: "+503", code: "SV" },
  { name: "Equatorial Guinea", dialCode: "+240", code: "GQ" },
  { name: "Eritrea", dialCode: "+291", code: "ER" },
  { name: "Estonia", dialCode: "+372", code: "EE" },
  { name: "Ethiopia", dialCode: "+251", code: "ET" },
  { name: "Faroe Islands", dialCode: "+298", code: "FO" },
  { name: "Fiji", dialCode: "+679", code: "FJ" },
  { name: "Finland", dialCode: "+358", code: "FI" },
  { name: "France", dialCode: "+33", code: "FR" },
  { name: "French Guiana", dialCode: "+594", code: "GF" },
  { name: "French Polynesia", dialCode: "+689", code: "PF" },
  { name: "Gabon", dialCode: "+241", code: "GA" },
  { name: "Gambia", dialCode: "+220", code: "GM" },
  { name: "Georgia", dialCode: "+995", code: "GE" },
  { name: "Germany", dialCode: "+49", code: "DE" },
  { name: "Ghana", dialCode: "+233", code: "GH" },
  { name: "Gibraltar", dialCode: "+350", code: "GI" },
  { name: "Greece", dialCode: "+30", code: "GR" },
  { name: "Greenland", dialCode: "+299", code: "GL" },
  { name: "Grenada", dialCode: "+1 473", code: "GD" },
  { name: "Guadeloupe", dialCode: "+590", code: "GP" },
  { name: "Guam", dialCode: "+1 671", code: "GU" },
  { name: "Guatemala", dialCode: "+502", code: "GT" },
  { name: "Guinea", dialCode: "+224", code: "GN" },
  { name: "Guinea-Bissau", dialCode: "+245", code: "GW" },
  { name: "Guyana", dialCode: "+595", code: "GY" },
  { name: "Haiti", dialCode: "+509", code: "HT" },
  { name: "Honduras", dialCode: "+504", code: "HN" },
  { name: "Hungary", dialCode: "+36", code: "HU" },
  { name: "Iceland", dialCode: "+354", code: "IS" },
  { name: "India", dialCode: "+91", code: "IN" },
  { name: "Indonesia", dialCode: "+62", code: "ID" },
  { name: "Iraq", dialCode: "+964", code: "IQ" },
  { name: "Ireland", dialCode: "+353", code: "IE" },
  { name: "Israel", dialCode: "+972", code: "IL" },
  { name: "Italy", dialCode: "+39", code: "IT" },
  { name: "Jamaica", dialCode: "+1 876", code: "JM" },
  { name: "Japan", dialCode: "+81", code: "JP" },
  { name: "Jordan", dialCode: "+962", code: "JO" },
  { name: "Kazakhstan", dialCode: "+7 7", code: "KZ" },
  { name: "Kenya", dialCode: "+254", code: "KE" },
  { name: "Kiribati", dialCode: "+686", code: "KI" },
  { name: "Kuwait", dialCode: "+965", code: "KW" },
  { name: "Kyrgyzstan", dialCode: "+996", code: "KG" },
  { name: "Latvia", dialCode: "+371", code: "LV" },
  { name: "Lebanon", dialCode: "+961", code: "LB" },
  { name: "Lesotho", dialCode: "+266", code: "LS" },
  { name: "Liberia", dialCode: "+231", code: "LR" },
  { name: "Liechtenstein", dialCode: "+423", code: "LI" },
  { name: "Lithuania", dialCode: "+370", code: "LT" },
  { name: "Luxembourg", dialCode: "+352", code: "LU" },
  { name: "Madagascar", dialCode: "+261", code: "MG" },
  { name: "Malawi", dialCode: "+265", code: "MW" },
  { name: "Malaysia", dialCode: "+60", code: "MY" },
  { name: "Maldives", dialCode: "+960", code: "MV" },
  { name: "Mali", dialCode: "+223", code: "ML" },
  { name: "Malta", dialCode: "+356", code: "MT" },
  { name: "Marshall Islands", dialCode: "+692", code: "MH" },
  { name: "Martinique", dialCode: "+596", code: "MQ" },
  { name: "Mauritania", dialCode: "+222", code: "MR" },
  { name: "Mauritius", dialCode: "+230", code: "MU" },
  { name: "Mayotte", dialCode: "+262", code: "YT" },
  { name: "Mexico", dialCode: "+52", code: "MX" },
  { name: "Monaco", dialCode: "+377", code: "MC" },
  { name: "Mongolia", dialCode: "+976", code: "MN" },
  { name: "Montenegro", dialCode: "+382", code: "ME" },
  { name: "Montserrat", dialCode: "+1664", code: "MS" },
  { name: "Morocco", dialCode: "+212", code: "MA" },
  { name: "Myanmar", dialCode: "+95", code: "MM" },
  { name: "Namibia", dialCode: "+264", code: "NA" },
  { name: "Nauru", dialCode: "+674", code: "NR" },
  { name: "Nepal", dialCode: "+977", code: "NP" },
  { name: "Netherlands", dialCode: "+31", code: "NL" },
  { name: "New Caledonia", dialCode: "+687", code: "NC" },
  { name: "New Zealand", dialCode: "+64", code: "NZ" },
  { name: "Nicaragua", dialCode: "+505", code: "NI" },
  { name: "Niger", dialCode: "+227", code: "NE" },
  { name: "Nigeria", dialCode: "+234", code: "NG" },
  { name: "Niue", dialCode: "+683", code: "NU" },
  { name: "Norfolk Island", dialCode: "+672", code: "NF" },
  { name: "Northern Mariana Islands", dialCode: "+1 670", code: "MP" },
  { name: "Norway", dialCode: "+47", code: "NO" },
  { name: "Oman", dialCode: "+968", code: "OM" },
  { name: "Pakistan", dialCode: "+92", code: "PK" },
  { name: "Palau", dialCode: "+680", code: "PW" },
  { name: "Panama", dialCode: "+507", code: "PA" },
  { name: "Papua New Guinea", dialCode: "+675", code: "PG" },
  { name: "Paraguay", dialCode: "+595", code: "PY" },
  { name: "Peru", dialCode: "+51", code: "PE" },
  { name: "Philippines", dialCode: "+63", code: "PH" },
  { name: "Poland", dialCode: "+48", code: "PL" },
  { name: "Portugal", dialCode: "+351", code: "PT" },
  { name: "Puerto Rico", dialCode: "+1 939", code: "PR" },
  { name: "Qatar", dialCode: "+974", code: "QA" },
  { name: "Romania", dialCode: "+40", code: "RO" },
  { name: "Rwanda", dialCode: "+250", code: "RW" },
  { name: "Samoa", dialCode: "+685", code: "WS" },
  { name: "San Marino", dialCode: "+378", code: "SM" },
  { name: "Saudi Arabia", dialCode: "+966", code: "SA" },
  { name: "Senegal", dialCode: "+221", code: "SN" },
  { name: "Serbia", dialCode: "+381", code: "RS" },
  { name: "Seychelles", dialCode: "+248", code: "SC" },
  { name: "Sierra Leone", dialCode: "+232", code: "SL" },
  { name: "Singapore", dialCode: "+65", code: "SG" },
  { name: "Slovakia", dialCode: "+421", code: "SK" },
  { name: "Slovenia", dialCode: "+386", code: "SI" },
  { name: "Solomon Islands", dialCode: "+677", code: "SB" },
  { name: "South Africa", dialCode: "+27", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", dialCode: "+500", code: "GS" },
  { name: "Spain", dialCode: "+34", code: "ES" },
  { name: "Sri Lanka", dialCode: "+94", code: "LK" },
  { name: "Sudan", dialCode: "+249", code: "SD" },
  { name: "Suriname", dialCode: "+597", code: "SR" },
  { name: "Swaziland", dialCode: "+268", code: "SZ" },
  { name: "Sweden", dialCode: "+46", code: "SE" },
  { name: "Switzerland", dialCode: "+41", code: "CH" },
  { name: "Tajikistan", dialCode: "+992", code: "TJ" },
  { name: "Thailand", dialCode: "+66", code: "TH" },
  { name: "Togo", dialCode: "+228", code: "TG" },
  { name: "Tokelau", dialCode: "+690", code: "TK" },
  { name: "Tonga", dialCode: "+676", code: "TO" },
  { name: "Trinidad and Tobago", dialCode: "+1 868", code: "TT" },
  { name: "Tunisia", dialCode: "+216", code: "TN" },
  { name: "Turkey", dialCode: "+90", code: "TR" },
  { name: "Turkmenistan", dialCode: "+993", code: "TM" },
  { name: "Turks and Caicos Islands", dialCode: "+1 649", code: "TC" },
  { name: "Tuvalu", dialCode: "+688", code: "TV" },
  { name: "Uganda", dialCode: "+256", code: "UG" },
  { name: "Ukraine", dialCode: "+380", code: "UA" },
  { name: "United Arab Emirates", dialCode: "+971", code: "AE" },
  { name: "United Kingdom", dialCode: "+44", code: "GB" },
  { name: "United States", dialCode: "+1", code: "US" },
  { name: "Uruguay", dialCode: "+598", code: "UY" },
  { name: "Uzbekistan", dialCode: "+998", code: "UZ" },
  { name: "Vanuatu", dialCode: "+678", code: "VU" },
  { name: "Wallis and Futuna", dialCode: "+681", code: "WF" },
  { name: "Yemen", dialCode: "+967", code: "YE" },
  { name: "Zambia", dialCode: "+260", code: "ZM" },
  { name: "Zimbabwe", dialCode: "+263", code: "ZW" },
  { name: "Bolivia, Plurinational State of", dialCode: "+591", code: "BO" },
  { name: "Brunei Darussalam", dialCode: "+673", code: "BN" },
  { name: "Cocos (Keeling) Islands", dialCode: "+61", code: "CC" },
  { name: "Congo, The Democratic Republic of the", dialCode: "+243", code: "CD" },
  { name: "Cote d'Ivoire", dialCode: "+225", code: "CI" },
  { name: "Falkland Islands (Malvinas)", dialCode: "+500", code: "FK" },
  { name: "Guernsey", dialCode: "+44", code: "GG" },
  { name: "Holy See (Vatican City State)", dialCode: "+379", code: "VA" },
  { name: "Hong Kong", dialCode: "+852", code: "HK" },
  { name: "Iran, Islamic Republic of", dialCode: "+98", code: "IR" },
  { name: "Isle of Man", dialCode: "+44", code: "IM" },
  { name: "Jersey", dialCode: "+44", code: "JE" },
  { name: "Korea, Democratic People's Republic of", dialCode: "+850", code: "KP" },
  { name: "Korea, Republic of", dialCode: "+82", code: "KR" },
  { name: "Lao People's Democratic Republic", dialCode: "+856", code: "LA" },
  { name: "Libyan Arab Jamahiriya", dialCode: "+218", code: "LY" },
  { name: "Macao", dialCode: "+853", code: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", dialCode: "+389", code: "MK" },
  { name: "Micronesia, Federated States of", dialCode: "+691", code: "FM" },
  { name: "Moldova, Republic of", dialCode: "+373", code: "MD" },
  { name: "Mozambique", dialCode: "+258", code: "MZ" },
  { name: "Palestinian Territory, Occupied", dialCode: "+970", code: "PS" },
  { name: "Pitcairn", dialCode: "+872", code: "PN" },
  { name: "R\xE9union", dialCode: "+262", code: "RE" },
  { name: "Russia", dialCode: "+7", code: "RU" },
  { name: "Saint Barth\xE9lemy", dialCode: "+590", code: "BL" },
  { name: "Saint Helena, Ascension and Tristan Da Cunha", dialCode: "+290", code: "SH" },
  { name: "Saint Kitts and Nevis", dialCode: "+1 869", code: "KN" },
  { name: "Saint Lucia", dialCode: "+1 758", code: "LC" },
  { name: "Saint Pierre and Miquelon", dialCode: "+508", code: "PM" },
  { name: "Saint Vincent and the Grenadines", dialCode: "+1 784", code: "VC" },
  { name: "Sao Tome and Principe", dialCode: "+239", code: "ST" },
  { name: "Somalia", dialCode: "+252", code: "SO" },
  { name: "Syrian Arab Republic", dialCode: "+963", code: "SY" },
  { name: "Taiwan, Province of China", dialCode: "+886", code: "TW" },
  { name: "Tanzania, United Republic of", dialCode: "+255", code: "TZ" },
  { name: "Timor-Leste", dialCode: "+670", code: "TL" },
  { name: "Venezuela, Bolivarian Republic of", dialCode: "+58", code: "VE" },
  { name: "Viet Nam", dialCode: "+84", code: "VN" },
  { name: "Virgin Islands, British", dialCode: "+1 284", code: "VG" },
  { name: "Virgin Islands, U.S.", dialCode: "+1 340", code: "VI" }
];

// src/fields/phone/phone.interface.ts
var phoneRegex = new RegExp(/^[0-9()\-+ ]*$/);
var FieldPhoneInitialDataValidator = import_zod17.z.object({
  phone: import_zod17.z.string().regex(phoneRegex, "Invalid Number!").nullable().default(null),
  countryCode: import_zod17.z.enum((0, import_lodash2.map)(PHONE_COUNTRIES, "code")).nullable().default(null)
}).nullable().default(null);
var FieldPhoneParamsValidator = import_zod17.z.object({
  countryCode: import_zod17.z.enum((0, import_lodash2.map)(PHONE_COUNTRIES, "code")).nullable(),
  notAllowDuplicate: import_zod17.z.boolean().nullable().default(false)
}).default({
  countryCode: DEFAULT_COUNTRY_CODE
});
var FieldPhoneDataValidator = FieldPhoneInitialDataValidator;

// src/fields/progress/progress.interface.ts
var import_zod18 = require("zod");
var FieldProgressInitialDataValidator = import_zod18.z.number().min(0).nullable().default(null);
var FieldProgressAuto = import_zod18.z.object({
  isAuto: import_zod18.z.literal(true)
});
var FieldProgressManual = import_zod18.z.object({
  isAuto: import_zod18.z.literal(false).default(false),
  startValue: import_zod18.z.number().min(0),
  endValue: import_zod18.z.number().min(0)
});
var FieldProgressParamsValidator = import_zod18.z.union([FieldProgressAuto, FieldProgressManual]).default({
  isAuto: false,
  startValue: 0,
  endValue: 1
});
var FieldProgressDataValidator = FieldProgressInitialDataValidator;

// src/fields/rating/rating.interface.ts
var import_zod19 = require("zod");
var FieldRatingInitialDataValidator = import_zod19.z.coerce.number().int().gte(1).lte(10).nullable().default(null);
var FieldRatingParamsValidator = import_zod19.z.object({
  maxPoint: import_zod19.z.coerce.number().int().gte(1).lte(10)
}).default({
  maxPoint: 5
});
var FieldRatingDataValidator = FieldRatingInitialDataValidator;

// src/fields/reference/reference.interface.ts
var import_zod20 = require("zod");
var FieldReferenceTwoWayLinkUpdateMode = /* @__PURE__ */ ((FieldReferenceTwoWayLinkUpdateMode2) => {
  FieldReferenceTwoWayLinkUpdateMode2[FieldReferenceTwoWayLinkUpdateMode2["CONVERT_ONE_WAY"] = 1] = "CONVERT_ONE_WAY";
  FieldReferenceTwoWayLinkUpdateMode2[FieldReferenceTwoWayLinkUpdateMode2["DELETE_REFERENCE"] = 2] = "DELETE_REFERENCE";
  return FieldReferenceTwoWayLinkUpdateMode2;
})(FieldReferenceTwoWayLinkUpdateMode || {});
var FieldReferenceInitialDataValidator = import_zod20.z.object({
  value: import_zod20.z.array(import_zod20.z.string().ulid()).min(0),
  selected: import_zod20.z.array(
    import_zod20.z.object({
      id: import_zod20.z.string().ulid(),
      name: import_zod20.z.any()
    })
  ).min(0).optional()
}).nullable().default(null);
var ReferenceTwoWayLinkValidator = import_zod20.z.object({
  sourceReferenceID: import_zod20.z.string().ulid().optional(),
  updateMode: import_zod20.z.nativeEnum(FieldReferenceTwoWayLinkUpdateMode).optional(),
  isKeepTwoWay: import_zod20.z.boolean().optional()
}).nullable().optional();
var FieldReferenceParamsValidator = import_zod20.z.object({
  isMultipleSelect: import_zod20.z.boolean(),
  reference: import_zod20.z.object({
    boardID: import_zod20.z.string().ulid(),
    viewID: import_zod20.z.string().ulid().nullable().optional()
  }),
  twoWayLink: ReferenceTwoWayLinkValidator
});
var FieldReferenceDataValidator = FieldReferenceInitialDataValidator;

// src/fields/text/text.interface.ts
var import_zod21 = require("zod");
var FieldTextParamsValidator = import_zod21.z.object({
  notAllowDuplicate: import_zod21.z.boolean().nullable().default(false)
}).nullable().default(null);
var FieldTextInitialDataValidator = import_zod21.z.string().nullable().default(null);
var FieldTextDataValidator = FieldTextInitialDataValidator;

// src/fields/website/website.interface.ts
var import_zod22 = require("zod");
var urlRegex = new RegExp(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}[.]{0,1}(\/.*)?/);
var FieldWebsiteInitialDataValidator = import_zod22.z.object({
  text: import_zod22.z.string().min(0).optional(),
  link: import_zod22.z.string().regex(urlRegex, "Invalid URL!")
}).nullable().default(null);
var FieldWebsiteParamsValidator = import_zod22.z.object({
  notAllowDuplicate: import_zod22.z.boolean().nullable().default(false)
}).nullable().default(null);
var FieldWebsiteDataValidator = FieldWebsiteInitialDataValidator;

// src/models/field/index.ts
var field_exports = {};
__reExport(field_exports, __toESM(require_field_model()));

// src/models/record_data/index.ts
var record_data_exports = {};
__export(record_data_exports, {
  RecordDataColumn: () => RecordDataColumn
});

// src/models/record_data/record_data.column.ts
var import_lodash3 = require("lodash");
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
  createdAt: {
    type: import_sequelize_typescript.DataType.DATE,
    allowNull: false
  },
  updatedAt: {
    type: import_sequelize_typescript.DataType.DATE,
    allowNull: false
  },
  deletedAt: {
    type: import_sequelize_typescript.DataType.DATE
  },
  ...(0, import_lodash3.transform)(
    fieldIDs,
    (memo, fieldID) => {
      memo[fieldID] = { type: import_sequelize_typescript.DataType.JSON };
    },
    {}
  )
});

// src/models/record_meta/index.ts
var record_meta_exports = {};
__reExport(record_meta_exports, __toESM(require_record_meta_model()));

// src/models/index.ts
var models_exports = {};
__export(models_exports, {
  Models: () => Models,
  RecordDataColumn: () => RecordDataColumn
});
__reExport(models_exports, field_exports);
__reExport(models_exports, record_meta_exports);
var Models = {
  FieldModel: field_exports.FieldModel,
  RecordMetaModel: record_meta_exports.RecordMetaModel
};

// src/repositories/_repository.ts
var import_sequelize = require("sequelize");

// src/table_connection.ts
var import_lodash4 = require("lodash");
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
      rejectUnauthorized: false
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
    conn.addModels((0, import_lodash4.values)(Models));
    TABLE_CONNECTIONS[dbName] = conn;
    return conn;
  } catch (error) {
    throw error;
  }
};
var initTableConnection = async (opts) => {
  (0, import_lodash4.assign)(DEFAULT_CONFIG, opts);
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
   * @returns {ModelType|Promise<ModelCtor>}
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
    return result?.map((d) => d instanceof import_sequelize.Model ? d.get({ plain: true }) : d);
  }
  /**
   * @param {Identifier} pk
   * @param {FindOptions} options?
   * @returns {Promise<I | null>}
   */
  async _getByPk(pk, options) {
    const result = await (await this._getRepository()).findByPk(pk, options);
    return result instanceof import_sequelize.Model ? result?.get({ plain: true }) : result;
  }
  /**
   * @param {FindOptions} options?
   * @returns {Promise<I | null>}
   */
  async _getOne(options) {
    const result = await (await this._getRepository()).findOne(options);
    return result instanceof import_sequelize.Model ? result?.get({ plain: true }) : result;
  }
  /**
   * @param {Partial<I>} data
   * @param {CreateOptions} options?
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
   * @param {UpsertOptions} options?
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
    return this.connection.getRepository(models_exports.FieldModel);
  }
};

// src/repositories/table.repository.ts
var import_lodash5 = require("lodash");
var import_ulidx2 = require("ulidx");

// src/utils/index.ts
var parseTableID = (tableID) => `RecordData_${tableID}`;
var catchError = async (promise) => {
  return promise.then((data) => {
    return [void 0, data];
  }).catch((error) => {
    return [error];
  });
};

// src/repositories/table.repository.ts
var _TableRepository = class extends _Repository {
  /**
   * Creates an instance of TableRepository.
   *
   * @constructor
   * @param {string} workspaceID
   * @param {string} tableID
   */
  constructor(workspaceID, tableID) {
    super(workspaceID);
    this.parseTableID = parseTableID(tableID);
  }
  /**
   * Get repository
   *
   * @protected
   * @override
   * @returns {Promise<IRepository<Model>>}
   */
  async _getRepository() {
    const model = await this.checkTableExisted();
    if (!model) {
      throw new Error("Table not existed");
    }
    return model;
  }
  /**
   * Check table is existed
   *
   * @returns {Promise<any>}
   */
  async checkTableExisted() {
    const tableModel = this.connection.models[this.parseTableID];
    if (tableModel) return tableModel;
    const [error, attributes] = await catchError(this.connection.getQueryInterface().describeTable(this.parseTableID));
    if ((0, import_lodash5.startsWith)(error?.message, "No")) return;
    const fieldIDs = (0, import_lodash5.reduce)(attributes, (res, __, colName) => (0, import_ulidx2.isValid)(colName) ? res.concat(colName) : res, []);
    const fieldAttributes = RecordDataColumn(fieldIDs);
    return this._defineModel(fieldAttributes);
  }
  /**
   * Define model
   *
   * @param {Record<string, ModelAttributeColumnOptions<Model<any, any>>>} fieldAttributes
   * @returns {ModelCtor}
   */
  _defineModel(fieldAttributes) {
    this.connection.define(this.parseTableID, fieldAttributes, {
      indexes: [{ name: "idx_deletedAt", fields: ["deletedAt"] }],
      modelName: this.parseTableID,
      tableName: this.parseTableID,
      timestamps: true,
      paranoid: true
    });
    this.connection.models[this.parseTableID].belongsTo(this.connection.getRepository(models_exports.RecordMetaModel), {
      as: "recordMeta",
      foreignKey: "id",
      onDelete: "CASCADE"
    });
    return this.connection.models[this.parseTableID];
  }
};

// src/repositories/record_data.repository.ts
var _RecordDataRepository = class extends _TableRepository {
  /**
   * Creates an instance of RecordRepository.
   *
   * @constructor
   * @param {string} workspaceID
   * @param {string} tableID
   */
  constructor(workspaceID, tableID) {
    super(workspaceID, tableID);
  }
};

// src/repositories/record_meta.repository.ts
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
   * @returns {IRepository<RecordMetaModel>}
   */
  _getRepository() {
    return this.connection.getRepository(models_exports.RecordMetaModel);
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
