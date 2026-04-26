/* CTASection — Dark Premium Finance
   Contact section with multilingual labels */

import { useState, useRef, useEffect } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  { icon: MapPin, label: "Korea HQ", labelKo: "한국 본사", value: "Seoul, Korea — NPS", valueKo: "서울, 대한민국 — NPS" },
  { icon: MapPin, label: "Canada", labelKo: "캐나다", value: "CANPS — North America Hub", valueKo: "CANPS — 북미 거점" },
  { icon: MapPin, label: "Japan", labelKo: "일본", value: "KMY — Japan Branch", valueKo: "KMY — 일본 지사" },
  { icon: Mail, label: "Email", labelKo: "이메일", value: "contact@globalinvestmenthub.com", valueKo: "" },
];

const interestOptions = [
  { value: "investment", en: "Direct Investment / Fundraising", ko: "직접 투자 / 투자 유치" },
  { value: "canada", en: "North America Market Entry", ko: "북미 시장 진출" },
  { value: "japan", en: "Japan Market Entry", ko: "일본 시장 진출" },
  { value: "partner", en: "Strategic Partner Connection", ko: "전략적 파트너 연결" },
  { value: "battery", en: "Battery / Cross-Industry Expansion", ko: "배터리 / 다산업 확장" },
  { value: "other", en: "Other", ko: "기타" },
];

export default function CTASection() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in the required fields.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    toast.success("Your message has been received. We'll be in touch shortly.");
    setForm({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
  };

  const inputClass =
    "w-full bg-[#0F1419] border border-white/[0.08] text-[#E8EDF2] text-sm px-4 py-3 placeholder:text-[#3A4048] focus:outline-none focus:border-[#D4A843]/50 transition-colors duration-200 font-light";

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-[#080C10]">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse, #D4A843 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-2">Get In Touch</div>
          <div className="ml-annotation mb-4 justify-center flex gap-3">
            <span className="ml-ko">문의하기</span>
            <span className="ml-ja">お問い合わせ</span>
          </div>
          <h2 className="section-heading mb-4" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
            Discuss Your
            <br />
            <span className="text-[#D4A843] italic">Expansion</span>
          </h2>
          <div className="ml-annotation mb-4 justify-center flex gap-3">
            <span className="ml-ko">사업 확장을 논의하세요</span>
            <span className="ml-ja">事業拡大について話し合いましょう</span>
          </div>
          <p className="body-text max-w-xl mx-auto">
            Whether you're raising capital, entering a new market, or looking for the right partner — let's start with a conversation.
          </p>
          <div className="ml-annotation mt-2 justify-center flex gap-3">
            <span className="ml-ko">자본 조달, 시장 진출, 파트너 탐색 — 어떤 단계에서든 대화를 시작하세요.</span>
          </div>
        </div>

        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-5 gap-12 fade-in-up">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="section-label mb-5">Contact</div>
              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-8 h-8 border border-white/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={14} className="text-[#D4A843]" />
                      </div>
                      <div>
                        <div className="ml-inline mb-0.5">
                          <span className="text-[#55606A] text-[10px] tracking-widest uppercase font-mono">{item.label}</span>
                          <span className="ml-ko">{item.labelKo}</span>
                        </div>
                        <div className="card-title text-xs">{item.value}</div>
                        {item.valueKo && <div className="ml-ko mt-0.5">{item.valueKo}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-6 border border-[#D4A843]/20 bg-[#D4A843]/[0.03]">
              <div className="section-label mb-1">Areas of Engagement</div>
              <div className="ml-annotation mb-3">
                <span className="ml-ko">상담 가능 분야</span>
                <span className="ml-ja">相談可能分野</span>
              </div>
              <div className="space-y-2">
                {interestOptions.map((item) => (
                  <div key={item.value} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#D4A843] rounded-full flex-shrink-0" />
                    <span className="card-body">{item.en}</span>
                    <span className="ml-ko">{item.ko}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#55606A] text-[10px] tracking-widest uppercase font-mono block mb-2">
                    Name <span className="ml-ko normal-case tracking-normal">이름</span> <span className="text-[#D4A843]">*</span>
                  </label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inputClass} required />
                </div>
                <div>
                  <label className="text-[#55606A] text-[10px] tracking-widest uppercase font-mono block mb-2">
                    Company <span className="ml-ko normal-case tracking-normal">회사명</span>
                  </label>
                  <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#55606A] text-[10px] tracking-widest uppercase font-mono block mb-2">
                    Email <span className="text-[#D4A843]">*</span>
                  </label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="email@company.com" className={inputClass} required />
                </div>
                <div>
                  <label className="text-[#55606A] text-[10px] tracking-widest uppercase font-mono block mb-2">
                    Phone <span className="ml-ko normal-case tracking-normal">연락처</span>
                  </label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 / +82 / +81" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="text-[#55606A] text-[10px] tracking-widest uppercase font-mono block mb-2">
                  Area of Interest <span className="ml-ko normal-case tracking-normal">관심 분야</span>
                </label>
                <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className={`${inputClass} appearance-none`}>
                  <option value="" className="bg-[#0F1419]">Select one / 선택</option>
                  {interestOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#0F1419]">
                      {opt.en} / {opt.ko}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[#55606A] text-[10px] tracking-widest uppercase font-mono block mb-2">
                  Message <span className="ml-ko normal-case tracking-normal">메시지</span> <span className="text-[#D4A843]">*</span>
                </label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Briefly describe your business situation and what you're looking for. / 비즈니스 상황과 필요한 것을 간략히 설명해 주세요." rows={5} className={`${inputClass} resize-none`} required />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#D4A843] text-[#080C10] text-xs font-semibold tracking-widest uppercase hover:bg-[#E8C060] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 group"
              >
                {submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Start a Conversation</span>
                    <span style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "0.65rem", fontWeight: 400 }} className="opacity-60 normal-case tracking-normal">상담 문의</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-[#3A4048] text-[10px] font-mono text-center">
                * Information submitted is used solely for consultation purposes and will not be shared externally.
                <span className="ml-ko block mt-0.5">제출된 정보는 상담 목적으로만 사용되며 외부에 공유되지 않습니다.</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
