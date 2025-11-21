import { Button } from '../ui/button';

interface ProductCardProps {
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

export default function ProductCard({
  title,
  description,
  gradientFrom,
  gradientTo,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className={`h-48 bg-gradient-to-br ${gradientFrom} ${gradientTo}`}></div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline" className="w-full">
          Mehr erfahren
        </Button>
      </div>
    </div>
  );
}
