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
    paragraphs: [
      "Backstory Studio is a luxury creative practice shaped by fashion editorial thinking, strategic clarity, and emotional branding. We build identities that feel intentional — quiet where they should whisper, bold where they should linger.",
      "From first impression to lasting cultural presence, we design the systems, stories, and experiences that make a brand unforgettable. Not louder. More precise.",
    ],
  },
  philosophy: {
    label: "Our Approach",
    heading: "From understanding\nto lasting scale.",
    steps: [
      {
        title: "Understand",
        body: "We listen deeply — to the founder, the audience, the cultural moment — until the real story surfaces.",
      },
      {
        title: "Strategize",
        body: "Positioning, narrative architecture, and competitive clarity become the foundation for every visual decision.",
      },
      {
        title: "Design",
        body: "Editorial systems, typography, and imagery come together into a language that feels inevitable.",
      },
      {
        title: "Build",
        body: "Digital experiences, content engines, and brand assets are crafted with obsessive attention to detail.",
      },
      {
        title: "Scale",
        body: "We leave you with a living brand — ready to grow across channels without losing its soul.",
      },
    ],
  },
  process: {
    label: "How We Work",
    heading: "A considered path\nto launch.",
    steps: [
      "Discovery",
      "Research",
      "Strategy",
      "Identity",
      "Content",
      "Launch",
      "Growth",
    ],
  },
  brandingShowcase: {
    label: "Systems",
    heading: "Branding, built\nto endure.",
    items: [
      { title: "Color Palettes", caption: "Restrained. Warm. Memorable." },
      { title: "Typography", caption: "Editorial contrast as identity." },
      { title: "Packaging", caption: "Tactile stories on shelf." },
      { title: "Stationery", caption: "Quiet luxury in print." },
      { title: "Logo Construction", caption: "Geometry with intention." },
      { title: "Mockups", caption: "Where vision becomes real." },
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
