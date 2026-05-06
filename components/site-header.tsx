"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Resources" },
    { href: "/about", label: "Investors" },
  ];

  const LogoMark = ({ compact = false }: { compact?: boolean }) => (
    <div className="flex items-center gap-2">
      <Image
        src="/images/logo.png"
        alt="SkillKwiz Logo"
        width={compact ? 62 : 76}
        height={compact ? 42 : 52}
        className="h-auto w-auto object-contain"
        priority
      />
      <div className="leading-none">
        <div
          className="text-[32px] font-bold text-[#69226F]"
          style={{ fontFamily: '"Aardvark Cafe", Georgia, serif' }}
        >
          SkillKwiz
        </div>
        <div
          className="mt-1 text-[13px] text-black"
          style={{ fontFamily: '"GardensC", Arial, sans-serif' }}
        >
          How much do you know?
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed left-0 top-0 z-50 w-full">
      <nav className="flex w-full flex-col bg-white/95 text-[#272727] shadow-sm backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="relative z-30 md:hidden">
            <LogoMark compact />
          </Link>

          <button
            className="relative z-30 text-[#00418d] focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <div className="hidden flex-1 items-center justify-between md:flex">
            <Link href="/" className="shrink-0">
              <LogoMark />
            </Link>
            <div className="flex items-center gap-7">
              {navItems.map((item) => (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  className={`relative group py-4 text-sm transition-all lg:text-base ${
                    pathname === item.href
                      ? "text-[#f73c5c] font-semibold"
                      : "text-[#272727]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="absolute bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#ff9d00] transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 top-0 flex w-full flex-col items-center bg-white pb-5 pt-24 shadow-lg transition-all duration-300 ease-in-out md:hidden">
            {navItems.map((item) => (
              <Link
                key={`${item.href}-${item.label}-mobile`}
                href={item.href}
                className="relative group w-full py-3 text-center text-lg text-[#272727]"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 w-1/2 origin-left scale-x-0 transform bg-[#ff9d00] transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
