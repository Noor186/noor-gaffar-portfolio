"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            NG
          </Link>
          
          {/* Copyright */}
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Noor Gaffar. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-2">
            <Link
              href="https://www.linkedin.com/in/noor-gaffar"
              target="_blank"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/Noor186"
              target="_blank"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:gafernour@gmail.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
