'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import { FadeIn } from '@/components/ui/fade-in';
import { Calculator, MessageCircle } from 'lucide-react';

export function PowerRequirement() {
  const t = useTranslations('home');

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              {t('powerRequirement')}
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {t('powerRequirementDesc')}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tools/sizing"
                className="inline-flex items-center gap-3 bg-accent text-white rounded-lg px-8 py-4 font-medium hover:bg-accent-hover transition-colors"
              >
                <Calculator className="h-5 w-5" />
                {t('calculateNow')}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-transparent text-white border border-white/30 rounded-lg px-8 py-4 font-medium hover:border-white/60 hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                {t('talkToEngineer')}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
