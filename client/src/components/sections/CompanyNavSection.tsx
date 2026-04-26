/* CompanyNavSection — Dark Premium Finance
   Image-based evidence cards for each regional entity
   Photos: real uploaded images from actual site visits */

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { entities, type Entity } from "@/data/entities";
import EntityModal from "@/components/EntityModal";

const navCards = [
  {
    id: "korea",
    region: "Korea",
    regionKo: "대한민국",
    regionJa: "韓国",
    label: "Investment Platform",
    labelKo: "투자 플랫폼",
    labelSub: "Healthcare focus",
    labelSubKo: "헬스케어 중심",
    image: "/manus-storage/j2l-healthcare_65b41445.jpg",
    caption: "ACS Stretching Lounge — J2L Portfolio",
    captionKo: "J2L 포트폴리오 기업",
    entityId: "j2l",
    entities: "NPS · J2L",
  },
  {
    id: "canada",
    region: "Canada",
    regionKo: "캐나다",
    regionJa: "カナダ",
    label: "Market Access & Execution",
    labelKo: "시장 진출 및 실행",
    labelSub: "Battery / Minerals",
    labelSubKo: "배터리 / 광물",
    image: "/manus-storage/canada-pavilion_310a2bd5.jpg",
    caption: "Canada Pavilion — Battery Industry Exhibition",
    captionKo: "배터리 산업 전시회",
    entityId: "canps",
    entities: "CANPS",
  },
  {
    id: "japan",
    region: "Japan",
    regionKo: "일본",
    regionJa: "日本",
    label: "Direct Investment & Assets",
    labelKo: "직접 투자 및 자산",
    labelSub: "Real estate ownership",
    labelSubKo: "부동산 자산 보유",
    image: "/manus-storage/japan-shimomeguro_81cfb6ce.jpg",
    caption: "Tokyo Shimomeguro — KMY Direct Investment",
    captionKo: "도쿄 시모메구로 — KMY 직접 투자",
    entityId: "kmy",
    entities: "KMY",
  },
  {
    id: "china",
    region: "China",
    regionKo: "중국",
    regionJa: "中国",
    label: "Strategic Battery Network",
    labelKo: "전략적 배터리 네트워크",
    labelSub: "15+ years partnership",
    labelSubKo: "15년 이상 파트너십",
    image: "/manus-storage/china-atl_20383a8d.jpg",
    caption: "ATL (CATL Predecessor) — On-site Visit",
    captionKo: "ATL (CATL 전신) — 현장 방문",
    entityId: "china",
    entities: "Partner Network",
  },
];

export default function CompanyNavSection() {
  const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (entityId: string) => {
    const found = entities.find((e) => e.id === entityId);
    if (found) setSelectedEntity(found);
  };

  return (
    <>
      <section id="companies" className="relative py-20 md:py-32 bg-[#080C10]">
        <div className="absolute inset-0 dot-grid opacity-10" />

        <div className="relative z-10 container">
          {/* Header */}
          <div ref={headerRef} className="fade-in-up mb-12 md:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="section-label mb-2">Our Entities</div>
                <div className="ml-annotation mb-5">
                  <span className="ml-ko">법인 네트워크</span>
                  <span className="ml-ja">法人ネットワーク</span>
                </div>
                <h2 className="section-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                  Four Markets.
                  <br />
                  <span className="text-[#D4A843] italic">One Network.</span>
                </h2>
              </div>
              <p className="body-text max-w-md lg:text-right">
                Each entity operates with direct execution capability — not as a referral hub, but as an on-the-ground partner.
                <span className="block ml-ko mt-1.5 text-[0.7rem] text-[#4A5560]">각 법인은 단순 소개가 아닌 현장 실행 역량을 갖춘 파트너입니다.</span>
              </p>
            </div>
          </div>

          {/* Cards grid */}
          <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
            {navCards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.entityId)}
                className="group relative overflow-hidden border border-white/[0.08] hover:border-[#D4A843]/30 transition-all duration-400 text-left focus:outline-none focus:ring-1 focus:ring-[#D4A843]/40"
                style={{ minHeight: "340px" }}
              >
                {/* Background photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.image})` }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C10] via-[#080C10]/70 to-[#080C10]/20 group-hover:via-[#080C10]/60 transition-all duration-400" />

                {/* Top: entity badge + arrow */}
                <div className="absolute top-0 left-0 right-0 p-4 flex items-start justify-between">
                  <div className="bg-[#080C10]/70 backdrop-blur-sm px-2.5 py-1 border border-white/[0.08]">
                    <span className="text-[10px] font-mono tracking-widest text-[#8B95A1] uppercase">{card.entities}</span>
                  </div>
                  <div className="w-7 h-7 border border-white/[0.1] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#D4A843]/10">
                    <ArrowUpRight size={12} className="text-[#D4A843]" />
                  </div>
                </div>

                {/* Bottom: content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  {/* Caption on hover */}
                  <div className="mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[9px] font-mono tracking-wide text-[#D4A843]/60 uppercase">{card.caption}</span>
                    <span className="block ml-ko text-[9px] text-[#3A4048]">{card.captionKo}</span>
                  </div>

                  {/* Region */}
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <h3 className="text-[#E8EDF2] font-semibold tracking-wide" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem" }}>
                      {card.region}
                    </h3>
                    <span className="ml-ko text-[#4A5560]">{card.regionKo}</span>
                    <span className="ml-ja text-[#3A4048]">{card.regionJa}</span>
                  </div>

                  {/* Label */}
                  <div className="mb-1">
                    <p className="text-[#D4A843] text-xs font-medium tracking-wide">{card.label}</p>
                    <p className="ml-ko text-[0.65rem] text-[#4A5560] mt-0.5">{card.labelKo}</p>
                  </div>

                  {/* Sub label */}
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="w-3 h-px bg-[#D4A843]/40" />
                    <span className="text-[10px] text-[#55606A] tracking-wide">{card.labelSub}</span>
                    <span className="ml-ko text-[9px] text-[#3A4048]">{card.labelSubKo}</span>
                  </div>

                  {/* View details hint */}
                  <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[9px] font-mono tracking-widest text-[#D4A843]/70 uppercase">View Details</span>
                    <ArrowUpRight size={9} className="text-[#D4A843]/70" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            <p className="text-[10px] font-mono tracking-widest text-[#2A3038] uppercase whitespace-nowrap">
              Click any card for details · 카드를 클릭하면 상세 정보를 확인할 수 있습니다
            </p>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
          </div>
        </div>
      </section>

      <EntityModal entity={selectedEntity} onClose={() => setSelectedEntity(null)} />
    </>
  );
}
