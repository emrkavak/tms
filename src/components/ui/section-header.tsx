import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight',
        titleClassName || 'text-primary'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'mt-4 text-lg leading-relaxed',
          descriptionClassName || 'text-muted-foreground'
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
