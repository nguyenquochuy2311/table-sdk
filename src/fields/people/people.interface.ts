import { z } from 'zod';
import type { IFieldModel } from '../../models';

export enum PeopleIncludeModeEnum {
	ALL_WORKSPACE_MEMBER = 0,
	CURRENT_VIEWER,
	MEMBER_SAME_TEAM,
	USERS,
	TEAMS,
}
const PeopleValidator = z.object({
	id: z.string().ulid(),
	name: z.string(),
	avatar: z.any(),
	status: z.any(),
});
const typeUsers = z.object({
	type: z.literal(PeopleIncludeModeEnum.USERS),
	value: z.array(z.string().ulid()).min(0),
	selected: z.array(PeopleValidator).min(0).optional(),
});
const typeTeams = z.object({
	type: z.literal(PeopleIncludeModeEnum.TEAMS),
	value: z.array(z.string().ulid()).min(0),
	selected: z.array(PeopleValidator).min(0).optional(),
});
const typeIncludeOthers = z.object({
	type: z.union([
		z.literal(PeopleIncludeModeEnum.ALL_WORKSPACE_MEMBER),
		z.literal(PeopleIncludeModeEnum.CURRENT_VIEWER),
		z.literal(PeopleIncludeModeEnum.MEMBER_SAME_TEAM),
	]),
});
const typeExcludeOthers = z.object({
	type: z.union([z.literal(PeopleIncludeModeEnum.CURRENT_VIEWER), z.literal(PeopleIncludeModeEnum.MEMBER_SAME_TEAM)]),
});

export const FieldPeopleInitialDataValidator = z
	.object({
		value: z.array(z.string().ulid()).min(1),
		selected: z.array(PeopleValidator).min(1).optional(),
	})
	.nullable()
	.default(null);
export const FieldPeopleParamsValidator = z
	.object({
		isMultipleSelect: z.boolean(),
		isNotifyAdded: z.boolean().default(false),
		includeSetting: z.union([typeIncludeOthers, typeUsers, typeTeams]),
		excludeSetting: z.union([typeExcludeOthers, typeUsers, typeTeams]).nullable().default(null),
	})
	.default({
		isMultipleSelect: true,
		isNotifyAdded: false,
		includeSetting: {
			type: PeopleIncludeModeEnum.ALL_WORKSPACE_MEMBER,
		},
		excludeSetting: null,
	});

export const FieldPeopleDataValidator = FieldPeopleInitialDataValidator;

export type IFieldPeopleData = z.infer<typeof FieldPeopleDataValidator>;
export type IFieldPeopleInitialData = z.infer<typeof FieldPeopleInitialDataValidator>;
export type IFieldPeopleParams = z.infer<typeof FieldPeopleParamsValidator>;
export type IFieldPeopleTypeUserSetting = z.infer<typeof typeUsers>;
export type IFieldPeopleTypeTeamSetting = z.infer<typeof typeTeams>;

export interface IFieldPeopleModel extends IFieldModel {
	initialData: IFieldPeopleInitialData;
	params: IFieldPeopleParams;
}
