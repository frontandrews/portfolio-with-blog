import { Home } from 'lucide-react';
import type { StructureBuilder } from 'sanity/structure';

export const homeSection = (S: StructureBuilder) =>
  S.listItem()
    .icon(Home)
    .id('home')
    .schemaType('home')
    .title('Home')
    .child(S.editor().id('home').schemaType('home').documentId('home'));
