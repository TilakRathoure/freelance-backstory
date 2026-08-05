export type MoodboardItem = {
  title: string;
  caption: string;
  image: string;
  phone?: boolean;
};

export const moodboards: MoodboardItem[] = [
  {
    title: "Silk & Shadow",
    caption: "Soft contrast studies for Le Marquise",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Desert Gold",
    caption: "Warm mineral tones for Semparia",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
    phone: true,
  },
  {
    title: "Pearl Ritual",
    caption: "Unboxing frames for Pearl Box",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Midnight Gala",
    caption: "Event atmosphere for Valiant",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    phone: true,
  },
  {
    title: "Craft Line",
    caption: "Textile studies for Moh India",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Leather Archive",
    caption: "Material boards for Batua",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80",
    phone: true,
  },
  {
    title: "Play Geometry",
    caption: "Color blocks for Playbox",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Walnut Grain",
    caption: "Interior mood for Walnut",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
  },
];
