/* ExecutionSection — Dark Premium Finance
   Real Execution: on-site meetings, negotiations, deal execution
   Photos: Canada-Korea dinner meeting, Battery Pavilion meeting,
           Li-Cycle factory visit, Albemarle lithium site visit */

import { useRef, useEffect } from "react";

const executionPhotos = [
  {
    src: "/manus-storage/canada-korea-meeting_1ac08d2e.jpg",
    caption: "Canada Partner Meeting",
    captionSub: "Canadian business delegation dinner · Seoul, Korea",
    captionKo: "캐나다 업체 한국 미팅 · 서울",
    size: "large",
  },
  {
    src: "/manus-storage/battery-pavilion-meeting_5c6651e1.jpg",
    caption: "Battery Pavilion Meeting",
    captionSub: "On-site business meeting · Battery exhibition",
    captionKo: "배터리 파빌리온 방문 미팅",
    size: "normal",
  },
  {
    src: "/manus-storage/licycle-factory_aa174e2b.jpg",
    caption: "Li-Cycle Factory Visit",
    captionSub: "North America lithium recycling facility · On-site due diligence",
    captionKo: "북미 현지 공장 현장 실사 · Li-Cycle",
    size: "normal",
  },
  {
    src: "/manus-storage/albemarle-lithium_0889a3eb.jpg",
    caption: "Albemarle Lithium Site",
    captionSub: "World's largest lithium producer · On-site visit",
    captionKo: "리튬 회사 현장 방문 · Albemarle",
    size: "normal",
  },
];

export default function ExecutionSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.06 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="execution" className="relative py-20 md:py-32 bg-[#080C10]">
      <div className="gold-line opacity-20" />
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="relative z-10 container">
        {/* Header */}
        <div ref={headerRef} className="fade-in-up mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <div className="section-label mb-2">Real Execution</div>
              <div className="ml-annotation mb-5">
                <span className="ml-ko">실제 실행 · 현장 중심</span>
                <span className="ml-ja">実際の実行・現場主義</span>
              </div>
              <h2 className="section-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                On-site negotiations
                <br />
                <span className="text-[#D4A843] italic">and deal execution.</span>
              </h2>
            </div>
            <div>
              <p className="body-text leading-relaxed">
                We don't send introductions — we show up. Every deal, every partnership, and every investment in our portfolio was built through direct, on-site engagement across Korea, Canada, Japan, and China.
              </p>
              <p className="ml-ko text-[0.72rem] leading-relaxed text-[#4A5560] mt-2">
                글로벌 시장에서의 현장 미팅, 협상, 딜 실행. 네트워크의 모든 관계는 이메일 소개가 아닌 직접 대면을 통해 구축되었습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Photo grid — asymmetric layout: large left (2 rows), 3 normal right */}
        <div
          ref={gridRef}
          className="grid gap-3 stagger-children"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "240px 240px",
          }}
        >
          {/* Large card — spans 2 rows */}
          <div
            className="group relative overflow-hidden border border-white/[0.06] hover:border-[#D4A843]/25 transition-all duration-400"
            style={{ gridRow: "1 / 3" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${executionPhotos[0].src})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C10]/90 via-[#080C10]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p
                className="text-[#E8EDF2] text-sm font-semibold mb-1 leading-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {executionPhotos[0].caption}
              </p>
              <p className="text-[#8B95A1] text-[10px] tracking-wide mb-1">{executionPhotos[0].captionSub}</p>
              <p className="ml-ko text-[9px] text-[#4A5560]">{executionPhotos[0].captionKo}</p>
            </div>
          </div>

          {/* 3 normal cards */}
          {executionPhotos.slice(1).map((photo) => (
            <div
              key={photo.caption}
              className="group relative overflow-hidden border border-white/[0.06] hover:border-[#D4A843]/25 transition-all duration-400"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${photo.src})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C10]/90 via-[#080C10]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  className="text-[#E8EDF2] text-xs font-semibold mb-0.5 leading-tight"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {photo.caption}
                </p>
                <p className="text-[#8B95A1] text-[9px] tracking-wide mb-0.5">{photo.captionSub}</p>
                <p className="ml-ko text-[8px] text-[#4A5560]">{photo.captionKo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Execution stats bar */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Canada–Korea", desc: "Partner meetings", descKo: "파트너 미팅" },
            { label: "Battery Exhibitions", desc: "Industry engagement", descKo: "산업 전시 참여" },
            { label: "Factory Due Diligence", desc: "North America sites", descKo: "북미 현장 실사" },
            { label: "Lithium Sites", desc: "Resource chain access", descKo: "리튬 자원 현장 방문" },
          ].map((item) => (
            <div key={item.label} className="p-3 border border-white/[0.05] bg-[#0A0E14]/60">
              <div
                className="text-[#D4A843] text-[11px] font-semibold mb-0.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </div>
              <p className="text-[#55606A] text-[10px]">{item.desc}</p>
              <p className="ml-ko text-[9px] text-[#3A4048]">{item.descKo}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="gold-line opacity-20 mt-8" />
    </section>
  );
}
