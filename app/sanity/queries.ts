import groq from 'groq';

// The string with the query is assigned to a variable
// The variable name needs to be globally unique since it’s used for the type name
// The string needs to be a syntactically valid GROQ query (for example, you should be able to run it successfully in the Vision plugin or on groq.dev)
// The string with the query needs to be prefixed with the groq template literal

export const getHeader = groq`*[_type == "header"][0] {
    title,
    menu->{
      _id,
      title,
      items[] {
        _key,
        title,
        link
      }
    },
    "logoUrl": logo.asset->url,
  }
`;

export const getFooter = groq`*[_type == "footer"][0]{
    title,
    "logoUrl": logo.asset->url,
    description,
    menu->{
      _id,
      title,
      items[]{
        _key,
        title,
        link
      }
    },
    socialMedia[]{
      _key,
      title,
      link,
      icon
    }
  }
`;

export const getAllBlogPosts = groq`*[_type == "post"] {
    title,
    slug,
    "author": author-> {
      name,
      "imageUrl": image.asset->url
    },
    "mainImage": mainImage.asset->url,
    categories[]-> {
      name
    },
    publishedAt,
    body
  }
}
`;

export const getAllBlogPostsSlugs = () => groq`*[_type == "post"] {
  slug,
}`;

export const getBlogPostBySlug = (slug: string) => {
  return groq`*[_type == "post"  && slug.current == "${slug}"][0] {
    title,
    slug,
    "author": author-> {
      name,
      "imageUrl": image.asset->url
    },
    "mainImage": mainImage.asset->url,
    categories[]-> {
      name
    },
    publishedAt,
    body
  }
}`;
};

export const getAllProjectsSlugs = () => groq`*[_type == "project"] {
  slug,
}`;

export const PAGES_QUERY = () => {
  return groq`*[_type == "pages"]`;
};
