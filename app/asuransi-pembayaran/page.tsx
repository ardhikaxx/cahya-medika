'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Banknote,
  CreditCard,
  Building2,
  ShieldCheck,
  ChevronDown,
  Phone,
  MessageCircle,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

// ─── Payment Methods ──────────────────────────────────────────────────────────
const paymentMethods = [
  {
    icon: Banknote,
    title: 'Tunai / Cash',
    description:
      'Pembayaran tunai diterima di semua kasir rumah sakit. Tersedia kasir di IGD, rawat inap, dan rawat jalan.',
    color: 'bg-green-50 text-green-700 border-green-200',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Building2,
    title: 'Transfer Bank',
    description:
      'Transfer via BCA, BRI, BNI, Mandiri, dan bank lainnya. Konfirmasi pembayaran ke bagian kasir dengan menunjukkan bukti transfer.',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: CreditCard,
    title: 'Kartu Kredit / Debit',
    description:
      'Kami menerima kartu kredit dan debit Visa, Mastercard, dan GPN. Tersedia mesin EDC di seluruh kasir rumah sakit.',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: ShieldCheck,
    title: 'Asuransi Kesehatan',
    description:
      'Kami bekerja sama dengan berbagai perusahaan asuransi swasta. Pastikan kartu asuransi Anda aktif sebelum berobat.',
    color: 'bg-orange-50 text-orange-700 border-orange-200',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
];

// ─── Insurance Partners ───────────────────────────────────────────────────────
const insurancePartners = [
  { name: 'BCA Life Insurance', initials: 'BCA', type: 'Jiwa & Kesehatan', bg: 'bg-blue-600' },
  { name: 'BRI Life', initials: 'BRI', type: 'Jiwa & Kesehatan', bg: 'bg-blue-700' },
  { name: 'Allianz Health', initials: 'ALZ', type: 'Asuransi Kesehatan', bg: 'bg-sky-600' },
  { name: 'AIA Indonesia', initials: 'AIA', type: 'Jiwa & Kesehatan', bg: 'bg-red-600' },
  { name: 'Prudential Health', initials: 'PRU', type: 'Asuransi Kesehatan', bg: 'bg-red-700' },
  { name: 'Manulife Indonesia', initials: 'MNL', type: 'Jiwa & Kesehatan', bg: 'bg-green-700' },
  { name: 'Cigna Indonesia', initials: 'CGN', type: 'Asuransi Kesehatan', bg: 'bg-teal-600' },
  { name: 'Jiwasraya', initials: 'JWS', type: 'Asuransi Jiwa', bg: 'bg-indigo-600' },
  { name: 'Asuransi Adira', initials: 'ADR', type: 'Asuransi Umum', bg: 'bg-orange-600' },
  { name: 'Astra Life', initials: 'AST', type: 'Jiwa & Kesehatan', bg: 'bg-yellow-600' },
  { name: 'Lippo Insurance', initials: 'LPO', type: 'Asuransi Umum', bg: 'bg-pink-600' },
  { name: 'Sinarmas MSIG', initials: 'SMS', type: 'Asuransi Umum', bg: 'bg-cyan-700' },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Apa saja asuransi yang diterima di RS Cahya Medika?',
    a: 'RS Cahya Medika bekerja sama dengan berbagai perusahaan asuransi swasta seperti BCA Life, BRI Life, Allianz, AIA, Prudential, Manulife, Cigna, dan masih banyak lagi. Silakan lihat daftar mitra asuransi kami di atas atau hubungi bagian administrasi untuk informasi terkini.',
  },
  {
    q: 'Bagaimana prosedur klaim asuransi di rumah sakit?',
    a: 'Untuk klaim asuransi, pasien perlu membawa: (1) Kartu asuransi yang masih aktif, (2) Kartu identitas (KTP), (3) Surat rujukan jika diperlukan oleh polis asuransi Anda. Serahkan dokumen tersebut ke bagian administrasi sebelum mendapatkan layanan medis.',
  },
  {
    q: 'Apakah RS Cahya Medika menerima BPJS Kesehatan?',
    a: 'Untuk informasi terkini mengenai kerja sama dengan BPJS Kesehatan, kami sarankan untuk menghubungi rumah sakit secara langsung melalui telepon atau WhatsApp. Status kerja sama dapat berubah sewaktu-waktu sesuai dengan kebijakan yang berlaku.',
  },
  {
    q: 'Berapa lama proses klaim asuransi diselesaikan?',
    a: 'Proses verifikasi klaim asuransi biasanya memerlukan waktu 1-3 hari kerja tergantung dari perusahaan asuransi Anda. Untuk klaim cashless, proses persetujuan dapat dilakukan pada hari yang sama jika dokumen lengkap dan asuransi merespons dengan cepat.',
  },
  {
    q: 'Apakah diperlukan uang muka untuk pasien rawat inap?',
    a: 'Untuk pasien rawat inap dengan asuransi swasta yang memiliki fasilitas cashless, uang muka biasanya tidak diperlukan selama limit asuransi mencukupi. Namun untuk biaya di luar tanggungan asuransi, pasien mungkin diminta membayar selisihnya.',
  },
  {
    q: 'Bagaimana jika biaya pengobatan tidak di-cover asuransi?',
    a: 'Jika terdapat biaya yang tidak di-cover oleh asuransi, pasien bertanggung jawab untuk melunasinya. Bagian keuangan kami siap membantu menjelaskan rincian tagihan dan pilihan pembayaran yang tersedia, termasuk kemungkinan cicilan untuk biaya tertentu.',
  },
  {
    q: 'Apakah bisa membayar tagihan rumah sakit dengan cicilan?',
    a: 'RS Cahya Medika menyediakan kemudahan cicilan melalui kartu kredit dengan tenor tertentu. Untuk pengajuan cicilan, silakan hubungi bagian keuangan rumah sakit. Kebijakan cicilan berlaku untuk tagihan di atas nominal tertentu.',
  },
  {
    q: 'Di mana saya bisa mengurus administrasi asuransi dan pembayaran?',
    a: 'Bagian administrasi dan keuangan terletak di lantai 1 dekat pintu masuk utama. Jam operasional: Senin–Jumat pukul 07.00–20.00 WIB, Sabtu pukul 07.00–14.00 WIB. Untuk IGD, administrasi tersedia 24 jam.',
  },
];

// ─── Accordion Item ───────────────────────────────────────────────────────────
function AccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="border border-gray-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800 leading-snug">{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-primary"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AsuransiPembayaranPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* ── Page Header ───────────────────────────────────── */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              <ShieldCheck size={14} />
              Informasi Pembayaran
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Asuransi &amp; Pembayaran
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
              RS Cahya Medika menyediakan berbagai kemudahan metode pembayaran dan bekerja sama
              dengan perusahaan asuransi terkemuka untuk memudahkan akses layanan kesehatan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Payment Methods ────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Metode Pembayaran</h2>
            <p className="text-gray-500">Kami menerima berbagai metode pembayaran untuk kenyamanan Anda</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`border rounded-2xl p-6 ${m.color}`}
              >
                <div className={`w-12 h-12 rounded-xl ${m.iconBg} flex items-center justify-center mb-4`}>
                  <m.icon size={24} className={m.iconColor} />
                </div>
                <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insurance Partners ─────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Mitra Asuransi</h2>
            <p className="text-gray-500">
              RS Cahya Medika bekerja sama dengan perusahaan asuransi terpercaya berikut
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {insurancePartners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 p-4 border border-gray-200 rounded-2xl hover:border-primary hover:shadow-sm transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${partner.bg} flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-sm tracking-wide">
                    {partner.initials}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-800 leading-tight">{partner.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{partner.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BPJS Info Box ──────────────────────────────────── */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex gap-4 bg-amber-50 border border-amber-300 rounded-2xl p-6"
          >
            <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={24} />
            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-1">Informasi BPJS Kesehatan</h3>
              <p className="text-amber-700 leading-relaxed">
                Untuk mengetahui status kerja sama terkini RS Cahya Medika dengan BPJS Kesehatan,
                kami menyarankan agar pasien menghubungi pihak rumah sakit secara langsung sebelum
                berkunjung. Status kerja sama dapat berubah sesuai dengan kebijakan dan peraturan
                yang berlaku. Hubungi kami melalui telepon atau WhatsApp untuk informasi terbaru.
              </p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {[
                  'Hubungi RS sebelum berobat',
                  'Bawa dokumen lengkap',
                  'Konfirmasi limit manfaat',
                ].map((tip) => (
                  <li key={tip} className="flex items-center gap-1.5 text-sm text-amber-700">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Accordion ──────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Pertanyaan Umum
            </h2>
            <p className="text-gray-500">
              Temukan jawaban atas pertanyaan seputar asuransi dan pembayaran
            </p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ada Pertanyaan tentang Asuransi?
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Tim administrasi kami siap membantu Anda mengurus proses klaim asuransi dan
              administrasi pembayaran. Hubungi kami sekarang.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6285258001234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp Kami
              </a>
              <a
                href="tel:+62332421234"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <Phone size={20} />
                (0332) 421234
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
