import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SectionHeader } from '@/components/ui/section-header';
import { QuoteWizard } from '@/components/forms/quote-wizard';

interface QuotePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: QuotePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `${t('requestQuote')} — ${t('siteName')}` };
}

export default async function QuotePage({ params }: QuotePageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader title={t('requestQuote')} />
        <div className="max-w-3xl mx-auto">
          <QuoteWizard locale={locale} />
        </div>
      </div>
    </main>
  );
}
