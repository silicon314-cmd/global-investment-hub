/* Home Page — Dark Premium Finance Design System
   Page Order: Hero → Metrics → Company Navigation → Services →
               Execution → Industry Access → Selected Investments →
               Global Footprint → Global Presence → Partners → CTA → Footer */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import MetricsSection from "@/components/sections/MetricsSection";
import CompanyNavSection from "@/components/sections/CompanyNavSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExecutionSection from "@/components/sections/ExecutionSection";
import IndustryAccessSection from "@/components/sections/IndustryAccessSection";
import SelectedInvestmentsSection from "@/components/sections/SelectedInvestmentsSection";
import GlobalFootprintSection from "@/components/sections/GlobalFootprintSection";
import GlobalPresenceSection from "@/components/sections/GlobalPresenceSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080C10]">
      <Navigation />
      <HeroSection />
      <MetricsSection />
      <CompanyNavSection />
      <ServicesSection />
      <ExecutionSection />
      <IndustryAccessSection />
      <SelectedInvestmentsSection />
      <GlobalFootprintSection />
      <GlobalPresenceSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
}
