import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/ui/fade-in';
import { DieselGenerator } from '@/components/illustrations/diesel-generator';
import { Cog, TestTubeDiagonal, Factory, Truck } from 'lucide-react';

interface ProductionPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ProductionPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `Production — ${t('siteName')}` };
}

const stages = [
  { icon: Cog, title: 'Engine & Alternator Assembly', desc: 'Certified technicians assemble engines from Cummins, Perkins, and John Deere with Marathon and Stamford alternators in our climate-controlled facility.' },
  { icon: TestTubeDiagonal, title: 'Full-Load Performance Testing', desc: 'Every generator is tested at 100%, 75%, and 50% load for 72+ hours. Parameters including voltage regulation, frequency stability, and fuel consumption are recorded.' },
  { icon: Factory, title: 'Soundproof Enclosure Fabrication', desc: 'Custom enclosures are fabricated in-house with precision CNC machining, multi-layer acoustic insulation, and powder-coated finishing for maximum durability.' },
  { icon: Truck, title: 'Logistics & Global Shipping', desc: 'Each unit is securely crated, documented, and dispatched through our logistics partners with real-time tracking and on-site delivery coordination.' },
];

export default async function ProductionPage({ params }: ProductionPageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <h1 className="text-4xl font-semibold mb-4">Production Facilities</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
          Our 25,000 m² ISO 9001:2025 certified production facility combines advanced manufacturing
          with skilled craftsmanship to deliver generators of uncompromising quality.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden bg-gray-100 p-8 flex items-center justify-center h-72">
              <DieselGenerator className="w-full h-full max-w-md" />
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold">State-of-the-Art Manufacturing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our facility features automated assembly lines, robotic welding stations, precision
                CNC machining centers, and a dedicated full-load test bay with 2500 kVA capacity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every production stage is tracked through our ERP system, ensuring full traceability
                from raw material receipt to final shipment.
              </p>
            </div>
          </FadeIn>
        </div>

        <h2 className="text-2xl font-semibold mb-8">Production Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {stages.map((stage, i) => (
            <FadeIn key={stage.title} delay={i * 100}>
              <div className="flex gap-4 p-6 rounded-2xl border border-gray-200 hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <stage.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{stage.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
