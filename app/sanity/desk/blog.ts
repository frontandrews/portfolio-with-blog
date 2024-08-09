import { Book, FileText, Tag, User } from 'lucide-react';
import type { StructureBuilder } from 'sanity/structure';

export const blogSection = (S: StructureBuilder) =>
  S.listItem()
    .title('Blog')
    .icon(Book)
    .child(
      S.list()
        .title('Blog')
        .items([
          S.listItem().title('Posts').icon(FileText).child(S.documentTypeList('post').title('Posts')),
          S.listItem().title('Categories').icon(Tag).child(S.documentTypeList('category').title('Categories')),
          S.listItem().title('Authors').icon(User).child(S.documentTypeList('author').title('Authors')),
        ]),
    );
