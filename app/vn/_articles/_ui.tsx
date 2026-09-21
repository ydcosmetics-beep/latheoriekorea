import Image from 'next/image';

/**
 * 글 본문 공통 요소. VN·SG 글이 같이 쓴다 (`_articles` 는 private folder 라 라우트가 아니다).
 * 스타일은 본사 사이트 톤(흰 배경 · 회색 계열)에 맞춘 Tailwind 클래스뿐이다.
 */
export function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mt-14 mb-4 scroll-mt-28 text-2xl md:text-[28px] font-semibold leading-snug text-gray-950">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-9 mb-3 text-lg md:text-xl font-semibold text-gray-900">{children}</h3>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="my-4 text-[15px] md:text-base leading-[1.85] text-gray-700">{children}</p>;
}

export function B({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-gray-900">{children}</strong>;
}

export function Table({ head, children }: { head: string[]; children: React.ReactNode }) {
  return (
    <div className="my-7 -mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b-2 border-gray-900">
            {head.map((h) => (
              <th key={h} className="py-3 pr-4 font-semibold text-gray-950">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

/** 글 하단 CTA — 제품 사진 + 한 문단 + 링크. 링크는 시장별 규칙(VN 브릿지 · SG Shopee 직접)을 호출부가 넘긴다. */
export function Cta({
  href,
  label,
  image = '/vn-sg/p002-cream.webp',
  alt = 'La Théorie Hydrating Gel Cream 60ml',
  children,
}: {
  href: string;
  label: string;
  image?: string;
  alt?: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="my-10 rounded-sm border border-gray-300 bg-gray-50 p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="relative mx-auto h-40 w-40 shrink-0 sm:mx-0">
          <Image src={image} alt={alt} fill sizes="160px" className="object-contain" />
        </div>
        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.08em] text-gray-500">{label}</p>
          <p className="text-[15px] leading-[1.85] text-gray-700">{children}</p>
          <a href={href} rel="noopener" className="mt-3 inline-block text-[12px] font-medium uppercase tracking-[0.06em] text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900">
            Shopee →
          </a>
        </div>
      </div>
    </aside>
  );
}
