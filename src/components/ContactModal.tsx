"use client"

import { useState } from "react"
import { Copy, Check, Mail, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface ContactModalProps {
    children?: React.ReactNode
}

export function ContactModal({ children }: ContactModalProps) {
    const [open, setOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    const emailAddress = "dmitri.karasjov@gmail.com"

    const handleCopy = async (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault()
            e.stopPropagation()
        }
        try {
            await navigator.clipboard.writeText(emailAddress)
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        } catch (err) {
            console.error("Failed to copy email: ", err)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-[400px] p-5 sm:p-6 overflow-hidden rounded-lg">
                <DialogHeader className="space-y-3">
                    <DialogTitle className="text-2xl font-bold font-martian-mono text-left">
                        Get In Touch
                    </DialogTitle>
                    <DialogDescription className="text-left text-sm text-muted-foreground leading-relaxed">
                        I&apos;d love to connect! You can click the email card below to copy my address, or open it directly in your preferred email client.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-6 py-2">
                    {/* Premium Centered Copyable Card */}
                    <button
                        onClick={(e) => handleCopy(e)}
                        className="group relative flex w-full flex-col items-center justify-center gap-4 rounded-xl border border-border bg-muted/30 p-6 transition-all duration-300 hover:bg-muted/50 hover:border-primary/30 dark:bg-muted/10 dark:hover:bg-muted/20 focus:outline-none focus:ring-2 focus:ring-ring/50 focus:ring-offset-2 cursor-pointer"
                        title="Click to copy email address"
                    >
                        {/* Decorative Top-Right Copy Status Icon */}
                        <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-md border bg-background text-muted-foreground opacity-60 group-hover:opacity-100 group-hover:border-primary/30 transition-all duration-300">
                            {copied ? (
                                <Check className="h-3.5 w-3.5 text-green-500 animate-in fade-in zoom-in-50 duration-300" />
                            ) : (
                                <Copy className="h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-200" />
                            )}
                        </div>

                        {/* Interactive Avatar Icon */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary group-hover:bg-highlight group-hover:text-black transition-colors duration-300 dark:bg-primary/10">
                            <Mail className="h-6 w-6" />
                        </div>

                        {/* Email Details */}
                        <div className="flex flex-col items-center text-center w-full min-w-0">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1 select-none">
                                Email Address
                            </span>
                            <span className="w-full truncate font-martian-mono text-sm sm:text-base font-semibold select-all text-foreground">
                                {emailAddress}
                            </span>
                        </div>
                    </button>

                    {/* Action Button */}
                    <div className="w-full">
                        <Button
                            asChild
                            variant="outline"
                            className="w-full font-martian-mono group hover:bg-highlight hover:text-black dark:hover:bg-highlight dark:hover:text-black transition-all duration-300 h-10 text-sm"
                        >
                            <a href={`mailto:${emailAddress}`}>
                                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                Open Email Client
                            </a>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
