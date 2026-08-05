'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClipboardList,
  BedDouble,
  FlaskConical,
  Users,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  Clock,
  ChevronRight,
  AlertCircle,
  Info,
} from 'lucide-react';

/* ─── Types ─── */
type TabKey =
  | 'rawat-jalan'
  | 'rawat-inap'
  | 'persiapan'
  | 'kunjungan'
  | 'hak-kewajiban';

interface Tab {
  key: TabKey;
  label: string;
  icon: React.ReactNode;
}

/* ─── Tab Config ─── */
const tabs: Tab[] = [
  { key: 'rawat-jalan', label: 'Rawat Jalan', icon: <ClipboardList size={18} /> },
  { key: 'rawat-inap', label: 'Rawat Inap', icon: <BedDouble size={18} /> },
  { key: 'persiapan', label: 'Persiapan Pemeriksaan', icon: <FlaskConical size={18} /> },
  { key: 'kunjungan', label: 'Kunjungan Pasien', icon: <Users size={18} /> },
  { key: 'hak-kewajiban', label: 'Hak & Kewajiban', icon: <ShieldCheck size={18} /> },
];

/* ─── Content ─── */
const StepList = ({
  steps,
}: {
  steps: { title: string; desc: string }[];
}) => (
  <ol className="space-y-5">
    {steps.map((step, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.08, duration: 0.35 }}
        className="flex gap-4"
      >
        <div className="shrink-0 w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-sm">
          {i + 1}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm mb-0.5">
            {step.title}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
        </div>
      </motion.li>
    ))}
  </ol>
);

const CheckList = ({
  items,
  color = 'text-[var(--color-primary)]',
}: {
  items: string[];
  color?: string;
}) => (
  <ul className="space-y-2.5">
    {items.map((item, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.06, duration: 0.3 }}
        className="flex items-start gap-2.5"
      >
        <CheckCircle2 size={16} className={`${color} shrink-0 mt-0.5`} />
        <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
      </motion.li>
    ))}
  </ul>
);

const InfoNote = ({
  icon,
  children,
  variant = 'blue',
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  variant?: 'blue' | 'amber' | 'green';
}) => {
  const colors = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    amber: 'bg-amber-50 border-amber-200 text-amber-800',
    green: 'bg-green-50 border-green-200 text-green-800',
  };
  return (
    <div className={`flex gap-3 border rounded-xl p-4 ${colors[variant]}`}>
      <div className="shrink-0 mt-0.5">{icon}</div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

/* ─── Tab Content Map ─── */
function RawatJalanContent() {
  return (
    <motion.div
      key="rawat-jalan"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <ClipboardList size={20} className="text-[var(--color-primary)]" />
          Langkah Pendaftaran Rawat Jalan
        </h3>
        <StepList
          steps={[
            {
              title: 'Datang ke Loket Pendaftaran',
              desc: 'Kunjungi loket pendaftaran di lantai 1 RS Cahya Medika. Tersedia antrian online melalui WhatsApp untuk menghemat waktu Anda.',
            },
            {
              title: 'Siapkan Identitas & Dokumen',
              desc: 'Bawa KTP/KK, kartu BPJS (jika menggunakan BPJS), kartu pasien lama (jika sudah pernah berobat), dan surat rujukan (jika ada).',
            },
            {
              title: 'Pilih Poli & Dokter',
              desc: 'Petugas pendaftaran akan membantu mengarahkan ke poli yang sesuai. Konfirmasikan jadwal dokter yang ingin Anda temui.',
            },
            {
              title: 'Tunggu Panggilan di Ruang Tunggu',
              desc: 'Duduk di ruang tunggu poli yang dituju. Nama Anda akan dipanggil sesuai nomor antrian.',
            },
            {
              title: 'Pemeriksaan oleh Dokter',
              desc: 'Dokter akan melakukan anamnesis, pemeriksaan fisik, dan memberikan penanganan atau rujukan pemeriksaan penunjang bila diperlukan.',
            },
            {
              title: 'Ambil Obat di Farmasi',
              desc: 'Bawa resep dokter ke apotek RS Cahya Medika. Obat akan disiapkan dan diserahkan oleh apoteker.',
            },
          ]}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            Syarat & Dokumen
          </h3>
          <CheckList
            items={[
              'KTP / Kartu Keluarga',
              'Kartu BPJS Kesehatan (jika BPJS)',
              'Surat rujukan dari Faskes 1 (BPJS)',
              'Kartu pasien lama (jika ada)',
              'Hasil pemeriksaan sebelumnya (jika ada)',
            ]}
          />
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            Jam Operasional Klinik
          </h3>
          <div className="space-y-2">
            {[
              { day: 'Senin – Jumat', hours: '07.30 – 20.00' },
              { day: 'Sabtu', hours: '07.30 – 14.00' },
              { day: 'Minggu & Hari Libur', hours: '08.00 – 12.00' },
              { day: 'IGD', hours: '24 Jam' },
            ].map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between text-sm bg-gray-50 rounded-lg px-3 py-2"
              >
                <span className="text-gray-700">{item.day}</span>
                <span className="font-semibold text-[var(--color-primary)]">
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <InfoNote icon={<Info size={16} />} variant="blue">
        <strong>Catatan:</strong> Bagi pasien BPJS, pastikan kartu BPJS aktif
        dan membawa surat rujukan dari Faskes 1. Pasien umum dapat langsung
        mendaftar tanpa surat rujukan.
      </InfoNote>
    </motion.div>
  );
}

function RawatInapContent() {
  return (
    <motion.div
      key="rawat-inap"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BedDouble size={20} className="text-[var(--color-primary)]" />
          Prosedur Masuk Rawat Inap
        </h3>
        <StepList
          steps={[
            {
              title: 'Mendapatkan Surat Instruksi Rawat Inap',
              desc: 'Surat rawat inap dikeluarkan oleh dokter yang merawat di poli rawat jalan atau IGD setelah dinyatakan perlu rawat inap.',
            },
            {
              title: 'Ke Loket Administrasi Rawat Inap',
              desc: 'Bawa surat instruksi rawat inap dan dokumen identitas ke loket administrasi untuk proses penerimaan.',
            },
            {
              title: 'Pilih Kelas Perawatan',
              desc: 'Pilih kelas kamar sesuai preferensi dan hak tanggungan (VIP, Kelas 1, 2, atau 3). Petugas akan menginformasikan ketersediaan.',
            },
            {
              title: 'Penandatanganan Persetujuan',
              desc: 'Pasien atau keluarga menandatangani surat persetujuan rawat inap dan informed consent untuk tindakan medis.',
            },
            {
              title: 'Diantar ke Ruang Perawatan',
              desc: 'Petugas akan mengantar pasien ke ruang perawatan yang telah disiapkan dan memperkenalkan perawat yang bertugas.',
            },
          ]}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            Fasilitas Kamar
          </h3>
          <CheckList
            items={[
              'Tempat tidur pasien yang nyaman',
              'Lemari penyimpanan barang pribadi',
              'Kamar mandi dalam (VIP & Kelas 1)',
              'Televisi (VIP & Kelas 1)',
              'Sofa/kursi untuk keluarga pendamping',
              'Tombol panggil perawat',
              'Makanan pasien 3x sehari',
            ]}
          />
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            Peraturan RS
          </h3>
          <CheckList
            items={[
              'Jam kunjungan: 10.00–12.00 & 16.00–20.00',
              'Maksimal 2 penunggu pasien per kamar',
              'Dilarang merokok di seluruh area RS',
              'Jaga ketenangan dan kebersihan',
              'Tidak diperkenankan membawa anak < 12 tahun berkunjung',
              'Patuhi arahan perawat dan dokter',
            ]}
          />
        </div>
      </div>

      <InfoNote icon={<AlertCircle size={16} />} variant="amber">
        <strong>Penting:</strong> Barang berharga seperti perhiasan, uang
        tunai dalam jumlah besar, dan dokumen penting sebaiknya tidak dibawa
        atau dititipkan kepada keluarga. RS tidak bertanggung jawab atas
        kehilangan barang bawaan.
      </InfoNote>
    </motion.div>
  );
}

function PersiapanContent() {
  const persiapan = [
    {
      title: 'Pemeriksaan Laboratorium (Darah & Urin)',
      tips: [
        'Puasa 8–12 jam sebelum pengambilan darah untuk pemeriksaan gula darah puasa, lipid, dan fungsi hati',
        'Tetap minum air putih selama puasa (tidak memengaruhi hasil)',
        'Hindari olahraga berat 24 jam sebelum pemeriksaan',
        'Tampung urin pagi pertama untuk pemeriksaan urinalisis',
        'Informasikan obat-obatan yang sedang dikonsumsi kepada petugas',
      ],
    },
    {
      title: 'Pemeriksaan USG Perut',
      tips: [
        'Puasa minimal 6 jam sebelum USG abdomen',
        'Untuk USG kandung kemih dan ginekologi: minum 4–6 gelas air sebelum pemeriksaan',
        'Kenakan pakaian yang mudah dibuka/dilonggarkan di bagian perut',
        'Bawa hasil pemeriksaan sebelumnya jika ada',
      ],
    },
    {
      title: 'Persiapan Tindakan Operasi',
      tips: [
        'Puasa 6–8 jam sebelum tindakan operasi (sesuai instruksi dokter)',
        'Hentikan obat pengencer darah sesuai petunjuk dokter',
        'Mandi dan cuci rambut malam sebelum operasi',
        'Lepaskan perhiasan, cat kuku, dan lensa kontak',
        'Pastikan ada keluarga yang mendampingi',
        'Bawa surat persetujuan tindakan yang telah diisi',
      ],
    },
    {
      title: 'Pemeriksaan Radiologi (Rontgen, CT Scan)',
      tips: [
        'Lepaskan perhiasan logam dan benda metal di area yang akan diperiksa',
        'Informasikan jika sedang hamil atau menyusui',
        'Untuk CT Scan dengan kontras: puasa 4 jam sebelumnya',
        'Bawa hasil rontgen/CT scan sebelumnya jika ada',
      ],
    },
  ];

  return (
    <motion.div
      key="persiapan"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
          <FlaskConical size={20} className="text-[var(--color-primary)]" />
          Panduan Persiapan Pemeriksaan
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Persiapan yang tepat memastikan hasil pemeriksaan akurat. Ikuti panduan
          berikut sesuai jenis pemeriksaan Anda.
        </p>
      </div>

      <div className="space-y-5">
        {persiapan.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.35 }}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="bg-[var(--color-primary)] px-5 py-3">
              <h4 className="text-white font-semibold text-sm">{item.title}</h4>
            </div>
            <div className="p-5">
              <CheckList items={item.tips} />
            </div>
          </motion.div>
        ))}
      </div>

      <InfoNote icon={<Info size={16} />} variant="green">
        <strong>Tips:</strong> Hubungi petugas RS Cahya Medika jika Anda memiliki
        kondisi khusus atau alergi obat. Kami siap membantu memberikan panduan
        persiapan yang sesuai dengan kondisi Anda.
      </InfoNote>
    </motion.div>
  );
}

function KunjunganContent() {
  return (
    <motion.div
      key="kunjungan"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Users size={20} className="text-[var(--color-primary)]" />
          Jam Kunjungan Pasien
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { session: 'Sesi Pagi', hours: '10.00 – 12.00', icon: '🌤️' },
            { session: 'Sesi Sore', hours: '16.00 – 20.00', icon: '🌆' },
          ].map((s) => (
            <motion.div
              key={s.session}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-[var(--color-primary)] text-white rounded-xl p-5 text-center"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-semibold text-white/80 text-sm mb-1">
                {s.session}
              </div>
              <div className="text-2xl font-bold">{s.hours}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            Peraturan Kunjungan
          </h3>
          <CheckList
            items={[
              'Lapor kepada perawat sebelum memasuki ruang perawatan',
              'Maksimal 2 pengunjung per pasien dalam satu waktu',
              'Anak di bawah 12 tahun tidak diperkenankan masuk',
              'Gunakan masker di seluruh area RS',
              'Tidak membawa makanan/minuman dari luar (kecuali seizin dokter)',
              'Matikan nada dering atau gunakan mode senyap',
              'Jaga ketenangan dan tidak berisik',
            ]}
          />
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            Area Bebas Pengunjung
          </h3>
          <div className="space-y-2">
            {[
              { area: 'Ruang ICU / ICCU', reason: 'Hanya keluarga inti, 1 orang' },
              { area: 'Ruang Operasi', reason: 'Steril – tidak boleh masuk' },
              { area: 'Ruang Bersalin', reason: 'Hanya pendamping persalinan' },
              { area: 'Ruang Isolasi', reason: 'Terbatas – hubungi perawat' },
            ].map((item) => (
              <div
                key={item.area}
                className="bg-red-50 border border-red-100 rounded-lg px-3 py-2.5"
              >
                <div className="text-sm font-semibold text-red-800">
                  {item.area}
                </div>
                <div className="text-xs text-red-600">{item.reason}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <InfoNote icon={<AlertCircle size={16} />} variant="amber">
        <strong>Perhatian:</strong> Selama jam kunjungan, pengunjung diwajibkan
        mengenakan tanda pengenal pengunjung yang disediakan di lobi utama.
        Kunjungan di luar jam yang ditentukan hanya dapat dilakukan atas
        persetujuan kepala ruangan.
      </InfoNote>
    </motion.div>
  );
}

function HakKewajibanContent() {
  const hakPasien = [
    'Mendapatkan informasi yang jelas tentang diagnosis dan rencana pengobatan',
    'Menolak tindakan medis setelah mendapat penjelasan yang lengkap',
    'Mendapatkan pelayanan yang manusiawi, adil, dan jujur',
    'Mendapatkan perlindungan terhadap data dan kerahasiaan medis',
    'Mengajukan keluhan dan mendapatkan respons yang memadai',
    'Didampingi keluarga dalam kondisi kritis',
    'Mendapatkan penjelasan tentang biaya pengobatan',
    'Meminta pendapat dokter lain (second opinion)',
    'Mendapatkan catatan medis sesuai peraturan yang berlaku',
    'Diperlakukan sama tanpa diskriminasi',
  ];

  const kewajibanPasien = [
    'Memberikan informasi yang benar dan lengkap tentang kondisi kesehatan',
    'Mematuhi petunjuk dan nasihat dokter serta petugas medis',
    'Memberikan imbalan jasa atas pelayanan yang diterima',
    'Menghormati hak-hak pasien lain, pengunjung, dan petugas RS',
    'Mematuhi semua peraturan dan tata tertib RS Cahya Medika',
    'Memberikan persetujuan atau penolakan tindakan medis secara tertulis',
    'Ikut menjaga kebersihan dan ketertiban lingkungan RS',
    'Tidak menuntut di luar kemampuan medis yang wajar',
  ];

  return (
    <motion.div
      key="hak-kewajiban"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
          <ShieldCheck size={20} className="text-[var(--color-primary)]" />
          Hak &amp; Kewajiban Pasien
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Sesuai dengan Undang-Undang No. 44 Tahun 2009 tentang Rumah Sakit dan
          Permenkes terkait hak dan kewajiban pasien.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-blue-50 border border-blue-200 rounded-xl p-5"
        >
          <h4 className="font-bold text-[var(--color-primary)] mb-4 text-base flex items-center gap-2">
            <ShieldCheck size={18} />
            Hak Pasien
          </h4>
          <CheckList
            items={hakPasien}
            color="text-[var(--color-primary)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-green-50 border border-green-200 rounded-xl p-5"
        >
          <h4 className="font-bold text-[var(--color-secondary)] mb-4 text-base flex items-center gap-2">
            <ClipboardList size={18} />
            Kewajiban Pasien
          </h4>
          <CheckList items={kewajibanPasien} color="text-[var(--color-secondary)]" />
        </motion.div>
      </div>

      <InfoNote icon={<Info size={16} />} variant="blue">
        Jika Anda merasa hak Anda sebagai pasien tidak terpenuhi, silakan
        sampaikan kepada{' '}
        <strong>Tim Hubungan Pasien RS Cahya Medika</strong> di ext. 101 atau
        langsung ke bagian administrasi.
      </InfoNote>
    </motion.div>
  );
}

const tabContentMap: Record<TabKey, React.ReactNode> = {
  'rawat-jalan': <RawatJalanContent />,
  'rawat-inap': <RawatInapContent />,
  persiapan: <PersiapanContent />,
  kunjungan: <KunjunganContent />,
  'hak-kewajiban': <HakKewajibanContent />,
};

/* ─── Main Page ─── */
export default function InformasiPasienPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('rawat-jalan');

  const waLink = `https://wa.me/6282139386666?text=${encodeURIComponent(
    'Halo, saya membutuhkan informasi terkait layanan RS Cahya Medika.'
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
              <ClipboardList size={16} />
              <span className="text-sm font-medium">Panduan Pasien</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Informasi Pasien
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg">
              Semua yang perlu Anda ketahui sebelum, selama, dan setelah kunjungan
              ke RS Cahya Medika
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Tab Navigation ── */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all shrink-0 ${
                  activeTab === tab.key
                    ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                    : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">
                  {tab.label.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tab Content ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <AnimatePresence mode="wait">
          {tabContentMap[activeTab]}
        </AnimatePresence>
      </section>

      {/* ── Contact Info Card ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-[var(--color-primary)] rounded-2xl p-6 sm:p-8 text-white"
        >
          <h3 className="text-xl font-bold mb-2">Butuh Bantuan Lebih Lanjut?</h3>
          <p className="text-white/80 text-sm mb-6">
            Tim kami siap membantu Anda 24 jam. Hubungi kami melalui:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {/* IGD */}
            <a
              href="tel:+62332410000"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-5 py-4"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-white/70 mb-0.5">Telepon IGD</div>
                <div className="font-bold text-white text-sm">
                  (0332) 410-000
                </div>
                <div className="flex items-center gap-1 text-xs text-white/60 mt-0.5">
                  <Clock size={11} />
                  <span>Buka 24 Jam</span>
                </div>
              </div>
              <ChevronRight size={16} className="ml-auto text-white/50" />
            </a>

            {/* WhatsApp */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-5 py-4"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <MessageSquare size={20} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-white/70 mb-0.5">WhatsApp</div>
                <div className="font-bold text-white text-sm">
                  0821-3938-6666
                </div>
                <div className="flex items-center gap-1 text-xs text-white/60 mt-0.5">
                  <Clock size={11} />
                  <span>Respons Cepat</span>
                </div>
              </div>
              <ChevronRight size={16} className="ml-auto text-white/50" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
