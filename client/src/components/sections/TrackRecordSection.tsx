/* TrackRecordSection — Dark Premium Finance
   Investment track record with portfolio items */

import { useRef, useEffect } from "react";
import { Zap, Gem, Heart, Globe } from "lucide-react";

const records = [
  {
    icon: Zap,
    sector: "2차전지",
    sectorEn: "Battery / EV",
    type: "직접 투자",
    region: "Korea → Canada",
    description: "2차전지 소재 기업 북미 진출 지원. 캐나다 CANPS를 통한 현지 파트너십 구축 및 직접 투자 집행.",
    status: "Active",
  },
  {
    icon: Gem,
    sector: "광물 / 자원",
    sectorEn: "Minerals & Resources",
    type: "직접 투자",
    region: "Canada",
    description: "캐나다 리튬·니켈 광물 자원 프로젝트 투자. 배터리 핵심 광물 공급망 확보를 위한 전략적 투자.",
    status: "Active",
  },
  {
    icon: Heart,
    sector: "헬스케어",
    sectorEn: "Healthcare",
    type: "투자 유치 지원",
    region: "Korea → Japan",
    description: "한국 헬스케어 기업의 일본 시장 진출. KMY를 통한 현지 파트너 연결 및 투자 유치 구조 설계.",
    status: "Completed",
  },
  {
    icon: Globe,
    sector: "일본 진출",
    sectorEn: "Japan Market",
    type: "사업 확장 실행",
    region: "Korea → Japan",
    description: "복수의 한국 기업 일본 시장 진출 실행. KMY 네트워크를 통한 현지 파트너 매칭 및 사업 개발.",
    status: "Ongoing",
  },
];

const statusColors: Record<string, string> = {
  Active: "text-[#4CAF50] border-[#4CAF50]/30 bg-[#4CAF50]/[0.06]",
  Completed: "text-[#8B95A1] border-white/[0.1] bg-white/[0.03]",
  Ongoing: "text-[#D4A843] border-[#D4A843]/30 bg-[#D4A843]/[0.06]",
};

export default function TrackRecordSection() {
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
    <section id="track-record" className="relative py-24 md:py-36 bg-[#080C10]">
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="section-label mb-6">Track Record</div>
            <h2 className="display-heading text-[#E8EDF2]" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              검증된
              <br />
              <span className="text-[#D4A843] italic">투자 실적</span>
            </h2>
          </div>
          <div className="lg:col-span-2 flex items-end">
            <div className="grid grid-cols-3 gap-8 w-full">
              {[
                { value: "$6M+", label: "Total Invested", sub: "₩9.7B+ 누적" },
                { value: "3+", label: "Fund Partners", sub: "협력 펀드사" },
                { value: "4", label: "Sectors", sub: "투자 분야" },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-[#D4A843]/20 pl-6">
                  <div className="data-number text-3xl text-[#D4A843] mb-1">{stat.value}</div>
                  <div className="text-[#E8EDF2] text-xs font-medium tracking-wider uppercase mb-0.5">{stat.label}</div>
                  <div className="text-[#55606A] text-[10px] font-mono">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-children">
          {records.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.sector}
                className="p-7 border border-white/[0.06] bg-[#0F1419]/60 card-glow group transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-white/[0.1] flex items-center justify-center group-hover:border-[#D4A843]/40 transition-colors">
                      <Icon size={16} className="text-[#8B95A1] group-hover:text-[#D4A843] transition-colors" />
                    </div>
                    <div>
                      <div className="text-[#E8EDF2] font-semibold text-sm">{r.sector}</div>
                      <div className="text-[#55606A] text-[10px] font-mono tracking-widest">{r.sectorEn}</div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono tracking-widest border px-2 py-1 ${statusColors[r.status]}`}>
                    {r.status}
                  </span>
                </div>

                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <div className="text-[#55606A] text-[9px] tracking-widest uppercase mb-1">Type</div>
                    <div className="text-[#D4A843] text-xs font-medium">{r.type}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[#55606A] text-[9px] tracking-widest uppercase mb-1">Region</div>
                    <div className="text-[#8B95A1] text-xs font-medium">{r.region}</div>
                  </div>
                </div>

                <p className="text-[#6B7580] text-xs leading-relaxed border-t border-white/[0.05] pt-4">
                  {r.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="text-[#3A4048] text-[10px] font-mono mt-8 leading-relaxed">
          * 투자 규모는 보수적 기준 $6M+ (₩9.7B+)이며, 프로젝트에 따라 직접 투자 또는 투자 유치 구조로 설계됩니다.
          개별 포트폴리오 정보는 기밀 유지 정책에 따라 일부 공개됩니다.
        </p>
      </div>
    </section>
  );
}
