import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND, SHOPEE_VN_STORE } from '../_lib/site';
import { OFFER, offerActive, SHOP_URL, gridProducts, pickProduct } from './_offer';
import { MetaPixel, CopyCode, ShopeeLink } from './OfferActions';

/**
 * /vn/uu-dai — 메타 광고 랜딩. 허브(/vn)와 같은 본사 디자인을 쓰고, 첫 화면에 혜택(할인·기한·코드)을 숫자로 둔다.
 * `?p=<제품ID>` 면 그 제품 사진·이름으로 시작하고 CTA 가 그 제품 PDP 로 간다 (옛 랜딩과 같은 규칙).
 * 광고 전용 페이지라 검색 색인에서 뺀다 — 글(/vn/*)의 품질 신호에 섞이지 않게.
 *
 * 🔴 베트남어 문구 중 허브·상시 브릿지에서 가져오지 않은 줄(혜택 카드·3단계·만료 안내)은 원어민 검수 전이다.
 */
export const metadata: Metadata = {
  title: `Ưu đãi tại gian hàng chính hãng trên Shopee | ${BRAND}`,
  description: 'Mã giảm giá của La Théorie cho gian hàng chính hãng trên Shopee Việt Nam.',
  robots: { index: false, follow: true },
};

const Brand = () => <span translate="no">{BRAND}</span>;

export default async function OfferPage({ searchParams }: { searchParams: Promise<{ p?: string | string[] }> }) {
  const product = pickProduct((await searchParams).p);
  const active = offerActive();
  const code = active ? OFFER.code : undefined;
  const others = gridProducts.filter((p) => p.id !== product?.id);

  return (
    <main lang="vi" className="bg-white pt-[70px] md:pt-[80px]">
      <MetaPixel />

      {/* 1. 첫 화면 — 제품 · 혜택 · CTA */}
      <section className="mx-auto max-w-xl px-6 pt-8 pb-14 md:pt-14 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
          <span translate="no" className="font-belleza normal-case tracking-normal text-sm text-gray-950">{BRAND}</span>
          <span className="mx-2 text-gray-300">·</span>Shopee Việt Nam
        </p>

        {product && (
          <div className="relative mx-auto mt-4 aspect-square w-full max-w-[170px] md:max-w-[260px]">
            <Image src={product.image} alt={`${BRAND} ${product.name}`} fill priority sizes="280px" className="object-contain" />
          </div>
        )}

        <h1 className="mt-4 text-[24px] md:text-[34px] font-semibold leading-snug text-gray-950">
          {product ? product.name : 'Trọn bộ chăm sóc da'}
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
          {product ? product.tagline : 'Dưỡng ẩm cho da mụn, viêm nang lông'}
        </p>

        {active ? (
          <div className="mt-8 flex items-center justify-between gap-4 border border-gray-950 px-5 py-5 text-left">
            <div>
              <p className="text-[34px] md:text-[40px] font-semibold leading-none text-gray-950">{OFFER.headline}</p>
              <p className="mt-2 text-[12px] text-gray-500">Áp dụng đến hết {OFFER.untilLabel}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-[10px] uppercase tracking-[0.16em] text-gray-500">Mã giảm giá</span>
              <span className="font-mono text-lg font-semibold tracking-[0.12em] text-gray-950">{OFFER.code}</span>
              <CopyCode code={OFFER.code} />
            </div>
          </div>
        ) : (
          <p className="mt-8 border border-gray-200 px-5 py-4 text-[13px] text-gray-600">Chương trình ưu đãi đã kết thúc. Bạn vẫn có thể mua tại gian hàng chính hãng.</p>
        )}

        <ShopeeLink href={product?.href ?? SHOP_URL} productId={product?.id} code={code}
          className="mt-4 block w-full bg-gray-950 px-7 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-white hover:bg-gray-800">
          {active ? 'Sao chép mã & mua trên Shopee' : 'Mua ngay trên Shopee'}
        </ShopeeLink>

        <p className="mt-4 text-[12px] leading-relaxed text-gray-500">
          <b className="font-medium text-gray-700">Hàng chính hãng</b> — chỉ tại gian hàng <Brand /> trên <span translate="no">Shopee</span> ({SHOPEE_VN_STORE}).
        </p>
      </section>

      {/* 2. 코드 쓰는 법 — 「저장했다 쓰기 번거롭다」 대응 */}
      {active && (
        <section className="border-t border-gray-100 bg-[#fafafa]">
          <div className="mx-auto max-w-xl px-6 py-14">
            <h2 className="text-center text-[13px] font-medium uppercase tracking-[0.22em] text-gray-950">Dùng mã trong 3 bước</h2>
            <ol className="mt-8 space-y-5">
              {[
                ['Sao chép mã', <>Bấm nút phía trên — mã <b className="font-mono font-semibold text-gray-950">{OFFER.code}</b> được lưu vào bộ nhớ tạm.</>],
                ['Chọn sản phẩm trên Shopee', 'Thêm sản phẩm vào giỏ hàng tại gian hàng chính hãng.'],
                ['Nhập mã khi thanh toán', 'Ở mục “Voucher của Shop”, dán mã và bấm Áp dụng.'],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-7 w-7 flex-none items-center justify-center border border-gray-950 text-[12px] font-medium text-gray-950">{i + 1}</span>
                  <div>
                    <p className="text-[15px] font-semibold text-gray-950">{t}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-gray-600">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* 3. 왜 이 브랜드인가 — 허브 소개 문단의 문장을 그대로 쓴다 */}
      <section className="mx-auto max-w-xl px-6 py-14">
        <p className="text-center text-[11px] uppercase tracking-[0.2em] text-gray-500">Ingredients proven by Medical Theory</p>
        <ul className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
          <li className="py-4 text-[14px] leading-relaxed text-gray-700"><strong className="font-semibold text-gray-950" translate="no">0% Fatty Acid</strong> — bỏ đi nhóm thành phần mà nấm men Malassezia trên da dùng làm thức ăn.</li>
          <li className="py-4 text-[14px] leading-relaxed text-gray-700">Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.</li>
        </ul>
      </section>

      {/* 4. 다른 제품 — 누르면 코드 복사 후 그 제품 PDP 로 */}
      <section className="border-t border-gray-100 bg-[#fafafa]">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-10">
          <h2 className="text-center text-[13px] font-medium uppercase tracking-[0.22em] text-gray-950">Best sellers</h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-8">
            {others.map((p) => (
              <li key={p.id}>
                <ShopeeLink href={p.href} productId={p.id} code={code} className="group block">
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <Image src={p.image} alt={`${BRAND} ${p.name}`} fill sizes="(min-width: 768px) 300px, 50vw" className="object-contain p-5 transition-transform duration-300 group-hover:scale-[1.03]" />
                  </div>
                  <p className="mt-3 text-[13px] font-medium leading-snug text-gray-950">{p.name}</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-gray-500">{p.tagline}</p>
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-gray-950 underline underline-offset-4 decoration-gray-300 group-hover:decoration-gray-950">Xem trên Shopee →</p>
                </ShopeeLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-xl px-6 py-12 text-center">
        <Link href="/vn" className="inline-block border border-gray-950 px-7 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-gray-950 hover:bg-gray-950 hover:text-white">
          Tìm hiểu thêm về <Brand />
        </Link>
      </section>
    </main>
  );
}
