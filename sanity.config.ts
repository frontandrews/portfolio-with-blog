import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { defineLocations, presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';

import { STUDIO_BASEPATH } from '~/sanity/constants';
import { schema } from '~/sanity/schemas';
import { defaultDocumentNode, structure } from '~/sanity/structure';

let projectId;
let dataset;
let apiVersion;

// if(!process.env.VITE_SANITY_PROJECT_ID) {
//   throw new Error(`Missing VITE_SANITY_PROJECT_ID`);
// }
// if(!process.env.VITE_SANITY_DATASET) {
//   throw new Error(`Missing VITE_SANITY_DATASET`);
// }
// if(!process.env.VITE_SANITY_API_VERSION) {
//   throw new Error(`Missing VITE_SANITY_API_VERSION`);
// }

if (typeof process !== 'undefined' && process.env) {
  // Node.js environment
  projectId = process.env.VITE_SANITY_PROJECT_ID;
  dataset = process.env.VITE_SANITY_DATASET;
  apiVersion = process.env.VITE_SANITY_API_VERSION;
} else if (typeof import.meta !== 'undefined' && import.meta.env) {
  // Vite environment
  projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
  dataset = import.meta.env.VITE_SANITY_DATASET;
  apiVersion = import.meta.env.VITE_SANITY_API_VERSION;
} else {
  throw new Error('No environment variables found for Sanity configuration');
}

export default defineConfig({
  basePath: STUDIO_BASEPATH,
  projectId,
  dataset,
  name: 'sanity-remix',
  title: 'Andrews Blog',
  plugins: [
    structureTool({ structure, defaultDocumentNode }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: '/resource/preview',
        },
      },
      resolve: {
        locations: {
          record: defineLocations({
            select: {
              title: 'title',
              slug: 'slug.current',
            },
            resolve: (doc) => ({
              locations: [{ title: 'Home', href: `/` }],
            }),
          }),
        },
      },
    }),
    // Vision allow query on sanity studio
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema,
});
