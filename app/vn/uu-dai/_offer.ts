import { products } from '../_lib/products';
import { SHOPEE_SHOP_ID } from '../_lib/site';

/**
 * 쇼피 랜딩 데이터 (2026-10-12 메타 광고 A 트랙 → 2026-10-22 결정 29 개정: 상시 브릿지 B 까지 이 페이지가 받는다).
 *
 * 받는 파라미터 — 옛 브릿지 latheorie-vn.pages.dev 와 같다:
 *   p=  제품ID(P001~P006 · 세트 P101~P104) → 그 제품 화면 · CTA 는 그 제품 PDP
 *   k=  바우처 코드. 아래 CODES 에 있는 코드만 보여 준다(모르는 코드는 기본 코드로 — 아무 문자열이나 코드처럼 보이지 않게)
 *   s=  출처(ig · seo · fb …) · cp=(또는 c=) 캠페인 · v= 영상ID · id= 서포터즈ID → 브릿지클릭 로그 열 그대로
 *
 * 🔴 코드·할인·기간의 정본은 셀러센터다. 값은 준상이 확인해 준다. headline 이 없으면 화면 큰 글씨에 코드만 보이고
 *    할인율은 쓰지 않는다(숫자를 지어내지 않는다). until 이 null 이면 만료 처리를 하지 않는다(기한 확인 전).
 *    until 이 지나면 페이지가 코드 블록을 숨기고 「매장 바로 가기」만 남긴다 — 만료된 코드를 광고하지 않는다.
 */
export interface OfferCode {
  code: string;
  /** 화면 큰 글씨. 셀러센터 할인 조건과 글자 그대로 같아야 한다 */
  headline?: string;
  until: string | null;
  untilLabel?: string;
}

export const CODES: Record<string, OfferCode> = {
  /** 메타 광고 (2026-10-12) */
  LATHMETA: { code: 'LATHMETA', headline: 'Giảm 5%', until: '2026-10-31T23:59:59+07:00', untilLabel: '31/10/2026' },
  /** 인스타 링크트리 상시 바우처 — 🔴 할인·기간은 셀러센터 확인 뒤 채운다 */
  LATHIG99: { code: 'LATHIG99', until: null },
  /** 본사 글 CTA 바우처 — 🔴 할인·기간은 셀러센터 확인 뒤 채운다 */
  LATHWEB: { code: 'LATHWEB', until: null },
};

/** k= 가 없거나 모르는 코드면 이 코드 — 옛 메타 광고 링크(?p= 만)가 그대로 살게 */
export const DEFAULT_CODE = 'LATHMETA';

export const pickCode = (k?: string): OfferCode => CODES[(k ?? '').trim().toUpperCase()] ?? CODES[DEFAULT_CODE];

export const codeActive = (c: OfferCode, now = new Date()) => c.until === null || now < new Date(c.until);

export const SHOP_URL = 'https://shopee.vn/la_theoriepa.vn?entryPoint=ShopBySearch&searchKeyword=la%20theorie';

/** VN 상품ID — 정본은 브랜드.md 1절 제품 마스터. 옛 랜딩(Vercel)·상시 브릿지와 같은 표다 */
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
