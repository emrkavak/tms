'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import { SectionHeader } from '@/components/ui/section-header';
import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight, FileText, BookOpen, HelpCircle } from 'lucide-react';

const resources = [
  {
    icon: FileText,
    title: 'Technical Articles',
    href: '/resources/technical-articles',
    count: 'Guides & Papers',
  },
  {
    icon: BookOpen,
    title: 'Catalogs & Datasheets',
    href: '/resources/catalogs',
    count: 'Product Documentation',
  },
  {
    icon: HelpCircle,
    title: 'FAQ',
    href: '/resources/faq',
    count: 'Common Questions',
  },
];

export function KnowledgeCenter() {
  const t = useTranslations('home');
  const ct = useTranslations('common');

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader title={t('knowledgeCenter')} />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {resources.map((resource, i) => (
            <FadeIn key={resource.title} delay={i * 100} duration={800}>
              <Link
                href={resource.href}
                className="group flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:border-accent/30 transition-all duration-300 hover:shadow-md"
              >
                <resource.icon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{resource.count}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-accent ml-auto mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
