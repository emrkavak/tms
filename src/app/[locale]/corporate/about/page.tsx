import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SectionHeader } from '@/components/ui/section-header';
import { FadeIn } from '@/components/ui/fade-in';
import { DieselGenerator } from '@/components/illustrations/diesel-generator';
import { GeneratorInField } from '@/components/illustrations/generator-in-field';
import { Shield, Globe, Users, Award } from 'lucide-react';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `About Us — ${t('siteName')}` };
}

const stats = [
  { icon: Shield, value: '25+', label: 'Years of Experience' },
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Users, value: '500+', label: 'Employees' },
  { icon: Award, value: '12,000+', label: 'Units Installed' },
];

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader title="About TMG Power" description="Powering critical infrastructure across the globe since 1998." />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden bg-gray-100 p-6 flex items-center justify-center h-80">
              <GeneratorInField className="w-full h-full" />
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold">A Legacy of Reliable Power</h2>
              <p className="text-muted-foreground leading-relaxed">
                TMG Power is a leading manufacturer of diesel generator sets, soundproof generators,
                and portable power solutions. Our ISO 9001:2025 certified facility in Turkey spans
                25,000 m² and produces generators from 1 kVA to 2500 kVA.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We serve critical industries including healthcare, data centers, telecommunications,
                industrial manufacturing, and commercial real estate across 40+ countries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every TMG Power generator undergoes full-load testing before shipment and is backed
                by our global service network ensuring 24/7 support wherever you operate.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <FadeIn key={stat.label} delay={100}>
              <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <stat.icon className="h-6 w-6 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold">Global Presence, Local Support</h2>
              <p className="text-muted-foreground leading-relaxed">
                With regional offices in Europe, the Middle East, Africa, and Central Asia,
                we provide localized support, rapid response times, and culturally attuned service
                to every market we operate in.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of 200+ engineers and technicians ensures that your power needs are met
                with the highest standards of quality and reliability.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="rounded-2xl overflow-hidden bg-gray-100 p-6 flex items-center justify-center h-72">
              <DieselGenerator className="w-full h-full" />
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
