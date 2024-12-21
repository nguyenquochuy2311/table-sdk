import type { BulkCreateOptions, CreateOptions, DestroyOptions, FindOptions, Identifier, ModelType, UpdateOptions, UpsertOptions, WhereOptions } from 'sequelize';
import { type Model, type ModelCtor } from 'sequelize-typescript';
import type { IRepository, ISequelize } from '../interfaces/sequelize.interface';
export declare abstract class _Repository<I> {
    protected connection: ISequelize;
    /**
     * Creates an instance of Repository.
     *
     * @constructor
     * @param {string} workspaceID
     */
    constructor(workspaceID: string);
    protected abstract _getRepository(): IRepository<Model> | Promise<IRepository<Model>>;
    /**
     * @param {ModelCtor} model?
     * @returns {ModelType|Promise<ModelCtor>}
     */
    protected _getModel(model?: ModelCtor): Promise<ModelType>;
    /**
     * @param {FindOptions} options
     * @returns {Promise<I[]>}
     */
    protected _getAll(options?: FindOptions): Promise<I[]>;
    /**
     * @param {Identifier} pk
     * @param {FindOptions} options?
     * @returns {Promise<I | null>}
     */
    protected _getByPk(pk: Identifier, options?: FindOptions): Promise<I | null>;
    /**
     * @param {FindOptions} options?
     * @returns {Promise<I | null>}
     */
    protected _getOne(options?: FindOptions): Promise<I | null>;
    /**
     * @param {Partial<I>} data
     * @param {CreateOptions} options?
     * @returns {Promise<I>}
     */
    protected _create(data: Partial<I>, options?: CreateOptions): Promise<I>;
    /**
     * @param {Partial<I>[]} data
     * @param {BulkCreateOptions} options?
     * @returns {Promise<I[]>}
     */
    protected _bulkCreate(data: Partial<I>[], options?: BulkCreateOptions): Promise<I[]>;
    /**
     * @param {Partial<I>} data
     * @param {UpdateOptions} options
     * @returns {Promise<number>}
     */
    protected _update(data: Partial<I>, options: UpdateOptions & {
        where: WhereOptions;
    }): Promise<[affectedCount: number]>;
    /**
     * @param {Partial<I>} data
     * @param {UpsertOptions} options?
     * @returns {Promise<I>}
     */
    protected _upsert(data: Partial<I>, options?: UpsertOptions): Promise<I>;
    /**
     * @param {DestroyOptions} options
     * @returns {Promise<number>}
     */
    protected _delete(options: DestroyOptions & {
        where: WhereOptions;
    }): Promise<number>;
}
