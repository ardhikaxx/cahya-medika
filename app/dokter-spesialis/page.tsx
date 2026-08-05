'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Search,
  Calendar,
  Clock,
  Award,
  Phone,
  ChevronRight,
  Stethoscope,
  Info,
} from 'lucide-react';

const doctors = [
  {
    name: 'dr. Andi Prabowo, Sp.PD',
    specialty: 'Penyakit Dalam',
    experience: 15,
    schedule: 'Senin, Rabu, Jumat',
    time: '09:00 – 12:00',
    photo: '/images/hero.jpg',
  },
  {
    name: 'dr. Rina Setiawati, Sp.A',
    specialty: 'Anak',
    experience: 12,
    schedule: 'Selasa, Kamis',
    time: '10:00 – 13:00',
    photo: '/images/hero.jpg',
  },
  {
    name: 'dr. H. Hery, Sp.OG',
    specialty: 'Kandungan & Kebidanan',
    experience: 20,
    schedule: 'Senin – Sabtu',
    time: '08:00 – 11:00',
    photo: '/images/hero.jpg',
  },
  {
    name: 'dr. Maya Indah, Sp.M',
    specialty: 'Mata',
    experience: 10,
    schedule: 'Rabu, Jumat',
    time: '13:00 – 16:00',
    photo: '/images/hero.jpg',
  },
  {
    name: 'dr. Hendra Wijaya, Sp.B',
    specialty: 'Bedah Umum',
    experience: 14,
    schedule: 'Selasa, Kamis',
    time: '08:00 – 11:00',
    photo: '/images/hero.jpg',
  },
  {
    name: 'dr. Siti Aminah, Sp.S',
    specialty: 'Saraf',
    experience: 11,
    schedule: 'Senin, Rabu',
    time: '14:00 – 17:00',
    photo: '/images/hero.jpg',
  },
  {
    name: 'dr. Budi Kurniawan, Sp.JP',
    specialty: 'Jantung',
    experience: 16,
    schedule: 'Senin, Jumat',
    time: '09:00 – 12:00',
    photo: '/images/hero.jpg',
  },
  {
    name: 'dr. Dewi Kusuma, Sp.THT',
    specialty: 'THT',
    experience: 9,
    schedule: 'Selasa, Sabtu',
    time: '10:00 – 13:00',
    photo: '/images/hero.jpg',
  },
  {
    name: 'dr. Fajar Nugroho, Sp.OT',
    specialty: 'Ortopedi',
    experience: 13,
    schedule: 'Rabu, Jumat',
    time: '08:00 – 11:00',
    photo: '/images/hero.jpg',
  },
  {
    name: 'dr. Lestari Putri, Sp.KK',
    specialty: 'Kulit & Kelamin',
    experience: 8,
    schedule: 'Kamis, Sabtu',
    time: '13:00 – 16:00',
    photo: '/images/hero.jpg',
  },
  {
    name: 'drg. Rahma Sari',
    specialty: 'Gigi & Mulut',
    experience: 7,
    schedule: 'Senin – Jumat',
    time: '09:00 – 12:00',
    photo: '/images/hero.jpg',
  },
  {
    name: 'dr. Agus Supriyanto, Sp.An',
    specialty: 'Anestesiologi',
    experience: 18,
    schedule: 'Konsultasi dengan perjanjian',
    time: '',
    photo: '/images/hero.jpg',
  },
];

const specialties = [
  'Semua',
  'Penyakit Dalam',
  'Anak',
  'Kandungan & Kebidanan',
  'Bedah Umum',
  'Mata',
  'Saraf',
  'THT',
  'Jantung',
  'Ortopedi',
  'Gigi & Mulut',
  'Kulit & Kelamin',
];

const specialtyColors: Record<string, string> = {
  'Penyakit Dalam': 'bg-blue-100 text-blue-800',
  Anak: 'bg-green-100 text-green-800',
  'Kandungan & Kebidanan': 'bg-pink-100 text-pink-800',
  Mata: 'bg-purple-100 text-purple-800',
  'Bedah Umum': 'bg-orange-100 text-orange-800',
  Saraf: 'bg-indigo-100 text-indigo-800',
  Jantung: 'bg-red-100 text-red-800',
  THT: 'bg-teal-100 text-teal-800',
  Ortopedi: 'bg-amber-100 text-amber-800',
  'Kulit & Kelamin': 'bg-rose-100 text-rose-800',
  'Gigi & Mulut': 'bg-cyan-100 text-cyan-800',
  Anestesiologi: 'bg-slate-100 text-slate-800',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] },
  }),
};

export default function DokterSpesialisPage() {
  const [search, setSearch] = useState('');
  const [activeSpecialty, setActiveSpecialty] = useState('Semua');

  const filtered = useMemo(() => {
    return doctors.filter((doc) => {
      const matchSearch =
        doc.name.toLowerCase().includes(search.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(search.toLowerCase());
      const matchSpecialty =
        activeSpecialty === 'Semua' || doc.specialty === activeSpecialty;
      return matchSearch && matchSpecialty;
    });
  }, [search, activeSpecialty]);

  const waLink = `https://wa.me/6282139386666?text=${encodeURIComponent(
    'Halo, saya ingin membuat janji temu dengan dokter spesialis di RS Cahya Medika.'
  )}`;

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
              <Stethoscope size={16} />
              <span className="text-sm font-medium">Tim Medis Profesional</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Dokter &amp; Spesialis
            </h1>
            <p className="text-white/80 max-w-xl mx-auto text-base sm:text-lg">
              Temukan dokter spesialis terpercaya kami dan jadwalkan konsultasi
              dengan mudah
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Search & Filter ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="relative max-w-lg mx-auto mb-6"
        >
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Cari nama dokter atau spesialisasi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-sm shadow-sm"
          />
        </motion.div>

        {/* Specialty filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {specialties.map((sp) => (
            <button
              key={sp}
              onClick={() => setActiveSpecialty(sp)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                activeSpecialty === sp
                  ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
              }`}
            >
              {sp}
            </button>
          ))}
        </motion.div>

        {/* Result count */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Menampilkan{' '}
          <span className="font-semibold text-[var(--color-primary)]">
            {filtered.length}
          </span>{' '}
          dokter
        </p>
      </section>

      {/* ── Doctors Grid ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <Stethoscope size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">Dokter tidak ditemukan</p>
            <p className="text-sm mt-1">Coba ubah kata kunci pencarian Anda</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((doc, i) => (
              <motion.div
                key={doc.name}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Photo */}
                <div className="relative h-56 w-full">
                  <Image
                    src={doc.photo}
                    alt={doc.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        specialtyColors[doc.specialty] ??
                        'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {doc.specialty}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-sm leading-tight mb-3">
                    {doc.name}
                  </h3>

                  <div className="space-y-2 text-xs text-gray-600 mb-4 flex-1">
                    <div className="flex items-center gap-2">
                      <Award size={13} className="text-[var(--color-primary)] shrink-0" />
                      <span>{doc.experience} Tahun Pengalaman</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar size={13} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{doc.schedule}</span>
                    </div>
                    {doc.time && (
                      <div className="flex items-center gap-2">
                        <Clock size={13} className="text-[var(--color-primary)] shrink-0" />
                        <span>{doc.time}</span>
                      </div>
                    )}
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center text-sm font-semibold border border-[var(--color-primary)] text-[var(--color-primary)] py-2 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                  >
                    Buat Janji Temu
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ── Schedule Info Note ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4"
        >
          <Info size={20} className="text-blue-600 shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-semibold mb-1">Informasi Jadwal Praktek</p>
            <p className="text-blue-700 leading-relaxed">
              Jadwal praktek dokter dapat berubah sewaktu-waktu. Untuk
              memastikan ketersediaan dokter, silakan hubungi bagian informasi
              RS Cahya Medika sebelum datang atau gunakan tombol WhatsApp di
              bawah.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── CTA: WhatsApp ── */}
      <section className="bg-[var(--color-primary)] py-14 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto px-4"
        >
          <Phone size={36} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold mb-2">Butuh Bantuan?</h2>
          <p className="text-white/80 mb-6 text-sm">
            Hubungi kami via WhatsApp untuk membuat janji temu atau mendapatkan
            informasi jadwal dokter terbaru.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-secondary)] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat via WhatsApp
            <ChevronRight size={16} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
