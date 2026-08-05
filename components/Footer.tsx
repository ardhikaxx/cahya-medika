import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { Cross } from "lucide-react";

const footerLinks = {
  layanan: [
    { name: "IGD 24 Jam", href: "/layanan-medis#igd" },
    { name: "Klinik Umum", href: "/layanan-medis" },
    { name: "Klinik Spesialis", href: "/layanan-medis#spesialis" },
    { name: "Program Hamil Terpadu", href: "/program-hamil" },
    { name: "Ruang Operasi", href: "/layanan-medis#operasi" },
    { name: "Laboratorium", href: "/layanan-medis#lab" },
    { name: "Medical Check Up", href: "/layanan-medis#mcu" },
  ],
  pasien: [
    { name: "Jadwal Dokter", href: "/dokter-spesialis" },
    { name: "Daftar Online", href: "/dokter-spesialis" },
    { name: "Panduan Pasien Baru", href: "/informasi-pasien" },
    { name: "Asuransi & Pembayaran", href: "/asuransi-pembayaran" },
    { name: "Rawat Inap", href: "/informasi-pasien#rawat-inap" },
    { name: "FAQ", href: "/faq" },
  ],
  rs: [
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Fasilitas Rumah Sakit", href: "/fasilitas" },
    { name: "Dokter & Spesialis", href: "/dokter-spesialis" },
    { name: "Berita & Artikel", href: "/artikel-kesehatan" },
    { name: "Galeri", href: "/galeri" },
    { name: "Karier", href: "/karier" },
    { name: "Hubungi Kami", href: "/kontak" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Main Footer */}
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <Cross className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-xl text-primary tracking-tight">Cahya Medika</span>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold mt-0.5">Rumah Sakit · Bondowoso</span>
              </div>
            </Link>
            
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Rumah Sakit Cahya Medika memberikan pelayanan kesehatan modern dengan standar pelayanan terbaik. 
              Melayani dengan sepenuh hati untuk kesehatan keluarga Anda.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-slate-500">
                  Jl. Raya Pakisan No.24, Lumbung II, Bataan,<br />
                  Kec. Tenggarang, Kabupaten Bondowoso,<br />
                  Jawa Timur 68281
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <p className="text-sm text-slate-500">IGD: (0332) 5557554</p>
                  <p className="text-sm text-slate-500">WA: 0852-5710-3300</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <p className="text-sm text-slate-500">IGD & Rawat Inap: 24 Jam / 7 Hari</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/rscahyamedika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all"
                aria-label="Instagram RS Cahya Medika"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all"
                aria-label="Facebook RS Cahya Medika"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://wa.me/6285257103300"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center text-green-600 hover:bg-green-100 transition-all"
                aria-label="WhatsApp RS Cahya Medika"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Layanan Column */}
          <div>
            <h3 className="font-bold text-base text-slate-800 mb-5">Layanan Medis</h3>
            <ul className="space-y-2.5">
              {footerLinks.layanan.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pasien Column */}
          <div>
            <h3 className="font-bold text-base text-slate-800 mb-5">Informasi Pasien</h3>
            <ul className="space-y-2.5">
              {footerLinks.pasien.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RS Column */}
          <div>
            <h3 className="font-bold text-base text-slate-800 mb-5">Rumah Sakit</h3>
            <ul className="space-y-2.5">
              {footerLinks.rs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-primary">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
              <span className="font-bold text-sm">IGD 24 Jam Siaga — Kami siap membantu keadaan darurat Anda</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:03325557554"
                className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (0332) 5557554
              </a>
              <a
                href="https://wa.me/6285257103300"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2 bg-green-500 text-white rounded-lg text-sm font-bold hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <p>© {currentYear} Rumah Sakit Cahya Medika Bondowoso. Hak Cipta Dilindungi.</p>
            <div className="flex items-center gap-4">
              <Link href="/kebijakan-privasi" className="hover:text-slate-600 transition-colors">Kebijakan Privasi</Link>
              <span>·</span>
              <Link href="/syarat-layanan" className="hover:text-slate-600 transition-colors">Syarat & Ketentuan</Link>
              <span>·</span>
              <Link href="/sitemap.xml" className="hover:text-slate-600 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
