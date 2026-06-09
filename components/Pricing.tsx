import Link from "next/link";

export default function Pricing(): JSX.Element {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "14-day trial",
      description: "Try EmailDiplomat risk-free",
      features: [
        "50 email transformations",
        "Basic tone detection",
        "Web app access",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$10",
      period: "per month",
      description: "For individual users",
      features: [
        "Unlimited transformations",
        "Advanced tone analysis",
        "Browser extension",
        "Priority support",
        "Export history",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Team",
      price: "$49",
      period: "per month",
      description: "Up to 10 team members",
      features: [
        "Everything in Professional",
        "Team dashboard",
        "Communication analytics",
        "Admin controls",
        "Dedicated onboarding",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-muted font-body max-w-2xl mx-auto">
            Start free, upgrade when you need more. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? "bg-navy-900 text-white ring-2 ring-accent"
                  : "bg-white border border-navy-200"
              }`}
            >
              {plan.popular && (
                <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-display font-semibold rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3
                className={`font-display font-bold text-xl ${
                  plan.popular ? "text-white" : "text-navy-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  plan.popular ? "text-navy-300" : "text-muted"
                }`}
              >
                {plan.description}
              </p>
              <div className="mt-6">
                <span
                  className={`font-display font-bold text-4xl ${
                    plan.popular ? "text-white" : "text-navy-900"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`ml-2 text-sm ${
                    plan.popular ? "text-navy-300" : "text-muted"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.popular ? "text-accent" : "text-accent"
                      }`}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span
                      className={`text-sm font-body ${
                        plan.popular ? "text-navy-100" : "text-navy-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="#demo"
                className={`mt-8 block w-full py-3 px-4 rounded-lg font-display font-semibold text-center transition-colors ${
                  plan.popular
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "bg-navy-900 text-white hover:bg-navy-800"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
