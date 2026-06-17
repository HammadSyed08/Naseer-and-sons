import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/data/services'
import Link from 'next/link'
import { Phone, MapPin, Shield, Users } from 'lucide-react'

export default function Home() {
  const features = [
    { icon: <Shield className="w-8 h-8 text-brand-600" />, title: 'Licensed & Insured', desc: 'All our workers are certified and insured for your peace of mind.' },
    { icon: <Users className="w-8 h-8 text-brand-600" />, title: 'Experienced Team', desc: 'Years of hands‑on experience in Bahawalpur DHA and surrounding areas.' },
    { icon: <MapPin className="w-8 h-8 text-brand-600" />, title: 'Local Experts', desc: 'We know DHA Bahawalpur inside out – fast response, local knowledge.' },
    { icon: <Phone className="w-8 h-8 text-brand-600" />, title: '24/7 Support', desc: 'Reach us anytime on WhatsApp. We’re here when you need us.' },
  ]

  return (
    <>
      <HeroSection />

      {/* Services Overview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Services</h2>
          <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
            Professional building services for your home or office in Bahawalpur DHA.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-brand-700 font-semibold text-lg hover:text-brand-900 transition-colors"
          >
            View All Services →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Why Choose Naseer & Sons?</h2>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              We’ve built our reputation on trust, quality, and punctuality in Bahawalpur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors">
                <div className="mb-5 p-4 bg-white rounded-full shadow-sm">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-700 to-brand-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 text-brand-100">
            Contact us today on WhatsApp for a free consultation and quote.
          </p>
          <a
            href="https://wa.me/923121572571?text=Hello%20Naseer%20%26%20Sons%2C%20I%20need%20a%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-800 text-brand-700 font-bold py-4 px-12 rounded-full hover:bg-green-950 transition-colors shadow-2xl shadow-brand-900/30 text-lg"
          >
            <Phone className="w-6 h-6 mr-2" />
            Chat on WhatsApp: +92 312 1572571
          </a>
        </div>
      </section>
    </>
  )
}