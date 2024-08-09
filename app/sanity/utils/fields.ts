import { defineField } from 'sanity';

export function defineImageField({
  name = 'image',
  title = 'Image',
  description,
}: {
  name?: string;
  title?: string;
  description?: string;
} = {}) {
  return defineField({
    name,
    title,
    type: 'image',
    description,
    options: {
      hotspot: true,
    },
    fields: [
      {
        name: 'alt',
        type: 'string',
        title: 'Alternative Text',
        description: 'Important for SEO and accessiblity.',
      },
    ],
  });
}

export function defineNameField() {
  return defineField({
    name: 'name',
    title: 'Name',
    type: 'string',
    validation: (Rule) => Rule.required(),
  });
}

export function defineIconField() {
  return defineField({
    name: 'icon',
    title: 'Icon',
    type: 'image',
    options: {
      hotspot: true,
    },
  });
}

export function defineDescriptionField() {
  return defineField({
    name: 'description',
    title: 'Description',
    type: 'text',
  });
}
