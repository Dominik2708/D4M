'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navigationLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
];

const contactInfo = [
  {
    icon: Mail,
    content: 'schuelerunternehmen@bbs1-lueneburg.de',
  },
  {
    icon: Phone,
    content: '04131 - 207 400',
  },
  {
    icon: MapPin,
    content: ['BBS I Lüneburg', 'Spillbrunnenweg 1', '21335 Lüneburg'],
  },
];

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white border-2 rounded-lg flex items-center justify-center">
                <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Schülerunternehmen</h3>
                <p className="text-sm text-muted-foreground">BBS I Lüneburg</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Innovative Lösungen durch 3D-Druck und nachhaltige Holzverarbeitung. Ein
              Bildungsprojekt der BBS I Lüneburg.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map(link => (
                <Button
                  key={link.href}
                  variant="link"
                  className="h-auto p-0 text-muted-foreground hover:text-primary justify-start"
                  asChild
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-muted-foreground">
                      {Array.isArray(info.content) ? (
                        info.content.map((line, i) => <p key={i}>{line}</p>)
                      ) : (
                        <span>{info.content}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Schülerunternehmen BBS I Lüneburg. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Bildungsprojekt</span>
            <span>•</span>
            <span>Nicht gewerblich</span>
            <span>•</span>
            <span>MwSt.-befreit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
