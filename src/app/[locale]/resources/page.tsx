import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/lib/i18n/routing';
import { SectionHeader } from '@/components/ui/section-header';

interface ResourcesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ResourcesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `${t('resources')} — ${t('siteName')}` };
}

export default async function ResourcesPage({ params }: ResourcesPageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader title={t('resources')} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { href: '/resources/blog', label: 'Blog' },
            { href: '/resources/technical-articles', label: 'Technical Articles' },
            { href: '/resources/catalogs', label: 'Catalogs & Datasheets' },
            { href: '/resources/faq', label: 'FAQ' },
            { href: '/tools/sizing', label: 'Generator Sizing Tool' },
          ].map((r) => (
            <Link key={r.href} href={r.href} className="p-6 rounded-2xl border border-gray-200 hover:border-accent/30 transition-all hover:shadow-lg">
              <h3 className="font-semibold text-lg">{r.label}</h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
