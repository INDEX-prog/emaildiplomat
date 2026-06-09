import Image from "next/image";

export default function Testimonials(): JSX.Element {
  const testimonials = [
    {
      quote:
        "Our HR complaints about email tone dropped significantly after introducing EmailDiplomat to team leads.",
      author: "Marie Chen",
      role: "HR Director",
      company: "TechFlow Inc",
      image: "hr-marie",
    },
    {
      quote:
        "I used to spend hours rephrasing difficult emails. Now it takes seconds and the results are better.",
      author: "James Parker",
      role: "Team Lead",
      company: "Nexus Solutions",
      image: "lead-james",
    },
    {
      quote:
        "Finally a tool that understands workplace dynamics. Essential for any people-focused organization.",
      author: "Sarah Williams",
      role: "People Operations",
      company: "GrowthLab",
      image: "ops-sarah",
    },
  ];

  return (
    <section className="py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900">
            Loved by HR teams everywhere
          </h2>
          <p className="mt-4 text-muted font-body max-w-2xl mx-auto">
            See how teams are transforming their workplace communication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-navy-100"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-accent"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-navy-900 font-body leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/${testimonial.image}/80/80`}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-navy-900">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted">
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
