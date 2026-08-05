export const site = {
  name: "Backstory Studio",
  tagline: "Every Brand Has a Backstory.",
  positioning:
    "We don't just design brands. We craft stories that people remember.",
  email: "hello@backstory.studio",
  instagram: "https://instagram.com/backstory.studio",
  seo: {
    title: "Backstory Studio — Luxury Brand Storytelling",
    description:
      "A luxury creative studio crafting editorial brands, immersive digital experiences, and stories people remember.",
  },
  hero: {
    headline: ["EVERY BRAND", "HAS A", "BACKSTORY"],
    subtitle: "Crafting visual stories\nfor brands that inspire\nand lead.",
    ctaPrimary: "View Work",
    ctaSecondary: "Start Your Story",
  },
  about: {
    label: "Who We Are",
    heading: "A studio for brands\nthat refuse to blend in.",
    pullQuote: "Not louder. More precise.",
    paragraphs: [
      "Backstory Studio is a luxury creative practice shaped by fashion editorial thinking, strategic clarity, and emotional branding. We build identities that feel intentional — quiet where they should whisper, bold where they should linger.",
      "From first impression to lasting cultural presence, we design the systems, stories, and experiences that make a brand unforgettable.",
    ],
  },
  process: {
    label: "How We Work",
    heading: "From understanding\nto lasting growth.",
    steps: [
      {
        title: "Understand",
        body: "We listen deeply — to the founder, the audience, the cultural moment — until the real story surfaces.",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Strategize",
        body: "Positioning, narrative architecture, and competitive clarity become the foundation for every visual decision.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Design",
        body: "Editorial systems, typography, and imagery come together into a language that feels inevitable.",
        image:
          "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Build",
        body: "Digital experiences, content engines, and brand assets are crafted with obsessive attention to detail.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Scale",
        body: "We leave you with a living brand — ready to grow across channels without losing its soul.",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Launch",
        body: "Go-to-market moments are paced like editorials — intentional, memorable, impossible to ignore quietly.",
        image:
          "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Growth",
        body: "After launch, we refine systems so the story compounds — consistently, across every touchpoint.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
      },
    ],
  },
  brandingShowcase: {
    heading: "Systems built\nto endure.",
    items: [
      { title: "Color", caption: "Restrained. Warm. Memorable." },
      { title: "Type", caption: "Editorial contrast as identity." },
      { title: "Packaging", caption: "Tactile stories on shelf." },
      { title: "Stationery", caption: "Quiet luxury in print." },
      { title: "Mark", caption: "Geometry with intention." },
      { title: "Application", caption: "Where vision becomes real." },
    ],
  },
  cta: {
    heading: ["Let's Build", "Your Backstory"],
    button: "Begin a Conversation",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Backstory Studio. All rights reserved.`,
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
