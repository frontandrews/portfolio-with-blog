import { DefaultDocumentNodeResolver, StructureResolver } from 'sanity/structure';
import { blogSection } from '~/sanity/desk/blog';
import { layoutSection } from '~/sanity/desk/layout';
import { portfolioSection } from '../desk/portfolio';
import { pagesSection } from '../desk/pages';

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([pagesSection(S), layoutSection(S), S.divider(), blogSection(S), portfolioSection(S)]);

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  if (schemaType === 'post') {
    return S.document().views([S.view.form()]);
  }
  return S.document().views([S.view.form()]);
};
