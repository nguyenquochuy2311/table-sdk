export interface IRecordMetaModel {
	id: string;
	tableID: string;
	name: string | null;
	createdBy: string | null;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date | null;
}
