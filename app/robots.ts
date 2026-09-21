import type { MetadataRoute } from 'next';
import { SITE_URL } from './vn/_lib/site';

/**
 * robots.txt — 현재 사이트에는 이 파일이 아예 없다(404, 2026-09-03 실측).
 *
 * 🔴 AI 크롤러를 명시적으로 허용한다.
 * robots.txt 가 없는 지금은 기본값이 「전부 허용」이라 AI 크롤러도 들어온다.
 * 여기서 파일을 새로 만들면서 이들을 빠뜨리면, 없던 때보다 오히려 나빠진다.
 * AI 답변에 인용되려면 인용할 쪽이 먼저 읽을 수 있어야 한다.
 */
const AI_CRAWLERS = [
  'GPTBot',            // OpenAI 학습·인용
  'OAI-SearchBot',     // ChatGPT 검색
  'ChatGPT-User',      // ChatGPT 사용자 요청 fetch
  'ClaudeBot',         // Anthropic
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',   // Gemini · Vertex grounding
  'Applebot-Extended',
  'meta-externalagent',
  'cohere-ai',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
