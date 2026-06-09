"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <span className="font-display font-bold text-xl text-navy-900">EmailDiplomat</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-muted hover:text-navy-900 transition-colors font-medium">
              Features
            </Link>
            <Link href="#how-it-works" className="text-muted hover:text-navy-900 transition-colors font-medium">
              How It Works
            </Link>
            <Link href="#pricing" className="text-muted hover:text-navy-900 transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/transform" className="text-muted hover:text-navy-900 transition-colors font-medium">
              Try It
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-navy-900 font-medium hover:text-accent transition-colors">
              Log In
            </Link>
            <Link href="/signup" className="btn-primary">
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-navy-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-navy-100">
            <nav className="flex flex-col gap-4">
              <Link href="#features" className="text-muted hover:text-navy-900 transition-colors font-medium px-2 py-1">
                Features
              </Link>
              <Link href="#how-it-works" className="text-muted hover:text-navy-900 transition-colors font-medium px-2 py-1">
                How It Works
              </Link>
              <Link href="#pricing" className="text-muted hover:text-navy-900 transition-colors font-medium px-2 py-1">
                Pricing
              </Link>
              <Link href="/transform" className="text-muted hover:text-navy-900 transition-colors font-medium px-2 py-1">
                Try It
              </Link>
              <hr className="border-navy-100" />
              <Link href="/login" className="text-navy-900 font-medium px-2 py-1">
                Log In
              </Link>
              <Link href="/signup" className="btn-primary text-center">
                Start Free Trial
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
