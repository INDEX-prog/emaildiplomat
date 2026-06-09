import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 lg:pt-24 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 text-accent rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              AI-Powered Email Transformation
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-navy-900 leading-[1.1] tracking-tight mb-6">
              Transform conflict into{' '}
              <span className="text-accent">collaboration</span>
            </h1>
            
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
              Turn passive-aggressive emails into diplomatic messages instantly. Better communication for your entire team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/transform" className="btn-primary text-center">
                Try It Free
              </Link>
              <Link href="#how-it-works" className="btn-secondary text-center">
                See How It Works
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 pt-8 border-t border-navy-100">
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src={`https://picsum.photos/seed/user${i}/80/80`}
                        alt="User"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-display font-semibold text-navy-900">500+ HR managers</p>
                  <p className="text-sm text-muted">Trust EmailDiplomat for team communication</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative lg:ml-auto">
            <div className="relative z-10 card p-6 lg:p-8 max-w-md mx-auto lg:mx-0">
              {/* Before email */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span className="text-xs font-medium text-muted uppercase tracking-wide">Before</span>
                </div>
                <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                  <p className="text-sm text-navy-800 italic">
                    "As I mentioned in my last 3 emails, the report was due yesterday. I guess some of us have different definitions of 'urgent'."
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>

              {/* After email */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-xs font-medium text-muted uppercase tracking-wide">After</span>
                </div>
                <div className="bg-teal-50 border border-teal-100 rounded-lg p-4">
                  <p className="text-sm text-navy-800">
                    "Hi Sarah, I wanted to follow up on the quarterly report. I understand you may have competing priorities—is there anything I can do to help move this forward?"
                  </p>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-accent/10 rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
