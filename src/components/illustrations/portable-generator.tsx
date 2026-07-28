'use client';

interface Props {
  className?: string;
}

export function PortableGenerator({ className }: Props) {
  return (
    <svg viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="70" y="100" width="160" height="100" rx="8" fill="#DC2626" />
      <rect x="70" y="100" width="160" height="100" rx="8" stroke="#EF4444" strokeWidth="2" />
      <rect x="80" y="110" width="60" height="35" rx="4" fill="#1E293B" />
      <rect x="80" y="155" width="60" height="35" rx="4" fill="#1E293B" />
      <rect x="155" y="110" width="60" height="80" rx="4" fill="#1E293B" />
      <rect x="155" y="110" width="60" height="80" rx="4" stroke="#334155" strokeWidth="1" />
      <circle cx="185" cy="150" r="20" fill="none" stroke="#475569" strokeWidth="2" />
      <circle cx="185" cy="150" r="8" fill="#475569" />
      <circle cx="185" cy="150" r="3" fill="#DC2626" />
      <rect x="95" y="130" width="30" height="8" rx="2" fill="#475569" />
      <rect x="95" y="145" width="30" height="8" rx="2" fill="#475569" />
      <rect x="95" y="160" width="30" height="8" rx="2" fill="#475569" />
      <rect x="95" y="175" width="25" height="8" rx="2" fill="#475569" />
      <rect x="245" y="115" width="12" height="70" rx="3" fill="#64748B" />
      <rect x="255" y="115" width="12" height="70" rx="3" fill="#64748B" />
      <rect x="150" y="92" width="10" height="12" rx="2" fill="#475569" />
      <rect x="240" y="92" width="10" height="12" rx="2" fill="#475569" />
      <rect x="80" y="90" width="150" height="14" rx="3" fill="#DC2626" />
      <rect x="80" y="90" width="150" height="14" rx="3" stroke="#EF4444" strokeWidth="1" />
      <text x="155" y="100" textAnchor="middle" fill="white" fontSize="8" fontWeight="700">TMG POWER</text>
      <rect x="130" y="200" width="40" height="30" rx="4" fill="#1E293B" />
      <rect x="130" y="200" width="40" height="30" rx="4" stroke="#334155" strokeWidth="1" />
      <circle cx="150" cy="215" r="6" fill="#475569" />
      <rect x="90" y="205" width="20" height="6" rx="2" fill="#64748B" />
      <rect x="190" y="205" width="20" height="6" rx="2" fill="#64748B" />
      <rect x="100" y="60" width="10" height="10" rx="2" fill="#F59E0B" />
      <rect x="120" y="60" width="10" height="10" rx="2" fill="#F59E0B" />
      <rect x="140" y="60" width="6" height="10" rx="1.5" fill="#94A3B8" />
      <rect x="150" y="60" width="6" height="10" rx="1.5" fill="#94A3B8" />
      <rect x="160" y="60" width="6" height="10" rx="1.5" fill="#94A3B8" />
    </svg>
  );
}
