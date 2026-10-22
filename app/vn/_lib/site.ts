/**
 * VN 섹션 공통 상수.
 *
 * SITE_URL 은 www 로 둔다 — 2026-09-15 실측: apex(`latheoriekorea.com`) → `www` 로 307.
 * (2026-09-03 에는 반대 방향으로 잰 기록이 있다. 지금 살아 있는 정규 호스트는 www 다.)
 * 배포 도메인이 다르면 이 한 줄만 바꾼다 — canonical · sitemap · JSON-LD 가 전부 여기서 나온다.
 */
export const SITE_URL = 'https://www.latheoriekorea.com';
export const VN_BASE = `${SITE_URL}/vn`;
export const BRAND = 'La Théorie';

/**
 * 글 → Shopee 는 전부 브릿지를 거친다 (2026-09-07 결정 · 핸드오프 결정 29).
 * 링크 형태: `${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=<클러스터>&p=<제품ID>`
 * 코드는 기존 LATHWEB 재사용 · 출처는 s=seo 로 s=web 과 가른다 · cp= 에 클러스터(C1~C6).
 */
/** 쇼피 랜딩 — 2026-10-22 결정 29 개정: 옛 상시 브릿지 latheorie-vn.pages.dev 대신 본사 /vn/uu-dai (같은 파라미터 s·k·cp·p · 같은 브릿지클릭 로그) */
export const BRIDGE_URL = 'https://www.latheoriekorea.com/vn/uu-dai';

/** Shopee 매장(정품). 직접 링크가 꼭 필요한 자리에만 쓴다 — 본문 CTA 는 BRIDGE_URL 이다. */
export const SHOPEE_SHOP_ID = '1136700919';

/**
 * 공식 매장·채널 — Organization `sameAs` 와 본문 「공식 매장」 텍스트가 여기서 나온다 (2026-09-28).
 * AI 답변이 SG 의 다른 매장(latheorie.sg · shopid 325139327)을 공식으로 안내한 일이 있어
 * 어느 쪽이 공식인지 기계가 읽게 적는다. 값은 브랜드.md 2·3절.
 * TikTok 은 `@la_theorie.vn` (2026-09-28 총괄 확인 — 옛 기록 `@latheorie.vn` 은 틀린 핸들).
 * 🔴 `la.theorie_sg` 인스타는 본사 운영(추론)이라 넣지 않는다.
 */
export const SHOPEE_VN_STORE = 'shopee.vn/la_theoriepa.vn';
export const SHOPEE_SG_STORE = 'shopee.sg/la_theorie.sg';
/** 브랜드 설명 한 문단 — 허브 소개 첫 문단과 Organization `description` 에 같은 문장으로 쓴다 (2026-10-15 GEO 실행 전략 P7). */
export const BRAND_DESCRIPTION =
  'La Théorie là thương hiệu dược mỹ phẩm Hàn Quốc dành cho da dầu mụn, da nhạy cảm và da dễ bị viêm nang lông, với công thức không chứa axit béo. Sản phẩm chính hãng tại Việt Nam được bán trên Shopee: la_theoriepa.vn.';
export const ORGANIZATION = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: BRAND,
  url: SITE_URL,
  description: BRAND_DESCRIPTION,
  sameAs: [
    `https://${SHOPEE_VN_STORE}`,
    `https://${SHOPEE_SG_STORE}`,
    'https://www.instagram.com/la.theorie_vn/',
    'https://www.tiktok.com/@la_theorie.vn',
    'https://www.facebook.com/profile.php?id=61593391030953',
  ],
};
