import { AppWindow } from 'lucide-react';
import type { StructureBuilder } from 'sanity/structure';

export const layoutSection = (S: StructureBuilder) =>
  S.listItem()
    .title('Layout')
    .icon(AppWindow)
    .id('layout')
    .child(
      S.list()
        .title('Layout')
        .items([
          S.listItem().title('Header').child(S.documentTypeList('header').title('Header')),
          S.listItem().title('Footer').child(S.documentTypeList('footer').title('Footer')),
          S.listItem().title('Settings').child(S.documentTypeList('settings').title('Settings')),
        ]),
    );
