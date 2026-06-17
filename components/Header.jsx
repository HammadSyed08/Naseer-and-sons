"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-slate-900">Naseer</span> 
          <span className="text-blue-600 ml-2">&</span>
          <span className="text-slate-900"> Sons</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-600 hover:text-brand-700 transition-colors font-medium text-sm uppercase tracking-wide"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://wa.me/923121572571?text=Hello%20Naseer%20%26%20Sons"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors shadow-lg shadow-green-200"
          >
            <Phone className="w-4 h-4 mr-2" />
            WhatsApp
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-slate-600 hover:text-brand-700 py-2 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/923121572571"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-500 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}