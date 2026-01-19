"use client"

import { useState } from "react"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Image from 'next/image'

export function Header() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <header className="hidden md:flex sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex py-2 items-center justify-between px-4 relative">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
                    </Link>
                    <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
                        <Button variant="ghost" asChild>
                            <Link href="#expertise">Expertise</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="#projects">Projects</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="#contact">Contact</Link>
                        </Button>
                    </nav>
                    <ThemeToggle />
                </div>
            </header>

            <div className="md:hidden flex justify-center sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <Link href="/" className="flex items-center gap-2 py-2">
                    <Image src="/logo.svg" alt="Logo" width={40} height={40} />
                </Link>
            </div>

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
                        <div className="flex relative flex-col items-center justify-center space-y-4 py-8">
                            <Button variant="ghost" className="text-lg font-medium w-full" onClick={() => setOpen(false)} asChild>
                                <Link href="#about">About</Link>
                            </Button>
                            <Button variant="ghost" className="text-lg font-medium w-full" onClick={() => setOpen(false)} asChild>
                                <Link href="#projects">Projects</Link>
                            </Button>
                            <Button variant="ghost" className="text-lg font-medium w-full" onClick={() => setOpen(false)} asChild>
                                <Link href="#contact">Contact</Link>
                            </Button>
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
