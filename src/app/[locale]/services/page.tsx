import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/lib/i18n/routing';
import { SectionHeader } from '@/components/ui/section-header';
import { Wrench, Calendar, Package, Settings, HeadphonesIcon, MapPin } from 'lucide-react';

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

const services = [
  { icon: Wrench, name: 'afterSalesService', href: '/services' },
  { icon: Calendar, name: 'maintenance', href: '/services/maintenance' },
  { icon: Package, name: 'spareParts', href: '/services/spare-parts' },
  { icon: Settings, name: 'Installation & Commissioning', href: '/services' },
  { icon: HeadphonesIcon, name: 'technicalSupport', href: '/services' },
  { icon: MapPin, name: 'Service Locations', href: '/services/locations' },
];

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `${t('services')} — ${t('siteName')}` };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');
  const ht = await getTranslations('home');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader title={t('services')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="group p-8 rounded-2xl border border-gray-200 hover:border-accent/30 transition-all hover:shadow-lg">
              <s.icon className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold text-lg">{s.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
