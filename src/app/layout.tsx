import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Schülerunternehmen BBS I - Von Schülern für Schüler',
  description: 'Innovative Produkte und kreative Lösungen von unserem Schülerunternehmen - Handgefertigte Notizbücher, Öko-Schreibwaren und mehr',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
