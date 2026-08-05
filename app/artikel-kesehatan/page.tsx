'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Clock,
  User,
  Tag,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Mail,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  slug: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const categories = [
  'Semua',
  'Kesehatan Umum',
  'Ibu & Anak',
  'Penyakit & Pencegahan',
  'Gaya Hidup Sehat',
  'Kesehatan Lansia',
  'Tips Medis',
];

const categoryColors: Record<string, string> = {
  'Kesehatan Umum': 'bg-blue-100 text-blue-700',
  'Ibu & Anak': 'bg-pink-100 text-pink-700',
  'Penyakit & Pencegahan': 'bg-red-100 text-red-700',
  'Gaya Hidup Sehat': 'bg-green-100 text-green-700',
  'Kesehatan Lansia': 'bg-purple-100 text-purple-700',
  'Tips Medis': 'bg-orange-100 text-orange-700',
};

const articles: Article[] = [
  {
    id: 1,
    title: 'Pentingnya Medical Check Up Rutin untuk Deteksi Dini Penyakit',
    excerpt:
      'Medical check up rutin adalah investasi terbaik untuk kesehatan Anda. Dengan pemeriksaan berkala, berbagai penyakit dapat dideteksi sejak dini sebelum berkembang menjadi kondisi yang lebih serius.',
    category: 'Kesehatan Umum',
    date: '28 Juli 2026',
    readTime: '5 menit',
    author: 'dr. Budi Santoso, Sp.PD',
    slug: 'pentingnya-medical-check-up-rutin',
  },
  {
    id: 2,
    title: 'Nutrisi Penting Selama Kehamilan yang Perlu Ibu Ketahui',
    excerpt:
      'Asupan nutrisi yang tepat selama kehamilan sangat penting untuk tumbuh kembang janin yang optimal. Ketahui nutrisi esensial yang dibutuhkan ibu hamil di setiap trimester.',
    category: 'Ibu & Anak',
    date: '25 Juli 2026',
    readTime: '4 menit',
    author: 'dr. Siti Aminah, Sp.OG',
    slug: 'nutrisi-penting-selama-kehamilan',
  },
  {
    id: 3,
    title: 'Cara Mencegah Hipertensi: Gaya Hidup Sehat yang Perlu Diterapkan',
    excerpt:
      'Hipertensi atau tekanan darah tinggi adalah kondisi yang bisa dicegah dengan perubahan gaya hidup. Pelajari langkah-langkah efektif untuk menjaga tekanan darah tetap normal.',
    category: 'Penyakit & Pencegahan',
    date: '22 Juli 2026',
    readTime: '3 menit',
    author: 'dr. Agus Prayitno, Sp.JP',
    slug: 'cara-mencegah-hipertensi',
  },
  {
    id: 4,
    title: 'Manfaat Olahraga Rutin untuk Kesehatan Jantung Anda',
    excerpt:
      'Olahraga teratur terbukti memberikan manfaat luar biasa bagi kesehatan jantung. Simak jenis olahraga yang direkomendasikan dokter dan durasi ideal untuk menjaga jantung tetap sehat.',
    category: 'Gaya Hidup Sehat',
    date: '18 Juli 2026',
    readTime: '6 menit',
    author: 'dr. Hendra Wijaya, Sp.JP',
    slug: 'manfaat-olahraga-kesehatan-jantung',
  },
  {
    id: 5,
    title: 'Imunisasi Anak: Jadwal Lengkap dan Manfaatnya bagi Si Kecil',
    excerpt:
      'Imunisasi adalah perlindungan terbaik untuk buah hati Anda. Kenali jadwal imunisasi yang direkomendasikan pemerintah dan manfaat setiap vaksin untuk melindungi anak dari penyakit berbahaya.',
    category: 'Ibu & Anak',
    date: '15 Juli 2026',
    readTime: '5 menit',
    author: 'dr. Ratna Dewi, Sp.A',
    slug: 'imunisasi-anak-jadwal-manfaat',
  },
  {
    id: 6,
    title: 'Diabetes: Gejala Awal yang Sering Diabaikan dan Cara Mengenalinya',
    excerpt:
      'Banyak penderita diabetes tidak menyadari kondisinya hingga stadium lanjut. Kenali gejala-gejala awal yang sering diabaikan agar dapat segera mendapatkan penanganan yang tepat.',
    category: 'Penyakit & Pencegahan',
    date: '12 Juli 2026',
    readTime: '4 menit',
    author: 'dr. Wahyu Nugroho, Sp.PD',
    slug: 'diabetes-gejala-awal-yang-sering-diabaikan',
  },
  {
    id: 7,
    title: 'Menjaga Kesehatan Optimal di Usia Lanjut: Panduan Lengkap',
    excerpt:
      'Memasuki usia lanjut bukan berarti harus menyerah pada penyakit. Dengan pola hidup yang tepat, lansia dapat tetap aktif, sehat, dan berkualitas hidupnya hingga usia senja.',
    category: 'Kesehatan Lansia',
    date: '8 Juli 2026',
    readTime: '7 menit',
    author: 'dr. Soemarno, Sp.PD-KGER',
    slug: 'menjaga-kesehatan-di-usia-lanjut',
  },
  {
    id: 8,
    title: 'Persiapan Sebelum Operasi: Yang Perlu Anda Ketahui dan Lakukan',
    excerpt:
      'Menghadapi operasi bisa menjadi pengalaman yang menegangkan. Persiapan yang baik sebelum operasi dapat membantu proses pemulihan menjadi lebih lancar dan meminimalkan risiko komplikasi.',
    category: 'Tips Medis',
    date: '5 Juli 2026',
    readTime: '5 menit',
    author: 'dr. Fauzi Rahman, Sp.B',
    slug: 'persiapan-sebelum-operasi',
  },
  {
    id: 9,
    title: 'USG Kehamilan: Kapan Harus Dilakukan dan Mengapa Sangat Penting',
    excerpt:
      'Ultrasonografi (USG) adalah prosedur penting selama kehamilan yang membantu memantau perkembangan janin. Ketahui waktu yang tepat untuk melakukan USG dan informasi apa yang bisa diperoleh.',
    category: 'Ibu & Anak',
    date: '2 Juli 2026',
    readTime: '4 menit',
    author: 'dr. Maya Kusuma, Sp.OG',
    slug: 'usg-kehamilan-kapan-dan-mengapa-penting',
  },
];

const featuredArticle = {
  title: 'Layanan Unggulan RS Cahya Medika: Komitmen Kami untuk Kesehatan Masyarakat Bondowoso',
  excerpt:
    'RS Cahya Medika terus berinovasi menghadirkan layanan kesehatan berkualitas tinggi bagi masyarakat Bondowoso dan sekitarnya. Dengan tenaga medis berpengalaman dan fasilitas modern, kami berkomitmen menjadi mitra kesehatan terpercaya keluarga Anda.',
  category: 'Kesehatan Umum',
  date: '1 Agustus 2026',
  readTime: '8 menit',
  author: 'Tim Editorial RS Cahya Medika',
  slug: 'layanan-unggulan-rs-cahya-medika',
};

// ─── Article Card ─────────────────────────────────────────────────────────────
function ArticleCard({ article, index }: { article: Article; index: number }) {
  const badgeClass = categoryColors[article.category] ?? 'bg-gray-100 text-gray-700';
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
          src="/images/hero.jpg"
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}>
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {article.readTime} baca
          </span>
        </div>
        <h3 className="font-bold text-gray-900 leading-snug mb-2 line-clamp-2 text-[15px]">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <User size={12} />
            {article.author}
          </span>
          <Link
            href={`/artikel-kesehatan/${article.slug}`}
            className="text-primary hover:text-blue-700 text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            Baca <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ArtikelKesehatanPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    activeCategory === 'Semua'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const ITEMS_PER_PAGE = 9;
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedArticles = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

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
              <BookOpen size={14} />
              Edukasi Kesehatan
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Berita &amp; Artikel Kesehatan
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
              Temukan informasi kesehatan terpercaya, tips medis, dan berita terkini seputar dunia
              kesehatan dari tim dokter RS Cahya Medika.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Article ────────────────────────────────── */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-64 md:h-auto min-h-[280px] bg-gray-100">
              <Image
                src="/images/hero.jpg"
                alt={featuredArticle.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-primary/20" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  ✦ Artikel Unggulan
                </span>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4 ${categoryColors[featuredArticle.category]}`}>
                {featuredArticle.category}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-3">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm">{featuredArticle.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {featuredArticle.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  {featuredArticle.readTime} baca
                </span>
                <span className="flex items-center gap-1.5">
                  <User size={13} />
                  {featuredArticle.author}
                </span>
              </div>
              <Link
                href={`/artikel-kesehatan/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 bg-primary hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm w-fit"
              >
                Baca Selengkapnya <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Category Filters + Grid ─────────────────────────── */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {cat !== 'Semua' && <Tag size={12} />}
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          {paginatedArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedArticles.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              <BookOpen size={40} className="mx-auto mb-3 opacity-40" />
              <p>Belum ada artikel dalam kategori ini.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-2 mt-10"
            >
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-9 h-9 rounded-lg text-sm font-medium border transition-all ${
                    currentPage === idx + 1
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail size={24} className="text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Langganan Newsletter Kesehatan
            </h2>
            <p className="text-gray-500 mb-8">
              Dapatkan artikel kesehatan terbaru dan tips medis langsung di inbox Anda. Gratis, tanpa
              spam.
            </p>
            {subscribed ? (
              <div className="flex items-center justify-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-2xl py-4 px-6">
                <span className="text-green-500 text-xl">✓</span>
                <span className="font-semibold">
                  Terima kasih! Anda telah berlangganan newsletter kami.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan alamat email Anda..."
                  required
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                >
                  Berlangganan
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
