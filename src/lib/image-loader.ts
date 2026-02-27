export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  // avoid double-prefixing if src already starts with base
  if (base && src.startsWith(base)) return src;
  return `${base}${src}`;
}
