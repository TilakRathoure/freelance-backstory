import { Hero } from "~/components/home/hero";
import { About } from "~/components/home/about";
import { Services } from "~/components/home/services";
import { FeaturedWork } from "~/components/home/featured-work";
import { Moodboards } from "~/components/home/moodboards";
import { Branding } from "~/components/home/branding";
import { Process } from "~/components/home/process";
import { Testimonials } from "~/components/home/testimonials";
import { Cta } from "~/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <Moodboards />
      <Branding />
      <Process />
      <Testimonials />
      <Cta />
    </>
  );
}
