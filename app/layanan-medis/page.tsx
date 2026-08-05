'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Activity,
  Stethoscope,
  Users,
  Baby,
  Microscope,
  Syringe,
  ClipboardList,
  FlaskConical,
  Pill,
  ShieldCheck,
  MessageCircle,
  HeartPulse,
  Phone,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

// ─── Types ──────────────────────────────────────────────────────────────────────

type ServiceCategory =
  | 'Semua'
  | 'IGD & Emergensi'
  | 'Klinik & Konsultasi'
  | 'Kebidanan'
  | 'Bedah'
  | 'Diagnostik'
  | 'Rawat Inap';

interface Service {
  icon: React.ElementType;
  title: string;
  desc: string;
  features: string[];
  category: ServiceCategory;
  href: string;
  accent: string;
  accentBg: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const categories: ServiceCategory[] = [
  'Semua',
  'IGD & Emergensi',
  'Klinik & Konsultasi',
  'Kebidanan',
  'Bedah',
  'Diagnostik',
  'Rawat Inap',
];

const services: Service[] = [
  {
    icon: Activity,
    title: 'IGD 24 Jam',
    desc: 'Penanganan kegawatdaruratan 24 jam oleh tim medis terlatih dan berpengalaman.',
    features: ['Tim dokter jaga 24/7', 'Triage sistem prioritas', 'Ambulans siaga', 'Ruang resusitasi lengkap'],
    category: 'IGD & Emergensi',
    href: '/layanan-medis/igd',
    accent: 'text-red-600',
    accentBg: 'bg-red-50',
  },
  {
    icon: Stethoscope,
    title: 'Klinik Umum',
    desc: 'Pemeriksaan dan pengobatan umum untuk berbagai kondisi kesehatan sehari-hari.',
    features: ['Pemeriksaan fisik lengkap', 'Resep obat generik & branded', 'Konsultasi nutrisi', 'Surat keterangan sehat'],
    category: 'Klinik & Konsultasi',
    href: '/layanan-medis/klinik-umum',
    accent: 'text-[#0c4a6e]',
    accentBg: 'bg-blue-50',
  },
  {
    icon: Users,
    title: 'Klinik Spesialis',
    desc: 'Konsultasi dan penanganan dari dokter spesialis berbagai bidang ilmu kedokteran.',
    features: ['Sp. Penyakit Dalam', 'Sp. Anak', 'Sp. Bedah', 'Sp. Saraf & Jiwa'],
    category: 'Klinik & Konsultasi',
    href: '/layanan-medis/klinik-spesialis',
    accent: 'text-[#0c4a6e]',
    accentBg: 'bg-blue-50',
  },
  {
    icon: Baby,
    title: 'Program Hamil',
    desc: 'Pendampingan kehamilan terpadu dari trimester pertama hingga persalinan.',
    features: ['Pemantauan tumbuh kembang janin', 'Konsultasi SpOG', 'Kelas persiapan melahirkan', 'Layanan persalinan normal & SC'],
    category: 'Kebidanan',
    href: '/program-hamil',
    accent: 'text-[#047857]',
    accentBg: 'bg-green-50',
  },
  {
    icon: Microscope,
    title: 'USG Kehamilan',
    desc: 'Pemeriksaan USG 2D, 3D, dan 4D untuk memantau perkembangan janin secara detail.',
    features: ['USG 2D standar', 'USG 3D detail anatomi', 'USG 4D real-time', 'Rekam & cetak hasil'],
    category: 'Kebidanan',
    href: '/layanan-medis/usg',
    accent: 'text-[#047857]',
    accentBg: 'bg-green-50',
  },
  {
    icon: Syringe,
    title: 'Ruang Operasi',
    desc: 'Fasilitas bedah modern dengan standar sterilitas tinggi dan peralatan terkini.',
    features: ['OK (kamar operasi) berstandar', 'Tim bedah multispesialis', 'Anestesi umum & regional', 'Pemulihan post-operasi'],
    category: 'Bedah',
    href: '/layanan-medis/bedah',
    accent: 'text-purple-600',
    accentBg: 'bg-purple-50',
  },
  {
    icon: ClipboardList,
    title: 'Rawat Jalan',
    desc: 'Pelayanan rawat jalan komprehensif dengan sistem antrian digital yang efisien.',
    features: ['Pendaftaran online', 'Antrian digital', 'Rekam medis elektronik', 'Resep digital'],
    category: 'Rawat Inap',
    href: '/layanan-medis/rawat-jalan',
    accent: 'text-[#0c4a6e]',
    accentBg: 'bg-blue-50',
  },
  {
    icon: FlaskConical,
    title: 'Laboratorium',
    desc: 'Tes laboratorium lengkap dan akurat dengan teknologi alat analisa generasi terbaru.',
    features: ['Hematologi lengkap', 'Kimia klinik', 'Serologi & imunologi', 'Kultur & sensitivitas'],
    category: 'Diagnostik',
    href: '/layanan-medis/laboratorium',
    accent: 'text-amber-600',
    accentBg: 'bg-amber-50',
  },
  {
    icon: Pill,
    title: 'Farmasi 24 Jam',
    desc: 'Penyediaan obat-obatan lengkap, melayani 24 jam termasuk hari libur.',
    features: ['Obat generik & paten', 'Konseling farmasi', 'Layanan 24 jam', 'Kerjasama BPJS'],
    category: 'Rawat Inap',
    href: '/layanan-medis/farmasi',
    accent: 'text-[#0c4a6e]',
    accentBg: 'bg-blue-50',
  },
  {
    icon: ShieldCheck,
    title: 'Medical Check-Up',
    desc: 'Pemeriksaan kesehatan berkala dan menyeluruh untuk deteksi dini penyakit.',
    features: ['Paket basic s.d. komprehensif', 'Hasil & konsultasi dokter', 'Sertifikat kesehatan', 'Program perusahaan'],
    category: 'Diagnostik',
    href: '/layanan-medis/mcu',
    accent: 'text-[#047857]',
    accentBg: 'bg-green-50',
  },
  {
    icon: MessageCircle,
    title: 'Konsultasi Dokter',
    desc: 'Konsultasi langsung dengan dokter spesialis secara tatap muka maupun online.',
    features: ['Konsultasi tatap muka', 'Telemedicine/video call', 'Chat dokter', 'Follow-up pasca rawat'],
    category: 'Klinik & Konsultasi',
    href: '/layanan-medis/konsultasi',
    accent: 'text-[#0c4a6e]',
    accentBg: 'bg-blue-50',
  },
  {
    icon: HeartPulse,
    title: 'Rehabilitasi Medis',
    desc: 'Fisioterapi dan rehabilitasi medis untuk pemulihan pasca cedera dan operasi.',
    features: ['Fisioterapi aktif & pasif', 'Terapi wicara', 'Terapi okupasi', 'Rehabilitasi kardiovaskular'],
    category: 'Klinik & Konsultasi',
    href: '/layanan-medis/rehabilitasi',
    accent: 'text-rose-600',
    accentBg: 'bg-rose-50',
  },
];

// ─── Animations ─────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.09 } },
};

// ─── Component ─────────────────────────────────────────────────────────────────

export default function LayananMedisPage() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('Semua');

  const filtered = activeTab === 'Semua' ? services : services.filter((s) => s.category === activeTab);

  return (
    <main className="min-h-screen bg-white">
      {/* ── Page Header ── */}
      <section className="bg-[#0c4a6e] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center"
          >
            <motion.p variants={fadeUp} className="text-blue-200 text-sm mb-3 flex items-center justify-center gap-1">
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Layanan Medis</span>
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
              Layanan Medis Komprehensif
            </motion.h1>
            <motion.p variants={fadeUp} className="text-blue-200 text-lg max-w-2xl mx-auto">
              RS Cahya Medika menghadirkan berbagai layanan medis berkualitas tinggi untuk memenuhi setiap kebutuhan kesehatan Anda dan keluarga.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Tab Filters ── */}
      <section className="py-10 border-b border-gray-100 sticky top-0 bg-white z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeTab === cat
                    ? 'bg-[#0c4a6e] text-white border-[#0c4a6e] shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#0c4a6e] hover:text-[#0c4a6e]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                  >
                    {/* Card Top */}
                    <div className="p-6 flex-1">
                      <div className={`w-12 h-12 ${service.accentBg} rounded-xl flex items-center justify-center mb-4`}>
                        <Icon className={`w-6 h-6 ${service.accent}`} />
                      </div>
                      <h3 className="text-gray-900 font-bold text-base mb-2">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                      <ul className="space-y-1.5">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-gray-600 text-xs">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${service.accent.replace('text-', 'bg-')}`} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Footer */}
                    <div className="px-6 pb-6">
                      <Link
                        href={service.href}
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.accent} hover:gap-3 transition-all duration-200`}
                      >
                        Selengkapnya <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">Tidak ada layanan dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span variants={fadeUp} className="inline-block bg-blue-100 text-[#0c4a6e] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Butuh Bantuan?
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami untuk Informasi Lebih Lanjut
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mb-8 leading-relaxed">
              Tim kami siap membantu Anda memilih layanan yang tepat, mendaftarkan jadwal konsultasi, atau menjawab pertanyaan seputar layanan kesehatan kami. Jangan ragu untuk menghubungi kami kapan saja.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+62338421000"
                className="inline-flex items-center gap-2 bg-[#0c4a6e] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0a3d5c] transition-colors"
              >
                <Phone className="w-5 h-5" />
                (0338) 421-000
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#047857] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#036045] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
