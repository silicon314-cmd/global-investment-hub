/* CanadaSection — Dark Premium Finance
   Canada as North America battery hub, full-width dark panel */

import { useRef, useEffect } from "react";
import { MapPin, Zap, Gem, ArrowRight } from "lucide-react";

const CANADA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663594540257/9RVHVovYfgjdeSUNG5AnJK/canada-battery-e4BKYWFLFjSBRi4N6e5ubh.webp";

const advantages = [
  {
    icon: Zap,
    title: "배터리 밸류체인 거점",
    desc: "북미 2차전지 소재·부품·장비 기업의 캐나다 진출 실행 지원",
  },
  {
    icon: Gem,
    title: "핵심 광물 자원",
    desc: "리튬, 니켈, 코발트 등 배터리 핵심 광물 캐나다 자원 네트워크",
  },
  {
    icon: MapPin,
    title: "CANPS 현지 운영",
    desc: "캐나다 현지 법인 CANPS를 통한 직접 사업 실행 및 파트너 연결",
  },
];

export default function CanadaSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="canada" className="relative py-24 md:py-36 bg-[#0A0E14] overflow-hidden">
      <div className="gold-line opacity-30" />

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, #D4A843 0%, transparent 70%)"
        }}
      />

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div ref={imageRef} className="fade-in-up order-2 lg:order-1">
            <div className="relative">
              <div
                className="w-full aspect-[4/3] bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${CANADA_IMG})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E14]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14]/60 to-transparent" />
              </div>

              {/* CANPS badge */}
              <div className="absolute top-6 left-6 bg-[#0A0E14]/90 backdrop-blur-sm border border-[#D4A843]/40 px-4 py-3">
                <div className="text-[#55606A] text-[9px] tracking-widest uppercase font-mono mb-1">North America Entity</div>
                <div className="text-[#D4A843] font-mono text-lg font-bold tracking-wider">CANPS</div>
                <div className="text-[#6B7580] text-[10px] mt-1">🇨🇦 Canada Operations</div>
              </div>

              {/* Bottom stat */}
              <div className="absolute bottom-6 right-6 bg-[#0A0E14]/90 backdrop-blur-sm border border-white/[0.1] px-4 py-3 text-right">
                <div className="text-[#D4A843] font-mono text-xl font-bold">$6M+</div>
                <div className="text-[#55606A] text-[9px] tracking-widest uppercase font-mono">Battery Sector</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="fade-in-up order-1 lg:order-2" style={{ transitionDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🇨🇦</span>
              <div className="section-label">Canada Battery Hub</div>
            </div>

            <h2 className="display-heading text-[#E8EDF2] mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              북미 2차전지
              <br />
              <span className="text-[#D4A843] italic">진출 거점</span>
            </h2>

            <p className="text-[#8B95A1] text-base leading-relaxed font-light mb-10">
              캐나다는 북미 배터리 산업의 핵심 거점입니다. CANPS를 통해 한국 기업의 북미 배터리 시장 진입을 직접 실행합니다.
              리튬, 니켈 등 핵심 광물 자원부터 배터리 제조 밸류체인까지 전방위 지원이 가능합니다.
            </p>

            <div className="space-y-6 mb-10">
              {advantages.map((adv) => {
                const Icon = adv.icon;
                return (
                  <div key={adv.title} className="flex gap-4">
                    <div className="w-9 h-9 border border-[#D4A843]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} className="text-[#D4A843]" />
                    </div>
                    <div>
                      <div className="text-[#E8EDF2] font-medium text-sm mb-1">{adv.title}</div>
                      <div className="text-[#6B7580] text-xs leading-relaxed">{adv.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-3 text-[#D4A843] text-sm tracking-wider uppercase hover:gap-5 transition-all duration-200 group"
            >
              <span>캐나다 진출 상담</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="gold-line opacity-30 mt-0" />
    </section>
  );
}
