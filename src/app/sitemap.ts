import { MetadataRoute } from 'next';

const mainRoutes = 'https://psicamilasamogim.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: mainRoutes,
      lastModified: new Date(),
    },
    {
      url: mainRoutes + '/sobre',
      lastModified: new Date(),
    },
    {
      url: mainRoutes + '/posts',
      lastModified: new Date(),
    },
    {
      url: mainRoutes + '/lojinha',
      lastModified: new Date(),
    },
    {
      url: mainRoutes + '/espaco',
      lastModified: new Date(),
    },
  ];
}