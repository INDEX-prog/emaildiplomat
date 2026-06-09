import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Paste your email",
      description:
        "Copy the email you want to transform and paste it into the input field.",
    },
    {
      number: "02",
      title: "Click transform",
      description:
        "Our AI analyzes tone, context, and intent to craft a diplomatic version.",
    },
    {
      number: "03",
      title: "Send with confidence",
      description:
        "Copy the result and send. Your message is clear and professional.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/professional-typing/600/500"
                alt="Professional typing on laptop"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-xl max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-lg">
                    3 sec
                  </p>
                  <p className="text-muted text-xs">avg. transform time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Three steps to better emails
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-lg">
              No learning curve. No complicated settings. Just results.
            </p>

            <div className="mt-12 space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center">
                    <span className="font-display font-bold text-accent text-lg">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-400 leading-relaxed">
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
