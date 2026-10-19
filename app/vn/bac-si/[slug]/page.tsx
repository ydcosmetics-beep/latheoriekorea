import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, VN_BASE, BRAND, ORGANIZATION } from '../../_lib/site';
import { articles } from '../../_lib/articles';
import { H2, P } from '../../_articles/_ui';
import { REVIEWERS, getReviewer, reviewerUrl, personJsonLd } from '../../_articles/_ui-tham-van';

/**
 * 검토자(Person) 프로필 페이지 `/vn/bac-si/<slug>` — 2026-10-19.
 * 데이터는 `_articles/_ui-tham-van.tsx` REVIEWERS. 동의 전(consentConfirmed=false)에는 `notFound()`.
 * 「Các bài viết có tham vấn」 = `articles.filter(a => a.reviewer === slug)`.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return REVIEWERS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = getReviewer(slug);
  if (!r || !r.consentConfirmed) return {};
  const url = reviewerUrl(r);
  const title = `BS. ${r.name} — Tham vấn chuyên môn`;
  const description = `${r.jobTitle}, ${r.affiliation}. Tham vấn chuyên môn cho các bài viết trong chuyên mục Chăm sóc da mụn của ${BRAND} Việt Nam.`;
  return {
    title: `${title} | ${BRAND}`,
    description,
    alternates: { canonical: url, languages: { vi: url } },
    openGraph: { type: 'profile', url, title, description, siteName: BRAND, locale: 'vi_VN' },
  };
}

export default async function BacSiPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getReviewer(slug);
  if (!r || !r.consentConfirmed) notFound();
  const person = personJsonLd(r);
  if (!person) notFound();

  const url = reviewerUrl(r);
  const reviewed = articles.filter((a) => a.reviewer === r.slug && a.reviewedOn);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ORGANIZATION,
      person,
      {
        '@type': 'ProfilePage',
        '@id': url,
        url,
        inLanguage: 'vi-VN',
        mainEntity: { '@id': person['@id'] },
        isPartOf: { '@type': 'WebSite', name: BRAND, url: SITE_URL },
        publisher: { '@id': ORGANIZATION['@id'] },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: BRAND, item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Chăm sóc da mụn', item: VN_BASE },
          { '@type': 'ListItem', position: 3, name: `BS. ${r.name}`, item: url },
        ],
      },
    ],
  };

  return (
    <main lang="vi" className="bg-white pt-[70px] md:pt-[80px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-3xl px-6 py-14 md:px-10 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 text-[11px] uppercase tracking-[0.08em] text-gray-500">
          <Link href="/vn" className="hover:text-gray-900">Chăm sóc da mụn</Link>
        </nav>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {r.image && (
            <div className="relative h-40 w-40 shrink-0 overflow-hidden bg-gray-100">
              <Image src={r.image} alt={`BS. ${r.name}`} fill sizes="160px" className="object-cover object-center" />
            </div>
          )}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-gray-500">Tham vấn chuyên môn</p>
            <h1 className="mt-2 text-3xl md:text-[42px] font-semibold leading-[1.2] tracking-tight text-gray-950">BS. {r.name} <span className="text-gray-400">({r.nameKo})</span></h1>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-700">
              {r.jobTitle},{' '}
              {r.affiliationUrl ? (
                <a href={r.affiliationUrl} rel="noopener" className="underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900">{r.affiliation}</a>
              ) : (
                r.affiliation
              )}
            </p>
          </div>
        </div>

        <H2 id="gioi-thieu">Giới thiệu</H2>
        <P>{r.bio}</P>

        <H2 id="vai-tro">Vai trò với nội dung trên trang này</H2>
        <P>
          Bác sĩ xem xét nội dung chuyên môn của những bài viết có ghi “Tham vấn chuyên môn” kèm tên và ngày xem xét. Nội dung do La Théorie Việt Nam biên tập và chịu trách nhiệm.
        </P>
        {r.disclosure && <P>{r.disclosure}</P>}

        <H2 id="bai-viet">Các bài viết có tham vấn ({reviewed.length})</H2>
        <ul className="my-6 space-y-2">
          {reviewed.map((a) => (
            <li key={a.slug} className="text-[15px] leading-relaxed text-gray-700">
              <Link href={`/vn/${a.slug}`} className="font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900">{a.title}</Link>
              <span className="ml-2 text-[12px] text-gray-500">xem xét ngày {a.reviewedOn}</span>
            </li>
          ))}
        </ul>

        {/* 고정 고지(브랜드.md 7절) */}
        <p className="mt-14 border-t border-gray-200 pt-6 text-[13px] leading-relaxed text-gray-500">
          Nội dung mang tính tham khảo, không thay thế tư vấn của bác sĩ da liễu.
        </p>

        <div className="mt-12">
          <Link href="/vn" className="text-[11px] uppercase tracking-[0.08em] text-gray-700 underline underline-offset-4 hover:text-gray-950">
            ← Tất cả bài viết
          </Link>
        </div>
      </div>
    </main>
  );
}
