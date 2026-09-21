import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { articles, STAGE_LABEL } from './_lib/articles';
import { products, interviews } from './_lib/products';
import { SITE_URL, SG_BASE, BRAND, SHOPEE_SG_SHOP_ID } from './_lib/site';
import type { Stage } from '../vn/_lib/types';

/** 허브 — 본사 홈 구성 (히어로 → 소개 → Best sellers → Interviews → 글 → FAQ). Media · Distribution · Exhibition 제외. */
const TITLE = 'Acne-prone skin care in Singapore: ingredients, hydration and fungal acne';
const DESCRIPTION =
  'A guide to choosing ingredients for oily, acne-prone and fungal-acne-prone skin in a humid climate — including the role of fatty acids and Malassezia yeast, which a non-comedogenic label does not tell you about.';

const STAGE_ORDER: Stage[] = ['concept', 'explore', 'compare', 'recommend'];

const FAQ: { q: string; a: string }[] = [
  { q: 'Should I moisturize acne prone skin?', a: 'Yes. Skin that is dried out tends to produce more sebum to compensate, and oily and dehydrated are not opposites — skin can be both. The question is not whether to moisturise but what with: a light texture (gel or gel-cream) and ingredients that do not feed breakouts.' },
  { q: 'Is moisturizing gel good for oily skin?', a: 'Usually, yes. A gel or gel-cream gives water without a heavy occlusive layer, which suits oily skin in Singapore’s humidity. If your skin is prone to fungal acne, also check whether the formula contains fatty acids — texture alone does not tell you that.' },
  { q: 'What does “fungal acne safe” mean?', a: 'That a product avoids the ingredients Malassezia yeast can use as food — mainly fatty acids, the plant oils and butters that contain them, their esters and polysorbates. It is a different criterion from non-comedogenic, and a product can meet one without the other.' },
  { q: 'What ingredients should I avoid for acne-prone skin?', a: 'Commonly listed: mineral oil and heavy plant oils, lanolin, drying alcohol and synthetic fragrance. For skin prone to fungal acne, the more useful rule is to check for fatty acids — most of the oils on that list are rich in them. Details are in “What to avoid if I have fungal acne?”.' },
  { q: 'How can you tell if acne is fungal?', a: 'Typical signs are small bumps of the same size, in clusters, often itchy, on the forehead, hairline, chest or back — and a routine for regular acne that does not help. Appearance alone is easy to misread, so a dermatologist should confirm it.' },
];

export const metadata: Metadata = {
  title: `${TITLE} | ${BRAND}`,
  description: DESCRIPTION,
  alternates: { canonical: SG_BASE, languages: { 'en-SG': SG_BASE } },
  openGraph: {
    type: 'website', url: SG_BASE, title: TITLE, description: DESCRIPTION, siteName: BRAND, locale: 'en_SG',
    images: [{ url: `${SITE_URL}/vn-sg/hq-hero.webp`, width: 1800, height: 843 }],
  },
};

const SectionHead = ({ id, title, sub }: { id: string; title: string; sub?: string }) => (
  <div className="text-center">
    <h2 id={id} className="text-[13px] font-medium uppercase tracking-[0.22em] text-gray-950">{title}</h2>
    {sub && <p className="mt-2 text-[13px] text-gray-500">{sub}</p>}
  </div>
);

export default function SgHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', '@id': `${SG_BASE}#collection`, name: TITLE, description: DESCRIPTION, inLanguage: 'en-SG',
        isPartOf: { '@type': 'WebSite', name: BRAND, url: SITE_URL },
        hasPart: articles.map((a) => ({ '@type': 'Article', headline: a.title, url: `${SG_BASE}/${a.slug}`, datePublished: a.published })) },
      { '@type': 'FAQPage', '@id': `${SG_BASE}#faq`, mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: BRAND, item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Acne-prone skin care', item: SG_BASE } ] },
    ],
  };

  return (
    <main lang="en-SG" className="bg-white pt-[70px] md:pt-[80px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1. Hero — same photo as the HQ home */}
      <section className="relative min-h-[520px] md:min-h-[640px] overflow-hidden bg-gray-100">
        <Image src="/vn-sg/hq-hero.webp" alt="La Théorie — microscope and culture dishes in a laboratory" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
        <div className="relative mx-auto flex min-h-[520px] md:min-h-[640px] max-w-6xl flex-col justify-end px-6 pb-14 md:px-10 md:pb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-600">
            <span className="font-belleza normal-case tracking-normal text-sm text-gray-950">{BRAND}</span>
            <span className="mx-2 text-gray-400">·</span>Singapore
          </p>
          <h1 className="font-belleza mt-4 max-w-3xl text-4xl md:text-[56px] leading-[1.1] text-gray-950">{TITLE}</h1>
          <p className="mt-5 text-[13px] tracking-[0.06em] text-gray-600">#FattyAcidsFree&nbsp;&nbsp;&nbsp;#Skinmicrobiome&nbsp;&nbsp;&nbsp;#TroubledSkin</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#articles" className="border border-gray-950 bg-gray-950 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-white hover:bg-gray-800">Read the articles</a>
            <a href="#products" className="border border-gray-950 bg-white/80 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-gray-950 hover:bg-white">See the products</a>
          </div>
        </div>
      </section>

      {/* 2. Intro — HQ home copy */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28" aria-labelledby="intro">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">Ingredients proven by Medical Theory</p>
            <h2 id="intro" className="font-belleza mt-4 text-3xl md:text-[40px] leading-[1.2] text-gray-950">Solution begins with<br />understanding the cause</h2>
          </div>
          <div className="text-[15px] md:text-base leading-[1.9] text-gray-700">
            <p>We analyze over 1,000 types of skin microbiome, mathematically defining the relationship between cosmetics, skin troubles, and microorganisms. By analyzing the cause, we can change the results.</p>
            <p className="mt-5">We cannot promise miraculous skin changes, but we will strive to provide you with calmer skin than today, making small but non-stopping changes every day.</p>
            <p className="mt-5">The whole range is built on a <strong className="font-semibold text-gray-900">0% Fatty Acid</strong> formula — leaving out the group of ingredients the Malassezia yeast on your skin uses as food. Used in more than 20 dermatology clinics and aesthetic centres in Korea.</p>
            <a href={`${SITE_URL}/about`} className="mt-8 inline-block border border-gray-950 px-7 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-gray-950 hover:bg-gray-950 hover:text-white">About Us</a>
          </div>
        </div>
      </section>

      {/* 3. Best sellers */}
      <section id="products" className="border-t border-gray-100 bg-[#fafafa]" aria-labelledby="best-sellers">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHead id="best-sellers" title="Best sellers" sub="Sold by the official store on Shopee Singapore" />
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <li key={p.id} className="group">
                <a href={p.url} rel="noopener" className="block">
                  <div className="relative aspect-square overflow-hidden bg-white">
                    {p.badge && <span className="absolute left-3 top-3 z-10 bg-gray-950 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white">{p.badge}</span>}
                    <Image src={p.image} alt={`${BRAND} ${p.name}`} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-contain p-8 transition-transform duration-300 group-hover:scale-[1.03]" />
                  </div>
                  <p className="mt-4 text-[13px] font-medium tracking-[0.02em] text-gray-950">{p.label}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-gray-500">{p.tagline}</p>
                  {p.ingredients.length > 0 && <p className="mt-1 text-[12px] text-gray-400">{p.ingredients.join(' · ')}</p>}
                  <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-gray-950 underline underline-offset-4 decoration-gray-300 group-hover:decoration-gray-950">View on Shopee →</p>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-[12px] text-gray-500">
            Ingredients shown are the representative ingredients printed on the label. Official store:{' '}
            <a href={`https://shopee.sg/shop/${SHOPEE_SG_SHOP_ID}`} rel="noopener" className="underline underline-offset-4">La Théorie on Shopee Singapore</a>
          </p>
        </div>
      </section>

      {/* 4. Interviews — HQ home, verbatim */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28" aria-labelledby="interviews">
        <SectionHead id="interviews" title="Interviews" sub="Real experiences from medical professionals and skincare specialists in Korea" />
        <div className="mt-14 space-y-16">
          {interviews.map((it, i) => (
            <div key={it.who} className={`grid items-center gap-8 md:grid-cols-5 md:gap-14 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden bg-gray-100 md:col-span-2">
                <Image src={it.image} alt={it.alt} fill sizes="320px" className="object-cover object-center" />
              </div>
              <blockquote className="md:col-span-3">
                <p className="font-belleza text-3xl leading-none text-gray-300">“</p>
                <p className="text-xl md:text-2xl font-semibold leading-snug text-gray-950">{it.headline}</p>
                <p className="mt-5 text-[15px] leading-[1.85] text-gray-700">{it.body}</p>
                <footer className="mt-5 text-[11px] uppercase tracking-[0.16em] text-gray-500">{it.who}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Articles */}
      <section id="articles" className="border-t border-gray-100 bg-[#fafafa]" aria-labelledby="articles-heading">
        <div className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
          <SectionHead id="articles-heading" title="Articles" sub="Each article answers a question people actually search for, cites its sources, and does not replace medical advice" />
          <div className="mt-12 space-y-12">
            {STAGE_ORDER.map((stage) => {
              const group = articles.filter((a) => a.stage === stage);
              if (group.length === 0) return null;
              return (
                <section key={stage} aria-labelledby={`stage-${stage}`}>
                  <h3 id={`stage-${stage}`} className="mb-5 border-b border-gray-900 pb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500">{STAGE_LABEL[stage]}</h3>
                  <ul className="divide-y divide-gray-200">
                    {group.map((a) => (
                      <li key={a.slug}>
                        <Link href={`/sg/${a.slug}`} className="group block py-6">
                          <h4 className="text-xl md:text-2xl font-semibold leading-snug text-gray-950 underline-offset-4 group-hover:underline">{a.title}</h4>
                          <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{a.description}</p>
                          <p className="mt-3 text-[11px] uppercase tracking-[0.08em] text-gray-400"><time dateTime={a.published}>{a.published}</time></p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28" aria-labelledby="faq-heading">
        <SectionHead id="faq-heading" title="Frequently asked questions" sub="The questions people search for" />
        <dl className="mt-10 divide-y divide-gray-200 border-t border-gray-200">
          {FAQ.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="text-base font-semibold text-gray-950">{f.q}</dt>
              <dd className="mt-2 text-[15px] leading-[1.85] text-gray-700">{f.a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-[13px] leading-relaxed text-gray-500">
          The content in this section is general information about cosmetic ingredients and is not a substitute for medical diagnosis or advice. If your skin is inflamed, painful or the condition persists, please see a dermatologist.
        </p>
      </section>
    </main>
  );
}
