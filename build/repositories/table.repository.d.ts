import type { IRepository } from 'interfaces/sequelize.interface';
import { type IRecordDataModel } from 'models';
import type { Model, ModelCtor } from 'sequelize-typescript';
import { _Repository } from './_repository';
export declare class _TableRepository extends _Repository<IRecordDataModel> {
    private parseTableID;
    /**
     * Creates an instance of TableRepository.
     *
     * @constructor
     * @param {string} workspaceID
     * @param {string} tableID
     */
    constructor(workspaceID: string, tableID: string);
    /**
     * Get repository
     *
     * @protected
     * @override
     * @returns {Promise<IRepository<Model>>}
     */
    protected _getRepository(): Promise<IRepository<Model>>;
    /**
     * Create table
     *
     * @param {string} primaryFieldID
     * @returns {Promise<void>}
     */
    createTable(primaryFieldID: string): Promise<void>;
    /**
     * Check table is existed
     *
     * @returns {Promise<any>}
     */
    checkTableExisted(): Promise<ModelCtor | undefined>;
    /**
     * Define model
     *
     * @param {Record<string, ModelAttributeColumnOptions<Model<any, any>>>} fieldAttributes
     * @returns {ModelCtor}
     */
    private _defineModel;
}
