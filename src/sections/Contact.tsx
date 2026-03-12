import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '12 Excellence Boulevard, Ikorodu Road, Lagos, Nigeria',
    href: '#',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 800 000 0000',
    href: 'tel:+2348000000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'admissions@sarodacademy.edu.ng',
    href: 'mailto:admissions@sarodacademy.edu.ng',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Fri, 8:00 AM – 4:00 PM',
    href: '#',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 300)
  }

  return (
    <section id="contact" className="py-28 bg-slate-50 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-transparent" />

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
            <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.25em]">Get In Touch</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400 rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
            We'd Love to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Hear From You
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Have questions about admissions, academics, or school life? Reach out to us and
            our team will respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Contact info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="group flex items-start gap-4 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">{info.label}</div>
                      <div className="text-sm font-medium text-slate-700 leading-snug">{info.value}</div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Google Maps placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative bg-slate-200 rounded-3xl overflow-hidden aspect-video shadow-lg"
            >
              {/* Map placeholder with blue styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-200 flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-600/40 animate-float">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-slate-700">Sarod Academy</div>
                  <div className="text-sm text-slate-500">Lagos, Nigeria</div>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-full hover:bg-blue-700 transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8 lg:p-10">

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Send us a Message</h3>
                  <p className="text-slate-500 text-sm mb-8">Fill in the form and our admissions team will be in touch shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Adeyemi"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Phone + Subject */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+234 800 000 0000"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Subject
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 appearance-none"
                        >
                          <option value="">Select subject</option>
                          <option value="admissions">Admissions Inquiry</option>
                          <option value="academics">Academic Programs</option>
                          <option value="fees">School Fees</option>
                          <option value="visit">Book a Visit</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-base"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
