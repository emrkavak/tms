import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Calendar, Wrench, ClipboardCheck, Droplets } from 'lucide-react';

interface MaintenancePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: MaintenancePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `Periodic Maintenance — ${t('siteName')}` };
}

export default async function MaintenancePage({ params }: MaintenancePageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <Breadcrumbs items={[{ label: t('home'), href: '/' }, { label: t('services'), href: '/services' }, { label: 'Periodic Maintenance' }]} locale={locale} />
        <h1 className="text-4xl font-semibold mb-6">Periodic Maintenance</h1>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Regular maintenance is essential to ensure your generator starts reliably when you need it most.
              TMG Power offers comprehensive maintenance programs tailored to your equipment and operating conditions.
            </p>
            <div className="space-y-6">
              {[
                { icon: ClipboardCheck, title: 'Inspection', desc: 'Complete system inspection including fluids, belts, hoses, and connections.' },
                { icon: Droplets, title: 'Fluid Services', desc: 'Engine oil, coolant, and fuel filter changes per manufacturer specifications.' },
                { icon: Wrench, title: 'Load Testing', desc: 'Periodic load bank testing to verify performance under real operating conditions.' },
                { icon: Calendar, title: 'Scheduled Plans', desc: 'Monthly, quarterly, or annual plans based on usage and criticality.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <item.icon className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Maintenance Schedule</h2>
            <div className="space-y-4">
              {[
                { interval: 'Weekly', tasks: 'Visual inspection, coolant level, battery voltage' },
                { interval: 'Monthly', tasks: 'Oil level, air filter, fuel separator drain' },
                { interval: 'Quarterly', tasks: 'Oil change, filter change, belt inspection' },
                { interval: 'Annually', tasks: 'Full service, load bank test, valve adjustment' },
              ].map((s) => (
                <div key={s.interval} className="border-b border-gray-200 pb-4 last:border-0">
                  <h4 className="font-medium text-accent">{s.interval}</h4>
                  <p className="text-sm text-muted-foreground">{s.tasks}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Schedule Your Maintenance</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Contact our service team to set up a customized maintenance program for your generators.
          </p>
          <a href="tel:+902123456789" className="inline-flex items-center gap-2 bg-accent text-white rounded-lg px-8 py-4 font-medium hover:bg-accent-hover transition-colors">
            Call +90 212 345 67 89
          </a>
        </div>
      </div>
    </main>
  );
}
