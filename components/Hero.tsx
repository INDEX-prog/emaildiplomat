import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight text-foreground">
              Turn tense emails into
              <span className="text-accent"> team wins</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-[50ch]">
              Paste your email, get a diplomatic version in seconds. Keep your
              intent, lose the conflict.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#demo" className="btn-primary">
                Start Free Trial
              </Link>
              <Link href="#how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              14-day free trial. No credit card required.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <Image
                src="https://picsum.photos/seed/teamwork-office/640/480"
                alt="Team collaborating in modern office"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">
                      Email transformed
                    </p>
                    <p className="text-muted text-xs mt-0.5">
                      Your message is now ready to send
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-accent/5 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
