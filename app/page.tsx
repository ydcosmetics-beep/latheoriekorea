"use client";

import { useState, useEffect, FormEvent, TouchEvent, MouseEvent, useMemo } from "react";

const ACCESS_KEY = "ad515025-1b36-4a08-bc8f-6f22569d17cd"; 

const products = [
  { id: 1, name: "Sunscreen Set", desc: "Sunscreen set for hydrating improvement", price: "34,800", oldPrice: "39,600", pct: "12%", badge: "12% Off", isSoldOut: false },
  { id: 2, name: "Enhancer", desc: "Barrier Protection + Relief Essence", price: "21,900", oldPrice: null, pct: null, badge: null, isSoldOut: false },
  { id: 3, name: "Suncare Set", desc: "Suncare set for barrier protection", price: "38,900", oldPrice: "44,700", pct: "13%", badge: "13% Off", isSoldOut: false },
  { id: 4, name: "Cleanser", desc: "Cleaning gel for barrier and moisture", price: "16,900", oldPrice: null, pct: null, badge: "Sold Out", isSoldOut: true },
  { id: 5, name: "Barrier Serum", desc: "Intensive repair for troubled skin", price: "29,900", oldPrice: null, pct: null, badge: null, isSoldOut: false },
  { id: 6, name: "Mist Toner", desc: "Soothing hydration mist", price: "18,900", oldPrice: "20,900", pct: "10%", badge: "10% Off", isSoldOut: false },
  { id: 7, name: "Relief Ampoule", desc: "Targeted treatment for microbiome", price: "34,900", oldPrice: null, pct: null, badge: null, isSoldOut: false },
];

const shorts = [
  { id: 1, brand: "La Théorie", title: "지방산 0% 수분크림", bg: "linear-gradient(160deg,#c8c5be,#9a978f)" },
  { id: 2, brand: "La Théorie", title: "트러블 진정 루틴", bg: "linear-gradient(160deg,#bab6ae,#8e8b84)" },
  { id: 3, brand: "La Théorie", title: "신개념 클렌징 젤", bg: "linear-gradient(160deg,#d0cdc6,#a09890)" },
  { id: 4, brand: "La Théorie", title: "피부 상재균의 비밀", bg: "linear-gradient(160deg,#c4c0b8,#968f88)" },
  { id: 5, brand: "La Théorie", title: "선크림 발림성 테스트", bg: "linear-gradient(160deg,#ccc9c2,#9c9890)" },
  { id: 6, brand: "La Théorie", title: "리얼 고객 리뷰", bg: "linear-gradient(160deg,#b8b5ae,#888580)" },
];
const extendedShorts = [...shorts, ...shorts, ...shorts];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prodIdx, setProdIdx] = useState(0);
  const [shortIdx, setShortIdx] = useState(shorts.length + 2);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("idle"); 
  const [meetingStatus, setMeetingStatus] = useState("idle");

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const prodVisibleItems = 3.4; 
  const prodItemWidth = useMemo(() => 100 / prodVisibleItems, [prodVisibleItems]);

  useEffect(() => {
    if (isMenuOpen || isMeetingModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMenuOpen, isMeetingModalOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
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

  const submitForm = async (e: FormEvent<HTMLFormElement>, type: "contact" | "meeting") => {
    e.preventDefault();
    
    const formElement = e.currentTarget; 
    const setStatus = type === "contact" ? setContactStatus : setMeetingStatus;
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
        if (type === "meeting") {
            setTimeout(() => { setIsMeetingModalOpen(false); setMeetingStatus("idle"); }, 2000);
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
          <div className="bg-white w-full max-w-lg p-8 relative shadow-2xl">
            <button onClick={() => setIsMeetingModalOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-black transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="font-belleza text-2xl mb-2 text-center tracking-wide">Book a Meeting</h3>
            <p className="text-center text-xs text-gray-500 mb-8">26 Vietnam Exhibition 미팅 일정을 남겨주세요.</p>
            <form onSubmit={(e) => submitForm(e, "meeting")} className="flex flex-col gap-4 font-noto-sans">
              <input type="hidden" name="access_key" defaultValue={ACCESS_KEY} />
              <input type="hidden" name="subject" defaultValue="🤝 [La Théorie] 전시회 미팅 예약 접수" />
              <input type="hidden" name="from_name" defaultValue="La Théorie Web" />
              
              <input type="text" name="Company" required placeholder="Company Name *" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="Name" required placeholder="Contact Person *" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400" />
                <input type="email" name="Email" required placeholder="Email Address *" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400" />
              </div>
              <input type="text" name="Date_Preference" placeholder="Preferred Date & Time (e.g., Oct 26, 2PM)" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400" />
              <textarea name="Message" placeholder="Additional Notes" className="p-3 border border-gray-200 text-xs focus:outline-none focus:border-gray-400 h-24 resize-none"></textarea>
              <button type="submit" disabled={meetingStatus === "loading" || meetingStatus === "success"} className="w-full bg-[#0a1118] text-white p-4 mt-2 hover:bg-black transition shadow-sm disabled:bg-gray-400">
                <span className="font-belleza text-[13px] tracking-widest uppercase font-medium">{meetingStatus === "loading" ? "Sending..." : meetingStatus === "success" ? "Sent Successfully ✔" : "Confirm Booking"}</span>
              </button>
              {meetingStatus === "error" && <p className="text-red-500 text-xs text-center mt-2">일시적인 네트워크 오류가 발생했습니다. 잠시 후 시도해주세요.</p>}
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
      `}} />

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 md:px-10 md:py-5 flex justify-between items-center h-[70px] md:h-[80px]">
          <button className="md:hidden p-2 -ml-2 text-gray-900 bg-transparent border-none outline-none focus:outline-none" onClick={() => setIsMenuOpen(true)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button>
          {/* 💡 모바일 폰트 크기 확대: text-lg -> text-2xl */}
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

      <section id="hero" className="relative w-full min-h-[90vh] md:min-h-[800px] bg-white flex items-center md:items-end overflow-hidden pb-16 md:pb-20 pt-[80px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0efed] via-[#e4e2de] to-[#dcdbd7] opacity-70"></div>
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
          <circle cx="550" cy="300" r="250" fill="none" stroke="#000" strokeWidth="0.5"/><circle cx="550" cy="300" r="180" fill="none" stroke="#000" strokeWidth="0.3"/><circle cx="550" cy="300" r="100" fill="none" stroke="#000" strokeWidth="0.2"/><line x1="300" y1="300" x2="800" y2="300" stroke="#000" strokeWidth="0.3"/>
        </svg>
        <div className="relative z-10 px-8 md:px-10 w-full max-w-7xl mx-auto">
          <h2 className="font-belleza text-4xl md:text-[42px] leading-[1.15] text-gray-950 mb-3 md:mb-4 tracking-wide">Managing Skin<br/>Microbiome</h2>
          <p className="text-[11px] md:text-[12px] text-gray-600 mb-8 md:mb-10 tracking-[0.05em]">#FattyAcidsFree &nbsp; #Skinmicrobiome &nbsp; #TroubledSkin</p>
          <a href="#philosophy"><button className="border border-gray-900 bg-transparent text-gray-900 px-9 py-3.5 md:py-3 transition hover:bg-gray-50"><span className="font-belleza text-[13px] md:text-[12px] tracking-widest uppercase">About Us</span></button></a>
        </div>
      </section>

      <section id="philosophy" className="py-20 md:py-32 px-8 md:px-10 bg-white flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start text-center md:text-left justify-center max-w-7xl mx-auto">
        <div className="md:hidden w-[1px] h-16 bg-gray-200 mb-2"></div>
        <div className="flex-1 max-w-lg">
          <h3 className="font-belleza text-xs text-gray-400 mb-4 tracking-wider">Ingredients proven by Medical Theory</h3>
          <h1 className="font-belleza text-[24px] md:text-[28px] text-gray-900 leading-[1.4] tracking-wide">Solution begins with<br className="hidden md:block"/> understanding the cause</h1>
        </div>
        <div className="flex-1 max-w-xl md:pl-12 md:border-l border-gray-200">
          <p className="text-xs md:text-[13px] text-gray-600 leading-[2.2] md:leading-[2.4]">We analyze over 1,000 types of skin microbiome, mathematically defining the relationship between cosmetics, skin troubles, and microorganisms. By analyzing the cause, we can change the results.<br/><br/>We cannot promise miraculous skin changes, but we will strive to provide you with calmer skin than today, making small but non-stopping changes every day.</p>
        </div>
      </section>

      {/* 💡 모바일 양옆 여백 축소: 전체 Section의 패딩을 PC(md)에만 적용하고 모바일은 최소화 */}
      <section id="products" className="py-16 md:py-24 bg-white md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 px-6">
          <h2 className="font-belleza text-xl md:text-2xl tracking-[0.14em] uppercase text-gray-900">Best sellers</h2>
        </div>
        
        {/* 💡 모바일 전용 그리드 (여백 px-3으로 최소화, gap 조정) */}
        <div className="grid grid-cols-2 gap-3 px-4 md:hidden">
          {products.slice(0, 6).map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-1 mb-8">
              <div className="w-full aspect-[3/4] bg-[#f2f1ec] relative border border-gray-100 flex items-center justify-center shadow-sm">
                {item.badge && <span className={`absolute text-[9px] px-1.5 py-0.5 bg-white border ${item.isSoldOut ? 'border-red-600 text-red-600 bottom-2 left-2' : 'border-gray-300 text-gray-500 top-2 left-2'}`}>{item.badge}</span>}
                <div className="w-1/2 h-3/5 bg-[#d8d5ce] rounded-sm opacity-50"></div>
              </div>
              <div className="text-center px-1 mt-2">
                <h4 className="font-belleza text-[13px] text-gray-900 tracking-wide">{item.name}</h4>
                {/* 💡 모바일 설명 텍스트 부활 */}
                <p className="text-[10px] text-gray-400 mt-1 mb-1.5 leading-snug break-keep">{item.desc}</p>
                <div className="flex justify-center gap-1.5 text-[11px]">{item.pct && <span className="text-red-600 font-medium">{item.pct}</span>}<span className={`font-medium ${item.isSoldOut ? 'text-gray-400' : 'text-gray-900'}`}>{item.price}</span></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* PC 전용 슬라이더 (모바일 여백을 뺐으므로 PC에서는 다시 px-10 추가) */}
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
                  <div className="w-1/2 h-3/5 bg-[#d8d5ce] rounded-sm opacity-50"></div>
                </div>
                <div className="text-center px-2">
                  <h4 className="font-belleza text-[15px] text-gray-900 mb-1 tracking-wide">{item.name}</h4>
                  <p className="text-[11px] text-gray-400 mt-1 h-8 leading-relaxed">{item.desc}</p>
                  <div className="flex justify-center gap-2 text-[13px] mt-2">{item.pct && <span className="text-red-600 font-medium">{item.pct}</span>}<span className={`font-medium ${item.isSoldOut ? 'text-gray-400' : 'text-gray-900'}`}>{item.price}</span>{item.oldPrice && <span className="text-gray-300 line-through">{item.oldPrice}</span>}</div>
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
                    <div key={idx} className={`w-[220px] md:w-[320px] aspect-[9/16] mx-[10px] flex-shrink-0 rounded-[20px] overflow-hidden transition-all duration-500 relative ${isActive ? 'scale-110 z-10 opacity-100 shadow-2xl' : 'scale-90 opacity-60'}`} style={{ background: item.bg }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className={`absolute bottom-6 left-6 right-6 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-[11px] md:text-[12px] text-white/80 mb-2 tracking-wide">{item.brand}</p>
                        <p className="text-[14px] md:text-[16px] font-semibold text-white leading-snug break-keep">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button onClick={() => setShortIdx(shortIdx - 1)} className="absolute left-8 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 shadow-lg border border-gray-100 rounded-full flex items-center justify-center z-20 text-gray-600 hover:bg-gray-50 hover:text-black transition">←</button>
          <button onClick={() => setShortIdx(shortIdx + 1)} className="absolute right-8 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 shadow-lg border border-gray-100 rounded-full flex items-center justify-center z-20 text-gray-600 hover:bg-gray-50 hover:text-black transition">→</button>
        </div>
      </section>

      <section id="exhibition" className="py-16 md:py-28 px-8 md:px-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          <div className="w-full md:w-3/5 aspect-[4/3] bg-[#f5f4ef] border border-gray-100 flex items-center justify-center order-first md:order-last">
            <div className="flex gap-5 opacity-20 transform -rotate-3"><div className="w-14 h-28 bg-gray-400 rounded-sm"></div><div className="w-14 h-28 bg-gray-500 rounded-sm mt-5"></div><div className="w-14 h-28 bg-gray-400 rounded-sm"></div></div>
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
          
          <button type="submit" disabled={contactStatus === "loading" || contactStatus === "success"} className="w-full bg-[#0a1118] text-white p-5 mt-2 hover:bg-black transition shadow-sm disabled:bg-gray-400">
            <span className="font-belleza text-[13px] tracking-widest uppercase font-medium">{contactStatus === "loading" ? "Sending..." : contactStatus === "success" ? "Sent Successfully ✔" : "Send Message"}</span>
          </button>
          {contactStatus === "error" && <p className="text-red-500 text-xs text-center mt-2">일시적인 네트워크 오류가 발생했습니다. 잠시 후 시도해주세요.</p>}
        </form>
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
    </div>
  );
}