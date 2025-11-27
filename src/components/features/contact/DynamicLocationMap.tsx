'use client';
import dynamic from 'next/dynamic';

export const DynamicLocationMap = dynamic(
  () => import('./LocationMap').then(mod => mod.LocationMap),
  {
    ssr: false,
  }
);
