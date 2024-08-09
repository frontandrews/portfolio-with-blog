import { User } from 'lucide-react';
import { defineType } from 'sanity';
import { defineImageField, defineNameField } from '../../../utils/fields';

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: User,
  fields: [defineNameField(), defineImageField()],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
