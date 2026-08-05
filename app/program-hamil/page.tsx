'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Baby,
  Heart,
  Microscope,
  Users,
  ShieldCheck,
  BookOpen,
  Dumbbell,
  Apple,
  CalendarCheck,
  CheckCircle,
  ChevronRight,
  Phone,
  MessageCircle,
  Star,
  ChevronDown,
  ChevronUp,
  Award,
  Clock,
  Stethoscope,
} from 'lucide-react';

// ─── Animations ─────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.11 } },
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const overviewCards = [
  {
    icon: Microscope,
    title: 'Pemantauan Kehamilan',
    desc: 'Pemeriksaan rutin dan USG berkala untuk memastikan tumbuh kembang janin berjalan optimal.',
  },
  {
    icon: Stethoscope,
    title: 'Konsultasi SpOG',
    desc: 'Didampingi dokter spesialis obstetri dan ginekologi berpengalaman setiap tahap kehamilan.',
  },
  {
    icon: Baby,
    title: 'Persiapan Persalinan',
    desc: 'Program edukasi dan kelas persiapan melahirkan agar ibu percaya diri menghadapi persalinan.',
  },
];

const detailServices = [
  {
    icon: Microscope,
    title: 'USG Kehamilan 2D/3D/4D',
    desc: 'Pemeriksaan USG dengan teknologi terkini untuk memantau kondisi janin secara detail dan real-time.',
    features: ['USG 2D standar trimester 1-3', 'USG 3D anatomi janin', 'USG 4D video janin bergerak', 'Laporan & foto rekam hasil'],
  },
  {
    icon: Stethoscope,
    title: 'Konsultasi Dokter SpOG',
    desc: 'Konsultasi langsung dengan dokter spesialis obstetri dan ginekologi yang berpengalaman.',
    features: ['Jadwal fleksibel', 'Konsultasi tatap muka & online', 'Rekam medis terintegrasi', 'Rujukan spesialis jika diperlukan'],
  },
  {
    icon: ShieldCheck,
    title: 'Pemeriksaan Rutin Ibu Hamil',
    desc: 'Pemeriksaan antenatal care (ANC) sesuai standar Kemenkes untuk ibu hamil sehat.',
    features: ['Tekanan darah & berat badan', 'Tes hemoglobin & gula darah', 'Pemeriksaan posisi janin', 'Deteksi kehamilan risiko tinggi'],
  },
  {
    icon: BookOpen,
    title: 'Edukasi Kesehatan Ibu & Janin',
    desc: 'Kelas edukasi komprehensif tentang nutrisi, tanda bahaya kehamilan, dan perawatan bayi baru lahir.',
    features: ['Kelas mingguan & bulanan', 'Materi berbasis riset terkini', 'Sesi tanya jawab interaktif', 'Modul & buku panduan'],
  },
  {
    icon: Dumbbell,
    title: 'Senam Hamil',
    desc: 'Kelas senam hamil terpandu instruktur bersertifikat untuk menjaga kebugaran selama kehamilan.',
    features: ['Senam trimester 1, 2, 3', 'Dipandu instruktur bersertifikat', 'Teknik pernapasan persalinan', 'Komunitas ibu hamil'],
  },
  {
    icon: Apple,
    title: 'Nutrisi Kehamilan',
    desc: 'Konsultasi gizi khusus ibu hamil bersama ahli gizi klinik untuk mendukung tumbuh kembang janin.',
    features: ['Rencana diet personal', 'Suplemen & vitamin kehamilan', 'Kontrol berat badan ideal', 'Konsultasi menyusui (ASI)'],
  },
  {
    icon: CalendarCheck,
    title: 'Persiapan Persalinan',
    desc: 'Program persiapan mental dan fisik menjelang persalinan agar proses berjalan lancar dan aman.',
    features: ['Kelas prenatal intensif', 'Simulasi proses persalinan', 'Briefing anestesi & epidural', 'Pendampingan suami/keluarga'],
  },
  {
    icon: Heart,
    title: 'Layanan Persalinan Normal & SC',
    desc: 'Layanan persalinan dengan fasilitas kamar bersalin modern dan tim medis kebidanan siaga penuh.',
    features: ['Kamar bersalin nyaman', 'Persalinan water birth (pilihan)', 'Operasi caesar (SC) terencana/darurat', 'IMD & rawat gabung bayi'],
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Dokter SpOG Berpengalaman',
    desc: 'Tim dokter spesialis kandungan berpengalaman lebih dari 10 tahun mendampingi ribuan kelahiran.',
  },
  {
    icon: ShieldCheck,
    title: 'Fasilitas Modern & Aman',
    desc: 'Kamar bersalin dan ruang operasi berstandar tinggi dengan teknologi medis terkini.',
  },
  {
    icon: Clock,
    title: 'Layanan 24 Jam',
    desc: 'Tim kebidanan dan dokter jaga siap melayani persalinan kapan pun, siang maupun malam.',
  },
  {
    icon: Users,
    title: 'Pendekatan Holistic',
    desc: 'Mendampingi ibu bukan hanya secara medis, namun juga emosional dan psikologis selama kehamilan.',
  },
];

const faqs = [
  {
    q: 'Kapan sebaiknya saya mendaftar ke Program Hamil RS Cahya Medika?',
    a: 'Anda bisa mendaftar sejak trimester pertama kehamilan (usia kehamilan 1–12 minggu) atau bahkan saat Anda sedang merencanakan kehamilan. Semakin awal, semakin optimal pendampingan yang kami berikan.',
  },
  {
    q: 'Apakah Program Hamil ini ditanggung BPJS Kesehatan?',
    a: 'Beberapa layanan pemeriksaan kehamilan rutin (ANC) dapat ditanggung BPJS Kesehatan sesuai ketentuan. Layanan seperti USG 3D/4D dan kelas senam hamil umumnya merupakan layanan mandiri. Silakan hubungi kami untuk informasi detail.',
  },
  {
    q: 'Berapa kali saya harus kontrol selama kehamilan?',
    a: 'Sesuai standar Kemenkes, pemeriksaan ANC minimal 6 kali selama kehamilan. Namun dokter kami akan merekomendasikan jadwal yang disesuaikan dengan kondisi kehamilan Anda agar lebih optimal.',
  },
  {
    q: 'Apakah suami/keluarga bisa mendampingi saat USG atau konsultasi?',
    a: 'Ya, kami sangat mendukung keterlibatan pasangan dan keluarga. Suami atau pendamping diperbolehkan ikut masuk saat sesi USG dan konsultasi dengan dokter.',
  },
  {
    q: 'Bagaimana cara mendaftar kelas senam hamil?',
    a: 'Kelas senam hamil dibuka setiap Sabtu pagi. Pendaftaran bisa dilakukan melalui WhatsApp, telepon, atau langsung datang ke bagian pendaftaran RS Cahya Medika. Tersedia juga melalui aplikasi mobile kami.',
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ProgramHamilPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <main className="min-h-screen bg-white">
      {/* ── Breadcrumb ── */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="container mx-auto px-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <Link href="/" className="hover:text-[#047857] transition-colors">Beranda</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/layanan-medis" className="hover:text-[#047857] transition-colors">Layanan Medis</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900">Program Hamil</span>
          </p>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-green-100 text-[#047857] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              >
                <Star className="w-3.5 h-3.5" />
                Program Unggulan
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Program Hamil Terpadu{' '}
                <span className="text-[#047857]">RS Cahya Medika</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-gray-600 text-lg leading-relaxed mb-8"
              >
                Kami hadir mendampingi setiap langkah perjalanan kehamilan Anda — dari konsultasi pra-kehamilan, pemantauan janin, kelas persiapan melahirkan, hingga hari persalinan yang penuh kebahagiaan.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link
                  href="/daftar-online"
                  className="inline-flex items-center gap-2 bg-[#047857] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#036045] transition-colors shadow-sm"
                >
                  <Baby className="w-5 h-5" />
                  Daftar Program Hamil
                </Link>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#047857] text-[#047857] px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Konsultasi Gratis
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeRight}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Program Hamil RS Cahya Medika"
                  fill
                  className="object-cover"
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-[#047857]/10" />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg px-6 py-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#047857]" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">1.000+ Persalinan</p>
                  <p className="text-gray-500 text-xs">Berhasil kami dampingi</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Program Overview ── */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="inline-block bg-white text-[#047857] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-green-200 mb-4">
              Apa yang Kami Tawarkan
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900">
              Program Pendampingan Kehamilan Komprehensif
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {overviewCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#047857]" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Services Detail ── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="inline-block bg-green-100 text-[#047857] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Layanan Lengkap
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900">
              Semua yang Anda Butuhkan Selama Kehamilan
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-3 max-w-xl mx-auto">
              Dari trimester pertama hingga pasca persalinan, kami siap mendampingi dengan layanan terlengkap.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {detailServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col"
                >
                  <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#047857]" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{svc.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{svc.desc}</p>
                  <ul className="space-y-1.5">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-gray-600 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-[#047857] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-[#047857]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">
              Mengapa Memilih Program Hamil Kami?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-green-100 mt-3 max-w-xl mx-auto">
              Kepercayaan ribuan ibu adalah motivasi terbesar kami untuk terus memberikan yang terbaik.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((w) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={w.title}
                  variants={fadeUp}
                  className="bg-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{w.title}</h3>
                  <p className="text-green-100 text-sm leading-relaxed">{w.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Doctor Card ── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="inline-block bg-green-100 text-[#047857] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Tim Dokter
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900">
              Dokter Spesialis Kandungan Kami
            </motion.h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col sm:flex-row gap-8 items-center sm:items-start"
            >
              {/* Avatar */}
              <div className="shrink-0">
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-14 h-14 text-[#047857]" />
                </div>
              </div>
              {/* Info */}
              <div className="flex-1 text-center sm:text-left">
                <p className="text-[#047857] text-xs font-semibold uppercase tracking-widest mb-1">Dokter Spesialis Obstetri & Ginekologi</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">dr. Siti Rahayu, Sp.OG</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Dokter spesialis kandungan berpengalaman lebih dari 15 tahun, lulusan Universitas Airlangga Surabaya. Spesialisasi dalam kehamilan risiko tinggi, persalinan caesar, dan USG obstetri. Aktif dalam pengembangan program kesehatan ibu dan anak di Bondowoso.
                </p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {['Kehamilan Risiko Tinggi', 'USG Obstetri', 'Persalinan Normal & SC', 'Ginekologi'].map((sp) => (
                    <span key={sp} className="bg-green-50 text-[#047857] text-xs px-3 py-1 rounded-full border border-green-200">{sp}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 justify-center sm:justify-start">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-500 text-sm">Praktek: Senin, Rabu, Jumat — 08.00–14.00</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="inline-block bg-green-100 text-[#047857] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              FAQ
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900">
              Pertanyaan Seputar Program Hamil
            </motion.h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-gray-900 text-sm leading-relaxed group-hover:text-[#047857] transition-colors">
                    {faq.q}
                  </span>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                    : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />}
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={fadeUp}
              className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Baby className="w-8 h-8 text-[#047857]" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mulai Perjalanan Kehamilan Anda Bersama Kami
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 mb-8 leading-relaxed">
              Daftarkan diri Anda ke Program Hamil Terpadu RS Cahya Medika hari ini. Tim medis kami siap memberikan pendampingan terbaik untuk Anda dan si buah hati.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/daftar-online"
                className="inline-flex items-center gap-2 bg-[#047857] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#036045] transition-colors shadow-sm"
              >
                <Baby className="w-5 h-5" />
                Daftar Program Hamil
              </Link>
              <a
                href="tel:+62338421000"
                className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-7 py-3.5 rounded-xl font-semibold hover:border-[#047857] hover:text-[#047857] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Hubungi Kami
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
