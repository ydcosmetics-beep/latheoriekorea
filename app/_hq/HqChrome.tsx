"use client";

// 본사 홈(app/page.tsx) · about 의 헤더·푸터를 /vn · /sg 에 그대로 씌운다.
// 본사 파일은 건드리지 않고 마크업을 옮겨 왔다 — 본사 헤더·푸터가 바뀌면 여기도 같이 고친다.
import { useEffect, useState } from "react";
import Link from "next/link";

const NAV = ["Philosophy", "Products", "Reviews", "Exhibition", "Contact"];

export default function HqChrome({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 본사 페이지가 자기 안에서 불러오는 글꼴을 여기서도 불러온다. Belleza 는 베트남어 글리프가 없어 VN 본문에는 쓰지 않는다 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Belleza&family=Noto+Sans:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Noto Sans', sans-serif; background-color: #ffffff; }
        .font-belleza { font-family: 'Belleza', sans-serif; }
        main[lang="vi"] .font-belleza, article[lang="vi"] .font-belleza { font-family: inherit; }
      `}} />

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 md:px-10 md:py-5 flex justify-between items-center h-[70px] md:h-[80px]">
          <button aria-label="Menu" className="md:hidden p-2 -ml-2 text-gray-900 bg-transparent border-none outline-none focus:outline-none" onClick={() => setIsMenuOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <Link href="/" className="md:hidden font-belleza text-2xl text-gray-950 tracking-wide absolute left-1/2 -translate-x-1/2">La Théorie</Link>
          <nav className="hidden md:flex gap-8 items-center flex-1">
            {NAV.map((item) => (
              <a key={item} href={`/#${item.toLowerCase()}`} className="text-[11px] text-gray-700 hover:text-black tracking-[0.08em] uppercase transition-colors font-medium">{item === "Philosophy" ? "About" : item}</a>
            ))}
          </nav>
          <Link href="/" className="hidden md:block font-belleza text-2xl text-gray-950 tracking-wide text-right">La Théorie</Link>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-8">
          <button aria-label="Close" className="absolute top-5 right-5 p-2 text-gray-900 bg-transparent border-none outline-none" onClick={() => setIsMenuOpen(false)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          {NAV.map((item) => (
            <a key={item} href={`/#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="font-belleza text-2xl text-gray-900 tracking-wide uppercase">{item === "Philosophy" ? "About" : item}</a>
          ))}
        </div>
      )}

      {children}

      <footer className="border-t border-gray-100 px-8 md:px-10 pt-16 pb-10 bg-white max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="text-center md:text-left">
            <div className="font-belleza text-[24px] tracking-normal text-gray-950 mb-3.5">La Théorie</div>
            <div className="text-[11px] text-gray-400 leading-relaxed">Copyright &copy; La Théorie.<br/>All rights reserved.</div>
          </div>
          <div className="flex flex-col text-[11px] text-gray-500 leading-[2.3] text-center md:text-right md:items-end">
            <span className="text-gray-900 font-medium mb-1.5">Company Info</span>
            <span>Company : YD Cosmetics Co., Ltd. | CEO : Kunwoo Paik</span>
            <span>Business Reg. No. : 822-88-01256 | Online Reg. : 2019-Seoul Gangnam-03124</span>
            <span>Address : SGI01, 6F, 602 Yeongdong-daero, Gangnam-gu, Seoul, South Korea</span>
            <span>CS : cs@latheorie.kr | Partnership : marketing@latheorie.kr</span>
          </div>
        </div>
        <div className="text-center text-[10px] text-gray-300 border-t border-gray-100 mt-14 pt-8">&copy; 2026 La Théorie. All rights reserved.</div>
      </footer>
    </>
  );
}
