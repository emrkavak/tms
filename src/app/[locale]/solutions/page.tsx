import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/lib/i18n/routing';
import { SectionHeader } from '@/components/ui/section-header';
import { Building2, Construction, Hospital, Hotel, Database, TowerControl, Wheat, Store } from 'lucide-react';

interface SolutionsPageProps {
  params: Promise<{ locale: string }>;
}

const solutions = [
  { icon: Building2, name: 'Industrial Facilities', href: '/solutions/industrial-facilities' },
  { icon: Construction, name: 'Construction', href: '/solutions/construction' },
  { icon: Hospital, name: 'Healthcare', href: '/solutions/healthcare' },
  { icon: Hotel, name: 'Hospitality', href: '/solutions/hospitality' },
  { icon: Database, name: 'Data Centers', href: '/solutions/data-centers' },
  { icon: TowerControl, name: 'Telecommunications', href: '/solutions/telecommunications' },
  { icon: Wheat, name: 'Agriculture', href: '/solutions/agriculture' },
  { icon: Store, name: 'Commercial Buildings', href: '/solutions/commercial' },
];

export async function generateMetadata({ params }: SolutionsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `${t('solutions')} — ${t('siteName')}` };
}

export default async function SolutionsPage({ params }: SolutionsPageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader title={t('solutions')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <Link key={s.href} href={s.href} className="group p-8 rounded-2xl border border-gray-200 hover:border-accent/30 transition-all hover:shadow-lg">
              <s.icon className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold text-lg">{s.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
