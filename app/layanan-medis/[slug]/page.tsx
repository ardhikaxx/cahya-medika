import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle2, Phone, MessageCircle, Clock, ShieldCheck, Activity } from "lucide-react";

export default async function LayananDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || "";
  
  // Format slug to title (e.g. klinik-umum -> Klinik Umum)
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="relative pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-[#0c4a6e]">
          <Image
            src="/images/hero.jpg"
            alt={title}
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e] to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 z-10 text-center">
          <p className="text-blue-200 text-sm mb-4 flex items-center justify-center gap-1.5 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-70" />
            <Link href="/layanan-medis" className="hover:text-white transition-colors">Layanan Medis</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-70" />
            <span className="text-white">{title}</span>
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Layanan {title.toLowerCase()} unggulan dengan dukungan teknologi modern dan tenaga medis profesional untuk memberikan perawatan terbaik bagi Anda.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Content (Main Details) */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-5">Tentang Layanan {title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  RS Cahya Medika menghadirkan fasilitas <strong>{title}</strong> yang dirancang secara komprehensif untuk memberikan solusi medis yang akurat dan terpercaya. Kami memahami bahwa setiap pasien membutuhkan penanganan yang spesifik, sehingga kami mengintegrasikan teknologi medis mutakhir dengan keahlian tim dokter spesialis kami.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Dengan standar pelayanan rumah sakit berkelas, prosedur sterilisasi yang ketat, serta pengawasan medis yang berkelanjutan, layanan ini menjamin keselamatan, kenyamanan, dan proses pemulihan yang optimal bagi setiap pasien.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Keunggulan & Fasilitas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Peralatan Medis Berteknologi Tinggi",
                    "Ditangani oleh Tim Dokter Sub-Spesialis",
                    "Lingkungan Perawatan yang Nyaman & Steril",
                    "Sistem Rekam Medis Terintegrasi",
                    "Pelayanan Ramah & Responsif 24/7",
                    "Pendampingan Edukasi bagi Keluarga Pasien"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Info Card */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-5 border-b border-slate-100 pb-4">Informasi Layanan</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">Jam Operasional</p>
                      <p className="text-sm font-bold text-slate-700">Tersedia Setiap Hari</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">Asuransi</p>
                      <p className="text-sm font-bold text-slate-700">Menerima BPJS & Swasta</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Action Card */}
              <div className="bg-[#0c4a6e] rounded-2xl p-6 text-white text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Butuh Bantuan Cepat?</h3>
                <p className="text-blue-100 text-sm mb-6">Konsultasikan kebutuhan Anda bersama tim Customer Service kami.</p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/6285257103300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp Kami
                  </a>
                  <a
                    href="tel:03325557554"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors"
                  >
                    <Phone className="w-5 h-5" /> (0332) 5557554
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
