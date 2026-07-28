'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';
import { LanguageSwitcher } from './language-switcher';

interface AppHeaderProps {
  locale: string;
}

export function AppHeader({ locale }: AppHeaderProps) {
  const t = useTranslations('common');

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 lg:px-16 pt-6">
      <div className="liquid-glass rounded-xl px-4 py-2 max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-white tracking-tight flex-shrink-0"
          >
            {t('siteName')}
          </Link>

          <DesktopNavigation locale={locale} />

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>
            <div className="hidden lg:block">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 bg-accent text-white hover:bg-accent-hover px-6 py-2.5 text-sm"
              >
                {t('requestQuote')}
              </Link>
            </div>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
