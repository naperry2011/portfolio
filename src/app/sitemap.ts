import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/projects', '/trainer-websites', '/about', '/contact'].map((path) => ({ url: SITE_URL + path }));
}
