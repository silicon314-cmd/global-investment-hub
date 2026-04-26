/* Entity data — Group structure and detailed profiles
   HQ: NPS | Affiliate: J2L | Branches: CANPS, KMY | Partner: China
   Images: real photos uploaded to webdev storage */

export type EntityRelation = "hq" | "affiliate" | "branch" | "partner";

export interface Entity {
  id: string;
  name: string;
  nameKo: string;
  nameJa: string;
  country: string;
  countryKo: string;
  countryJa: string;
  flag: string;
  relation: EntityRelation;
  relationLabel: string;
  relationLabelKo: string;
  relationLabelJa: string;
  tagline: string;
  taglineKo: string;
  taglineJa: string;
  description: string;
  descriptionKo: string;
  descriptionJa: string;
  focus: string[];
  focusKo: string[];
  image: string;
  imageCaption: string;
  imageCaptionKo: string;
  images?: { src: string; caption: string; captionKo: string }[];
  established?: string;
  website?: string;
}

export const entities: Entity[] = [
  {
    id: "nps",
    name: "NPS",
    nameKo: "엔피에스",
    nameJa: "エヌピーエス",
    country: "South Korea",
    countryKo: "대한민국",
    countryJa: "韓国",
    flag: "🇰🇷",
    relation: "hq",
    relationLabel: "Headquarters",
    relationLabelKo: "본사",
    relationLabelJa: "本社",
    tagline: "Investment Platform — Korea HQ",
    taglineKo: "투자 플랫폼 — 한국 본사",
    taglineJa: "投資プラットフォーム — 韓国本社",
    description:
      "NPS is the group headquarters based in Korea. As the central decision-making entity, NPS leads direct investment execution, group strategy, and global expansion planning. With a focus on the battery supply chain and cross-industry growth, NPS serves as the anchor for all affiliated entities and partner networks.",
    descriptionKo:
      "NPS는 한국에 위치한 그룹 본사입니다. 직접 투자 실행, 그룹 전략 수립, 글로벌 사업 확장 계획을 총괄합니다. 2차전지 공급망 및 다산업 성장을 중심으로, 모든 관계사 및 파트너 네트워크의 핵심 거점 역할을 합니다.",
    descriptionJa:
      "NPSは韓国に拠点を置くグループ本社です。直接投資の実行、グループ戦略の策定、グローバル事業拡大計画を統括します。二次電池サプライチェーンおよびクロスインダストリー成長を中心に、すべての関連会社とパートナーネットワークの中核として機能します。",
    focus: ["Direct Investment", "Group Strategy", "Battery Supply Chain", "Global Expansion Planning"],
    focusKo: ["직접 투자", "그룹 전략", "2차전지 공급망", "글로벌 사업 확장"],
    image: "/manus-storage/investment-seminar_083386c9.jpg",
    imageCaption: "Investment briefing session — Korea",
    imageCaptionKo: "투자 설명회 — 한국",
    images: [
      {
        src: "/manus-storage/investment-seminar_083386c9.jpg",
        caption: "Investment Briefing Session",
        captionKo: "투자 설명회",
      },
    ],
    established: "Korea",
  },
  {
    id: "j2l",
    name: "J2L",
    nameKo: "제이투엘",
    nameJa: "ジェイツーエル",
    country: "South Korea",
    countryKo: "대한민국",
    countryJa: "韓国",
    flag: "🇰🇷",
    relation: "affiliate",
    relationLabel: "Affiliate",
    relationLabelKo: "관계사",
    relationLabelJa: "関連会社",
    tagline: "Healthcare Investment & Operations — NPS Affiliate",
    taglineKo: "헬스케어 투자 및 사업 운영 — NPS 관계사",
    taglineJa: "ヘルスケア投資・事業運営 — NPS関連会社",
    description:
      "In an era defined by AI, J2L is built on the belief that genuine human connection remains the foundation of meaningful business. As a strategic affiliate of NPS, J2L focuses on healthcare investment and business development — directly investing in and operating healthcare businesses, supporting portfolio companies through hands-on market execution and expansion. J2L plays a key role in connecting Korean healthcare businesses with global growth opportunities.",
    descriptionKo:
      "AI 시대에 직접적인 사람과의 소통을 사업 확장의 근본으로 삼는 NPS의 관계사입니다. 헬스케어 관련 사업에 직접 투자하고 운영하며, 포트폴리오 기업의 시장 실행 및 확장을 지원합니다. 한국식 헬스케어 기업의 글로벌 성장 기회 연결에 핵심적인 역할을 합니다.",
    descriptionJa:
      "AIが主流となる時代においても、人と人との直接的なつながりを事業拡大の基盤とするNPSの関連会社です。ヘルスケア関連事業に直接投資・運営し、ポートフォリオ企業の市場実行と拡大を支援します。韓国ヘルスケア企業のグローバル成長機会の橋渡し役として重要な役割を担っています。",
    focus: ["Healthcare Investment", "Business Operations (Humanistic Foundation)", "Portfolio Support", "Market Execution"],
    focusKo: ["헬스케어 투자", "사업 운영 (인본주의 사업 확장 기초)", "포트폴리오 지원", "시장 실행"],
    image: "/manus-storage/j2l-healthcare_65b41445.jpg",
    imageCaption: "ACS Stretching Lounge — J2L portfolio company, Korea",
    imageCaptionKo: "ACS 스트레칭 라운지 — J2L 포트폴리오 기업, 한국",
    images: [
      {
        src: "/manus-storage/j2l-healthcare_65b41445.jpg",
        caption: "ACS Stretching Lounge — Portfolio Company",
        captionKo: "ACS 스트레칭 라운지 — 포트폴리오 기업",
      },
    ],
    established: "Korea",
  },
  {
    id: "canps",
    name: "CANPS",
    nameKo: "캔피에스",
    nameJa: "キャンピーエス",
    country: "Canada",
    countryKo: "캐나다",
    countryJa: "カナダ",
    flag: "🇨🇦",
    relation: "branch",
    relationLabel: "Branch",
    relationLabelKo: "지사",
    relationLabelJa: "支社",
    tagline: "Market Access & Execution — North America",
    taglineKo: "시장 진출 및 실행 — 북미",
    taglineJa: "市場アクセス・実行 — 北米",
    description:
      "CANPS is the North America branch of the group, headquartered in Canada. Established as the primary gateway for Korean companies entering the North American battery supply chain and mineral resources sector, CANPS leverages Canada's strategic position in the global battery ecosystem — including critical mineral access, EV manufacturing proximity, and favorable trade conditions under CUSMA. CANPS conducts on-site meetings, negotiations, and direct execution with North American industry partners.",
    descriptionKo:
      "CANPS는 캐나다에 위치한 그룹의 북미 지사입니다. 한국 기업의 북미 2차전지 공급망 및 광물 자원 분야 진출을 위한 핵심 거점으로 설립되었습니다. 핵심 광물 접근성, EV 제조 인접성, CUSMA 무역 협정의 유리한 조건 등 캐나다의 전략적 위치를 활용합니다. 북미 산업 파트너와의 현장 미팅, 협상, 직접 실행을 수행합니다.",
    descriptionJa:
      "CANPSはカナダに拠点を置くグループの北米支社です。韓国企業の北米二次電池サプライチェーンおよび鉱物資源分野への参入のための主要な入口として設立されました。重要鉱物へのアクセス、EV製造への近接性、CUSMAの有利な貿易条件など、カナダの戦略的位置を活用します。北米産業パートナーとの現地ミーティング、交渉、直接実行を行います。",
    focus: ["Battery Supply Chain", "Mineral Resources", "North America Market Entry", "On-site Execution"],
    focusKo: ["2차전지 공급망", "광물 자원", "북미 시장 진출", "현장 실행"],
    image: "/manus-storage/canada-pavilion_310a2bd5.jpg",
    imageCaption: "Canada Pavilion — Battery industry exhibition, Korea",
    imageCaptionKo: "캐나다 파빌리온 — 배터리 산업 전시회, 한국",
    images: [
      {
        src: "/manus-storage/canada-pavilion_310a2bd5.jpg",
        caption: "Canada Pavilion — Battery Industry Exhibition",
        captionKo: "캐나다 파빌리온 — 배터리 산업 전시회",
      },
      {
        src: "/manus-storage/canada-mining_29b5aeb1.jpg",
        caption: "North American Mining Site Visit — Mineral Core Samples",
        captionKo: "북미 광산업체 방문 — 광물 코어 샘플",
      },
    ],
    established: "Canada",
  },
  {
    id: "kmy",
    name: "KMY",
    nameKo: "케이엠와이",
    nameJa: "ケーエムワイ",
    country: "Japan",
    countryKo: "일본",
    countryJa: "日本",
    flag: "🇯🇵",
    relation: "branch",
    relationLabel: "Branch",
    relationLabelKo: "지사",
    relationLabelJa: "支社",
    tagline: "Direct Investment & Assets — Japan",
    taglineKo: "직접 투자 및 자산 — 일본",
    taglineJa: "直接投資・資産保有 — 日本",
    description:
      "KMY is the Japan branch of the group, directly investing in and owning real estate assets in Tokyo. KMY holds two residential properties in Bakurocho and Shimomeguro, Tokyo, representing the group's direct asset investment strategy in Japan. Beyond real estate, KMY provides on-the-ground support for Korean companies entering the Japanese market through local networks and operational expertise.",
    descriptionKo:
      "KMY는 그룹의 일본 지사로, 도쿄에서 부동산 자산에 직접 투자하고 보유합니다. 도쿄 바쿠로쵸와 시모메구로에 두 개의 주거용 부동산을 보유하며, 일본에서의 그룹 직접 자산 투자 전략을 대표합니다. 부동산 외에도 현지 네트워크와 운영 전문성을 통해 일본 시장에 진출하는 한국 기업을 지원합니다.",
    descriptionJa:
      "KMYはグループの日本支社であり、東京で不動産資産に直接投資・保有しています。東京の馬喰町と下目黒に2つの住宅用不動産を保有し、日本における直接資産投資戦略を体現しています。不動産以外にも、現地ネットワークと運営専門知識を通じて、日本市場に参入する韓国企業を支援します。",
    focus: ["Real Estate Investment", "Asset Ownership", "Japan Market Entry", "Local Network"],
    focusKo: ["부동산 투자", "자산 보유", "일본 시장 진출", "현지 네트워크"],
    image: "/manus-storage/japan-bakurocho_c04f1c70.jpg",
    imageCaption: "Tokyo Bakurocho Asset — Direct investment by KMY",
    imageCaptionKo: "도쿄 바쿠로쵸 자산 — KMY 직접 투자",
    images: [
      {
        src: "/manus-storage/japan-bakurocho_c04f1c70.jpg",
        caption: "Tokyo Bakurocho — Direct Investment Asset",
        captionKo: "도쿄 바쿠로쵸 — 직접 투자 자산",
      },
      {
        src: "/manus-storage/japan-shimomeguro_81cfb6ce.jpg",
        caption: "Tokyo Shimomeguro — Direct Investment Asset",
        captionKo: "도쿄 시모메구로 — 직접 투자 자산",
      },
    ],
    established: "Japan",
  },
  {
    id: "china",
    name: "China Network",
    nameKo: "중국 파트너 네트워크",
    nameJa: "中国パートナーネットワーク",
    country: "China",
    countryKo: "중국",
    countryJa: "中国",
    flag: "🇨🇳",
    relation: "partner",
    relationLabel: "Partner Network",
    relationLabelKo: "파트너사 운영",
    relationLabelJa: "パートナー運営",
    tagline: "Strategic Battery Network — 15+ Years",
    taglineKo: "전략적 배터리 네트워크 — 15년 이상",
    taglineJa: "戦略的バッテリーネットワーク — 15年以上",
    description:
      "The group's China presence is built on 15+ years of direct relationships with top-tier battery companies, including ATL (DongGuan Amperex Technology Limited, predecessor of CATL) and BTR (Beijing Easpring Material Technology). These are not referral connections — they are long-standing operational partnerships built through on-site visits, negotiations, and sustained collaboration. This network provides unparalleled access to the Chinese battery supply chain.",
    descriptionKo:
      "그룹의 중국 사업은 ATL(CATL의 전신, 동관 암페렉스 테크놀로지) 및 BTR(베이징 이스프링 소재기술) 등 최상위 배터리 기업과의 15년 이상의 직접적인 관계를 기반으로 합니다. 이는 단순 소개 연결이 아니라, 현장 방문, 협상, 지속적인 협력을 통해 구축된 장기 운영 파트너십입니다. 이 네트워크는 중국 배터리 공급망에 대한 탁월한 접근성을 제공합니다.",
    descriptionJa:
      "グループの中国事業は、ATL（CATLの前身、東莞新能源科技）やBTR（北京当升科技）などのトップクラスのバッテリー企業との15年以上の直接的な関係を基盤としています。これは単なる紹介ではなく、現地訪問、交渉、継続的な協力を通じて構築された長期的な運営パートナーシップです。このネットワークは中国バッテリーサプライチェーンへの比類ない接続性を提供します。",
    focus: ["ATL / CATL Network", "BTR Partnership", "Battery Supply Chain", "15+ Year Relationships"],
    focusKo: ["ATL / CATL 네트워크", "BTR 파트너십", "배터리 공급망", "15년 이상 관계"],
    image: "/manus-storage/china-atl_20383a8d.jpg",
    imageCaption: "ATL (DongGuan Amperex Technology) — predecessor of CATL, China",
    imageCaptionKo: "ATL (CATL 전신) — 중국 동관",
    images: [
      {
        src: "/manus-storage/china-atl_20383a8d.jpg",
        caption: "ATL — DongGuan Amperex Technology (CATL Predecessor)",
        captionKo: "ATL — CATL 전신, 중국 동관",
      },
      {
        src: "/manus-storage/china-btr_dedda2ef.jpg",
        caption: "BTR — Beijing Easpring Material Technology",
        captionKo: "BTR — 중국 소재 업체 방문",
      },
    ],
    established: "China",
  },
];

export const relationColors: Record<EntityRelation, { border: string; bg: string; text: string; badge: string }> = {
  hq: {
    border: "border-[#D4A843]/40",
    bg: "bg-[#D4A843]/[0.04]",
    text: "text-[#D4A843]",
    badge: "bg-[#D4A843]/15 border-[#D4A843]/40 text-[#D4A843]",
  },
  affiliate: {
    border: "border-[#8B95A1]/20",
    bg: "bg-[#8B95A1]/[0.02]",
    text: "text-[#8B95A1]",
    badge: "bg-[#8B95A1]/10 border-[#8B95A1]/30 text-[#8B95A1]",
  },
  branch: {
    border: "border-[#6B8FA8]/25",
    bg: "bg-[#6B8FA8]/[0.03]",
    text: "text-[#6B8FA8]",
    badge: "bg-[#6B8FA8]/10 border-[#6B8FA8]/30 text-[#6B8FA8]",
  },
  partner: {
    border: "border-white/[0.08]",
    bg: "bg-white/[0.01]",
    text: "text-[#55606A]",
    badge: "bg-white/[0.05] border-white/[0.1] text-[#55606A]",
  },
};
