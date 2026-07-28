import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ServiceRequestForm } from '@/components/forms/service-request-form';

interface ServiceRequestPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ServiceRequestPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `Service Request — ${t('siteName')}` };
}

export default async function ServiceRequestPage({ params }: ServiceRequestPageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <Breadcrumbs items={[{ label: t('home'), href: '/' }, { label: t('services'), href: '/services' }, { label: 'Service Request' }]} locale={locale} />
        <h1 className="text-4xl font-semibold mb-6">Service Request</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Report a fault or request technical assistance. Our service team will respond promptly.
        </p>
        <div className="max-w-2xl">
          <ServiceRequestForm />
        </div>
      </div>
    </main>
  );
}
