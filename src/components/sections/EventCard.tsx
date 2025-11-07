import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  bgColor: string;
  iconColor: string;
}

export function EventCard({ title, date, location, bgColor, iconColor }: EventCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className={`${bgColor} rounded-lg p-3`}>
          <Calendar className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{date}</p>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
    </div>
  );
}
