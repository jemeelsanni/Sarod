import { useEffect, useCallback, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Tag,
} from 'lucide-react'
import type { GalleryImage } from '../lib/galleryData'

interface LightboxProps {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const [zoomed, setZoomed] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const image = images[currentIndex]

  const prev = useCallback(() => {
    setImgLoaded(false)
    setZoomed(false)
    onNavigate((currentIndex - 1 + images.length) % images.length)
  }, [currentIndex, images.length, onNavigate])

  const next = useCallback(() => {
    setImgLoaded(false)
    setZoomed(false)
    onNavigate((currentIndex + 1) % images.length)
  }, [currentIndex, images.length, onNavigate])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') onClose()
      if (e.key === 'z' || e.key === 'Z') setZoomed((z) => !z)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [prev, next, onClose])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Reset loaded state on image change
  useEffect(() => {
    setImgLoaded(false)
    setZoomed(false)
  }, [currentIndex])

  // Touch / swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) delta < 0 ? next() : prev()
    touchStartX.current = null
  }

  const openExternal = () => window.open(image.src, '_blank', 'noopener,noreferrer')

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* ── Top bar ── */}
        <div className="flex-shrink-0 flex items-center justify-between px-4 sm:px-6 py-4 bg-black/40 border-b border-white/5 z-10">

          {/* Left: counter + category */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-white/70 tabular-nums">
              {currentIndex + 1}
              <span className="text-white/30 mx-1">/</span>
              {images.length}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-600/80 rounded-full text-[11px] font-bold text-white uppercase tracking-wide">
              <Tag className="w-3 h-3" />
              {image.category}
            </span>
          </div>

          {/* Center: image caption (desktop) */}
          <AnimatePresence mode="wait">
            <motion.p
              key={image.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:block text-sm text-white/60 max-w-md text-center truncate"
            >
              {image.caption}
            </motion.p>
          </AnimatePresence>

          {/* Right: actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setZoomed((z) => !z)}
              title={zoomed ? 'Zoom out (Z)' : 'Zoom in (Z)'}
              className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {zoomed ? <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" /> : <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
            <button
              onClick={openExternal}
              title="Open full resolution"
              className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <a
              href={image.src}
              download
              target="_blank"
              rel="noopener noreferrer"
              title="Download image"
              className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <div className="w-px h-5 bg-white/10 mx-1 hidden sm:block" />
            <button
              onClick={onClose}
              title="Close (Esc)"
              className="p-2 text-white/60 hover:text-white hover:bg-red-500/20 hover:border-red-500/30 border border-transparent rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Main image area ── */}
        <div
          className="relative flex-1 flex items-center justify-center overflow-hidden"
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >

          {/* Prev arrow */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center max-w-[calc(100%-88px)] sm:max-w-[calc(100%-120px)] max-h-full"
            >
              {/* Loading skeleton */}
              {!imgLoaded && (
                <div className="absolute inset-0 bg-white/5 animate-pulse rounded-xl" style={{ minWidth: 300, minHeight: 200 }} />
              )}
              <img
                src={image.src}
                alt={image.alt}
                onLoad={() => setImgLoaded(true)}
                onClick={() => setZoomed((z) => !z)}
                className={`max-w-full max-h-[calc(100vh-200px)] object-contain rounded-xl shadow-2xl cursor-zoom-in transition-transform duration-500 select-none ${
                  zoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'
                } ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Next arrow */}
          <button
            onClick={next}
            className="absolute right-2 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Keyboard hint */}
          <div className="absolute bottom-3 right-3 hidden sm:flex items-center gap-3 text-white/20 text-[10px] font-medium select-none">
            <span>← → navigate</span>
            <span>Z zoom</span>
            <span>Esc close</span>
          </div>
        </div>

        {/* ── Bottom: caption + thumbnail strip ── */}
        <div className="flex-shrink-0 bg-black/50 border-t border-white/5 backdrop-blur-sm">

          {/* Caption (mobile) */}
          <AnimatePresence mode="wait">
            <motion.p
              key={image.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden px-4 pt-3 pb-1 text-xs text-white/50 text-center"
            >
              {image.caption}
            </motion.p>
          </AnimatePresence>

          {/* Thumbnail strip */}
          <div className="flex items-center gap-2 px-4 py-3 overflow-x-auto scrollbar-none">
            {images.map((img, i) => (
              <button
                key={img.id}
                onClick={() => { setImgLoaded(false); onNavigate(i) }}
                className={`relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none ${
                  i === currentIndex
                    ? 'ring-2 ring-blue-400 ring-offset-1 ring-offset-black scale-110 opacity-100'
                    : 'opacity-40 hover:opacity-70 hover:scale-105'
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <img src={img.thumb} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
