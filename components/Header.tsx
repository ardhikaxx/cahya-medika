"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ChevronDown, Cross } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang-kami" },
  { 
    name: "Layanan", 
    href: "/layanan-medis",
    children: [
      { name: "Semua Layanan", href: "/layanan-medis" },
      { name: "IGD 24 Jam", href: "/layanan-medis#igd" },
      { name: "Klinik Spesialis", href: "/layanan-medis#spesialis" },
      { name: "Program Hamil", href: "/program-hamil" },
      { name: "Ruang Operasi", href: "/layanan-medis#operasi" },
    ]
  },
  { name: "Jadwal Dokter", href: "/dokter-spesialis" },
  { 
    name: "Fasilitas & Info", 
    href: "/informasi-pasien",
    children: [
      { name: "Fasilitas RS", href: "/fasilitas" },
      { name: "Informasi Pasien", href: "/informasi-pasien" },
      { name: "Asuransi & Pembayaran", href: "/asuransi-pembayaran" },
      { name: "Artikel Kesehatan", href: "/artikel-kesehatan" },
      { name: "Galeri", href: "/galeri" },
      { name: "FAQ", href: "/faq" },
    ]
  },
  { name: "Kontak", href: "/kontak" },
];

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

function DropdownMenu({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  
  const isActive = pathname === item.href || 
    (item.children && item.children.some(c => pathname === c.href));

  return (
    <div 
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1.5 px-3 py-2 text-[14px] font-semibold transition-colors rounded-lg",
          isActive ? "text-primary bg-primary/5" : "text-slate-700 hover:text-primary hover:bg-slate-50"
        )}
      >
        {item.name}
        {item.children && (
          <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", open && "rotate-180")} />
        )}
      </Link>

      {item.children && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50"
            >
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    "block px-4 py-2.5 text-sm font-medium transition-colors",
                    pathname === child.href 
                      ? "text-primary bg-primary/5" 
                      : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  )}
                >
                  {child.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6 text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-medium">IGD 24 Jam Siaga</span>
              </span>
              <span className="text-slate-300">|</span>
              <a href="tel:03325557554" className="font-medium hover:text-primary transition-colors">
                (0332) 5557554
              </a>
              <span className="text-slate-300">|</span>
              <span className="font-medium">Jl. Raya Pakisan No.24, Bondowoso</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/rscahyamedika" 
                target="_blank"
                className="text-slate-500 hover:text-primary transition-colors font-medium flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @rscahyamedika
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 w-full z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white/98 backdrop-blur-sm shadow-sm border-b border-slate-100" 
            : "bg-white border-b border-slate-100"
        )}
      >
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image src="/logo.png" alt="Cahya Medika Logo" width={36} height={36} className="w-10 h-auto object-contain" />
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-[17px] text-primary tracking-tight">Cahya Medika</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-semibold mt-0.5">Rumah Sakit · Bondowoso</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-2">
              {navItems.map((item) => (
                item.children ? (
                  <DropdownMenu key={item.name} item={item} pathname={pathname} />
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-[14px] font-semibold transition-colors rounded-lg",
                      pathname === item.href 
                        ? "text-primary bg-primary/5" 
                        : "text-slate-700 hover:text-primary hover:bg-slate-50"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <a
                href="tel:03325557554"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-primary bg-primary/8 hover:bg-primary/12 transition-colors border border-primary/20"
              >
                <Phone className="w-4 h-4" />
                IGD 24 Jam
              </a>
              <Link
                href="/dokter-spesialis"
                className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-colors shadow-sm"
              >
                Daftar Online
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden overflow-hidden border-t border-slate-100 bg-white"
            >
              <nav className="container mx-auto max-w-7xl px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          "flex-grow py-2.5 px-3 rounded-lg text-base font-semibold transition-colors",
                          pathname === item.href 
                            ? "text-primary bg-primary/5" 
                            : "text-slate-700"
                        )}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                          className="p-2 text-slate-400"
                        >
                          <ChevronDown className={cn("w-4 h-4 transition-transform", expandedItem === item.name && "rotate-180")} />
                        </button>
                      )}
                    </div>
                    {item.children && expandedItem === item.name && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm font-medium text-slate-600 hover:text-primary"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-slate-100 mt-4 flex flex-col gap-2">
                  <Link
                    href="/dokter-spesialis"
                    className="flex items-center justify-center py-3 rounded-lg font-semibold text-white bg-primary"
                  >
                    Daftar Online
                  </Link>
                  <a
                    href="tel:03325557554"
                    className="flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-white bg-red-600"
                  >
                    <Phone className="w-4 h-4" />
                    IGD: (0332) 5557554
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
