import { z } from 'zod';
import type { IFieldModel } from '../../models';
export declare const FieldParagraphInitialDataValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    text: z.ZodString;
    html: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    data: z.ZodDefault<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    text: string;
    html: string | null;
    data?: any;
}, {
    text: string;
    data?: any;
    html?: string | null | undefined;
}>>>;
export declare const FieldParagraphParamsValidator: z.ZodDefault<z.ZodObject<{
    isRichTextFormatting: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    isRichTextFormatting: boolean;
}, {
    isRichTextFormatting?: boolean | undefined;
}>>;
export declare const FieldParagraphDataValidator: z.ZodDefault<z.ZodNullable<z.ZodObject<{
    text: z.ZodString;
    html: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    data: z.ZodDefault<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    text: string;
    html: string | null;
    data?: any;
}, {
    text: string;
    data?: any;
    html?: string | null | undefined;
}>>>;
export type IFieldParagraphData = z.infer<typeof FieldParagraphDataValidator>;
export type IFieldParagraphInitialData = z.infer<typeof FieldParagraphInitialDataValidator>;
export type IFieldParagraphParams = z.infer<typeof FieldParagraphParamsValidator>;
export interface IFieldParagraphModel extends IFieldModel {
    initialData: IFieldParagraphInitialData;
    params: IFieldParagraphParams;
}
