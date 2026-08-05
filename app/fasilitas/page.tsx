'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronDown,
  ChevronUp,
  Building2,
  ZoomIn,
} from 'lucide-react';

/* ─── Data ─── */
type Category =
  | 'Semua'
  | 'Rawat Inap'
  | 'Rawat Jalan'
  | 'IGD'
  | 'Laboratorium'
  | 'Operasi'
  | 'Penunjang';

const categories: Category[] = [
  'Semua',
  'Rawat Inap',
  'Rawat Jalan',
  'IGD',
  'Laboratorium',
  'Operasi',
  'Penunjang',
];

interface Facility {
  id: number;
  title: string;
  description: string;
  category: Exclude<Category, 'Semua'>;
  image: string;
}

const facilities: Facility[] = [
  {
    id: 1,
    title: 'Ruang VIP Rawat Inap',
    description:
      'Kamar perawatan premium dengan fasilitas lengkap — AC, TV, sofa keluarga, dan kamar mandi pribadi untuk kenyamanan optimal selama pemulihan.',
    category: 'Rawat Inap',
    image: '/images/hero.jpg',
  },
  {
    id: 2,
    title: 'Ruang Kelas 1 Rawat Inap',
    description:
      'Kamar perawatan nyaman dengan fasilitas standar tinggi, ideal untuk pasien yang menginginkan kenyamanan dengan biaya terjangkau.',
    category: 'Rawat Inap',
    image: '/images/hero.jpg',
  },
  {
    id: 3,
    title: 'Ruang ICU',
    description:
      'Unit perawatan intensif dengan monitoring 24 jam, dilengkapi peralatan medis canggih dan ditangani tim dokter serta perawat terlatih.',
    category: 'Rawat Inap',
    image: '/images/hero.jpg',
  },
  {
    id: 4,
    title: 'IGD Modern',
    description:
      'Unit gawat darurat berteknologi tinggi yang siap melayani pasien selama 24 jam dengan respons cepat dan penanganan darurat terpadu.',
    category: 'IGD',
    image: '/images/hero.jpg',
  },
  {
    id: 5,
    title: 'Ruang Operasi',
    description:
      'Fasilitas bedah steril berstandar tinggi dengan peralatan operasi mutakhir, sistem ventilasi khusus, dan tim bedah berpengalaman.',
    category: 'Operasi',
    image: '/images/hero.jpg',
  },
  {
    id: 6,
    title: 'Laboratorium Klinik',
    description:
      'Pemeriksaan laboratorium lengkap dan akurat dengan alat analitik modern — hematologi, kimia darah, urinalisis, dan pemeriksaan mikrobiologi.',
    category: 'Laboratorium',
    image: '/images/hero.jpg',
  },
  {
    id: 7,
    title: 'Farmasi 24 Jam',
    description:
      'Apotek lengkap tersedia sepanjang waktu untuk memastikan ketersediaan obat-obatan yang dibutuhkan pasien kapan pun.',
    category: 'Penunjang',
    image: '/images/hero.jpg',
  },
  {
    id: 8,
    title: 'Ruang Tunggu Nyaman',
    description:
      'Ruang tunggu modern dan bersih dengan tempat duduk ergonomis, akses Wi-Fi gratis, dan suasana yang menenangkan.',
    category: 'Rawat Jalan',
    image: '/images/hero.jpg',
  },
  {
    id: 9,
    title: 'Ruang Fisioterapi',
    description:
      'Fasilitas rehabilitasi medis modern dengan berbagai peralatan terapi fisik untuk membantu pemulihan pasca operasi maupun cedera.',
    category: 'Penunjang',
    image: '/images/hero.jpg',
  },
  {
    id: 10,
    title: 'Mushola',
    description:
      'Fasilitas ibadah yang nyaman, bersih, dan terawat tersedia untuk pasien, keluarga, dan seluruh pengunjung rumah sakit.',
    category: 'Penunjang',
    image: '/images/hero.jpg',
  },
  {
    id: 11,
    title: 'Area Parkir Luas',
    description:
      'Area parkir yang luas dan aman untuk kendaraan roda dua maupun roda empat demi kenyamanan pengunjung dan keluarga pasien.',
    category: 'Penunjang',
    image: '/images/hero.jpg',
  },
  {
    id: 12,
    title: 'Kantin & Kafetaria',
    description:
      'Menyediakan pilihan makanan sehat dan bergizi untuk pasien rawat inap serta keluarga yang mendampingi selama perawatan.',
    category: 'Penunjang',
    image: '/images/hero.jpg',
  },
];

const categoryColors: Record<string, string> = {
  'Rawat Inap': 'bg-blue-100 text-blue-800',
  'Rawat Jalan': 'bg-green-100 text-green-800',
  IGD: 'bg-red-100 text-red-800',
  Laboratorium: 'bg-purple-100 text-purple-800',
  Operasi: 'bg-orange-100 text-orange-800',
  Penunjang: 'bg-teal-100 text-teal-800',
};

const faqs = [
  {
    q: 'Apakah RS Cahya Medika memiliki kamar VIP?',
    a: 'Ya, kami memiliki kamar VIP yang dilengkapi dengan fasilitas premium termasuk AC, TV, sofa keluarga, kamar mandi pribadi, dan layanan makan pilihan.',
  },
  {
    q: 'Apakah IGD buka 24 jam?',
    a: 'Ya, IGD RS Cahya Medika beroperasi 24 jam sehari, 7 hari seminggu, termasuk hari libur nasional.',
  },
  {
    q: 'Apakah tersedia fasilitas parkir?',
    a: 'Ya, kami menyediakan area parkir yang luas dan aman untuk kendaraan roda dua maupun roda empat. Tersedia juga petugas parkir untuk membantu.',
  },
  {
    q: 'Apakah ada fasilitas Wi-Fi gratis?',
    a: 'Ya, Wi-Fi gratis tersedia di seluruh area rumah sakit termasuk ruang tunggu, koridor, dan kamar rawat inap kelas 1 dan VIP.',
  },
  {
    q: 'Apakah apotek tersedia sepanjang waktu?',
    a: 'Ya, farmasi RS Cahya Medika beroperasi 24 jam untuk memastikan ketersediaan obat-obatan bagi pasien kapan pun dibutuhkan.',
  },
];

/* ─── Component ─── */
export default function FasilitasPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Semua');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const displayed =
    activeCategory === 'Semua'
      ? facilities
      : facilities.filter((f) => f.category === activeCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ── Page Header ── */}
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-4">
              <Building2 size={16} />
              <span className="text-sm font-medium">Fasilitas Unggulan</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Fasilitas Rumah Sakit
            </h1>
            <p className="text-white/80 max-w-xl mx-auto text-base sm:text-lg">
              RS Cahya Medika menyediakan fasilitas modern dan lengkap untuk
              mendukung pelayanan kesehatan terbaik bagi seluruh pasien dan
              keluarga.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Category Tabs ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ── Facilities Grid ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {displayed.map((facility, i) => (
              <motion.div
                key={facility.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
                onClick={() => setSelectedFacility(facility)}
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn
                      size={32}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        categoryColors[facility.category] ??
                        'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {facility.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1.5 text-sm">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            key="modal-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={() => setSelectedFacility(null)}
          >
            <motion.div
              key="modal-card"
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-1.5 transition-colors shadow"
                >
                  <X size={18} className="text-gray-700" />
                </button>
                <div className="absolute bottom-3 left-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      categoryColors[selectedFacility.category] ??
                      'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {selectedFacility.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {selectedFacility.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {selectedFacility.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAQ Accordion ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Pertanyaan Umum
          </h2>
          <p className="text-gray-500 text-sm text-center mb-8">
            Jawaban untuk pertanyaan yang sering diajukan seputar fasilitas kami
          </p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-gray-800 pr-4">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp size={18} className="text-[var(--color-primary)] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
