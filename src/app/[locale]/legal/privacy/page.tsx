import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `Privacy Policy — ${t('siteName')}` };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16 max-w-3xl">
        <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground">Privacy policy content coming here. Requires legal review.</p>
      </div>
    </main>
  );
}
