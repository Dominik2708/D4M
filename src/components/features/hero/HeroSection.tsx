'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { BASE_PATH } from '@/lib/constants';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center px-4 overflow-hidden">
      {/* Background image – blurred & darkened */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{
          backgroundImage: `url('${BASE_PATH}/images/hero.jpeg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center transform -translate-y-6 md:-translate-y-8 lg:-translate-y-5">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              {t('hero.title')}
            </span>
          </h1>

          <p className="text-lg md:text-2xl lg:text-3xl text-white mb-8 font-semibold">
            {t('hero.subtitle')}
          </p>

          {/* Legal Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 text-left">
            <h2 className="font-semibold text-gray-900 mb-2">{t('hero.legalTitle')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('hero.legalText')}</p>
          </div>

          <p className="text-base md:text-xl lg:text-lg text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed text-left">
            {t('hero.description')}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="gap-2 text-lg px-8 py-3">
              <a href="#produkte">
                {t('hero.productsButton')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 text-lg px-8 py-3">
              <a href="#quiz" aria-label={t('hero.quizAriaLabel')}>
                <Play className="w-5 h-5" />
                {t('hero.quizButton')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
