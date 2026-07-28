import type { Viewport } from 'next';
import '@/app/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
