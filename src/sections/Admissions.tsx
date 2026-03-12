import { motion } from 'framer-motion'
import { FileText, Upload, PenTool, CheckCircle, ArrowRight, Star } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Purchase Admission Form',
    description: 'Obtain the official Sarod Academy admission form online or at our administrative office. The form fee is non-refundable.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '02',
    icon: Upload,
    title: 'Submit Required Documents',
    description: 'Provide birth certificate, previous school report cards (last 2 years), passport photograph, and parent/guardian ID.',
    color: 'from-blue-600 to-blue-700',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Take Entrance Examination',
    description: 'Sit for our entrance exam in English Language, Mathematics, and General Knowledge. Exams are held every January and July.',
    color: 'from-blue-700 to-blue-800',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Receive Admission Decision',
    description: 'Results are communicated within 2 weeks. Successful candidates receive an offer letter and school fee schedule.',
    color: 'from-blue-800 to-blue-900',
  },
]

const highlights = [
  { label: 'Application Fee', value: '₦5,000' },
  { label: 'Exam Dates', value: 'Jan & Jul' },
  { label: 'Available Spaces', value: 'Limited' },
  { label: 'Response Time', value: '2 Weeks' },
]

export default function Admissions() {
  return (
    <section id="admissions" className="py-28 bg-white relative overflow-hidden">

      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70 -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

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
            <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.25em]">Admissions 2025/2026</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400 rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
            Begin Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Journey Here
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Joining Sarod Academy is a straightforward process. Follow these four steps
            to secure your child's place in our next academic session.
          </p>
        </motion.div>

        {/* Quick highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
        >
          {highlights.map((h) => (
            <div
              key={h.label}
              className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center"
            >
              <div className="text-2xl font-black text-blue-700 mb-1">{h.value}</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{h.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-10" style={{ left: 'calc(100% - 24px)', width: 'calc(100% + 48px)' }} />
                )}

                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-500 h-full">

                  {/* Step number */}
                  <div className="text-6xl font-black text-blue-50 leading-none mb-4 select-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-3xl p-10 sm:p-16 text-center overflow-hidden"
        >
          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to Shape Your Future?
            </h3>
            <p className="text-blue-100/80 text-lg mb-8 max-w-2xl mx-auto">
              Applications for the 2025/2026 academic session are now open. Spaces are
              limited — secure your child's place today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-10 py-4 bg-white text-blue-700 font-black rounded-full shadow-2xl hover:shadow-blue-900/50 hover:scale-105 transition-all duration-300 text-lg"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+2348000000000"
                className="inline-flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors"
              >
                Or call us: +234 800 000 0000
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
