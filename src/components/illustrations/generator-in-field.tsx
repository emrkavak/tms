'use client';

interface Props {
  className?: string;
}

export function GeneratorInField({ className }: Props) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="0" y="0" width="400" height="300" rx="12" fill="#1E293B" />
      <rect x="0" y="0" width="400" height="300" rx="12" fill="url(#skyGrd)" />
      <defs>
        <linearGradient id="skyGrd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <linearGradient id="groundGrd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
      </defs>
      <rect x="0" y="210" width="400" height="90" fill="url(#groundGrd)" />
      <rect x="0" y="210" width="400" height="2" fill="#475569" />
      <rect x="40" y="140" width="300" height="90" rx="8" fill="#DC2626" />
      <rect x="40" y="140" width="300" height="90" rx="8" stroke="#EF4444" strokeWidth="2" />
      <rect x="55" y="155" width="130" height="60" rx="5" fill="#1E293B" />
      <rect x="55" y="155" width="130" height="60" rx="5" stroke="#334155" strokeWidth="1.5" />
      <rect x="200" y="155" width="125" height="60" rx="5" fill="#1E293B" />
      <rect x="200" y="155" width="125" height="60" rx="5" stroke="#334155" strokeWidth="1.5" />
      <circle cx="262" cy="185" r="15" fill="none" stroke="#475569" strokeWidth="2" />
      <circle cx="262" cy="185" r="6" fill="#475569" />
      <rect x="65" y="165" width="30" height="8" rx="2" fill="#475569" />
      <rect x="65" y="180" width="40" height="8" rx="2" fill="#475569" />
      <rect x="65" y="195" width="35" height="8" rx="2" fill="#475569" />
      <rect x="55" y="118" width="80" height="28" rx="4" fill="#F59E0B" />
      <text x="95" y="137" textAnchor="middle" fill="black" fontSize="10" fontWeight="800">GENERATOR</text>
      <rect x="30" y="210" width="60" height="12" rx="3" fill="#DC2626" />
      <rect x="30" y="222" width="60" height="12" rx="3" fill="#DC2626" />
      <rect x="310" y="210" width="60" height="12" rx="3" fill="#DC2626" />
      <rect x="310" y="222" width="60" height="12" rx="3" fill="#DC2626" />
      <rect x="45" y="248" width="20" height="30" rx="3" fill="#1E293B" />
      <rect x="75" y="248" width="20" height="30" rx="3" fill="#1E293B" />
      <rect x="305" y="248" width="20" height="30" rx="3" fill="#1E293B" />
      <rect x="335" y="248" width="20" height="30" rx="3" fill="#1E293B" />
      <rect x="180" y="235" width="40" height="8" rx="3" fill="#1E293B" />
      <rect x="180" y="248" width="40" height="8" rx="3" fill="#1E293B" />
      <rect x="130" y="108" width="15" height="15" rx="3" fill="#F59E0B" />
      <rect x="155" y="108" width="15" height="15" rx="3" fill="#F59E0B" />
      <rect x="180" y="108" width="15" height="15" rx="3" fill="#F59E0B" />
      <rect x="215" y="108" width="15" height="15" rx="3" fill="#F59E0B" />
      <rect x="240" y="108" width="15" height="15" rx="3" fill="#F59E0B" />
      <rect x="265" y="108" width="15" height="15" rx="3" fill="#F59E0B" />
      <rect x="290" y="108" width="15" height="15" rx="3" fill="#F59E0B" />
      <rect x="315" y="108" width="15" height="15" rx="3" fill="#F59E0B" />
      <rect x="40" y="95" width="8" height="50" rx="2" fill="#64748B" />
      <rect x="355" y="95" width="8" height="50" rx="2" fill="#64748B" />
    </svg>
  );
}
