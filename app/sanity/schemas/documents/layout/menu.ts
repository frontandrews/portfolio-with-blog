import { MenuIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';
import { defineNameField } from '~/sanity/utils/fields';

export const menu = defineType({
  name: 'menu',
  title: 'Menus',
  icon: MenuIcon,
  type: 'document',
  fields: [
    defineNameField(),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'menuItem',
        },
      ],
    }),
  ],
});
