import { Code } from 'lucide-react';
import { defineField, defineType } from 'sanity';
import { defineNameField } from '~/sanity/utils/fields';

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  icon: Code,
  fields: [
    defineNameField(),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});
