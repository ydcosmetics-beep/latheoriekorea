import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, getArticle } from '../_lib/articles';
import { SITE_URL, VN_BASE, BRAND } from '../_lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const url = `${VN_BASE}/${a.slug}`;

  return {
    title: `${a.title} | ${BRAND}`,
    description: a.description,
    // 🔴 루트 레이아웃에 canonical 이 없다(2026-09-03 실측). 이 섹션은 스스로 건다.
    alternates: { canonical: url, languages: { vi: url } },
    openGraph: {
      type: 'article',
      url,
      title: a.title,
      description: a.description,
      siteName: BRAND,
      locale: 'vi_VN',
      publishedTime: a.published,
      modifiedTime: a.updated ?? a.published,
    },
    twitter: { card: 'summary_large_image', title: a.title, description: a.description },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const url = `${VN_BASE}/${a.slug}`;

  /**
   * JSON-LD. 현재 사이트에는 구조화 데이터가 0건이다(2026-09-03 실측).
   * FAQPage 는 본문 FAQ 절과 같은 내용이어야 한다 — 다르면 스팸으로 읽힌다.
   */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: a.title,
        description: a.description,
        inLanguage: 'vi-VN',
        datePublished: a.published,
        dateModified: a.updated ?? a.published,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        author: { '@type': 'Organization', name: BRAND, url: SITE_URL },
        publisher: { '@type': 'Organization', name: BRAND, url: SITE_URL },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: a.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: BRAND, item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Chăm sóc da mụn', item: VN_BASE },
          { '@type': 'ListItem', position: 3, name: a.title, item: url },
        ],
      },
    ],
  };

  return (
    /* 🔴 루트 레이아웃이 lang="en" 이라 요소 단위로 언어를 지정한다.
       루트를 고치면 기존 파일을 건드리게 되므로 이 방식을 쓴다. */
    <article lang="vi" className="bg-white pt-[70px] md:pt-[80px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-3xl px-6 py-14 md:px-10 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 text-[11px] uppercase tracking-[0.08em] text-gray-500">
          <Link href="/vn" className="hover:text-gray-900">Chăm sóc da mụn</Link>
        </nav>

        <h1 className="text-3xl md:text-[42px] font-semibold leading-[1.2] tracking-tight text-gray-950">
          {a.title}
        </h1>

        <p className="mt-5 text-[11px] uppercase tracking-[0.08em] text-gray-500">
          <time dateTime={a.published}>{a.published}</time>
          <span className="mx-2 text-gray-300">·</span>
          <span className="font-belleza normal-case tracking-normal text-sm">{BRAND}</span>
        </p>

        <div className="mt-10 border-y border-gray-900 py-6">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em] text-gray-500">Tóm tắt</p>
          <ul className="space-y-2">
            {a.tldr.map((t) => (
              <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-gray-800">
                <span aria-hidden className="mt-[9px] h-px w-3 shrink-0 bg-gray-400" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <a.Body />

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="mt-14 mb-4 scroll-mt-28 text-2xl md:text-[28px] font-semibold text-gray-950">
            Câu hỏi thường gặp
          </h2>
          <dl className="divide-y divide-gray-200 border-t border-gray-200">
            {a.faq.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="text-base font-semibold text-gray-950">{f.q}</dt>
                <dd className="mt-2 text-[15px] leading-[1.85] text-gray-700">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {a.references.length > 0 && (
          <section aria-labelledby="ref-heading" className="mt-14">
            <h2 id="ref-heading" className="mb-4 text-lg font-semibold text-gray-950">Tài liệu tham khảo</h2>
            <ol className="space-y-2 text-sm text-gray-600">
              {a.references.map((r, i) => (
                <li key={r.url}>
                  <span className="mr-2 text-gray-400">[{i + 1}]</span>
                  <a href={r.url} rel="noopener nofollow" className="underline underline-offset-4 hover:text-gray-900">{r.label}</a>
                </li>
              ))}
            </ol>
          </section>
        )}

        <p className="mt-14 border-t border-gray-200 pt-6 text-[13px] leading-relaxed text-gray-500">
          Nội dung trong bài mang tính chất thông tin về thành phần mỹ phẩm, không thay thế cho chẩn đoán hay tư vấn y khoa.
          Tình trạng da mỗi người mỗi khác. Nếu da có dấu hiệu viêm, đau hoặc kéo dài, bạn nên đến khám tại cơ sở da liễu.
        </p>

        <div className="mt-12">
          <Link href="/vn" className="text-[11px] uppercase tracking-[0.08em] text-gray-700 underline underline-offset-4 hover:text-gray-950">
            ← Tất cả bài viết
          </Link>
        </div>
      </div>
    </article>
  );
}
