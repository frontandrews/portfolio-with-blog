import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useQuery } from '@sanity/react-loader';

import type { loader as layoutLoader } from '~/routes/_website';

export const meta: MetaFunction<
  typeof loader,
  {
    'routes/_website': typeof layoutLoader;
  }
> = ({ matches }) => {
  const layoutData = matches.find((match) => match.id === `routes/_website`)?.data;
  // const home = layoutData ? layoutData.initial.data : null;

  // const title = [home?.title, home?.siteTitle].filter(Boolean).join(' | ');

  return [{ title: 'Website' }];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return { initial: { data: null }, query: '', params: {} };
};

export default function Home() {
  const { initial, query, params } = useLoaderData<typeof loader>();
  const { data } = useQuery<typeof initial.data>(query, params, {
    // There's a TS issue with how initial comes over the wire
    // @ts-expect-error
    initial,
  });

  return <div>Projects</div>;
}
