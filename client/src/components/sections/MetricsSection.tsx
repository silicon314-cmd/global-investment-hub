/* MetricsSection — Dark Premium Finance
   Unified card height, multilingual annotations, count-up numbers */

import { useRef, useEffect, useState } from "react";

const metrics = [
  {
    value: 6,
    prefix: "$",
    suffix: "M+",
    label: "Invested",
    labelKo: "누적 투자",
    labelJa: "累計投資",
    sublabel: "₩9.7B+ Direct Investment",
    sublabelKo: "직접 투자 기준",
    description: "Conservative basis $6M+. Structured as direct investment or fundraising depending on the project.",
    descriptionKo: "보수적 기준 $6M+. 프로젝트에 따라 직접 투자 또는 투자 유치 구조로 설계됩니다.",
  },
  {
    value: 3,
    prefix: "",
    suffix: "+",
    label: "Fund Partners",
    labelKo: "펀드 파트너",
    labelJa: "ファンドパートナー",
    sublabel: "Strategic Capital Network",
    sublabelKo: "전략적 자본 네트워크",
    description: "Access to external fund partners for expanded capital deployment beyond direct investment.",
    descriptionKo: "직접 투자 외 확장된 자본 운용을 위한 외부 펀드 파트너 접근 가능.",
  },
  {
    value: 4,
    prefix: "",
    suffix: "",
    label: "Countries",
    labelKo: "진출 국가",
    labelJa: "展開国",
    sublabel: "Korea · Canada · Japan · China",
    sublabelKo: "한국 · 캐나다 · 일본 · 중국",
    description: "Directly operated entities and partner networks across four countries.",
    descriptionKo: "4개국에 걸친 직접 운영 법인 및 파트너 네트워크.",
  },
  {
    value: 0,
    prefix: "",
    suffix: "",
    label: "Battery Core",
    labelKo: "2차전지 중심",
    labelJa: "二次電池中心",
    sublabel: "Cross-Industry Execution",
    sublabelKo: "다산업 실행",
    description: "Battery supply chain as core focus, with active execution across healthcare, resources, and market entry.",
    descriptionKo: "2차전지 공급망을 핵심으로, 헬스케어·자원·시장 진출 전반에서 실행합니다.",
    isText: true,
    textValue: "Battery",
  },
];

function CountUpNumber({
  target, prefix, suffix, start, isText, textValue,
}: {
  target: number; prefix: string; suffix: string; start: boolean; isText?: boolean; textValue?: string;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start || isText) return;
    const duration = 2000;
    const startTime = performance.now();
    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [start, target, isText]);

  if (isText) {
    return <span className="data-number text-4xl md:text-5xl text-[#D4A843]">{textValue}</span>;
  }
  return (
    <span className="data-number text-4xl md:text-5xl text-[#D4A843]">
      {prefix}{current}{suffix}
    </span>
  );
}

export default function MetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section id="metrics" ref={sectionRef} className="relative py-20 md:py-28 bg-[#0A0E14]">
      <div className="gold-line opacity-40" />

      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mb-2">By The Numbers</div>
          <div className="ml-annotation mb-4 justify-center flex gap-3">
            <span className="ml-ko">주요 수치</span>
            <span className="ml-ja">主要数値</span>
          </div>
          <h2 className="section-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            Proven Capacity to Invest &amp; Execute
          </h2>
          <div className="ml-annotation mt-2 justify-center flex gap-3">
            <span className="ml-ko">검증된 투자 및 실행 역량</span>
            <span className="ml-ja">実証された投資・実行能力</span>
          </div>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 h-px bg-[#D4A843]/40" />
            <p className="text-[#C8A84B] text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              $6M+ Invested (&#8361;9.7B+) &middot; 3+ Fund Partners &middot; 4 Countries
            </p>
            <div className="w-12 h-px bg-[#D4A843]/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-[#0A0E14] p-8 md:p-10 card-glow border border-transparent transition-all duration-300 group flex flex-col"
              style={{ minHeight: "260px" }}
            >
              <div className="mb-2">
                <CountUpNumber
                  target={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  start={started}
                  isText={m.isText}
                  textValue={m.textValue}
                />
              </div>
              <div className="card-title mb-0.5">{m.label}</div>
              <div className="ml-inline mb-1">
                <span className="ml-ko">{m.labelKo}</span>
                <span className="ml-ja">{m.labelJa}</span>
              </div>
              <div className="text-[#D4A843] text-xs font-mono mb-1">{m.sublabel}</div>
              {m.sublabelKo && <div className="ml-ko mb-3">{m.sublabelKo}</div>}
              <div className="card-body border-t border-white/[0.05] pt-3 mt-auto">
                {m.description}
              </div>
              <div className="ml-ko mt-1">{m.descriptionKo}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="gold-line opacity-40 mt-0" />
    </section>
  );
}
