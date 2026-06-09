import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "EmailDiplomat saved our team from so many awkward conversations. It's like having a communications coach in your pocket.",
      author: "Marie Laurent",
      role: "HR Director",
      company: "TechFlow Solutions",
      avatar: "https://picsum.photos/seed/face-marie/100/100",
    },
    {
      quote: "I used to spend 20 minutes rewriting sensitive emails. Now it takes seconds and the results are better than what I wrote.",
      author: "Thomas Chen",
      role: "Team Lead",
      company: "Nexus Digital",
      avatar: "https://picsum.photos/seed/face-thomas/100/100",
    },
    {
      quote: "Our internal communication scores improved by 40% after rolling out EmailDiplomat to all managers.",
      author: "Sophie Martin",
      role: "COO",
      company: "Bright Consulting",
      avatar: "https://picsum.photos/seed/face-sophie/100/100",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Trusted by HR leaders everywhere
          </h2>
          <p className="text-lg text-muted">
            See what teams are saying about better email communication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              {/* Quote */}
              <div className="flex-1 card p-6 mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-accent/20 mb-4"
                >
                  <path
                    d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 0-1 1 1 1z"
                    fill="currentColor"
                  />
                  <path
                    d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                    fill="currentColor"
                  />
                </svg>
                <p className="text-navy-800 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display font-semibold text-navy-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
