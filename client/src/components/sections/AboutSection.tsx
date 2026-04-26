/* AboutSection — Dark Premium Finance
   Asymmetric 40/60 layout, boardroom image, company identity */

import { useRef, useEffect } from "react";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663594540257/9RVHVovYfgjdeSUNG5AnJK/about-bg-YfV9iqsczrUxB4XM4w6TuY.webp";

const entities = [
  { region: "Korea HQ", names: ["NPS", "J2L"], flag: "🇰🇷" },
  { region: "North America", names: ["CANPS"], flag: "🇨🇦" },
  { region: "Japan", names: ["KMY"], flag: "🇯🇵" },
  { region: "China", names: ["Local Partners"], flag: "🇨🇳" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-24 md:py-36 bg-[#080C10]" ref={sectionRef}>
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Left: Image + Entity cards */}
          <div
            ref={leftRef}
            className="lg:col-span-2 fade-in-up"
          >
            <div className="relative">
              {/* Main image */}
              <div
                className="w-full aspect-[3/4] bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${ABOUT_BG})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C10] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080C10]/30 to-transparent" />
              </div>

              {/* Entity overlay cards */}
              <div className="absolute -right-4 md:-right-8 top-8 flex flex-col gap-2">
                {entities.map((e) => (
                  <div
                    key={e.region}
                    className="bg-[#0F1419]/95 backdrop-blur-sm border border-white/[0.08] px-4 py-3 min-w-[140px]"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{e.flag}</span>
                      <span className="text-[#55606A] text-[10px] tracking-widest uppercase font-medium">{e.region}</span>
                    </div>
                    <div className="flex gap-2">
                      {e.names.map((n) => (
                        <span key={n} className="text-[#D4A843] font-mono text-xs font-semibold">{n}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            ref={rightRef}
            className="lg:col-span-3 fade-in-up"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="section-label mb-6">About Us</div>
            <h2 className="display-heading text-[#E8EDF2] mb-8" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
              단순 자문이 아닌
              <br />
              <span className="text-[#D4A843] italic">직접 투자와 실행</span>
            </h2>

            <div className="space-y-6 text-[#8B95A1] text-base leading-relaxed font-light">
              <p>
                우리는 한국 본사를 중심으로 캐나다, 일본, 중국까지 확장된 글로벌 투자 및 사업 확장 지원 그룹입니다.
                스타트업과 중소기업이 성장 과정에서 겪는 병목을 해소하고, 실질적인 자본과 네트워크를 연결합니다.
              </p>
              <p>
                컨설팅 회사가 아닙니다. 우리는 직접 투자하고, 직접 실행합니다. 누적 직접 투자 규모 <span className="text-[#E8EDF2]">$6M+ (₩9.7B+)</span>와
                3개 이상의 협력 펀드사를 통해 프로젝트 규모에 맞는 투자 구조를 설계합니다.
              </p>
              <p>
                2차전지 산업을 핵심 축으로, 광물/자원, 헬스케어, 일본 시장 진출 분야에서 검증된 실적을 보유하고 있습니다.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-white/[0.06]">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "설립 거점", value: "한국 (Korea HQ)" },
                  { label: "글로벌 네트워크", value: "4개국 직접 운영" },
                  { label: "핵심 산업", value: "2차전지 / 배터리" },
                  { label: "투자 방식", value: "직접 투자 + 유치" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-[#55606A] text-[10px] tracking-widest uppercase mb-1 font-medium">{item.label}</div>
                    <div className="text-[#E8EDF2] text-sm font-medium">{item.value}</div>
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
