import { ChevronRightIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  icon: ChevronRightIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'submenu',
      title: 'Submenu',
      type: 'menu',
    }),
  ],
});
