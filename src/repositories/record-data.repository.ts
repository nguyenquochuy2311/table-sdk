import { _TableRepository } from './table.repository';

export class _RecordDataRepository extends _TableRepository {
	/**
	 * Creates an instance of RecordRepository.
	 *
	 * @constructor
	 * @param {string} workspaceID
	 * @param {string} tableID
	 */
	constructor(workspaceID: string, tableID: string) {
		super(workspaceID, tableID);
	}
}
