export type ProjectStat = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  excerpt: string;
  heroImage: string;
  overview: string;
  problem: string;
  strategy: string;
  creativeDirection: string;
  brandIdentity: string;
  deliverables: string[];
  stats: ProjectStat[];
  moodboard: string[];
  identity: string[];
  feed: string[];
  content: string[];
  photography: string[];
  packaging: string[];
  website: string[];
  gallery: string[];
  colors: string[];
  typography: { display: string; body: string };
};

export const projects: Project[] = [
  {
    slug: "le-marquise",
    title: "Le Marquise",
    category: "Luxury Fashion",
    year: "2024",
    excerpt: "An haute narrative for a house built on quiet extravagance.",
    heroImage:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2000&q=80",
    overview:
      "Le Marquise needed a brand world that felt couture without costume — editorial, intimate, and unmistakably premium across runway, retail, and digital.",
    problem:
      "The existing identity looked expensive but said nothing. Campaigns felt interchangeable with every other fashion house online.",
    strategy:
      "We anchored the brand in a single idea: inheritance reimagined. Every asset — from type to film pacing — whispered lineage while speaking to a new generation.",
    creativeDirection:
      "Soft chiaroscuro photography, elongated serif headlines, and restrained gold accents. Motion always glides; never pops.",
    brandIdentity:
      "A monogram system, seasonal type hierarchy, and a palette of ivory, charcoal, and warm gold define the house language.",
    deliverables: [
      "Brand strategy",
      "Visual identity",
      "Campaign art direction",
      "E-commerce design",
      "Social system",
    ],
    stats: [
      { label: "Brand recall lift", value: "2.4×" },
      { label: "Campaign engagement", value: "+186%" },
      { label: "Lookbook saves", value: "48k" },
    ],
    colors: ["#F8F6F2", "#111111", "#B88A4A", "#E8DED1"],
    typography: { display: "Cormorant Garamond", body: "Inter" },
    moodboard: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    ],
    identity: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
    ],
    feed: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1529139574466-a302f3f8b6f3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    ],
    content: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=80",
    ],
    photography: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
    ],
    packaging: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
    ],
    website: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "semparia",
    title: "Semparia",
    category: "Fragrance",
    year: "2024",
    excerpt: "A scent house brand composed like a modern myth.",
    heroImage:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=2000&q=80",
    overview:
      "Semparia asked for a fragrance identity that felt ancient and futuristic at once — ritual bottled for contemporary luxury.",
    problem:
      "Category clutter made every bottle look like a duty-free shelf. The brand needed mythic differentiation without kitsch.",
    strategy:
      "We built a narrative of elemental memory — earth, heat, dusk — and translated it into typography, glass, and campaign stills.",
    creativeDirection:
      "Desert light, mineral textures, and elongated product silhouettes. Copy reads like poetry, never product sheets.",
    brandIdentity:
      "Custom wordmark, resin-inspired color story, and packaging architecture that rewards the unboxing ritual.",
    deliverables: [
      "Naming system",
      "Packaging",
      "Campaign",
      "Retail toolkit",
      "Digital storefront",
    ],
    stats: [
      { label: "Pre-orders", value: "12k" },
      { label: "Press features", value: "34" },
      { label: "Avg. order value", value: "+62%" },
    ],
    colors: ["#E8DED1", "#6D6256", "#B88A4A", "#1A1714"],
    typography: { display: "Cormorant Garamond", body: "Inter" },
    moodboard: [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a526fc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    ],
    identity: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    ],
    feed: [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a526fc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    ],
    content: [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1400&q=80",
    ],
    photography: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a526fc?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1600&q=80",
    ],
    packaging: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    ],
    website: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "pearl-box",
    title: "Pearl Box",
    category: "Beauty",
    year: "2023",
    excerpt: "Jewelry-grade beauty rituals wrapped in soft geometry.",
    heroImage:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=2000&q=80",
    overview:
      "Pearl Box is a beauty brand for women who collect rituals. We designed a world as delicate as the product — and as precise as the business.",
    problem:
      "Beauty startups often look temporary. Pearl Box needed permanence on shelf and desire on social.",
    strategy:
      "We treated packaging as heirloom and content as diary entries — intimate, luminous, never loud.",
    creativeDirection:
      "Pearlescent surfaces, soft crop photography, and type that feels handwritten by a very careful hand.",
    brandIdentity:
      "Oval mark system, blush-beige palette, and a stationery suite that doubles as unboxing theater.",
    deliverables: [
      "Identity",
      "Packaging suite",
      "Content system",
      "Influencer kit",
      "Website",
    ],
    stats: [
      { label: "Unboxing shares", value: "90k" },
      { label: "Repeat purchase", value: "41%" },
      { label: "Retail doors", value: "28" },
    ],
    colors: ["#F8F6F2", "#E8DED1", "#B88A4A", "#6D6256"],
    typography: { display: "Cormorant Garamond", body: "Inter" },
    moodboard: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
    ],
    identity: [
      "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?auto=format&fit=crop&w=1200&q=80",
    ],
    feed: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?auto=format&fit=crop&w=800&q=80",
    ],
    content: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80",
    ],
    photography: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1600&q=80",
    ],
    packaging: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=80",
    ],
    website: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "valiant-events",
    title: "Valiant Events",
    category: "Hospitality",
    year: "2024",
    excerpt: "Black-tie energy for a new era of private celebrations.",
    heroImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80",
    overview:
      "Valiant Events produces private galas that feel cinematic. The brand needed equal gravity online and in the ballroom.",
    problem:
      "Event brands often look like template blogs. Valiant required gallery-level presence with operational clarity.",
    strategy:
      "We framed Valiant as a house of nights — each celebration a chapter, each client a patron.",
    creativeDirection:
      "Candlelight blacks, champagne golds, architectural photography of spaces before the guests arrive.",
    brandIdentity:
      "Crest-inspired mark, invitation system, and a proposal template that feels like a museum catalogue.",
    deliverables: [
      "Rebrand",
      "Pitch materials",
      "Website",
      "Social",
      "Signage system",
    ],
    stats: [
      { label: "Inquiry quality", value: "+210%" },
      { label: "Avg. booking value", value: "₹48L" },
      { label: "Referral rate", value: "73%" },
    ],
    colors: ["#111111", "#B88A4A", "#F8F6F2", "#6D6256"],
    typography: { display: "Cormorant Garamond", body: "Inter" },
    moodboard: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80",
    ],
    identity: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    ],
    feed: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    ],
    content: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80",
    ],
    photography: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1600&q=80",
    ],
    packaging: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    ],
    website: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "moh-india",
    title: "Moh India",
    category: "Craft & Textile",
    year: "2023",
    excerpt: "Heritage craftsmanship framed for a global stage.",
    heroImage:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=2000&q=80",
    overview:
      "Moh India bridges artisan textile lineages with contemporary wardrobe culture. We designed a brand that honors hand and handoff.",
    problem:
      "Craft brands risk looking folkloric or fast-fashion. Moh needed neither — only dignity and desire.",
    strategy:
      "Position Moh as a living archive: each piece a document, each collection a chapter of place.",
    creativeDirection:
      "Natural fiber textures, documentary portraiture of makers, and type that feels archival yet modern.",
    brandIdentity:
      "Stamp-inspired mark, indigo-warm neutrals, lookbook as museum guide.",
    deliverables: [
      "Brand platform",
      "Lookbook",
      "E-commerce",
      "Packaging",
      "Film art direction",
    ],
    stats: [
      { label: "Intl. wholesale", value: "+95%" },
      { label: "Collection sell-through", value: "88%" },
      { label: "Press mentions", value: "22" },
    ],
    colors: ["#E8DED1", "#6D6256", "#111111", "#B88A4A"],
    typography: { display: "Cormorant Garamond", body: "Inter" },
    moodboard: [
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    ],
    identity: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80",
    ],
    feed: [
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    ],
    content: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=80",
    ],
    photography: [
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1600&q=80",
    ],
    packaging: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80",
    ],
    website: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "batua",
    title: "Batua",
    category: "Accessories",
    year: "2024",
    excerpt: "Leather goods with the patience of an atelier.",
    heroImage:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=2000&q=80",
    overview:
      "Batua makes small leather objects for people who notice the stitch. We made the brand feel collected, not mass.",
    problem:
      "Accessories markets reward logo noise. Batua needed quiet confidence and material honesty.",
    strategy:
      "Lead with craft evidence — grain, edge paint, hardware — and let scarcity do the talking.",
    creativeDirection:
      "Macro product photography, warm brown paper systems, and typography that sits like stamping on hide.",
    brandIdentity:
      "Debossed wordmark, kraft-and-cream packaging, product cards as certificates of making.",
    deliverables: [
      "Identity",
      "Packaging",
      "Product photography",
      "Website",
      "Retail toolkit",
    ],
    stats: [
      { label: "DTC growth", value: "3.1×" },
      { label: "Waitlist", value: "4.8k" },
      { label: "Return rate", value: "1.2%" },
    ],
    colors: ["#6D6256", "#E8DED1", "#111111", "#B88A4A"],
    typography: { display: "Cormorant Garamond", body: "Inter" },
    moodboard: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1200&q=80",
    ],
    identity: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
    ],
    feed: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80",
    ],
    content: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1400&q=80",
    ],
    photography: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1600&q=80",
    ],
    packaging: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
    ],
    website: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "playbox",
    title: "Playbox",
    category: "Lifestyle",
    year: "2025",
    excerpt: "Joyful geometry for a brand that takes play seriously.",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80",
    overview:
      "Playbox makes premium play objects for design-forward homes. The brand needed wit without childishness.",
    problem:
      "Play products often look either clinical or cartoonish. Playbox sits in the editorial living room.",
    strategy:
      "Frame play as cultivated leisure — Bauhaus energy, soft humor, adult taste.",
    creativeDirection:
      "Primary-adjacent muted blocks, isometric compositions, and motion that feels like a toy waking up slowly.",
    brandIdentity:
      "Modular mark, playful type pairing, packaging that stacks into display sculpture.",
    deliverables: [
      "Identity system",
      "Packaging",
      "Campaign",
      "Social",
      "Website",
    ],
    stats: [
      { label: "Launch week sales", value: "₹1.2Cr" },
      { label: "UGC volume", value: "16k" },
      { label: "Retail partners", value: "19" },
    ],
    colors: ["#F8F6F2", "#B88A4A", "#6D6256", "#111111"],
    typography: { display: "Cormorant Garamond", body: "Inter" },
    moodboard: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80",
    ],
    identity: [
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
    ],
    feed: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596464114861-c6c4a4f3e6e3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    ],
    content: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1400&q=80",
    ],
    photography: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    ],
    packaging: [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80",
    ],
    website: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "walnut",
    title: "Walnut",
    category: "Interiors",
    year: "2023",
    excerpt: "Interior calm with the depth of grain and shadow.",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80",
    overview:
      "Walnut designs residential spaces that feel lived-in from day one. The brand mirrors that patience.",
    problem:
      "Interior studios often look like Pinterest boards. Walnut needed architectural authorship.",
    strategy:
      "Position Walnut as editors of atmosphere — material-first, light-obsessed, never trend-chasing.",
    creativeDirection:
      "Wide quiet rooms, tactile close-ups, and captions that read like field notes.",
    brandIdentity:
      "Wordmark carved in negative space, sample book as brand bible, proposal system with gallery pacing.",
    deliverables: [
      "Identity",
      "Website",
      "Project films",
      "Print system",
      "Social",
    ],
    stats: [
      { label: "Project inquiries", value: "+140%" },
      { label: "Avg. project value", value: "₹1.8Cr" },
      { label: "Instagram growth", value: "5×" },
    ],
    colors: ["#E8DED1", "#6D6256", "#111111", "#F8F6F2"],
    typography: { display: "Cormorant Garamond", body: "Inter" },
    moodboard: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    ],
    identity: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    feed: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    ],
    content: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
    ],
    photography: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    ],
    packaging: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    website: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "eleven-0-four",
    title: "Eleven-0-Four",
    category: "Hospitality Brand",
    year: "2025",
    excerpt: "A members' address with late-night editorial energy.",
    heroImage:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80",
    overview:
      "Eleven-0-Four is a members' dining concept. We built a brand that feels like a password and a magazine at once.",
    problem:
      "Hospitality brands age poorly when they chase trends. This one needed timeless after-hours glamour.",
    strategy:
      "Treat membership as narrative privilege — invitation, ritual, return.",
    creativeDirection:
      "Low light photography, menu typography as poetry, and a digital presence that feels velvet.",
    brandIdentity:
      "Numeric wordmark, matchbook collateral, reservation UX with club discretion.",
    deliverables: [
      "Naming",
      "Identity",
      "Menus",
      "Website",
      "Campaign",
    ],
    stats: [
      { label: "Membership fill", value: "100%" },
      { label: "Waitlist", value: "2.1k" },
      { label: "Avg. spend", value: "+55%" },
    ],
    colors: ["#111111", "#B88A4A", "#E8DED1", "#6D6256"],
    typography: { display: "Cormorant Garamond", body: "Inter" },
    moodboard: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    ],
    identity: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    ],
    feed: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=800&q=80",
    ],
    content: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    ],
    photography: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80",
    ],
    packaging: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    ],
    website: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "chelmer-clinic",
    title: "Chelmer Clinic",
    category: "Wellness",
    year: "2024",
    excerpt: "Clinical excellence wrapped in spa-level serenity.",
    heroImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80",
    overview:
      "Chelmer Clinic pairs medical rigor with hospitality calm. The brand had to earn trust without looking cold.",
    problem:
      "Healthcare design often sterilizes emotion. Chelmer needed warmth that still felt expert.",
    strategy:
      "Lead with quiet authority — soft materials, clear information architecture, human photography.",
    creativeDirection:
      "Linen whites, soft stone, and typography that reassures before it impresses.",
    brandIdentity:
      "Clean emblem, patient journey materials, website with editorial pacing and clinical clarity.",
    deliverables: [
      "Brand system",
      "Interior graphics",
      "Website",
      "Patient collateral",
      "Campaign",
    ],
    stats: [
      { label: "Patient NPS", value: "84" },
      { label: "Booking conversion", value: "+67%" },
      { label: "Referral growth", value: "2×" },
    ],
    colors: ["#F8F6F2", "#E8DED1", "#6D6256", "#111111"],
    typography: { display: "Cormorant Garamond", body: "Inter" },
    moodboard: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80",
    ],
    identity: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    ],
    feed: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1666214280557-f1b5020eb55a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    ],
    content: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80",
    ],
    photography: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1600&q=80",
    ],
    packaging: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    ],
    website: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1666214280557-f1b5020eb55a?auto=format&fit=crop&w=1600&q=80",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return projects[0]!;
  return projects[(index + 1) % projects.length]!;
}

export function getProjectSlugs() {
  return projects.map((p) => p.slug);
}
