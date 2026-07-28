import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

interface LocationsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LocationsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `Service Locations — ${t('siteName')}` };
}

export default async function LocationsPage({ params }: LocationsPageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <Breadcrumbs items={[{ label: t('home'), href: '/' }, { label: t('services'), href: '/services' }, { label: 'Service Locations' }]} locale={locale} />
        <h1 className="text-4xl font-semibold mb-6">Service & Dealer Locations</h1>
        <p className="text-muted-foreground">Map and service point list coming here.</p>
      </div>
    </main>
  );
}
