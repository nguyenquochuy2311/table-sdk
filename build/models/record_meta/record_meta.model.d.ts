import { Model } from 'sequelize-typescript';
import type { IRecordMetaModel } from './record_meta.interface';
export declare class RecordMetaModel extends Model implements IRecordMetaModel {
    id: string;
    tableID: string;
    name: string | null;
    createdBy: string | null;
    deletedAt: Date | null;
}
