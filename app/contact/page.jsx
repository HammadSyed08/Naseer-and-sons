"use client"

import { useEffect } from 'react'
import { Phone } from 'lucide-react'

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/923121572571?text=Hello%20Naseer%20%26%20Sons%2C%20I%20need%20a%20service."

  useEffect(() => {
    // Auto-redirect to WhatsApp after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = whatsappUrl
    }, 2000)
    return () => clearTimeout(timer)
  }, [whatsappUrl])

  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center">
      <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
        <Phone className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Redirecting you to WhatsApp...
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          You will be connected to our team in a moment. If the redirect doesn’t work, click the button below.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-colors shadow-lg"
        >
          <Phone className="w-5 h-5 mr-2" />
          Open WhatsApp: +92 312 1572571
        </a>
      </div>
    </div>
  )
}