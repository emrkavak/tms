'use client';

import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/section-header';
import { FadeIn } from '@/components/ui/fade-in';
import { DieselGenerator } from '@/components/illustrations/diesel-generator';
import { Cog, TestTubeDiagonal, Factory, Truck } from 'lucide-react';

const stages = [
  {
    icon: Cog,
    title: 'Motor & Alternator Assembly',
    desc: 'Precision assembly of engines and alternators by certified technicians in our ISO-controlled facility.',
  },
  {
    icon: TestTubeDiagonal,
    title: 'Full Load Testing',
    desc: 'Every generator is tested under real load conditions to verify performance, power output, and reliability.',
  },
  {
    icon: Factory,
    title: 'Enclosure Manufacturing',
    desc: 'Custom soundproof enclosures and containerized solutions fabricated in-house to customer specifications.',
  },
  {
    icon: Truck,
    title: 'Logistics & Commissioning',
    desc: 'Global shipping, on-site installation, and commissioning by our experienced field engineers.',
  },
];

export function ProductionQuality() {
  const t = useTranslations('home');

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader
          title={t('productionQuality')}
          className="text-white"
          titleClassName="text-white"
          descriptionClassName="text-gray-400"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden bg-gray-800 p-8 flex items-center justify-center h-72">
              <DieselGenerator className="w-full h-full max-w-md" />
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold leading-relaxed">
                From precision engineering to turnkey delivery — every TMG Power generator is built to the highest standards.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our ISO 9001:2025 certified facility in Turkey produces generators
                that power critical infrastructure across four continents.
                Each unit undergoes 72+ hours of rigorous testing before shipment.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {stages.map((stage, i) => (
            <FadeIn key={stage.title} delay={i * 100} duration={800}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors">
                    <stage.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold mb-3 group-hover:text-accent transition-colors">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
