"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartPulse,
  Stethoscope,
  Activity,
  Phone,
  MessageCircle,
  CalendarCheck,
  ShieldCheck,
  Microscope,
  Users,
  Bed,
  Baby,
  Clock,
  ChevronRight,
  Star,
  ClipboardList,
  CheckCircle2,
  Syringe,
  FlaskConical,
  Pill,
  Zap,
} from "lucide-react";

const quickAccessItems = [
  { icon: CalendarCheck, title: "Jadwal Dokter", desc: "Lihat jadwal dokter spesialis", href: "/dokter-spesialis", color: "bg-blue-50 text-primary" },
  { icon: ClipboardList, title: "Daftar Online", desc: "Buat janji temu dokter", href: "/dokter-spesialis", color: "bg-green-50 text-secondary" },
  { icon: ShieldCheck, title: "Info Asuransi", desc: "Asuransi & cara pembayaran", href: "/asuransi-pembayaran", color: "bg-purple-50 text-purple-700" },
  { icon: Baby, title: "Program Hamil", desc: "Pendampingan kehamilan terpadu", href: "/program-hamil", color: "bg-pink-50 text-pink-700" },
  { icon: Activity, title: "Artikel Kesehatan", desc: "Tips & edukasi kesehatan", href: "/artikel-kesehatan", color: "bg-orange-50 text-orange-700" },
  { icon: Phone, title: "Kontak Darurat", desc: "IGD 24 jam siap membantu", href: "/kontak", color: "bg-red-50 text-red-700" },
];

const services = [
  { icon: Activity, title: "IGD 24 Jam", desc: "Penanganan kegawatdaruratan medis dengan tim siaga 24 jam.", color: "text-red-600 bg-red-50" },
  { icon: Stethoscope, title: "Klinik Umum", desc: "Pemeriksaan dan pengobatan umum oleh dokter berpengalaman.", color: "text-primary bg-blue-50" },
  { icon: Users, title: "Klinik Spesialis", desc: "Konsultasi dengan dokter spesialis di berbagai bidang.", color: "text-primary bg-blue-50" },
  { icon: Baby, title: "Program Hamil", desc: "Pendampingan kehamilan komprehensif dari awal hingga persalinan.", color: "text-pink-600 bg-pink-50" },
  { icon: Microscope, title: "USG Kehamilan", desc: "Pemeriksaan USG 2D, 3D, 4D dengan teknologi terkini.", color: "text-secondary bg-green-50" },
  { icon: Syringe, title: "Ruang Operasi", desc: "Fasilitas bedah modern dengan standar sterilitas tinggi.", color: "text-purple-600 bg-purple-50" },
  { icon: FlaskConical, title: "Laboratorium", desc: "Pemeriksaan laboratorium lengkap untuk diagnosis akurat.", color: "text-amber-600 bg-amber-50" },
  { icon: Pill, title: "Farmasi 24 Jam", desc: "Apotek lengkap dengan apoteker profesional.", color: "text-teal-600 bg-teal-50" },
];

const doctors = [
  { name: "dr. H. Hery, Sp.OG", specialty: "Spesialis Kandungan", exp: "20 Tahun", schedule: "Senin–Sabtu" },
  { name: "dr. Andi Prabowo, Sp.PD", specialty: "Penyakit Dalam", exp: "15 Tahun", schedule: "Sen, Rab, Jum" },
  { name: "dr. Rina Setiawati, Sp.A", specialty: "Spesialis Anak", exp: "12 Tahun", schedule: "Sel, Kam" },
  { name: "dr. Budi Kurniawan, Sp.JP", specialty: "Spesialis Jantung", exp: "16 Tahun", schedule: "Sen, Jum" },
];

const articles = [
  {
    category: "Ibu & Anak",
    date: "1 Agustus 2026",
    title: "Nutrisi Penting yang Wajib Dipenuhi Selama Kehamilan",
    excerpt: "Panduan lengkap tentang asupan nutrisi yang dibutuhkan ibu hamil untuk mendukung tumbuh kembang janin optimal.",
    readTime: "4 menit",
  },
  {
    category: "Kesehatan Umum",
    date: "28 Juli 2026",
    title: "Pentingnya Medical Check Up Rutin untuk Deteksi Dini Penyakit",
    excerpt: "Pemeriksaan kesehatan berkala dapat membantu mendeteksi penyakit sejak dini sebelum berkembang lebih serius.",
    readTime: "5 menit",
  },
  {
    category: "Gaya Hidup Sehat",
    date: "25 Juli 2026",
    title: "5 Kebiasaan Sehari-hari untuk Menjaga Kesehatan Jantung",
    excerpt: "Jantung adalah organ vital yang perlu dijaga dengan kebiasaan hidup sehat sejak dini untuk mencegah risiko penyakit.",
    readTime: "6 menit",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">

      {/* ======================== HERO SECTION ======================== */}
      <section className="relative bg-white pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
        {/* Subtle background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-6 origin-top-right" aria-hidden="true" />

        <div className="relative container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[580px]">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-7 relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-700 text-sm font-semibold">Pelayanan Kesehatan Terpercaya</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Pelayanan Kesehatan Modern Terbaik untuk Keluarga Anda
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                RS Cahya Medika Bondowoso menyediakan layanan medis umum, spesialis, IGD 24 jam, ruang operasi, program hamil, dan fasilitas kesehatan modern dengan tenaga medis profesional dan berpengalaman.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/dokter-spesialis"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-sm"
                >
                  Daftar Online
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/layanan-medis"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-primary font-bold border-2 border-primary/25 hover:bg-primary/5 hover:border-primary/50 transition-all"
                >
                  Lihat Layanan
                </Link>
                <a
                  href="https://wa.me/6285257103300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-100">
                {["Tenaga Medis Bersertifikat", "Fasilitas Modern", "Siaga 24 Jam"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-semibold text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative z-10"
            >
              <div className="relative w-full h-[480px] lg:h-[560px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-image.png"
                  alt="Lobby RS Cahya Medika Bondowoso"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 to-transparent" />
              </div>

              {/* Floating Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -right-4 top-8 bg-white rounded-xl shadow-lg border border-slate-100 p-3.5 flex items-center gap-3 min-w-[155px]"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Siaga</p>
                  <p className="text-sm font-bold text-slate-800">IGD 24 Jam</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg border border-slate-100 p-3.5 flex items-center gap-3 min-w-[155px]"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Tim Kami</p>
                  <p className="text-sm font-bold text-slate-800">50+ Dokter</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-4 bottom-24 bg-white rounded-xl shadow-lg border border-slate-100 p-3.5 flex items-center gap-3 min-w-[155px]"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 shrink-0">
                  <Baby className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Unggulan</p>
                  <p className="text-sm font-bold text-slate-800">Program Hamil</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -right-4 bottom-10 bg-white rounded-xl shadow-lg border border-slate-100 p-3.5 flex items-center gap-3 min-w-[155px]"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                  <Syringe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Tersedia</p>
                  <p className="text-sm font-bold text-slate-800">Ruang Operasi</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================== STATS SECTION ======================== */}
      <section className="bg-primary py-12">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[
              { num: "50+", label: "Dokter Spesialis", icon: Stethoscope },
              { num: "10.000+", label: "Pasien Dilayani", icon: Users },
              { num: "150+", label: "Tempat Tidur", icon: Bed },
              { num: "98%", label: "Tingkat Kepuasan", icon: HeartPulse },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-1">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-extrabold">{stat.num}</div>
                <div className="text-primary-light text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== QUICK ACCESS SECTION ======================== */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Akses Cepat</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Layanan yang Sering Digunakan</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickAccessItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="group flex flex-col items-center text-center p-5 bg-white rounded-xl border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-200 h-full"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-slate-800 text-sm mb-1 group-hover:text-primary transition-colors">{item.title}</p>
                  <p className="text-xs text-slate-400 leading-tight">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== ABOUT SECTION ======================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/rs-1.png"
                  alt="Ruang Tunggu RS Cahya Medika Bondowoso"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg border border-slate-100 p-5 text-center">
                <div className="text-4xl font-extrabold text-primary">10+</div>
                <div className="text-sm font-semibold text-slate-600 mt-1">Tahun<br/>Melayani</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-7"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold uppercase tracking-widest">
                Tentang Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Dedikasi Penuh untuk{" "}
                <span className="text-primary">Kesehatan</span>{" "}
                Masyarakat Bondowoso
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Rumah Sakit Cahya Medika Bondowoso hadir sebagai pusat rujukan medis modern dengan standar pelayanan tinggi. Kami berkomitmen memberikan perawatan holistik yang didukung teknologi medis terkini dan tenaga medis profesional bersertifikat.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Clock, title: "Siaga 24 Jam", desc: "IGD dan layanan darurat siap sepanjang waktu", color: "text-primary bg-blue-50" },
                  { icon: Stethoscope, title: "Dokter Ahli", desc: "Tim dokter spesialis berpengalaman", color: "text-secondary bg-green-50" },
                  { icon: Zap, title: "Fasilitas Modern", desc: "Peralatan medis berteknologi terkini", color: "text-purple-600 bg-purple-50" },
                  { icon: ShieldCheck, title: "Pelayanan Terpadu", desc: "Pelayanan lengkap dari satu atap", color: "text-amber-600 bg-amber-50" },
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl ${feat.color} flex items-center justify-center shrink-0`}>
                      <feat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{feat.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-dark transition-colors text-sm"
              >
                Pelajari Lebih Lanjut <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================== SERVICES SECTION ======================== */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Layanan Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Layanan Kesehatan <span className="text-primary">Komprehensif</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Kami menyediakan berbagai layanan medis lengkap dengan teknologi modern dan tenaga ahli berpengalaman.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <Link
                  href="/layanan-medis"
                  className="group flex flex-col p-6 bg-white rounded-xl border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-200 h-full"
                >
                  <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-grow">{service.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-primary text-sm font-semibold">
                    Selengkapnya <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/layanan-medis"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
            >
              Lihat Semua Layanan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================== DOCTORS SECTION ======================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                Tim Ahli Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Dokter & Spesialis <span className="text-primary">Terbaik</span>
              </h2>
            </div>
            <Link
              href="/dokter-spesialis"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-dark transition-colors shrink-0"
            >
              Lihat Semua Dokter <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md hover:border-primary/20 transition-all duration-200"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={i % 2 === 0 ? "/images/rs-4.png" : "/images/rs-5.png"}
                    alt={doc.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block px-2 py-1 bg-primary/8 text-primary text-xs font-semibold rounded-md mb-2">
                    {doc.specialty}
                  </span>
                  <h3 className="font-bold text-slate-800 text-base mb-1">{doc.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-amber-400 text-amber-400" />{doc.exp}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{doc.schedule}</span>
                  </div>
                  <Link
                    href="/dokter-spesialis"
                    className="block w-full text-center py-2.5 rounded-lg border border-primary/25 text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all"
                  >
                    Buat Janji Temu
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== PROGRAM HAMIL HIGHLIGHT ======================== */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-72 lg:h-auto min-h-[400px] order-2 lg:order-1">
                <Image
                  src="/images/rs-4.png"
                  alt="Ruang Perawatan Pasien RS Cahya Medika"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="p-10 lg:p-14 flex flex-col justify-center order-1 lg:order-2"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-secondary text-xs font-bold uppercase tracking-widest mb-5 w-fit">
                  <Baby className="w-3.5 h-3.5" />
                  Program Unggulan
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                  Program Hamil Terpadu <span className="text-secondary">RS Cahya Medika</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-7">
                  Layanan pendampingan kehamilan lengkap dari awal kehamilan hingga persalinan. Dipandu oleh dokter spesialis kandungan berpengalaman dengan fasilitas USG modern dan program edukasi komprehensif.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "USG Kehamilan 2D, 3D & 4D",
                    "Konsultasi Dokter Spesialis Kandungan",
                    "Pemeriksaan Rutin Ibu Hamil",
                    "Edukasi Kesehatan Ibu & Janin",
                    "Persiapan & Pendampingan Persalinan",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/program-hamil"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-white font-bold hover:bg-secondary/90 transition-all shadow-sm"
                  >
                    Pelajari Program <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/6285257103300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-secondary text-secondary font-bold hover:bg-green-50 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Konsultasi
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== ARTICLES SECTION ======================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                Edukasi Kesehatan
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Artikel & Berita <span className="text-primary">Kesehatan</span>
              </h2>
            </div>
            <Link
              href="/artikel-kesehatan"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-dark transition-colors shrink-0"
            >
              Lihat Semua Artikel <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group"
              >
                <Link href="/artikel-kesehatan">
                  <div className="relative h-52 rounded-xl overflow-hidden mb-5 shadow-sm">
                    <Image
                      src={i % 2 === 0 ? "/images/rs-5.png" : "/images/rs-4.png"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white/95 text-primary text-xs font-bold shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 px-1">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime} baca</span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-primary text-sm font-semibold pt-1">
                      Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== EMERGENCY CTA ======================== */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
            <div className="relative hidden lg:block w-96 h-64 shrink-0 overflow-hidden rounded-2xl">
              <Image
                src="/images/rs-2.png"
                alt="Mobil Ambulans RS Cahya Medika"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0vw, 384px"
              />
            </div>
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
                <span className="text-primary-light text-sm font-bold uppercase tracking-wider">IGD Siaga 24 Jam</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                Keadaan Darurat?
              </h2>
              <p className="text-primary-light text-lg max-w-xl">
                Tim paramedis dan IGD kami siaga 24 jam setiap hari untuk memberikan pertolongan cepat dan tepat saat Anda membutuhkannya.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:03325557554"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-sm"
              >
                <Phone className="w-5 h-5" />
                (0332) 5557554
              </a>
              <a
                href="https://wa.me/6285257103300"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
