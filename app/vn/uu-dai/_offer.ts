import { products } from '../_lib/products';
import { SHOPEE_SHOP_ID } from '../_lib/site';

/**
 * 메타 광고 랜딩 (2026-10-12 · A 트랙을 latheorie-9-9-bridge.vercel.app 에서 옮김).
 * 멘토링 지적 두 가지 — ① vercel.app 주소는 소비자가 못 믿는다 ② 디자인을 본사 홈에 맞춰라.
 *
 * 🔴 바우처 값의 정본은 셀러센터다. 코드를 바꾸면 여기 한 곳만 고친다.
 *    `until` 이 지나면 페이지가 코드 블록을 숨기고 「매장 바로 가기」만 남긴다 — 만료된 코드를 광고하지 않는다.
 */
export const OFFER = {
  code: 'LATHMETA',
  /** 화면 큰 글씨. 셀러센터 할인 조건과 글자 그대로 같아야 한다 */
  headline: 'Giảm 5%',
  until: '2026-10-31T23:59:59+07:00',
  untilLabel: '31/10/2026',
};

export const offerActive = (now = new Date()) => now < new Date(OFFER.until);

export const SHOP_URL = 'https://shopee.vn/la_theoriepa.vn?entryPoint=ShopBySearch&searchKeyword=la%20theorie';

/** VN 상품ID — 정본은 브랜드.md 1절 제품 마스터. 옛 랜딩(Vercel)과 같은 표다 */
const PDP: Record<string, string> = {
  P001: '52010879986', P002: '50610884007', P003: '47560917707', P004: '45060917788',
  P005: '49610903921', P006: '42831059309',
  P101: '44563619364', P102: '51713601424', P103: '49063619004', P104: '46413618799',
};

/** 세트는 허브 제품표에 없다. 이름은 상시 브릿지(latheorie-vn.pages.dev)와 같은 표기 */
const SETS = [
  { id: 'P101', name: 'Bộ La Théorie Basic', tagline: 'Kem dưỡng ẩm + gel rửa mặt', image: '/vn-sg/p002-cream.webp' },
  { id: 'P102', name: 'Bộ Rào cản da chuyên sâu', tagline: 'Kem dưỡng ẩm + tinh chất', image: '/vn-sg/p002-cream.webp' },
  { id: 'P103', name: 'Kem dưỡng ẩm DUO SET', tagline: 'Kem dưỡng ẩm ×2', image: '/vn-sg/p002-cream.webp' },
  { id: 'P104', name: 'Sữa rửa mặt Clearing Gel DUO SET', tagline: 'Gel rửa mặt ×2', image: '/vn-sg/p001-cleanser.webp' },
];

export interface OfferProduct {
  id: string;
  name: string;
  tagline: string;
  image: string;
  href: string;
}

const pdp = (id: string) => `https://shopee.vn/product/${SHOPEE_SHOP_ID}/${PDP[id]}`;

export const gridProducts: OfferProduct[] = products.map((p) => ({
  id: p.id, name: p.name, tagline: p.tagline, image: p.image, href: pdp(p.id),
}));

const all: OfferProduct[] = [...gridProducts, ...SETS.map((s) => ({ ...s, href: pdp(s.id) }))];

/** `?p=` 가 아는 제품이면 그 제품, 아니면 null(전체 라인 화면) */
export const pickProduct = (p?: string | string[]) =>
  all.find((x) => x.id === String(p ?? '').trim().toUpperCase()) ?? null;
