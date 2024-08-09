import { Book, FileText, Tag, User } from 'lucide-react';
import type { StructureBuilder } from 'sanity/structure';

export const portfolioSection = (S: StructureBuilder) =>
  S.listItem()
    .title('Portfolio')
    .icon(Book)
    .child(
      S.list()
        .title('Portfolio')
        .items([
          S.listItem().title('Projects').icon(FileText).child(S.documentTypeList('project').title('Projects')),
          S.listItem().title('Industries').icon(Tag).child(S.documentTypeList('industry').title('Industry')),
          S.listItem().title('Skills').icon(Tag).child(S.documentTypeList('skill').title('Skill')),
        ]),
    );
