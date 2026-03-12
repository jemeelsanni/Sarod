import { motion } from 'framer-motion'
import { Trophy, Mic2, Drum, Code2 } from 'lucide-react'

const activities = [
  {
    icon: Trophy,
    title: 'Sports & Athletics',
    description: 'Football, basketball, track & field, and more. Our students compete at inter-school and state levels.',
    image: 'https://images.unsplash.com/photo-1546519638405-a2e1aaee8d93?w=700&q=80&auto=format&fit=crop',
    tag: 'Athletics',
  },
  {
    icon: Mic2,
    title: 'Debate Club',
    description: 'Our award-winning debate team hones public speaking, critical thinking, and argumentation skills.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80&auto=format&fit=crop',
    tag: 'Leadership',
  },
  {
    icon: Drum,
    title: 'Cultural Activities',
    description: 'Dance, drama, cultural festivals, and arts keep our rich Nigerian heritage alive on campus.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=700&q=80&auto=format&fit=crop',
    tag: 'Culture',
  },
  {
    icon: Code2,
    title: 'STEM & Coding Club',
    description: 'Students build apps, robots, and projects in our tech club, competing in national STEM challenges.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80&auto=format&fit=crop',
    tag: 'Technology',
  },
]

export default function SchoolLife() {
  return (
    <section id="school-life" className="py-28 bg-white relative overflow-hidden">

      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400 rounded-full" />
            <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.25em]">Student Life</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400 rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
            Life Beyond the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Classroom
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            At Sarod Academy, we believe in holistic development. Our co-curricular programs
            build confidence, teamwork, and character.
          </p>
        </motion.div>

        {/* Activities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, i) => {
            const Icon = activity.icon
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 cursor-default"
              >
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs font-semibold">
                    <Icon className="w-3 h-3" />
                    {activity.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-bold text-white text-lg mb-2 leading-tight">{activity.title}</h3>
                  <p className="text-blue-100/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, white 1px, transparent 1px), radial-gradient(circle at 70% 50%, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Every Student Has a Talent We Help Them Discover
            </h3>
            <p className="text-blue-100/80 mb-6 max-w-lg mx-auto">
              From sports stars to tech innovators — Sarod Academy provides the platform for every student to shine.
            </p>
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Join Our Community
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
