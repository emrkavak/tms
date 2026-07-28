'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import { SectionHeader } from '@/components/ui/section-header';
import { FadeIn } from '@/components/ui/fade-in';
import { Building2, Construction, Hospital, Hotel, Database, TowerControl, Wheat, Store } from 'lucide-react';

const sectors = [
  { icon: Building2, key: 'Industrial Facilities', href: '/solutions/industrial-facilities' },
  { icon: Construction, key: 'Construction', href: '/solutions/construction' },
  { icon: Hospital, key: 'Healthcare', href: '/solutions/healthcare' },
  { icon: Hotel, key: 'Hospitality', href: '/solutions/hospitality' },
  { icon: Database, key: 'Data Centers', href: '/solutions/data-centers' },
  { icon: TowerControl, key: 'Telecommunications', href: '/solutions/telecommunications' },
  { icon: Wheat, key: 'Agriculture', href: '/solutions/agriculture' },
  { icon: Store, key: 'Commercial', href: '/solutions/commercial' },
];

export function IndustrySolutions() {
  const t = useTranslations('home');

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader
          title={t('industrySolutions')}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sectors.map((sector, i) => (
            <FadeIn key={sector.key} delay={i * 80} duration={600}>
              <Link
                href={sector.href}
                className="group flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 hover:border-accent/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <sector.icon className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{sector.key}</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
