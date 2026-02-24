import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen py-12 md:py-24">
            <div className="container mx-auto px-4">
                <Button variant="ghost" className="mb-8 font-martian-mono" asChild>
                    <Link href="/#projects">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Link>
                </Button>

                <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
                    <div className="space-y-10">
                        {project.images?.[0] && (
                            <div className="relative aspect-video w-full overflow-hidden">
                                <Image
                                    src={project.images[0]}
                                    alt={`${project.title} screenshot`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        )}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div>
                                    <h1 className="text-4xl font-bold tracking-tight font-martian-mono">{project.title}</h1>
                                    <p className="text-xl text-muted-foreground mt-2">{project.description}</p>
                                </div>
                            </div>
                        </div>

                        {project.overview && (
                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold">Overview</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {project.overview}
                                </p>
                            </section>
                        )}

                        {project.challenges && (
                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold">Technical Challenges</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {project.challenges}
                                </p>
                            </section>
                        )}
                        {project.outcome && (
                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold">Outcome</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {project.outcome}
                                </p>
                            </section>
                        )}
                    </div>

                    <div className="space-y-8">
                        <div className="rounded-xl border bg-card p-6 shadow-sm">
                            <h3 className="mb-4 font-semibold text-lg font-martian-mono">Project Details</h3>
                            <div className="space-y-4">
                                {project.role && (
                                    <div>
                                        <span className="block text-sm font-medium text-muted-foreground font-martian-mono">My Role</span>
                                        <span className="font-medium">{project.role}</span>
                                    </div>
                                )}
                                <div>
                                    <span className="block text-sm font-medium text-muted-foreground mb-2 font-martian-mono">Technologies</span>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <Badge key={tech} variant="secondary">{tech}</Badge>
                                        )) || project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-4 border-t">
                                    <Button className="w-full font-martian-mono" asChild>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
