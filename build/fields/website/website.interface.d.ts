import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare const FieldWebsiteInitialDataValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    text: z.ZodOptional<z.ZodString>;
    link: z.ZodString;
}, "strip", z.ZodTypeAny, {
    link: string;
    text?: string | undefined;
}, {
    link: string;
    text?: string | undefined;
}>>>;
export declare const FieldWebsiteParamsValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    notAllowDuplicate: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    notAllowDuplicate: boolean | null;
}, {
    notAllowDuplicate?: boolean | null | undefined;
}>>>;
export declare const FieldWebsiteDataValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    text: z.ZodOptional<z.ZodString>;
    link: z.ZodString;
}, "strip", z.ZodTypeAny, {
    link: string;
    text?: string | undefined;
}, {
    link: string;
    text?: string | undefined;
}>>>;
export type IFieldWebsiteData = z.infer<typeof FieldWebsiteDataValidator>;
export type IFieldWebsiteInitialData = z.infer<typeof FieldWebsiteInitialDataValidator>;
export type IFieldWebsiteParams = z.infer<typeof FieldWebsiteParamsValidator>;
export interface IFieldWebsiteModel extends IFieldModel {
    initialData: IFieldWebsiteInitialData;
    params: IFieldWebsiteParams;
}
