import type { SchemaTypeDefinition } from 'sanity';

// Portifolio
import { project } from './documents/projects/project';
import { industry } from '~/sanity/schemas/documents/projects/industry';
import { skill } from './documents/projects/skill';

// Blog
import { author } from './documents/blog/author';
import { category } from './documents/blog/category';
import { post } from './documents/blog/post';

// Layout
import { header } from './documents/layout/header';
import { footer } from './documents/layout/footer';
import { menu } from '~/sanity/schemas/documents/layout/menu';
import { menuItem } from '~/sanity/schemas/documents/layout/menuItem';
import { settings } from './documents/layout/settings';
import { socialMedia } from './documents/layout/socialMedia';
import page from './documents/page-builder/page';
import mainHero from './documents/page-sections/heros/main-hero';

// import menu from './Blocks/menu';
// import { blockContent } from './documents/tbd/blockContent';
// import link from './documents/tbd/link';
// import { image } from './image';
// import { pageSeo } from './pageSeo';

const layout = [header, footer, menuItem, menu, settings, socialMedia];

// const content = [
//   blockContent
// ]

// const baseComponents = [
//   link,
//   image,
// ]

const blog = [post, author, category];

const portfolio = [project, industry, skill];

const pageBuilder = [page];

const pageSections = [mainHero];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...blog,
    ...layout,
    ...portfolio,
    ...pageBuilder,
    ...pageSections,
    // ...baseComponents,
    // ...content,
  ],
};
