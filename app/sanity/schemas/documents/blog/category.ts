import { Tag } from 'lucide-react';
import { defineType } from 'sanity';
import { defineIconField, defineNameField } from '../../../utils/fields';

export const category = defineType({
  name: 'category',
  title: 'Blog Post Category',
  type: 'document',
  icon: Tag,
  fields: [defineNameField(), defineIconField()],
});
