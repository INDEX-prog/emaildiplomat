import Image from "next/image";

export default function HowItWorks(): JSX.Element {
  const steps = [
    {
      number: "01",
      title: "Paste your email",
      description: "Copy the email you want to transform into the input field.",
    },
    {
      number: "02",
      title: "AI analyzes tone",
      description:
        "Our AI detects passive-aggressive language and tension points.",
    },
    {
      number: "03",
      title: "Get diplomatic version",
      description:
        "Receive a professional rewrite that keeps your intent clear.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-display text-sm font-semibold uppercase tracking-wide">
              How It Works
            </span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-white">
              Three steps to better communication
            </h2>

            <div className="mt-12 space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="font-display font-bold text-accent">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-navy-300 font-body text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/teamwork/700/500"
                alt="Team collaborating"
                width={700}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
