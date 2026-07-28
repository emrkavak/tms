import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

const categorySlugs = ['diesel-generators', 'portable-generators', 'soundproof-generators'];

export function generateStaticParams() {
  return categorySlugs.map((categorySlug) => ({ categorySlug }));
}

interface CategoryPageProps {
  params: Promise<{ locale: string; categorySlug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { locale, categorySlug } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `${categorySlug} — ${t('products')} — ${t('siteName')}` };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, categorySlug } = await params;
  const t = await getTranslations('common');

  const breadcrumbs = [
    { label: t('home'), href: '/' },
    { label: t('products'), href: '/products' },
    { label: categorySlug },
  ];

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <Breadcrumbs items={breadcrumbs} locale={locale} />
        <h1 className="text-4xl font-semibold mb-8">{categorySlug}</h1>
        <p className="text-muted-foreground">Product listing with filters coming here.</p>
      </div>
    </main>
  );
}
