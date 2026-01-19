import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Code2, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "DCCC",
      description: "A digital portal for the Dnipro Center for Contemporary Culture, created to showcase regional art and enhance community engagement.",
      tags: ["React", "Next.js", "Tailwind", "Contentful", "GraphQL"],
      link: "https://dniproccc.org/en-US",
      logo: "/projects/logo-dccc.png"
    },
    {
      title: "Custom Field Calculator",
      description: "A Google Chrome extension for calculating custom fields in Pipedrive CRM.",
      tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Express.js"],
      link: "#",
      logo: "/projects/logo-cfc.png"
    },
    {
      title: "BatchApp",
      description: "A web application and Google chrome extension for batch processing of orders in Katana MRP.",
      tags: ["React", "Next.js", "Node.js", "Vite", "Tailwind", "TypeScript"],
      link: "#",
      logo: "/projects/logo-abx.png"
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



      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Technologies I Work With</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-75">
            {/* React */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="relative h-12 w-12">
                <img src="/tech/react.svg" alt="React" className="h-full w-full dark:invert grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">React</span>
            </div>
            {/* Next.js */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="relative h-12 w-12">
                <img src="/tech/nextjs.svg" alt="Next.js" className="h-full w-full dark:invert grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">Next.js</span>
            </div>
            {/* TypeScript */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="relative h-12 w-12">
                <img src="/tech/typescript.svg" alt="TypeScript" className="h-full w-full dark:invert grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">TypeScript</span>
            </div>
            {/* Tailwind */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="relative h-12 w-12">
                <img src="/tech/tailwind.svg" alt="Tailwind CSS" className="h-full w-full dark:invert grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">Tailwind</span>
            </div>
            {/* Node.js */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="relative h-12 w-12">
                <img src="/tech/nodejs.svg" alt="Node.js" className="h-full w-full dark:invert grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">Node.js</span>
            </div>
            {/* GraphQL */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="relative h-12 w-12">
                <img src="/tech/graphql.svg" alt="GraphQL" className="h-full w-full dark:invert grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">GraphQL</span>
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
                  <Image src={project.logo} alt={project.title} width={200} height={200} className="dark:invert" />
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

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Clients Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Here's what some of my colleagues and clients have to say about working with me.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Product Manager",
                content: "Dmitri is a fantastic engineer who truly cares about the user experience. His attention to detail is unmatched."
              },
              {
                name: "Michael Chen",
                role: "CTO at TechFlow",
                content: "Working with Dmitri was a pleasure. He delivered high-quality code on time and was always proactive in solving problems."
              },
              {
                name: "Emily Davis",
                role: "Senior Designer",
                content: "I love how Dmitri translates design concepts into pixel-perfect interfaces. He has a great eye for design nuances."
              },
              {
                name: "David Wilson",
                role: "Founder at StartupX",
                content: "Dmitri played a key role in launching our MVP. His technical expertise and dedication were instrumental to our success."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
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
            <Link href="https://github.com/dimo89" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</Link>
            <Link href="https://www.linkedin.com/in/dmitrikarasjov/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div >
  );
}
