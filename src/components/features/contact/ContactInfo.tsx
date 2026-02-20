'use client';

import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function ContactInfo() {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: Mail,
      title: t('contact.info.email'),
      content: 'schuelerunternehmen@bbs1.de',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      content: '04131 99220600',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: MapPin,
      title: t('contact.info.address'),
      content: t('contact.info.addressContent'),
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      isMultiline: true,
    },
  ];

  return (
    <div className="space-y-4">
      {contactItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index} className="transition-shadow hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className={`${item.bgColor} rounded-lg p-3 flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <div className="text-gray-600 text-sm leading-relaxed">
                    {item.isMultiline
                      ? String(item.content)
                          .split('\n')
                          .map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < String(item.content).split('\n').length - 1 && <br />}
                            </span>
                          ))
                      : item.content}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
