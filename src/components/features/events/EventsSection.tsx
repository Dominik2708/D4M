'use client';

import { useTranslation } from 'react-i18next';
import { EventCard } from './EventCard';

export function EventsSection() {
  const { t } = useTranslation();
  const items = t('events.items', { returnObjects: true }) as Array<{
    title: string;
    date: string;
    time: string;
    location: string;
    type: string;
    description: string;
  }>;

  return (
    <section id="termine" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('events.title')}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('events.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {items.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {/* Competition Details */}
        <div className="mt-16 space-y-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {t('events.messeTitle')}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t('events.messeText')}
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('events.summerTitle')}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t('events.summerText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
