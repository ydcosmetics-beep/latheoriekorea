import { BRIDGE_URL } from './site';

/**
 * 허브 「Best sellers」 에 쓰는 값. 정본은 브랜드.md 1절(제품 마스터 스냅샷 2026-09-09)과
 * USP 정의서 4장(소개서 16~17p). 한 줄 문구(tagline)는 본사 홈 Best sellers 의 영문 문구를 옮긴 것이다 (2026-09-16 실측).
 * 핵심 성분은 용기 라벨의 대표 성분 — 전성분(INCI)이 아니다. 라벨에 성분이 없는 제품(P001 · P005)은 비운다.
 * 이미지는 /public/vn-sg/ (누끼 원본은 「AI 인스타용 게시물/…/라띠어리_제품이미지」).
 */
export interface Product {
  id: string;
  /** 본사 라벨 표기 — 본사 홈과 같은 이름을 쓴다 */
  label: string;
  /** 시장 표기 제품명 (Shopee 리스팅) */
  name: string;
  /** 본사 홈 Best sellers 한 줄 문구 (시장 언어) */
  tagline: string;
  /** 본사 홈 배지 — 'Best Seller' · 'Steady Seller' · 없음 */
  badge?: string;
  /** 용기 라벨 대표 성분. 없으면 빈 배열 */
  ingredients: string[];
  image: string;
  url: string;
}

const img = (f: string) => `/vn-sg/${f}`;
/** 브릿지는 `p=` 로 제품 페이지에 착지한다 (2026-09-16 브릿지 개편). 코드는 LATHWEB, 출처 s=seo, cp=hub. */
const link = (p: string) => `${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=hub&p=${p}`;

export const products: Product[] = [
  { id: 'P002', label: 'Cream :: Hydrating Ingredients', name: 'Kem Dưỡng Ẩm Hydrating Gel Cream 60ml', tagline: 'Gel-cream 0% axit béo cho da viêm nang lông', badge: 'Best Seller', ingredients: ['Phytosqualane', 'Panthenol'], image: img('p002-cream.webp'), url: link('P002') },
  { id: 'P001', label: 'Cleanser :: Clearing Gel', name: 'Gel Rửa Mặt Clearing Gel 210ml', tagline: 'Sữa rửa mặt dịu nhẹ, bảo vệ hàng rào da', badge: 'Steady Seller', ingredients: [], image: img('p001-cleanser.webp'), url: link('P001') },
  { id: 'P006', label: 'Toner :: Soothing Treatment', name: 'Nước Cân Bằng Soothing Toner 210ml', tagline: 'Nước cân bằng hệ vi sinh cho da viêm nang lông', ingredients: ['Panthenol', 'Glycerin'], image: img('p006-toner.webp'), url: link('P006') },
  { id: 'P003', label: 'Enhancer :: Dual Effect Essence', name: 'Tinh Chất Dual Effect Essence 40ml', tagline: 'Kem đậm đặc hỗ trợ phục hồi hàng rào da, làm dịu vết thâm', ingredients: ['Madecassoside', 'Squalane'], image: img('p003-essence.webp'), url: link('P003') },
  { id: 'P004', label: 'Sunscreen :: Protection Factor', name: 'Kem Chống Nắng Sunscreen 50ml', tagline: 'Kem chống nắng không axit béo cho da có vấn đề', ingredients: ['Niacinamide', 'Adenosine'], image: img('p004-sunscreen.webp'), url: link('P004') },
  { id: 'P005', label: 'BB Cream :: Blemish Balm', name: 'Kem BB Blemish Balm SPF25 20ml ×2', tagline: 'Kem BB chuyên biệt cho da có vấn đề', ingredients: [], image: img('p005-bb.webp'), url: link('P005') },
];

/** 본사 홈 Interviews — 베트남어 번역 (2026-09-16 총괄 지시). 영문 원문은 sg/_lib/products.ts. 사진은 본사 사이트의 char_1 · char_2.
 *  번역 시 금지어(브랜드.md 7절)를 피했다: prescription → `đơn thuốc`, treatment → `liệu trình`. */
export const interviews = [
  {
    image: img('hq-interview-1.webp'),
    alt: 'YourSkinClinics',
    headline: 'Tôi bớt đơn thuốc, giới thiệu một sản phẩm chăm sóc da — và điều đó trở thành lời truyền miệng.',
    body: 'Phần lớn bệnh nhân mụn rời phòng khám với một đơn kháng sinh sau khi lấy nhân mụn. Nhưng nhiều người ngại dùng thuốc. Từ khi đưa La Théorie vào phòng khám, tôi có thể trao cho bệnh nhân một quy trình chăm sóc tại nhà thực sự để duy trì kết quả. Ít đợt bùng phát hơn nghĩa là ít phàn nàn hơn — và những bệnh nhân hài lòng bắt đầu dẫn bạn bè tới. Giới thiệu một sản phẩm chăm sóc da thay vì thêm một đơn thuốc, hoá ra lại xây được nhiều niềm tin hơn.',
    who: 'BS. Jeon Ji-Seung · Bác sĩ da liễu, YourSkinClinics',
  },
  {
    image: img('hq-interview-2.webp'),
    alt: 'La Beauté Esthetic',
    headline: 'Hoá ra chính sản phẩm chăm sóc da mới là thứ kéo khách quay lại nhiều hơn cả liệu trình.',
    body: 'Liệu trình ở spa dù tốt đến đâu, nếu khách về nhà dùng thứ gì đó gây kích ứng thì lại về vạch xuất phát. Tôi biết tới La Théorie qua YouTube — một dòng chăm sóc da làm riêng cho da có vấn đề — và quyết định thử. Khi khách có một quy trình tại nhà đúng cách, kết quả liệu trình của chúng tôi giữ được lâu hơn hẳn. Giờ đây đó là sản phẩm đầu tiên tôi giới thiệu cho mọi khách hàng mới.',
    who: 'Giám đốc ○○○ · La Beauté Esthetic, Jamsil',
  },
];
