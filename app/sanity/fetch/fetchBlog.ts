import { loadQueryOptions } from '~/sanity/loadQueryOptions.server';
import { loadHeaderData, loadFooterData } from '~/sanity/loaders';
import { GetFooterResult, GetHeaderResult } from '../utils/sanity.types';

export async function fetchLayout({ request }: { request: Request }): Promise<{
  header?: GetHeaderResult;
  footer?: GetFooterResult;
  preview: boolean;
}> {
  const { preview, options } = await loadQueryOptions(request.headers);
  const header = await loadHeaderData(options);
  const footer = await loadFooterData(options);

  return {
    header: header.data,
    footer: footer.data,
    preview,
  };
}
