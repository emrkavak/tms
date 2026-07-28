'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import { AnimatedHeading } from '@/components/ui/animated-heading';
import { FadeIn } from '@/components/ui/fade-in';
import { AppHeader } from '@/components/layout/app-header';

interface HeroVideoProps {
  locale: string;
}

export function HeroVideo({ locale }: HeroVideoProps) {
  const t = useTranslations('hero');
  const [videoError, setVideoError] = useState(false);
  const isRtl = locale === 'ar';

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
           poster="/images/hero-poster.svg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-gray-900" />
      )}

      <AppHeader locale={locale} />

      <div className="absolute inset-0 flex items-end pb-16 md:pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <AnimatedHeading
                text={t('title')}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.05] tracking-tight"
                initialDelay={200}
                characterDelay={30}
                duration={500}
              />

              <FadeIn delay={800} duration={1000} className="mt-6">
                <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                  {t('subtitle')}
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000} className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 bg-accent text-white hover:bg-accent-hover px-8 py-4 text-lg cursor-pointer"
                >
                  {t('ctaPrimary')}
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/10 px-8 py-4 text-lg cursor-pointer"
                >
                  {t('ctaSecondary')}
                </Link>
              </FadeIn>
            </div>

            <div className="hidden lg:block" />
          </div>

          <FadeIn delay={1400} duration={1000} className="mt-12">
            <p className="text-sm text-gray-400 tracking-widest uppercase">
              {t('tag')}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
