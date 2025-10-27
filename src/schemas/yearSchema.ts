import { z } from "zod";

export const yearSchema = z
  .string()
  .regex(/\b(19|20)\d{2}\b/, { message: "Invalid year format" });

export const extractYearSchema = z.string().transform((val) => {
  const match = val.match(/\b(19|20)\d{2}\b/);
  return match ? match[0] : null;
});

export type YearType = z.infer<typeof yearSchema>;
