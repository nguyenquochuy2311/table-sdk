import type { IRepository } from '../interfaces/sequelize.interface';
import type { IRecordMetaModel } from '../models';
import { RecordMetaModel } from '../models';
import { _Repository } from './_repository';

export class _RecordMetaRepository extends _Repository<IRecordMetaModel> {
	/**
	 * Creates an instance of RecordMetaRepository.
	 *
	 * @constructor
	 * @param {string} workspaceID
	 */
	constructor(workspaceID: string) {
		super(workspaceID);
	}

	/**
	 * Get record meta repository
	 *
	 * @returns {IRepository<RecordMetaModel>}
	 */
	protected override _getRepository(): IRepository<RecordMetaModel> {
		return this.connection.getRepository(RecordMetaModel);
	}
}
