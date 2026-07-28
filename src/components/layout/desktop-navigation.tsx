'use client';

import { useState, useRef, useEffect } from 'react';
import { Link, usePathname } from '@/lib/i18n/routing';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  labelKey: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
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

interface DesktopNavigationProps {
  locale: string;
}

export function DesktopNavigation({ locale }: DesktopNavigationProps) {
  const t = useTranslations('common');
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          item={item}
          label={t(item.labelKey)}
          pathname={pathname}
          isRtl={locale === 'ar'}
        />
      ))}
    </nav>
  );
}

function NavLink({
  item,
  label,
  pathname,
  isRtl,
}: {
  item: NavItem;
  label: string;
  pathname: string;
  isRtl: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li ref={ref} className="relative list-none">
      <div
        className={cn(
          'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer',
          isActive
            ? 'text-white'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        )}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        onMouseEnter={() => hasChildren && setIsOpen(true)}
        onMouseLeave={() => hasChildren && setIsOpen(false)}
      >
        {hasChildren ? (
          <>
            <Link href={item.href} className="hover:text-white transition-colors">
              {label}
            </Link>
            <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', isOpen && 'rotate-180')} />
          </>
        ) : (
          <Link href={item.href} className="hover:text-white transition-colors">
            {label}
          </Link>
        )}
      </div>

      {hasChildren && isOpen && (
        <div
          className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[200px] z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
            >
              {child.labelKey}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
