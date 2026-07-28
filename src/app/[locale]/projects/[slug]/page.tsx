import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

interface ProjectDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: 'factory-power-backup' },
    { slug: 'hospital-critical-system' },
    { slug: 'data-center-redundancy' },
  ];
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `${slug} — ${t('projects')} — ${t('siteName')}` };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <Breadcrumbs items={[{ label: t('home'), href: '/' }, { label: t('projects'), href: '/projects' }, { label: slug }]} locale={locale} />
        <h1 className="text-4xl font-semibold mb-6">{slug}</h1>
        <p className="text-muted-foreground">Project details coming here.</p>
      </div>
    </main>
  );
}
