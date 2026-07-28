'use client';

interface Props {
  className?: string;
}

export function SoundproofGenerator({ className }: Props) {
  return (
    <svg viewBox="0 0 350 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="40" y="100" width="270" height="130" rx="10" fill="#1E293B" />
      <rect x="40" y="100" width="270" height="130" rx="10" stroke="#334155" strokeWidth="2" />
      <rect x="55" y="115" width="110" height="100" rx="6" fill="#334155" />
      <rect x="55" y="115" width="110" height="100" rx="6" stroke="#475569" strokeWidth="1.5" />
      <rect x="185" y="115" width="110" height="100" rx="6" fill="#334155" />
      <rect x="185" y="115" width="110" height="100" rx="6" stroke="#475569" strokeWidth="1.5" />
      <rect x="55" y="115" width="110" height="6" rx="2" fill="#DC2626" />
      <line x1="65" y1="140" x2="155" y2="140" stroke="#475569" strokeWidth="2" strokeDasharray="4 2" />
      <line x1="65" y1="160" x2="155" y2="160" stroke="#475569" strokeWidth="2" strokeDasharray="4 2" />
      <line x1="65" y1="180" x2="155" y2="180" stroke="#475569" strokeWidth="2" strokeDasharray="4 2" />
      <line x1="65" y1="195" x2="155" y2="195" stroke="#475569" strokeWidth="2" strokeDasharray="4 2" />
      <rect x="195" y="130" width="90" height="30" rx="4" fill="#475569" />
      <rect x="195" y="175" width="90" height="25" rx="4" fill="#DC2626" />
      <text x="240" y="192" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">TMG POWER</text>
      <rect x="210" y="137" width="20" height="16" rx="2" fill="#1E293B" />
      <rect x="240" y="137" width="20" height="16" rx="2" fill="#1E293B" />
      <rect x="270" y="137" width="10" height="16" rx="2" fill="#1E293B" />
      <rect x="40" y="135" width="16" height="60" rx="3" fill="#64748B" />
      <line x1="48" y1="145" x2="48" y2="185" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" />
      <rect x="15" y="140" width="30" height="8" rx="2" fill="#475569" />
      <rect x="15" y="155" width="30" height="8" rx="2" fill="#475569" />
      <rect x="15" y="170" width="30" height="8" rx="2" fill="#475569" />
      <rect x="15" y="185" width="30" height="8" rx="2" fill="#475569" />
      <rect x="40" y="235" width="80" height="8" rx="3" fill="#1E293B" />
      <rect x="230" y="235" width="80" height="8" rx="3" fill="#1E293B" />
      <rect x="155" y="230" width="40" height="18" rx="3" fill="#DC2626" />
      <rect x="155" y="230" width="40" height="18" rx="3" stroke="#EF4444" strokeWidth="1" />
      <rect x="60" y="82" width="20" height="22" rx="3" fill="#F59E0B" />
      <rect x="90" y="82" width="20" height="22" rx="3" fill="#F59E0B" />
      <rect x="120" y="82" width="20" height="22" rx="3" fill="#F59E0B" />
      <rect x="230" y="82" width="20" height="22" rx="3" fill="#F59E0B" />
      <rect x="260" y="82" width="20" height="22" rx="3" fill="#F59E0B" />
      <rect x="290" y="82" width="20" height="22" rx="3" fill="#F59E0B" />
    </svg>
  );
}
