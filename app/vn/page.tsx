import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { articles, STAGE_LABEL } from './_lib/articles';
import { products, interviews } from './_lib/products';
import { SITE_URL, VN_BASE, BRAND, BRIDGE_URL } from './_lib/site';
import type { Stage } from './_lib/types';

/**
 * 허브 — 본사 홈(latheoriekorea.com)의 구성을 따른다 (2026-09-16 총괄 지시):
 * 히어로(본사 hero-bg) → 소개(「Solution begins with understanding the cause」) → Best sellers → Interviews → 글 → FAQ.
 * 본사 홈의 Media · Distribution · Exhibition 은 넣지 않는다.
 */
const TITLE = 'Chăm sóc da mụn: thành phần, dưỡng ẩm và nấm men Malassezia';
const DESCRIPTION =
  'Hướng dẫn chọn thành phần cho da mụn, da dầu và viêm nang lông — bao gồm vai trò của axit béo và nấm men Malassezia, điều mà nhãn non-comedogenic không nói tới.';

const STAGE_ORDER: Stage[] = ['concept', 'explore', 'compare', 'recommend'];

/** 허브 FAQ — 고정 쿼리 10개(결정 18) 중 다섯. JSON-LD FAQPage 에 그대로 들어간다. */
const FAQ: { q: string; a: string }[] = [
  { q: 'Da mụn có nên dùng kem dưỡng không?', a: 'Có. Khi da bị làm khô quá mức, tuyến bã nhờn thường tiết thêm dầu để bù lại, và tình trạng dầu — mụn dễ nặng hơn. Điều cần chọn không phải là “có dưỡng hay không” mà là dưỡng bằng gì: kết cấu nhẹ (gel, gel-cream) và thành phần không nuôi mụn.' },
  { q: 'Vì sao da mụn vẫn cần dưỡng ẩm?', a: 'Vì da dầu và da thiếu nước là hai chuyện khác nhau. Da có thể bóng dầu mà vẫn thiếu nước ở lớp dưới, và khi thiếu nước, da tiết dầu nhiều hơn. Dưỡng ẩm đúng cách giúp hàng rào bảo vệ da ổn định hơn.' },
  { q: 'Non-comedogenic là gì?', a: 'Là nhãn cho biết sản phẩm được đánh giá là ít gây bít tắc lỗ chân lông. Nhãn này không cho biết sản phẩm có chứa axit béo — nguồn thức ăn của nấm men Malassezia — hay không. Đó là hai tiêu chí độc lập.' },
  { q: 'Da mụn nên dùng kem dưỡng dạng nào?', a: 'Với da dầu mụn, dạng gel hoặc gel-cream thường phù hợp hơn kem đặc: đủ ẩm mà không nặng, không bí trong khí hậu nóng ẩm. Với da dễ gặp mụn nấm hoặc viêm nang lông, nên kiểm tra thêm xem công thức có chứa axit béo hay không.' },
  { q: 'Thành phần nên tránh cho da mụn?', a: 'Dầu khoáng, dầu dừa, dầu ô liu, dầu bơ, lanolin, cồn khô và hương liệu tổng hợp là những nhóm hay được nhắc tới. Điểm chung ít được nói tới của phần lớn các loại dầu đó là hàm lượng axit béo cao — chi tiết trong bài “Da mụn không nên dùng thành phần gì?”.' },
];

export const metadata: Metadata = {
  title: `${TITLE} | ${BRAND}`,
  description: DESCRIPTION,
  alternates: { canonical: VN_BASE, languages: { vi: VN_BASE } },
  openGraph: {
    type: 'website', url: VN_BASE, title: TITLE, description: DESCRIPTION, siteName: BRAND, locale: 'vi_VN',
    images: [{ url: `${SITE_URL}/vn-sg/hq-hero.webp`, width: 1800, height: 843 }],
  },
};

/** 본사 홈의 절 제목 — 작은 대문자 제목 + 회색 부제 */
const SectionHead = ({ id, title, sub }: { id: string; title: string; sub?: string }) => (
  <div className="text-center">
    <h2 id={id} className="text-[13px] font-medium uppercase tracking-[0.22em] text-gray-950">{title}</h2>
    {sub && <p className="mt-2 text-[13px] text-gray-500">{sub}</p>}
  </div>
);

export default function VnHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', '@id': `${VN_BASE}#collection`, name: TITLE, description: DESCRIPTION, inLanguage: 'vi-VN',
        isPartOf: { '@type': 'WebSite', name: BRAND, url: SITE_URL },
        hasPart: articles.map((a) => ({ '@type': 'Article', headline: a.title, url: `${VN_BASE}/${a.slug}`, datePublished: a.published })) },
      { '@type': 'FAQPage', '@id': `${VN_BASE}#faq`, mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: BRAND, item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Chăm sóc da mụn', item: VN_BASE } ] },
    ],
  };

  return (
    <main lang="vi" className="bg-white pt-[70px] md:pt-[80px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1. 히어로 — 본사 홈과 같은 사진, 글은 왼쪽 아래 */}
      <section className="relative min-h-[520px] md:min-h-[640px] overflow-hidden bg-gray-100">
        <Image src="/vn-sg/hq-hero.webp" alt="La Théorie — kính hiển vi và đĩa nuôi cấy trong phòng thí nghiệm" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
        <div className="relative mx-auto flex min-h-[520px] md:min-h-[640px] max-w-6xl flex-col justify-end px-6 pb-14 md:px-10 md:pb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-600">
            <span className="font-belleza normal-case tracking-normal text-sm text-gray-950">{BRAND}</span>
            <span className="mx-2 text-gray-400">·</span>Việt Nam
          </p>
          <h1 className="font-belleza mt-4 max-w-3xl text-4xl md:text-[56px] leading-[1.1] text-gray-950">{TITLE}</h1>
          <p className="mt-5 text-[13px] tracking-[0.06em] text-gray-600">#FattyAcidsFree&nbsp;&nbsp;&nbsp;#Skinmicrobiome&nbsp;&nbsp;&nbsp;#TroubledSkin</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#bai-viet" className="border border-gray-950 bg-gray-950 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-white hover:bg-gray-800">Đọc bài viết</a>
            <a href="#san-pham" className="border border-gray-950 bg-white/80 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-gray-950 hover:bg-white">Xem sản phẩm</a>
          </div>
        </div>
      </section>

      {/* 2. 소개 — 본사 홈 「Solution begins with understanding the cause」 */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28" aria-labelledby="gioi-thieu">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">Ingredients proven by Medical Theory</p>
            <h2 id="gioi-thieu" className="font-belleza mt-4 text-3xl md:text-[40px] leading-[1.2] text-gray-950">Giải pháp bắt đầu từ việc<br />hiểu nguyên nhân</h2>
          </div>
          <div className="text-[15px] md:text-base leading-[1.9] text-gray-700">
            <p>Chúng tôi phân tích hơn 1.000 loại vi sinh vật trên da, định nghĩa bằng toán học mối quan hệ giữa mỹ phẩm, các vấn đề về da và vi sinh vật. Phân tích được nguyên nhân, chúng tôi có thể thay đổi kết quả.</p>
            <p className="mt-5">Chúng tôi không thể hứa hẹn những thay đổi kỳ diệu cho làn da, nhưng sẽ nỗ lực mang lại cho bạn làn da dịu hơn hôm nay — bằng những thay đổi nhỏ nhưng không ngừng mỗi ngày.</p>
            <p className="mt-5">Toàn bộ dòng sản phẩm được xây dựng trên công thức <strong className="font-semibold text-gray-900">0% Fatty Acid</strong> — bỏ đi nhóm thành phần mà nấm men Malassezia trên da dùng làm thức ăn. Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.</p>
            <a href={`${SITE_URL}/about`} className="mt-8 inline-block border border-gray-950 px-7 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-gray-950 hover:bg-gray-950 hover:text-white">About Us</a>
          </div>
        </div>
      </section>

      {/* 3. Best sellers — 본사 홈과 같은 제목, 우리 사진 */}
      <section id="san-pham" className="border-t border-gray-100 bg-[#fafafa]" aria-labelledby="best-sellers">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHead id="best-sellers" title="Best sellers" sub="Bán chính hãng trên Shopee Việt Nam" />
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
                  <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-gray-950 underline underline-offset-4 decoration-gray-300 group-hover:decoration-gray-950">Xem trên Shopee →</p>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-[12px] text-gray-500">
            Thành phần ghi dưới sản phẩm là thành phần đại diện in trên nhãn. Cửa hàng chính hãng:{' '}
            <a href={`${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=hub`} rel="noopener" className="underline underline-offset-4">La Théorie trên Shopee Việt Nam</a>
          </p>
        </div>
      </section>

      {/* 4. Interviews — 본사 홈 원문(영문) 그대로 */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28" aria-labelledby="interviews">
        <SectionHead id="interviews" title="Interviews" sub="Trải nghiệm thực tế từ bác sĩ da liễu và chuyên gia chăm sóc da tại Hàn Quốc" />
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

      {/* 5. 글 */}
      <section id="bai-viet" className="border-t border-gray-100 bg-[#fafafa]" aria-labelledby="bai-viet-heading">
        <div className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
          <SectionHead id="bai-viet-heading" title="Bài viết" sub="Mỗi bài trả lời một câu hỏi người dùng thực sự tìm kiếm, có tài liệu tham khảo, và không thay thế cho tư vấn y khoa" />
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
                        <Link href={`/vn/${a.slug}`} className="group block py-6">
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
        <SectionHead id="faq-heading" title="Câu hỏi thường gặp" sub="Những câu hỏi người dùng hay tìm" />
        <dl className="mt-10 divide-y divide-gray-200 border-t border-gray-200">
          {FAQ.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="text-base font-semibold text-gray-950">{f.q}</dt>
              <dd className="mt-2 text-[15px] leading-[1.85] text-gray-700">{f.a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-[13px] leading-relaxed text-gray-500">
          Nội dung trong chuyên mục này mang tính chất thông tin về thành phần mỹ phẩm, không thay thế cho chẩn đoán hay tư vấn y khoa. Nếu da có dấu hiệu viêm, đau hoặc kéo dài, bạn nên đến khám tại cơ sở da liễu.
        </p>
      </section>
    </main>
  );
}
