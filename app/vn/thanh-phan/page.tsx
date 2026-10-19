import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, VN_BASE, BRAND, ORGANIZATION } from '../_lib/site';
import { INGREDIENTS, docMonth } from '../_lib/ingredients';
import { H2, P, B } from '../_articles/_ui';

/**
 * 전성분(INCI) 페이지 `/vn/thanh-phan` — 2026-10-19.
 * 왜 — AI 답변은 판매자가 「명시한 사실」을 뽑아 쓴다(GEO 실행 전략 1판 0장 · 10-17 진단: 제품을 드는 답의 출처가 브랜드 자사 글).
 *      본사 회신(요청서 ④)으로 6종 전성분이 생겨 「có hay không」 사실을 한 페이지에 둔다. 데이터는 `_lib/ingredients.ts`.
 * 🔴 함량 없음 · 효능·안전 판단 없음 · 금지어(브랜드.md 7절) 0.
 */
const SLUG = 'thanh-phan';
const PAGE_URL = `${VN_BASE}/${SLUG}`;
const TITLE = 'Bảng thành phần (INCI) của 6 sản phẩm La Théorie';
const DESCRIPTION =
  'Bảng thành phần đầy đủ theo thứ tự trên nhãn của 6 sản phẩm La Théorie, và những gì đọc được trực tiếp từ bảng: hương liệu, cồn, paraben, dầu thực vật, petrolatum, silicone.';
const UPDATED = '2026-10-19';
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

const COLS: { key: keyof (typeof INGREDIENTS)[number]['facts']; head: string }[] = [
  { key: 'fragrance', head: 'Hương liệu (Parfum)' },
  { key: 'ethanol', head: 'Cồn ethanol (Alcohol)' },
  { key: 'paraben', head: 'Paraben, phenoxyethanol' },
  { key: 'plantOil', head: 'Dầu thực vật, lanolin' },
  { key: 'petrolatum', head: 'Petrolatum, dầu khoáng' },
  { key: 'silicone', head: 'Silicone' },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: 'Sản phẩm La Théorie có hương liệu không?',
    a: 'Không. Trong bảng thành phần của cả 6 sản phẩm La Théorie không có hương liệu (Parfum/Fragrance).',
  },
  {
    q: 'Sản phẩm La Théorie có cồn không?',
    a: 'Năm sản phẩm — gel rửa mặt, nước cân bằng, kem dưỡng ẩm, tinh chất và kem BB — không có cồn ethanol (Alcohol, Alcohol Denat.) trong bảng thành phần. Kem chống nắng có Alcohol.',
  },
  {
    q: 'Sản phẩm La Théorie có paraben không?',
    a: 'Không. Cả 6 sản phẩm không có paraben và không có phenoxyethanol trong bảng thành phần.',
  },
  {
    q: 'Sản phẩm La Théorie có dầu thực vật hay dầu khoáng không?',
    a: 'Không có dầu thực vật, dầu động vật hay lanolin trong cả 6 bảng thành phần. Riêng tinh chất Dual Effect Essence có petrolatum; năm sản phẩm còn lại không có petrolatum hay dầu khoáng.',
  },
];

export const metadata: Metadata = {
  title: `${TITLE} | ${BRAND}`,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL, languages: { vi: PAGE_URL } },
  openGraph: { type: 'website', url: PAGE_URL, title: TITLE, description: DESCRIPTION, siteName: BRAND, locale: 'vi_VN' },
};

export default function ThanhPhanPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ORGANIZATION,
      {
        '@type': 'WebPage',
        '@id': PAGE_URL,
        url: PAGE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: 'vi-VN',
        dateModified: UPDATED,
        about: { '@id': ORGANIZATION['@id'] },
        isPartOf: { '@type': 'WebSite', name: BRAND, url: SITE_URL },
        publisher: { '@id': ORGANIZATION['@id'] },
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}#faq`,
        mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: BRAND, item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Chăm sóc da mụn', item: VN_BASE },
          { '@type': 'ListItem', position: 3, name: 'Bảng thành phần', item: PAGE_URL },
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

        <h1 className="text-3xl md:text-[42px] font-semibold leading-[1.2] tracking-tight text-gray-950">{TITLE}</h1>
        <p className="mt-5 text-[11px] uppercase tracking-[0.08em] text-gray-500">
          <time dateTime={UPDATED}>{UPDATED}</time>
          <span className="mx-2 text-gray-300">·</span>
          <span className="font-belleza normal-case tracking-normal text-sm">{BRAND}</span>
        </p>

        <P>
          Bảng thành phần dưới đây được chép từ tài liệu công thức do công ty La Théorie cung cấp (tháng ghi ở từng sản phẩm), theo thứ tự in trên nhãn.
          Trang này chỉ cho biết một thành phần <B>có hay không có</B> trong sản phẩm; không đánh giá hiệu quả hay độ an toàn. Cách đọc bảng thành phần
          cho da mụn có trong bài{' '}
          <Link href="/vn/da-mun-khong-nen-dung-thanh-phan-gi" className={LINK}>Da mụn không nên dùng thành phần gì?</Link>
        </P>

        <H2 id="doc-nhanh">Đọc nhanh: có gì, không có gì</H2>
        <div className="my-7 -mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-gray-900">
                <th className="py-3 pr-4 font-semibold text-gray-950">Sản phẩm</th>
                {COLS.map((c) => (
                  <th key={c.key} className="py-3 pr-3 font-semibold text-gray-950">{c.head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {INGREDIENTS.map((s) => (
                <tr key={s.id} className="border-b border-gray-200 align-top">
                  <td className="py-3 pr-4 font-semibold text-gray-900">{s.name}</td>
                  {COLS.map((c) => (
                    <td key={c.key} className={`py-3 pr-3 ${s.facts[c.key] ? 'text-gray-900' : 'text-gray-500'}`}>{s.facts[c.key] ? 'Có' : 'Không'}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          “Có / Không” được đọc từ tên thành phần trong bảng. “Cồn” ở đây là ethanol (Alcohol, Alcohol Denat.), không tính cồn béo như octyldodecanol.
          “Silicone” gồm dimethicone, cyclopentasiloxane và các dẫn xuất siloxane. Không sản phẩm nào có dầu thực vật, dầu động vật, lanolin, paraben hay phenoxyethanol.
        </P>

        {INGREDIENTS.map((s) => (
          <section key={s.id} aria-labelledby={`sp-${s.id}`}>
            <H2 id={`sp-${s.id}`}>{s.name}</H2>
            <p className="mb-2 text-[12px] uppercase tracking-[0.08em] text-gray-500">{s.label} · tài liệu công thức {docMonth(s.docDate)} · {s.inci.length} thành phần</p>
            <P>{s.inci.join(', ')}</P>
          </section>
        ))}

        <H2 id="0-axit-beo">Về công thức 0% axit béo</H2>
        <P>
          Trong 6 bảng thành phần trên không có dầu thực vật, dầu động vật, lanolin hay axit béo tự do. “0% axit béo” là công bố của công ty; trang này chỉ đưa
          bảng thành phần để bạn tự đối chiếu. Vì sao thương hiệu bỏ axit béo:{' '}
          <Link href="/vn/kem-duong-am-khong-chua-axit-beo-la-gi" className={LINK}>Kem dưỡng ẩm không chứa axit béo là gì? Ai nên dùng?</Link>
        </P>

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="mt-14 mb-4 scroll-mt-28 text-2xl md:text-[28px] font-semibold text-gray-950">Câu hỏi thường gặp</h2>
          <dl className="divide-y divide-gray-200 border-t border-gray-200">
            {FAQ.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="text-base font-semibold text-gray-950">{f.q}</dt>
                <dd className="mt-2 text-[15px] leading-[1.85] text-gray-700">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="mt-14 border-t border-gray-200 pt-6 text-[13px] leading-relaxed text-gray-500">
          Bảng thành phần có thể thay đổi theo lô sản xuất — hãy đối chiếu với nhãn in trên bao bì. Nội dung mang tính tham khảo, không thay thế tư vấn của bác sĩ da liễu.
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
