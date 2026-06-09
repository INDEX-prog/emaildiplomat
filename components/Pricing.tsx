import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Try EmailDiplomat with limited transforms.",
      features: [
        "5 email transforms per month",
        "Basic tone adjustment",
        "Copy & paste interface",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$10",
      period: "/month",
      description: "For individuals who email a lot.",
      features: [
        "Unlimited email transforms",
        "Advanced diplomatic rewriting",
        "Priority processing",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Team",
      price: "$49",
      period: "/month",
      description: "For HR teams and departments.",
      features: [
        "Everything in Professional",
        "Up to 10 team members",
        "Team usage analytics",
        "Dedicated support",
        "Custom tone presets",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted">
            Start free. Upgrade when you need more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 ${
                plan.popular
                  ? "border-accent bg-white shadow-xl shadow-accent/10"
                  : "border-gray-100 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="font-display font-extrabold text-4xl text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-muted">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#demo"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-accent text-white hover:bg-teal-600"
                    : "bg-navy-900 text-white hover:bg-navy-800"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted">
          All paid plans include a 14-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  );
}
