import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 text-white overflow-hidden">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Build Your Dream with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            Naseer & Sons
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Trusted electricians, plumbers, painters & tile fixers serving Bahawalpur DHA.
          Quality work, on time – every time.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-white text-black font-semibold py-3.5 px-10 rounded-full hover:bg-stone-300 transition-all shadow-lg shadow-white/20"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="bg-green-500 text-white font-semibold py-3.5 px-10 rounded-full hover:bg-green-600 transition-all shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"
          >
            WhatsApp Now
          </Link>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L48 53.3C96 46.7 192 33.3 288 40C384 46.7 480 73.3 576 80C672 86.7 768 73.3 864 64C960 54.7 1056 49.3 1152 53.3C1248 57.3 1344 70.7 1392 77.3L1440 84V120H0V60Z" fill="#fafaf9" />
        </svg>
      </div>
    </section>
  )
}