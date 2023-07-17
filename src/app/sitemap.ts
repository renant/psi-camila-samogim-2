import { MetadataRoute } from 'next';
import { getSortedPostsData } from './lib/posts';
import { getProducts } from './lib/products.';

const mainRoutes = 'https://psicamilasamogim.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();

  const postRoutes = posts.map((post) => {
    return {
      url: `${mainRoutes}/posts/${post.id}`,
      lastModified: new Date().toISOString(),
    };
  });

  const products = getProducts();

  const productsRoutes = products.map((post) => {
    return {
      url: `${mainRoutes}/lojinha/${post.id}`,
      lastModified: new Date().toISOString(),
    };
  });

  const routes = ['','/posts', '/lojinha', '/espaco'].map((route) => {
    return {
      url: `${mainRoutes}${route}`,
      lastModified: new Date().toISOString(),
    };
  });

  return [...routes, ...postRoutes, ...productsRoutes]
}