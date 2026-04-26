/* Footer — Dark Premium Finance */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050810] border-t border-white/[0.05]">
      <div className="gold-line opacity-20" />
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 border border-[#D4A843]/50 flex items-center justify-center">
                <span className="text-[#D4A843] font-mono text-[10px] font-bold">GI</span>
              </div>
              <div>
                <div className="text-[#E8EDF2] font-semibold text-sm tracking-wider">GLOBAL INVESTMENT HUB</div>
                <div className="text-[#D4A843] font-mono text-[8px] tracking-[0.2em] uppercase">Investment &amp; Execution</div>
              </div>
            </div>
            <p className="text-[#3A4048] text-xs leading-relaxed max-w-xs">
              Headquartered in Korea, operating across North America, Japan, and China. Direct investment and execution for startups and SMEs expanding globally.
            </p>
          </div>

          {/* Entities */}
          <div>
            <div className="section-label mb-4">Group Entities</div>
            <div className="space-y-2">
              {[
                { flag: "🇰🇷", name: "NPS · J2L", desc: "Korea HQ" },
                { flag: "🇨🇦", name: "CANPS", desc: "North America" },
                { flag: "🇯🇵", name: "KMY", desc: "Japan" },
                { flag: "🇨🇳", name: "Local Partners", desc: "China" },
              ].map((e) => (
                <div key={e.name} className="flex items-center gap-3">
                  <span className="text-sm">{e.flag}</span>
                  <span className="text-[#D4A843] font-mono text-xs">{e.name}</span>
                  <span className="text-[#3A4048] text-[10px]">— {e.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="section-label mb-4">Navigation</div>
            <div className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "Global Presence", href: "#presence" },
                { label: "Partners", href: "#partners" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-[#3A4048] hover:text-[#8B95A1] text-xs tracking-wider uppercase transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#2A3038] text-[10px] font-mono">
            © {year} Global Investment Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#2A3038] text-[10px] font-mono">Korea · Canada · Japan · China</span>
            <div className="flex gap-1">
              {["🇰🇷", "🇨🇦", "🇯🇵", "🇨🇳"].map((flag) => (
                <span key={flag} className="text-sm opacity-40">{flag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
