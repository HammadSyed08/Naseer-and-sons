import { MapPin, Calendar, Award } from 'lucide-react'

export const metadata = {
  title: 'About Us',
  description: 'Learn about Naseer & Sons Builders – trusted construction services in Bahawalpur DHA since 2010.',
}

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white">About Naseer & Sons Builders</h1>
        <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
          Your local experts for electrical, plumbing, painting, and tile fixing in Bahawalpur DHA, Punjab.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-white mb-5 leading-relaxed">
            Naseer & Sons Builders started with a simple mission: to provide honest, high‑quality building services to the communities of Bahawalpur. Over the years, we have grown into a trusted name across DHA and beyond, completing hundreds of residential and commercial projects.
          </p>
          <p className="text-white mb-6 leading-relaxed">
            Our team consists of certified electricians, skilled plumbers, meticulous painters, and expert tile fixers – all dedicated to delivering flawless results on time and within budget.
          </p>
          <div className="flex flex-wrap gap-8 mt-8">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-brand-600" />
              <span className="text-white font-semibold">Est. 2010</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-brand-600" />
              <span className="text-white font-semibold">500+ Projects</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-brand-600" />
              <span className="text-white font-semibold">Bahawalpur DHA</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl h-80 flex items-center justify-center text-slate-400 shadow-inner">
          <p className="font-medium">[Team Photo / Office Image]</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-10 md:p-16 text-center border border-stone-100">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Commitment</h2>
        <p className="text-slate-700 max-w-3xl mx-auto text-lg leading-relaxed">
          We believe in transparent pricing, using quality materials, and respecting your home. Every project – big or small – receives our full attention. When you choose Naseer & Sons, you’re choosing peace of mind.
        </p>
      </div>
    </div>
  )
}