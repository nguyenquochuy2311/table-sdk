import type { IRepository } from '../interfaces/sequelize.interface';
import type { IRecordMetaModel } from '../models';
import { RecordMetaModel } from '../models';
import { _Repository } from './_repository';
export declare class _RecordMetaRepository extends _Repository<IRecordMetaModel> {
    /**
     * Creates an instance of RecordMetaRepository.
     *
     * @constructor
     * @param {string} workspaceID
     */
    constructor(workspaceID: string);
    /**
     * Get record meta repository
     *
     * @returns {IRepository<RecordMetaModel>}
     */
    protected _getRepository(): IRepository<RecordMetaModel>;
}
