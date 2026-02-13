'use client';
import { useRef } from 'react';

const SCHOOL_COORDINATES = [53.2478897, 10.423409]; // [lat, lng] from the provided URL

interface LocationMapProps {
  className?: string;
}

export function LocationMap({ className = '' }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  const embedUrl = `https://maps.google.com/maps?q=${SCHOOL_COORDINATES[0]},${SCHOOL_COORDINATES[1]}&hl=de&z=16&output=embed`;

  return (
    <div ref={mapRef} className={`relative ${className}`} style={{ minHeight: '300px' }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{
          border: '1px solid #e5e7eb',
          borderRadius: '0.5rem',
          minHeight: 300,
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="BBS I Lüneburg Lageplan"
      ></iframe>
    </div>
  );
}
