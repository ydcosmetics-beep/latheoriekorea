import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, getArticle } from '../_lib/articles';
import { SITE_URL, SG_BASE, BRAND } from '../_lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const url = `${SG_BASE}/${a.slug}`;

  return {
    title: `${a.title} | ${BRAND}`,
    description: a.description,
    alternates: { canonical: url, languages: { 'en-SG': url } },
    openGraph: {
      type: 'article',
      url,
      title: a.title,
      description: a.description,
      siteName: BRAND,
      locale: 'en_SG',
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

  const url = `${SG_BASE}/${a.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: a.title,
        description: a.description,
        inLanguage: 'en-SG',
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
          { '@type': 'ListItem', position: 2, name: 'Acne-prone skin care', item: SG_BASE },
          { '@type': 'ListItem', position: 3, name: a.title, item: url },
        ],
      },
    ],
  };

  return (
    <article lang="en-SG" className="bg-white pt-[70px] md:pt-[80px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-3xl px-6 py-14 md:px-10 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 text-[11px] uppercase tracking-[0.08em] text-gray-500">
          <Link href="/sg" className="hover:text-gray-900">Acne-prone skin care</Link>
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
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em] text-gray-500">In short</p>
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
            Frequently asked questions
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
          <details className="group mt-14 border-t border-gray-200 pt-4">
            <summary className="cursor-pointer list-none text-sm text-gray-500 hover:text-gray-900 [&::-webkit-details-marker]:hidden">
              References ({a.references.length}) <span className="ml-1 inline-block transition-transform group-open:rotate-180">▾</span>
            </summary>
            <ol className="mt-3 space-y-2 text-sm text-gray-600">
              {a.references.map((r, i) => (
                <li key={r.url}>
                  <span className="mr-2 text-gray-400">[{i + 1}]</span>
                  <a href={r.url} rel="noopener nofollow" className="underline underline-offset-4 hover:text-gray-900">{r.label}</a>
                </li>
              ))}
            </ol>
          </details>
        )}

        <p className="mt-14 border-t border-gray-200 pt-6 text-[13px] leading-relaxed text-gray-500">
          This article is general information about cosmetic ingredients and is not a substitute for medical diagnosis or advice.
          Skin varies from person to person. If your skin is inflamed, painful or the condition persists, please see a dermatologist.
        </p>

        <div className="mt-12">
          <Link href="/sg" className="text-[11px] uppercase tracking-[0.08em] text-gray-700 underline underline-offset-4 hover:text-gray-950">
            ← All articles
          </Link>
        </div>
      </div>
    </article>
  );
}
