"use strict";
import { transform } from "lodash";
import { DataTypes } from "sequelize";
import { isValid } from "ulidx";
import { TableDataColumn } from "../models";
import { _Repository } from "./_repository";
export class _RecordDataRepository extends _Repository {
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
    const fieldAttributes = transform(
      attributes,
      (memo, __, colName) => {
        if (isValid(colName)) {
          memo[colName] = { type: DataTypes.JSON };
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
}
