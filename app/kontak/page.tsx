"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, CheckCircle2 } from "lucide-react";

export default function Kontak() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
          <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 text-primary-light text-xs font-bold uppercase tracking-widest mb-4">
            Kontak & Lokasi
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hubungi Kami</h1>
          <p className="text-primary-light text-lg max-w-2xl mx-auto">
            Kami siap melayani kebutuhan informasi dan pendaftaran kesehatan Anda. Hubungi kami melalui telepon, WhatsApp, atau kunjungi alamat kami.
          </p>
        </div>
      </section>

      {/* Direct Cards */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-600 text-white p-6 rounded-2xl shadow-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-red-200">IGD Darurat 24 Jam</p>
                <a href="tel:03325557554" className="text-2xl font-extrabold hover:underline">(0332) 5557554</a>
              </div>
            </div>

            <div className="bg-green-600 text-white p-6 rounded-2xl shadow-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-green-200">WhatsApp Pendaftaran</p>
                <a href="https://wa.me/6285257103300" target="_blank" className="text-xl font-extrabold hover:underline">0852-5710-3300</a>
              </div>
            </div>

            <div className="bg-primary text-white p-6 rounded-2xl shadow-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-primary-light">Instagram Resmi</p>
                <a href="https://instagram.com/rscahyamedika" target="_blank" className="text-xl font-extrabold hover:underline">@rscahyamedika</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Informasi Rumah Sakit</h2>
                <div className="space-y-4 text-slate-600 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800">Alamat Lengkap</p>
                      <p>Jl. Raya Pakisan No.24, Lumbung II, Bataan, Kec. Tenggarang, Kabupaten Bondowoso, Jawa Timur 68281</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800">Jam Operasional</p>
                      <p>IGD & Rawat Inap: 24 Jam / 7 Hari</p>
                      <p>Klinik Spesialis: Senin – Sabtu (08:00 – 20:00 WIB)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embed Google Maps */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-72 relative">
                <iframe
                  title="Peta Lokasi RS Cahya Medika Bondowoso"
                  src="https://maps.google.com/maps?q=Jl.+Raya+Pakisan+No.24+Bondowoso&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Kirim Pesan</h2>
              <p className="text-xs text-slate-500 mb-6">Sampaikan pertanyaan, masukan, atau kritik dan saran kepada tim kami.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                  <h3 className="font-bold text-lg">Pesan Terkirim!</h3>
                  <p className="text-xs text-green-700">Terima kasih telah menghubungi RS Cahya Medika. Tim kami akan segera menanggapi pesan Anda.</p>
                  <button onClick={() => setSubmitted(false)} className="px-4 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg">Kirim Pesan Lain</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap</label>
                    <input type="text" required placeholder="Masukkan nama Anda" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-primary" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                      <input type="email" required placeholder="email@domain.com" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">No. WhatsApp</label>
                      <input type="tel" required placeholder="08123456789" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Subjek</label>
                    <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-primary">
                      <option>Informasi General</option>
                      <option>Jadwal Dokter</option>
                      <option>Informasi Asuransi</option>
                      <option>Kritik & Saran</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Pesan Anda</label>
                    <textarea rows={4} required placeholder="Tuliskan pesan Anda..." className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-primary" />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Kirim Pesan
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
