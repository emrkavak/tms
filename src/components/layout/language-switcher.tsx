'use client';

import { useState, useRef, useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { Link, locales } from '@/lib/i18n/routing';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const localeNames: Record<string, string> = {
  tr: 'Türkçe',
  en: 'English',
  ar: 'العربية',
  ru: 'Русский',
};

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = (params?.locale as string) || 'tr';
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const getPathWithoutLocale = () => {
    const segments = pathname.split('/').filter(Boolean);
    if (locales.includes(segments[0] as typeof locales[number])) {
      segments.shift();
    }
    return '/' + segments.join('/');
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors cursor-pointer px-2 py-1"
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4" />
        <span>{localeNames[currentLocale]}</span>
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[140px] z-50',
            currentLocale === 'ar' ? 'left-0' : 'right-0'
          )}
        >
          {locales.map((locale) => (
            <Link
              key={locale}
              href={getPathWithoutLocale()}
              locale={locale}
              onClick={() => setIsOpen(false)}
              className={cn(
                'block px-4 py-2 text-sm transition-colors',
                locale === currentLocale
                  ? 'text-accent font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              {localeNames[locale]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
