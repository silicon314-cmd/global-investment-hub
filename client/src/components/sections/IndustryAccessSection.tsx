/* IndustryAccessSection — Dark Premium Finance
   Industry Access: Direct engagement with global battery leaders
   Photos: Panasonic (Japan), LG Chem Research Park (Korea),
           Blue Energy (Japan), Samsung SDI (Malaysia) */

import { useRef, useEffect } from "react";

const industryPartners = [
  {
    src: "/manus-storage/panasonic-visit_c3896a06.jpg",
    company: "Panasonic",
    companyJa: "パナソニック",
    location: "Japan",
    locationKo: "일본",
    desc: "Battery division engagement — Panasonic / SANYO Electric",
    descKo: "파나소닉 배터리 사업부 방문",
    category: "Battery Manufacturer",
    categoryKo: "배터리 제조사",
  },
  {
    src: "/manus-storage/lgchem-research_fe7b84a8.jpg",
    company: "LG Chem",
    companyKo: "LG화학",
    location: "Korea",
    locationKo: "한국",
    desc: "LG Chem Research Park — battery materials & technology access",
    descKo: "LG화학 연구소 방문 · 배터리 소재 기술",
    category: "Battery Materials",
    categoryKo: "배터리 소재",
  },
  {
    src: "/manus-storage/blueenergy-visit_38001cee.jpg",
    company: "Blue Energy",
    companyJa: "ブルーエナジー",
    location: "Japan",
    locationKo: "일본",
    desc: "Blue Energy — Honda-GS Yuasa joint battery venture",
    descKo: "블루에너지 방문 · 혼다-GS유아사 합작 배터리",
    category: "EV Battery",
    categoryKo: "전기차 배터리",
  },
  {
    src: "/manus-storage/samsung-sdi_77685a38.jpg",
    company: "Samsung SDI",
    companyKo: "삼성SDI",
    location: "Malaysia",
    locationKo: "말레이시아",
    desc: "Samsung SDI Energy — global manufacturing facility visit",
    descKo: "삼성SDI 글로벌 생산 시설 방문",
    category: "Battery Manufacturer",
    categoryKo: "배터리 제조사",
  },
];

export default function IndustryAccessSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.06 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="industry" className="relative py-20 md:py-32 bg-[#060A0D]">
      <div className="gold-line opacity-20" />
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="relative z-10 container">
        {/* Header */}
        <div ref={headerRef} className="fade-in-up mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <div className="section-label mb-2">Industry Access</div>
              <div className="ml-annotation mb-5">
                <span className="ml-ko">배터리 산업 리더와의 직접 네트워크</span>
                <span className="ml-ja">バッテリー業界リーダーとの直接アクセス</span>
              </div>
              <h2 className="section-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Direct engagement with
                <br />
                <span className="text-[#D4A843] italic">battery industry leaders.</span>
              </h2>
            </div>
            <div>
              <p className="body-text leading-relaxed">
                Not introductions — direct access. Our relationships with Panasonic, LG Chem, Blue Energy, and Samsung SDI were built through years of in-person visits, factory tours, and technical discussions.
              </p>
              <p className="ml-ko text-[0.72rem] leading-relaxed text-[#4A5560] mt-2">
                세계 주요 배터리 제조사 및 소재 공급사와의 네트워크는 수년간의 직접 현장 방문을 통해 구축되었습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 2×2 Photo Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children"
        >
          {industryPartners.map((partner) => (
            <div
              key={partner.company}
              className="group relative overflow-hidden border border-white/[0.06] hover:border-[#D4A843]/30 transition-all duration-500"
              style={{ height: "320px" }}
            >
              {/* Photo */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${partner.src})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060A0D]/95 via-[#060A0D]/30 to-transparent" />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="inline-block px-2.5 py-1 text-[9px] tracking-widest uppercase border border-[#D4A843]/40 text-[#D4A843] bg-[#060A0D]/70"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {partner.category}
                </span>
              </div>

              {/* Location badge */}
              <div className="absolute top-4 right-4">
                <span
                  className="inline-block px-2.5 py-1 text-[9px] tracking-widest uppercase border border-white/10 text-[#8B95A1] bg-[#060A0D]/70"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {partner.location}
                </span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-baseline gap-2 mb-1">
                  <h3
                    className="text-[#E8EDF2] text-lg font-bold leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {partner.company}
                  </h3>
                  {(partner.companyKo || partner.companyJa) && (
                    <span className="ml-ko text-[#8B95A1] text-[11px]">
                      {partner.companyKo || partner.companyJa}
                    </span>
                  )}
                </div>
                <p
                  className="text-[#8B95A1] text-[11px] tracking-wide mb-1 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {partner.desc}
                </p>
                <p className="ml-ko text-[9px] text-[#4A5560]">{partner.descKo}</p>
              </div>

              {/* Hover gold line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4A843] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 pt-6 border-t border-white/[0.05]">
          <p
            className="text-[#4A5560] text-[11px] tracking-wide text-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Direct engagement with global battery manufacturers — not introductions, but on-site relationships.
          </p>
          <p className="ml-ko text-[9px] text-[#3A4048] text-center mt-1">
            소개가 아닌 직접 현장 방문을 통해 구축된 글로벌 배터리 제조사 네트워크
          </p>
        </div>
      </div>

      <div className="gold-line opacity-20 mt-8" />
    </section>
  );
}
