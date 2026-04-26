"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";

const ACCESS_KEY = "ad515025-1b36-4a08-bc8f-6f22569d17cd";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToHome, setShowBackToHome] = useState(false);

  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [partnerStatus, setPartnerStatus] = useState("idle");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowBackToHome(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen || isPartnerModalOpen || isBrochureModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMenuOpen, isPartnerModalOpen, isBrochureModalOpen]);

  const submitPartner = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    setPartnerStatus("loading");
    const formData = new FormData(formElement);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData,
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setPartnerStatus("success");
        formElement.reset();
        setTimeout(() => { setIsPartnerModalOpen(false); setPartnerStatus("idle"); }, 2000);
      } else {
        console.error("Web3Forms Response Error:", data);
        setPartnerStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setPartnerStatus("error");
    }
  };

  const salesData = [
    { year: "2021", units: "30,000 units", width: 30 },
    { year: "2022", units: "40,000 units", width: 40 },
    { year: "2023", units: "60,000 units", width: 60 },
    { year: "2024", units: "100,000 units", width: 100 },
  ];

  const distRows = [
    { region: "Seoul", desc: "Dermatology clinics · Aesthetic salons" },
    { region: "Busan", desc: "Dermatology clinics · Aesthetic salons" },
    { region: "Chicor", desc: "Premium beauty retail · Korea" },
    { region: "Overseas", desc: "First partner opportunity — your market" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Belleza&family=Noto+Sans:wght@300;400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Noto Sans', sans-serif; background-color: #ffffff; }
        h1, h2, h3, .font-belleza { font-family: 'Belleza', sans-serif; }
      `}} />

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 md:px-10 md:py-5 flex justify-between items-center h-[70px] md:h-[80px]">
          <button className="md:hidden p-2 -ml-2 text-gray-900 bg-transparent border-none outline-none focus:outline-none" onClick={() => setIsMenuOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <Link href="/" className="md:hidden font-belleza text-2xl text-gray-950 tracking-wide absolute left-1/2 -translate-x-1/2">La Théorie</Link>
          <nav className="hidden md:flex gap-8 items-center flex-1">
            {["Philosophy", "Products", "Reviews", "Exhibition", "Contact"].map((item) => (
              <a key={item} href={`/#${item.toLowerCase()}`} className="text-[11px] text-gray-700 hover:text-black tracking-[0.08em] uppercase transition-colors font-medium">{item === "Philosophy" ? "About" : item}</a>
            ))}
          </nav>
          <Link href="/" className="hidden md:block font-belleza text-2xl text-gray-950 tracking-wide text-right">La Théorie</Link>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-8">
          <button className="absolute top-5 right-5 p-2 text-gray-900 bg-transparent border-none outline-none" onClick={() => setIsMenuOpen(false)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          {["Philosophy", "Products", "Reviews", "Exhibition", "Contact"].map((item) => (
            <a key={item} href={`/#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="font-belleza text-2xl text-gray-900 tracking-wide uppercase">{item === "Philosophy" ? "About" : item}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="bg-[#f9f8f5] pt-[80px]">
        <div className="max-w-7xl mx-auto px-8 md:px-10 py-20 md:py-28">
          <p className="font-belleza text-[11px] tracking-[0.2em] uppercase text-gray-400">About La Théorie</p>
          <h1 className="font-belleza text-[32px] md:text-[44px] leading-[1.2] tracking-wide text-gray-900 mt-4 max-w-3xl">A Dermatologist&rsquo;s Prescription for Problematic Skin</h1>
          <p className="text-[13px] text-gray-600 leading-[2.2] max-w-xl mt-6">
            A skincare brand first chosen by patients and adopted by dermatologists. Founded in 2019, La Théorie was born from clinical experience — not a marketing brief.
          </p>
          <span className="inline-block border border-gray-300 font-belleza text-[10px] tracking-[0.16em] uppercase px-4 py-2 mt-8 text-gray-500">
            0&permil; Fatty Acid Solution for Troubled Skin
          </span>
        </div>
      </section>

      {/* OUR ORIGIN */}
      <section className="border-t border-gray-100 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-10">
          <p className="font-belleza text-[11px] tracking-[0.2em] uppercase text-gray-400">Our Origin</p>
          <h2 className="font-belleza text-[24px] md:text-[32px] leading-[1.3] tracking-wide text-gray-900 mt-4 max-w-2xl">A skincare brand born in a dermatologist&rsquo;s office</h2>
          <p className="text-[13px] text-gray-600 leading-[2.2] max-w-2xl mt-6">
            Dermatologists saw what cosmetic brands couldn&rsquo;t — that most skincare products were quietly worsening their patients&rsquo; skin. La Théorie was built to fix that.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="border border-gray-100 p-6">
              <p className="font-belleza text-[40px] text-gray-200 leading-none">2019</p>
              <p className="font-belleza text-[11px] tracking-[0.16em] uppercase text-gray-900 mt-4">Founded</p>
              <p className="text-[12px] text-gray-600 leading-[1.9] mt-3">YD Cosmetics established with a single mission: remove what harms, keep what heals.</p>
            </div>
            <div className="border border-gray-100 p-6">
              <p className="font-belleza text-[40px] text-gray-200 leading-none">25K</p>
              <p className="font-belleza text-[11px] tracking-[0.16em] uppercase text-gray-900 mt-4">Substances Reviewed</p>
              <p className="text-[12px] text-gray-600 leading-[1.9] mt-3">Every ingredient screened against a database of 25,000 substances for safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-gray-100 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-10">
          <p className="font-belleza text-[11px] tracking-[0.2em] uppercase text-gray-400">Philosophy</p>
          <h2 className="font-belleza text-[24px] md:text-[32px] leading-[1.3] tracking-wide text-gray-900 mt-4 max-w-2xl">We focused on &ldquo;taking out.&rdquo;</h2>

          <div className="border-l-2 border-gray-200 pl-6 mt-8 max-w-2xl">
            <p className="font-belleza text-[16px] md:text-[18px] text-gray-900 leading-[1.6] tracking-wide">
              &ldquo;Anyone can add ingredients that seem good. But La Théorie is a brand that knows what shouldn&rsquo;t be included.&rdquo;
            </p>
            <p className="text-[13px] text-gray-600 leading-[2.2] mt-4">
              For persistent skin issues — adult acne, folliculitis, dermatitis — what matters most is reducing adverse reactions caused by excessive formulation. We eliminated fatty acids, the hidden trigger behind most chronic skin conditions.
            </p>
          </div>

          <div className="bg-[#f9f8f5] border border-gray-100 p-6 mt-8 max-w-2xl">
            <p className="font-belleza text-[9px] uppercase tracking-widest text-gray-400">MDPI · August 2019 · Peer-Reviewed Research</p>
            <p className="font-belleza text-[15px] text-gray-900 mt-2">&ldquo;Skin fungi feed on cosmetic ingredients.&rdquo;</p>
            <p className="text-[12px] text-gray-600 leading-[2] mt-3">
              Malassezia, the fungus responsible for folliculitis and fungal acne, proliferates when fed fatty acids commonly found in skincare. La Théorie is the only brand that systematically removes these triggers from its entire product line.
            </p>
          </div>
        </div>
      </section>

      {/* SALES ACHIEVEMENT */}
      <section className="border-t border-gray-100 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-10">
          <p className="font-belleza text-[11px] tracking-[0.2em] uppercase text-gray-400">Sales Achievement</p>
          <h2 className="font-belleza text-[24px] md:text-[32px] leading-[1.3] tracking-wide text-gray-900 mt-4 max-w-2xl">We grew purely through word of mouth — no advertisements.</h2>

          <div className="mt-12 max-w-3xl">
            {salesData.map((row) => (
              <div key={row.year} className="flex items-center gap-4 border-b border-gray-100 py-4">
                <span className="font-belleza text-[11px] text-gray-400 w-12">{row.year}</span>
                <div className="flex-1 h-[3px] bg-gray-100 relative">
                  <div className="bg-gray-900 h-full" style={{ width: `${row.width}%` }}></div>
                </div>
                <span className="font-belleza text-[11px] text-gray-500 text-right w-24">{row.units}</span>
              </div>
            ))}
          </div>

          <div className="text-center border border-gray-100 py-12 mt-10">
            <p className="font-belleza text-[48px] text-gray-900 leading-none">300,000+</p>
            <p className="font-belleza text-[10px] uppercase tracking-widest text-gray-400 mt-2">Cumulative units sold as of 2025</p>
          </div>
        </div>
      </section>

      {/* DISTRIBUTION */}
      <section className="border-t border-gray-100 py-20 md:py-28 bg-[#f9f8f5]">
        <div className="max-w-7xl mx-auto px-8 md:px-10">
          <p className="font-belleza text-[11px] tracking-[0.2em] uppercase text-gray-400">Distribution</p>
          <h2 className="font-belleza text-[24px] md:text-[32px] leading-[1.3] tracking-wide text-gray-900 mt-4 max-w-3xl">
            Now sold in over 20 dermatology clinics and aesthetic salons across Seoul and Busan.
          </h2>
          <p className="mt-6 text-[13px] text-gray-600 leading-[2.2] max-w-2xl">
            La Théorie grew quietly — clinic by clinic, recommendation by recommendation. Our products were first adopted by dermatologists who trusted the science, then by patients who saw the results. For years, the medical channel was our only home, and it remains our foundation.
            <br /><br />
            Recently, we expanded into Chicor, one of Korea&rsquo;s leading premium beauty retailers. For the first time, La Théorie is reaching beyond the clinic — meeting customers who may have never heard of us, but whose skin has been waiting for exactly this.
          </p>

          <div className="mt-10 border-t border-gray-100">
            {distRows.map((row) => (
              <div key={row.region} className="flex justify-between py-4 border-b border-gray-100">
                <span className="font-belleza text-[12px] tracking-widest uppercase text-gray-900">{row.region}</span>
                <span className="text-[12px] text-gray-500 text-right">{row.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 py-20 md:py-28 bg-white text-center">
        <div className="max-w-7xl mx-auto px-8 md:px-10">
          <h2 className="font-belleza text-[22px] md:text-[28px] tracking-wide text-gray-900 leading-[1.4] max-w-2xl mx-auto">
            Your company can become La Théorie&rsquo;s first overseas partner.
          </h2>
          <p className="text-[13px] text-gray-500 mt-4 leading-relaxed max-w-xl mx-auto">
            K-Beauty is everywhere, but La Théorie has yet to arrive in your market.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 w-full max-w-xs mx-auto">
            <button
              onClick={() => setIsPartnerModalOpen(true)}
              className="w-full border border-black bg-transparent text-black px-9 py-3.5 transition hover:bg-black hover:text-white uppercase tracking-widest font-belleza text-[12px]"
            >
              Become a Partner
            </button>
            <button
              onClick={() => setIsBrochureModalOpen(true)}
              className="w-full border border-black bg-transparent text-black px-9 py-3.5 transition hover:bg-black hover:text-white uppercase tracking-widest font-belleza text-[12px]"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Partner modal */}
      {isPartnerModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg p-8 relative shadow-2xl">
            <button onClick={() => setIsPartnerModalOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-black transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="font-belleza text-2xl mb-2 text-center tracking-wide">Become a Partner</h3>
            <p className="text-center text-xs text-gray-500 mb-8">Leave your details and our team will get back to you shortly.</p>
            <form onSubmit={submitPartner} className="flex flex-col gap-4 font-noto-sans">
              <input type="hidden" name="access_key" defaultValue={ACCESS_KEY} />
              <input type="hidden" name="subject" defaultValue="🌐 [La Théorie] New Partnership Inquiry" />
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
              {partnerStatus === "error" && <p className="text-red-500 text-xs text-center mt-2">A temporary error occurred. Please try again later.</p>}
            </form>
          </div>
        </div>
      )}

      {/* Brochure modal */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-sm p-8 relative shadow-2xl">
            <button onClick={() => setIsBrochureModalOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-black transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="font-belleza text-2xl mb-2 text-center tracking-wide">Brochure Download</h3>
            <p className="text-center text-xs text-gray-500 mb-8">Select a language to download the brochure.</p>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/La_Theorie_EN.pdf", label: "La Théorie — English" },
                { href: "/La_Theorie_VN.pdf", label: "La Théorie — Vietnamese" },
                { href: "/La_Theorie_KO.pdf", label: "La Théorie — Korean" },
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

      {/* Floating Back to Home */}
      <Link
        href="/"
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-black text-white shadow-lg flex items-center justify-center transition-all duration-500 ${showBackToHome ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <span className="font-belleza text-[9px] tracking-widest uppercase">Home</span>
      </Link>
    </div>
  );
}
