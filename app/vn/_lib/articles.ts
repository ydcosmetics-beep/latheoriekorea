import type { Article } from './types';
import { article as thanhPhanCanTranh } from '../_articles/da-mun-khong-nen-dung-thanh-phan-gi';
import { article as coNenDuongAm } from '../_articles/da-dau-mun-co-nen-duong-am-khong';
import { article as viemNangLongChamSoc } from '../_articles/da-de-bi-viem-nang-long-thi-cham-soc-the-nao';
import { article as khongChuaAxitBeo } from '../_articles/kem-duong-am-khong-chua-axit-beo-la-gi';
import { article as hangRaoYeu } from '../_articles/da-mun-kho-cang-cham-chich-co-phai-hang-rao-bao-ve-da-yeu';
import { article as munNamMyPham } from '../_articles/da-bi-mun-nam-nen-dung-my-pham-gi';
import { article as kemChongNang } from '../_articles/da-viem-nang-long-mun-nam-nen-dung-kem-chong-nang-nao';

/**
 * 발행 대상 글 목록.
 *
 * 1차 범위 11편 = C3 5 · C6 3 · C2 2 · C4 1 (2026-09-03 총괄 승인). C1·C5 는 서포터즈가 영상으로 담당.
 * 순서가 곧 허브의 노출 순서다. 여정 단계(concept → recommend)로 세운다.
 * 2026-09-27 결정 36 개정으로 C6 2편째(V4 「kem dưỡng ẩm không chứa axit béo」)를 앞당겼다.
 * 2026-10-11 증상 질문 3편 추가 — C4 장벽(concept) · C3 mụn nấm 단계별(explore) · C6 선크림(compare).
 */
export const articles: Article[] = [
  thanhPhanCanTranh,
  hangRaoYeu,
  coNenDuongAm,
  viemNangLongChamSoc,
  munNamMyPham,
  khongChuaAxitBeo,
  kemChongNang,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const STAGE_LABEL: Record<Article['stage'], string> = {
  concept: 'Hiểu vấn đề',
  explore: 'Tìm hiểu',
  compare: 'So sánh',
  recommend: 'Chọn sản phẩm',
};
