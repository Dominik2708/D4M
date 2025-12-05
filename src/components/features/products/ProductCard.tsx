import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  title: string;
  description: string;
  price?: string;
  category?: string;
  gradientFrom: string;
  gradientTo: string;
  features?: string[];
}

export function ProductCard({
  title,
  description,
  price,
  category,
  gradientFrom,
  gradientTo,
  features = [],
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`h-48 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative`}>
        {category && (
          <Badge className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white border-white/20">
            {category}
          </Badge>
        )}
        {price && (
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
            <span className="font-bold text-gray-900">{price}</span>
          </div>
        )}
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-600 leading-relaxed">{description}</CardDescription>
      </CardHeader>

      {features.length > 0 && (
        <CardContent className="pt-0 pb-4">
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>
      )}

      <CardFooter>
        <Button variant="outline" className="w-full">
          Mehr erfahren
        </Button>
      </CardFooter>
    </Card>
  );
}
