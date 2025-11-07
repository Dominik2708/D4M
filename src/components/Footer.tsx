'use client';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-poppins font-bold text-white">SE</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg">Schülerunternehmen</h3>
                <p className="text-sm text-gray-400">BBS I Lüneburg</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Innovative Lösungen durch 3D-Druck und nachhaltige Holzverarbeitung. Ein
              Bildungsprojekt der BBS I Lüneburg.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Navigation</h4>
            <div className="flex flex-col items-start space-y-1">
              <Button variant="link" className="h-auto p-0 text-gray-300 hover:text-white" asChild>
                <a href="#impressum">Impressum</a>
              </Button>
              <Button variant="link" className="h-auto p-0 text-gray-300 hover:text-white" asChild>
                <a href="#datenschutz">Datenschutz</a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">schuelerunternehmen@bbs1-lueneburg.de</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">04131 - 207 400</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>BBS I Lüneburg</p>
                  <p>Spillbrunnenweg 1</p>
                  <p>21335 Lüneburg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 Schülerunternehmen BBS I Lüneburg. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
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
