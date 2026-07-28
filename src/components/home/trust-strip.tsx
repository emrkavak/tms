'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/ui/fade-in';

const metrics = [
  { key: 'trustYears', labelKey: 'trustYearsLabel' },
  { key: 'trustCountries', labelKey: 'trustCountriesLabel' },
  { key: 'trustUnits', labelKey: 'trustUnitsLabel' },
  { key: 'trustService', labelKey: 'trustServiceLabel' },
] as const;

export function TrustStrip() {
  const t = useTranslations('home');

  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <FadeIn key={metric.key} delay={i * 100} duration={800}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {t(metric.key)}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {t(metric.labelKey)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
