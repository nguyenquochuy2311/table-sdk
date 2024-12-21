"use strict";
import { FieldDataType } from "./field-datatype";
import * as FieldType from "./fields";
import * as _FieldModel from "./models/field";
import * as _RecordDataModel from "./models/record-data";
import * as _RecordMetaModel from "./models/record-meta";
import { _FieldRepository } from "./repositories/field.repository";
import { _RecordDataRepository } from "./repositories/record-data.repository";
import { _RecordMetaRepository } from "./repositories/record-meta.repository";
import { getTableConnection, initTableConnection } from "./table-connection";
export {
  _FieldModel,
  _FieldRepository,
  _RecordDataModel,
  _RecordDataRepository,
  _RecordMetaModel,
  _RecordMetaRepository,
  FieldDataType,
  FieldType,
  getTableConnection,
  initTableConnection
};
(async () => {
  await initTableConnection({
    host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
    port: 4e3,
    username: "2Z7PR4TFY5WeFhZ.root",
    password: "YYgszGfEEXA3QbCT"
  });
})();
