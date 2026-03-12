import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, FlaskConical, Monitor, Globe, Music, Calculator, Palette } from 'lucide-react'

const programs = [
  {
    icon: BookOpen,
    title: 'Junior Secondary School',
    description: 'JSS 1–3 provides a strong academic foundation with a broad curriculum covering sciences, arts, and humanities in a nurturing environment.',
    features: ['English Language', 'Mathematics', 'Basic Science', 'Social Studies', 'Civic Education'],
    color: 'from-blue-500 to-blue-600',
    shadow: 'shadow-blue-500/20',
    bg: 'bg-blue-50',
  },
  {
    icon: GraduationCap,
    title: 'Senior Secondary School',
    description: 'SSS 1–3 offers three science, art, and commercial tracks that prepare students thoroughly for WAEC, NECO, and JAMB examinations.',
    features: ['Science Track', 'Arts Track', 'Commercial Track', 'WAEC Preparation', 'University Counseling'],
    color: 'from-blue-600 to-blue-700',
    shadow: 'shadow-blue-600/20',
    bg: 'bg-blue-50',
  },
  {
    icon: FlaskConical,
    title: 'Science Laboratories',
    description: 'Our fully equipped physics, chemistry, and biology labs give students hands-on experience that bridges theory with real-world application.',
    features: ['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Practical Sessions', 'Research Projects'],
    color: 'from-blue-700 to-blue-800',
    shadow: 'shadow-blue-700/20',
    bg: 'bg-blue-50',
  },
  {
    icon: Monitor,
    title: 'Digital Learning',
    description: 'A modern ICT suite with high-speed internet, programming courses, and digital literacy programs prepares students for the 21st century.',
    features: ['Computer Science', 'Coding & Programming', 'Digital Literacy', 'Online Resources', 'STEM Projects'],
    color: 'from-blue-800 to-blue-900',
    shadow: 'shadow-blue-800/20',
    bg: 'bg-blue-50',
  },
  {
    icon: Globe,
    title: 'Languages & Humanities',
    description: 'We nurture communication skills through English, Literature, Yoruba, and social science subjects that develop critical thinking.',
    features: ['English & Literature', 'Yoruba Language', 'History', 'Government', 'CRS/IRS'],
    color: 'from-blue-500 to-blue-700',
    shadow: 'shadow-blue-500/20',
    bg: 'bg-blue-50',
  },
  {
    icon: Calculator,
    title: 'Mathematics & Sciences',
    description: 'Dedicated mathematics and further maths programs with experienced teachers achieve some of Nigeria\'s highest WAEC scores.',
    features: ['Mathematics', 'Further Mathematics', 'Physics', 'Chemistry', 'Biology'],
    color: 'from-blue-600 to-blue-800',
    shadow: 'shadow-blue-600/20',
    bg: 'bg-blue-50',
  },
  {
    icon: Music,
    title: 'Creative Arts',
    description: 'Music, fine arts, and drama programs develop creativity and self-expression, ensuring students are well-rounded individuals.',
    features: ['Music Theory', 'Fine Arts', 'Drama & Theatre', 'Visual Arts', 'Cultural Arts'],
    color: 'from-blue-700 to-blue-900',
    shadow: 'shadow-blue-700/20',
    bg: 'bg-blue-50',
  },
  {
    icon: Palette,
    title: 'Vocational Studies',
    description: 'Practical vocational courses in home economics, agricultural science, and technical drawing add real-world skills.',
    features: ['Home Economics', 'Agricultural Science', 'Technical Drawing', 'Food Technology', 'Entrepreneurship'],
    color: 'from-blue-800 to-blue-950',
    shadow: 'shadow-blue-800/20',
    bg: 'bg-blue-50',
  },
]

export default function Academics() {
  return (
    <section id="academics" className="py-28 bg-slate-50 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-slate-100/50" />

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
            <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.25em]">Academic Programs</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400 rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
            A Curriculum Built for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Tomorrow
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Our comprehensive programs are designed to challenge, inspire, and prepare every student
            for success in university and life beyond.
          </p>
        </motion.div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((program, i) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-100 transition-all duration-500 cursor-default`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-5 shadow-lg ${program.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {program.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className={`w-1.5 h-1.5 bg-gradient-to-br ${program.color} rounded-full flex-shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Hover bottom accent */}
                <div className={`mt-5 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  Learn More
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
