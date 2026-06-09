import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
          Ready to transform your emails?
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Join HR professionals who trust EmailDiplomat for better workplace communication.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-navy-900 bg-white rounded-lg transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900"
          >
            Start Free Trial
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white border-2 border-white/30 rounded-lg transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900"
          >
            View Pricing
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
