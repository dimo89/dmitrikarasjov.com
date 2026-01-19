import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Code2, TrendingUp, Zap } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for managing products, orders, and analytics. Built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "React", "Tailwind", "Recharts"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates using Socket.io and React.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with dark mode and animations.",
      tags: ["Next.js", "Framer Motion", "Shadcn UI"],
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center space-y-8">
        <div className="space-y-4 max-w-3xl">
          <Badge variant="secondary" className="mb-4">Available for Hire</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting Exceptional <br className="hidden sm:inline" />
            <span className="text-primary">Digital Experiences</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Senior Frontend Engineer specializing in building user-friendly, pixel-perfect, and performant web applications.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="Expertise" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Bring to the Table</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Beyond just writing code, I focus on creating value and robust, scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Role */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Engineering Excellence</h3>
              <p className="text-muted-foreground">
                As a Senior Frontend Engineer, I build pixel-perfect, accessible, and performant web applications using modern architectures like Next.js and React.
              </p>
            </div>

            {/* Business Value */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Business Impact</h3>
              <p className="text-muted-foreground">
                I bridge the gap between design and technology to deliver products that drive user engagement, improve retention, and solve real business problems.
              </p>
            </div>

            {/* Strengths */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Core Strengths</h3>
              <p className="text-muted-foreground">
                Scalable Component Systems • Performance Optimization • Technical Leadership • Mentoring • Complex State Management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Check out some of my recent work using modern web technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={project.link}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 max-w-2xl text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
          <p className="text-muted-foreground md:text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href="mailto:hello@example.com">Say Hello</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dmitri Karasjov. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-foreground">GitHub</Link>
            <Link href="#" className="hover:text-foreground">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
