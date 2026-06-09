import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
            Ready to transform your team's communication?
          </h2>
          <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
            Start your free 14-day trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary">
              Start Free Trial
            </Link>
            <Link href="/transform" className="btn-secondary">
              Try a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
