/* ProcessSection — Dark Premium Finance
   Step-by-step engagement process */

import { useRef, useEffect } from "react";

const steps = [
  {
    number: "01",
    title: "초기 상담",
    titleEn: "Initial Consultation",
    description: "사업 현황, 목표 시장, 필요 자원을 파악합니다. 투자 가능성 및 사업 확장 방향을 함께 검토합니다.",
  },
  {
    number: "02",
    title: "구조 설계",
    titleEn: "Structure Design",
    description: "직접 투자 또는 투자 유치, 파트너십 구조를 프로젝트에 맞게 설계합니다. 진출 시장별 최적 경로를 제안합니다.",
  },
  {
    number: "03",
    title: "파트너 연결",
    titleEn: "Partner Matching",
    description: "한국, 캐나다, 일본, 중국 네트워크에서 최적의 파트너를 연결합니다. 협력 펀드사 소개도 이 단계에서 진행됩니다.",
  },
  {
    number: "04",
    title: "실행 지원",
    titleEn: "Execution Support",
    description: "투자 집행, 현지 법인 설립, 파트너십 계약까지 실행 전 과정을 직접 지원합니다.",
  },
  {
    number: "05",
    title: "사후 관리",
    titleEn: "Post-Investment",
    description: "투자 후 사업 성과 모니터링, 추가 지원 필요 시 네트워크 연결 및 후속 투자 검토를 지속합니다.",
  },
];

export default function ProcessSection() {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (stepsRef.current) observer.observe(stepsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative py-24 md:py-36 bg-[#0A0E14]">
      <div className="gold-line opacity-30" />

      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mb-4">Our Process</div>
          <h2 className="display-heading text-[#E8EDF2]" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            투자부터 실행까지
          </h2>
          <p className="text-[#55606A] text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            체계적인 프로세스를 통해 투자 구조 설계부터 실행까지 전 과정을 지원합니다.
          </p>
        </div>

        <div ref={stepsRef} className="relative stagger-children">
          {/* Connecting line */}
          <div className="absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4A843]/20 to-transparent hidden md:block" />

          <div className="space-y-4 md:space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content side */}
                <div className={`md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div
                    className={`p-6 border border-white/[0.06] bg-[#0A0E14] card-glow group transition-all duration-300 ${
                      i % 2 === 0 ? "" : ""
                    }`}
                  >
                    <div className="text-[#55606A] text-[10px] tracking-widest uppercase font-mono mb-1">{step.titleEn}</div>
                    <h3 className="text-[#E8EDF2] font-semibold text-lg mb-3">{step.title}</h3>
                    <p className="text-[#6B7580] text-xs leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center number */}
                <div className="hidden md:flex md:w-[10%] items-center justify-center">
                  <div className="w-10 h-10 bg-[#0A0E14] border border-[#D4A843]/40 flex items-center justify-center z-10">
                    <span className="text-[#D4A843] font-mono text-xs font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Mobile number */}
                <div className="md:hidden flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 border border-[#D4A843]/40 flex items-center justify-center">
                    <span className="text-[#D4A843] font-mono text-xs font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Empty side */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gold-line opacity-30 mt-0" />
    </section>
  );
}
