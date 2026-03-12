import { motion } from 'framer-motion'
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react'

const values = [
  'Academic Excellence',
  'Moral Integrity',
  'Innovation & Creativity',
  'Discipline & Respect',
  'Community Service',
  'Leadership Development',
]

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To provide a world-class secondary education that equips students with the knowledge, skills, and values needed to thrive in a rapidly evolving global society.',
    color: 'bg-blue-600',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be Nigeria\'s leading secondary school, producing well-rounded graduates who are academically brilliant, morally sound, and globally competitive.',
    color: 'bg-blue-800',
  },
  {
    icon: Heart,
    title: 'Core Values',
    text: 'Excellence, Integrity, Innovation, Discipline, Respect, and Service — the six pillars that define the Sarod Academy character.',
    color: 'bg-blue-900',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">

      {/* Decorative background */}
      <div className="absolute -right-32 top-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute -left-32 bottom-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=85&auto=format&fit=crop"
                alt="Students in classroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-2xl p-6 shadow-2xl shadow-blue-900/15 border border-slate-100 w-56"
            >
              <div className="text-4xl font-black text-blue-600 mb-1">15+</div>
              <div className="text-sm font-semibold text-slate-800">Years Shaping</div>
              <div className="text-xs text-slate-500 mt-0.5">Future Leaders</div>
              <div className="mt-3 flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600"
                    style={{ zIndex: 4 - i }}
                  />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                  +50
                </div>
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-4 -left-4 lg:-left-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-5 shadow-xl"
            >
              <div className="text-3xl font-black">Est.</div>
              <div className="text-3xl font-black">2009</div>
            </motion.div>
          </motion.div>

          {/* Right: Content column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
              <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.25em]">About Sarod Academy</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-6">
              Where Excellence{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Meets Purpose
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Founded in 2009, Sarod Academy has grown into one of Nigeria's most respected secondary schools.
              We believe that education goes beyond textbooks — it's about building character, curiosity,
              and capability in every student who walks through our doors.
            </p>

            {/* Mission/Vision/Values cards */}
            <div className="space-y-4 mb-10">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                    className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300 group"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 ${pillar.color} rounded-xl flex items-center justify-center shadow-md`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">{pillar.title}</div>
                      <p className="text-sm text-slate-600 leading-relaxed">{pillar.text}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Core values */}
            <div>
              <div className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Our Core Values</div>
              <div className="grid grid-cols-2 gap-2">
                {values.map((value, i) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    {value}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
