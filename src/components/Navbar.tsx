"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'sejarah', label: 'SEJARAH' },
  { id: 'destinasi', label: 'DESTINASI' },
  { id: 'paketwisata', label: 'TRIP' },
  { id: 'testimoni', label: 'TESTIMONI' },
  { id: 'faq', label: 'FAQ' } 
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 150; 
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80; 
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/5 backdrop-blur-lg border-b border-white/10' // Transparan Blur saat discroll
          : 'bg-transparent' // Benar-benar transparan saat di atas
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* LOGO ORAHA */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image 
            src="/Home/logo.png" 
            alt="Oraha Logo" 
            width={70} 
            height={70} 
            className="w-18 h-18 object-contain"
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-bold text-sm items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`relative transition-colors duration-300 py-2 group inline-block ${
                activeSection === item.id ? 'text-emerald-400' : 'text-white hover:text-emerald-300'
              }`}
            >
              {item.label}
              <span 
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-emerald-500 rounded-full transition-transform duration-300 origin-left ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-emerald-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - Transparan */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 font-bold text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`transition-colors duration-300 ${
                activeSection === item.id ? 'text-emerald-400 border-l-2 border-emerald-500 pl-2' : 'text-white hover:text-emerald-300 pl-2'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}