import type { MetadataRoute } from 'next';

const BASE = 'https://swiftgigs.com.ng';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${BASE}/`,          lastModified, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/waitlist`,  lastModified, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/blog`,      lastModified, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/blog/making-help-accessible-in-nigeria`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/tasks-to-delegate`,                 lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/getting-started-with-swiftgigs`,    lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`,     lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/careers`,   lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/terms`,     lastModified, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/privacy`,   lastModified, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/data-deletion`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
