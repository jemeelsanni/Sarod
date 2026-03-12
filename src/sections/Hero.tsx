import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CalendarCheck, ChevronDown } from 'lucide-react'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=85&auto=format&fit=crop',
    alt: 'Students learning in a bright classroom',
    caption: 'Academic Excellence',
  },
  {
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=85&auto=format&fit=crop',
    alt: 'Modern science laboratory',
    caption: 'World-Class Facilities',
  },
  {
    src: 'https://images.unsplash.com/photo-1546519638405-a2e1aaee8d93?w=1600&q=85&auto=format&fit=crop',
    alt: 'Students on the sports field',
    caption: 'Holistic Development',
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=85&auto=format&fit=crop',
    alt: 'Graduation ceremony',
    caption: 'Celebrating Success',
  },
  {
    src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=85&auto=format&fit=crop',
    alt: 'Students in the library',
    caption: 'Lifelong Learners',
  },
]

const SLIDE_DURATION = 5000 // ms

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    setProgress(0)
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
      setProgress(0)
    }, SLIDE_DURATION)
    return () => clearInterval(interval)
  }, [current])

  // Progress bar animation
  useEffect(() => {
    setProgress(0)
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const elapsed = now - start
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100))
      if (elapsed < SLIDE_DURATION) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [current])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Slideshow backgrounds */}
      {slides.map((slide, i) => (
        <AnimatePresence key={slide.src}>
          {i === current && (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* Blue gradient overlay — keeps text readable on any photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-900/60 to-blue-950/80 z-10" />

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-950/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-blue-200 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Now Accepting Applications for 2025/2026
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6 text-balance"
        >
          Raising the Next{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
              Generation
            </span>
            <motion.span
              className="absolute bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
            />
          </span>{' '}
          of Leaders
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-blue-100/80 leading-relaxed mb-12"
        >
          A modern secondary school committed to academic excellence, discipline,
          and innovation — shaping Nigeria's future leaders since 2009.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#admissions"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-2xl shadow-blue-900/40 hover:shadow-blue-900/60 hover:scale-105 transition-all duration-300 text-base"
          >
            Apply for Admission
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-base"
          >
            <CalendarCheck className="w-4 h-4" />
            Book a Visit
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: '15+', label: 'Years of Excellence' },
            { value: '1,000+', label: 'Alumni Worldwide' },
            { value: '95%', label: 'WAEC Pass Rate' },
            { value: '50+', label: 'Qualified Staff' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-blue-200/70 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Slide controls — bottom left */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">

        {/* Current slide caption */}
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold tracking-widest uppercase text-white/50"
          >
            {slides[current].caption}
          </motion.span>
        </AnimatePresence>

        {/* Dot indicators with progress */}
        <div className="flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative h-1 rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
              style={{ width: i === current ? 36 : 16 }}
            >
              {/* Track */}
              <span className="absolute inset-0 bg-white/30 rounded-full" />
              {/* Fill */}
              {i === current && (
                <span
                  className="absolute inset-y-0 left-0 bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
              {i !== current && (
                <span className="absolute inset-0 bg-white/40 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-1 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] font-medium tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
