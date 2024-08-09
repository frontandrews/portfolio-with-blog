import { loadQuery } from '~/sanity/loader.server';
import { getHeader, getFooter } from '~/sanity/queries';
import type { GetHeaderResult, GetFooterResult } from '~/sanity/utils/sanity.types';

export const loadHeaderData = async (options: Parameters<typeof loadQuery>[2]) => {
  return loadQuery<GetHeaderResult>(getHeader, {}, options).then((res) => ({
    ...res,
    data: res.data ? res.data : undefined,
  }));
};

export const loadFooterData = async (options: Parameters<typeof loadQuery>[2]) => {
  return loadQuery<GetFooterResult>(getFooter, {}, options).then((res) => ({
    ...res,
    data: res.data ? res.data : undefined,
  }));
};
