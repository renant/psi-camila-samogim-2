import { MetadataRoute } from 'next';
import { getSortedPostsData } from './lib/posts';

const mainRoutes = 'https://psicamilasamogim.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();

  const postRoutes = posts.map((post) => {
    return {
      url: `${mainRoutes}/posts/${post.id}`,
      lastModified: new Date().toISOString(),
    };
  });

  const routes = ['', '/sobre', '/posts', '/lojinha', '/espaco'].map((route) => {
    return {
      url: `${mainRoutes}${route}`,
      lastModified: new Date().toISOString(),
    };
  });

  return [...routes, ...postRoutes]
}