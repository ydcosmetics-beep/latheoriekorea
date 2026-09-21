import type { ReactNode } from 'react';

/** AEO 클러스터. 신설하지 않는다 — 6개는 확정된 결정이다(2026-08-23). */
export type Cluster = 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6';

/** 고객 여정 단계. 허브에서 글을 이 순서로 세운다. */
export type Stage = 'concept' | 'explore' | 'compare' | 'recommend';

export interface Faq {
  /** 질문. JSON-LD FAQPage 에 그대로 들어가므로 사용자가 실제로 치는 말로 쓴다. */
  q: string;
  /** 답. 앞 1~2문장 안에 결론이 있어야 한다 — AI 가 인용하는 건 그 부분이다. */
  a: string;
}

export interface Article {
  slug: string;
  /** H1. PAA 질문 원문 그대로 쓴다. 쿼리와 문자열이 일치해야 한다. */
  title: string;
  /** meta description. 155자 안. */
  description: string;
  /** 본문 맨 위 TLDR 박스. 3줄. */
  tldr: string[];
  cluster: Cluster;
  stage: Stage;
  /** 이 글이 노리는 롱테일. head term 은 목표가 아니다. */
  targetQueries: string[];
  published: string;
  updated?: string;
  /** JSON-LD FAQPage 용. 본문 FAQ 절과 같은 내용이어야 한다. */
  faq: Faq[];
  /**
   * 참고 문헌. 🔴 YMYL(건강) 영역이라 비워 두고 발행하지 않는다.
   * 비어 있으면 발행 전 점검에서 걸린다.
   */
  references: { label: string; url: string }[];
  Body: () => ReactNode;
}
