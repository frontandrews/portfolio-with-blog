import { FooterSchema } from '~/utils/schemas/footer';
import { HeaderSchema } from '~/utils/schemas/header';
import { seoSchema } from '~/utils/schemas/seo';
import { z } from 'zod';

export const LayoutSchema = z.object({
  footer: FooterSchema.optional().nullable(),
  header: HeaderSchema.optional().nullable(),
  favicon: z.object({ url: z.string().optional() }).optional().nullable(),
  seo: seoSchema.optional().nullable(),
});

export type LayoutType = z.infer<typeof LayoutSchema>;
