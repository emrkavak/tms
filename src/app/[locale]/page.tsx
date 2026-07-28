import { HeroVideo } from '@/components/hero/hero-video';
import { TrustStrip } from '@/components/home/trust-strip';
import { ProductCategories } from '@/components/home/product-categories';
import { PowerRequirement } from '@/components/home/power-requirement';
import { IndustrySolutions } from '@/components/home/industry-solutions';
import { ProductionQuality } from '@/components/home/production-quality';
import { FeaturedProducts } from '@/components/home/featured-products';
import { ReferenceProjects } from '@/components/home/reference-projects';
import { KnowledgeCenter } from '@/components/home/knowledge-center';
import { CtaSection } from '@/components/home/cta-section';
import { AppFooter } from '@/components/layout/app-footer';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  return (
    <main>
      <HeroVideo locale={locale} />
      <TrustStrip />
      <ProductCategories />
      <PowerRequirement />
      <IndustrySolutions />
      <ProductionQuality />
      <FeaturedProducts />
      <ReferenceProjects />
      <KnowledgeCenter />
      <CtaSection />
      <AppFooter locale={locale} />
    </main>
  );
}
