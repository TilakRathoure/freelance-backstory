import { type Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getNextProject,
  getProject,
  getProjectSlugs,
} from "~/content/projects";
import { CaseStudy } from "~/components/work/case-study";
import { site } from "~/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.excerpt,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  return <CaseStudy project={project} next={next} />;
}
