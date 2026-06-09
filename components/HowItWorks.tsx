import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Paste Your Email",
      description: "Copy your draft email into EmailDiplomat. Our AI analyzes tone, word choice, and potential friction points.",
    },
    {
      number: "02",
      title: "Review Suggestions",
      description: "See specific improvements highlighted. Accept all changes or customize each suggestion to match your voice.",
    },
    {
      number: "03",
      title: "Send with Confidence",
      description: "Copy your transformed email and send. Build better relationships with every message you write.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/teamwork-office/800/600"
                alt="Team collaborating in modern office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 card p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-navy-900">73%</p>
                  <p className="text-sm text-muted">Less email conflict</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-12">
              Three steps to better emails
            </h2>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-navy-900 flex items-center justify-center">
                      <span className="font-display font-bold text-white">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-10 bg-navy-200 mx-auto mt-3"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display font-semibold text-xl text-navy-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
