export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They didn't redesign our brand. They revealed the story we had been trying to tell for years — with a quiet confidence we didn't know we could own.",
    author: "Amelia Croft",
    role: "Founder, Le Marquise",
  },
  {
    quote:
      "Every frame felt intentional. The work moves like a fashion film and converts like a strategy deck. Rare combination.",
    author: "Rohan Mehta",
    role: "Creative Director, Semparia",
  },
  {
    quote:
      "Backstory Studio treats luxury as discipline, not decoration. Our packaging alone became a conversation piece.",
    author: "Priya Nair",
    role: "CEO, Pearl Box",
  },
  {
    quote:
      "From first workshop to launch, the pacing felt editorial — never rushed, never vague. Exactly what a premium brand needs.",
    author: "James Ellison",
    role: "Managing Partner, Valiant Events",
  },
];
