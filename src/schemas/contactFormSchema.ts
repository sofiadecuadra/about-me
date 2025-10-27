import { z } from "zod";

export const contactFormSchema = z.object({
  from_name: z.string().min(1, { message: "ContactMe.Errors.Name" }),
  from_email: z.email({ message: "ContactMe.Errors.Email" }),
  message: z.string().min(1, { message: "ContactMe.Errors.Message" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
