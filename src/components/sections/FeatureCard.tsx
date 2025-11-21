import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor,
}: FeatureCardProps) {
  return (
    <div className="text-center p-6">
      <div
        className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
      >
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
