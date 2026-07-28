'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import { SectionHeader } from '@/components/ui/section-header';
import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight, MapPin } from 'lucide-react';
import { GeneratorProject } from '@/components/illustrations/generator-project';

const projects = [
  { title: 'Factory Power Backup', location: 'Istanbul, Turkey', power: '1500 kVA' },
  { title: 'Hospital Critical System', location: 'Ankara, Turkey', power: '800 kVA' },
  { title: 'Data Center Redundancy', location: 'Dubai, UAE', power: '2000 kVA' },
];

export function ReferenceProjects() {
  const t = useTranslations('home');
  const ct = useTranslations('common');

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader title={t('referenceProjects')} />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 150} duration={800}>
              <Link
                href="/projects"
                className="group block rounded-2xl bg-white border border-gray-200 overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video bg-gray-900 flex items-center justify-center overflow-hidden">
                  <GeneratorProject className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                    {project.power} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500} className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-hover transition-colors"
          >
            {ct('viewDetails')} <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
