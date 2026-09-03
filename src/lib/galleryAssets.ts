// Todas las imágenes de src/assets/gallery/ resueltas a URL con hash en build.
// Compartido entre la sección Galería y el explorador de proyectos.
const assets = import.meta.glob(
  '../assets/gallery/*.{png,jpg,jpeg,webp,avif,svg}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>

export function resolveGalleryUrl(file: string): string | undefined {
  const hit = Object.entries(assets).find(([path]) => path.endsWith(`/${file}`))
  if (!hit && import.meta.env.DEV) {
    console.warn(`[gallery] no se encontró src/assets/gallery/${file}`)
  }
  return hit?.[1]
}
