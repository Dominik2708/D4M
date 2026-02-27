'use client';

import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

const categoryMeta = [
  {
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-blue-600',
    images: [
      '/images/plastic/keychain_1.jpeg',
      '/images/plastic/keychain_2.jpeg',
      '/images/plastic/keychain_3.jpeg',
      '/images/plastic/keychain_4.jpeg',
    ],
  },
  {
    gradientFrom: 'from-amber-400',
    gradientTo: 'to-orange-600',
    images: [
      '/images/wood/birdhouse_1.jpeg',
      '/images/wood/jewlerycase_1.jpeg',
      '/images/wood/keyholder_1.jpeg',
      '/images/wood/pictureframe_1.jpeg',
    ],
  },
];

export function ProductsSection() {
  const { t } = useTranslation();
  const categories = t('productsSection.categories', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    category: string;
    features: string[];
  }>;

  return (
    <section id="produkte" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('productsSection.title')}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {t('productsSection.subtitle')}
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const meta = categoryMeta[categoryIndex];
            return (
              <div key={categoryIndex} className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <div
                    className={`inline-block bg-gradient-to-r ${meta.gradientFrom} ${meta.gradientTo} text-white px-6 py-2 rounded-full mb-4`}
                  >
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="grid grid-cols-2 gap-4">
                    {meta.images.map((image, imageIndex) => (
                      <Card
                        key={imageIndex}
                        className="overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="aspect-square relative">
                          <Image
                            src={image}
                            alt={`${category.category} ${t('productsSection.productAlt')} ${imageIndex + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {t('productsSection.servicesTitle')}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {category.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {categoryIndex === 0 && (
                      <>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {t('productsSection.noteTitle')}
                          </h4>
                          <p className="text-gray-700 text-sm">{t('productsSection.noteText')}</p>
                        </div>
                        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {t('productsSection.customTitle')}
                          </h4>
                          <p className="text-gray-700 text-sm">
                            {t('productsSection.customText')}{' '}
                            <Link
                              href="#contact"
                              className="font-semibold text-blue-600 underline"
                            >
                              {t('productsSection.customLinkText')}
                            </Link>
                            .
                          </p>
                        </div>
                      </>
                    )}

                    {categoryIndex === 1 && (
                      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {t('productsSection.coopTitle')}
                        </h4>
                        <p className="text-gray-700 text-sm">{t('productsSection.coopText')}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
