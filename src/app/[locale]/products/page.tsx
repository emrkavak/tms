import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/lib/i18n/routing';
import { SectionHeader } from '@/components/ui/section-header';

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `${t('products')} — ${t('siteName')}` };
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader title={t('products')} />
        <div className="grid md:grid-cols-3 gap-6">
          {['dieselGenerators', 'portableGenerators', 'soundproofGenerators'].map((cat) => (
            <Link
              key={cat}
              href={`/products/${cat}`}
              className="block p-8 rounded-2xl border border-gray-200 hover:border-accent/30 transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{cat}</h3>
              <p className="text-muted-foreground text-sm">{t('viewDetails')}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
