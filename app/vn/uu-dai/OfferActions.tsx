'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

/* 메타 픽셀 — 옛 랜딩과 같은 ID. 이 페이지에만 싣는다 (상시 브릿지·글에는 픽셀을 붙이지 않는다, 결정 29) */
const PIXEL_ID = '1090074053582570';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function MetaPixel({ enabled = true }: { enabled?: boolean }) {
  if (!enabled) return null;
  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  );
}

/* 복사 — 인앱 브라우저는 clipboard API 가 막힐 때가 있어 execCommand 로 한 번 더 시도한다 */
async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

/**
 * 브릿지클릭 로그 — 옛 브릿지(latheorie-vn.pages.dev)와 같은 Apps Script · 같은 열(ev·s·c·v·p·id·k·t·ua).
 * text/plain + sendBeacon(Apps Script 는 CORS preflight 를 못 받는다). 라이브 도메인에서만 보낸다 — 미리보기·로컬 시험이 탭을 더럽히지 않게.
 * 🔴 로그가 실패해도 사람은 반드시 Shopee 로 간다 — 전부 try 안.
 */
export type Track = { s: string; c: string; v: string; id: string; k: string; p: string; t: string; pixel: boolean };
const LOG_URL = 'https://script.google.com/macros/s/AKfycbxWd8kX18l2A7dsBpSZZL46xM3-AmuFckxc4Opmj19CJWJzKwyuIJqDmP65Dv45zkI/exec';
const LOG_HOSTS = ['www.latheoriekorea.com', 'latheoriekorea.com'];
let ctx: Track | null = null;

export function logBridge(ev: '도착' | '이동', extra: { p?: string; t?: string } = {}) {
  try {
    if (!ctx || !LOG_HOSTS.includes(window.location.hostname)) return;
    const body = JSON.stringify({ ev, s: ctx.s, c: ctx.c, v: ctx.v, p: extra.p ?? ctx.p, id: ctx.id, k: ctx.k, t: extra.t ?? ctx.t, ua: navigator.userAgent });
    const blob = new Blob([body], { type: 'text/plain;charset=UTF-8' });
    if (!(navigator.sendBeacon && navigator.sendBeacon(LOG_URL, blob))) {
      void fetch(LOG_URL, { method: 'POST', mode: 'no-cors', keepalive: true, body: blob });
    }
  } catch { /* 로그는 보조다 */ }
}

/** 페이지가 열리면 「도착」 한 줄. 서버에서 만든 track 을 클라이언트에 들고 있는다 */
export function BridgeLog({ track }: { track: Track }) {
  useEffect(() => { ctx = track; logBridge('도착'); }, [track]);
  return null;
}

export function CopyCode({ code }: { code: string }) {
  const [state, setState] = useState<'idle' | 'done' | 'fail'>('idle');
  const onClick = async () => {
    const ok = await copy(code);
    setState(ok ? 'done' : 'fail');
    window.gtag?.('event', 'voucher_copy', { voucher: code });
    if (ok) setTimeout(() => setState('idle'), 1800);
  };
  return (
    <button type="button" onClick={onClick}
      className={`border border-gray-950 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors ${state === 'done' ? 'bg-gray-950 text-white' : 'bg-white text-gray-950 hover:bg-gray-950 hover:text-white'}`}>
      {state === 'done' ? 'Đã sao chép' : state === 'fail' ? 'Giữ mã ở trên' : 'Sao chép'}
    </button>
  );
}

/**
 * Shopee 로 가는 모든 링크 — 코드 복사 → 픽셀 Lead(제품ID) → 250ms 뒤 이동.
 * 옛 랜딩과 같은 순서다. Lead 는 「Shopee 이동」 계측이라 지우지 않는다.
 */
export function ShopeeLink({ href, productId, code, track, className, children }: {
  href: string; productId?: string; code?: string; track?: Track; className?: string; children: React.ReactNode;
}) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (code) void copy(code);
    if (!track || track.pixel) window.fbq?.('track', 'Lead', productId ? { content_ids: [productId], content_type: 'product' } : {});
    window.gtag?.('event', 'shopee_click', { product_id: productId ?? 'shop', source: track?.s || '(none)', campaign: track?.c || '(none)', voucher: code ?? '(none)' });
    logBridge('이동', { p: productId, t: href });
    let gone = false;
    const go = () => { if (!gone) { gone = true; window.location.href = href; } };
    setTimeout(go, 250);
  };
  return <a href={href} rel="noopener" onClick={onClick} className={className}>{children}</a>;
}
