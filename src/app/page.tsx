"use client"

import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Code2, TrendingUp, MonitorSmartphone, BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Header } from "@/components/Header";
import { projects } from "@/lib/data";
import { useEffect, useState, useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-10% 0px -10% 0px" },
  transition: { duration: 2, ease: [0.16, 1, 0.3, 1] as const }
};

const sentence = "Senior Frontend Engineer specializing in building user-friendly, pixel-perfect, and performant web applications.";

function Typewriter({ text, speed = 50, delay = 1200 }: { text: string; speed?: number; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const containerRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const startTimeout = setTimeout(() => {
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          const char = text[currentIndex];
          currentIndex++;
          setDisplayText(text.substring(0, currentIndex));

          let nextDelay = speed;
          const variance = (Math.random() - 0.5) * 30;
          nextDelay += variance;

          if (char === "." || char === "!" || char === "?") {
            nextDelay = 400;
          } else if (char === ",") {
            nextDelay = 250;
          } else if (char === " ") {
            nextDelay = 95;
          }

          timeoutId = setTimeout(typeNextChar, nextDelay);
        }
      };

      typeNextChar();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView, text, speed, delay]);

  const isComplete = displayText.length === text.length;

  return (
    <p
      ref={containerRef}
      className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-8 text-center min-h-[3em]"
      aria-label={text}
    >
      <span>{displayText}</span>
      <motion.span
        animate={isComplete ? { opacity: 0 } : { opacity: [1, 0, 1] }}
        transition={isComplete ? { duration: 0.1 } : { repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-5 ml-1 bg-highlight align-middle"
      />
    </p>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          window.history.replaceState(null, '', `#${entry.target.id === 'hero' ? '' : entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sectionElements = document.querySelectorAll('section[id]');
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen scroll-smooth">
      <Header activeSection={activeSection} />

      {/* Hero Section */}
      <section
        id="index"
        data-testid="hero-section"
        className="container min-h-screen flex mx-auto items-center justify-center"
      >
        <motion.section className="flex flex-col items-center text-center space-y-8 justify-center mx-auto px-4" {...fadeInUp}>
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center justify-center gap-2 font-mono text-muted-foreground select-none mb-8">
              <span className="text-2xl font-semibold">&lt;</span>
              <ContactModal>
                <Badge asChild variant="secondary" className="bg-highlight dark:text-black m-0 cursor-pointer py-2 px-4 hover:bg-highlight/80 hover:scale-105 transition-all duration-300">
                  <div>
                    <BriefcaseBusiness />
                    <span>Available for Hire</span>
                  </div>
                </Badge>
              </ContactModal>
              <span className="text-2xl font-semibold">/&gt;</span>
            </div>
            <h1 className="flex items-center justify-center font-extrabold tracking-tight text-4xl md:text-7xl lg:text-9xl font-martian-mono">
              Crafting Exceptional Digital Experiences
            </h1>
            <Typewriter text={sentence} />
          </div>
        </motion.section>
      </section>

      {/* Expertise Section */}
      <section
        id="expertise"
        data-testid="expertise-section"
        className="min-h-screen bg-muted/50 flex flex-col items-center justify-center"
      >
        <motion.section className="container mx-auto px-4 py-20" {...fadeInUp}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-martian-mono">My expertise will help your business</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg mt-8">
              Beyond just writing code, I specialise in Scalable Component Systems, Performance Optimization and Complex State Management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Role */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-martian-mono">Engineering Excellence</h3>
              <p className="text-muted-foreground">
                As a Senior Frontend Engineer, I build pixel-perfect, accessible, and performant web applications using modern frameworks like Next.js and React.
              </p>
            </div>

            {/* Business Value */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-martian-mono">Business Impact</h3>
              <p className="text-muted-foreground">
                I bridge the gap between design and technology to deliver products that drive user engagement, improve retention, and solve real business problems.
              </p>
            </div>

            {/* Strengths */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <MonitorSmartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-martian-mono">Mobile First</h3>
              <p className="text-muted-foreground">
                I prioritize a mobile-first mindset, ensuring seamless, high-performance experience that is fully responsive and accessible across all devices and screen sizes.
              </p>
            </div>
          </div>
        </motion.section>
      </section>



      {/* Stack Section */}
      <section
        id="stack"
        data-testid="stack-section"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <motion.section className="container mx-auto px-4 py-20" {...fadeInUp}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-martian-mono">Tech Stack I Work With</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg mt-8">
              I work with a minimalist but powerful tech stack that allows me to build high-quality web applications.
            </p>
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
        </motion.section>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        data-testid="projects-section"
        className="bg-muted/50 min-h-screen flex flex-col items-center justify-center"
      >
        <motion.section className="container mx-auto px-4 py-20" {...fadeInUp}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-martian-mono">Featured Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg my-8">
              Check out some of my recent work using modern web frameworks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={project.logo}
                      alt={project.title}
                      fill
                      className="object-contain dark:invert p-2"
                    />
                  </div>
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
                  <Button variant="outline" className="w-full font-martian-mono" asChild>
                    <Link href={`/projects/${project.slug}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.section>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-background">
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
      </section> */}

      {/* Contact Section */}
      <section
        id="contact"
        data-testid="contact-section"
        className="min-h-screen bg-black text-white flex flex-col justify-between"
      >
        <motion.section className="container flex-1 flex flex-col mx-auto items-center justify-center px-4 max-w-2xl text-center space-y-8 py-20" {...fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-martian-mono">Get In Touch</h2>
          <p className="text-gray-400 md:text-lg">
            I&apos;m always open to new opportunities. Whether you have a question or want to work together, drop me a line and I&apos;ll get back to you!
          </p>
          <ContactModal>
            <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 font-martian-mono">
              Let&apos;s Talk
            </Button>
          </ContactModal>
        </motion.section>
        {/* Footer */}
        <footer className="py-6 border-t border-gray-400">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dmitri Karasjov. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0 font-martian-mono">
              <Link href="https://dimo89.notion.site/Dmitri-Karasjov-3465cfeaf372809ca11ef8b2512eed2f" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-highlight hover:underline">CV</Link>
              <div className="h-4 w-[1px] bg-gray-400" />
              <Link href="https://github.com/dimo89" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-highlight hover:underline">GitHub</Link>
              <div className="h-4 w-[1px] bg-gray-400" />
              <Link href="https://www.linkedin.com/in/dmitrikarasjov/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-highlight hover:underline">LinkedIn</Link>
            </div>
          </div>
        </footer>
      </section>
    </div >
  );
}
