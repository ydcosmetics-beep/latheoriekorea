import type { MetadataRoute } from 'next';
import { SITE_URL } from './vn/_lib/site';
import { articles as vnArticles } from './vn/_lib/articles';
import { articles as sgArticles } from './sg/_lib/articles';

/**
 * sitemap.xml — 현재 사이트에는 이 파일이 아예 없다(404, 2026-09-15 재확인).
 *
 * 기존 정적 라우트(`/`, `/about`)까지 같이 넣는다. 시장 섹션만 넣으면
 * 본체 페이지가 사이트맵 밖에 남는다. VN(/vn) · SG(/sg) 두 시장을 한 사이트맵에 둔다.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/vn`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/sg`, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = [
    ...vnArticles.map((a) => ({
      url: `${SITE_URL}/vn/${a.slug}`,
      lastModified: a.updated ?? a.published,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...sgArticles.map((a) => ({
      url: `${SITE_URL}/sg/${a.slug}`,
      lastModified: a.updated ?? a.published,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return [...staticRoutes, ...articleRoutes];
}
