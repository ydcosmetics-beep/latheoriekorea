import Link from 'next/link';
import { SITE_URL, VN_BASE } from '../_lib/site';

/**
 * 「Tham vấn chuyên môn」 바이라인 + 검토자(Person) 데이터 — 2026-10-19.
 *
 * 부르는 곳: `[slug]/page.tsx`(글 머리 Byline · Article `reviewedBy`) · `bac-si/[slug]/page.tsx`(프로필) · `ve-la-theorie/page.tsx`(founder · 링크).
 * 글마다 `Article.reviewer`(slug) · `Article.reviewedOn` 을 둔다 — 검토한 글에만 바이라인 2행이 나온다.
 *
 * 왜 — 10-14 GEO 실행 전략 P4(저자·검토·갱신 정보). 10-18 요청서 ① → 10-19 본사 회신: 대표원장 전지승 · 부산 당신의피부과 ·
 *      글 13편 검토 완료(준상 경유). 로마자는 본사 홈 Interviews 표기 「Ji-Seung Jeon」을 따른다(소개서 11p 는 Jee-Seung).
 *
 * 🔴 `consentConfirmed` 가 false 면 이름·링크가 어디에도 렌더되지 않고 Person JSON-LD 도 나가지 않는다.
 * 🔴 사진은 회사 공식 자료에 이미 쓰인 것만(PDP 지침 3-1) — 받은 사진이 없어 비워 둔다. 인용문 칸은 두지 않는다.
 * 🔴 금지어(브랜드.md 7절) — 「처방」(kê đơn) · điều trị · trị 를 쓰지 않는다. 「Bác sĩ da liễu」 · 「phòng khám da liễu」 만.
 */
export interface Reviewer {
  slug: string;
  /** 표시 이름(로마자) — 본사 홈 Interviews 표기 */
  name: string;
  /** 한글 — JSON-LD alternateName */
  nameKo: string;
  jobTitle: string;
  affiliation: string;
  affiliationUrl?: string;
  /** `/public` 경로 — 회사 공식 사진만. 없으면 비운다 */
  image?: string;
  /** 짧은 소개 — 본사가 준 사실만 */
  bio: string;
  /** 관계 고지 한 문장 — 프로필 페이지에 그대로 나간다 */
  disclosure?: string;
  sameAs: string[];
  /** 🔴 이름 게시 동의 */
  consentConfirmed: boolean;
  /** 동의·검토 회신 메모 — 렌더하지 않는다 */
  consentNote?: string;
}

export const REVIEWERS: Reviewer[] = [
  {
    slug: 'jeon-ji-seung',
    name: 'Jeon Ji-Seung',
    nameKo: '전지승',
    jobTitle: 'Bác sĩ da liễu',
    affiliation: 'YourSkinClinics (당신의피부과의원), Busan, Hàn Quốc',
    bio: 'Bác sĩ da liễu, Giám đốc phòng khám YourSkinClinics tại Busan, Hàn Quốc. La Théorie được xây dựng từ kinh nghiệm lâm sàng của bác sĩ.',
    disclosure: 'Phòng khám của bác sĩ có sử dụng và giới thiệu sản phẩm La Théorie.',
    sameAs: [],
    consentConfirmed: true,
    consentNote: '2026-10-19 본사 회신(준상 경유): 성함·병원 확인 · 글 13편 검토 완료 — 고칠 문장 없음',
  },
];

export function getReviewer(slug?: string): Reviewer | undefined {
  return slug ? REVIEWERS.find((r) => r.slug === slug) : undefined;
}

/** 내부 링크용 경로 */
export function reviewerPath(r: Reviewer) {
  return `/vn/bac-si/${r.slug}`;
}

/** 절대 URL — canonical · JSON-LD 용 */
export function reviewerUrl(r: Reviewer) {
  return `${VN_BASE}/bac-si/${r.slug}`;
}

/** schema.org Person. 동의 전에는 null — 호출부는 null 이면 그래프에 넣지 않는다 */
export function personJsonLd(r: Reviewer) {
  if (!r.consentConfirmed) return null;
  const url = reviewerUrl(r);
  return {
    '@type': 'Person',
    '@id': `${url}#person`,
    name: r.name,
    alternateName: r.nameKo,
    jobTitle: r.jobTitle,
    url,
    ...(r.image ? { image: `${SITE_URL}${r.image}` } : {}),
    affiliation: {
      '@type': 'MedicalClinic',
      name: r.affiliation,
      address: { '@type': 'PostalAddress', addressLocality: 'Busan', addressCountry: 'KR' },
      ...(r.affiliationUrl ? { url: r.affiliationUrl } : {}),
    },
    ...(r.sameAs.length > 0 ? { sameAs: r.sameAs } : {}),
  };
}

/**
 * 글 머리 바이라인.
 *  1행 — 「Biên tập: La Théorie Việt Nam · Tài liệu tham khảo kiểm tra ngày YYYY-MM-DD」(P4)
 *  2행 — 검토한 글에만: 「Tham vấn chuyên môn: BS. 이름 · 직함, 소속 · xem xét ngày YYYY-MM-DD」
 */
export function Byline({ reviewer, reviewedOn, checkedOn }: { reviewer?: Reviewer; reviewedOn?: string; checkedOn: string }) {
  const show = reviewer?.consentConfirmed === true && !!reviewedOn;
  return (
    <div className="mt-4 text-[13px] leading-relaxed text-gray-500">
      <p>
        Biên tập: La Théorie Việt Nam
        <span className="mx-2 text-gray-300">·</span>
        Tài liệu tham khảo kiểm tra ngày <time dateTime={checkedOn}>{checkedOn}</time>
      </p>
      {show && reviewer && (
        <p className="mt-1">
          Tham vấn chuyên môn:{' '}
          <Link href={reviewerPath(reviewer)} className="font-medium text-gray-900 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900">
            BS. {reviewer.name}
          </Link>
          <span className="mx-2 text-gray-300">·</span>
          {reviewer.jobTitle}, {reviewer.affiliation}
          <span className="mx-2 text-gray-300">·</span>
          xem xét ngày <time dateTime={reviewedOn}>{reviewedOn}</time>
        </p>
      )}
    </div>
  );
}
