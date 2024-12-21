import type { Model, ModelCtor } from 'sequelize-typescript';
import type { IRepository } from '../interfaces/sequelize.interface';
import { type IRecordDataModel } from '../models';
import { _Repository } from './_repository';
export declare class _RecordDataRepository extends _Repository<IRecordDataModel> {
    private tableID;
    /**
     * Creates an instance of RecordDataRepository.
     *
     * @constructor
     * @param {string} workspaceID
     * @param {string} rawTableID
     */
    constructor(workspaceID: string, rawTableID: string);
    /**
     * Get record data repository
     *
     * @returns {Promise<IRepository<Model>>}
     */
    protected _getRepository(): Promise<IRepository<Model>>;
    /**
     * Check table is existed
     *
     * @returns {Promise<any>}
     */
    checkTableExisted(): Promise<ModelCtor | undefined>;
}
