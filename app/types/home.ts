import { z } from 'zod';

export const homeZ = z.object({
  title: z.string().nullable(),
  siteTitle: z.string().nullable(),
  navbarLinks: z.array(
    z.object({
      _key: z.string(),
      title: z.string().nullable(),
      link: z.string().nullable(),
    }),
  ),
});

export type HomeDocument = z.infer<typeof homeZ>;

export type LogoProps = { home?: HomeDocument | null };
