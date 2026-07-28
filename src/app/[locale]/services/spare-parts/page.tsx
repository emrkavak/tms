import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { SparePartsForm } from '@/components/forms/spare-parts-form';

interface SparePartsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: SparePartsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `Spare Parts — ${t('siteName')}` };
}

export default async function SparePartsPage({ params }: SparePartsPageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <Breadcrumbs items={[{ label: t('home'), href: '/' }, { label: t('services'), href: '/services' }, { label: 'Spare Parts' }]} locale={locale} />
        <h1 className="text-4xl font-semibold mb-6">Spare Parts Request</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Request genuine spare parts for your TMG Power generator.
        </p>
        <div className="max-w-2xl">
          <SparePartsForm />
        </div>
      </div>
    </main>
  );
}
