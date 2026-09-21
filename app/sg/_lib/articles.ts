import type { Article } from '../../vn/_lib/types';
import { article as whatToAvoidFungalAcne } from '../_articles/what-to-avoid-if-i-have-fungal-acne';
import { article as shouldIMoisturize } from '../_articles/should-i-moisturize-acne-prone-skin';
import { article as safeForFungalAcne } from '../_articles/what-skincare-is-safe-for-fungal-acne';

/**
 * SG 발행 대상 글 목록. 타입은 VN 과 공유하고(클러스터 6개는 시장 공통), 어휘·글은 별개다.
 * 1차 범위(제안 · 2026-09-15): C6 3 · C3 3 · C2 3 · C4 1 · C5 1 = 11편. README 「사이트 구성」 표.
 */
export const articles: Article[] = [whatToAvoidFungalAcne, shouldIMoisturize, safeForFungalAcne];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const STAGE_LABEL: Record<Article['stage'], string> = {
  concept: 'Understand the problem',
  explore: 'Explore',
  compare: 'Compare',
  recommend: 'Choose a product',
};
