/* IndustrySection — Dark Premium Finance
   Industry focus areas with visual hierarchy */

import { useRef, useEffect } from "react";
import { Zap, Gem, Heart, Building2 } from "lucide-react";

const industries = [
  {
    icon: Zap,
    name: "2차전지",
    nameEn: "Battery / EV",
    description: "캐나다 북미 거점을 활용한 2차전지 소재·부품·장비 기업의 글로벌 진출 지원. 배터리 밸류체인 전반에 걸친 투자 및 파트너십.",
    highlight: true,
    badge: "Core Focus",
  },
  {
    icon: Gem,
    name: "광물 / 자원",
    nameEn: "Minerals & Resources",
    description: "배터리 핵심 광물(리튬, 니켈, 코발트 등) 관련 자원 개발 및 공급망 투자. 캐나다 광물 자원 네트워크 활용.",
    highlight: false,
    badge: null,
  },
  {
    icon: Heart,
    name: "헬스케어",
    nameEn: "Healthcare",
    description: "한국 헬스케어 기업의 북미·일본 시장 진출 지원. 의료기기, 디지털 헬스, 바이오 분야 투자 및 파트너 연결.",
    highlight: false,
    badge: null,
  },
  {
    icon: Building2,
    name: "일본 시장 진출",
    nameEn: "Japan Market Entry",
    description: "KMY를 통한 일본 시장 진출 컨설팅 및 실행 지원. 현지 파트너 연결, 규제 대응, 사업 개발 전반을 지원합니다.",
    highlight: false,
    badge: null,
  },
];

export default function IndustrySection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="industries" className="relative py-24 md:py-36 bg-[#0A0E14]">
      <div className="gold-line opacity-30" />

      <div className="container pt-0">
        <div className="text-center mb-16">
          <div className="section-label mb-4">Industry Focus</div>
          <h2 className="display-heading text-[#E8EDF2]" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            투자 및 실적 분야
          </h2>
          <p className="text-[#55606A] text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            2차전지 산업을 핵심 축으로, 글로벌 에너지 전환과 자원 공급망 분야에서 검증된 투자 역량을 보유합니다.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className={`relative p-8 border transition-all duration-300 card-glow group ${
                  ind.highlight
                    ? "border-[#D4A843]/30 bg-[#D4A843]/[0.04]"
                    : "border-white/[0.06] bg-[#0A0E14]"
                }`}
              >
                {ind.badge && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-[#D4A843]/20 border border-[#D4A843]/40 text-[#D4A843] text-[9px] font-mono tracking-widest uppercase">
                    {ind.badge}
                  </div>
                )}

                <div className={`w-10 h-10 border flex items-center justify-center mb-6 transition-colors ${
                  ind.highlight ? "border-[#D4A843]/50 group-hover:border-[#D4A843]" : "border-white/[0.1] group-hover:border-[#D4A843]/40"
                }`}>
                  <Icon size={18} className={ind.highlight ? "text-[#D4A843]" : "text-[#8B95A1] group-hover:text-[#D4A843] transition-colors"} />
                </div>

                <div className="text-[#55606A] text-[10px] tracking-widest uppercase mb-2 font-mono">{ind.nameEn}</div>
                <h3 className="text-[#E8EDF2] font-semibold text-lg mb-4">{ind.name}</h3>
                <p className="text-[#6B7580] text-xs leading-relaxed">{ind.description}</p>
              </div>
            );
          })}
        </div>

        {/* Battery company logos area */}
        <div className="mt-16 pt-12 border-t border-white/[0.06]">
          <div className="section-label text-center mb-8">Battery Industry Partners & Portfolio</div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["CANPS", "NPS", "J2L", "KMY", "Local Partners (CN)"].map((name) => (
              <div
                key={name}
                className="px-6 py-3 border border-white/[0.08] text-[#55606A] text-xs font-mono tracking-widest hover:border-[#D4A843]/30 hover:text-[#8B95A1] transition-all duration-200"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gold-line opacity-30 mt-0" />
    </section>
  );
}
