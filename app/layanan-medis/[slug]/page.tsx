import Link from "next/link";
import { ChevronRight, ArrowLeft, MessageCircle, Info } from "lucide-react";

export default function LayananDetail({ params }: { params: { slug: string } }) {
  // Format slug to title (e.g. klinik-umum -> Klinik Umum)
  const title = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <section className="bg-primary pt-12 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-200 text-sm mb-3 flex items-center justify-center gap-1">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/layanan-medis" className="hover:text-white transition-colors">Layanan Medis</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{title}</span>
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 -mt-10 mb-20">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Info className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Halaman Sedang Dalam Pembaruan</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Mohon maaf, halaman detail untuk layanan <strong>{title}</strong> saat ini sedang dalam proses penyusunan konten agar dapat menyajikan informasi yang lebih akurat untuk Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/layanan-medis"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center"
              >
                <ArrowLeft className="w-4 h-4" /> Kembali
              </Link>
              <a
                href="https://wa.me/6285257103300"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 transition-colors w-full sm:w-auto justify-center shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Tanya via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
