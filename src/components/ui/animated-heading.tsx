'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3';
  initialDelay?: number;
  characterDelay?: number;
  duration?: number;
}

function isReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function AnimatedHeading({
  text,
  className,
  tag: Tag = 'h1',
  initialDelay = 200,
  characterDelay = 30,
  duration = 500,
}: AnimatedHeadingProps) {
  const [visibleChars, setVisibleChars] = useState<Set<number>>(new Set());
  const reduced = isReducedMotion();

  useEffect(() => {
    if (reduced) {
      const all = new Set<number>();
      for (let i = 0; i < text.length; i++) all.add(i);
      setVisibleChars(all);
      return;
    }

    const lines = text.split('\n');
    let charIndex = 0;
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
      for (let c = 0; c < lines[lineIdx].length; c++) {
        const idx = charIndex;
        const timer = setTimeout(() => {
          setVisibleChars(prev => new Set(prev).add(idx));
        }, initialDelay + idx * characterDelay);
        charIndex++;
      }
      charIndex++;
    }
  }, [text, initialDelay, characterDelay, reduced]);

  let charIdx = 0;
  const elements: React.ReactNode[] = [];

  const lines = text.split('\n');
  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const line = lines[lineIdx];
    const chars: React.ReactNode[] = [];
    for (let c = 0; c < line.length; c++) {
      const idx = charIdx;
      const char = line[c] === ' ' ? '\u00A0' : line[c];
      chars.push(
        <span
          key={idx}
          className={cn(
            'inline-block transition-all',
            visibleChars.has(idx)
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-[18px]'
          )}
          style={{
            transitionDuration: reduced ? '0ms' : `${duration}ms`,
            transitionTimingFunction: 'ease-out',
          }}
        >
          {char}
        </span>
      );
      charIdx++;
    }
    elements.push(
      <span key={`line-${lineIdx}`} className="block whitespace-nowrap">
        {chars}
      </span>
    );
    charIdx++;
  }

  return (
    <Tag className={cn(className)}>
      {elements}
    </Tag>
  );
}
