/* ServicesSection — Dark Premium Finance
   Execution-first messaging, improved readability, unified card height */

import { useRef, useEffect } from "react";
import { TrendingUp, Users, Globe } from "lucide-react";

const services = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Investment",
    titleKo: "투자",
    titleJa: "投資",
    subtitle: "Direct Capital & Fundraising",
    subtitleKo: "직접 투자 및 투자 유치",
    subtitleJa: "直接投資・資金調達",
    lead: "Direct capital investment and fundraising support.",
    leadKo: "직접 자본 투자 및 투자 유치 지원.",
    description:
      "We deploy capital directly or structure external fundraising — depending on project scale and stage. Access to 3+ fund partners extends our reach beyond direct balance sheet.",
    descriptionKo: "프로젝트 규모와 단계에 따라 직접 투자 또는 외부 펀드 연계 구조로 설계합니다. 3개 이상의 펀드 파트너를 통해 직접 투자 범위를 확장합니다.",
    points: [
      { en: "Direct investment execution", ko: "직접 투자 실행" },
      { en: "External fund partner access", ko: "외부 펀드 파트너 연계" },
      { en: "Deal structure design", ko: "딜 구조 설계" },
    ],
  },
  {
    number: "02",
    icon: Users,
    title: "Partnership",
    titleKo: "파트너십",
    titleJa: "パートナーシップ",
    subtitle: "Strategic Global Connections",
    subtitleKo: "전략적 글로벌 파트너 연결",
    subtitleJa: "戦略的グローバルコネクション",
    lead: "Strategic global connections across industries.",
    leadKo: "산업 전반에 걸친 전략적 글로벌 파트너 연결.",
    description:
      "We leverage our Korea, Canada, Japan, and China networks to match the right partners. Not introductions — working relationships built for execution.",
    descriptionKo: "한국, 캐나다, 일본, 중국 네트워크를 활용해 적합한 파트너를 연결합니다. 단순 소개가 아닌 실행을 위한 실질적 협업 관계를 구축합니다.",
    points: [
      { en: "Cross-border partner matching", ko: "국경 간 파트너 매칭" },
      { en: "Supply chain & distribution", ko: "공급망 및 유통" },
      { en: "Industry network access", ko: "산업 네트워크 접근" },
    ],
  },
  {
    number: "03",
    icon: Globe,
    title: "Execution",
    titleKo: "실행",
    titleJa: "実行",
    subtitle: "Market Entry & Business Expansion",
    subtitleKo: "시장 진출 및 사업 확장 실행",
    subtitleJa: "市場参入・事業拡大実行",
    lead: "Market entry and business expansion execution.",
    leadKo: "시장 진출 및 사업 확장 실행.",
    description:
      "From strategy to entity setup to local operations — we execute alongside our clients. Korea, Canada, Japan, and China, with on-the-ground teams in each market.",
    descriptionKo: "전략 수립부터 법인 설립, 현지 운영까지 — 클라이언트와 함께 직접 실행합니다. 각 시장에 현지 팀이 있습니다.",
    points: [
      { en: "Market entry strategy", ko: "시장 진출 전략" },
      { en: "Entity setup & operations", ko: "법인 설립 및 운영" },
      { en: "On-the-ground execution", ko: "현지 직접 실행" },
    ],
  },
];

export default function ServicesSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
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
    if (cardsRef.current) observer.observe(cardsRef.current);
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-24 md:py-36 bg-[#080C10]">
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="relative z-10 container">
        {/* Header */}
        <div ref={headerRef} className="fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 md:mb-20">
          <div>
            <div className="section-label mb-2">What We Do</div>
            <div className="ml-annotation mb-6">
              <span className="ml-ko">핵심 서비스</span>
              <span className="ml-ja">主要サービス</span>
            </div>
            <h2 className="section-heading" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
              Investment, Partnership,
              <br />
              <span className="text-[#D4A843] italic">and Execution</span>
            </h2>
            <div className="ml-annotation mt-3">
              <span className="ml-ko">투자, 파트너십, 그리고 실행</span>
              <span className="ml-ja">投資、パートナーシップ、そして実行</span>
            </div>
          </div>
          <div className="flex items-end">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[#D4A843]/50" />
                <p className="text-[#C8A84B] text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  We are not a consulting firm.
                </p>
              </div>
              <p className="body-text mb-2">
                We invest directly, connect strategically, and execute on the ground — across Korea, Canada, Japan, and China.
              </p>
              <div className="ml-annotation">
                <span className="ml-ko">직접 투자하고, 전략적으로 연결하며, 현지에서 실행합니다 — 한국, 캐나다, 일본, 중국 전반에서.</span>
                <span className="ml-ja">直接投資し、戦略的に接続し、現地で実行します — 韓国・カナダ・日本・中国全域で。</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 stagger-children">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.number}
                className="bg-[#0A0E14] p-8 md:p-10 card-glow border border-white/[0.06] transition-all duration-300 group relative overflow-hidden flex flex-col"
                style={{ minHeight: "460px" }}
              >
                {/* Number watermark */}
                <div className="absolute top-4 right-6 text-[#D4A843]/[0.04] font-mono text-8xl font-bold select-none leading-none">
                  {s.number}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-10 h-10 border border-[#D4A843]/30 flex items-center justify-center mb-6 group-hover:border-[#D4A843]/60 transition-colors flex-shrink-0">
                    <Icon size={18} className="text-[#D4A843]" />
                  </div>

                  {/* Title */}
                  <div className="mb-1">
                    <h3 className="section-heading text-[#E8EDF2]" style={{ fontSize: "2.25rem" }}>
                      {s.title}
                    </h3>
                    <div className="ml-inline mt-1">
                      <span className="ml-ko">{s.titleKo}</span>
                      <span className="ml-ja">{s.titleJa}</span>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <div className="mb-6">
                    <div className="text-[#55606A] text-[10px] tracking-widest uppercase font-mono">{s.subtitle}</div>
                    <div className="ml-annotation mt-0.5">
                      <span className="ml-ko">{s.subtitleKo}</span>
                    </div>
                  </div>

                  {/* Lead sentence — prominent */}
                  <p className="text-[#C8D0D8] text-sm font-medium leading-relaxed mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {s.lead}
                  </p>
                  <div className="ml-annotation mb-4">
                    <span className="ml-ko">{s.leadKo}</span>
                  </div>

                  {/* Description */}
                  <p className="body-text mb-1 flex-grow">{s.description}</p>
                  <div className="ml-annotation mb-6">
                    <span className="ml-ko">{s.descriptionKo}</span>
                  </div>

                  {/* Points */}
                  <div className="space-y-2.5 border-t border-white/[0.06] pt-5 mt-auto">
                    {s.points.map((p) => (
                      <div key={p.en} className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-[#D4A843] rounded-full flex-shrink-0 mt-2" />
                        <div>
                          <span className="card-body">{p.en}</span>
                          <span className="ml-ko ml-2">{p.ko}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
