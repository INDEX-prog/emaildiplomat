import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Our team's email complaints dropped significantly after we started using EmailDiplomat. Game changer for HR.",
      author: "Sarah Chen",
      role: "HR Director",
      company: "TechFlow Inc.",
      image: "https://picsum.photos/seed/person-sarah/80/80",
    },
    {
      quote:
        "I use it daily before sending any difficult email. Saves me from responses I'd regret.",
      author: "Marcus Johnson",
      role: "Team Lead",
      company: "Meridian Systems",
      image: "https://picsum.photos/seed/person-marcus/80/80",
    },
    {
      quote:
        "Simple, fast, effective. Exactly what we needed for improving team communication.",
      author: "Elena Rodriguez",
      role: "Operations Manager",
      company: "Bright Solutions",
      image: "https://picsum.photos/seed/person-elena/80/80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Trusted by HR professionals
          </h2>
          <p className="mt-4 text-lg text-muted">
            See what teams are saying about EmailDiplomat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-2xl border border-gray-100"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-accent"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-display font-semibold text-foreground">
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
