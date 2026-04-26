/* Navigation — Dark Premium Finance
   Fixed top nav with multilingual labels */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Companies", labelKo: "법인", href: "#companies" },
  { label: "Services", labelKo: "서비스", href: "#services" },
  { label: "Investments", labelKo: "투자 자산", href: "#investments" },
  { label: "Network", labelKo: "네트워크", href: "#presence" },
  { label: "Contact", labelKo: "문의", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080C10]/95 backdrop-blur-md border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 border border-[#D4A843]/60 flex items-center justify-center group-hover:border-[#D4A843] transition-colors">
                <span className="text-[#D4A843] font-mono text-xs font-bold tracking-widest">GI</span>
              </div>
              <div>
                <div className="text-[#E8EDF2] font-semibold text-sm tracking-wider leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>GLOBAL</div>
                <div className="text-[#D4A843] font-mono text-[9px] tracking-[0.25em] uppercase leading-none mt-0.5">Investment Hub</div>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="flex flex-col items-center gap-0.5 group"
                >
                  <span className="text-[#8B95A1] group-hover:text-[#E8EDF2] text-xs tracking-widest uppercase transition-colors duration-200 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.label}
                  </span>
                  <span className="ml-ko text-[#3A4048] group-hover:text-[#55606A] transition-colors" style={{ fontSize: "0.55rem" }}>
                    {item.labelKo}
                  </span>
                </button>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNavClick("#contact")}
                className="hidden md:flex flex-col items-center gap-0.5 px-5 py-2 border border-[#D4A843]/60 text-[#D4A843] hover:bg-[#D4A843]/10 hover:border-[#D4A843] transition-all duration-200"
              >
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Start a Conversation</span>
                <span className="ml-ko text-[#D4A843]/60" style={{ fontSize: "0.55rem" }}>상담 문의</span>
              </button>
              <button
                className="lg:hidden text-[#8B95A1] hover:text-[#E8EDF2] transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#080C10]/98 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-16 left-0 right-0 bg-[#0F1419] border-b border-white/[0.06] transition-transform duration-300 ${mobileOpen ? "translate-y-0" : "-translate-y-4"}`}>
          <div className="container py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left py-3 border-b border-white/[0.04] last:border-0 flex items-center justify-between"
              >
                <span className="text-[#8B95A1] hover:text-[#E8EDF2] text-sm tracking-widest uppercase transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {item.label}
                </span>
                <span className="ml-ko text-[#3A4048]">{item.labelKo}</span>
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-4 py-3 border border-[#D4A843]/60 text-[#D4A843] text-xs tracking-widest uppercase hover:bg-[#D4A843]/10 transition-all flex items-center justify-center gap-2"
            >
              Start a Conversation
              <span className="ml-ko text-[#D4A843]/60 normal-case tracking-normal">상담 문의</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
