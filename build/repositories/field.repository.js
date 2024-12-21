"use strict";
import { FieldModel } from "../models";
import { _Repository } from "./_repository";
export class _FieldRepository extends _Repository {
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
    return Promise.resolve(this.connection.getRepository(FieldModel));
  }
}
