import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/ui/fade-in';
import { DieselGenerator } from '@/components/illustrations/diesel-generator';
import { CheckCircle, Shield, BarChart3, FileCheck } from 'lucide-react';

interface QualityPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: QualityPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `Quality — ${t('siteName')}` };
}

const policies = [
  { icon: Shield, title: 'ISO 9001:2025 Certified', desc: 'Our quality management system is certified to ISO 9001:2025 standards, ensuring consistent processes across all departments.' },
  { icon: BarChart3, title: 'Six Sigma Methodology', desc: 'We apply Six Sigma principles to reduce defects and optimize production efficiency at every stage.' },
  { icon: FileCheck, title: 'Full-Load Testing Protocol', desc: 'Every generator must pass our 72-hour full-load test protocol before leaving the factory.' },
  { icon: CheckCircle, title: 'Traceability & Documentation', desc: 'Comprehensive documentation including test reports, material certificates, and maintenance manuals with every unit.' },
];

export default async function QualityPage({ params }: QualityPageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <h1 className="text-4xl font-semibold mb-4">Quality Policy</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
          Quality is not just a department at TMG Power — it is embedded in every process,
          from design and procurement to manufacturing and after-sales service.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden bg-gray-900 p-6 flex items-center justify-center h-72">
              <DieselGenerator className="w-full h-full" />
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold">Our Commitment to Quality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every TMG Power generator is built to deliver reliable performance in the most
                demanding conditions. Our quality assurance starts with carefully selected components
                and continues through final inspection and testing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We maintain strict quality control at every production stage, with dedicated QA
                teams performing in-process and final inspections using calibrated equipment.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {policies.map((policy, i) => (
            <FadeIn key={policy.title} delay={i * 100}>
              <div className="p-6 rounded-2xl border border-gray-200 hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <policy.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{policy.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{policy.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
