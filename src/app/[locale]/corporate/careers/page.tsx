import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

interface CareersPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: CareersPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `Careers — ${t('siteName')}` };
}

export default async function CareersPage({ params }: CareersPageProps) {
  const { locale } = await params;
  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <h1 className="text-4xl font-semibold mb-6">Careers</h1>
        <p className="text-muted-foreground">Job openings and career information coming here.</p>
      </div>
    </main>
  );
}
