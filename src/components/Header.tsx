import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="font-bold text-xl">
                        DevPortfolio
                    </Link>
                </div>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
                    <Link href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</Link>
                    <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
                    <ThemeToggle />
                    <Button variant="outline" size="sm">Download CV</Button>
                </nav>
            </div>
        </header>
    )
}
