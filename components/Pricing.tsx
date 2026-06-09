"use client";

import Link from 'next/link';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  href: string;
}

export default function Pricing() {
  const tiers: PricingTier[] = [
    {
      name: "Starter",
      price: "$0",
      period: "14-day trial",
      description: "Try EmailDiplomat risk-free",
      features: [
        "50 email transformations",
        "Basic tone analysis",
        "Copy-paste interface",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
      href: "/signup?plan=trial",
    },
    {
      name: "Professional",
      price: "$10",
      period: "/month",
      description: "For individual professionals",
      features: [
        "Unlimited transformations",
        "Advanced AI analysis",
        "Tone customization",
        "Email history saved",
        "Priority support",
      ],
      cta: "Get Started",
      popular: true,
      href: "/signup?plan=professional",
    },
    {
      name: "Team",
      price: "$8",
      period: "/user/month",
      description: "For teams of 5+ members",
      features: [
        "Everything in Professional",
        "Team dashboard",
        "Shared style guidelines",
        "Usage analytics",
        "Admin controls",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      popular: false,
      href: "/contact",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-navy-300">
            Start free, upgrade when you need more. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                tier.popular
                  ? 'bg-white ring-2 ring-accent'
                  : 'bg-navy-800 border border-navy-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display font-semibold text-xl mb-2 ${
                  tier.popular ? 'text-navy-900' : 'text-white'
                }`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${tier.popular ? 'text-muted' : 'text-navy-400'}`}>
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`font-display text-4xl font-bold ${
                  tier.popular ? 'text-navy-900' : 'text-white'
                }`}>
                  {tier.price}
                </span>
                <span className={`${tier.popular ? 'text-muted' : 'text-navy-400'}`}>
                  {tier.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
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
                      className={`flex-shrink-0 mt-0.5 ${
                        tier.popular ? 'text-accent' : 'text-teal-400'
                      }`}
                    >
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className={`text-sm ${
                      tier.popular ? 'text-navy-700' : 'text-navy-300'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                  tier.popular
                    ? 'bg-accent text-white hover:bg-teal-700'
                    : 'bg-navy-700 text-white hover:bg-navy-600 border border-navy-600'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-navy-400 text-sm mt-10">
          All plans include a 14-day money-back guarantee. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
