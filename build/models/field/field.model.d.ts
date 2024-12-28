import { Model } from 'sequelize-typescript';
import { FieldDataType } from '../../field_datatype';
import type { IFieldModel } from './field.interface';
import type { IFieldInitialData } from './field_initial_data';
import type { IFieldParams } from './field_params';
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
