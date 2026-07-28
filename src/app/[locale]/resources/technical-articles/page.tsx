import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

interface TechArticlesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TechArticlesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `Technical Articles — ${t('siteName')}` };
}

export default async function TechArticlesPage({ params }: TechArticlesPageProps) {
  const { locale } = await params;
  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <h1 className="text-4xl font-semibold mb-6">Technical Articles</h1>
        <p className="text-muted-foreground">Technical articles coming here.</p>
      </div>
    </main>
  );
}
