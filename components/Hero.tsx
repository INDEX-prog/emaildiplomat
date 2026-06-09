import Link from "next/link";
import Image from "next/image";

export default function Hero(): JSX.Element {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-navy-900 leading-tight tracking-tight">
              Turn tense emails into{" "}
              <span className="text-accent">diplomatic wins</span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-lg font-body leading-relaxed">
              AI that transforms passive-aggressive workplace messages into
              clear, professional communication your team will appreciate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg font-display font-semibold hover:bg-accent/90 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy-200 text-navy-900 rounded-lg font-display font-semibold hover:border-navy-300 transition-colors"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={`https://picsum.photos/seed/user${i}/80/80`}
                      alt={`User ${i}`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-body text-navy-900 font-semibold">
                  Trusted by 500+ HR leaders
                </p>
                <p className="text-xs text-muted">at growing companies</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <Image
                src="https://picsum.photos/seed/emaildash/800/600"
                alt="EmailDiplomat dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-navy-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900 font-display">
                    Email transformed
                  </p>
                  <p className="text-xs text-muted">Just now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
