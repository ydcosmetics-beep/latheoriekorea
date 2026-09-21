/**
 * SG 섹션 공통 상수. 호스트는 VN 섹션과 같다 — 한 사이트 안의 두 시장 경로(/vn · /sg).
 * 어휘·쿼리·글 목록은 시장별로 별개다 (핸드오프 결정 28 · SG 키워드 클러스터.md).
 */
export { SITE_URL, BRAND } from '../../vn/_lib/site';
import { SITE_URL } from '../../vn/_lib/site';

export const SG_BASE = `${SITE_URL}/sg`;

/**
 * Shopee SG 매장 (la_theorie.sg · shop_id 1136015723 — 브랜드.md 2절, 2026-09-09 셀러센터 확인).
 * 🔴 SG 는 브릿지·바우처가 없다 (브랜드.md 4절 — 결정 29 의 랜딩 3종은 전부 VN).
 * 그래서 CTA 는 Shopee SG 상품 페이지로 직접 간다. SG 브릿지가 생기면 여기 한 줄만 바꾼다.
 */
export const SHOPEE_SG_SHOP_ID = '1136015723';
export const SG_PRODUCT_URL: Record<string, string> = {
  P002: `https://shopee.sg/product/${SHOPEE_SG_SHOP_ID}/18495751625`, // Hydrating Gel Cream 60ml (CREAM02)
};
