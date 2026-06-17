import { Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">
            Naseer <span className="text-brand-400">&</span> Sons
          </h3>
          <p className="text-slate-400 leading-relaxed">
            Professional electrical, plumbing, painting and tile fixing services in Bahawalpur DHA, Punjab.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">Reach Us</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-400" />
              <a href="https://wa.me/923121572571" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                +92 312 1572571
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-brand-400" />
              <span>DHA, Bahawalpur, Punjab</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 text-center py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Naseer & Sons Builders. All rights reserved.
      </div>
    </footer>
  )
}