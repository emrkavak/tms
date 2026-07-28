'use client';

interface Props {
  className?: string;
}

export function DieselGenerator({ className }: Props) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="60" y="160" width="280" height="100" rx="8" fill="#1E293B" />
      <rect x="60" y="160" width="280" height="100" rx="8" stroke="#334155" strokeWidth="2" />
      <rect x="80" y="170" width="180" height="80" rx="6" fill="#334155" />
      <rect x="80" y="170" width="180" height="80" rx="6" stroke="#475569" strokeWidth="1.5" />
      <rect x="280" y="175" width="45" height="70" rx="6" fill="#1E40AF" />
      <rect x="280" y="175" width="45" height="70" rx="6" stroke="#2563EB" strokeWidth="1.5" />
      <circle cx="302" cy="210" r="12" stroke="#60A5FA" strokeWidth="2" fill="none" />
      <circle cx="302" cy="210" r="5" fill="#60A5FA" />
      <rect x="85" y="180" width="60" height="20" rx="3" fill="#475569" />
      <rect x="85" y="208" width="80" height="14" rx="3" fill="#475569" />
      <rect x="85" y="230" width="70" height="12" rx="3" fill="#475569" />
      <rect x="100" y="260" width="80" height="8" rx="4" fill="#1E293B" />
      <rect x="220" y="260" width="80" height="8" rx="4" fill="#1E293B" />
      <rect x="160" y="255" width="10" height="18" rx="2" fill="#DC2626" />
      <rect x="180" y="255" width="10" height="18" rx="2" fill="#DC2626" />
      <rect x="155" y="140" width="90" height="25" rx="4" fill="#DC2626" />
      <rect x="155" y="140" width="90" height="25" rx="4" stroke="#EF4444" strokeWidth="1" />
      <text x="200" y="157" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">TMG POWER</text>
      <rect x="130" y="120" width="30" height="25" rx="3" fill="#475569" />
      <rect x="240" y="120" width="30" height="25" rx="3" fill="#475569" />
      <rect x="100" y="100" width="15" height="10" rx="2" fill="#64748B" />
      <rect x="130" y="100" width="15" height="10" rx="2" fill="#64748B" />
      <rect x="160" y="100" width="15" height="10" rx="2" fill="#64748B" />
      <rect x="190" y="100" width="15" height="10" rx="2" fill="#64748B" />
      <rect x="220" y="100" width="15" height="10" rx="2" fill="#64748B" />
      <rect x="250" y="100" width="15" height="10" rx="2" fill="#64748B" />
    </svg>
  );
}
