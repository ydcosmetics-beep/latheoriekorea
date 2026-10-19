import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, VN_BASE, BRAND, BRAND_DESCRIPTION, BRIDGE_URL, ORGANIZATION, SHOPEE_VN_STORE, SHOPEE_SG_STORE } from '../_lib/site';
import { H2, P, B } from '../_articles/_ui';
import { getReviewer, reviewerPath, personJsonLd } from '../_articles/_ui-tham-van';

/**
 * 브랜드 신뢰 페이지 `/vn/ve-la-theorie` — 2026-10-19 (초안 10-18 → 본사 회신 반영).
 *
 * 왜 — 10-14 GEO 실행 전략 4-4: 인용되는 경쟁 페이지에 있고 우리 글에 없는 것은 근거가 아니라 「사람」과 「선택을 돕는 구조」.
 *      본사 회신(2026-10-19 준상 경유): ① 대표원장 전지승 · 부산 당신의피부과 ② 입점 약국 24곳(Notion 목록) ④ 전성분 6종.
 *
 * 🔴 규칙
 *  - 금지어(브랜드.md 7절) 0. 「처방」은 쓰지 않는다 — 피부과는 「được sử dụng và giới thiệu tại phòng khám da liễu」, 약국은 「nhà thuốc tại Hàn Quốc」.
 *  - 신뢰 근거는 고정 문구 한 문장: `Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.` 임상·수치 주장 없음. 한국 판매 수량·리뷰 수 없음.
 *  - 원장 로마자는 본사 홈 Interviews 표기 「Ji-Seung Jeon」을 따른다(소개서 11p 는 Jee-Seung — 본사 확인 전까지 홈 표기 우선). 병원명은 본사 홈 「YourSkinClinics」 + 한글.
 *  - 「Tham vấn chuyên môn」 바이라인은 원장이 실제로 검토한 글에만 — 검토 절차 전이라 이 페이지는 브랜드 사실(대표원장)만 적는다.
 *  - 의사 사진·인용문은 PDP 지침 3-1: 회사 공식 사진만 · 지어낸 인용문 금지 → 인용문 없이 허브 Interviews 로 링크만.
 *  - 약국 목록: 본사 Notion 「입점약국 리스트」(2026-10-19 열람) 24곳. 약국명은 한글 고유명사 그대로, 지역은 로마자. 입점 시작일은 자료에 없어 적지 않는다.
 */
const SLUG = 've-la-theorie';
const PAGE_URL = `${VN_BASE}/${SLUG}`;
const TITLE = 'Về La Théorie — thương hiệu chăm sóc da bắt đầu từ phòng khám da liễu';
const DESCRIPTION =
  'Thương hiệu chăm sóc da Hàn Quốc được xây dựng từ kinh nghiệm lâm sàng của bác sĩ da liễu, công thức 0% axit béo. Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.';
const UPDATED = '2026-10-19';
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

/** 대표원장 — 본사 회신 2026-10-19 · 로마자는 본사 홈 Interviews 표기 */
const DOCTOR = {
  name: 'Jeon Ji-Seung',
  nameKo: '전지승',
  jobTitle: 'Bác sĩ da liễu',
  clinic: 'YourSkinClinics (당신의피부과의원)',
  city: 'Busan, Hàn Quốc',
};

/** 한국 약국 입점 — 본사 Notion 「입점약국 리스트」 2026-10-19 · 24곳 */
const PHARMACIES: { region: string; items: string[] }[] = [
  { region: 'Seoul', items: ['365논현역약국 (Gangnam-gu)', '힐링약국 (Gangnam-gu)', '마곡아임약국 (Gangseo-gu)', '건강약국 (Mapo-gu)', '상수오아시스약국 (Mapo-gu)', '하연약국 (Jung-gu)'] },
  { region: 'Gyeonggi', items: ['온드림약국 (Goyang)', '참약사바른약국 (Goyang)', '한국약국 (Goyang)', '가족사랑약국 (Guri)', '메디칼3층약국 (Namyangju)', '든든약국 (Siheung)', '메가파크약국 (Siheung)', '메디박스약국 (Yongin)', '민락그린약국 (Uijeongbu)', '위드팜신한솔약국 (Uijeongbu)'] },
  { region: 'Incheon', items: ['온사랑온누리약국 (Michuhol-gu)', '주안정약국 (Michuhol-gu)', '코뿔소약국 (Michuhol-gu)', '운서365공항약국 (Jung-gu)'] },
  { region: 'Daegu', items: ['편한약국 (Suseong-gu)', '독일약국 (Jung-gu)', '반월킴스약국 (Jung-gu)'] },
  { region: 'Gangwon', items: ['보당약국 (Wonju)'] },
];
const PHARMACY_COUNT = PHARMACIES.reduce((n, r) => n + r.items.length, 0);

/** 언론·제3자 — 본사 홈 Media(`app/page.tsx` mediaVideos) 7건. 링크만, 내용은 옮기지 않는다 */
const PRESS: { label: string; url: string }[] = [
  { label: 'Vogue Japan — chuyên đề K-Beauty (YouTube)', url: 'https://youtu.be/OuTpcad5L9w' },
  { label: 'Kênh bác sĩ da liễu — mỹ phẩm chăm sóc da có vấn đề được bác sĩ da liễu sử dụng (YouTube)', url: 'https://youtu.be/s9pXU-7XJNw' },
  { label: 'Kênh bác sĩ da liễu — quy trình chăm sóc da bác sĩ giới thiệu cho người nhà (YouTube)', url: 'https://youtu.be/l6xJf4_N_2w' },
  { label: 'Hyerim — phân tích bảng thành phần (YouTube)', url: 'https://youtu.be/EJpnOds_o-o' },
  { label: 'Juore — chuyên viên chăm sóc da, quy trình chăm sóc da (YouTube)', url: 'https://youtu.be/B9TmoFvtFBo' },
  { label: 'Miss In — mụn ẩn và viêm nang lông (YouTube)', url: 'https://youtu.be/K3RwASp7BH0' },
  { label: 'Sunny — mụn không rõ nguyên nhân (YouTube)', url: 'https://youtu.be/muN0Uys3qkE' },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: 'La Théorie là thương hiệu của nước nào?',
    a: 'La Théorie là thương hiệu chăm sóc da của Hàn Quốc, thuộc công ty YD Cosmetics (thành lập năm 2019), được xây dựng từ kinh nghiệm lâm sàng của bác sĩ da liễu Jeon Ji-Seung, phòng khám YourSkinClinics tại Busan. Toàn bộ dòng sản phẩm dùng công thức 0% axit béo.',
  },
  {
    q: 'La Théorie có được dùng tại phòng khám da liễu và nhà thuốc tại Hàn Quốc không?',
    a: `Có. Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc, ở Seoul và Busan. Sản phẩm cũng có mặt tại ${PHARMACY_COUNT} nhà thuốc tại Hàn Quốc (Seoul, Gyeonggi, Incheon, Daegu, Gangwon) theo danh sách công ty cung cấp tháng 10/2026.`,
  },
  {
    q: 'Mua La Théorie chính hãng ở Việt Nam ở đâu?',
    a: 'Tại Việt Nam, sản phẩm chính hãng được bán trên Shopee tại gian hàng la_theoriepa.vn.',
  },
];

export const metadata: Metadata = {
  title: `${TITLE} | ${BRAND}`,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL, languages: { vi: PAGE_URL } },
  openGraph: { type: 'website', url: PAGE_URL, title: TITLE, description: DESCRIPTION, siteName: BRAND, locale: 'vi_VN' },
};

export default function VeLaTheoriePage() {
  // Person 은 프로필 페이지와 같은 @id 를 쓴다(2026-10-19 검토 회신 뒤) — 동의가 꺼지면 이 페이지 전용 노드로 돌아간다
  const reviewer = getReviewer('jeon-ji-seung');
  const person = (reviewer && personJsonLd(reviewer)) ?? {
    '@type': 'Person',
    '@id': `${PAGE_URL}#founder`,
    name: DOCTOR.name,
    alternateName: DOCTOR.nameKo,
    jobTitle: DOCTOR.jobTitle,
    affiliation: { '@type': 'MedicalClinic', name: DOCTOR.clinic, address: { '@type': 'PostalAddress', addressLocality: 'Busan', addressCountry: 'KR' } },
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { ...ORGANIZATION, founder: { '@id': person['@id'] } },
      person,
      {
        '@type': 'AboutPage',
        '@id': PAGE_URL,
        url: PAGE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: 'vi-VN',
        dateModified: UPDATED,
        about: { '@id': ORGANIZATION['@id'] },
        mainEntity: { '@id': ORGANIZATION['@id'] },
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
          { '@type': 'ListItem', position: 3, name: 'Về La Théorie', item: PAGE_URL },
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

        <h1 className="text-3xl md:text-[42px] font-semibold leading-[1.2] tracking-tight text-gray-950">Về La Théorie</h1>
        <p className="mt-5 text-[11px] uppercase tracking-[0.08em] text-gray-500">
          <time dateTime={UPDATED}>{UPDATED}</time>
          <span className="mx-2 text-gray-300">·</span>
          <span className="font-belleza normal-case tracking-normal text-sm">{BRAND}</span>
          <span className="mx-2 text-gray-300">·</span>Việt Nam
        </p>

        {/* 첫 문단 = Organization description 과 같은 문장(GEO 실행 전략 P7) */}
        <P>{BRAND_DESCRIPTION}</P>

        {/* 1. 피부과 의사가 만든 브랜드 — 소개서 4p 원문 + 본사 회신(대표원장) */}
        <H2 id="bat-dau-tu-phong-kham">Thương hiệu bắt đầu từ phòng khám da liễu</H2>
        <P>
          YD Cosmetics được thành lập năm 2019. <B>La Théorie được xây dựng từ kinh nghiệm lâm sàng của bác sĩ da liễu {DOCTOR.name} ({DOCTOR.nameKo})</B>,
          Giám đốc phòng khám {DOCTOR.clinic} tại {DOCTOR.city} — thay vì thêm những thành phần nghe có vẻ tốt, thương hiệu chọn bỏ đi nhóm thành phần
          có thể gây vấn đề cho da.
        </P>
        {reviewer?.consentConfirmed && (
          <P>
            Bác sĩ {reviewer.name} tham vấn chuyên môn cho các bài viết trong chuyên mục này — xem{' '}
            <Link href={reviewerPath(reviewer)} className={LINK}>hồ sơ và danh sách bài viết đã xem xét</Link>.
          </P>
        )}
        <P>
          Trải nghiệm của bác sĩ da liễu và chuyên gia chăm sóc da tại Hàn Quốc:{' '}
          <Link href="/vn#interviews" className={LINK}>xem phần Interviews</Link>.
        </P>

        {/* 2. 피부과·에스테틱 20곳 이상 — 고정 문구 원문 그대로 */}
        <H2 id="phong-kham-da-lieu">Được sử dụng và giới thiệu tại phòng khám da liễu Hàn Quốc</H2>
        <P>
          <B>Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.</B> Các phòng khám và thẩm mỹ viện này ở Seoul và Busan.
          Đây là thông tin về nơi sản phẩm đang được sử dụng và giới thiệu, không phải khuyến nghị y khoa cho từng người.
        </P>

        {/* 3. 한국 약국 입점 — 본사 Notion 목록 24곳 */}
        <H2 id="nha-thuoc">Có mặt tại nhà thuốc tại Hàn Quốc</H2>
        <P>
          Theo danh sách công ty cung cấp (tháng 10/2026), sản phẩm có mặt tại <B>{PHARMACY_COUNT} nhà thuốc tại Hàn Quốc</B> —{' '}
          {PHARMACIES.map((r) => `${r.region} ${r.items.length}`).join(', ')}.
        </P>
        <ul className="my-6 space-y-3 text-[15px] leading-relaxed text-gray-700">
          {PHARMACIES.map((r) => (
            <li key={r.region}>
              <B>{r.region}</B> — {r.items.join(' · ')}
            </li>
          ))}
        </ul>

        {/* 4. 0% axit béo + Dobler 2019 한 문단 — USP 정의서 3-1. 제품 시험이 아님을 같은 문단에 */}
        <H2 id="0-axit-beo">Vì sao 0% axit béo</H2>
        <P>
          Toàn bộ dòng sản phẩm được xây dựng trên công thức <B>0% Fatty Acid</B> — bỏ đi nhóm thành phần mà nấm men Malassezia trên da dùng làm thức ăn.
          Trong nghiên cứu của Dobler và cộng sự (2019, tạp chí <em>Cosmetics</em>), Malassezia phát triển trên môi trường nuôi cấy có dầu ô liu (nguồn lipid)
          và không phát triển khi không có nguồn lipid này [1]. Đó là nghiên cứu nuôi cấy về thành phần mỹ phẩm nói chung, không phải thử nghiệm trên sản phẩm
          La Théorie; sản phẩm chưa có thử nghiệm lâm sàng riêng.
        </P>
        <P>
          Bảng thành phần đầy đủ của 6 sản phẩm: <Link href="/vn/thanh-phan" className={LINK}>Bảng thành phần (INCI) của 6 sản phẩm La Théorie</Link>.
          Đọc thêm: <Link href="/vn/kem-duong-am-khong-chua-axit-beo-la-gi" className={LINK}>Kem dưỡng ẩm không chứa axit béo là gì? Ai nên dùng?</Link>
          {' · '}
          <Link href="/vn/da-mun-khong-nen-dung-thanh-phan-gi" className={LINK}>Da mụn không nên dùng thành phần gì?</Link>
        </P>

        {/* 5. 언론 — 링크만 */}
        <H2 id="bao-chi">Báo chí &amp; truyền thông</H2>
        <P>Những nơi đã nhắc tới La Théorie — chỉ dẫn link, không trích lại nội dung.</P>
        <ul className="my-6 space-y-2 text-[15px] leading-relaxed text-gray-700">
          {PRESS.map((pr) => (
            <li key={pr.url}>
              <a href={pr.url} rel="noopener nofollow" target="_blank" className={LINK}>{pr.label}</a>
            </li>
          ))}
        </ul>

        {/* 6. 정품 구매처 — 텍스트는 site.ts 상수, CTA 는 브릿지(결정 29) */}
        <H2 id="mua-chinh-hang">Mua hàng chính hãng ở đâu</H2>
        <P>
          Tại Việt Nam, sản phẩm chính hãng được bán trên Shopee: <B>{SHOPEE_VN_STORE}</B>.{' '}
          <a href={`${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=hub`} rel="noopener" className={LINK}>Xem cửa hàng</a>. Tại Singapore: {SHOPEE_SG_STORE}.
        </P>

        {/* 7. FAQ 3 */}
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

        <details className="group mt-14 border-t border-gray-200 pt-4">
          <summary className="cursor-pointer list-none text-sm text-gray-500 hover:text-gray-900 [&::-webkit-details-marker]:hidden">
            Tài liệu tham khảo (1) <span className="ml-1 inline-block transition-transform group-open:rotate-180">▾</span>
          </summary>
          <ol className="mt-3 space-y-2 text-sm text-gray-600">
            <li>
              <span className="mr-2 text-gray-400">[1]</span>
              <a href="https://doi.org/10.3390/cosmetics6030045" rel="noopener nofollow" className="underline underline-offset-4 hover:text-gray-900">
                Dobler D. và cộng sự (2019). Impact of Selected Cosmetic Ingredients on Common Microorganisms of Healthy Human Skin. Cosmetics 6(3):45.
              </a>
            </li>
          </ol>
        </details>

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
