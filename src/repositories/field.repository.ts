import type { IRepository } from '@/interfaces/sequelize.interface';
import { FieldModel, type IFieldModel } from '@/models';
import { _Repository } from './_repository';

export class _FieldRepository extends _Repository<FieldModel, IFieldModel> {
	/**
	 * Creates an instance of FieldRepository.
	 *
	 * @constructor
	 * @param {string} workspaceID
	 */
	constructor(workspaceID: string) {
		super(workspaceID);
	}

	/**
	 * Get field repository
	 *
	 * @returns {Promise<IRepository<FieldModel>>}
	 */
	protected override _getRepository(): Promise<IRepository<FieldModel>> {
		return Promise.resolve(this.connection.getRepository(FieldModel));
	}
}
