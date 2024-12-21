"use strict";
import { Sequelize } from "sequelize-typescript";
import { getTableConnection } from "../table-connection";
export class _Repository {
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
    return result instanceof Sequelize ? result?.map((d) => d.get({ plain: true })) : result;
  }
  /**
   * @param {Identifier} pk
   * @param {FindOptions} options?
   * @returns {Promise<I | null>}
   */
  async _getByPk(pk, options) {
    const result = await (await this._getRepository()).findByPk(pk, options);
    return result instanceof Sequelize ? result?.get({ plain: true }) : result;
  }
  /**
   * @param {FindOptions} options?
   * @returns {Promise<I | null>}
   */
  async _getOne(options) {
    const result = await (await this._getRepository()).findOne(options);
    return result instanceof Sequelize ? result?.get({ plain: true }) : result;
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
}
