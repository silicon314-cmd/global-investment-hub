/* SelectedInvestmentsSection — Dark Premium Finance
   Real estate assets directly invested by KMY in Tokyo
   Photos: actual property images */

import { useRef, useEffect, useState } from "react";
import { MapPin } from "lucide-react";

const investments = [
  {
    id: "bakurocho",
    title: "Bakurocho Asset",
    titleKo: "바쿠로쵸 자산",
    titleJa: "馬喰町アセット",
    location: "Chuo-ku, Tokyo",
    locationKo: "도쿄 중앙구",
    locationJa: "東京都中央区",
    entity: "KMY",
    type: "Direct Investment",
    typeKo: "직접 투자",
    description: "Mixed-use residential asset located in the historic Bakurocho district of Chuo-ku, Tokyo. Strategic acquisition in a high-demand urban corridor.",
    descriptionKo: "도쿄 중앙구 바쿠로쵸 역사 지구에 위치한 복합 주거 자산. 수요가 높은 도심 핵심 지역 전략적 취득.",
    images: [
      { src: "/manus-storage/bakurocho-day_005c6136.jpg", caption: "Daytime exterior — Bakurocho, Chuo-ku", captionKo: "주간 외관" },
      { src: "/manus-storage/bakurocho-night_5ed02029.jpg", caption: "Night view — illuminated facade", captionKo: "야간 외관" },
    ],
    tags: ["Residential", "Chuo-ku", "KMY Direct"],
    tagsKo: ["주거용", "중앙구", "KMY 직접 투자"],
  },
  {
    id: "shimomeguro",
    title: "Shimomeguro Asset",
    titleKo: "시모메구로 자산",
    titleJa: "下目黒アセット",
    location: "Meguro-ku, Tokyo",
    locationKo: "도쿄 메구로구",
    locationJa: "東京都目黒区",
    entity: "KMY",
    type: "Direct Investment",
    typeKo: "직접 투자",
    description: "Premium residential building in Shimomeguro — one of Tokyo's most sought-after residential neighborhoods with strong rental demand.",
    descriptionKo: "도쿄 메구로구 시모메구로 프리미엄 주거 건물. 임대 수요가 강한 도쿄 최고 인기 주거 지역.",
    images: [
      { src: "/manus-storage/shimomeguro-sign_9c5473d5.jpg", caption: "Building entrance — Maison du Dix-Huit", captionKo: "건물 입구" },
      { src: "/manus-storage/shimomeguro-street_d8931e82.jpg", caption: "Street view — Shimomeguro residential block", captionKo: "거리 전경" },
    ],
    tags: ["Residential", "Meguro-ku", "KMY Direct"],
    tagsKo: ["주거용", "메구로구", "KMY 직접 투자"],
  },
];

export default function SelectedInvestmentsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState<{ [key: string]: number }>({ bakurocho: 0, shimomeguro: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.07 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="investments" className="relative py-20 md:py-32 bg-[#080C10]">
      <div className="gold-line opacity-20" />
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="relative z-10 container">
        {/* Header */}
        <div ref={headerRef} className="fade-in-up mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <div className="section-label mb-2">Selected Investments</div>
              <div className="ml-annotation mb-5">
                <span className="ml-ko">KMY 직접 투자 자산</span>
                <span className="ml-ja">KMY直接投賄資産</span>
              </div>
              <h2 className="section-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Directly invested assets
                <br />
                <span className="text-[#D4A843] italic">under KMY.</span>
              </h2>
            </div>
            <div>
              <p className="body-text leading-relaxed">
                Real estate assets directly acquired and managed through KMY in Tokyo. These are not advisory positions — they represent actual capital deployed and assets under management.
              </p>
              <p className="ml-ko text-[0.72rem] leading-relaxed text-[#4A5560] mt-2">
                관계사를 통해 직접 투자하고 운영하는 자산입니다. 단순 자문 포지션이 아닌, 실제 자본이 투입되고 운용 중인 자산입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Investment cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {investments.map((inv) => {
            const imgIdx = activeImg[inv.id] ?? 0;
            const currentImg = inv.images[imgIdx];
            return (
            <div
              key={inv.id}
              className="group border border-white/[0.07] hover:border-[#D4A843]/20 transition-all duration-400 overflow-hidden"
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: "260px" }}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${currentImg.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C10]/80 via-transparent to-transparent" />

                {/* Entity badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-[#D4A843] px-2.5 py-1">
                    <span className="text-[#080C10] text-[9px] font-mono font-semibold tracking-widest uppercase">{inv.entity}</span>
                  </div>
                </div>

                {/* Type badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-[#080C10]/80 border border-white/[0.1] px-2.5 py-1 backdrop-blur-sm">
                    <span className="text-[#8B95A1] text-[9px] font-mono tracking-widest uppercase">{inv.type}</span>
                    <span className="ml-ko text-[#3A4048] ml-1.5">{inv.typeKo}</span>
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-[#8B95A1] text-[10px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {currentImg.caption} <span className="ml-ko text-[#4A5560]">· {currentImg.captionKo}</span>
                  </p>
                </div>
              </div>

              {/* Thumbnail switcher */}
              <div className="flex gap-2 px-4 pt-3 pb-1">
                {inv.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg((prev) => ({ ...prev, [inv.id]: idx }))}
                    className={`relative overflow-hidden transition-all duration-300 ${
                      imgIdx === idx
                        ? "border border-[#D4A843]/60 opacity-100"
                        : "border border-white/10 opacity-50 hover:opacity-80"
                    }`}
                    style={{ width: 52, height: 36 }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${img.src})` }}
                    />
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 bg-[#0A0E14]">
                {/* Location */}
                <div className="flex items-center gap-1.5 mb-3">
                  <MapPin size={10} className="text-[#D4A843]/60" />
                  <span className="text-[10px] font-mono tracking-wide text-[#55606A] uppercase">{inv.location}</span>
                  <span className="ml-ko text-[9px] text-[#3A4048]">{inv.locationKo}</span>
                </div>

                {/* Title */}
                <h3 className="card-title text-[#E8EDF2] mb-1" style={{ fontSize: "1.1rem" }}>
                  {inv.title}
                </h3>
                <div className="ml-annotation mb-3">
                  <span className="ml-ko">{inv.titleKo}</span>
                  <span className="ml-ja">{inv.titleJa}</span>
                </div>

                {/* Description */}
                <p className="card-body leading-relaxed mb-3">{inv.description}</p>
                <p className="ml-ko text-[0.68rem] leading-relaxed text-[#3A4048]">{inv.descriptionKo}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/[0.04]">
                  {inv.tags.map((tag, i) => (
                    <div key={tag} className="flex items-center gap-1">
                      <span className="text-[9px] font-mono tracking-wide text-[#55606A] border border-white/[0.06] px-2 py-0.5">{tag}</span>
                      <span className="ml-ko text-[8px] text-[#2A3038]">{inv.tagsKo[i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
          })}
        </div>

        {/* Note */}
        <div className="mt-8 p-4 border border-white/[0.04] bg-[#0A0E14]/50">
          <p className="text-[10px] font-mono tracking-wide text-[#3A4048] text-center uppercase">
            Assets directly held and operated by KMY · Japan Branch
            <span className="block ml-ko normal-case tracking-normal text-[9px] mt-0.5">KMY 일본 지사가 직접 보유 및 운영하는 자산</span>
          </p>
        </div>
      </div>

      <div className="gold-line opacity-20 mt-8" />
    </section>
  );
}
