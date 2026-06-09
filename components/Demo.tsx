"use client";

import { useState } from "react";

type TransformState = "idle" | "loading" | "success" | "error";

export default function Demo() {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [outputEmail, setOutputEmail] = useState<string>("");
  const [transformState, setTransformState] = useState<TransformState>("idle");
  const [copied, setCopied] = useState<boolean>(false);

  const exampleInput = `Hi Team,

As I mentioned in my PREVIOUS email (which apparently no one read), the deadline was yesterday. I shouldn't have to keep repeating myself. 

It would be nice if people actually did their jobs instead of making excuses.

Thanks for nothing.`;

  const exampleOutput = `Hi Team,

I wanted to follow up on the project deadline that we discussed. I noticed we're a bit behind schedule, and I'd like to understand if there are any blockers I can help with.

Could we schedule a quick sync to align on next steps and ensure we're all set up for success?

Looking forward to working together on this.`;

  const handleTransform = async (): Promise<void> => {
    if (!inputEmail.trim()) return;

    setTransformState("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // For demo purposes, show a transformed version
    // In production, this would call an actual AI API
    try {
      const transformed = simulateTransform(inputEmail);
      setOutputEmail(transformed);
      setTransformState("success");
    } catch {
      setTransformState("error");
    }
  };

  const simulateTransform = (input: string): string => {
    // Simple demonstration - in production this would be an AI call
    if (input.toLowerCase().includes("nothing") || input.toLowerCase().includes("apparently")) {
      return exampleOutput;
    }
    return `I wanted to reach out regarding the matter you mentioned. I understand this is important and would like to work together to find a solution that works for everyone.

Could we discuss this further to ensure we're aligned?

Best regards`;
  };

  const handleCopy = async (): Promise<void> => {
    if (!outputEmail) return;
    await navigator.clipboard.writeText(outputEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLoadExample = (): void => {
    setInputEmail(exampleInput);
    setOutputEmail("");
    setTransformState("idle");
  };

  const handleClear = (): void => {
    setInputEmail("");
    setOutputEmail("");
    setTransformState("idle");
  };

  return (
    <section id="demo" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Try it yourself
          </h2>
          <p className="mt-4 text-lg text-muted">
            Paste an email below and see the transformation in action.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/5 border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Input */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <label
                  htmlFor="email-input"
                  className="font-display font-semibold text-foreground"
                >
                  Your email
                </label>
                <button
                  type="button"
                  onClick={handleLoadExample}
                  className="text-sm text-accent hover:text-teal-600 font-medium transition-colors"
                >
                  Load example
                </button>
              </div>
              <textarea
                id="email-input"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="Paste your email here..."
                className="email-input"
                rows={8}
              />
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={handleTransform}
                  disabled={!inputEmail.trim() || transformState === "loading"}
                  className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {transformState === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Transforming...
                    </span>
                  ) : (
                    "Transform Email"
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-4 py-3 text-muted hover:text-foreground border border-gray-200 rounded-lg transition-colors"
                  aria-label="Clear input"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Output */}
            <div className="p-6 bg-gray-50/50">
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-semibold text-foreground">
                  Diplomatic version
                </span>
                {outputEmail && (
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="text-sm text-accent hover:text-teal-600 font-medium transition-colors flex items-center gap-1"
                  >
                    {copied ? (
                      <>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                )}
              </div>

              <div className="min-h-[180px] p-4 bg-white border-2 border-gray-100 rounded-lg">
                {transformState === "loading" ? (
                  <div className="space-y-3">
                    <div className="h-4 skeleton rounded w-full" />
                    <div className="h-4 skeleton rounded w-5/6" />
                    <div className="h-4 skeleton rounded w-4/6" />
                    <div className="h-4 skeleton rounded w-full mt-4" />
                    <div className="h-4 skeleton rounded w-3/4" />
                  </div>
                ) : transformState === "error" ? (
                  <div className="flex items-center gap-3 text-red-600">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>Something went wrong. Please try again.</span>
                  </div>
                ) : outputEmail ? (
                  <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                    {outputEmail}
                  </p>
                ) : (
                  <p className="text-muted italic">
                    Your transformed email will appear here...
                  </p>
                )}
              </div>

              {transformState === "success" && (
                <div className="mt-4 flex items-center gap-2 text-sm text-accent">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Transformation complete</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          Your emails are processed securely and never stored.
        </p>
      </div>
    </section>
  );
}
