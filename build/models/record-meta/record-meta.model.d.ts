import { Model } from 'sequelize-typescript';
import type { IRecordMetaModel } from './record-meta.interface';
export declare class RecordMetaModel extends Model implements IRecordMetaModel {
    id: string;
    tableID: string;
    name: string | null;
    createdBy: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
