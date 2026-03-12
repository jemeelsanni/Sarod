import { motion } from 'framer-motion'
import { ZoomIn, ArrowRight, Images } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { galleryImages } from '../lib/galleryData'
import Lightbox from '../components/Lightbox'

// Show a curated preview of 7 images on the home page
const previewIds = [1, 4, 7, 10, 13, 15, 21]
const previewImages = galleryImages.filter((img) => previewIds.includes(img.id))

const gridSpans = [
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
]

export default function Gallery() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-28 bg-slate-50 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent" />

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
            <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.25em]">Gallery</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400 rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
            A Glimpse into{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Campus Life
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Explore our vibrant campus, world-class facilities, and the memorable moments
            that define the Sarod Academy experience.
          </p>
        </motion.div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4" style={{ gridAutoRows: '200px' }}>
          {previewImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer ${gridSpans[i]}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setLightboxIndex(galleryImages.findIndex((g) => g.id === img.id))}
            >
              <img
                src={img.thumb}
                alt={img.alt}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out ${hoveredIdx === i ? 'scale-110' : 'scale-100'}`}
              />

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/20 to-transparent transition-opacity duration-400 ${hoveredIdx === i ? 'opacity-100' : 'opacity-0'}`} />

              {/* Label on hover */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-400 ${hoveredIdx === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-sm">{img.category}</span>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Always-visible tag */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            <Images className="w-4 h-4" />
            Showing 7 of {galleryImages.length} photos
          </p>
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Preview lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  )
}
