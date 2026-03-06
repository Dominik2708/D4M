import type { Metadata } from 'next';
import { I18nProvider } from '@/components/I18nProvider';
import { HighContrastProvider } from '@/lib/HighContrastContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Schülerunternehmen HAITI',
  description: 'Ein Bildungsprojekt der BBS I Lüneburg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <I18nProvider>
          <HighContrastProvider>{children}</HighContrastProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
