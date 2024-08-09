import { Building } from 'lucide-react';
import { defineType } from 'sanity';
import { defineDescriptionField, defineIconField, defineNameField } from '~/sanity/utils/fields';

export const industry = defineType({
  name: 'industry',
  title: 'Industry',
  type: 'document',
  icon: Building,
  fields: [defineNameField(), defineDescriptionField(), defineIconField()],
});
