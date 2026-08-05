"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, CheckCircle2, Clock, MapPin, Send, Building, Users, HeartHandshake, Award } from "lucide-react";

const jobs = [
  { id: 1, title: "Dokter Umum", dept: "Pelayanan Medis", type: "Full-time", exp: "Minimal 2 Tahun", code: "DU-2026" },
  { id: 2, title: "Perawat Pelaksana", dept: "Keperawatan", type: "Full-time / Shift", exp: "Minimal 1 Tahun", code: "PRW-2026" },
  { id: 3, title: "Bidan Pelaksana", dept: "Kebidanan", type: "Full-time / Shift", exp: "Minimal 1 Tahun", code: "BDN-2026" },
  { id: 4, title: "Apoteker Pendamping", dept: "Farmasi", type: "Full-time", exp: "Fresh Graduate / Pengalaman", code: "APT-2026" },
  { id: 5, title: "Analis Kesehatan / Laboran", dept: "Laboratorium", type: "Full-time", exp: "Minimal 1 Tahun", code: "LAB-2026" },
  { id: 6, title: "Staff Administrasi Medis", dept: "Rekam Medis", type: "Full-time", exp: "Minimal 1 Tahun", code: "ADM-2026" },
];

export default function Karier() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
          <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 text-primary-light text-xs font-bold uppercase tracking-widest mb-4">
            Karier & Rekrutmen
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Bergabung Bersama Kami</h1>
          <p className="text-primary-light text-lg max-w-2xl mx-auto">
            Wujudkan potensi terbaik Anda dalam memberikan pelayanan kesehatan berkualitas tinggi bagi masyarakat Bondowoso.
          </p>
        </div>
      </section>

      {/* Nilai / Keuntungan */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Building, title: "Lingkungan Modern", desc: "Fasilitas kerja terlengkap dan berbasis teknologi." },
              { icon: Users, title: "Tim Profesional", desc: "Bekerja bersama tenaga medis ahli berpengalaman." },
              { icon: HeartHandshake, title: "Kesejahteraan", desc: "Paket kompensasi & benefit yang kompetitif." },
              { icon: Award, title: "Pengembangan Diri", desc: "Pelatihan berkelanjutan untuk jenjang karier." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/8 text-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lowongan */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Posisi yang Tersedia</h2>
            <p className="text-slate-500">Pilih posisi yang sesuai dengan kualifikasi dan minat Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="p-6 rounded-xl border border-slate-200 hover:border-primary hover:shadow-md transition-all bg-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-primary/8 text-primary text-xs font-semibold">{job.dept}</span>
                    <span className="text-xs font-bold text-slate-400">{job.code}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                  <div className="space-y-1.5 text-xs text-slate-500 mb-6">
                    <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary" /> {job.type}</p>
                    <p className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-primary" /> {job.exp}</p>
                    <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" /> RS Cahya Medika Bondowoso</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
                >
                  Lamar Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Form Lamaran */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Lamaran Terkirim!</h3>
                  <p className="text-sm text-slate-500">Terima kasih telah melamar posisi {selectedJob.title}. Tim HRD kami akan meninjau berkas Anda.</p>
                  <button onClick={() => { setSubmitted(false); setSelectedJob(null); }} className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-semibold">Tutup</button>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Formulir Lamaran</h3>
                      <p className="text-xs text-primary font-semibold">{selectedJob.title} ({selectedJob.code})</p>
                    </div>
                    <button onClick={() => setSelectedJob(null)} className="text-slate-400 hover:text-slate-600">✕</button>
                  </div>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap</label>
                      <input type="text" required placeholder="Sesuai KTP" className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:border-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                        <input type="email" required placeholder="email@domain.com" className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:border-primary" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">No. WhatsApp</label>
                        <input type="tel" required placeholder="08123456789" className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:border-primary" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Pendidikan Terakhir</label>
                      <input type="text" required placeholder="Contoh: S1 Keperawatan / D3 Farmasi" className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Pesan / Ringkasan Pengalaman</label>
                      <textarea rows={3} placeholder="Ceritakan singkat tentang kualifikasi Anda..." className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:border-primary" />
                    </div>
                    <div className="pt-2 flex justify-end gap-2">
                      <button type="button" onClick={() => setSelectedJob(null)} className="px-4 py-2 border rounded-lg text-xs font-semibold">Batal</button>
                      <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg text-xs font-semibold flex items-center gap-1.5"><Send className="w-3.5 h-3.5" /> Kirim Lamaran</button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
