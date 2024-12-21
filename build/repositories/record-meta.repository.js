"use strict";
import { RecordMetaModel } from "../models";
import { _Repository } from "./_repository";
export class _RecordMetaRepository extends _Repository {
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
    return Promise.resolve(this.connection.getRepository(RecordMetaModel));
  }
}
