import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

interface SolutionDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: 'industrial-facilities' },
    { slug: 'healthcare' },
    { slug: 'data-centers' },
    { slug: 'telecommunications' },
  ];
}

export async function generateMetadata({ params }: SolutionDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `${slug} — ${t('solutions')} — ${t('siteName')}` };
}

export default async function SolutionDetailPage({ params }: SolutionDetailPageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <Breadcrumbs items={[{ label: t('home'), href: '/' }, { label: t('solutions'), href: '/solutions' }, { label: slug }]} locale={locale} />
        <h1 className="text-4xl font-semibold mb-6 capitalize">{slug.replace(/-/g, ' ')}</h1>
        <p className="text-muted-foreground">Solution details coming here.</p>
      </div>
    </main>
  );
}
