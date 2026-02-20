'use client';

import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Brain } from 'lucide-react';

const icons = [Brain, Award, Users];

export function AboutSection() {
  const { t } = useTranslation();
  const points = t('about.points', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.title')}</h2>
          <p className="text-gray-600 text-lg">{t('about.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardContent className="p-8 text-center">
                <Users className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('about.schoolLabel')}</h3>
                <p className="text-gray-600">{t('about.schoolSub')}</p>
              </CardContent>
            </Card>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{t('about.descriptionP1')}</p>
              <p>{t('about.descriptionP2')}</p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {points.map((point, index) => {
            const Icon = icons[index];
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-lg p-3 w-fit mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{point.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-blue-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('about.missionTitle')}</h3>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed">
            <p>{t('about.missionP1')}</p>
            <p className="font-semibold">
              <strong>{t('about.missionP2Goal')}</strong> {t('about.missionP2')}
            </p>
            <p>{t('about.missionP3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
