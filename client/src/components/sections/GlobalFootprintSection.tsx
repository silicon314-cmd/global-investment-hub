/* GlobalFootprintSection — Dark Premium Finance
   5 cities: Tokyo (Tokyu lobby + night skyline), Toronto, China, Seoul
   Photos: actual on-site photography from business trips */

import { useRef, useEffect } from "react";

const footprintItems = [
  {
    id: "tokyo-partner",
    city: "Tokyo",
    cityKo: "도쿄",
    cityJa: "東京",
    country: "Japan",
    countryKo: "일본",
    src: "/manus-storage/tokyu-lobby_c3b81982.jpg",
    label: "Tokyu Fudosan",
    labelJa: "東急不動産",
    labelKo: "도큐부동산",
    desc: "Strategic real estate partner — Tokyu Fudosan headquarters",
    descKo: "전략적 부동산 파트너 — 도큐부동산 본사 방문",
    size: "large", // spans 2 rows on desktop
  },
  {
    id: "tokyo-night",
    city: "Tokyo",
    cityKo: "도쿄",
    cityJa: "東京",
    country: "Japan",
    countryKo: "일본",
    src: "/manus-storage/tokyo-night_23bdab69.jpg",
    label: "Tokyo Skyline",
    labelJa: "東京夜景",
    labelKo: "도쿄 야경",
    desc: "Post-meeting Tokyo skyline — active deal flow in Japan",
    descKo: "미팅 후 도쿄 야경 — 일본 딜 플로우 현장",
    size: "normal",
  },
  {
    id: "toronto",
    city: "Toronto",
    cityKo: "토론토",
    cityJa: "トロント",
    country: "Canada",
    countryKo: "캐나다",
    src: "/manus-storage/toronto-skyline_563b3f26.jpg",
    label: "Toronto · CANPS Hub",
    labelJa: "トロント",
    labelKo: "토론토 · CANPS 거점",
    desc: "North America entry point — CANPS operational base in Toronto",
    descKo: "북미 진출 거점 — 토론토 CANPS 운영 기지",
    size: "normal",
  },
  {
    id: "china",
    city: "China",
    cityKo: "중국",
    cityJa: "中国",
    country: "China",
    countryKo: "중국",
    src: "/manus-storage/china-city_3898ab83.jpg",
    label: "China Operations",
    labelJa: "中国現地",
    labelKo: "중국 현지",
    desc: "On-ground presence in China — battery supply chain access",
    descKo: "중국 현지 거점 — 배터리 공급망 접근",
    size: "normal",
  },
  {
    id: "seoul",
    city: "Seoul",
    cityKo: "서울",
    cityJa: "ソウル",
    country: "Korea HQ",
    countryKo: "한국 본사",
    src: "/manus-storage/seoul-street_0807b5d3.jpg",
    label: "Seoul · NPS HQ",
    labelJa: "ソウル本社",
    labelKo: "서울 · NPS 본사",
    desc: "Headquarters operations — strategic direction and deal origination",
    descKo: "본사 운영 — 전략 방향 수립 및 딜 소싱",
    size: "normal",
  },
];

export default function GlobalFootprintSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
      },
      { threshold: 0.06 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="footprint" className="relative py-20 md:py-32 bg-[#060A0D]">
      <div className="gold-line opacity-20" />
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="relative z-10 container">
        {/* Header */}
        <div ref={headerRef} className="fade-in-up mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <div className="section-label mb-2">Global Footprint</div>
              <div className="ml-annotation mb-5">
                <span className="ml-ko">글로벌 현장 활동</span>
                <span className="ml-ja">グローバル活動実績</span>
              </div>
              <h2 className="section-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                On the Ground
                <br />
                <span className="text-[#D4A843] italic">Across 4 Countries</span>
              </h2>
            </div>
            <div>
              <p className="body-text leading-relaxed">
                Our presence is not virtual — it is built through direct visits, on-site meetings, and active operations across Seoul, Tokyo, Toronto, and China.
              </p>
              <p className="ml-ko text-[0.72rem] leading-relaxed text-[#4A5560] mt-2">
                서울, 도쿄, 토론토, 중국 — 직접 방문과 현장 미팅을 통해 구축된 실제 글로벌 존재감.
              </p>
            </div>
          </div>
        </div>

        {/* Photo Grid — asymmetric layout */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children"
          style={{ gridAutoRows: "220px" }}
        >
          {/* Tokyo Partner — large card (spans 2 rows on lg) */}
          <div
            className="group relative overflow-hidden border border-white/[0.06] hover:border-[#D4A843]/30 transition-all duration-500 lg:row-span-2"
            style={{ height: "100%" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${footprintItems[0].src})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060A0D]/95 via-[#060A0D]/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span
                className="inline-block px-2.5 py-1 text-[9px] tracking-widest uppercase border border-[#D4A843]/40 text-[#D4A843] bg-[#060A0D]/70"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {footprintItems[0].country}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="text-[#E8EDF2] text-xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {footprintItems[0].label}
                </h3>
                <span className="ml-ja text-[#8B95A1] text-[10px]">{footprintItems[0].labelJa}</span>
              </div>
              <p className="ml-ko text-[#8B95A1] text-[11px] mb-1">{footprintItems[0].labelKo}</p>
              <p className="text-[#55606A] text-[11px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {footprintItems[0].desc}
              </p>
              <p className="ml-ko text-[9px] text-[#3A4048] mt-1">{footprintItems[0].descKo}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4A843] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>

          {/* Remaining 4 cities — normal cards */}
          {footprintItems.slice(1).map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden border border-white/[0.06] hover:border-[#D4A843]/30 transition-all duration-500"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.src})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060A0D]/95 via-[#060A0D]/20 to-transparent" />

              {/* Country badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="inline-block px-2.5 py-1 text-[9px] tracking-widest uppercase border border-white/10 text-[#8B95A1] bg-[#060A0D]/70"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.country}
                </span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <h3
                    className="text-[#E8EDF2] text-base font-bold leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.label}
                  </h3>
                  <span className="ml-ko text-[#8B95A1] text-[10px]">{item.labelKo}</span>
                </div>
                <p
                  className="text-[#55606A] text-[10px] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4A843] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 pt-6 border-t border-white/[0.05]">
          <p
            className="text-[#4A5560] text-[11px] tracking-wide text-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            All photos represent actual business activities — not stock imagery.
          </p>
          <p className="ml-ko text-[9px] text-[#3A4048] text-center mt-1">
            모든 사진은 실제 비즈니스 활동 현장을 촬영한 것입니다.
          </p>
        </div>
      </div>

      <div className="gold-line opacity-20 mt-8" />
    </section>
  );
}
