import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { DieselGenerator } from '@/components/illustrations/diesel-generator';
import { SoundproofGenerator } from '@/components/illustrations/soundproof-generator';
import { PortableGenerator } from '@/components/illustrations/portable-generator';
import { Link } from '@/lib/i18n/routing';
import { ArrowRight, Check } from 'lucide-react';

const productRoutes = [
  { categorySlug: 'diesel-generators', productSlug: 'tmg-d-500' },
  { categorySlug: 'diesel-generators', productSlug: 'tmg-d-250' },
  { categorySlug: 'portable-generators', productSlug: 'tmg-p-15' },
  { categorySlug: 'soundproof-generators', productSlug: 'tmg-s-200' },
];

export function generateStaticParams() {
  return productRoutes.map(({ categorySlug, productSlug }) => ({ categorySlug, productSlug }));
}

interface ProductDetailPageProps {
  params: Promise<{ locale: string; categorySlug: string; productSlug: string }>;
}

const illustrations: Record<string, typeof DieselGenerator> = {
  'diesel-generators': DieselGenerator,
  'soundproof-generators': SoundproofGenerator,
  'portable-generators': PortableGenerator,
};

const specsData: Record<string, { power: string; engine: string; phase: string; frequency: string; fuel: string; features: string[] }> = {
  'tmg-d-500': { power: '500 kVA / 400 kW', engine: 'Cummins QSK19-G8', phase: 'Three Phase', frequency: '50 / 60 Hz', fuel: 'Diesel', features: ['Deep sea electronics controller', '52 dBA soundproof canopy', 'Automatic mains failure (AMF) panel', '24-hour fuel tank', 'Cold start -20°C kit'] },
  'default': { power: '—', engine: '—', phase: '—', frequency: '50 / 60 Hz', fuel: 'Diesel', features: ['Electronic governor', 'Digital control panel', 'Overload protection', 'Low oil pressure shutdown', 'High coolant temperature shutdown'] },
};

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { locale, productSlug } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `${productSlug} — ${t('products')} — ${t('siteName')}` };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { locale, categorySlug, productSlug } = await params;
  const t = await getTranslations('common');
  const Illustration = illustrations[categorySlug] || DieselGenerator;
  const specs = specsData[productSlug] || specsData.default;

  const breadcrumbs = [
    { label: t('home'), href: '/' },
    { label: t('products'), href: '/products' },
    { label: categorySlug, href: `/products/${categorySlug}` },
    { label: productSlug },
  ];

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <Breadcrumbs items={breadcrumbs} locale={locale} />
        <div className="grid lg:grid-cols-2 gap-12 mt-6">
          <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center p-8 overflow-hidden">
            <Illustration className="w-full h-full object-contain scale-110" />
          </div>
          <div>
            <h1 className="text-4xl font-semibold mb-4">{productSlug}</h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              High-performance generator set engineered for reliable power delivery in demanding environments.
              Backed by TMG Power&apos;s comprehensive warranty and global service network.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Power Output', value: specs.power },
                { label: 'Engine', value: specs.engine },
                { label: 'Phase', value: specs.phase },
                { label: 'Frequency', value: specs.frequency },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
                  <p className="font-semibold">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {specs.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-accent text-white rounded-xl px-6 py-3 font-medium hover:bg-accent/90 transition-colors"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
