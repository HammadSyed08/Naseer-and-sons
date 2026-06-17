import Link from 'next/link'

export default function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center border border-stone-100 hover:border-brand-200">
      <div className="w-20 h-20 bg-gradient-to-br from-brand-100 bg-blue-900 to-blue-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-10 h-10" />
      </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
      <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
      <Link
        href="/contact"
        className="text-brand-700 font-semibold hover:text-brand-900 inline-flex items-center gap-1 transition-colors"
      >
        Book Now
        <span className="text-lg leading-none">→</span>
      </Link>
    </div>
  )
}