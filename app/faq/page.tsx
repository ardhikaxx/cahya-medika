"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Search, MessageCircle, Phone } from "lucide-react";

const faqs = [
  { q: "Bagaimana cara mendaftar rawat jalan di RS Cahya Medika?", a: "Pendaftaran dapat dilakukan secara langsung di loket pendaftaran rawat jalan atau secara online melalui layanan WhatsApp di 0852-5710-3300 untuk mendapat kuota antrean lebih awal.", cat: "Pendaftaran" },
  { q: "Apakah RS Cahya Medika melayani pasien IGD 24 Jam?", a: "Ya, Instalasi Gawat Darurat (IGD) RS Cahya Medika siaga 24 jam nonstop setiap hari termasuk hari libur nasional dengan dokter dan perawat jaga.", cat: "Layanan" },
  { q: "Asuransi apa saja yang bekerjasama dengan RS Cahya Medika?", a: "RS Cahya Medika mendukung berbagai mitra asuransi swasta terkemuka seperti BCA Life, BRI Life, Allianz, Prudential, AIA, Manulife, dan asuransi swasta lainnya. Untuk kepastian BPJS Kesehatan, disarankan mengonfirmasi langsung ke pihak rumah sakit.", cat: "Asuransi" },
  { q: "Bagaimana cara mengecek jadwal praktik dokter spesialis?", a: "Jadwal dokter spesialis dapat dilihat secara lengkap pada halaman Dokter & Spesialis di website ini atau ditanyakan langsung via WhatsApp resmi kami.", cat: "Dokter" },
  { q: "Apakah tersedia fasilitas kamar rawat inap VIP?", a: "Ya, kami menyediakan berbagai pilihan kelas kamar rawat inap mulai dari Kelas 3, Kelas 2, Kelas 1, hingga Kamar VIP yang dilengkapi AC, TV, kulkas, sofa penunggu, dan kamar mandi dalam.", cat: "Fasilitas" },
  { q: "Bagaimana prosedur pendaftaran Program Hamil?", a: "Pasien dapat berkonsultasi terlebih dahulu dengan Dokter Spesialis Kandungan (Sp.OG) kami. Penjadwalan konsultasi dan USG kehamilan bisa dipesan melalui pendaftaran online.", cat: "Layanan" },
  { q: "Apakah pembayaran bisa menggunakan kartu kredit/debit?", a: "Bisa. Kami menerima pembayaran tunai, transfer bank, serta pembayaran menggunakan kartu debit dan kartu kredit dari bank terkemuka di Indonesia.", cat: "Asuransi" },
  { q: "Berapa nomor darurat IGD yang dapat dihubungi?", a: "Untuk keadaan darurat, Anda dapat segera menghubungi IGD RS Cahya Medika di nomor telepon (0332) 5557554 atau WhatsApp 0852-5710-3300.", cat: "Pendaftaran" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("Semua");

  const categories = ["Semua", "Pendaftaran", "Layanan", "Asuransi", "Dokter", "Fasilitas"];

  const filteredFaqs = faqs.filter((faq) => {
    const matchCat = selectedCat === "Semua" || faq.cat === selectedCat;
    const matchSearch = faq.q.toLowerCase().includes(search.toLowerCase()) || faq.a.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
          <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 text-primary-light text-xs font-bold uppercase tracking-widest mb-4">
            Pusat Bantuan
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Pertanyaan yang Sering Diajukan</h1>
          <p className="text-primary-light text-lg max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan umum seputar pelayanan, pendaftaran, asuransi, dan fasilitas di RS Cahya Medika Bondowoso.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto mt-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari pertanyaan atau kata kunci..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 font-medium outline-none text-sm shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                  selectedCat === cat ? "bg-primary text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p>Tidak ada pertanyaan yang sesuai dengan pencarian Anda.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-primary transition-colors"
                    >
                      <span className="text-base">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* Contact Box */}
          <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Belum Menemukan Jawaban?</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Tim layanan informasi RS Cahya Medika siap membantu Anda 24 jam untuk menjawab seluruh kebutuhan informasi kesehatan Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a href="https://wa.me/6285257103300" target="_blank" className="px-6 py-3 rounded-lg bg-green-500 text-white font-bold text-sm flex items-center gap-2 hover:bg-green-600 transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Information
              </a>
              <a href="tel:03325557554" className="px-6 py-3 rounded-lg bg-primary text-white font-bold text-sm flex items-center gap-2 hover:bg-primary-dark transition-colors">
                <Phone className="w-4 h-4" /> (0332) 5557554
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
