import { CheckCircle, Users, Package } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function FeaturesSection() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Qualität garantiert',
      description: 'Alle unsere Produkte werden mit größter Sorgfalt und unter fachkundiger Anleitung hergestellt',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Users,
      title: 'Teamarbeit',
      description: 'Unser engagiertes Team arbeitet Hand in Hand, um die besten Ergebnisse zu erzielen',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Package,
      title: 'Vielfältiges Sortiment',
      description: 'Von handgefertigten Artikeln bis zu digitalen Produkten - wir haben für jeden etwas dabei',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
