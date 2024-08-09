import { defineField, defineType } from 'sanity';

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'darkMode',
      type: 'boolean',
      title: 'Dark Mode',
      description:
        'By default, the site will use the light theme. If you would like to switch to the dark theme, check this box.',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
