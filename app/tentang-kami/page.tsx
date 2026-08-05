'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Award,
  Shield,
  Heart,
  Lightbulb,
  Users,
  Star,
  ChevronRight,
  Building2,
  Clock,
  Bed,
  UserCheck,
  Target,
  Eye,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const misiItems = [
  'Memberikan pelayanan kesehatan yang berkualitas, aman, dan terjangkau bagi seluruh lapisan masyarakat.',
  'Mengembangkan sumber daya manusia yang profesional, berintegritas, dan berdedikasi tinggi.',
  'Menerapkan teknologi medis mutakhir untuk meningkatkan akurasi diagnosis dan efektivitas terapi.',
  'Membangun kemitraan strategis dengan berbagai pihak untuk memperluas akses layanan kesehatan.',
  'Berperan aktif dalam program kesehatan masyarakat dan pencegahan penyakit di Bondowoso.',
];

const nilaiItems = [
  {
    icon: Shield,
    title: 'Integritas',
    desc: 'Menjunjung tinggi kejujuran dan transparansi dalam setiap aspek pelayanan kami kepada pasien dan masyarakat.',
    color: 'text-[#0c4a6e]',
    bg: 'bg-blue-50',
  },
  {
    icon: Star,
    title: 'Profesionalisme',
    desc: 'Tenaga medis kami berkomitmen untuk terus meningkatkan kompetensi dan memberikan standar pelayanan tertinggi.',
    color: 'text-[#0c4a6e]',
    bg: 'bg-blue-50',
  },
  {
    icon: Heart,
    title: 'Empati',
    desc: 'Melayani dengan hati, memahami kebutuhan pasien, dan memberikan dukungan emosional yang tulus.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: Lightbulb,
    title: 'Inovasi',
    desc: 'Selalu terbuka terhadap perubahan dan terus berinovasi dalam metode pengobatan serta pelayanan kesehatan.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Users,
    title: 'Kolaborasi',
    desc: 'Mendorong kerja sama tim multidisiplin untuk menghasilkan keputusan medis yang komprehensif dan tepat.',
    color: 'text-[#047857]',
    bg: 'bg-green-50',
  },
  {
    icon: CheckCircle,
    title: 'Keselamatan',
    desc: 'Keselamatan pasien adalah prioritas utama kami. Setiap prosedur dirancang dengan standar keamanan tertinggi.',
    color: 'text-[#047857]',
    bg: 'bg-green-50',
  },
];

const timelineItems = [
  { year: '2015', title: 'Pendirian RS Cahya Medika', desc: 'RS Cahya Medika resmi berdiri dan mulai melayani masyarakat Bondowoso dengan fasilitas dasar yang lengkap.' },
  { year: '2017', title: 'Akreditasi Nasional', desc: 'Berhasil meraih akreditasi dari KARS (Komisi Akreditasi Rumah Sakit) sebagai pengakuan atas standar pelayanan kami.' },
  { year: '2019', title: 'Perluasan Gedung', desc: 'Pembangunan gedung baru menambah kapasitas rawat inap dan memperluas unit pelayanan spesialis.' },
  { year: '2021', title: 'Fasilitas Diagnostik Modern', desc: 'Penambahan peralatan diagnostik canggih: CT-Scan, USG 4D, dan laboratorium klinik terintegrasi.' },
  { year: '2023', title: 'Program Unggulan', desc: 'Launching Program Hamil Terpadu dan Medical Check-Up Komprehensif yang mendapat sambutan luar biasa.' },
  { year: '2025', title: 'Pengembangan Berkelanjutan', desc: 'Transformasi digital layanan, telemedicine, dan pengembangan unit ICU berkapasitas lebih besar.' },
];

const managementTeam = [
  { name: 'dr. Ahmad Fauzi, Sp.PD', role: 'Direktur Utama', desc: 'Memimpin RS Cahya Medika dengan pengalaman lebih dari 20 tahun di bidang manajemen rumah sakit dan pelayanan medis.' },
  { name: 'dr. Siti Rahayu, Sp.OG', role: 'Direktur Pelayanan Medis', desc: 'Bertanggung jawab atas kualitas pelayanan medis dan pengembangan program kesehatan ibu dan anak.' },
  { name: 'Budi Santoso, S.E., M.M.', role: 'Direktur Umum & Keuangan', desc: 'Mengelola operasional dan keuangan rumah sakit dengan prinsip tata kelola yang baik dan transparan.' },
];

const statsItems = [
  { icon: Clock, value: '10+', label: 'Tahun Pengalaman' },
  { icon: UserCheck, value: '50+', label: 'Dokter Spesialis' },
  { icon: Bed, value: '150+', label: 'Tempat Tidur' },
  { icon: Building2, value: '24 Jam', label: 'Pelayanan Penuh' },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function TentangKamiPage() {
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
              <span className="text-white">Tentang Kami</span>
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tentang Kami
            </motion.h1>
            <motion.p variants={fadeUp} className="text-blue-200 text-lg max-w-2xl mx-auto">
              Mengenal lebih dekat RS Cahya Medika Bondowoso — perjalanan, visi, dan komitmen kami untuk kesehatan masyarakat.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── About / History ── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="inline-block bg-blue-100 text-[#0c4a6e] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Sejarah Kami
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Melayani Masyarakat Bondowoso dengan Sepenuh Hati
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 mb-4 leading-relaxed">
                RS Cahya Medika didirikan pada tahun 2015 dengan satu tekad: menghadirkan fasilitas kesehatan berkualitas tinggi yang mudah diakses oleh seluruh lapisan masyarakat Bondowoso dan sekitarnya. Nama "Cahya" yang berarti cahaya mencerminkan harapan kami menjadi cahaya bagi mereka yang membutuhkan pertolongan medis.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 mb-6 leading-relaxed">
                Bermula dari sebuah klinik kecil, kini RS Cahya Medika telah berkembang menjadi rumah sakit umum dengan lebih dari 150 tempat tidur, lebih dari 50 dokter spesialis, dan puluhan unit layanan medis yang komprehensif. Kami terus bertumbuh karena kepercayaan yang diberikan oleh ribuan pasien setiap tahunnya.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3">
                {[
                  'Akreditasi KARS (Komisi Akreditasi Rumah Sakit)',
                  'Penghargaan Rumah Sakit Ramah Ibu dan Anak 2022',
                  'Sertifikasi ISO 9001:2015 Manajemen Mutu',
                  'Mitra resmi BPJS Kesehatan Kabupaten Bondowoso',
                ].map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-gray-700">
                    <Award className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image src="/images/hero.jpg" alt="RS Cahya Medika Bondowoso" fill className="object-cover" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0c4a6e] rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Terakreditasi Nasional</p>
                  <p className="text-gray-500 text-xs">KARS 2017 — Diperbarui 2023</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Visi & Misi ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="inline-block bg-blue-100 text-[#0c4a6e] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Visi & Misi
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900">
              Arah & Komitmen Kami
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Visi */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            >
              <div className="w-12 h-12 bg-[#0c4a6e] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visi</h3>
              <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-[#0c4a6e] pl-4">
                "Menjadi rumah sakit pilihan utama masyarakat Bondowoso yang unggul dalam pelayanan, keselamatan pasien, dan teknologi modern."
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            >
              <div className="w-12 h-12 bg-[#047857] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Misi</h3>
              <ul className="space-y-3">
                {misiItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Nilai-Nilai ── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="inline-block bg-blue-100 text-[#0c4a6e] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Nilai-Nilai Kami
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900">
              Prinsip yang Kami Junjung Tinggi
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {nilaiItems.map((n) => {
              const Icon = n.icon;
              return (
                <motion.div
                  key={n.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 ${n.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${n.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{n.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{n.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="inline-block bg-blue-100 text-[#0c4a6e] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Perjalanan Kami
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900">
              Tonggak Sejarah RS Cahya Medika
            </motion.h2>
          </motion.div>

          {/* Timeline items */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    <p className="text-[#0c4a6e] font-bold text-sm mb-1">{item.year}</p>
                    <h3 className="text-gray-900 font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-10 h-10 bg-[#0c4a6e] rounded-full items-center justify-center shrink-0 z-10 shadow-md">
                    <span className="text-white text-xs font-bold">{item.year.slice(2)}</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Manajemen ── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="inline-block bg-blue-100 text-[#0c4a6e] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Manajemen
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900">
              Tim Pimpinan Kami
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-3 max-w-xl mx-auto">
              Dipimpin oleh para profesional berpengalaman yang berdedikasi untuk mewujudkan visi RS Cahya Medika.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {managementTeam.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                {/* Avatar placeholder */}
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserCheck className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-gray-900 font-bold text-base mb-1">{member.name}</h3>
                <p className="text-[#0c4a6e] text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Keunggulan / Stats ── */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">
              Keunggulan RS Cahya Medika
            </motion.h2>
            <motion.p variants={fadeUp} className="text-blue-200 mt-3 max-w-xl mx-auto">
              Angka yang mencerminkan dedikasi kami dalam melayani masyarakat Bondowoso.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {statsItems.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="bg-white/10 rounded-2xl p-6 text-center"
                >
                  <Icon className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                  <p className="text-4xl font-extrabold text-white mb-1">{s.value}</p>
                  <p className="text-blue-200 text-sm">{s.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
