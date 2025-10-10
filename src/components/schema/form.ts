import z from "zod";

export const eventSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  date: z.string().min(1, 'Date is required'),
  priority: z.enum(['high', 'medium', 'low']),
})
