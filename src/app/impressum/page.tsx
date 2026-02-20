'use client';

import { useTranslation } from 'react-i18next';
import { Header, Footer } from '@/components';
import { MapPin, Phone, User, Shield, Globe } from 'lucide-react';

export default function ImpressumPage() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Headline */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('impressum.title')}
            </h1>
            <p className="text-lg text-gray-600">{t('impressum.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Hauptinformationen */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                      {t('impressum.schoolName')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                          {t('impressum.address')}
                        </h3>
                        <address className="not-italic text-gray-600 leading-relaxed pl-7">
                          Spillbrunnenweg 1<br />
                          21337 Lüneburg
                          <br />
                          {t('impressum.addressContent', '').includes('Germany')
                            ? 'Germany'
                            : 'Deutschland'}
                        </address>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <Phone className="w-5 h-5 mr-2 text-blue-600" />
                          {t('impressum.contactTitle')}
                        </h3>
                        <div className="space-y-2 text-gray-600 pl-7">
                          <p>
                            <span className="font-medium">{t('impressum.phone')}</span>{' '}
                            <a
                              href="tel:+49413199220600"
                              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                            >
                              04131 / 99 220 600
                            </a>
                          </p>
                          <p>
                            <span className="font-medium">{t('impressum.email')}</span>{' '}
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
                      <User className="w-5 h-5 mr-2 text-blue-600" />
                      {t('impressum.representative')}
                    </h3>
                    <p className="text-gray-600 pl-7">
                      {t('impressum.representativeTitle')}{' '}
                      <span className="font-semibold text-gray-800">
                        {t('impressum.representativeName')}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  {t('impressum.moreInfo')}
                </h3>
                <div className="space-y-3">
                  <a
                    href="/datenschutz"
                    className="flex items-center text-blue-700 hover:text-blue-900 transition-colors p-2 rounded-lg hover:bg-blue-100"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    {t('impressum.privacyPolicy')}
                  </a>
                  <a
                    href="https://www.bbs1-lueneburg.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-700 hover:text-blue-900 transition-colors p-2 rounded-lg hover:bg-blue-100"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {t('impressum.officialWebsite')}
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {t('impressum.legalNotices')}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t('impressum.legalNoticesText')}
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
