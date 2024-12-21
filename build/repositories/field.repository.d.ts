import type { IRepository } from '../interfaces/sequelize.interface';
import { FieldModel, type IFieldModel } from '../models';
import { _Repository } from './_repository';
export declare class _FieldRepository extends _Repository<IFieldModel> {
    /**
     * Creates an instance of FieldRepository.
     *
     * @constructor
     * @param {string} workspaceID
     */
    constructor(workspaceID: string);
    /**
     * Get field repository
     *
     * @returns {Promise<IRepository<FieldModel>>}
     */
    protected _getRepository(): Promise<IRepository<FieldModel>>;
}
