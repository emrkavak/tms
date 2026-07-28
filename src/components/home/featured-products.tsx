'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import { SectionHeader } from '@/components/ui/section-header';
import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight } from 'lucide-react';
import { DieselGenerator } from '@/components/illustrations/diesel-generator';
import { SoundproofGenerator } from '@/components/illustrations/soundproof-generator';
import { PortableGenerator } from '@/components/illustrations/portable-generator';

const featuredProducts = [
  { name: 'TMG-D 500', power: '500 kVA', engine: 'Cummins', type: 'Diesel', illustration: DieselGenerator },
  { name: 'TMG-D 250', power: '250 kVA', engine: 'Perkins', type: 'Diesel', illustration: DieselGenerator },
  { name: 'TMG-S 200', power: '200 kVA', engine: 'John Deere', type: 'Soundproof', illustration: SoundproofGenerator },
];

export function FeaturedProducts() {
  const t = useTranslations('home');
  const ct = useTranslations('common');

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader title={t('featuredProducts')} />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product, i) => (
            <FadeIn key={product.name} delay={i * 150} duration={800}>
              <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                  <product.illustration className="w-full h-full object-contain p-4 scale-110 group-hover:scale-125 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span>{product.power}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{product.engine}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{product.type}</span>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/products/diesel-generators/tmg-d-500"
                      className="text-sm font-medium text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
                    >
                      {ct('viewDetails')} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/quote"
                      className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                    >
                      {ct('requestQuote')}
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
