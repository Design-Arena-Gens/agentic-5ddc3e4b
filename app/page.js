export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[length:24px_24px] bg-grid-pattern"
      />

      <div className="container-responsive relative z-10 grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
        <div>
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-brand-blue sm:text-5xl">
            Engineering solutions that power sustainable growth
          </h1>
          <p className="mt-5 max-w-xl text-slate-600">
            Iceem.tn partners with industry leaders to design, automate, and optimize energy
            performance?delivering measurable efficiency, reliability, and ROI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">Get a Quote</a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:ring-offset-2"
            >
              Explore Services
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-5 text-sm text-slate-500">
            <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5 text-brand-green" />ISO-aligned delivery</li>
            <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5 text-brand-green" />Energy savings first</li>
            <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5 text-brand-green" />Industry-grade quality</li>
          </ul>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-200 via-sky-100 to-white shadow-soft">
            <div className="absolute inset-0 animate-[pulse_8s_ease-in-out_infinite] bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,.35),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,.35),transparent_40%)]" />
            <span className="sr-only">Illustrative engineering and energy visuals</span>
          </div>
          <div className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full bg-sky-200/50 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-emerald-200/50 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: 'Energy Audits',
      desc: 'Comprehensive assessments to uncover savings and improve efficiency.',
      Icon: SparkIcon,
    },
    {
      title: 'Industrial Automation',
      desc: 'Design, PLC programming, and SCADA integration for reliability.',
      Icon: ChipIcon,
    },
    {
      title: 'Electrical Engineering',
      desc: 'Turnkey panels, protection studies, and commissioning.',
      Icon: BoltIcon,
    },
    {
      title: 'Solar & Renewables',
      desc: 'Grid-tied and hybrid systems engineered for performance.',
      Icon: SunIcon,
    },
    {
      title: 'Power Quality',
      desc: 'Harmonic analysis, mitigation, and stability improvements.',
      Icon: WaveIcon,
    },
    {
      title: 'Maintenance & Support',
      desc: 'Predictive maintenance and rapid on-site interventions.',
      Icon: ShieldIcon,
    },
  ];

  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white py-20 sm:py-24">
      <div className="container-responsive">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="services-heading" className="section-title">What we do</h2>
          <p className="section-subtitle">
            End-to-end engineering services that reduce energy costs and enhance operational
            excellence.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, Icon }) => (
            <li key={title} className="card">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-brand-sky">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-blue">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        'Iceem helped us cut energy consumption by over 22% in the first year.',
      name: 'Amine H.',
      role: 'Plant Director, FMCG',
    },
    {
      quote:
        'Professional team, fast delivery, and reliable automation?excellent project outcomes.',
      name: 'Nadia B.',
      role: 'Operations Manager, Manufacturing',
    },
    {
      quote:
        'Power quality issues resolved?our uptime improved and maintenance costs dropped.',
      name: 'Karim S.',
      role: 'Electrical Manager, Industrial',
    },
  ];

  return (
    <section aria-labelledby="testimonials-heading" className="bg-sky-50 py-20 sm:py-24">
      <div className="container-responsive">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="testimonials-heading" className="section-title">What our clients say</h2>
          <p className="section-subtitle">Real impact, measurable results.</p>
        </div>
        <Carousel items={testimonials} />
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-brand-blue py-20 sm:py-24">
      <div className="container-responsive relative z-10">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 id="cta-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to unlock efficiency and reliability?
          </h2>
          <p className="mt-4 text-white/80">
            Talk to our engineers about your goals. We respond within 1 business day.
          </p>
          <a href="#contact" className="btn-primary mt-8 inline-flex bg-white text-brand-blue hover:bg-slate-100">
            Contact Us
          </a>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0,rgba(255,255,255,.15),transparent)]" />
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white py-12">
      <div className="container-responsive grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="text-xl font-bold text-brand-blue">Iceem.tn</span>
          <p className="mt-3 max-w-xs text-sm text-slate-600">
            Engineering & energy management services for modern industry.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a className="hover:text-slate-900" href="mailto:contact@iceem.tn">contact@iceem.tn</a></li>
            <li><a className="hover:text-slate-900" href="tel:+21600000000">+216 00 000 000</a></li>
            <li>Tunisia</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Follow</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a className="hover:text-slate-900" href="#" aria-label="LinkedIn">LinkedIn</a></li>
            <li><a className="hover:text-slate-900" href="#" aria-label="Facebook">Facebook</a></li>
            <li><a className="hover:text-slate-900" href="#" aria-label="X">X / Twitter</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a className="hover:text-slate-900" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-slate-900" href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="container-responsive mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
        ? {new Date().getFullYear()} Iceem.tn. All rights reserved.
      </div>
    </footer>
  );
}

function Carousel({ items }) {
  const id = 'carousel';
  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      className="relative mx-auto mt-10 max-w-3xl"
    >
      <CarouselInner id={id} items={items} />
    </div>
  );
}

'use client';
import { useEffect, useMemo, useRef, useState } from 'react';

function CarouselInner({ id, items }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const count = items.length;
  const timerRef = useRef(null);

  const goTo = useMemo(() => (i) => setIndex((i + count) % count), [count]);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [index, isPaused]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="rounded-2xl border border-sky-100 bg-white p-6 shadow-soft"
    >
      <figure className="min-h-[140px]">
        <blockquote className="text-lg leading-7 text-slate-700">
          ?{items[index].quote}?
        </blockquote>
        <figcaption className="mt-4 text-sm text-slate-500">
          <span className="font-medium text-slate-700">{items[index].name}</span> ? {items[index].role}
        </figcaption>
      </figure>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2" aria-label={`Slide ${index + 1} of ${count}`}>
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full transition ${i === index ? 'bg-brand-sky' : 'bg-slate-300 hover:bg-slate-400'}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky"
            aria-label="Previous testimonial"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky"
            aria-label="Next testimonial"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function SparkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4m10-10h-4M6 12H2m14.142 5.657l-2.829-2.829M8.686 8.686 5.857 5.857m11.314 0-2.829 2.829m-5.657 5.657-2.829 2.829" />
    </svg>
  );
}
function ChipIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 6v12M17 6v12M3 10h18M3 14h18" />
    </svg>
  );
}
function BoltIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}
function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}
function WaveIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M2 12s2-4 6-4 6 4 10 4 4-4 4-4" />
    </svg>
  );
}
function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
    </svg>
  );
}
