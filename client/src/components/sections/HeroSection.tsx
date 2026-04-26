/* HeroSection — Dark Premium Finance
   Full viewport hero with multilingual annotations */

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663594540257/9RVHVovYfgjdeSUNG5AnJK/hero-bg-B9GRnKKp3Fwig4w5fwsdnM.webp";

const metrics = [
  { value: "$6M+", sub: "₩9.7B+ Invested", subKo: "누적 투자", subJa: "累計投資" },
  { value: "3+", sub: "Fund Partners", subKo: "펀드 파트너", subJa: "ファンドパートナー" },
  { value: "4", sub: "Countries", subKo: "진출 국가", subJa: "展開国" },
  { value: "Battery", sub: "Core / Cross-Industry", subKo: "2차전지 중심", subJa: "二次電池中心" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080C10]/70 via-[#080C10]/50 to-[#080C10]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080C10]/60 via-transparent to-[#080C10]/40" />
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 container pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Location label */}
          <div
            className={`flex items-center gap-2 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="section-label">Korea HQ · Canada · Japan · China</span>
            <div className="ml-annotation ml-2">
              <span className="ml-ko">한국 본사 · 캐나다 · 일본 · 중국</span>
            </div>
          </div>

          {/* Main heading — primary */}
          <h1
            className={`section-heading text-[#E8EDF2] mb-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontSize: "clamp(2.6rem, 6vw, 5.2rem)", transitionDelay: "0.25s" }}
          >
            We Invest.
            <br />
            <span className="text-[#D4A843] italic">We Execute.</span>
            <br />
            <span className="text-[#E8EDF2]">We Expand.</span>
          </h1>

          {/* Korean/Japanese annotation under heading */}
          <div
            className={`ml-annotation mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.35s" }}
          >
            <span className="ml-ko">투자하고, 실행하고, 확장합니다</span>
            <span className="ml-ja">投賄し、実行し、拡大する</span>
          </div>

          {/* Sub heading — secondary */}
          <p
            className={`body-text text-base md:text-lg mb-1 max-w-2xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.4s", color: "#8B95A1" }}
          >
            Global Expansion Through Investment &amp; Execution
          </p>
          <div
            className={`ml-annotation mb-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.43s" }}
          >
            <span className="ml-ko">투자와 실행을 통한 글로벌 사업 확장</span>
            <span className="ml-ja">投賄と実行によるグローバル事業拡大</span>
          </div>

          {/* Differentiator statement */}
          <div
            className={`flex items-center gap-4 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.5s" }}
          >
            <div className="w-8 h-px bg-[#D4A843]/60 flex-shrink-0" />
            <p className="text-[#C8A84B] text-sm md:text-base font-medium tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
              Direct Investment. Real Market Access. Proven Execution.
            </p>
          </div>

          {/* Metrics row */}
          <div
            className={`flex flex-wrap gap-8 md:gap-12 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.6s" }}
          >
            {metrics.map((m) => (
              <div key={m.value} className="flex flex-col gap-1">
                <span className="data-number text-2xl md:text-3xl text-[#D4A843]">{m.value}</span>
                <span className="text-[#55606A] text-xs tracking-wider uppercase font-medium">{m.sub}</span>
                <div className="ml-annotation">
                  <span className="ml-ko">{m.subKo}</span>
                  <span className="ml-ja">{m.subJa}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.75s" }}
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-[#D4A843] text-[#080C10] text-xs font-semibold tracking-widest uppercase hover:bg-[#E8C060] transition-colors duration-200 flex items-center gap-3"
            >
              Start a Conversation
              <span style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "0.65rem", fontWeight: 400, letterSpacing: "0.02em" }} className="opacity-70 normal-case tracking-normal">상담 문의</span>
            </button>
            <button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border border-white/20 text-[#8B95A1] text-xs tracking-widest uppercase hover:border-white/40 hover:text-[#E8EDF2] transition-all duration-200"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector("#metrics")?.scrollIntoView({ behavior: "smooth" })}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#55606A] hover:text-[#D4A843] transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "1s" }}
      >
        <span className="section-label" style={{ fontSize: "0.6rem" }}>Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 gold-line opacity-30" />
    </section>
  );
}
