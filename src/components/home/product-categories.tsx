'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import { SectionHeader } from '@/components/ui/section-header';
import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight } from 'lucide-react';
import { DieselGenerator } from '@/components/illustrations/diesel-generator';
import { PortableGenerator } from '@/components/illustrations/portable-generator';
import { SoundproofGenerator } from '@/components/illustrations/soundproof-generator';

const categories = [
  {
    key: 'dieselGenerators',
    href: '/products/diesel-generators',
    illustration: DieselGenerator,
    range: '10 - 2500 kVA',
  },
  {
    key: 'portableGenerators',
    href: '/products/portable-generators',
    illustration: PortableGenerator,
    range: '1 - 15 kVA',
  },
  {
    key: 'soundproofGenerators',
    href: '/products/soundproof-generators',
    illustration: SoundproofGenerator,
    range: '20 - 2000 kVA',
  },
];

export function ProductCategories() {
  const t = useTranslations('home');
  const ct = useTranslations('common');

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader
          title={t('productCategories')}
          description={t('productCategoriesDesc')}
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <FadeIn key={cat.key} delay={i * 150} duration={800}>
              <Link
                href={cat.href}
                className="group block bg-white rounded-2xl p-6 border border-gray-200 hover:border-accent/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-5 overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center h-44">
                  <cat.illustration className="w-full h-full object-contain p-2 scale-110 group-hover:scale-125 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{t(cat.key)}</h3>
                <p className="text-sm text-muted-foreground mb-4">{cat.range}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  {ct('viewDetails')} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
