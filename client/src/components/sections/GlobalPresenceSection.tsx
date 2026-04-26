/* GlobalPresenceSection — Dark Premium Finance
   Clickable entity cards, improved readability, clear relation hierarchy */

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { entities, relationColors, type Entity } from "@/data/entities";
import EntityModal from "@/components/EntityModal";

export default function GlobalPresenceSection() {
  const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="presence" className="relative py-24 md:py-36 bg-[#0A0E14]">
        <div className="gold-line opacity-30" />
        <div className="absolute inset-0 dot-grid opacity-15" />

        <div className="relative z-10 container">
          {/* Header */}
          <div ref={headerRef} className="fade-in-up mb-16 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <div>
                <div className="section-label mb-2">Global Presence</div>
                <div className="ml-annotation mb-6">
                  <span className="ml-ko">글로벌 거점</span>
                  <span className="ml-ja">グローバル拠点</span>
                </div>
                <h2 className="section-heading" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
                  Headquartered in Korea,
                  <br />
                  <span className="text-[#D4A843] italic">Operating Globally</span>
                </h2>
              </div>
              <div className="flex flex-col justify-end gap-3">
                <p className="body-text">
                  Headquartered in Korea, we operate through a network of affiliated entities across North America, Japan, and China.
                </p>
                <div className="ml-annotation">
                  <span className="ml-ko">한국 본사를 중심으로 북미, 일본, 중국에 걸친 법인 네트워크를 운영합니다.</span>
                  <span className="ml-ja">韓国本社を中心に、北米・日本・中国にわたる法人ネットワークを運営しています。</span>
                </div>
                {/* Relation legend */}
                <div className="flex flex-wrap gap-4 mt-2 pt-4 border-t border-white/[0.05]">
                  {[
                    { label: "HQ", labelKo: "본사", color: "text-[#D4A843]", border: "border-[#D4A843]/40" },
                    { label: "Affiliate", labelKo: "관계사", color: "text-[#8B95A1]", border: "border-[#8B95A1]/30" },
                    { label: "Branch", labelKo: "지사", color: "text-[#6B8FA8]", border: "border-[#6B8FA8]/30" },
                    { label: "Partner", labelKo: "파트너사", color: "text-[#55606A]", border: "border-white/10" },
                  ].map((item) => (
                    <div key={item.label} className={`flex items-center gap-1.5 px-2.5 py-1 border ${item.border}`}>
                      <span className={`text-[9px] font-mono tracking-widest uppercase ${item.color}`}>{item.label}</span>
                      <span className="ml-ko text-[9px]">{item.labelKo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Entity cards */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 stagger-children">
            {entities.map((entity) => {
              const colors = relationColors[entity.relation];
              return (
                <button
                  key={entity.id}
                  onClick={() => setSelectedEntity(entity)}
                  className={`entity-card text-left p-6 border transition-all duration-300 card-glow group relative overflow-hidden ${colors.border} ${colors.bg} hover:scale-[1.02] focus:outline-none focus:ring-1 focus:ring-[#D4A843]/40`}
                  style={{ minHeight: "240px" }}
                >
                  {/* Arrow indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowUpRight size={14} className={colors.text} />
                  </div>

                  {/* Flag + Country */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{entity.flag}</span>
                    <div>
                      <div className="text-[#E8EDF2] text-xs font-semibold tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>{entity.country}</div>
                      <div className="ml-annotation">
                        <span className="ml-ko">{entity.countryKo}</span>
                        <span className="ml-ja">{entity.countryJa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Entity name */}
                  <div className="mb-3">
                    <div className={`font-mono text-2xl font-semibold tracking-wider mb-0.5 ${colors.text}`}>
                      {entity.name}
                    </div>
                    <div className="ml-annotation">
                      <span className="ml-ko">{entity.nameKo}</span>
                    </div>
                  </div>

                  {/* Relation badge */}
                  <div className={`inline-flex items-center gap-1.5 px-2 py-1 border text-[9px] font-mono tracking-widest uppercase mb-4 ${colors.badge}`}>
                    {entity.relationLabel}
                    <span className="ml-ko normal-case tracking-normal" style={{ fontSize: "0.6rem" }}>{entity.relationLabelKo}</span>
                  </div>

                  {/* Tagline */}
                  <p className="card-body line-clamp-2">{entity.tagline}</p>

                  {/* Hover hint */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-[9px] font-mono tracking-widest text-[#D4A843]/60 uppercase">View Details</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom connector */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4A843]/20 to-transparent" />
            <div className="ml-inline">
              <span className="text-[#3A4048] text-[10px] font-mono tracking-widest uppercase whitespace-nowrap">
                Korea · Canada · Japan · China
              </span>
              <span className="ml-ko text-[#3A4048]">한국 · 캐나다 · 일본 · 중국</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4A843]/20 to-transparent" />
          </div>
        </div>

        <div className="gold-line opacity-30 mt-8" />
      </section>

      {/* Entity detail modal */}
      <EntityModal entity={selectedEntity} onClose={() => setSelectedEntity(null)} />
    </>
  );
}
