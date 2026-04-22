"use client";

import { useState, useEffect, FormEvent, TouchEvent, MouseEvent, useMemo } from "react";
import Link from "next/link";

const ACCESS_KEY = "ad515025-1b36-4a08-bc8f-6f22569d17cd"; 

const products = [
  { id: 1, name: "Cream :: Hydrating Ingredients", desc: "0% Fatty Acid Gel Cream for Folliculitis Care", price: "24,900", oldPrice: null, pct: null, badge: "Best Seller", isSoldOut: false, img: "/prod1.jpg" },
  { id: 2, name: "Cleanser :: Clearing Gel", desc: "Barrier-Protecting Cleanser with Gentle Surfactants", price: "16,900", oldPrice: null, pct: null, badge: "Steady Seller", isSoldOut: false, img: "/prod2.jpg"  },
  { id: 3, name: "Toner :: Soothing Treatment", desc: "Microbiome-Balancing Toner for Folliculitis", price: "16,900", oldPrice: "44,700", pct: null, badge: null, isSoldOut: false, img: "/prod3.jpg"  },
  { id: 4, name: "Enhancer :: Moisturizing Essence", desc: "Lightweight Oil Essence for Oil-Water Balance", price: "19,500", oldPrice: null, pct: null, badge: "Sold Out", isSoldOut: true, img: "/prod4.jpg"  },
  { id: 5, name: "Enhancer :: Dual Effect Essence", desc: "Intensive Cream for Barrier Repair & Blemish Relief", price: "21,900", oldPrice: null, pct: null, badge: null, isSoldOut: false, img: "/prod5.jpg"  },
  { id: 6, name: "Sunscreen :: Protection Factor", desc: "Fatty-Acid-Free Sunscreen for Troubled Skin", price: "19,800", oldPrice: null, pct: null, badge: null, isSoldOut: false, img: "/prod6.jpg"  },
  { id: 7, name: "BB Cream :: Blemish Balm", desc: "Specialized BB Cream for Problematic Skin", price: "18,900", oldPrice: "21,900", pct: null, badge: null, isSoldOut: false, img: "/prod7.jpg"  },
  { id: 8, name: "Shampoo :: Scalp Balance", desc: "Soothing Shampoo for Seborrheic Dermatitis & Forehead Breakouts", price: "unfixed", oldPrice: null, pct: null, badge: "Planned", isSoldOut: false, img: "/prod8.jpg"  },
];

const shorts = [
  { id: 1, youtubeId: "_ZrZYQvScIo", title: "주오르" },
  { id: 2, youtubeId: "vVji-k1Vdf4", title: "전지적 피부시점" },
  { id: 3, youtubeId: "4Jltq1IfNvM", title: "킴유 뷰티" },
];
const extendedShorts = [...shorts, ...shorts, ...shorts];

const exhImages = ["/exh1.jpg", "/exh2.jpg"];
const extendedExh = [...exhImages, ...exhImages, ...exhImages];

const distLogos = ["/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png", "/logo5.png", "/logo6.png"];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prodIdx, setProdIdx] = useState(0);
  const [shortIdx, setShortIdx] = useState(shorts.length + 2);
  const [exhIdx, setExhIdx] = useState(exhImages.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isExhTransitioning, setIsExhTransitioning] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);

  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [pricingStatus, setPricingStatus] = useState("idle");
  const [contactStatus, setContactStatus] = useState("idle");
  const [partnerStatus, setPartnerStatus] = useState("idle");

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const [exhTouchStart, setExhTouchStart] = useState(0);
  const [exhTouchEnd, setExhTouchEnd] = useState(0);
  const [isExhDragging, setIsExhDragging] = useState(false);

  const prodVisibleItems = 3.4;
  const prodItemWidth = useMemo(() => 100 / prodVisibleItems, [prodVisibleItems]);

  useEffect(() => {
    if (isMenuOpen || isMeetingModalOpen || isPartnerModalOpen || isBrochureModalOpen || isPricingModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMenuOpen, isMeetingModalOpen, isPartnerModalOpen, isBrochureModalOpen, isPricingModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const productsEl = document.getElementById("products");
      if (productsEl) {
        setShowFloatingButtons(productsEl.getBoundingClientRect().bottom < window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (shortIdx >= shorts.length * 2 + 1 || shortIdx <= shorts.length - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (shortIdx >= shorts.length * 2 + 1) setShortIdx(shorts.length + 1);
        else if (shortIdx <= shorts.length - 1) setShortIdx(shorts.length * 2 - 1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [shortIdx]);

  useEffect(() => {
    if (exhIdx >= exhImages.length * 2 || exhIdx < exhImages.length) {
      const timer = setTimeout(() => {
        setIsExhTransitioning(false);
        if (exhIdx >= exhImages.length * 2) setExhIdx(exhIdx - exhImages.length);
        else if (exhIdx < exhImages.length) setExhIdx(exhIdx + exhImages.length);
        setTimeout(() => setIsExhTransitioning(true), 50);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [exhIdx]);

  const onDragStart = (e: TouchEvent | MouseEvent) => {
    setIsDragging(true);
    setTouchEnd(0);
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    setTouchStart(clientX);
  };

  const onDragMove = (e: TouchEvent | MouseEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    setTouchEnd(clientX);
  };

  const onShortsDragEnd = () => {
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) setShortIdx(prev => prev + 1); 
    if (distance < -50) setShortIdx(prev => prev - 1); 
  };

  const onProdDragEnd = () => {
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) setProdIdx(prev => Math.min(products.length - 3, prev + 1));
    if (distance < -50) setProdIdx(prev => Math.max(0, prev - 1));
  };

  const onExhDragStart = (e: TouchEvent | MouseEvent) => {
    setIsExhDragging(true);
    setExhTouchEnd(0);
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    setExhTouchStart(clientX);
  };

  const onExhDragMove = (e: TouchEvent | MouseEvent) => {
    if (!isExhDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    setExhTouchEnd(clientX);
  };

  const onExhDragEnd = () => {
    setIsExhDragging(false);
    if (!exhTouchStart || !exhTouchEnd) return;
    const distance = exhTouchStart - exhTouchEnd;
    if (distance > 50) setExhIdx(prev => prev + 1);
    if (distance < -50) setExhIdx(prev => prev - 1);
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>, type: "contact" | "partner" | "pricing") => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const setStatus = type === "contact" ? setContactStatus : type === "partner" ? setPartnerStatus : setPricingStatus;
    setStatus("loading");

    const formData = new FormData(formElement);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        formElement.reset();
        if (type === "partner") {
            setTimeout(() => { setIsPartnerModalOpen(false); setPartnerStatus("idle"); }, 2000);
        } else if (type === "pricing") {
            setTimeout(() => { setIsPricingModalOpen(false); setPricingStatus("idle"); }, 2000);
        }
      } else {
        console.error("Web3Forms Response Error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* 미팅 예약 팝업 */}
      {isMeetingModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl relative shadow-2xl" style={{ height: '680px' }}>
            <button onClick={() => setIsMeetingModalOpen(false)} className="absolute top-4 right-4 z-10 text-gray-400 hover:text-black transition bg-white rounded-full p-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {/* ↓ Cal.com 계정 생성 후 아래 URL을 본인 링크로 교체하세요 */}
            {/* 예: https://cal.com/YOUR_USERNAME/exhibition-meeting */}
            <iframe
              src="https://cal.com/latheorie/exhibition-meeting-30min?embed=true&embedType=inline&theme=light&hideEventTypeDetails=false"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Book a Meeting"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      )}

      {/* 파트너 문의 팝업 */}
      {isPartnerModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg p-8 relative shadow-2xl">
            <button onClick={() => setIsPartnerModalOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-black transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="font-belleza text-2xl mb-2 text-center tracking-wide">Become a Partner</h3>
            <p className="text-center text-xs text-gray-500 mb-8">파트너십 문의 내용을 남겨주시면 담당자가 회신드리겠습니다.</p>
            <form onSubmit={(e) => submitForm(e, "partner")} className="flex flex-col gap-4 font-noto-sans">
              <input type="hidden" name="access_key" defaultValue={ACCESS_KEY} />
              <input type="hidden" name="subject" defaultValue="🌐 [La Théorie] 파트너십 문의 접수" />
              <input type="hidden" name="from_name" defaultValue="La Théorie Web" />

              <input type="text" name="Company" required placeholder="Company Name *" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="Name" required placeholder="Contact Person *" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400" />
                <input type="email" name="Email" required placeholder="Email Address *" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400" />
              </div>
              <input type="text" name="Country" placeholder="Country / Region" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400" />
              <textarea name="Message" required placeholder="Tell us about your partnership interest" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400 h-24 resize-none"></textarea>
              <button type="submit" disabled={partnerStatus === "loading" || partnerStatus === "success"} className="w-full bg-[#0a1118] text-white p-4 mt-2 hover:bg-black transition shadow-sm disabled:bg-gray-400">
                <span className="font-belleza text-[13px] tracking-widest uppercase font-medium">{partnerStatus === "loading" ? "Sending..." : partnerStatus === "success" ? "Sent Successfully ✔" : "Send Inquiry"}</span>
              </button>
              {partnerStatus === "error" && <p className="text-red-500 text-xs text-center mt-2">일시적인 네트워크 오류가 발생했습니다. 잠시 후 시도해주세요.</p>}
            </form>
          </div>
        </div>
      )}

      {/* 브로셔 다운로드 팝업 */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-sm p-8 relative shadow-2xl">
            <button onClick={() => setIsBrochureModalOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-black transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="font-belleza text-2xl mb-2 text-center tracking-wide">Brochure Download</h3>
            <p className="text-center text-xs text-gray-500 mb-8">원하시는 언어의 브로셔를 다운로드하세요.</p>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/LaTheorie_EN.pdf", label: "La Théorie — English" },
                { href: "/LaTheorie_VN.pdf", label: "La Théorie — Vietnamese" },
                { href: "/LaTheorie_KO.pdf", label: "La Théorie — Korean" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    download
                    className="group flex items-center justify-between px-5 py-4 border border-black bg-transparent text-black transition hover:bg-black hover:text-white font-belleza text-[12px] tracking-widest uppercase"
                  >
                    <span>{item.label}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 가격문의 팝업 */}
      {isPricingModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg p-8 relative shadow-2xl">
            <button onClick={() => setIsPricingModalOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-black transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="font-belleza text-2xl mb-2 text-center tracking-wide">Request a Quote</h3>
            <p className="text-center text-xs text-gray-500 mb-8">담당자 정보를 남겨주시면 가격표를 보내드리겠습니다.</p>
            <form onSubmit={(e) => submitForm(e, "pricing")} className="flex flex-col gap-4 font-noto-sans">
              <input type="hidden" name="access_key" defaultValue={ACCESS_KEY} />
              <input type="hidden" name="subject" defaultValue="🌐 [La Théorie] 가격문의 접수" />
              <input type="hidden" name="from_name" defaultValue="La Théorie Web" />

              <input type="text" name="Company" required placeholder="Company Name *" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="Name" required placeholder="Contact Person *" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400" />
                <input type="email" name="Email" required placeholder="Email Address *" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400" />
              </div>
              <input type="text" name="Country" placeholder="Country / Region" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400" />
              <button type="submit" disabled={pricingStatus === "loading" || pricingStatus === "success"} className="w-full bg-[#0a1118] text-white p-4 mt-2 hover:bg-black transition shadow-sm disabled:bg-gray-400">
                <span className="font-belleza text-[13px] tracking-widest uppercase font-medium">{pricingStatus === "loading" ? "Sending..." : pricingStatus === "success" ? "Sent Successfully ✔" : "Send Inquiry"}</span>
              </button>
              {pricingStatus === "error" && <p className="text-red-500 text-xs text-center mt-2">일시적인 네트워크 오류가 발생했습니다. 잠시 후 시도해주세요.</p>}
            </form>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Belleza&family=Noto+Sans:wght@300;400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Noto Sans', sans-serif; background-color: #ffffff; }
        h1, h2, h3, .font-belleza { font-family: 'Belleza', sans-serif; }
        :root { --item-w: 240px; --item-half: 120px; }
        @media (min-width: 768px) { :root { --item-w: 340px; --item-half: 170px; } }

        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left { animation: marquee-left 30s linear infinite; }
        .marquee-track-right { animation: marquee-right 35s linear infinite; }
      `}} />

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 md:px-10 md:py-5 flex justify-between items-center h-[70px] md:h-[80px]">
          <button className="md:hidden p-2 -ml-2 text-gray-900 bg-transparent border-none outline-none focus:outline-none" onClick={() => setIsMenuOpen(true)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button>
          <div className="md:hidden font-belleza text-2xl text-gray-950 tracking-wide absolute left-1/2 -translate-x-1/2">La Théorie</div>
          <nav className="hidden md:flex gap-8 items-center flex-1">
            {["Philosophy", "Products", "Reviews", "Exhibition", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] text-gray-700 hover:text-black tracking-[0.08em] uppercase transition-colors font-medium">{item === "Philosophy" ? "About" : item}</a>
            ))}
          </nav>
          <div className="hidden md:block font-belleza text-2xl text-gray-950 tracking-wide text-right">La Théorie</div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-8">
          <button className="absolute top-5 right-5 p-2 text-gray-900 bg-transparent border-none outline-none" onClick={() => setIsMenuOpen(false)}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>
          {["Philosophy", "Products", "Reviews", "Exhibition", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="font-belleza text-2xl text-gray-900 tracking-wide uppercase">{item === "Philosophy" ? "About" : item}</a>
          ))}
        </div>
      )}

      <section id="hero" className="relative w-full min-h-[90vh] md:min-h-[800px] bg-white flex items-end md:items-end overflow-hidden pb-16 md:pb-20 pt-[70px] md:pt-[80px]">
        <img
          src="/hero-bg.jpg"
          alt="La Théorie Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 px-8 md:px-10 w-full max-w-7xl mx-auto">
          <h2 className="font-belleza text-2xl md:text-[42px] leading-[1.15] text-black mb-3 md:mb-4 tracking-wide drop-shadow-md">Managing Skin<br/>Microbiome</h2>
          <p className="text-[11px] md:text-[12px] text-black/90 mb-8 md:mb-10 tracking-[0.05em] drop-shadow-md">#FattyAcidsFree &nbsp; #Skinmicrobiome &nbsp; #TroubledSkin</p>
          <a href="#philosophy"><button className="border border-black bg-transparent text-black px-9 py-3.5 md:py-3 transition hover:bg-black hover:text-white shadow-sm"><span className="font-belleza text-[13px] md:text-[12px] tracking-widest uppercase">About Us</span></button></a>
        </div>
      </section>

      <section id="philosophy" className="py-20 md:py-32 px-8 md:px-10 bg-white flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start text-center md:text-left justify-center max-w-7xl mx-auto">
        <div className="md:hidden w-[1px] h-16 bg-gray-200 mb-2"></div>
        <div className="flex-1 max-w-lg">
          <h3 className="font-belleza text-s text-gray-400 mb-4 tracking-wider">Ingredients proven by Medical Theory</h3>
          <h1 className="font-belleza text-[24px] md:text-[28px] text-gray-900 leading-[1.4] tracking-wide">Solution begins with<br className="hidden md:block"/> understanding the cause</h1>
        </div>
        <div className="flex-1 max-w-xl md:pl-12 md:border-l border-gray-200">
          <p className="text-xs md:text-[13px] text-gray-600 leading-[2.2] md:leading-[2.4]">We analyze over 1,000 types of skin microbiome, mathematically defining the relationship between cosmetics, skin troubles, and microorganisms. By analyzing the cause, we can change the results.<br/><br/>We cannot promise miraculous skin changes, but we will strive to provide you with calmer skin than today, making small but non-stopping changes every day.</p>
          <div className="mt-10 flex justify-center md:justify-start">
            <Link href="/about" className="border border-black bg-transparent text-black px-9 py-3.5 transition hover:bg-black hover:text-white uppercase tracking-widest font-belleza text-[12px]">About Us</Link>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 md:py-24 bg-white md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 px-6">
          <h2 className="font-belleza text-xl md:text-2xl tracking-[0.14em] uppercase text-gray-900">Best sellers</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3 px-4 md:hidden">
          {products.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-1 mb-8">
              <div className="w-full aspect-[3/4] bg-[#f2f1ec] relative border border-gray-100 flex items-center justify-center shadow-sm overflow-hidden">
                {item.badge && <span className={`absolute z-10 text-[9px] px-1.5 py-0.5 bg-white border ${item.isSoldOut ? 'border-red-600 text-red-600 bottom-2 left-2' : 'border-gray-300 text-gray-500 top-2 left-2'}`}>{item.badge}</span>}
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center px-1 mt-2">
                <h4 className="font-belleza text-[13px] text-gray-900 tracking-wide">{item.name}</h4>
                <p className="text-[10px] text-gray-400 mt-1 mb-1.5 leading-snug break-keep">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div
          className={`hidden md:block w-full px-10 overflow-hidden relative cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
          onTouchStart={onDragStart} onTouchMove={onDragMove} onTouchEnd={onProdDragEnd}
          onMouseDown={onDragStart} onMouseMove={onDragMove} onMouseUp={onProdDragEnd} onMouseLeave={() => setIsDragging(false)}
        >
          <div className="flex gap-6 transition-transform duration-500 ease-out pointer-events-none" style={{ transform: `translateX(calc(-${prodIdx * prodItemWidth}% - ${prodIdx * 24}px))` }}>
            {products.map((item) => (
              <div key={item.id} style={{ width: `${prodItemWidth}%` }} className="flex-shrink-0 flex flex-col items-center gap-4">
                <div className="w-full aspect-[3/4] bg-[#f2f1ec] relative border border-gray-100 flex items-center justify-center transition-colors hover:border-gray-200">
                  {item.badge && <span className={`absolute text-[9px] px-2 py-1 bg-white border ${item.isSoldOut ? 'border-red-600 text-red-600 bottom-3 left-3' : 'border-gray-300 text-gray-500 top-3 left-3'}`}>{item.badge}</span>}
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center px-2">
                  <h4 className="font-belleza text-[15px] text-gray-900 mb-1 tracking-wide">{item.name}</h4>
                  <p className="text-[11px] text-gray-400 mt-1 h-8 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-14 relative z-10">
            <button onClick={(e) => { e.stopPropagation(); setProdIdx(Math.max(0, prodIdx - 1)); }} className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition text-gray-500 rounded-full">←</button>
            <button onClick={(e) => { e.stopPropagation(); setProdIdx(Math.min(products.length - 3, prodIdx + 1)); }} className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition text-gray-500 rounded-full">→</button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative px-8 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-belleza text-xl md:text-2xl tracking-[0.14em] uppercase text-gray-900">Reviews</h2>
          </div>
          
          <div 
            className={`relative w-full overflow-hidden cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
            onTouchStart={onDragStart} onTouchMove={onDragMove} onTouchEnd={onShortsDragEnd}
            onMouseDown={onDragStart} onMouseMove={onDragMove} onMouseUp={onShortsDragEnd} onMouseLeave={() => setIsDragging(false)}
          >
            <div className="relative w-full h-[500px] md:h-[680px] pointer-events-none">
              <div className={`absolute top-0 left-1/2 h-full flex items-center ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`} style={{ transform: `translateX(calc(-1 * var(--item-half) - ${shortIdx} * var(--item-w)))` }}>
                {extendedShorts.map((item, idx) => {
                  const isActive = idx === shortIdx;
                  return (
                    <div key={idx} className={`w-[220px] md:w-[320px] aspect-[9/16] mx-[10px] flex-shrink-0 rounded-[20px] overflow-hidden transition-all duration-500 relative bg-gray-900 ${isActive ? 'scale-110 z-10 opacity-100 pointer-events-auto' : 'scale-90 opacity-60'}`}>
                      {isActive ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                          title={item.title}
                        />
                      ) : (
                        <img
                          src={`https://img.youtube.com/vi/${item.youtubeId}/0.jpg`}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button onClick={() => setShortIdx(shortIdx - 1)} className="absolute left-8 md:left-10 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center z-20 text-gray-600 hover:bg-gray-50 hover:text-black transition">←</button>
          <button onClick={() => setShortIdx(shortIdx + 1)} className="absolute right-8 md:right-10 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center z-20 text-gray-600 hover:bg-gray-50 hover:text-black transition">→</button>

          <div className="flex justify-center mt-12 md:mt-16">
            <Link href="/reviews" className="border border-black bg-transparent text-black px-9 py-3.5 transition hover:bg-black hover:text-white uppercase tracking-widest font-belleza text-[12px]">View More</Link>
          </div>
        </div>
      </section>

      <section id="distribution" className="py-16 md:py-28 px-8 md:px-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          <div className="w-full md:w-3/5 aspect-[4/3] bg-[#f5f4ef] border border-gray-100 overflow-hidden flex flex-col gap-3 p-3 order-first md:order-last">
            <div className="flex-1 overflow-hidden relative">
              <div className="marquee-track-left flex gap-3 h-full" style={{ width: "max-content" }}>
                {[...Array(2)].map((_, dup) => (
                  <div key={dup} className="flex gap-3 h-full">
                    {distLogos.map((src, i) => (
                      <img key={`${dup}-${i}`} src={src} alt={`Partner ${i + 1}`} className="h-full aspect-square rounded-sm flex-shrink-0 object-contain bg-white" onError={(e) => { (e.target as HTMLImageElement).style.visibility = 'hidden'; }} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-hidden relative">
              <div className="marquee-track-right flex gap-3 h-full" style={{ width: "max-content" }}>
                {[...Array(2)].map((_, dup) => (
                  <div key={dup} className="flex gap-3 h-full">
                    {distLogos.map((src, i) => (
                      <img key={`${dup}-${i}`} src={src} alt={`Partner ${i + 1}`} className="h-full aspect-square rounded-sm flex-shrink-0 object-contain bg-white" onError={(e) => { (e.target as HTMLImageElement).style.visibility = 'hidden'; }} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex flex-col text-center md:text-left items-center md:items-start max-w-lg">
            <h2 className="font-belleza text-xl md:text-2xl tracking-[0.1em] uppercase text-gray-900 mb-3">Global Distribution</h2>
            <h3 className="text-xs md:text-[13px] text-gray-500 mb-5 leading-relaxed">Sales Channels Worldwide</h3>
            <p className="text-xs md:text-[13px] text-gray-600 leading-[2.2] mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button onClick={() => setIsPartnerModalOpen(true)} className="border border-gray-900 text-gray-900 px-10 py-3.5 hover:bg-black/5 transition"><span className="font-belleza text-[12px] tracking-widest uppercase">Become a Partner</span></button>
          </div>
        </div>
      </section>

      <section id="exhibition" className="py-16 md:py-28 px-8 md:px-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          <div className="w-full md:w-3/5 flex flex-col">
            <div
              className={`relative w-full aspect-[4/3] bg-[#f5f4ef] border border-gray-100 overflow-hidden cursor-grab ${isExhDragging ? 'cursor-grabbing' : ''}`}
              onTouchStart={onExhDragStart} onTouchMove={onExhDragMove} onTouchEnd={onExhDragEnd}
              onMouseDown={onExhDragStart} onMouseMove={onExhDragMove} onMouseUp={onExhDragEnd} onMouseLeave={() => setIsExhDragging(false)}
            >
              <div className={`flex w-full h-full ${isExhTransitioning ? 'transition-transform duration-500 ease-out' : ''}`} style={{ transform: `translateX(-${exhIdx * 100}%)` }}>
                {extendedExh.map((src, i) => (
                  <div key={i} className="min-w-full h-full flex-shrink-0">
                    <img src={src} alt={`Exhibition ${(i % exhImages.length) + 1}`} className="pointer-events-none object-cover w-full h-full" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button onClick={() => setExhIdx(prev => prev - 1)} className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-black transition">←</button>
              <button onClick={() => setExhIdx(prev => prev + 1)} className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-black transition">→</button>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex flex-col text-center md:text-left items-center md:items-start max-w-lg">
            <h2 className="font-belleza text-xl md:text-2xl tracking-[0.1em] uppercase text-gray-900 mb-3">Exhibition</h2>
            <h3 className="text-xs md:text-[13px] text-gray-500 mb-5 leading-relaxed">26 Vietnam Exhibition</h3>
            <p className="text-xs md:text-[13px] text-gray-600 leading-[2.2] mb-10">Our booth information and details about the exhibition. Our booth number is 1004. You can check the details on the exhibition website.</p>
            <button onClick={() => setIsMeetingModalOpen(true)} className="border border-gray-900 text-gray-900 px-10 py-3.5 hover:bg-black/5 transition"><span className="font-belleza text-[12px] tracking-widest uppercase">Book a Meeting</span></button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-32 px-8 bg-white flex flex-col items-center border-t border-gray-100">
        <h2 className="font-belleza text-[18px] md:text-2xl tracking-[0.14em] uppercase text-gray-900 mb-10 md:mb-14">Contact Us</h2>
        <form onSubmit={(e) => submitForm(e, "contact")} className="w-full max-w-xl flex flex-col gap-4 md:gap-5 font-noto-sans">
          <input type="hidden" name="access_key" defaultValue={ACCESS_KEY} />
          <input type="hidden" name="subject" defaultValue="🌐 [La Théorie] 홈페이지 새로운 문의 접수" />
          <input type="hidden" name="from_name" defaultValue="La Théorie Web" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <input type="text" name="Name" required placeholder="Your Name" className="p-4 border border-gray-200 text-xs focus:outline-none focus:border-gray-400 bg-white transition-colors"/>
            <input type="email" name="Email" required placeholder="Your Email" className="p-4 border border-gray-200 text-xs focus:outline-none focus:border-gray-400 bg-white transition-colors"/>
          </div>
          <input type="tel" name="Mobile" placeholder="Mobile Number (Optional)" className="p-4 border border-gray-200 text-xs focus:outline-none focus:border-gray-400 bg-white transition-colors"/>
          <textarea name="Message" required placeholder="How can we help you?" className="p-4 border border-gray-200 text-xs focus:outline-none focus:border-gray-400 bg-white h-32 md:h-36 resize-none transition-colors"></textarea>
          
          <button type="submit" disabled={contactStatus === "loading" || contactStatus === "success"} className="w-full bg-black text-white border border-black p-5 mt-2 transition shadow-sm hover:bg-white hover:text-black disabled:opacity-50">
            <span className="font-belleza text-[13px] tracking-widest uppercase font-medium">{contactStatus === "loading" ? "Sending..." : contactStatus === "success" ? "Sent Successfully ✔" : "Send Message"}</span>
          </button>
          {contactStatus === "error" && <p className="text-red-500 text-xs text-center mt-2">일시적인 네트워크 오류가 발생했습니다. 잠시 후 시도해주세요.</p>}
        </form>

        <div className="hidden md:flex w-full max-w-xl gap-5 mt-4">
          <button onClick={() => setIsBrochureModalOpen(true)} className="flex-1 py-4 border border-black bg-transparent text-black transition hover:bg-black hover:text-white font-belleza text-[12px] tracking-widest uppercase">Brochure Download</button>
          <button onClick={() => setIsPricingModalOpen(true)} className="flex-1 py-4 border border-black bg-transparent text-black transition hover:bg-black hover:text-white font-belleza text-[12px] tracking-widest uppercase">Get a Quote</button>
        </div>
      </section>

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

      <div className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end gap-3 transition-all duration-[600ms] ease-out ${showFloatingButtons ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'} md:opacity-100 md:translate-y-0 md:pointer-events-none`}>
        <button onClick={() => setIsBrochureModalOpen(true)} className="pointer-events-auto bg-white/90 text-black border border-black px-6 md:px-7 py-3 md:py-3.5 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-105 font-belleza uppercase text-[11px] md:text-[12px] tracking-widest">Brochure download</button>
        <button onClick={() => setIsPricingModalOpen(true)} className="pointer-events-auto bg-black text-white border border-black px-6 md:px-7 py-3 md:py-3.5 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-105 font-belleza uppercase text-[11px] md:text-[12px] tracking-widest">Get a Quote</button>
      </div>
    </div>
  );
}