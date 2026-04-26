/* EntityModal — Dark Premium Finance
   Full-screen slide-over modal with real photo gallery and captions */

import { useEffect, useState } from "react";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Entity, relationColors } from "@/data/entities";

interface EntityModalProps {
  entity: Entity | null;
  onClose: () => void;
}

export default function EntityModal({ entity, onClose }: EntityModalProps) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    setActiveImg(0);
  }, [entity]);

  useEffect(() => {
    if (entity) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [entity]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!entity) return null;

  const colors = relationColors[entity.relation];
  const images = entity.images && entity.images.length > 0
    ? entity.images
    : [{ src: entity.image, caption: entity.imageCaption, captionKo: entity.imageCaptionKo }];

  const currentImage = images[activeImg];

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#080C10]/92 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0A0E14] border border-white/[0.08] shadow-2xl mx-4 mb-4 md:mb-0">
        {/* Gold top line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4A843] to-transparent" />

        {/* Photo section */}
        <div className="relative">
          <div
            className="h-52 md:h-72 bg-cover bg-center relative transition-all duration-500"
            style={{ backgroundImage: `url(${currentImage.src})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/50 to-[#0A0E14]/10" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 border border-white/20 flex items-center justify-center text-[#8B95A1] hover:text-[#E8EDF2] hover:border-white/40 transition-all bg-[#080C10]/60"
            >
              <X size={14} />
            </button>

            {/* Image nav arrows — only if multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImg((p) => (p - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 border border-white/20 flex items-center justify-center text-[#8B95A1] hover:text-[#E8EDF2] bg-[#080C10]/60 transition-all"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={() => setActiveImg((p) => (p + 1) % images.length)}
                  className="absolute right-14 top-1/2 -translate-y-1/2 w-8 h-8 border border-white/20 flex items-center justify-center text-[#8B95A1] hover:text-[#E8EDF2] bg-[#080C10]/60 transition-all"
                >
                  <ChevronRight size={14} />
                </button>
              </>
            )}

            {/* Entity name overlay */}
            <div className="absolute bottom-6 left-6 right-16">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{entity.flag}</span>
                <span className={`text-[9px] font-mono tracking-widest uppercase px-2 py-1 border ${colors.badge}`}>
                  {entity.relationLabel}
                  <span className="ml-1.5 opacity-60">{entity.relationLabelKo}</span>
                </span>
              </div>
              <h2 className="display-heading text-[#E8EDF2]" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                {entity.name}
              </h2>
              <div className="ml-annotation mt-1">
                <span className="ml-ko">{entity.nameKo}</span>
                <span className="ml-ja">{entity.nameJa}</span>
              </div>
            </div>
          </div>

          {/* Caption bar */}
          <div className="bg-[#0F1419] border-b border-white/[0.05] px-6 py-2.5 flex items-center justify-between">
            <div>
              <span className="text-[#8B95A1] text-[11px] font-mono tracking-wide">{currentImage.caption}</span>
              <span className="ml-ko text-[#3A4048] ml-2">{currentImage.captionKo}</span>
            </div>
            {images.length > 1 && (
              <div className="flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-1.5 h-1.5 transition-all ${i === activeImg ? "bg-[#D4A843]" : "bg-white/20 hover:bg-white/40"}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 space-y-7">
          {/* Tagline */}
          <div className={`p-4 border-l-2 ${colors.border}`}>
            <p className="text-[#E8EDF2] text-sm font-medium leading-relaxed">{entity.tagline}</p>
            <div className="ml-annotation mt-1.5">
              <span className="ml-ko">{entity.taglineKo}</span>
              <span className="ml-ja">{entity.taglineJa}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="section-label">Location</div>
            <div className="flex-1 h-px bg-white/[0.05]" />
            <div className="ml-inline">
              <span className="text-[#E8EDF2] text-sm font-medium">{entity.country}</span>
              <span className="ml-ko">{entity.countryKo}</span>
              <span className="ml-ja">{entity.countryJa}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <div className="section-label mb-4">
              Overview
              <span className="ml-2 ml-ko" style={{ fontSize: "0.6rem" }}>개요</span>
              <span className="ml-1 ml-ja" style={{ fontSize: "0.55rem" }}>概要</span>
            </div>
            <p className="body-text mb-3 leading-relaxed">{entity.description}</p>
            <p className="ml-ko text-[0.72rem] leading-relaxed text-[#4A5560] mb-1">{entity.descriptionKo}</p>
            <p className="ml-ja text-[0.65rem] leading-relaxed text-[#3A4048]">{entity.descriptionJa}</p>
          </div>

          {/* Focus areas */}
          <div>
            <div className="section-label mb-4">
              Focus Areas
              <span className="ml-2 ml-ko" style={{ fontSize: "0.6rem" }}>핵심 분야</span>
              <span className="ml-1 ml-ja" style={{ fontSize: "0.55rem" }}>注力分野</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {entity.focus.map((item, i) => (
                <div key={item} className="flex items-start gap-3 p-3 border border-white/[0.05] bg-[#0F1419]/50">
                  <ArrowRight size={12} className={`mt-0.5 flex-shrink-0 ${colors.text}`} />
                  <div>
                    <div className="card-title text-xs">{item}</div>
                    <div className="ml-ko mt-0.5">{entity.focusKo[i]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-white/[0.05] flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                setTimeout(() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#D4A843] text-[#080C10] text-xs font-semibold tracking-widest uppercase hover:bg-[#E8C060] transition-colors"
            >
              Start a Conversation
              <span className="opacity-60 font-normal normal-case tracking-normal" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "0.65rem" }}>상담 문의</span>
            </button>
            <button
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-white/[0.1] text-[#55606A] text-xs tracking-widest uppercase hover:border-white/20 hover:text-[#8B95A1] transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
