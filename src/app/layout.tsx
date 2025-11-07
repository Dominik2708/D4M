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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
