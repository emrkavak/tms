import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

interface CatalogsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: CatalogsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `Catalogs — ${t('siteName')}` };
}

export default async function CatalogsPage({ params }: CatalogsPageProps) {
  const { locale } = await params;
  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <h1 className="text-4xl font-semibold mb-6">Catalogs & Datasheets</h1>
        <p className="text-muted-foreground">Downloadable documents coming here.</p>
      </div>
    </main>
  );
}
