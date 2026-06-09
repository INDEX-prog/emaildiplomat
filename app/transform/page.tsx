"use client";

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type TransformState = 'idle' | 'loading' | 'success' | 'error';

export default function TransformPage() {
  const [inputEmail, setInputEmail] = useState<string>('');
  const [outputEmail, setOutputEmail] = useState<string>('');
  const [state, setState] = useState<TransformState>('idle');
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleTransform = async () => {
    if (!inputEmail.trim()) {
      setError('Please enter an email to transform.');
      setState('error');
      return;
    }

    setState('loading');
    setError('');

    try {
      const response = await fetch('/api/transform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: inputEmail }),
      });

      if (!response.ok) {
        throw new Error('Failed to transform email');
      }

      const data = await response.json() as { transformed: string };
      setOutputEmail(data.transformed);
      setState('success');
    } catch {
      setError('Something went wrong. Please try again.');
      setState('error');
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(outputEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = outputEmail;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClear = () => {
    setInputEmail('');
    setOutputEmail('');
    setState('idle');
    setError('');
  };

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Transform Your Email
            </h1>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Paste your email below and watch it become more diplomatic and professional.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <label htmlFor="input-email" className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <span className="font-display font-medium text-navy-900">Your Original Email</span>
              </label>
              <textarea
                id="input-email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="Paste your email here... e.g., 'As per my previous email that you clearly didn't read...'"
                className="input-field min-h-[300px] resize-none"
                aria-label="Original email input"
              />
              
              <div className="mt-4 flex gap-3">
                <button
                  onClick={handleTransform}
                  disabled={state === 'loading'}
                  className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Transforming...
                    </span>
                  ) : (
                    'Transform Email'
                  )}
                </button>
                <button
                  onClick={handleClear}
                  className="btn-secondary"
                  type="button"
                >
                  Clear
                </button>
              </div>

              {state === 'error' && error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}
            </div>

            {/* Output Section */}
            <div>
              <label htmlFor="output-email" className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="font-display font-medium text-navy-900">Diplomatic Version</span>
              </label>
              
              {state === 'loading' ? (
                <div className="min-h-[300px] bg-white border border-navy-200 rounded-lg p-4">
                  <div className="space-y-3 animate-pulse">
                    <div className="h-4 bg-navy-100 rounded w-3/4"></div>
                    <div className="h-4 bg-navy-100 rounded w-full"></div>
                    <div className="h-4 bg-navy-100 rounded w-5/6"></div>
                    <div className="h-4 bg-navy-100 rounded w-2/3"></div>
                    <div className="h-4 bg-navy-100 rounded w-full"></div>
                    <div className="h-4 bg-navy-100 rounded w-4/5"></div>
                  </div>
                </div>
              ) : state === 'success' && outputEmail ? (
                <div className="min-h-[300px] bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <p className="text-navy-900 whitespace-pre-wrap leading-relaxed">
                    {outputEmail}
                  </p>
                </div>
              ) : (
                <div className="min-h-[300px] bg-navy-50 border border-navy-200 rounded-lg p-4 flex items-center justify-center">
                  <p className="text-muted text-center">
                    Your transformed email will appear here.
                  </p>
                </div>
              )}

              {state === 'success' && outputEmail && (
                <div className="mt-4">
                  <button
                    onClick={handleCopy}
                    className="btn-primary w-full"
                  >
                    {copied ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Copied!
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                        Copy to Clipboard
                      </span>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Upgrade prompt */}
          <div className="mt-16 card p-8 text-center">
            <h2 className="font-display text-xl font-semibold text-navy-900 mb-2">
              Want unlimited transformations?
            </h2>
            <p className="text-muted mb-6">
              Start your free 14-day trial and transform as many emails as you need.
            </p>
            <Link href="/signup" className="btn-primary">
              Start Free Trial
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
