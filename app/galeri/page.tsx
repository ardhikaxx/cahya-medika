'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Images, ZoomIn } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface GalleryItem {
  id: number;
  src: string;
  caption: string;
  category: string;
  aspectClass: string; // tailwind aspect-ratio class
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const galleryCategories = [
  'Semua',
  'Gedung & Fasilitas',
  'Pelayanan Medis',
  'Kegiatan Sosial',
  'Tim Medis',
];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/images/rs-5.png',
    caption: 'Lobby RS Cahya Medika',
    category: 'Gedung & Fasilitas',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 2,
    src: '/images/hero.jpg',
    caption: 'Ruang Operasi Modern',
    category: 'Pelayanan Medis',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 3,
    src: '/images/rs-1.png',
    caption: 'Ruang Tunggu Pasien',
    category: 'Gedung & Fasilitas',
    aspectClass: 'aspect-square',
  },
  {
    id: 4,
    src: '/images/hero.jpg',
    caption: 'Tim Dokter Spesialis RS Cahya Medika',
    category: 'Tim Medis',
    aspectClass: 'aspect-[16/9]',
  },
  {
    id: 5,
    src: '/images/hero.jpg',
    caption: 'Bakti Sosial Kesehatan Gratis 2026',
    category: 'Kegiatan Sosial',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 6,
    src: '/images/rs-4.png',
    caption: 'Ruang Perawatan Pasien',
    category: 'Pelayanan Medis',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 7,
    src: '/images/hero.jpg',
    caption: 'Laboratorium Klinik Terpadu',
    category: 'Gedung & Fasilitas',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 8,
    src: '/images/rs-4.png',
    caption: 'Pelayanan Rawat Inap VIP',
    category: 'Gedung & Fasilitas',
    aspectClass: 'aspect-square',
  },
  {
    id: 9,
    src: '/images/hero.jpg',
    caption: 'Pemeriksaan USG Kandungan',
    category: 'Pelayanan Medis',
    aspectClass: 'aspect-[16/9]',
  },
  {
    id: 10,
    src: '/images/hero.jpg',
    caption: 'Senyum Perawat RS Cahya Medika',
    category: 'Tim Medis',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 11,
    src: '/images/hero.jpg',
    caption: 'Donor Darah Massal Bersama Komunitas',
    category: 'Kegiatan Sosial',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 12,
    src: '/images/hero.jpg',
    caption: 'Ruang Bersalin Modern',
    category: 'Pelayanan Medis',
    aspectClass: 'aspect-square',
  },
  {
    id: 13,
    src: '/images/hero.jpg',
    caption: 'Farmasi & Apotek Rumah Sakit',
    category: 'Gedung & Fasilitas',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 14,
    src: '/images/hero.jpg',
    caption: 'Dokter Spesialis Anak Bersama Pasien',
    category: 'Tim Medis',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 15,
    src: '/images/hero.jpg',
    caption: 'Seminar Kesehatan untuk Masyarakat',
    category: 'Kegiatan Sosial',
    aspectClass: 'aspect-[16/9]',
  },
  {
    id: 16,
    src: '/images/rs-3.png',
    caption: 'Instalasi Gawat Darurat 24 Jam',
    category: 'Pelayanan Medis',
    aspectClass: 'aspect-[4/3]',
  },
];

const categoryBadgeColors: Record<string, string> = {
  'Gedung & Fasilitas': 'bg-blue-600',
  'Pelayanan Medis': 'bg-green-600',
  'Kegiatan Sosial': 'bg-orange-500',
  'Tim Medis': 'bg-purple-600',
};

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  items,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  selectedIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[selectedIndex];

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-10 text-white/70 text-sm font-medium bg-black/30 px-3 py-1.5 rounded-full">
        {selectedIndex + 1} / {items.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 z-10 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center"
      >
        <div className="relative w-full" style={{ maxHeight: '70vh' }}>
          <Image
            src={item.src}
            alt={item.caption}
            width={1200}
            height={800}
            className="rounded-xl object-contain max-h-[70vh] w-auto mx-auto"
            priority
          />
        </div>
        <div className="mt-4 text-center">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${categoryBadgeColors[item.category] ?? 'bg-gray-600'}`}
          >
            {item.category}
          </span>
          <p className="text-white font-medium mt-2">{item.caption}</p>
        </div>
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 z-10 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={22} />
      </button>
    </motion.div>
  );
}

// ─── Gallery Item Card ────────────────────────────────────────────────────────
function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.06 }}
      className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      onClick={onClick}
    >
      <div className={`relative ${item.aspectClass} bg-gray-100 overflow-hidden`}>
        <Image
          src={item.src}
          alt={item.caption}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg">
            <ZoomIn size={20} className="text-primary" />
          </div>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full text-white ${categoryBadgeColors[item.category] ?? 'bg-gray-600'}`}
          >
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-3 bg-white">
        <p className="text-sm font-medium text-gray-700 truncate">{item.caption}</p>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === 'Semua'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(
    () => setLightboxIndex((i) => (i === null || i === 0 ? filtered.length - 1 : i - 1)),
    [filtered.length],
  );
  const goNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filtered.length)),
    [filtered.length],
  );

  return (
    <main className="min-h-screen bg-white">
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              <Images size={14} />
              Dokumentasi Visual
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Galeri</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
              Dokumentasi visual fasilitas, pelayanan, tim medis, dan berbagai kegiatan sosial RS
              Cahya Medika Bondowoso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter + Grid ────────────────────────────────────── */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2 mb-8 justify-center"
          >
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-sm text-gray-400 mb-6 text-center"
          >
            Menampilkan{' '}
            <span className="font-semibold text-gray-700">{filtered.length}</span> foto
            {activeCategory !== 'Semua' && (
              <>
                {' '}dalam kategori{' '}
                <span className="font-semibold text-primary">{activeCategory}</span>
              </>
            )}
          </motion.div>

          {/* Masonry-style grid using CSS columns */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {/*
                 * We use a responsive CSS grid with auto rows, letting each card
                 * define its own aspect ratio so items get naturally varied heights.
                 * columns: 1 on mobile, 2 on sm, 3 on lg, 4 on xl
                 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filtered.map((item, index) => (
                    <GalleryCard
                      key={item.id}
                      item={item}
                      index={index}
                      onClick={() => openLightbox(index)}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 text-gray-400"
              >
                <Images size={48} className="mx-auto mb-3 opacity-30" />
                <p>Belum ada foto dalam kategori ini.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            selectedIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
