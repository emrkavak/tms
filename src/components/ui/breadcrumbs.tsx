import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from '@/lib/i18n/routing';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  locale?: string;
}

export function Breadcrumbs({ items, locale }: BreadcrumbsProps) {
  const isRtl = locale === 'ar';
  const Separator = isRtl ? ChevronLeft : ChevronRight;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground" dir={isRtl ? 'rtl' : 'ltr'}>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && <Separator className="h-4 w-4" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-accent transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
