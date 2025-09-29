'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function UnderConstruction() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    "Fokus anda adalah berpikir, bukan berkutat dengan prompt",
    "Obrolkan secara natural tiap detail kebutuhan tanpa prompt ruwet",
    "Lalu biarkan AI memandu tiap tahap penyusunan dan mengetik hingga kelar"
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 opacity-50" />

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        {/* Logo */}
        <div className={`flex justify-center mb-12 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Makalah AI Logo"
              width={120}
              height={120}
              className="rounded-[3px] shadow-lg"
              priority
            />
            <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 scale-150" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-4xl md:text-6xl font-heading font-bold text-center mb-12 transition-all duration-500 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          Bikin Paper Akademik
        </h1>

        {/* Features List */}
        <div className={`bg-card/50 backdrop-blur rounded-lg p-6 md:p-8 mb-10 transition-all duration-500 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                </div>
                <span className="text-base md:text-lg leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quote Section */}
        <div className={`text-center mb-12 transition-all duration-500 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative inline-block">
            <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/10 to-transparent blur-xl" />
            <blockquote className="relative text-lg md:text-xl italic text-muted-foreground leading-relaxed">
              <p className="mb-2">Anda adalah pawang,</p>
              <p className="mb-2">sedangkan AI hanya tukang</p>
              <p className="mb-2">karya tulis tetap</p>
              <p>hasil buah pikir orisinal</p>
            </blockquote>
          </div>
        </div>

        {/* Status */}
        <div className={`text-center mb-16 transition-all duration-500 delay-400 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary">
            Aplikasi Dalam Pembangunan
          </h2>
          <div className="mt-4 flex justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse delay-150" />
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse delay-300" />
          </div>
        </div>

        {/* Footer */}
        <footer className={`text-center space-y-6 transition-all duration-500 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Contact */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Kontak</p>
            <a
              href="mailto:dukungan@makalah.ai"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              dukungan@makalah.ai
            </a>
          </div>

          {/* Beta Link */}
          <div className="pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-2">
              Kunjungi beta version
            </p>
            <a
              href="https://beta.makalah.ai/auth"
              className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 group"
            >
              <span>https://beta.makalah.ai</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}