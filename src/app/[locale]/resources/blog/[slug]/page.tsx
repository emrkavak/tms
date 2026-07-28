import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: 'generator-maintenance-tips' },
    { slug: 'diesel-vs-gas-generators' },
  ];
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `${slug} — ${t('siteName')}` };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <Breadcrumbs items={[{ label: t('home'), href: '/' }, { label: 'Blog', href: '/resources/blog' }, { label: slug }]} locale={locale} />
        <h1 className="text-4xl font-semibold mb-6 capitalize">{slug.replace(/-/g, ' ')}</h1>
        <p className="text-muted-foreground">Article content coming here.</p>
      </div>
    </main>
  );
}
