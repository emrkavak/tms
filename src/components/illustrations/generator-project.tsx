'use client';

interface Props {
  className?: string;
}

export function GeneratorProject({ className }: Props) {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="250" rx="12" fill="#1E293B" />
      <rect x="0" y="170" width="400" height="80" fill="#0F172A" />
      <rect x="0" y="170" width="400" height="2" fill="#334155" />
      <rect x="60" y="90" width="250" height="90" rx="8" fill="#DC2626" />
      <rect x="60" y="90" width="250" height="90" rx="8" stroke="#EF4444" strokeWidth="2" />
      <rect x="75" y="105" width="110" height="60" rx="5" fill="#1E293B" />
      <rect x="75" y="105" width="110" height="60" rx="5" stroke="#334155" strokeWidth="1.5" />
      <rect x="200" y="105" width="95" height="60" rx="5" fill="#1E293B" />
      <rect x="200" y="105" width="95" height="60" rx="5" stroke="#334155" strokeWidth="1.5" />
      <circle cx="247" cy="135" r="14" fill="none" stroke="#475569" strokeWidth="2" />
      <circle cx="247" cy="135" r="5" fill="#475569" />
      <rect x="85" y="115" width="25" height="8" rx="2" fill="#475569" />
      <rect x="85" y="130" width="35" height="8" rx="2" fill="#475569" />
      <rect x="85" y="145" width="28" height="8" rx="2" fill="#475569" />
      <rect x="340" y="105" width="20" height="60" rx="4" fill="#475569" />
      <rect x="358" y="105" width="20" height="60" rx="4" fill="#475569" />
      <rect x="385" y="110" width="10" height="50" rx="2" fill="#334155" />
      <rect x="5" y="110" width="10" height="50" rx="2" fill="#334155" />
      <rect x="55" y="180" width="30" height="8" rx="3" fill="#334155" />
      <rect x="100" y="180" width="30" height="8" rx="3" fill="#334155" />
      <rect x="150" y="180" width="30" height="8" rx="3" fill="#334155" />
      <rect x="200" y="180" width="30" height="8" rx="3" fill="#334155" />
      <rect x="250" y="180" width="30" height="8" rx="3" fill="#334155" />
      <rect x="300" y="180" width="30" height="8" rx="3" fill="#334155" />
      <rect x="350" y="180" width="30" height="8" rx="3" fill="#334155" />
      <rect x="55" y="195" width="15" height="30" rx="3" fill="#1E293B" />
      <rect x="90" y="195" width="15" height="30" rx="3" fill="#1E293B" />
      <rect x="295" y="195" width="15" height="30" rx="3" fill="#1E293B" />
      <rect x="330" y="195" width="15" height="30" rx="3" fill="#1E293B" />
      <rect x="80" y="65" width="60" height="28" rx="4" fill="#F59E0B" />
      <text x="110" y="84" textAnchor="middle" fill="black" fontSize="10" fontWeight="800">PROJECT</text>
      <rect x="150" y="75" width="8" height="18" rx="2" fill="#F59E0B" />
      <rect x="165" y="75" width="8" height="18" rx="2" fill="#F59E0B" />
      <rect x="180" y="75" width="8" height="18" rx="2" fill="#F59E0B" />
      <rect x="195" y="75" width="8" height="18" rx="2" fill="#F59E0B" />
      <rect x="250" y="75" width="60" height="18" rx="4" fill="#F59E0B" />
    </svg>
  );
}
