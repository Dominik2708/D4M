import { Header, Footer } from '@/components';
import { MapPin, Phone, User, Shield, Globe } from 'lucide-react';

export const metadata = { title: 'Impressum — D4M' };

export default function ImpressumPage() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Headline */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Impressum</h1>
            <p className="text-lg text-gray-600 font-normal">Rechtliche Informationen gemäß § 5 TMG</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Hauptinformationen */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-200">
                      Berufsbildende Schulen I Lüneburg
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                          Adresse
                        </h3>
                        <address className="not-italic text-gray-700 leading-relaxed pl-7 font-normal">
                          Spillbrunnenweg 1<br />
                          21337 Lüneburg
                          <br />
                          Deutschland
                        </address>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <Phone className="w-5 h-5 mr-2 text-green-600" />
                          Kontakt
                        </h3>
                        <div className="space-y-2 text-gray-700 pl-7 font-normal">
                          <p>
                            <span className="font-bold">Telefon:</span>{' '}
                            <a
                              href="tel:+49413199220600"
                              className="text-blue-600 hover:text-blue-700 hover:underline transition-colors font-bold"
                            >
                              04131 / 99 220 600
                            </a>
                          </p>
                          <p>
                            <span className="font-bold">E‑Mail:</span>{' '}
                            <a
                              href="mailto:info@bbs1-lueneburg.de"
                              className="text-blue-600 hover:text-blue-700 hover:underline transition-colors font-bold"
                            >
                              info@bbs1-lueneburg.de
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <User className="w-5 h-5 mr-2 text-purple-600" />
                      Vertretungsberechtigt
                    </h3>
                    <p className="text-gray-700 pl-7 font-normal">
                      Oberstudiendirektor{' '}
                      <span className="font-bold text-gray-900">Heiko Lüdemann</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Weitere Informationen</h3>
                <div className="space-y-3">
                  <a
                    href="/datenschutz"
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors p-2 rounded-lg hover:bg-blue-50 font-bold underline"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Datenschutzerklärung
                  </a>
                  <a
                    href="https://www.bbs1-lueneburg.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors p-2 rounded-lg hover:bg-blue-50 font-bold underline"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Offizielle Website
                  </a>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Rechtliche Hinweise</h3>
                <p className="text-sm text-gray-700 leading-relaxed font-normal">
                  Diese Angaben sind gemäß § 5 TMG (Telemediengesetz) verpflichtend anzugeben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
