import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    default: 'Naseer & Sons Builders | Professional Construction Services in Bahawalpur DHA',
    template: '%s | Naseer & Sons Builders'
  },
  description: 'Expert electricians, plumbers, painters, and tile fixers in Bahawalpur DHA, Punjab. Quality home construction & renovation services by Naseer & Sons Builders.',
  keywords: ['builder Bahawalpur', 'DHA Bahawalpur construction', 'electrician', 'plumber', 'painter', 'tile fixture', 'Naseer & Sons', 'home renovation Punjab'],
  openGraph: {
    title: 'Naseer & Sons Builders - Trusted Construction Services',
    description: 'Professional building services in Bahawalpur DHA. Contact us on WhatsApp.',
    url: 'https://naseerandsons.com',
    siteName: 'Naseer & Sons Builders',
    locale: 'en_PK',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}