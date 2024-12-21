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
	 * @returns {Promise<IRepository<RecordMetaModel>>}
	 */
	protected override _getRepository(): Promise<IRepository<RecordMetaModel>> {
		return Promise.resolve(this.connection.getRepository(RecordMetaModel));
	}
}
