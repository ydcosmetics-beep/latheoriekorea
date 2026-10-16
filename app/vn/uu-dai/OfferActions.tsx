'use client';

import Script from 'next/script';
import { useState } from 'react';

/* 메타 픽셀 — 옛 랜딩과 같은 ID. 이 페이지에만 싣는다 (상시 브릿지·글에는 픽셀을 붙이지 않는다, 결정 29) */
const PIXEL_ID = '1090074053582570';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function MetaPixel() {
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
export function ShopeeLink({ href, productId, code, className, children }: {
  href: string; productId?: string; code?: string; className?: string; children: React.ReactNode;
}) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (code) void copy(code);
    window.fbq?.('track', 'Lead', productId ? { content_ids: [productId], content_type: 'product' } : {});
    window.gtag?.('event', 'shopee_click', { product_id: productId ?? 'shop' });
    let gone = false;
    const go = () => { if (!gone) { gone = true; window.location.href = href; } };
    setTimeout(go, 250);
  };
  return <a href={href} rel="noopener" onClick={onClick} className={className}>{children}</a>;
}
