"use client";

import { useState } from "react";

const exampleInput = `Hi team,

As I've mentioned MULTIPLE times before, the reports were due yesterday. I don't understand why this keeps happening. It's really not that hard to meet a simple deadline.

If you can't handle basic responsibilities, maybe we need to have a different conversation.

Thanks (not really),
Sarah`;

const exampleOutput = `Hi team,

I wanted to follow up on the reports that were due yesterday. I understand everyone has competing priorities, and I'd like to discuss how we can better support timely submissions.

Could we schedule a brief check-in to identify any blockers and find solutions together?

Best regards,
Sarah`;

export default function Demo(): JSX.Element {
  const [inputText, setInputText] = useState<string>(exampleInput);
  const [outputText, setOutputText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasTransformed, setHasTransformed] = useState<boolean>(false);

  const handleTransform = (): void => {
    setIsLoading(true);
    setHasTransformed(false);

    setTimeout(() => {
      setOutputText(exampleOutput);
      setIsLoading(false);
      setHasTransformed(true);
    }, 1500);
  };

  const handleReset = (): void => {
    setInputText(exampleInput);
    setOutputText("");
    setHasTransformed(false);
  };

  return (
    <section id="demo" className="py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900">
            See the transformation
          </h2>
          <p className="mt-4 text-muted font-body max-w-2xl mx-auto">
            Paste your email and watch it become diplomatic in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-navy-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-navy-100 flex items-center justify-between">
              <span className="text-sm font-display font-semibold text-navy-900">
                Original Email
              </span>
              <span className="text-xs px-2 py-1 bg-red-50 text-red-600 rounded-full font-body">
                Tense
              </span>
            </div>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your email here..."
              className="w-full h-72 p-4 text-sm font-body text-navy-900 placeholder:text-muted resize-none focus:outline-none"
              aria-label="Original email input"
            />
          </div>

          <div className="bg-white rounded-xl border border-navy-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-navy-100 flex items-center justify-between">
              <span className="text-sm font-display font-semibold text-navy-900">
                Diplomatic Version
              </span>
              {hasTransformed && (
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full font-body">
                  Professional
                </span>
              )}
            </div>
            <div className="w-full h-72 p-4 text-sm font-body text-navy-900 overflow-auto">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                    <span className="text-muted text-sm">Transforming...</span>
                  </div>
                </div>
              ) : outputText ? (
                <pre className="whitespace-pre-wrap font-body">{outputText}</pre>
              ) : (
                <div className="flex items-center justify-center h-full text-muted">
                  Your diplomatic email will appear here
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            type="button"
            onClick={handleTransform}
            disabled={isLoading || !inputText.trim()}
            className="px-6 py-3 bg-accent text-white rounded-lg font-display font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Transforming..." : "Transform Email"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 border-2 border-navy-200 text-navy-900 rounded-lg font-display font-semibold hover:border-navy-300 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
