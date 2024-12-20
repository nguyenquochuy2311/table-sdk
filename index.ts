import { FieldDataType } from './src/field-datatype';
import * as FieldType from './src/fields';
import * as _FieldModel from './src/models/field';
import * as _RecordDataModel from './src/models/record-data';
import * as _RecordMetaModel from './src/models/record-meta';
import { _FieldRepository } from './src/repositories/field.repository';
import { _RecordDataRepository } from './src/repositories/record-data.repository';
import { _RecordMetaRepository } from './src/repositories/record-meta.repository';
import { getTableConnection, initTableConnection } from './src/table-connection';

export {
	_FieldModel,
	_FieldRepository,
	_RecordDataModel,
	_RecordDataRepository,
	_RecordMetaModel,
	_RecordMetaRepository,
	FieldDataType,
	FieldType,
	getTableConnection,
	initTableConnection
};

(async () => {
	await initTableConnection({
		host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
		port: 4000,
		username: '2Z7PR4TFY5WeFhZ.root',
		password: 'YYgszGfEEXA3QbCT',
	});
})();
