import React, { useEffect, useMemo, useRef, useState } from 'react';

const Testimonials = () => {
  const testimonials = useMemo(
    () => [
      {
        quote:
          'Shivansh delivered an exceptional full-stack solution. Performance and code quality were outstanding.',
        name: 'Ananya Sharma',
        title: 'Product Manager, FinTech Co.',
      },
      {
        quote:
          'Great attention to detail and ownership. The React UI felt premium and the backend was rock-solid.',
        name: 'Rahul Verma',
        title: 'Engineering Lead, HealthTech',
      },
      {
        quote:
          'He transformed our ideas into a beautiful, scalable product. Highly recommend working with him.',
        name: 'Priya Singh',
        title: 'Founder, ShopEase',
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [testimonials.length]);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="py-32 bg-primary-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[900px] rounded-full border border-white/5" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">What People Say</h2>
        <p className="text-xl text-slate-300 mb-14">Endorsements from collaborators and clients</p>

        <div className="glass blue-border rounded-3xl p-10 md:p-12 card-accent shine-on-hover">
          <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed mb-8">“{current.quote}”</p>
          <div className="text-slate-400 font-medium">
            <span className="text-white font-semibold">{current.name}</span> • {current.title}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === index ? 'bg-sky-400' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


