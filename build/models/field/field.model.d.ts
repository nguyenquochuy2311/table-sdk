import { Model } from 'sequelize-typescript';
import { FieldDataType } from '../../field-datatype';
import type { IFieldInitialData } from './field-initial-data';
import type { IFieldParams } from './field-params';
import type { IFieldModel } from './field.interface';
export declare class FieldModel extends Model implements IFieldModel {
    id: string;
    tableID: string;
    name: string;
    dataType: FieldDataType;
    params: IFieldParams;
    initialData: IFieldInitialData;
    description: string | null;
    isRequired: boolean;
    isPrimary: boolean;
    isInvalid: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
