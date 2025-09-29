import Image from 'next/image';
import { Check } from 'lucide-react';

export default function UnderConstruction() {
  const features = [
    "Fokus anda adalah berpikir, bukan berkutat dengan prompt",
    "Obrolkan secara natural tiap detail tanpa prompt ruwet",
    "Lalu biarkan AI memandu tiap tahap penyusunan dan mengetik hingga kelar"
  ];

  return (
    <div className="h-screen transition-colors duration-300 bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="px-4 md:px-8 py-4 relative h-full flex flex-col">
        <div className="absolute inset-0 opacity-30 hero-pattern-dark"></div>

        <div className="relative z-10 max-w-4xl mx-auto w-full flex-1 flex items-center justify-center">
          <div className="w-full">
            {/* Logo */}
            <div className="flex justify-center mb-6 animate-fade-in">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Makalah AI Logo"
                width={80}
                height={80}
                className="rounded-[3px] shadow-lg"
                priority
              />
              <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 scale-150" />
            </div>
          </div>

          {/* Content Container */}
          <div className="max-w-xs md:max-w-2xl mx-auto text-left space-y-3 md:space-y-6">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-6xl font-bold leading-tight text-foreground font-heading animate-slide-up">
              Bikin <span className="text-primary">Paper Akademik</span><br />
              <span className="text-xl md:text-4xl">Tanpa Pusing Prompting!</span>
            </h1>

            {/* Features List */}
            <div className="animate-fade-in">
              <ul className="space-y-2 text-sm md:text-base leading-relaxed text-muted-foreground text-left">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote Section */}
            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/10 to-transparent blur-xl" />
                <blockquote className="relative text-sm md:text-xl font-medium text-foreground leading-relaxed text-center">
                  <p>Anda adalah pawang, sedangkan AI hanya tukang.</p>
                  <p>Karya tulis tetap hasil buah pikir orisinal</p>
                </blockquote>
              </div>
            </div>

            {/* Status */}
            <div className="animate-fade-in">
              <div className="bg-card border border-border p-3 md:p-6 rounded-[3px]">
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <h2 className="text-base md:text-2xl font-semibold font-heading text-white">
                    Aplikasi Dalam Pembangunan
                  </h2>
                  <div className="flex gap-2">
                    <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse delay-150" />
                    <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse delay-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 animate-slide-up border-t border-border pt-4 max-w-xs md:max-w-2xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            {/* Contact */}
            <div className="text-center md:text-left">
              <p className="text-xs text-muted-foreground mb-1">Kontak</p>
              <a
                href="mailto:dukungan@makalah.ai"
                className="text-sm text-white hover:text-white/80 transition-colors font-medium"
              >
                dukungan@makalah.ai
              </a>
            </div>

            {/* Beta Link */}
            <div className="text-center md:text-right">
              <p className="text-xs text-muted-foreground mb-1">
                Kunjungi beta version
              </p>
              <a
                href="https://beta.makalah.ai/auth"
                className="text-xs text-white hover:text-white/80 transition-colors inline-flex items-center gap-1 group"
              >
                <span>https://beta.makalah.ai</span>
                <svg
                  className="w-3 h-3 transition-transform group-hover:translate-x-1"
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
          </div>
        </footer>
      </section>
    </div>
  );
}