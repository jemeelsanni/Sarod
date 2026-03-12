import { motion } from 'framer-motion'
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowUpRight } from 'lucide-react'

const links: Record<string, { label: string; href: string | null }[]> = {
  'Quick Links': [
    { label: 'About Us', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'School Life', href: '#school-life' },
    { label: 'Gallery', href: '#gallery' },
  ],
  'Contact': [
    { label: '12 Excellence Blvd, Lagos', href: null },
    { label: '+234 800 000 0000', href: 'tel:+2348000000000' },
    { label: 'admissions@sarodacademy.edu.ng', href: 'mailto:admissions@sarodacademy.edu.ng' },
    { label: 'Mon – Fri, 8AM – 4PM', href: null },
  ],
}

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-base leading-tight">Sarod Academy</div>
                <div className="text-[10px] text-blue-300 font-medium tracking-widest uppercase">Excellence</div>
              </div>
            </a>

            <p className="text-blue-200/70 text-sm leading-relaxed mb-6">
              Raising the next generation of Nigerian leaders through academic excellence, discipline, and innovation since 2009.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Links columns */}
          {Object.entries(links).map(([category, items], colIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (colIdx + 1) * 0.1 }}
            >
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-blue-300 mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-blue-100/60 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {item.label}
                        {item.href.startsWith('http') && (
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    ) : (
                      <span className="text-sm text-blue-100/60 cursor-default select-text">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/10 py-10"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div>
              <div className="font-bold text-white mb-1">Stay Updated</div>
              <div className="text-sm text-blue-200/60">Get news, events, and admission updates in your inbox.</div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-72 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder:text-blue-300/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
              />
              <button className="flex-shrink-0 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-colors text-sm shadow-lg shadow-blue-500/20">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/40">
          <span>© {new Date().getFullYear()} Sarod Academy. All rights reserved.</span>
          <span>
            Designed with ❤️ by{' '}
            <span className="text-blue-300/70 font-semibold">Techscribe Nexus Dynamics Ltd</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
