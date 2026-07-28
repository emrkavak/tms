import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { QuoteForm } from '@/components/forms/quote-form';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: `${t('contact')} — ${t('siteName')}` };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations('common');

  return (
    <main className="pt-32 pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-semibold mb-6">{t('contact')}</h1>
            <p className="text-muted-foreground mb-8">Get in touch with our team.</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">Istanbul, Turkey</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+902123456789" className="text-muted-foreground hover:text-accent transition-colors">+90 212 345 67 89</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:info@tmgpower.com.tr" className="text-muted-foreground hover:text-accent transition-colors">info@tmgpower.com.tr</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-muted-foreground">Mon-Fri: 08:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <QuoteForm />
          </div>
        </div>
      </div>
    </main>
  );
}
