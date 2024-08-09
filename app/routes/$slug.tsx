import React from 'react';
import { useLoaderData } from '@remix-run/react';
import { LoaderFunctionArgs, json } from '@remix-run/node';
import BlockRenderer from '~/components/BlockRenderer';
import { client } from '~/sanity/client';
import { loadQueryOptions } from '~/sanity/loadQueryOptions.server';

export const mainHero = `
    _type == "mainHero" => {
        _key,
        title,
        subtitle,
        image {
            _key,
            alt,
            "url": asset->url
        },
        ctaText,
        ctaLink
    }
  
`;

export const blockTypes = `
    ...,
    ${mainHero}
`;

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const { preview, options } = await loadQueryOptions(request.headers);

  const query = `*[_type == "page" && slug.current == $slug][0]{
    title,
    blocks[]{
      ${blockTypes}
    }
  }`;

  const data = await client.fetch(query, { slug: params.slug }, options);

  return json(data);
};

export default function Page() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>{data.title}</h1>
      {data.blocks.map((block: any) => (
        <BlockRenderer key={block._key} block={block} />
      ))}
    </div>
  );
}
