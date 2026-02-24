"use client"

import { useState } from "react"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import Image from 'next/image'

export function Header({ activeSection }: { activeSection: string }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <header className="hidden md:block sticky top-0 z-50 w-full bg-background">
                <div className="container mx-auto flex py-2 items-center justify-between px-4 relative">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.svg" alt="Logo" width={40} height={40} className="dark:invert" />
                    </Link>
                    <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
                        <Button variant={activeSection === 'expertise' ? 'outline' : 'ghost'} asChild >
                            <Link href="#expertise">Expertise</Link>
                        </Button>
                        <Button variant={activeSection === 'stack' ? 'outline' : 'ghost'} asChild>
                            <Link href="#stack">Tech Stack</Link>
                        </Button>
                        <Button variant={activeSection === 'projects' ? 'outline' : 'ghost'} asChild>
                            <Link href="#projects">Projects</Link>
                        </Button>
                        <Button variant={activeSection === 'contact' ? 'outline' : 'ghost'} asChild>
                            <Link href="#contact">Contact</Link>
                        </Button>
                    </nav>
                    <ThemeToggle />
                </div>
            </header>

            <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button
                            size="icon"
                            className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-xl bg-highlight"
                        >
                            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="">
                        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                        <div className="flex relative flex-col items-center justify-center space-y-4 pt-8">
                            <Button variant={activeSection === 'expertise' ? 'outline' : 'ghost'} className="text-lg font-medium w-full" onClick={() => setOpen(false)} asChild>
                                <Link href="#expertise">Expertise</Link>
                            </Button>
                            <Button variant={activeSection === 'stack' ? 'outline' : 'ghost'} className="text-lg font-medium w-full" onClick={() => setOpen(false)} asChild>
                                <Link href="#stack">Tech Stack</Link>
                            </Button>
                            <Button variant={activeSection === 'projects' ? 'outline' : 'ghost'} className="text-lg font-medium w-full" onClick={() => setOpen(false)} asChild>
                                <Link href="#projects">Projects</Link>
                            </Button>
                            <Button variant={activeSection === 'contact' ? 'outline' : 'ghost'} className="text-lg font-medium w-full" onClick={() => setOpen(false)} asChild>
                                <Link href="#contact">Contact</Link>
                            </Button>
                            <div className="absolute top-2 left-2 z-50">
                                <ThemeToggle />
                            </div>
                        </div>
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
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}
