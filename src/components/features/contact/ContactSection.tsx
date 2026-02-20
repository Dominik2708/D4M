'use client';

import { useTranslation } from 'react-i18next';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import { DynamicLocationMap } from './DynamicLocationMap';

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('contact.formTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('contact.formSubtitle')}
              </p>
              <ContactForm />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('contact.infoTitle')}</h3>
              <p className="text-gray-600 mb-6">{t('contact.infoSubtitle')}</p>
              <ContactInfo />
            </div>

            {/* Location Map */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">{t('contact.mapTitle')}</h4>
              <div className="h-96">
                <DynamicLocationMap className="h-full" />
              </div>

              {/* Directions Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">{t('contact.directionsTitle')}</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="font-medium mb-1">🚗 {t('contact.byCar')}</p>
                    <p>{t('contact.byCarText')}</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">🚌 {t('contact.byPublic')}</p>
                    <p>{t('contact.byPublicText')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
