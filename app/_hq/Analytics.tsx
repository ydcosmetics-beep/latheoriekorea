import Script from "next/script";

/**
 * /vn · /sg 에만 싣는 방문 분석 (2026-10-12). 본사 루트 레이아웃은 건드리지 않는다.
 * - Clarity: 세션 녹화 · 스크롤 · 데드클릭 — 어디서 나가는지 본다
 * - GA4: 페이지 이동 경로 · AI 엔진(chatgpt·perplexity 등) 리퍼러 · Shopee 이동 이벤트
 * ID 는 공개값이라 코드에 둔다. 비어 있으면 아무것도 싣지 않는다.
 */
const CLARITY_ID = "ywknhfzok7";
const GA4_ID = "G-E2QWM6TKXN";

export default function Analytics() {
  return (
    <>
      {CLARITY_ID && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      )}
      {GA4_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA4_ID}');`}
          </Script>
        </>
      )}
    </>
  );
}
