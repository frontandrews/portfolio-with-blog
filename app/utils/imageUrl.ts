import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

const projectId = import.meta.VITE_SANITY_PROJECT_ID!;
const dataset = import.meta.VITE_SANITY_DATASET!;

export const imageBuilder = createImageUrlBuilder({
  projectId: projectId,
  dataset: dataset,
});

export const urlForImage = (source: Image | undefined | null) => {
  if (!source) {
    return undefined;
  }
  return imageBuilder?.image(source).auto('format').fit('max').url();
};
