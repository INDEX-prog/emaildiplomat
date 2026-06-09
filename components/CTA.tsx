import Link from "next/link";

export default function CTA(): JSX.Element {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Ready to improve team communication?
              </h2>
              <p className="mt-4 text-navy-300 font-body max-w-lg">
                Start your free 14-day trial. No credit card required.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-display font-semibold hover:bg-accent/90 transition-colors"
              >
                Start Free Trial
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <p className="mt-4 text-sm text-navy-400">
                Join 500+ HR professionals using EmailDiplomat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
