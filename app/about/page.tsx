"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Link from "next/link";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

const ACCESS_KEY = "ad515025-1b36-4a08-bc8f-6f22569d17cd";

const timelineEvents = [
  { year: "2019", desc: "YD Cosmetics founded · 25,000 ingredients screened" },
  { year: "2020", desc: "First dermatology clinic partnership — Seoul" },
  { year: "2021", desc: "30,000 units sold · Expanded to Busan" },
  { year: "2023", desc: "Featured in Vogue Japan · 60,000 units in a single year" },
  { year: "2024–25", desc: "100,000 units in 2024 · 300,000+ cumulative · Chicor launch 2025", highlight: true },
];

const salesBars = [
  { year: "2021", value: 30, label: "30K" },
  { year: "2022", value: 70, label: "70K" },
  { year: "2023", value: 130, label: "130K" },
  { year: "2024", value: 230, label: "230K" },
  { year: "2025", value: 300, label: "300,000+", highlight: true },
];

const noList = [
  "No influencer deals",
  "No celebrity endorsements",
  "No distribution outside Korea",
];

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToHome, setShowBackToHome] = useState(false);

  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [partnerStatus, setPartnerStatus] = useState("idle");

  const chartRef = useRef<HTMLCanvasElement>(null);

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

  useEffect(() => {
    if (!chartRef.current) return;
    Chart.register(...registerables, ChartDataLabels);

    const chart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: ["2021", "2022", "2023", "2024"],
        datasets: [
          {
            label: "General Skincare",
            data: [4.2, 4.8, 5.1, 5.3],
            borderColor: "#b8b5ac",
            backgroundColor: "transparent",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 0,
            tension: 0.25,
            datalabels: {
              display: (ctx: { dataIndex: number }) => ctx.dataIndex === 3,
              anchor: "end",
              align: "right",
              offset: 10,
              color: "#b8b5ac",
              font: { family: "Belleza", size: 11 },
              formatter: () => ["Skincare", "5.3%"],
            },
          },
          {
            label: "K-Beauty",
            data: [7.1, 8.4, 9.2, 10.1],
            borderColor: "#6a8fa8",
            backgroundColor: "transparent",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 0,
            tension: 0.25,
            datalabels: {
              display: (ctx: { dataIndex: number }) => ctx.dataIndex === 3,
              anchor: "end",
              align: "right",
              offset: 10,
              color: "#6a8fa8",
              font: { family: "Belleza", size: 11 },
              formatter: () => ["K-Beauty", "10.1%"],
            },
          },
          {
            label: "Clinical Derma",
            data: [10.5, 11.8, 12.8, 13.9],
            borderColor: "#2a2a28",
            backgroundColor: "transparent",
            borderWidth: 2.5,
            pointRadius: 0,
            pointHoverRadius: 0,
            tension: 0.25,
            datalabels: {
              display: (ctx: { dataIndex: number }) => ctx.dataIndex === 3,
              anchor: "end",
              align: "right",
              offset: 10,
              color: "#2a2a28",
              font: { family: "Belleza", size: 12, weight: "bold" },
              formatter: () => ["Clinical Derma", "13.9%"],
            },
          },
        ],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { right: 110 } },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
        scales: {
          x: {
            grid: { color: "rgba(0,0,0,0.05)" },
            border: { display: false },
            ticks: { color: "#9ca3af", font: { family: "Belleza", size: 10 } },
          },
          y: {
            grid: { color: "rgba(0,0,0,0.05)" },
            border: { display: false },
            ticks: { color: "#9ca3af", font: { family: "Belleza", size: 10 } },
          },
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
    });

    return () => { chart.destroy(); };
  }, []);

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

  const arrow = (
    <svg width="12" height="18" viewBox="0 0 12 18" className="flex-shrink-0">
      <line x1="6" y1="0" x2="6" y2="12" stroke="#d1d5db" strokeWidth="0.5" />
      <polyline points="2,10 6,16 10,10" fill="none" stroke="#d1d5db" strokeWidth="0.5" />
    </svg>
  );

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
      <section className="relative pt-[80px] min-h-[560px] md:min-h-[640px] flex flex-col overflow-hidden">
        <img src="/hero-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 md:px-16 lg:px-24 flex-1 flex flex-col justify-end pb-16 md:pb-24">
          <p className="font-belleza text-[11px] tracking-[0.2em] uppercase text-white/50">About La Théorie</p>
          <h1 className="font-belleza text-[36px] md:text-[52px] lg:text-[60px] leading-[1.15] text-white mt-4 max-w-4xl whitespace-pre-line drop-shadow-md">
            {`A Dermatologist's Prescription for\nAcne & Folliculitis Skin`}
          </h1>
          <p className="text-[13px] text-white/75 font-light leading-[2] max-w-xl mt-6 drop-shadow-md">
            Born in a clinic. Backed by peer-reviewed research. Built for skin that won&rsquo;t settle.
          </p>
          <span className="inline-block self-start border border-white/40 font-belleza text-[10px] tracking-[0.16em] uppercase px-4 py-2 mt-8 text-white/70">
            0&permil; Fatty Acid Solution for Troubled Skin
          </span>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="bg-white border-t border-gray-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="max-w-sm">
            <p className="font-belleza text-[11px] tracking-[0.2em] uppercase text-gray-400">Our Journey</p>
            <h2 className="font-belleza text-[24px] md:text-[32px] leading-[1.3] tracking-wide text-gray-900 mt-4 whitespace-pre-line">
              {`Founded in a dermatologist's office.\nGrown by patients.`}
            </h2>
            <p className="text-[13px] text-gray-600 leading-[2.2] mt-6">
              Six years of quiet growth — clinic by clinic, patient by patient.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
            {timelineEvents.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={event.year} className="relative flex items-start mb-10 last:mb-0">
                  <div className={`w-1/2 pr-6 text-right ${isLeft ? "" : "invisible"}`}>
                    <p className="font-belleza text-[15px] text-gray-900 mb-1">{event.year}</p>
                    <p className="text-[12px] text-gray-500 font-light leading-[1.7]">{event.desc}</p>
                  </div>
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-1.5 rounded-full bg-gray-900 ${
                      event.highlight ? "w-4 h-4 ring-2 ring-offset-2 ring-gray-900" : "w-3 h-3"
                    }`}
                  />
                  <div className={`w-1/2 pl-6 ${isLeft ? "invisible" : ""}`}>
                    <p className="font-belleza text-[15px] text-gray-900 mb-1">{event.year}</p>
                    <p className="text-[12px] text-gray-500 font-light leading-[1.7]">{event.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MARKET OPPORTUNITY */}
      <section className="bg-[#f9f8f5] border-t border-gray-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="md:order-2">
            <p className="font-belleza text-[11px] tracking-[0.2em] uppercase text-gray-400">Market Opportunity</p>
            <h2 className="font-belleza text-[24px] md:text-[32px] leading-[1.3] tracking-wide text-gray-900 mt-4 whitespace-pre-line">
              {`La Théorie sits at the intersection\nof two fast-growing waves.`}
            </h2>
            <p className="text-[13px] text-gray-600 leading-[2.2] mt-6">
              K-Beauty and Clinical Derma are both outpacing the general skincare market. La Théorie carries both — the cultural momentum of K-Beauty and the credibility of dermatology science.
            </p>
          </div>

          <div className="md:order-1">
            <div className="h-[180px] md:h-[220px]">
              <canvas ref={chartRef} />
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 justify-center md:justify-start">
              <span className="flex items-center gap-2 text-[10px] text-gray-600 font-belleza tracking-wide">
                <span className="block w-6 h-px bg-[#b8b5ac]" />
                General Skincare
              </span>
              <span className="flex items-center gap-2 text-[10px] text-gray-600 font-belleza tracking-wide">
                <span className="block w-6 h-px bg-[#6a8fa8]" />
                K-Beauty
              </span>
              <span className="flex items-center gap-2 text-[10px] text-gray-900 font-belleza tracking-wide">
                <span className="block w-6 h-[2px] bg-[#2a2a28]" />
                Clinical Derma
              </span>
            </div>

            <div className="bg-white border border-gray-200 p-5 mt-8">
              <p className="font-belleza text-[10px] uppercase tracking-widest text-gray-400 mb-2">The fastest-growing sector in skincare</p>
              <p className="font-belleza text-[14px] text-gray-900 leading-[1.6]">
                Clinical Derma is growing at 2.6× the rate of general skincare — and La Théorie is built for exactly this market.
              </p>
            </div>

            <p className="mt-4 text-[11px] text-gray-400 font-light leading-[1.8]">
              Sources: Grand View Research Global Dermocosmetics Market Report 2024; Statista K-Beauty Global Market Size 2024; Euromonitor International Beauty &amp; Personal Care 2024.
            </p>
          </div>
        </div>
      </section>

      {/* THE SCIENCE */}
      <section className="bg-white border-t border-gray-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-belleza text-[11px] tracking-[0.2em] uppercase text-gray-400">The Science</p>
            <h2 className="font-belleza text-[24px] md:text-[32px] leading-[1.3] tracking-wide text-gray-900 mt-4 whitespace-pre-line">
              {`We focused on\n"taking out."`}
            </h2>

            <div className="border-l-2 border-gray-200 pl-6 mt-6 max-w-xl">
              <p className="font-belleza text-[16px] md:text-[18px] text-gray-900 leading-[1.65] italic">
                &ldquo;Anyone can add ingredients that seem good. But La Théorie is a brand that knows what shouldn&rsquo;t be included.&rdquo;
              </p>
              <p className="text-[13px] text-gray-600 leading-[2.2] mt-4">
                For persistent skin issues — adult acne, folliculitis, dermatitis — what matters most is reducing adverse reactions caused by excessive formulation. We eliminated fatty acids, the hidden trigger behind most chronic skin conditions.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#f9f8f5] border border-gray-100 p-6">
              <div className="flex justify-between items-start border-b border-gray-100 pb-4 mb-4 gap-4">
                <div>
                  <p className="font-belleza text-[9px] uppercase tracking-widest text-gray-400 mb-1">Peer-Reviewed Research</p>
                  <p className="font-belleza text-[11px] text-gray-900 leading-[1.6] whitespace-pre-line">{`MDPI — Microorganisms\nVol. 7, Issue 8 · August 2019`}</p>
                </div>
                <div className="border border-gray-200 px-3 py-2 text-center flex-shrink-0">
                  <p className="font-belleza text-[8px] uppercase tracking-widest text-gray-400">DOI</p>
                  <p className="font-belleza text-[9px] text-gray-600 leading-[1.5] whitespace-pre-line">{`10.3390/microorganisms\n7080232`}</p>
                </div>
              </div>
              <p className="font-belleza text-[15px] text-gray-900 mb-3">&ldquo;Skin fungi feed on cosmetic ingredients.&rdquo;</p>
              <p className="text-[12px] text-gray-600 leading-[2]">
                Malassezia, the fungus responsible for folliculitis and fungal acne, proliferates when fed fatty acids commonly found in skincare. La Théorie is the only brand that systematically removes these triggers from its entire product line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SALES ACHIEVEMENT */}
      <section className="bg-[#f9f8f5] border-t border-gray-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-belleza text-[11px] tracking-[0.2em] uppercase text-gray-400">Sales Achievement</p>
            <h2 className="font-belleza text-[24px] md:text-[32px] leading-[1.3] tracking-wide text-gray-900 mt-4 whitespace-pre-line">
              {`300,000+ units sold\nto 50,000+ patients.\nRepurchase was the engine.`}
            </h2>
            <p className="text-[13px] text-gray-600 leading-[2.2] mt-6">
              Our hero cream alone has driven over 300,000 cumulative units sold as of 2025 — powered by repeat purchases from patients who experienced real results. Not by reach. By results.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {noList.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="block w-4 h-px bg-gray-300" />
                  <span className="text-[12px] text-gray-500">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-belleza text-[10px] uppercase tracking-widest text-gray-400 mb-3">Cumulative units sold · Single SKU</p>
            <div className="flex items-end gap-3 md:gap-5 h-[300px] md:h-[340px]">
              {salesBars.map((bar) => (
                <div key={bar.year} className="flex-1 flex flex-col items-center justify-end h-full">
                  <span className={`font-belleza mb-2 text-center leading-tight ${bar.highlight ? "text-[18px] md:text-[22px] text-gray-900" : "text-[10px] text-gray-400"}`}>
                    {bar.label}
                  </span>
                  <div
                    className={`w-full ${bar.highlight ? "bg-gray-900" : "bg-gray-300"}`}
                    style={{ height: `${(bar.value / 320) * 100}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 md:gap-5 mt-3">
              {salesBars.map((bar) => (
                <span key={bar.year} className={`flex-1 font-belleza text-[10px] text-center ${bar.highlight ? "text-gray-900" : "text-gray-400"}`}>
                  {bar.year}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLINIC FIRST */}
      <section className="bg-white border-t border-gray-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="md:order-2">
            <p className="font-belleza text-[11px] tracking-[0.2em] uppercase text-gray-400">Clinic First</p>
            <h2 className="font-belleza text-[24px] md:text-[32px] leading-[1.3] tracking-wide text-gray-900 mt-4 whitespace-pre-line">
              {`We started where skin conditions\nare treated — not sold.`}
            </h2>
            <p className="text-[13px] text-gray-600 leading-[2.2] mt-6">
              La Théorie grew exclusively through dermatology clinics. Over 200 clinics across Seoul and Busan have carried our products — recommended by physicians to real patients with real skin conditions.
            </p>
          </div>

          <div className="relative md:order-1">
            <div className="absolute left-1/2 top-4 bottom-4 w-px bg-gray-200 -translate-x-1/2" />

            {/* Step 1 — Dermatology Clinics */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 relative">
              <div className="text-right">
                <p className="font-belleza text-[11px] uppercase tracking-widest text-gray-900 leading-[1.4] whitespace-pre-line">{`Dermatology\nClinics`}</p>
                <p className="text-[11px] text-gray-500 leading-[1.6] mt-2 whitespace-pre-line">{`Core channel since 2020\nSeoul · Busan, physician-recommended`}</p>
              </div>
              <div className="w-[44px] h-[44px] rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 z-10">
                <span className="font-belleza text-[9px] text-white">200+</span>
              </div>
              <div />
            </div>

            <div className="flex justify-center py-3 relative z-10 bg-white">{arrow}</div>

            {/* Step 2 — Aesthetic Salons */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 relative">
              <div />
              <div className="w-[36px] h-[36px] rounded-full bg-white border border-gray-300 flex-shrink-0 z-10" />
              <div>
                <p className="font-belleza text-[11px] uppercase tracking-widest text-gray-900 leading-[1.4] whitespace-pre-line">{`Aesthetic\nSalons`}</p>
                <p className="text-[11px] text-gray-500 leading-[1.6] mt-2 whitespace-pre-line">{`Secondary channel\nReferral-driven growth`}</p>
              </div>
            </div>

            <div className="flex justify-center py-3 relative z-10 bg-white">{arrow}</div>

            {/* Step 3 — Chicor */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 relative">
              <div className="text-right">
                <p className="font-belleza text-[11px] uppercase tracking-widest text-gray-900 leading-[1.4]">Chicor</p>
                <p className="text-[11px] text-gray-500 leading-[1.6] mt-2 whitespace-pre-line">{`Premium retail · Korea-wide\nLaunched 2025`}</p>
              </div>
              <div className="w-[36px] h-[36px] rounded-full bg-white border border-gray-300 flex items-center justify-center flex-shrink-0 z-10">
                <span className="font-belleza text-[8px] text-gray-600">2025</span>
              </div>
              <div />
            </div>

            <div className="flex justify-center py-3 relative z-10 bg-white">{arrow}</div>

            {/* Step 4 — Your Market */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 relative">
              <div />
              <div className="w-[48px] h-[48px] rounded-full bg-gray-900 ring-2 ring-offset-2 ring-gray-900 flex items-center justify-center flex-shrink-0 z-10">
                <span className="font-belleza text-[8px] text-white text-center leading-tight whitespace-pre-line">{`Your\nMarket`}</span>
              </div>
              <div>
                <p className="font-belleza text-[12px] uppercase tracking-widest text-gray-900 leading-[1.4] whitespace-pre-line">{`Overseas\nPartner ★`}</p>
                <p className="text-[11px] text-gray-500 leading-[1.6] mt-2 whitespace-pre-line">{`Next step\nNo partner yet — first opportunity open`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f9f8f5] border-t border-gray-100 py-24 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="font-belleza text-[22px] md:text-[32px] tracking-wide text-gray-900 leading-[1.4] max-w-2xl mx-auto whitespace-pre-line">
            {`Your company can become\nLa Théorie's overseas partner.`}
          </h2>
          <p className="text-[13px] text-gray-500 mt-4 leading-relaxed">
            K-Beauty is everywhere, but La Théorie has yet to arrive in your market.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 max-w-xs mx-auto">
            <button
              onClick={() => setIsPartnerModalOpen(true)}
              className="w-full border border-black bg-black text-white px-9 py-4 transition hover:bg-white hover:text-black font-belleza text-[12px] uppercase tracking-widest"
            >
              Become a Partner
            </button>
            <button
              onClick={() => setIsBrochureModalOpen(true)}
              className="w-full border border-black bg-transparent text-black px-9 py-4 transition hover:bg-black hover:text-white font-belleza text-[12px] uppercase tracking-widest"
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
