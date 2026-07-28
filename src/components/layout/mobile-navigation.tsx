'use client';

import { useState } from 'react';
import { Link, usePathname } from '@/lib/i18n/routing';
import { useTranslations } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './language-switcher';

const navItems = [
  { labelKey: 'home', href: '/' },
  {
    labelKey: 'products',
    href: '/products',
    children: [
      { labelKey: 'dieselGenerators', href: '/products/diesel-generators' },
      { labelKey: 'portableGenerators', href: '/products/portable-generators' },
      { labelKey: 'soundproofGenerators', href: '/products/soundproof-generators' },
    ],
  },
  { labelKey: 'solutions', href: '/solutions' },
  { labelKey: 'services', href: '/services' },
  { labelKey: 'projects', href: '/projects' },
  { labelKey: 'corporate', href: '/corporate/about' },
  { labelKey: 'contact', href: '/contact' },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const t = useTranslations('common');
  const pathname = usePathname();

  const toggleExpand = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    );
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center p-2 text-white cursor-pointer"
        aria-label={t('menu')}
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-primary flex flex-col">
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <span className="text-xl font-semibold text-white">{t('siteName')}</span>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center p-2 text-white cursor-pointer"
              aria-label={t('close')}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              const isExpanded = expandedItems.includes(item.href);
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div key={item.href} className="border-b border-white/10">
                  <button
                    className="flex items-center justify-between w-full py-4 cursor-pointer text-left"
                    onClick={() => {
                      if (hasChildren) {
                        toggleExpand(item.href);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (!hasChildren) setIsOpen(false);
                        else e.preventDefault();
                      }}
                      className={cn(
                        'text-lg font-medium transition-colors',
                        isActive ? 'text-accent' : 'text-white/80'
                      )}
                    >
                      {t(item.labelKey)}
                    </Link>
                    {hasChildren && (
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 text-white/60 transition-transform',
                          isExpanded && 'rotate-180'
                        )}
                      />
                    )}
                  </button>

                  {hasChildren && isExpanded && (
                    <div className="pb-3 pl-4 space-y-3">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-base text-white/60 hover:text-white transition-colors"
                        >
                          {t(child.labelKey)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="px-6 py-6 border-t border-white/10 space-y-4">
            <LanguageSwitcher />
            <Link
              href="/quote"
              className="block w-full text-center bg-accent text-white rounded-lg px-6 py-3 font-medium hover:bg-accent-hover transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('requestQuote')}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
