/* PartnersSection — Dark Premium Finance
   Global Network & Strategic Partners — cross-industry, execution-focused */

import { useRef, useEffect } from "react";

const partnerEntities = [
  { region: "Korea", regionKo: "한국", regionJa: "韓国", entities: ["NPS", "J2L"], type: "HQ & Affiliate", typeKo: "본사 & 관계사" },
  { region: "Canada", regionKo: "캐나다", regionJa: "カナダ", entities: ["CANPS"], type: "North America", typeKo: "북미 거점" },
  { region: "Japan", regionKo: "일본", regionJa: "日本", entities: ["KMY"], type: "Japan Branch", typeKo: "일본 지사" },
  { region: "China", regionKo: "중국", regionJa: "中国", entities: ["Local Partners"], type: "Partner Network", typeKo: "파트너사 운영" },
  { region: "Fund Partners", regionKo: "펀드 파트너", regionJa: "ファンドパートナー", entities: ["3+ Funds"], type: "Capital Network", typeKo: "자본 네트워크" },
];

const capabilities = [
  {
    label: "Direct Investment",
    labelKo: "직접 투자",
    labelJa: "直接投資",
    desc: "Capital deployment from our own balance sheet",
    descKo: "자체 재원을 통한 직접 투자 실행",
  },
  {
    label: "Fundraising Support",
    labelKo: "투자 유치 지원",
    labelJa: "資金調達支援",
    desc: "Access to 3+ external fund partners",
    descKo: "3개 이상 외부 펀드 파트너 연계",
  },
  {
    label: "Market Entry",
    labelKo: "시장 진출",
    labelJa: "市場参入",
    desc: "On-the-ground execution in 4 countries",
    descKo: "4개국 현지 직접 실행",
  },
  {
    label: "Industry Access",
    labelKo: "산업 접근",
    labelJa: "産業アクセス",
    desc: "Battery, resources, healthcare, and beyond",
    descKo: "배터리, 자원, 헬스케어 및 다산업",
  },
];

export default function PartnersSection() {
  const contentRef = useRef<HTMLDivElement>(null);
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
    if (contentRef.current) observer.observe(contentRef.current);
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners" className="relative py-24 md:py-36 bg-[#080C10]">
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="relative z-10 container">
        {/* Header */}
        <div ref={headerRef} className="fade-in-up mb-16 md:mb-20">
          <div className="section-label mb-2">Network</div>
          <div className="ml-annotation mb-6">
            <span className="ml-ko">네트워크</span>
            <span className="ml-ja">ネットワーク</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="section-heading" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
                Global Network &amp;
                <br />
                <span className="text-[#D4A843] italic">Strategic Partners</span>
              </h2>
              <div className="ml-annotation mt-3">
                <span className="ml-ko">글로벌 네트워크 및 전략적 파트너</span>
                <span className="ml-ja">グローバルネットワーク・戦略的パートナー</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[#D4A843]/50" />
                <p className="text-[#C8A84B] text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  We collaborate across investment, industry, and expansion.
                </p>
              </div>
              <p className="body-text mb-2">
                Building working relationships — not just referrals — across Korea, Canada, Japan, and China.
              </p>
              <div className="ml-annotation">
                <span className="ml-ko">한국, 캐나다, 일본, 중국 전반에 걸쳐 단순 소개가 아닌 실질적인 협업 관계를 구축합니다.</span>
                <span className="ml-ja">韓国・カナダ・日本・中国全域で、単なる紹介ではなく実質的な協業関係を構築します。</span>
              </div>
            </div>
          </div>
        </div>

        <div ref={contentRef} className="fade-in-up">
          {/* Partner entity strip */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/[0.04] mb-6">
            {partnerEntities.map((p) => (
              <div
                key={p.region}
                className="bg-[#080C10] p-6 text-center group card-glow border border-transparent transition-all duration-300 flex flex-col items-center justify-center"
                style={{ minHeight: "130px" }}
              >
                <div className="text-[#55606A] text-[9px] tracking-widest uppercase font-mono mb-1">{p.type}</div>
                <div className="ml-ko text-[#3A4048] mb-2" style={{ fontSize: "0.6rem" }}>{p.typeKo}</div>
                <div className="text-[#C8D0D8] text-sm font-semibold tracking-wide mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>{p.region}</div>
                <div className="ml-annotation mb-3 items-center">
                  <span className="ml-ko">{p.regionKo}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-1">
                  {p.entities.map((e) => (
                    <span key={e} className="text-[#D4A843] font-mono text-xs border border-[#D4A843]/25 px-2 py-0.5">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Capabilities grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {capabilities.map((c) => (
              <div
                key={c.label}
                className="p-6 border border-white/[0.06] bg-[#0A0E14]/60 group hover:border-[#D4A843]/20 transition-all duration-300 flex flex-col"
                style={{ minHeight: "140px" }}
              >
                <div className="w-1 h-4 bg-[#D4A843]/60 mb-4 flex-shrink-0" />
                <div className="card-title mb-0.5">{c.label}</div>
                <div className="ml-inline mb-3">
                  <span className="ml-ko">{c.labelKo}</span>
                  <span className="ml-ja">{c.labelJa}</span>
                </div>
                <div className="card-body mt-auto">{c.desc}</div>
                <div className="ml-ko mt-1">{c.descKo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
