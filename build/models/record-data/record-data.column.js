"use strict";
import { DataType } from "sequelize-typescript";
import { RecordMetaModel } from "../record-meta";
export const TableDataColumn = {
  id: {
    type: DataType.STRING(26),
    primaryKey: true,
    references: {
      model: RecordMetaModel,
      key: "id"
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  },
  deletedAt: {
    type: DataType.DATE
  }
};
