"use client"

import * as React from "react"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Header() {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <header className="hidden md:flex sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-14 items-center justify-end px-4 relative">
                    <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center space-x-6 text-sm font-medium">
                        <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
                        <Link href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</Link>
                        <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
                    </nav>
                    <div className="flex items-center space-x-2">
                        <ThemeToggle />
                        <Button variant="outline" size="sm">Download CV</Button>
                    </div>
                </div>
            </header>

            <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button
                            size="icon"
                            className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-xl"
                        >
                            <Menu className="h-8 w-8" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="">
                        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                        <div className="flex relative flex-col items-center justify-center space-y-6 py-8">
                            <Link href="#about" onClick={() => setOpen(false)} className="text-lg font-medium transition-colors hover:text-primary">About</Link>
                            <Link href="#projects" onClick={() => setOpen(false)} className="text-lg font-medium transition-colors hover:text-primary">Projects</Link>
                            <Link href="#contact" onClick={() => setOpen(false)} className="text-lg font-medium transition-colors hover:text-primary">Contact</Link>
                            <Button size="sm">Download CV</Button>
                            <div className="absolute top-2 left-2 z-50">
                                <ThemeToggle />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}
