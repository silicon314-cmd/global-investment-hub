/* NetworkSection — Dark Premium Finance
   Global network visualization with location cards */

import { useRef, useEffect } from "react";

const NETWORK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663594540257/9RVHVovYfgjdeSUNG5AnJK/global-network-4TXnMDkCSnZMzsEZFr7SXs.webp";

const offices = [
  {
    country: "Korea",
    flag: "🇰🇷",
    role: "Headquarters",
    entities: ["NPS", "J2L"],
    description: "한국 본사. 전체 그룹의 전략 및 투자 의사결정 중심.",
    highlight: true,
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    role: "North America Hub",
    entities: ["CANPS"],
    description: "북미 2차전지 진출 거점. 캐나다 광물 자원 및 배터리 밸류체인 중심.",
    highlight: false,
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    role: "Japan Operations",
    entities: ["KMY"],
    description: "일본 시장 진출 및 현지 파트너십 운영. 한국 기업의 일본 진출 실행.",
    highlight: false,
  },
  {
    country: "China",
    flag: "🇨🇳",
    role: "China Network",
    entities: ["Local Partners"],
    description: "현지 파트너사를 통한 중국 시장 네트워크 운영.",
    highlight: false,
  },
];

export default function NetworkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="network" className="relative py-24 md:py-36 bg-[#080C10]" ref={sectionRef}>
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div ref={contentRef} className="fade-in-up">
            <div className="section-label mb-6">Global Network</div>
            <h2 className="display-heading text-[#E8EDF2] mb-8" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
              4개국
              <br />
              <span className="text-[#D4A843] italic">직접 운영 네트워크</span>
            </h2>
            <p className="text-[#8B95A1] text-base leading-relaxed font-light mb-10">
              한국 본사를 중심으로 캐나다, 일본, 중국에 직접 운영 거점을 보유합니다.
              각 지역의 현지 법인 및 파트너사를 통해 실질적인 사업 실행이 가능합니다.
            </p>

            <div className="space-y-4">
              {offices.map((office) => (
                <div
                  key={office.country}
                  className={`p-5 border transition-all duration-300 card-glow group ${
                    office.highlight
                      ? "border-[#D4A843]/30 bg-[#D4A843]/[0.03]"
                      : "border-white/[0.06] bg-[#0F1419]/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{office.flag}</span>
                      <div>
                        <div className="text-[#E8EDF2] font-semibold text-sm">{office.country}</div>
                        <div className="text-[#55606A] text-[10px] tracking-widest uppercase font-mono">{office.role}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {office.entities.map((e) => (
                        <span key={e} className="text-[#D4A843] font-mono text-xs border border-[#D4A843]/30 px-2 py-0.5">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[#6B7580] text-xs leading-relaxed pl-9">{office.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Network image */}
          <div className="fade-in-up" style={{ transitionDelay: "0.2s" }}>
            <div className="relative">
              <div
                className="w-full aspect-video bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${NETWORK_IMG})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C10]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080C10]/40 to-transparent" />
              </div>

              {/* Connection lines decoration */}
              <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-4">
                {["KR", "CA", "JP", "CN"].map((code) => (
                  <div key={code} className="flex flex-col items-center gap-1">
                    <div className="w-px h-6 bg-gradient-to-b from-[#D4A843]/60 to-transparent" />
                    <span className="text-[#D4A843] font-mono text-[10px] tracking-widest">{code}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
