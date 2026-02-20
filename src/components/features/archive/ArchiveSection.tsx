'use client';

import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, Users, FileText, Wrench } from 'lucide-react';

interface ArchiveItem {
  title: string;
  date: string;
  category: string;
  description: string;
  achievement?: string;
}

const typeMap: Record<string, { type: string }> = {
  '3D-Druck': { type: 'project' },
  '3D Printing': { type: 'project' },
  'Kooperation': { type: 'project' },
  'Cooperation': { type: 'project' },
  'Bildung': { type: 'success' },
  'Education': { type: 'success' },
  'Meilenstein': { type: 'milestone' },
  'Milestone': { type: 'milestone' },
  'Ausstattung': { type: 'equipment' },
  'Equipment': { type: 'equipment' },
};

const getIcon = (type: string) => {
  switch (type) {
    case 'project':
      return FileText;
    case 'success':
      return Award;
    case 'milestone':
      return Calendar;
    case 'equipment':
      return Wrench;
    default:
      return FileText;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'project':
      return 'bg-blue-100 text-blue-800';
    case 'success':
      return 'bg-green-100 text-green-800';
    case 'milestone':
      return 'bg-purple-100 text-purple-800';
    case 'equipment':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export function ArchiveSection() {
  const { t } = useTranslation();
  const archiveItems = t('archive.items', { returnObjects: true }) as ArchiveItem[];

  // Sort by year (most recent first)
  const sortedItems = [...archiveItems].sort(
    (a, b) => new Date(b.date).getFullYear() - new Date(a.date).getFullYear()
  );

  // Group by year
  const itemsByYear = sortedItems.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {} as Record<number, ArchiveItem[]>);

  return (
    <section id="archive" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('archive.title')}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {t('archive.subtitle')}
          </p>
        </div>

        {/* Archive Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 flex-wrap">
            <Badge variant="outline" className="text-blue-700 border-blue-300">
              {t('archive.badgeProjects')}
            </Badge>
            <Badge variant="outline" className="text-green-700 border-green-300">
              {t('archive.badgeSuccesses')}
            </Badge>
            <Badge variant="outline" className="text-orange-700 border-orange-300">
              {t('archive.badgeDocuments')}
            </Badge>
          </div>
        </div>

        {/* Timeline by Year */}
        {Object.entries(itemsByYear).map(([year, items]) => (
          <div key={year} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('archive.projectsYear', { year })}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => {
                const itemType = typeMap[item.category]?.type || 'project';
                const Icon = getIcon(itemType);
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-gray-100 rounded-lg p-2">
                            <Icon className="w-5 h-5 text-gray-600" />
                          </div>
                          <Badge className={getTypeColor(itemType)}>{item.category}</Badge>
                        </div>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      {item.achievement && (
                        <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                          <p className="text-green-700 text-sm font-medium">{item.achievement}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}

        {/* Archive Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-600">
            {t('archive.footer')}
          </p>
        </div>
      </div>
    </section>
  );
}
