import type { Metadata } from 'next';
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
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
