import { Header, Footer } from '@/components';

export const metadata = { title: 'Impressum — D4M' };

export default function ImpressumPage() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Headline */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Impressum</h1>
            <p className="text-lg text-gray-600">Rechtliche Informationen gemäß § 5 TMG</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Hauptinformationen */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                      Berufsbildende Schulen I Lüneburg
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          Adresse
                        </h3>
                        <address className="not-italic text-gray-600 leading-relaxed pl-7">
                          Spillbrunnenweg 1<br />
                          21337 Lüneburg
                          <br />
                          Deutschland
                        </address>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          Kontakt
                        </h3>
                        <div className="space-y-2 text-gray-600 pl-7">
                          <p>
                            <span className="font-medium">Telefon:</span>{' '}
                            <a
                              href="tel:+49413199220600"
                              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                            >
                              04131 / 99 220 600
                            </a>
                          </p>
                          <p>
                            <span className="font-medium">E‑Mail:</span>{' '}
                            <a
                              href="mailto:info@bbs1-lueneburg.de"
                              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                            >
                              info@bbs1-lueneburg.de
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Vertretungsberechtigt
                    </h3>
                    <p className="text-gray-600 pl-7">
                      Oberstudiendirektor{' '}
                      <span className="font-semibold text-gray-800">Heiko Lüdemann</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Weitere Informationen</h3>
                <div className="space-y-3">
                  <a
                    href="/datenschutz"
                    className="flex items-center text-blue-700 hover:text-blue-900 transition-colors p-2 rounded-lg hover:bg-blue-100"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Datenschutzerklärung
                  </a>
                  <a
                    href="https://www.bbs1-lueneburg.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-700 hover:text-blue-900 transition-colors p-2 rounded-lg hover:bg-blue-100"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Offizielle Website
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Rechtliche Hinweise</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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
