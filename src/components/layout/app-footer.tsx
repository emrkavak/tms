import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { LanguageSwitcher } from './language-switcher';

interface AppFooterProps {
  locale: string;
}

export function AppFooter({ locale }: AppFooterProps) {
  const t = useTranslations('common');
  const homeT = useTranslations('home');

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('siteName')}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('tagline')}
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="tel:+902123456789" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +90 212 345 67 89
              </a>
              <a href="mailto:info@tmgpower.com.tr" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@tmgpower.com.tr
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Istanbul, Turkey</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Mon-Fri: 08:00 - 18:00</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              {homeT('footerProducts')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/diesel-generators" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {homeT('dieselGenerators')}
                </Link>
              </li>
              <li>
                <Link href="/products/portable-generators" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {homeT('portableGenerators')}
                </Link>
              </li>
              <li>
                <Link href="/products/soundproof-generators" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {homeT('soundproofGenerators')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              {homeT('footerServices')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {homeT('afterSalesService')}
                </Link>
              </li>
              <li>
                <Link href="/services/spare-parts" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {homeT('spareParts')}
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {homeT('maintenance')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {homeT('technicalSupport')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              {homeT('footerCorporate')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/corporate/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {homeT('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/corporate/quality" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {homeT('qualityPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/corporate/certificates" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {homeT('certificates')}
                </Link>
              </li>
              <li>
                <Link href="/corporate/careers" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {homeT('careers')}
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t('siteName')}. {t('allRightsReserved')}</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <Link href="/legal/cookies" className="hover:text-gray-300 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
