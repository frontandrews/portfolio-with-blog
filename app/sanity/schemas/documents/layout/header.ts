import { defineField, defineType } from 'sanity';
import { defineImageField } from '~/sanity/utils/fields';

export const header = defineType({
  name: 'header',
  title: 'Header',
  icon: '',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
      initialValue: 'Header',
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'reference',
      to: [{ type: 'menu' }],
    }),
    defineImageField({
      name: 'logo',
      title: 'Logo',
    }),
  ],
});
