import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare enum PeopleIncludeModeEnum {
    ALL_WORKSPACE_MEMBER = 0,
    CURRENT_VIEWER = 1,
    MEMBER_SAME_TEAM = 2,
    USERS = 3,
    TEAMS = 4
}
declare const typeUsers: z.ZodObject<{
    type: z.ZodLiteral<PeopleIncludeModeEnum.USERS>;
    value: z.ZodArray<z.ZodString, "many">;
    selected: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        avatar: z.ZodAny;
        status: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }, {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    value: string[];
    type: PeopleIncludeModeEnum.USERS;
    selected?: {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }[] | undefined;
}, {
    value: string[];
    type: PeopleIncludeModeEnum.USERS;
    selected?: {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }[] | undefined;
}>;
declare const typeTeams: z.ZodObject<{
    type: z.ZodLiteral<PeopleIncludeModeEnum.TEAMS>;
    value: z.ZodArray<z.ZodString, "many">;
    selected: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        avatar: z.ZodAny;
        status: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }, {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    value: string[];
    type: PeopleIncludeModeEnum.TEAMS;
    selected?: {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }[] | undefined;
}, {
    value: string[];
    type: PeopleIncludeModeEnum.TEAMS;
    selected?: {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }[] | undefined;
}>;
export declare const FieldPeopleInitialDataValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    value: z.ZodArray<z.ZodString, "many">;
    selected: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        avatar: z.ZodAny;
        status: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }, {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    value: string[];
    selected?: {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }[] | undefined;
}, {
    value: string[];
    selected?: {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }[] | undefined;
}>>>;
export declare const FieldPeopleParamsValidator: z.ZodDefault<z.ZodObject<{
    isMultipleSelect: z.ZodBoolean;
    isNotifyAdded: z.ZodDefault<z.ZodBoolean>;
    includeSetting: z.ZodUnion<[z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<PeopleIncludeModeEnum.ALL_WORKSPACE_MEMBER>, z.ZodLiteral<PeopleIncludeModeEnum.CURRENT_VIEWER>, z.ZodLiteral<PeopleIncludeModeEnum.MEMBER_SAME_TEAM>]>;
    }, "strip", z.ZodTypeAny, {
        type: PeopleIncludeModeEnum.ALL_WORKSPACE_MEMBER | PeopleIncludeModeEnum.CURRENT_VIEWER | PeopleIncludeModeEnum.MEMBER_SAME_TEAM;
    }, {
        type: PeopleIncludeModeEnum.ALL_WORKSPACE_MEMBER | PeopleIncludeModeEnum.CURRENT_VIEWER | PeopleIncludeModeEnum.MEMBER_SAME_TEAM;
    }>, z.ZodObject<{
        type: z.ZodLiteral<PeopleIncludeModeEnum.USERS>;
        value: z.ZodArray<z.ZodString, "many">;
        selected: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            avatar: z.ZodAny;
            status: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }, {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        value: string[];
        type: PeopleIncludeModeEnum.USERS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    }, {
        value: string[];
        type: PeopleIncludeModeEnum.USERS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<PeopleIncludeModeEnum.TEAMS>;
        value: z.ZodArray<z.ZodString, "many">;
        selected: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            avatar: z.ZodAny;
            status: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }, {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        value: string[];
        type: PeopleIncludeModeEnum.TEAMS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    }, {
        value: string[];
        type: PeopleIncludeModeEnum.TEAMS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    }>]>;
    excludeSetting: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<PeopleIncludeModeEnum.CURRENT_VIEWER>, z.ZodLiteral<PeopleIncludeModeEnum.MEMBER_SAME_TEAM>]>;
    }, "strip", z.ZodTypeAny, {
        type: PeopleIncludeModeEnum.CURRENT_VIEWER | PeopleIncludeModeEnum.MEMBER_SAME_TEAM;
    }, {
        type: PeopleIncludeModeEnum.CURRENT_VIEWER | PeopleIncludeModeEnum.MEMBER_SAME_TEAM;
    }>, z.ZodObject<{
        type: z.ZodLiteral<PeopleIncludeModeEnum.USERS>;
        value: z.ZodArray<z.ZodString, "many">;
        selected: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            avatar: z.ZodAny;
            status: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }, {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        value: string[];
        type: PeopleIncludeModeEnum.USERS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    }, {
        value: string[];
        type: PeopleIncludeModeEnum.USERS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<PeopleIncludeModeEnum.TEAMS>;
        value: z.ZodArray<z.ZodString, "many">;
        selected: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            avatar: z.ZodAny;
            status: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }, {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        value: string[];
        type: PeopleIncludeModeEnum.TEAMS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    }, {
        value: string[];
        type: PeopleIncludeModeEnum.TEAMS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    }>]>>>;
}, "strip", z.ZodTypeAny, {
    isMultipleSelect: boolean;
    isNotifyAdded: boolean;
    includeSetting: {
        type: PeopleIncludeModeEnum.ALL_WORKSPACE_MEMBER | PeopleIncludeModeEnum.CURRENT_VIEWER | PeopleIncludeModeEnum.MEMBER_SAME_TEAM;
    } | {
        value: string[];
        type: PeopleIncludeModeEnum.USERS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    } | {
        value: string[];
        type: PeopleIncludeModeEnum.TEAMS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    };
    excludeSetting: {
        value: string[];
        type: PeopleIncludeModeEnum.USERS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    } | {
        value: string[];
        type: PeopleIncludeModeEnum.TEAMS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    } | {
        type: PeopleIncludeModeEnum.CURRENT_VIEWER | PeopleIncludeModeEnum.MEMBER_SAME_TEAM;
    } | null;
}, {
    isMultipleSelect: boolean;
    includeSetting: {
        type: PeopleIncludeModeEnum.ALL_WORKSPACE_MEMBER | PeopleIncludeModeEnum.CURRENT_VIEWER | PeopleIncludeModeEnum.MEMBER_SAME_TEAM;
    } | {
        value: string[];
        type: PeopleIncludeModeEnum.USERS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    } | {
        value: string[];
        type: PeopleIncludeModeEnum.TEAMS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    };
    isNotifyAdded?: boolean | undefined;
    excludeSetting?: {
        value: string[];
        type: PeopleIncludeModeEnum.USERS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    } | {
        value: string[];
        type: PeopleIncludeModeEnum.TEAMS;
        selected?: {
            name: string;
            id: string;
            status?: any;
            avatar?: any;
        }[] | undefined;
    } | {
        type: PeopleIncludeModeEnum.CURRENT_VIEWER | PeopleIncludeModeEnum.MEMBER_SAME_TEAM;
    } | null | undefined;
}>>;
export declare const FieldPeopleDataValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    value: z.ZodArray<z.ZodString, "many">;
    selected: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        avatar: z.ZodAny;
        status: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }, {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    value: string[];
    selected?: {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }[] | undefined;
}, {
    value: string[];
    selected?: {
        name: string;
        id: string;
        status?: any;
        avatar?: any;
    }[] | undefined;
}>>>;
export type IFieldPeopleData = z.infer<typeof FieldPeopleDataValidator>;
export type IFieldPeopleInitialData = z.infer<typeof FieldPeopleInitialDataValidator>;
export type IFieldPeopleParams = z.infer<typeof FieldPeopleParamsValidator>;
export type IFieldPeopleTypeUserSetting = z.infer<typeof typeUsers>;
export type IFieldPeopleTypeTeamSetting = z.infer<typeof typeTeams>;
export interface IFieldPeopleModel extends IFieldModel {
    initialData: IFieldPeopleInitialData;
    params: IFieldPeopleParams;
}
export {};
