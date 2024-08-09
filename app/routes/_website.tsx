// _website.tsx or the relevant route file
import type { LoaderFunctionArgs } from '@remix-run/node';
import { json, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import { VisualEditing } from '@sanity/visual-editing/remix';
import { lazy, Suspense } from 'react';

import { Footer } from '~/components/Footer';
import { Header } from '~/components/layout/Header';
import { Title } from '~/components/Title';
import { fetchLayout } from '~/sanity/fetch/fetchLayout';
import { GetHeaderResult } from '~/sanity/utils/sanity.types';
import type { ThemePreference } from '~/types/themePreference';

const SanityLiveMode = lazy(() =>
  import('~/components/SanityLiveMode').then((module) => ({
    default: module.SanityLiveMode,
  })),
);
const ExitPreview = lazy(() =>
  import('~/components/ExitPreview').then((module) => ({
    default: module.ExitPreview,
  })),
);

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { header, footer, preview } = await fetchLayout({ request });

  return json({
    header,
    footer,
    sanity: { preview },
  });
};

export default function Website() {
  const { header, footer, sanity } = useLoaderData<typeof loader>();

  return (
    <>
      <Header data={header} />
      <div className="container mx-auto p-4 lg:p-12 grid grid-cols-1 gap-4 lg:gap-12">
        <Outlet />
      </div>
      <Footer data={footer} />
      {sanity.preview ? (
        <Suspense>
          <SanityLiveMode />
          <ExitPreview />
          <VisualEditing />
        </Suspense>
      ) : null}
    </>
  );
}
