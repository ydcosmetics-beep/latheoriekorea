import type { Product } from '../../vn/_lib/products';
import { SHOPEE_SG_SHOP_ID } from './site';

/**
 * SG 허브 「Best sellers」. 값의 정본은 브랜드.md 1절(SG 상품ID · 셀러센터 확인 2026-09-09).
 * 한 줄 문구는 본사 홈 Best sellers 영문 그대로 (2026-09-16 실측). 링크는 Shopee SG 상품 페이지 직접 — SG 는 브릿지가 없다.
 */
const img = (f: string) => `/vn-sg/${f}`;
const link = (itemId: string) => `https://shopee.sg/product/${SHOPEE_SG_SHOP_ID}/${itemId}`;

export const products: Product[] = [
  { id: 'P002', label: 'Cream :: Hydrating Ingredients', name: 'Hydrating Gel Cream 60ml', tagline: '0% Fatty Acid Gel Cream for Folliculitis Care', badge: 'Best Seller', ingredients: ['Phytosqualane', 'Panthenol'], image: img('p002-cream.webp'), url: link('18495751625') },
  { id: 'P001', label: 'Cleanser :: Clearing Gel', name: 'Clearing Gel Cleanser 210ml', tagline: 'Barrier-Protecting Cleanser with Gentle Surfactants', badge: 'Steady Seller', ingredients: [], image: img('p001-cleanser.webp'), url: link('24552851751') },
  { id: 'P006', label: 'Toner :: Soothing Treatment', name: 'Soothing Toner 210ml', tagline: 'Microbiome-Balancing Toner for Folliculitis', ingredients: ['Panthenol', 'Glycerin'], image: img('p006-toner.webp'), url: link('22587830380') },
  { id: 'P003', label: 'Enhancer :: Dual Effect Essence', name: 'Dual Effect Essence 40ml', tagline: 'Intensive Cream for Barrier Support & Blemish Care', ingredients: ['Madecassoside', 'Squalane'], image: img('p003-essence.webp'), url: link('20886739247') },
  { id: 'P004', label: 'Sunscreen :: Protection Factor', name: 'Sunscreen 50ml', tagline: 'Fatty-Acid-Free Sunscreen for Troubled Skin', ingredients: ['Niacinamide', 'Adenosine'], image: img('p004-sunscreen.webp'), url: link('41802263097') },
  { id: 'P005', label: 'BB Cream :: Blemish Balm', name: 'BB Cream SPF25 20ml ×2', tagline: 'Specialized BB Cream for Problematic Skin', ingredients: [], image: img('p005-bb.webp'), url: link('56811210833') },
];

/** 본사 홈 Interviews — 영문 원문 그대로 (2026-09-16 실측). */
export const interviews = [
  {
    image: img('hq-interview-1.webp'),
    alt: 'YourSkinClinics',
    headline: 'I cut the prescriptions, recommended a skincare product — and that became word of mouth.',
    body: "Most acne patients leave with an antibiotic prescription after extraction. But many of them resist medication. Since placing La Théorie in our clinic, I've been able to give patients a real at-home routine to maintain their results. Fewer flare-ups meant fewer complaints — and satisfied patients started bringing in friends. Recommending a skincare product instead of another prescription actually built more trust.",
    who: 'Dr. Ji-Seung Jeon · Dermatologist, YourSkinClinics',
  },
  {
    image: img('hq-interview-2.webp'),
    alt: 'La Beauté Esthetic',
    headline: 'It turned out the skincare product was driving more return visits than the treatments.',
    body: "No matter how well a treatment goes in the salon, if a client goes home and uses something irritating, they're back to square one. I came across La Théorie on YouTube — a skincare line built specifically for troubled skin — and decided to try it. Once clients had a proper home routine, the results from our treatments lasted much longer. Now it's the first product I explain to every new client.",
    who: 'Director ○○○ · La Beauté Esthetic, Jamsil',
  },
];
