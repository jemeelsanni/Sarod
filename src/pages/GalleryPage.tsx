import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Search, Images, GraduationCap, X } from 'lucide-react'
import { galleryImages, categories } from '../lib/galleryData'
import Lightbox from '../components/Lightbox'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [search, setSearch] = useState('')

  // Filtered images
  const filtered = useMemo(() => {
    let imgs = activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

    if (search.trim()) {
      const q = search.toLowerCase()
      imgs = imgs.filter(
        (img) =>
          img.caption.toLowerCase().includes(q) ||
          img.category.toLowerCase().includes(q) ||
          img.alt.toLowerCase().includes(q)
      )
    }
    return imgs
  }, [activeCategory, search])

  // Count per category
  const counts = useMemo(() => {
    const map: Record<string, number> = { All: galleryImages.length }
    galleryImages.forEach((img) => {
      map[img.category] = (map[img.category] ?? 0) + 1
    })
    return map
  }, [])

  const openLightbox = (filteredIndex: number) => {
    // find index in galleryImages for lightbox navigation
    const globalIndex = galleryImages.findIndex((img) => img.id === filtered[filteredIndex].id)
    setLightboxIndex(globalIndex)
  }

  return (
    <div className="min-h-screen bg-white font-sans antialiased">

      {/* ── Hero / Page Header ── */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-24 pb-20 overflow-hidden">

        {/* Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-blue-200/70 hover:text-white text-sm font-medium transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            {/* Title block */}
            <div>
              {/* Logo pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="inline-flex items-center gap-2.5 mb-5"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className="text-blue-300 text-sm font-semibold tracking-wide">Sarod Academy</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4"
              >
                Our{' '}
                <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                  Gallery
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-blue-100/70 text-lg max-w-xl"
              >
                A window into campus life, academic milestones, and the vibrant community
                that makes Sarod Academy extraordinary.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <div className="text-center">
                <div className="text-4xl font-black text-white">{galleryImages.length}</div>
                <div className="text-xs text-blue-300/70 uppercase tracking-widest mt-1">Photos</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-4xl font-black text-white">{categories.length - 1}</div>
                <div className="text-xs text-blue-300/70 uppercase tracking-widest mt-1">Categories</div>
              </div>
            </motion.div>
          </div>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 relative max-w-sm"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300/50" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search photos..."
              className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-full text-white text-sm placeholder:text-blue-300/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 backdrop-blur-sm transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Sticky filter bar ── */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.96 }}
                className={`relative flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
                <span className={`ml-1.5 text-[11px] font-bold ${activeCategory === cat ? 'text-blue-200' : 'text-slate-400'}`}>
                  {counts[cat] ?? 0}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Gallery grid ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Result count */}
        <div className="flex items-center justify-between mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={`${activeCategory}-${search}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-slate-500"
            >
              Showing{' '}
              <span className="font-bold text-slate-800">{filtered.length}</span>{' '}
              {filtered.length === 1 ? 'photo' : 'photos'}
              {activeCategory !== 'All' && (
                <> in <span className="text-blue-600 font-bold">{activeCategory}</span></>
              )}
              {search && (
                <> matching <span className="text-blue-600 font-bold">"{search}"</span></>
              )}
            </motion.p>
          </AnimatePresence>

          <div className="flex items-center gap-1.5 text-slate-400">
            <Images className="w-4 h-4" />
            <span className="text-xs font-medium">{galleryImages.length} total</span>
          </div>
        </div>

        {/* No results state */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Images className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">No photos found</h3>
              <p className="text-slate-400 mb-5">Try a different search term or category.</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All') }}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Masonry grid using CSS columns */}
        {filtered.length > 0 && (
          <div
            className="gap-4"
            style={{
              columns: 'var(--cols)',
              // @ts-expect-error CSS custom properties
              '--cols': '2',
            } as React.CSSProperties}
          >
            <style>{`
              @media (min-width: 640px)  { .gallery-masonry { columns: 2; } }
              @media (min-width: 768px)  { .gallery-masonry { columns: 3; } }
              @media (min-width: 1024px) { .gallery-masonry { columns: 4; } }
            `}</style>
            <div className="gallery-masonry gap-4" style={{ columnGap: '1rem' }}>
              <AnimatePresence>
                {filtered.map((img, i) => (
                  <motion.div
                    key={img.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: (i % 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative mb-4 break-inside-avoid rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-blue-900/20 transition-shadow duration-500"
                    onClick={() => openLightbox(i)}
                  >
                    {/* Image */}
                    <img
                      src={img.thumb}
                      alt={img.alt}
                      className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">

                      {/* Category tag */}
                      <span className="self-start inline-flex items-center gap-1 px-2.5 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wide rounded-full mb-2">
                        {img.category}
                      </span>

                      {/* Caption */}
                      <p className="text-white text-xs sm:text-sm font-medium leading-snug line-clamp-2">
                        {img.caption}
                      </p>

                      {/* View icon */}
                      <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Search className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>

                    {/* Always-visible number badge */}
                    <div className="absolute top-3 left-3 w-7 h-7 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-bold text-white">{i + 1}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </main>

      {/* ── Footer strip ── */}
      <div className="bg-blue-950 py-8 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold text-sm">Sarod Academy Gallery</span>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  )
}
