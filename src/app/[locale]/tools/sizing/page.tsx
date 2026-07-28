import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SectionHeader } from '@/components/ui/section-header';
import { SizingCalculator } from '@/components/tools/sizing-calculator';

interface SizingPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: SizingPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `Generator Sizing Tool — ${t('siteName')}` };
}

export default async function SizingPage({ params }: SizingPageProps) {
  const { locale } = await params;

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader
          title="Generator Sizing Tool"
          description="Select your equipment below to calculate the recommended generator size for your application."
        />
        <div className="max-w-4xl mx-auto">
          <SizingCalculator />
        </div>
      </div>
    </main>
  );
}
