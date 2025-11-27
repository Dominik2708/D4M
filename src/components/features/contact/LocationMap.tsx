'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix default marker icon issue in Leaflet with Webpack/Next.js
// Fix default marker icon issue in Leaflet with Webpack/Next.js
// und setze Markerfarbe auf Accent-Farbe aus CSS-Variable
function fixLeafletIcon(accentColor: string) {
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl;
  // Custom SVG Marker mit Accent-Farbe
  const svg = encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='48' viewBox='0 0 32 48' fill='none'>
      <path d='M16 0C7.163 0 0 7.163 0 16c0 11.046 16 32 16 32s16-20.954 16-32C32 7.163 24.837 0 16 0z' fill='${accentColor}'/>
      <circle cx='16' cy='16' r='7' fill='white'/>
    </svg>
  `);
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: `data:image/svg+xml,${svg}`,
    iconUrl: `data:image/svg+xml,${svg}`,
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [32, 48],
    iconAnchor: [16, 48],
    popupAnchor: [0, -48],
    shadowSize: [41, 41],
    shadowAnchor: [13, 41],
  });
}

const SCHOOL_COORDINATES: [number, number] = [53.24795065882927, 10.423301708984884]; // [lat, lng]

interface LocationMapProps {
  className?: string;
}

import { useRef } from 'react';
export function LocationMap({ className = '' }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let accent = '#facc15'; // Default fallback
    if (typeof window !== 'undefined') {
      const style = getComputedStyle(document.documentElement);
      accent = style.getPropertyValue('--color-accent').trim() || accent;
    }
    fixLeafletIcon(accent);
  }, []);

  return (
    <div ref={mapRef} className={`relative ${className}`} style={{ minHeight: '300px' }}>
      <MapContainer
        center={SCHOOL_COORDINATES as [number, number]}
        zoom={16}
        scrollWheelZoom={false}
        style={{
          width: '100%',
          height: '100%',
          minHeight: 300,
          borderRadius: '0.5rem',
          border: '1px solid #e5e7eb',
          zIndex: 1,
        }}
        attributionControl={true}
      >
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={SCHOOL_COORDINATES as [number, number]}>
          <Popup>
            <div className="p-1">
              <h3 className="font-semibold text-primary mb-1">BBS I Lüneburg</h3>
              <p className="text-muted-foreground text-xs mb-1">Spillbrunnenweg 1</p>
              <p className="text-muted-foreground text-xs mb-2">21335 Lüneburg</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=53.2492,10.4135"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--color-primary)',
                  color: 'var(--color-primary-foreground, #fff)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.375rem',
                  fontSize: '0.85em',
                  fontWeight: 500,
                  display: 'inline-block',
                  transition: 'background 0.2s',
                  textDecoration: 'none',
                }}
                onMouseOver={e => (e.currentTarget.style.background = 'var(--color-accent)')}
                onMouseOut={e => (e.currentTarget.style.background = 'var(--color-primary)')}
              >
                Route planen
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
