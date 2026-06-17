import ServiceCard from '@/components/ServiceCard'
import { services } from '@/data/services'
import { Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Our Services',
  description: 'Electrician, plumber, painter, tile fixture and more in Bahawalpur DHA. View all services by Naseer & Sons Builders.',
}

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
        <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
          From small repairs to full renovations, we have the right team for the job. All services available in Bahawalpur DHA and nearby areas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-20 text-center bg-white rounded-2xl p-10 md:p-16 shadow-sm border border-stone-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Need a service not listed?</h2>
        <p className="text-slate-600 mb-8 text-lg">
          We are constantly expanding our offerings. Get in touch and we’ll find the right professional for you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-brand-600 bg-green-800 text-white font-semibold py-3.5 px-10 rounded-full hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200 text-lg"
        >
          <Phone className="w-5 h-5 mr-2" />
          Contact Us
        </Link>
      </div>
    </div>
  )
}