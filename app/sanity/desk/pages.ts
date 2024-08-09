import { StickyNote } from 'lucide-react';
import type { StructureBuilder } from 'sanity/structure';

export const pagesSection = (S: StructureBuilder) =>
  S.listItem().title('Pages').icon(StickyNote).child(S.documentTypeList('page').title('Pages'));
