import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Users, BookOpen, FlaskConical } from 'lucide-react'

interface StatItem {
  icon: React.ElementType
  value: number
  suffix: string
  label: string
  description: string
  color: string
}

const stats: StatItem[] = [
  {
    icon: Trophy,
    value: 15,
    suffix: '+',
    label: 'Years of Excellence',
    description: 'Decades of producing top-performing graduates',
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Alumni Worldwide',
    description: 'Graduates excelling across Nigeria and beyond',
    color: 'from-blue-700 to-blue-500',
  },
  {
    icon: BookOpen,
    value: 95,
    suffix: '%',
    label: 'WAEC Success Rate',
    description: 'Consistently high performance in national exams',
    color: 'from-blue-800 to-blue-600',
  },
  {
    icon: FlaskConical,
    value: 12,
    suffix: '+',
    label: 'Equipped Labs',
    description: 'Modern science, computer & digital facilities',
    color: 'from-blue-900 to-blue-700',
  },
]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span className="text-4xl lg:text-5xl font-black text-slate-900">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-slate-50 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400 rounded-full" />
            <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.25em]">Our Track Record</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400 rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
            Numbers That{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Speak for Us
            </span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-blue-100 hover:-translate-y-1 flex flex-col"
              >
                {/* Blue accent bar */}
                <div className={`absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r ${stat.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl mb-6 shadow-lg shadow-blue-500/20 self-start`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Counter */}
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />

                {/* Label */}
                <div className="text-base font-bold text-slate-800 mt-1 mb-2">{stat.label}</div>

                {/* Description — pushed to fill remaining space */}
                <p className="text-sm text-slate-500 leading-relaxed mt-auto">{stat.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
