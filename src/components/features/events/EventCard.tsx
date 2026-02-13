import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location: string;
  type?: string;
  description?: string;
}

export function EventCard({ title, date, time, location, type, description }: EventCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl leading-tight text-gray-900 font-bold">{title}</CardTitle>
          {type && (
            <Badge variant="secondary" className="flex-shrink-0 bg-blue-50 text-blue-700">
              {type}
            </Badge>
          )}
        </div>
        {description && <p className="text-gray-600 text-sm leading-relaxed font-normal">{description}</p>}
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-gray-700 font-normal">
          <div className="bg-blue-50 rounded-lg p-2">
            <Calendar className="w-4 h-4 text-blue-600" aria-hidden="true" />
          </div>
          <span>{date}</span>
        </div>

        {time && (
          <div className="flex items-center gap-3 text-sm text-gray-700 font-normal">
            <div className="bg-green-50 rounded-lg p-2">
              <Clock className="w-4 h-4 text-green-600" aria-hidden="true" />
            </div>
            <span>{time}</span>
          </div>
        )}

        <div className="flex items-center gap-3 text-sm text-gray-700 font-normal">
          <div className="bg-purple-50 rounded-lg p-2">
            <MapPin className="w-4 h-4 text-purple-600" aria-hidden="true" />
          </div>
          <span>{location}</span>
        </div>
      </CardContent>
    </Card>
  );
}
