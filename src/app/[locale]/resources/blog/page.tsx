import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SectionHeader } from '@/components/ui/section-header';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `Blog — ${t('siteName')}` };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader title="Blog" />
        <p className="text-muted-foreground">Blog articles coming here.</p>
      </div>
    </main>
  );
}
