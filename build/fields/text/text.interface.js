"use strict";
import { z } from "zod";
export const FieldTextParamsValidator = z.object({
  notAllowDuplicate: z.boolean().nullable().default(false)
}).nullable().default(null);
export const FieldTextInitialDataValidator = z.string().nullable().default(null);
export const FieldTextDataValidator = FieldTextInitialDataValidator;
